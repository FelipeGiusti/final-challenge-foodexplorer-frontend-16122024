import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import { GlobalStyle } from './styles/global.js'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme';

import { Routes } from './routes';
import { AuthProvider } from './hooks/auth.jsx';
import { SearchProvider } from './hooks/search.jsx';
import { CartProvider } from './hooks/cart.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <SearchProvider>
          <CartProvider>
            <Routes />
          </CartProvider>
        </SearchProvider>
      </AuthProvider>
      <Toaster toastOptions={{
        duration: 2000,
        style: {
          padding: '16px',
          fontSize: '16px'
        },
      }} />
    </ThemeProvider>
  </React.StrictMode>
);