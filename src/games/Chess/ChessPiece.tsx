import { Suspense } from 'react';
import DraggableMesh from '../../components/DraggableMesh';
import { useCylinder } from '@react-three/cannon';
import useObjectInteractions, {
  InteractionTypes,
} from '../../hooks/useObjectInteractions';
import { getNearestBoardPosition } from '../Checkers/checkersUtils';

export enum ChessPieceNodeKey {
  Bishop = 'Object_4',
  King = 'Object_6',
  Pawn = 'Object_8',
  Queen = 'Object_10',
  Rook = 'Object_12',
  Knight = 'Object_14',
}

interface ChessPieceProps {
  pieceProps: any;
  isDragging: boolean;
  setIsDragging: (isDragging: boolean) => void;
  geometry: any;
  material: any;
}

const ChessPiece = ({
  pieceProps,
  isDragging,
  setIsDragging,
  geometry,
  material,
}: ChessPieceProps) => {
  const [pieceRef, pieceApi] = useCylinder(() => ({
    mass: 1,
    position: pieceProps.position,
    args: [pieceProps.scale, pieceProps.scale, 0.65],
  }));

  const setShouldInteract = useObjectInteractions({
    enabledInteractions: [InteractionTypes.Rotate],
    objectRef: pieceRef,
    objectApi: pieceApi,
    isDragging,
  });

  return (
    <Suspense>
      <group rotation={[0, 0, 0]}>
        <DraggableMesh
          initialPosition={pieceProps.position}
          objApi={pieceApi}
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
          isDragging={isDragging}
          meshProps={{
            ...pieceProps,
            receiveShadow: true,
            castShadow: true,
            ref: pieceRef,
            geometry,
            material,
            'material-color': pieceProps.color,
          }}
        />
      </group>
    </Suspense>
  );
};

export default ChessPiece;
