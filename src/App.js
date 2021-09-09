import "./App.scss";

import Scoreboard from "./components/ScoreBoard";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <main>
        <Title content="ScoreBoard" />
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
