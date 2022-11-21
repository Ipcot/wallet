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
      loginForm: 'rgba(255, 255, 255, 0.4)',
    },
    secondary: {
      main: '#4A56E2',
      contrastText: '#fff',
    },
    info: {
      main: '#FF6596',
      contrastText: '#fff',
    },
  },
  shape: {
    borderRadius: 20,
  },
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
