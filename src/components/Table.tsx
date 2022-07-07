import { Suspense } from 'react';
import { useTexture } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

import tableMap from '../assets/table_wood_texture.jpeg';

const Table = () => {
  const [tableRef] = useBox(() => ({
    mass: 1,
    args: [15, 0.3, 15],
    position: [0, -0.2, 0],
    type: 'Static',
  }));
  const texture = useTexture(tableMap);

  return (
    <Suspense fallback={null}>
      <mesh
        receiveShadow
        //  @ts-ignore
        ref={tableRef}
      >
        <boxGeometry args={[15, 0.3, 15]} />
        <meshLambertMaterial map={texture} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[6, -5, -6]} receiveShadow>
        <boxGeometry args={[1, 1, 9.5]} />
        <meshLambertMaterial map={texture} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[-6, -5, 6]} receiveShadow>
        <boxGeometry args={[1, 1, 9.5]} />
        <meshLambertMaterial map={texture} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[6, -5, 6]} receiveShadow>
        <boxGeometry args={[1, 1, 9.5]} />
        <meshLambertMaterial map={texture} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[-6, -5, -6]} receiveShadow>
        <boxGeometry args={[1, 1, 9.5]} />
        <meshLambertMaterial map={texture} />
      </mesh>
    </Suspense>
  );
};

export default Table;
