import { useCylinder } from '@react-three/cannon';
import { useState } from 'react';
import DraggableMesh from '../../components/DraggableMesh';
import { getNearestBoardPosition } from './checkersUtils';
import useObjectInteractions, {
  InteractionTypes,
} from '../../hooks/useObjectInteractions';

interface CheckersProps {
  position: [number, number, number];
  setIsDragging: (isDragging: boolean) => void;
  isDragging: boolean;
  color: string;
}

const CheckersPiece = ({ position, setIsDragging, isDragging, color }: CheckersProps) => {
  const [pieceRef, pieceApi] = useCylinder(() => ({
    mass: 1,
    position,
    args: [0.5, 0.5, 0.2],
  }));

  const setShouldInteract = useObjectInteractions({
    enabledInteractions: [InteractionTypes.Rotate, InteractionTypes.Flip],
    objectRef: pieceRef,
    objectApi: pieceApi,
    isDragging,
    getSnapPosition: getNearestBoardPosition,
  });

  return (
    <DraggableMesh
      initialPosition={position}
      onHoverCallback={({ hovering }) => {
        setShouldInteract(!!hovering && !isDragging);
      }}
      onDragCallback={({ active }) => {
        setIsDragging(active);
      }}
      onDragStopCallback={({ dragProps: { dragApi }, position }: any) => {
        const nearestPosition = getNearestBoardPosition(position);
        pieceApi.position.set(...nearestPosition);
        dragApi.start({
          position: nearestPosition,
        });
      }}
      objApi={pieceApi}
      isDragging={isDragging}
      meshProps={{
        receiveShadow: true,
        castShadow: true,
        ref: pieceRef,
        rotation: [-Math.PI / 2, 0, 0],
      }}
    >
      <cylinderGeometry args={[0.35, 0.35, 0.2, 35]} />
      <meshLambertMaterial color={color} />
    </DraggableMesh>
  );
};

export default CheckersPiece;
