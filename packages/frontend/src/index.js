import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import './index.css';
import App from './App';
import { GlobalStyle } from 'theme';
import { ThemeProvider as ThemeProviderMaterial } from '@mui/material/styles';
import themeMaterial from 'theme/themeMaterial';
import { store, persistedStore } from 'store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <ThemeProviderMaterial theme={themeMaterial}>
        <GlobalStyle />
        <App />
      </ThemeProviderMaterial>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
