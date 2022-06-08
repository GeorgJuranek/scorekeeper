import "./App.css";
import { useEffect, useState } from "react";
import Button from "./Button.js";
import Player from "./Player.js";
import Heading from "./Heading.js";
import PlayerForm from "./PlayerForm.js";
import { getFromLocal, setToLocal } from "./lib/localStorage";

function App() {
  const [players, setPlayers] = useState(getFromLocal("players") ?? []);
  useEffect(() => setToLocal("players", players), [players]);

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

  function resetScores() {
    setPlayers(
      players.map((player) => {
        return { ...player, score: 0 };
      })
    );
  }

  function resetAllPlayers() {
    setPlayers([]);
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
      <Button
        onButtonFunction={resetScores}
        text="Reset scores"
        buttonType="reset"
      />
      <Button onButtonFunction={resetAllPlayers} text="New game" />

      <PlayerForm onCreatePlayer={createPlayer} />
    </div>
  );
}

export default App;
