import { useCylinder } from '@react-three/cannon';
import DraggableMesh from '../../components/DraggableMesh';
import { getNearestBoardPosition } from './checkersUtils';

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
    args: [2, 2, 1],
  }));

  return (
    <DraggableMesh
      initialPosition={position}
      onDragCallback={({ active }) => {
        setIsDragging(active);
      }}
      onDragStopCallback={({ dragProps: { dragApi }, position }: any) => {
        const newPos = getNearestBoardPosition(position);
        pieceApi.position.set(...(newPos as [number, number, number]));
        dragApi.start({
          position: newPos,
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
      <cylinderGeometry args={[2, 2, 1, 35]} />
      <meshLambertMaterial color={color} />
    </DraggableMesh>
  );
};

export default CheckersPiece;
