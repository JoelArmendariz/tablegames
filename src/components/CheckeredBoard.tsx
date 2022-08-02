import { useBox } from '@react-three/cannon';
import { useTexture } from '@react-three/drei';
import { Texture } from 'three';
import boardMap from '../assets/textures/chess-board-art.jpeg';

interface CheckeredBoardType {
  texture?: Texture | null;
}

const CheckeredBoard = ({ texture }: CheckeredBoardType) => {
  const [boardRef] = useBox(() => ({
    mass: 1,
    args: [10, 0.1, 10],
    type: 'Static',
  }));
  const defaultTexture = useTexture(boardMap);

  return (
    <mesh
      receiveShadow
      //  @ts-ignore
      ref={boardRef}
    >
      <boxGeometry args={[10, 0.1, 10]} />
      <meshLambertMaterial map={texture || defaultTexture} />
    </mesh>
  );
};

export default CheckeredBoard;
