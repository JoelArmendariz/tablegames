import { Suspense, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { checkersPiecePositions } from './checkersUtils';

import CheckersPiece from './CheckersPiece';
import { update } from '@tweenjs/tween.js';
import CheckeredBoard from '../../components/CheckeredBoard';
import { CheckersPieceConfig } from '../../types/checkersTypes';

const Checkers = () => {
  const [isDragging, setIsDragging] = useState(false);
  const { camera } = useThree();

  useFrame(() => {
    update();
  });

  return (
    <Suspense fallback={null}>
      <CheckeredBoard />
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
