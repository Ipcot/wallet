import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: Helvetica, Arial, sans-serif;
        @media (min-width: 768px) {
          background-image: url('../img/blured-blue.png'),
            url('../img/blured-orange.png');
          background-repeat: no-repeat;
          background-position: bottom -150px left -150px,
            top -230px right -350px;
        }
        @media (min-width: 1280px) {
          background-image: url('../img/blured-blue.png'),
            url('../img/blured-orange.png');
          background-repeat: no-repeat;
          background-position: bottom -250px left -150px,
            top -200px right -150px;
        }
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
