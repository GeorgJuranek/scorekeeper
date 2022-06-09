import GlobalStyle from "../src/GlobalStyles";

export const decorators = [
  (Story) => {
    return (
      <>
        <GlobalStyle />
        <Story />
      </>
    );
  },
];
