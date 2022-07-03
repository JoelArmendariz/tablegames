import './App.css';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';

import Checkers from './games/Checkers/Checkers';

function App() {
  return (
    <div className="App">
      <Canvas shadows camera={{ fov: 50, position: [0, 35, 60] }}>
        <color attach="background" args={['lightblue']} />
        <ambientLight />
        <directionalLight castShadow position={[0, 60, 0]} />
        <Physics>
          <Checkers />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
