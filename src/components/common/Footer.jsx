import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Added RouterLink for navigation
import { Box, Container } from '@mui/material';
import './Footer.css';

// ── CLEANED UP & HIGHLY DESCRIPTIVE LINKS ──
const footerLinks = {
    Company: [
        { label: 'About Us', path: '/about', desc: 'Our story and vision for Bharat' },
        { label: 'Products', path: '/ProductShowcase', desc: 'Explore our full catalogue' },
    ],
    Franchise: [
        { label: 'How It Works', path: '/#growth-model', desc: 'Understand the growth model' },
        { label: 'Apply Now', path: '/contact', desc: 'Start your franchise journey' },
    ],
    Support: [
        { label: 'Contact Us', path: '/contact', desc: 'Get in touch with our team' },
        { label: 'Complaint Form', path: '/complaint', desc: 'Dedicated partner support desk' },
    ],
};

const socials = [
    { label: 'Facebook', href: '#', icon: 'f' },
    { label: 'Instagram', href: '#', icon: '📷' },
    { label: 'YouTube', href: '#', icon: '▶' },
    { label: 'LinkedIn', href: '#', icon: 'in' },
];

export default function Footer() {
    return (
        <Box component="footer" className="footer-root">

            {/* ── HIGH-END VISIBLE BACKGROUND DESIGN ── */}
            <div className="footer-bg-glow footer-bg-glow--left" />
            <div className="footer-bg-glow footer-bg-glow--right" />
            <div className="footer-watermark">SHYAMA</div>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>

                {/* ── Main grid ── */}
                <div className="footer-grid">

                    {/* Brand column */}
                    <div className="footer-brand">

                        {/* ── Sleek Transparent Logo Box ── */}
                        <div className="footer-logo-container">
                            <img
                                src="/logo/1.webp"
                                alt="Shyama Business Growth Logo"
                                className="footer-logo-graphic"
                            />
                        </div>

                        <p className="footer-tagline">
                            Empowering India's entrepreneurs since 2004 with products, training,
                            and round-the-clock partner support.
                        </p>
                        <div className="footer-socials">
                            {socials.map(s => (
                                <a key={s.label} href={s.href} className="footer-social" aria-label={s.label}>
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                        <div className="footer-estd-badge">
                            <span>⭐</span>
                            <span>Est. 2004 · Trusted for 25+ Years</span>
                        </div>
                    </div>

                    {/* Dynamic Link columns with Subtext */}
                    {Object.entries(footerLinks).map(([heading, links]) => (
                        <div key={heading} className="footer-col">
                            <p className="footer-col-heading">{heading}</p>
                            <ul className="footer-col-links">
                                {links.map(link => (
                                    <li key={link.label} className="footer-link-item">
                                        <RouterLink to={link.path} className="footer-link">
                                            {link.label}
                                        </RouterLink>
                                        <span className="footer-link-desc">{link.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact column */}
                    <div className="footer-col">
                        <p className="footer-col-heading">Get in Touch</p>
                        <div className="footer-contact-list">
                            <div className="footer-contact-item">
                                <span>📞</span>
                                <span>+91 62017 39296</span>
                            </div>
                            <div className="footer-contact-item">
                                <span>📧</span>
                                <span>info@shyamabusiness.in</span>
                            </div>
                            <div className="footer-contact-item">
                                <span>📍</span>
                                <span>Jharkhand, India</span>
                            </div>
                        </div>

                        {/* Solid Purple CTA Button */}
                        <RouterLink to="/contact" className="footer-cta-btn">
                            Become a Partner →
                        </RouterLink>
                    </div>

                </div>

                {/* ── Divider ── */}
                <div className="footer-divider" />

                {/* ── Bottom bar ── */}
                <div className="footer-bottom">
                    <p className="footer-copy">
                        © {new Date().getFullYear()} Shyama Business Growth. All rights reserved.
                    </p>
                    <div className="footer-bottom-links">
                        <RouterLink to="/privacy">Privacy Policy</RouterLink>
                        <span>·</span>
                        <RouterLink to="/terms">Terms of Use</RouterLink>
                    </div>
                </div>

            </Container>
        </Box>
    );
}