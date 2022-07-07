import './App.css';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';

import Table from './components/Table';
import Checkers from './games/Checkers/Checkers';

function App() {
  return (
    <div className="App">
      <Canvas shadows camera={{ fov: 50, position: [0, 8, 15] }}>
        <color attach="background" args={['lightblue']} />
        <ambientLight />
        <directionalLight
          castShadow
          shadow-camera-left={-30}
          shadow-camera-right={30}
          shadow-camera-top={30}
          shadow-camera-bottom={-30}
          position={[0, 60, 0]}
        />
        <Physics>
          <Table />
          <Checkers />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
