import { Games } from '../../context/CurrentGame/CurrentGameContext';
import { useCurrentGameContext } from '../../context/CurrentGame/CurrentGameProvider';
import GamePreview from './GamePreview';
import './ui.css';

const MainMenu = () => {
  const { setCurrentGame, currentGame } = useCurrentGameContext();
  return (
    <button onClick={() => setCurrentGame(Games.Chess)}>click</button>
    // <div className="ui--container">
    //   <div className="ui--menu">
    //     <GamePreview />
    //   </div>
    // </div>
  );
};

export default MainMenu;
