import Button from "./Button.js";

export default {
  title: "Component/Button",
  component: Button,
};

export const Default = () => <Button text="Test1" />;

export const ButtonAlt1 = () => <Button buttonType={"reset"} text="Test2" />;
