import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { GlobalStyle } from 'theme';
import { ThemeProvider as ThemeProviderMaterial } from '@mui/material/styles';
import themeMaterial from 'theme/themeMaterial';
import { store } from 'store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProviderMaterial theme={themeMaterial}>
        <GlobalStyle />
        <App />
      </ThemeProviderMaterial>
    </Provider>
  </React.StrictMode>
);
