import { Suspense, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { useBox } from '@react-three/cannon';
import { CheckersPieceConfig, checkersPiecePositions } from './checkersUtils';

import CheckersPiece from './CheckersPiece';
import boardMap from '../../assets/chess-board-art.jpeg';
import { update } from '@tweenjs/tween.js';

const Checkers = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [boardRef] = useBox(() => ({
    mass: 1,
    args: [10, 0.1, 10],
    type: 'Static',
  }));
  const { camera } = useThree();
  const texture = useTexture(boardMap);

  useFrame(() => {
    update();
  });

  return (
    <Suspense fallback={null}>
      <mesh
        receiveShadow
        //  @ts-ignore
        ref={boardRef}
      >
        <boxGeometry args={[10, 0.1, 10]} />
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
