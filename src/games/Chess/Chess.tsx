import { Suspense, useState } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';

import { useFrame, useThree } from '@react-three/fiber';
import ChessPiece from './ChessPiece';
import CheckeredBoard from '../../components/CheckeredBoard';
import { update } from '@tweenjs/tween.js';
import { chessPiecePositions } from './chessUtils';

const Chess = () => {
  const [isDragging, setIsDragging] = useState(false);
  // @ts-ignore
  const { nodes, materials } = useGLTF(`/objects/chess_pieces/scene.glb`);
  const { camera } = useThree();

  useFrame(() => {
    update();
  });

  return (
    <Suspense fallback={<>Loading...</>}>
      <CheckeredBoard />
      {chessPiecePositions.map(({ position, key, color }, i) => (
        <ChessPiece
          key={`${key}${i}`}
          geometry={nodes[key].geometry}
          material={materials.White}
          isDragging={isDragging}
          setIsDragging={setIsDragging}
          pieceProps={{
            scale: 0.35,
            position,
            color,
          }}
        />
      ))}
      <OrbitControls camera={camera} maxZoom={200} minZoom={30} enabled={!isDragging} />
    </Suspense>
  );
};

export default Chess;
