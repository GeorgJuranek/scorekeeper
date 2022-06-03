import "./Player.css";
import "./Button.css";

export default function Player({
  index,
  name,
  score,
  onAddScore,
  onSubtractScore,
}) {
  return (
    //   eslint-disable-next-line
    <ul role="list" className="Player">
      <li>
        <strong>{name}</strong>
      </li>
      <li className="Player">
        <button
          onClick={() => onSubtractScore(index)}
          className="Button__change-score"
        >
          {" "}
          -{" "}
        </button>
        <span className="Button__score-count">{score}</span>
        <button
          onClick={() => onAddScore(index)}
          className="Button__change-score"
        >
          {" "}
          +{" "}
        </button>
      </li>
    </ul>
  );
}
