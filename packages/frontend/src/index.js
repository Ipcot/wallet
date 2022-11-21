import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'theme';
import { ThemeProvider as ThemeProviderMaterial } from '@mui/material/styles';
import themeMaterial from 'theme/themeMaterial';
import { store } from 'store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProviderMaterial theme={themeMaterial}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </ThemeProviderMaterial>
    </Provider>
  </React.StrictMode>
);
