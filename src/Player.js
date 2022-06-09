import "./Player.css";
import styled from "styled-components";
//import "./Button.css";

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
        <ScoreDisplay score={score}>{score}</ScoreDisplay>
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

const ScoreDisplay = styled.span`
  padding: 1rem;
  color: ${({ score }) => score < 0 && "darkred"};
`;
//font-size: ${({ score }) => score > 0 && 13px+score)};
