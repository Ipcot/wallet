import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: Helvetica, Arial, sans-serif;
      }
      *,
      ::before,
      ::after {
        box-sizing: border-box;
      }
    `}
  />
);

export default GlobalStyle;
