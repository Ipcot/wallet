const theme = {
  colors: {
    text: '#000000', // black text
    white: '#ffffff', // white
    accent: '#24CCA7', // green 
    textSecondary: '#A6A6A6', // grey
    secondary: '#4A56E2', // blue
    alternate: "#FF6596", // pink
    bg: '#E7EAF2', // light violet
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'Circe, sans-serif',
    heading: 'Poppins, sans-serif',
  },
  fontSizes: {
    s: '16px',
    m: '18px',
    l: '28px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.5,
  },
  borders: {
    normal: '1px solid',
    thick: '3px solid',
  },
  radii: {
    small: '6px',
    normal: '10px',
    button: '20px',
    large: '30px',
    round: '50%',
  },
  breakpoints: ['20em', '48em', '75em'],
  transition: '300ms ease',
};

export default theme;
