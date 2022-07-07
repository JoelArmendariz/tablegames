import { useCylinder } from '@react-three/cannon';
import { useState } from 'react';
import DraggableMesh from '../../components/DraggableMesh';
import { getNearestBoardPosition } from './checkersUtils';
import checkersMap from '../../assets/checkers_PNG18.png';
import boardMap from '../../assets/chess-board-art.jpeg';
import { useTexture } from '@react-three/drei';
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
  const [shouldInteract, setShouldInteract] = useState(false);
  const [pieceRef, pieceApi] = useCylinder(() => ({
    mass: 1,
    position,
    args: [0.5, 0.5, 0.2],
  }));
  const texture1 = useTexture(checkersMap);
  const texture2 = useTexture(boardMap);

  useObjectInteractions({
    enabledInteractions: [InteractionTypes.Rotate, InteractionTypes.Flip],
    shouldInteract,
    objectRef: pieceRef,
    objectApi: pieceApi,
    isDragging,
    getSnapPosition: getNearestBoardPosition,
  });

  return (
    <DraggableMesh
      initialPosition={position}
      onHoverCallback={({ hovering }) => {
        setShouldInteract(!!hovering);
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
      }}
    >
      <cylinderGeometry args={[0.35, 0.35, 0.2, 35]} />
      <meshLambertMaterial map={texture2} />
      <meshLambertMaterial map={texture1} />
    </DraggableMesh>
  );
};

export default CheckersPiece;
