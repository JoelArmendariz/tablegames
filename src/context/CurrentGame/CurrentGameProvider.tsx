import { useCallback, useContext, useMemo, useState } from 'react';
import { CurrentGameContext, Games } from './CurrentGameContext';

export const CurrentGameProvider = ({ children }: { children: JSX.Element }) => {
  const [currentGame, setCurrentGame] = useState(Games.None);

  const handleSetCurrentGame = (game?: Games) => {
    setCurrentGame(game || Games.Checkers);
  };

  const getDragElevation = useCallback(() => {
    switch (currentGame) {
      case Games.Chess:
        return 2;
      case Games.Checkers:
      default:
        return 1;
    }
  }, [currentGame]);

  const value = useMemo(
    () => ({
      currentGame,
      setCurrentGame: handleSetCurrentGame,
      dragElevation: getDragElevation(),
    }),
    [currentGame, getDragElevation]
  );

  return (
    <CurrentGameContext.Provider value={value}>{children}</CurrentGameContext.Provider>
  );
};

export const useCurrentGameContext = () => useContext(CurrentGameContext);
