import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
// import Products from './pages/Products';
import ProductShowcase from './pages/ProductShowcase'
import Contact from './pages/Contact';

// ─── PREMIUM LIGHT THEME ───────────────────────────────────────────────────────────────
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0C1E3C' }, // Premium Navy
    secondary: { main: '#3e1387' }, // Vibrant Purple
    background: {
      default: '#FDFAF5', // Cream Background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0C1E3C', // Navy Text
      secondary: '#5C6E8A', // Muted Slate
    },
  },
  typography: {
    fontFamily: '"DM Sans", "Roboto", "Helvetica", sans-serif',
    h1: { fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700 },
    h2: { fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700 },
    h3: { fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700 },
    h4: { fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #FDFAF5; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #F5F3FF; } /* Soft Purple Track */
        ::-webkit-scrollbar-thumb { background: #3e1387; border-radius: 3px; } /* Purple Thumb */
        
        /* Text Highlight Selection */
        ::selection { background: #3e1387; color: #fff; } 
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
            <Route path="ProductShowcase" element={<ProductShowcase />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}