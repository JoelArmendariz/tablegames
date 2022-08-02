import { useCallback } from 'react';
import { Physics } from '@react-three/cannon';
import { useContextBridge } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { CurrentGameContext, Games } from './context/CurrentGame/CurrentGameContext';
import { CameraPositions } from './types/CommonTypes';

import Table from './components/Table';
import Checkers from './games/Checkers/Checkers';
import Chess from './games/Chess/Chess';

const Game = ({ currentGame }: { currentGame: Games }) => {
  // Needed so that we can consume context from within the game Canvas
  const ContextBridge = useContextBridge(CurrentGameContext);

  const renderGame = useCallback(() => {
    switch (currentGame) {
      case Games.Chess:
        return <Chess />;
      case Games.Checkers:
        return <Checkers />;
    }
  }, [currentGame]);

  return (
    <Canvas
      style={{ cursor: 'grab' }}
      shadows
      camera={{ fov: 50, position: CameraPositions.play }}
    >
      <ContextBridge>
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
          {renderGame()}
        </Physics>
      </ContextBridge>
    </Canvas>
  );
};

export default Game;
