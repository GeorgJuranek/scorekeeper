import "./PlayerForm.css";
import { nanoid } from "nanoid";

export default function PlayerForm({ onCreatePlayer }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { addPlayer: addPlayerInput } = form.elements;
    const newPlayer = { id: nanoid(), name: addPlayerInput.value, score: 0 };
    onCreatePlayer(newPlayer);
    form.reset();
    addPlayerInput.focus();
  }

  return (
    <form aria-labelledby="newPlayer" onSubmit={handleSubmit}>
      <label htmlFor="addPlayer">
        Add Player
        <input id="addPlayer" name="addPlayer" />
      </label>
      <button>submit</button>
    </form>
  );
}
