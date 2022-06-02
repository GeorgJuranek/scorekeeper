import "./PlayerForm.css";

export default function PlayerForm() {
  return (
    <form>
      <label htmlFor="newPlayer">
        Add Player
        <input id="newPlayer" />
      </label>
      <button onClick={addNewPlayerToArray()}>submit</button>
    </form>
  );
}

function addNewPlayerToArray() {}
