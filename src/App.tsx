import Game from './Game';
import MainMenu from './components/ui/MainMenu';
import { CurrentGameProvider } from './context/CurrentGame/CurrentGameProvider';
import './App.css';
import { CurrentGameContext, Games } from './context/CurrentGame/CurrentGameContext';

const App = () => (
  <CurrentGameProvider>
    <div className="App">
      <CurrentGameContext.Consumer>
        {({ currentGame }) =>
          currentGame === Games.None ? <MainMenu /> : <Game currentGame={currentGame} />
        }
      </CurrentGameContext.Consumer>
    </div>
  </CurrentGameProvider>
);

export default App;
