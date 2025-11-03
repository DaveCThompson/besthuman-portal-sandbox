import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
// CORRECTED: Import HashRouter instead of BrowserRouter
import { HashRouter } from 'react-router-dom';

import App from './App.tsx';
import { theme } from './theme/theme.ts';

// Import design token files here
import './theme/primitives.css';
import './theme/semantics.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* CORRECTED: Use HashRouter for GitHub Pages compatibility */}
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
);