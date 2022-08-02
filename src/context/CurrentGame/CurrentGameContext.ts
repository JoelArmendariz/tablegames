import React from 'react';

export enum Games {
  None,
  Chess,
  Checkers,
}

interface CurrentGameState {
  currentGame: Games;
  setCurrentGame: (game?: Games) => void;
  dragElevation: number;
}

export const CurrentGameContext = React.createContext<CurrentGameState>({
  currentGame: Games.None,
  setCurrentGame: () => {},
  dragElevation: 1,
} as CurrentGameState);
