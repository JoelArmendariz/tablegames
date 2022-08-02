import { Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import { CameraPositions } from '../../types/CommonTypes';
import Table from '../Table';
import './ui.css';

const GamePreview = () => {
  return (
    <div className="ui--game-preview">
      <Canvas
        style={{ borderRadius: 8 }}
        camera={{ fov: 50, position: CameraPositions.menu }}
      >
        <color attach="background" args={['aqua']}></color>
        <ambientLight />
        <directionalLight position={[0, 60, 0]} />
        <Physics>
          <Table />
        </Physics>
      </Canvas>
    </div>
  );
};

export default GamePreview;
