import useDraggable from '../hooks/useDraggable';
import { a } from '@react-spring/three';

import type { FullGestureState } from '@use-gesture/react';
import { PublicApi } from '@react-three/cannon';

interface DraggableMeshProps {
  meshProps: any;
  children?: any;
  onDragCallback?: (
    dragProps: Omit<FullGestureState<'drag'>, 'event'> & {
      event: PointerEvent | MouseEvent | TouchEvent | KeyboardEvent;
    }
  ) => void;
  onHoverCallback?: (
    dragProps: Omit<FullGestureState<'hover'>, 'event'> & {
      event: PointerEvent | MouseEvent | TouchEvent | KeyboardEvent;
    }
  ) => void;
  onDragStopCallback?: any;
  initialPosition: [number, number, number];
  objApi?: PublicApi;
  isDragging?: boolean;
}

const DraggableMesh = ({
  meshProps,
  children,
  onHoverCallback,
  onDragCallback,
  onDragStopCallback,
  objApi,
  initialPosition,
  isDragging,
}: DraggableMeshProps) => {
  const draggableProps = useDraggable({
    initialPosition,
    onHoverCallback,
    onDragCallback,
    onDragStopCallback,
    objApi,
    isDragging,
  });

  return (
    <a.mesh {...draggableProps} {...meshProps}>
      {children}
    </a.mesh>
  );
};

export default DraggableMesh;
