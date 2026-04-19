import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css';

const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Products', path: '/ProductShowcase' },
    { title: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const location = useLocation();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const { scrollY } = useScroll();

    // Shrink pill width on scroll
    const pillWidth = useTransform(scrollY, [0, 120], ['96%', '84%']);
    const pillTop = useTransform(scrollY, [0, 120], ['18px', '10px']);

    // Track scroll for class toggle
    useEffect(() => {
        const unsub = scrollY.on('change', v => setScrolled(v > 80));
        return unsub;
    }, [scrollY]);

    return (
        <>
            <Box className="navbar-outer">
                <motion.div
                    className="navbar-pill-wrapper"
                    style={{ width: pillWidth, top: pillTop }}
                >
                    <nav className={`navbar-pill ${scrolled ? 'navbar-pill--scrolled' : ''}`}>

                        {/* Logo */}
                        <RouterLink to="/" className="nav-logo">
                            <div className="logo-gem">
                                <span>S</span>
                                <div className="logo-gem-shine" />
                            </div>
                            <div className="logo-wordmark">
                                <span className="logo-brand">SHYAMA</span>
                                <span className="logo-sub">Business Growth</span>
                            </div>
                        </RouterLink>

                        {/* Desktop links */}
                        <ul className="nav-links-list">
                            {navLinks.map((link) => {
                                const active = location.pathname === link.path;
                                return (
                                    <li key={link.title}>
                                        <RouterLink
                                            to={link.path}
                                            className={`nav-link ${active ? 'nav-link--active' : ''}`}
                                        >
                                            {link.title}
                                            {active && (
                                                <motion.span
                                                    className="nav-link-dot"
                                                    layoutId="nav-dot"
                                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                                />
                                            )}
                                        </RouterLink>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* CTA */}
                        <RouterLink to="/contact" className="nav-cta">
                            Become a Partner
                        </RouterLink>

                        {/* Hamburger */}
                        <IconButton
                            className="nav-hamburger"
                            onClick={() => setDrawerOpen(true)}
                            size="small"
                        >
                            <MenuIcon />
                        </IconButton>
                    </nav>
                </motion.div>
            </Box>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{ className: 'nav-drawer' }}
            >
                <Box className="nav-drawer-inner">
                    <Box className="nav-drawer-header">
                        <span style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '1rem', color: '#1B2B5E', letterSpacing: '0.1em' }}>
                            SHYAMA
                        </span>
                        <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#1B2B5E' }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <List className="nav-drawer-list">
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.title}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.07 }}
                            >
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component={RouterLink}
                                        to={link.path}
                                        onClick={() => setDrawerOpen(false)}
                                        selected={location.pathname === link.path}
                                        className="nav-drawer-item"
                                    >
                                        <ListItemText primary={link.title} />
                                    </ListItemButton>
                                </ListItem>
                            </motion.div>
                        ))}
                    </List>
                    <RouterLink
                        to="/contact"
                        className="nav-drawer-cta"
                        onClick={() => setDrawerOpen(false)}
                    >
                        Become a Partner →
                    </RouterLink>
                </Box>
            </Drawer>
        </>
    );
}