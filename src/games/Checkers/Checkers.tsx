import { Suspense, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { useBox } from '@react-three/cannon';
import { CheckersPieceConfig, checkersPiecePositions } from './checkersUtils';

import CheckersPiece from './CheckersPiece';
import boardMap from '../../assets/chess-board-art.jpeg';

const Checkers = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [boardRef] = useBox(() => ({
    mass: 1,
    args: [50, 50, 1],
    rotation: [-Math.PI / 2, 0, 0],
    type: 'Static',
  }));
  const { camera } = useThree();
  const texture = useTexture(boardMap);

  return (
    <Suspense fallback={null}>
      <mesh
        receiveShadow
        //  @ts-ignore
        ref={boardRef}
      >
        <boxGeometry args={[50, 50, 1]} />
        <meshLambertMaterial map={texture} />
      </mesh>
      {checkersPiecePositions.map((row: CheckersPieceConfig[]) =>
        row.map((piece, i) =>
          piece?.position ? (
            <CheckersPiece
              key={i}
              isDragging={isDragging}
              setIsDragging={setIsDragging}
              position={piece?.position as [number, number, number]}
              color={piece?.color}
            />
          ) : null
        )
      )}
      <OrbitControls camera={camera} maxZoom={200} minZoom={30} enabled={!isDragging} />
    </Suspense>
  );
};

export default Checkers;
