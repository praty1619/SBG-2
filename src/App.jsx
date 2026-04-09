import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

// ─── DARK THEME ───────────────────────────────────────────────────────────────
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1A2C5B' },
    secondary: { main: '#E8841A' },
    background: {
      default: '#FEFCF8',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A2C5B',
      secondary: '#4A5568',
    },
  },
  typography: {
    fontFamily: '"DM Sans", "Roboto", "Helvetica", sans-serif',
    h1: { fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700 },
    h2: { fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700 },
    h3: { fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 600 },
    h4: { fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #FEFCF8; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #F5F0E8; }
        ::-webkit-scrollbar-thumb { background: #E8841A; border-radius: 3px; }
        ::selection { background: #E8841A; color: #fff; }
      `,
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}