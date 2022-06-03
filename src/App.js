import "./App.css";
import { useState } from "react";
import Button from "./Button.js";
import Player from "./Player.js";
import Heading from "./Heading.js";
import PlayerForm from "./PlayerForm.js";

function App() {
  const [players, setPlayers] = useState([]);

  function createPlayer(newPlayer) {
    setPlayers([...players, newPlayer]);
  }

  function increaseScore(index) {
    const currentPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ]);
  }

  function decreaseScore(index) {
    const currentPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score - 1 },
      ...players.slice(index + 1),
    ]);
  }

  return (
    <div className="App">
      <Heading headtext="Scorekeeper Version A" />
      <h2>Players:</h2>
      {players.map((player, index) => (
        <Player
          index={index}
          key={player.name}
          name={player.name}
          score={player.score}
          onAddScore={increaseScore}
          onSubtractScore={decreaseScore}
        />
      ))}
      <Button text="Reset scores" />
      <Button text="New game" />

      <PlayerForm onCreatePlayer={createPlayer} />
    </div>
  );
}

export default App;
