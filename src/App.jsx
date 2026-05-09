import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import ProductShowcase from './pages/ProductShowcase';
import Contact from './pages/Contact';
import Complaint from './pages/Complaint';

// Icon for the floating button
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

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

        {/* All your page routes */}
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="ProductShowcase" element={<ProductShowcase />} />
            <Route path="contact" element={<Contact />} />
            <Route path="complaint" element={<Complaint />} />
          </Route>
        </Routes>

        {/* ─── GLOBAL FLOATING SUPPORT BUTTON ─── */}
        {/* Placed inside Router so Link works, but outside Routes so it shows on every page */}
        <Link
          to="/complaint"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            background: '#E8841A', // Saffron Accent
            color: '#fff',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(232, 132, 26, 0.4)',
            zIndex: 9999, // Ensures it stays above absolutely everything
            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1) translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(232, 132, 26, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(232, 132, 26, 0.4)';
          }}
        >
          <SupportAgentIcon style={{ fontSize: '32px' }} />
        </Link>

      </Router>
    </ThemeProvider>
  );
}