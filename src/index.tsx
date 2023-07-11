import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Global } from '@emotion/react';
import { globalTheme } from './styles/globalTheme';
import { globalStyle } from './styles/globalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={globalTheme}>
      <Global styles={globalStyle} />
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
