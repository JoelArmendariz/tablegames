import { createContext } from 'react';

interface GameUIContextState {
  registerGame: () => void;
}

const GameUIContext = createContext<GameUIContextState>({} as GameUIContextState);

const useGameUI = () => {};

export default useGameUI;
