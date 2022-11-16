import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize}

html {
box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif ;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  display: block;
  cursor: pointer;
  padding: 0;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  color: inherit;
}

svg {
  fill: currentColor;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: ${p => p.theme.radii.normal};
  background: ${p => p.theme.colors.secondary};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:active {
  background: #555;
}

/* // Stick footer to bottom
html,
body {
  height: 100%;
}

#root {
  height: 100%;
  display: flex;
  flex-direction: column;
} */
`;

export default GlobalStyle;
