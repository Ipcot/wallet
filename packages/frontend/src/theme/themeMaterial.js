import { createTheme } from '@mui/material/styles';
import plusIcon from 'components/test/img/plus.svg';
import minusIcon from 'components/test/img/minus.svg';

const themeMaterial = createTheme({
  breakpoints: {
    values: {
      sm: 320,
      md: 768,
      lg: 1280,
    },
  },
  palette: {
    primary: {
      main: '#24CCA7',
      contrastText: '#fff',
      formText: '#BDBDBD',
      inputBorder: '#e0e0e0',
      loginMain: '#E5E5E5',
    },
    secondary: {
      main: '#4A56E2',
      contrastText: '#fff',
    },
    info: {
      main: '#FF6596',
      contrastText: '#fff',
    },
    colors: {
      text: '#000000', // black text
      white: '#ffffff', // white
      accent: '#24CCA7', // green
      textSecondary: '#A6A6A6', // grey
      secondary: '#4A56E2', // blue
      notActive: '#6E78E8', // light blue
      alternate: '#FF6596', // pink
      bg: '#E7EAF2', // light violet
      headerSecondary: '#BDBDBD', // light grey
    },
  },
  shape: {
    borderRadius: 20,
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'CirceRegular, sans-serif',
    h1: 'PoppinsRegular, sans-serif',
    h2: 'CirceBold, sans-serif',
    navLink: 'PoppinsRegular, sans-serif',
    currentNavLink: 'PoppinsBold, sans-serif',
    logo: 'PoppinsBold, sans-serif',
    mainBalanceNumbers: 'PoppinsBold, sans-serif',
    inCircleBalanceNumbers: 'CirceBold, sans-serif',
  },
  fontSizes: {
    xs: '12px',
    s: '16px',
    m: '18px',
    l: '28px',
    xl: '30px',
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
    bottomTable: '1px solid #dcdcdf',
  },
  radii: {
    small: '6px',
    normal: '10px',
    button: '20px',
    large: '30px',
    round: '50%',
  },
  transition: '300ms ease',
  components: {
    // Название компонента
    MuiButton: {
      styleOverrides: {
        root: {
          // Root - стили для всех вариаций кнопки
          height: 50,
          width: 300,
          fontSize: 18,
          letterSpacing: 0.1,
          textTransform: 'uppercase',
        },
        outlined: {
          // Стили для Outlined кнопки
        },
      },
      defaultProps: {
        // Пропы компоненту по дефолту
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {},
      },
      defaultProps: {
        color: 'info',
      },
    },
  },
  // Картинки для background image в кастомных MUI компонентах
  images: {
    plus: plusIcon,
    minus: minusIcon,
  },
});

export default themeMaterial;
