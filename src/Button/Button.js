import styled from "styled-components";

export default function Button({ text, onButtonFunction, buttonType }) {
  console.log({ text });
  return (
    <ButtonStyle buttonType={buttonType} onClick={onButtonFunction}>
      {text}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  width: 4rem;
  height: 3rem;
  margin: 1rem;
  border-radius: 20%;
  color: white;
  background-color: ${({ buttonType }) =>
    buttonType === "reset" ? "blue" : "red"};
`;
