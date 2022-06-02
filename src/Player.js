import "./Player.css";
import "./Button.css";

export default function Player({ text, score }) {
  return (
    //   eslint-disable-next-line
    <ul role="list" className="Player">
      <li>
        <strong>{text}</strong>
      </li>
      <li className="Player">
        <button className="Button__change-score"> - </button>
        <span className="Button__score-count">{score}</span>
        <button className="Button__change-score"> + </button>
      </li>
    </ul>
  );
}
