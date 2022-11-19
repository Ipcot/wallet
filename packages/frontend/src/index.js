import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'theme';
import { ThemeProvider as ThemeProviderMaterial } from '@mui/material/styles';
import themeMaterial from 'theme/themeMaterial';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProviderMaterial theme={themeMaterial}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ThemeProviderMaterial>
  </React.StrictMode>
);
