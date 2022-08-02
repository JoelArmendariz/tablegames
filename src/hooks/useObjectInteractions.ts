import { PublicApi } from '@react-three/cannon';
import { Tween } from '@tweenjs/tween.js';
import { useCallback, useEffect, useState } from 'react';
import { Tuple } from '../types/CommonTypes';
import useEvents from './useEvents';

export enum InteractionTypes {
  Rotate,
  Flip,
  Banish,
}

interface ObjectInteractions {
  enabledInteractions: InteractionTypes[];
  rotation?: Tuple;
  isDragging?: boolean;
  objectApi: PublicApi;
  objectRef: any;
  getSnapPosition?: (position: Tuple) => Tuple;
}

const useObjectInteractions = ({
  enabledInteractions,
  rotation: initialRotation = [0, 0, 0],
  objectRef,
  objectApi,
  isDragging,
  getSnapPosition = v => v,
}: ObjectInteractions) => {
  const [rotation, setRotation] = useState(initialRotation);
  const [shouldInteract, setShouldInteract] = useState(false);

  const handleKeydown = useCallback(
    ({ key }: KeyboardEvent) => {
      const currentRotation: [number, number, number] = [...rotation];
      if (
        key === 'f' &&
        shouldInteract &&
        enabledInteractions.includes(InteractionTypes.Flip)
      ) {
        if (objectRef.current) {
          if (!isDragging) {
            objectApi.sleep();
            const raisedPosition: Tuple = [
              objectRef.current.position.x,
              0.6,
              objectRef.current.position.z,
            ];

            objectApi.position.set(...getSnapPosition(raisedPosition));
            objectRef.current.position.set(...getSnapPosition(raisedPosition));
          }
          new Tween(currentRotation)
            .to(
              [currentRotation[0], currentRotation[1], currentRotation[2] + Math.PI],
              200
            )
            .onUpdate(() => {
              objectRef.current?.rotation.set(...currentRotation);
              objectApi.rotation.set(...currentRotation);
            })
            .start();
          if (!isDragging) {
            objectApi.wakeUp();
          }
          setRotation([rotation[0], rotation[1], rotation[2] + Math.PI]);
        }
      }
      if (
        key === 'r' &&
        shouldInteract &&
        enabledInteractions.includes(InteractionTypes.Rotate)
      ) {
        if (objectRef.current) {
          new Tween(currentRotation)
            .to(
              [currentRotation[0], currentRotation[1] + Math.PI / 2, currentRotation[2]],
              200
            )
            .onUpdate(() => {
              objectRef.current?.rotation.set(...currentRotation);
              objectApi.rotation.set(...currentRotation);
            })
            .start();
          setRotation([rotation[0], rotation[1] + Math.PI, rotation[2]]);
        }
      }
    },
    [
      enabledInteractions,
      getSnapPosition,
      isDragging,
      objectApi,
      objectRef,
      rotation,
      shouldInteract,
    ]
  );

  useEvents([
    {
      event: 'keydown',
      callback: handleKeydown,
    },
  ]);

  return setShouldInteract;
};

export default useObjectInteractions;
