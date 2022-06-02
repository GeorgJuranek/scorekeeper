import "./App.css";
import Button from "./Button.js";
import Player from "./Player.js";
import Heading from "./Heading.js";
import PlayerForm from "./PlayerForm.js";

function App() {
  return (
    <div className="App">
      <Heading headtext="Scorekeeper Version A" />
      <Player text="John Doe" score={20} />
      <Player text="Dorian Jones" score={30} />
      <Button text="Reset scores" />
      <Button text="New game" />
      <PlayerForm />
    </div>
  );
}

export default App;
