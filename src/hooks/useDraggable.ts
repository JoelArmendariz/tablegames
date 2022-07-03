import { useState } from 'react';
import { useGesture } from '@use-gesture/react';
import { useSpring } from '@react-spring/three';
import * as THREE from 'three';

import type { FullGestureState } from '@use-gesture/react';
import { PublicApi } from '@react-three/cannon';

interface UseDraggable {
  initialPosition: [number, number, number];
  onDragCallback?: (
    dragProps: Omit<FullGestureState<'drag'>, 'event'> & {
      event: PointerEvent | MouseEvent | TouchEvent | KeyboardEvent;
    }
  ) => void;
  onDragStopCallback?: any;
  objApi?: PublicApi;
  isDragging?: boolean;
}

const useDraggable = ({
  initialPosition,
  onDragCallback,
  onDragStopCallback,
  objApi,
  isDragging,
}: UseDraggable) => {
  const [position, setPosition] = useState<[number, number, number]>(initialPosition);

  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const planeIntersectPoint = new THREE.Vector3();

  const [spring, api] = useSpring(() => ({
    position,
    scale: 1,
    rotation: [0, 0, 0],
    config: { friction: 10 },
  }));

  const bind = useGesture({
    onHover: ({ hovering, event }) => {
      event.stopPropagation();
      api.start({
        scale: hovering && !isDragging ? 1.1 : 1,
      });
    },
    onDrag: dragProps => {
      const { active, timeStamp, event } = dragProps;
      event.stopPropagation();
      if (active) {
        objApi?.sleep();
        // @ts-ignore
        event.ray.intersectPlane(floorPlane, planeIntersectPoint);
        setPosition([planeIntersectPoint.x, 3, planeIntersectPoint.z]);
        if (objApi) {
          objApi.position.set(planeIntersectPoint.x, 3, planeIntersectPoint.z);
        }
      } else {
        objApi?.wakeUp();
        onDragStopCallback({ dragProps: { ...dragProps, dragApi: api }, position });
      }

      onDragCallback?.(dragProps);

      api.start({
        position,
        scale: 1,
      });
      return timeStamp;
    },
  });

  return {
    ...bind(),
    ...spring,
    position,
  };
};

export default useDraggable;
