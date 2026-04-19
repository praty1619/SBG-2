import React from 'react';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import './Range.css';

const vp = { once: true, amount: 0.15 };

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const categories = [
    { name: 'Tyres', desc: 'All vehicle sizes', icon: '🛞', color: 'saffron' },
    { name: 'Cooling', desc: 'Coolers & AC', icon: '❄️', color: 'navy' },
    { name: 'Power', desc: 'Batteries & Inverters', icon: '⚡', color: 'burgundy' },
    { name: 'Kitchen', desc: 'Stoves & Appliances', icon: '🍳', color: 'purple' },
    { name: 'Lighting & Safety', desc: 'LED & Helmets', icon: '💡', color: 'saffron' },
];

export default function Range() {
    return (
        <Box component="section" className="range-root" id="product-range">
            <Container maxWidth="lg">

                {/* ── Section Header ── */}
                <motion.div
                    className="range-header"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                >
                    <span className="section-tag">Complete Range</span>
                    <h2 className="range-heading">
                        Everything Your Store Needs,<br />
                        <span className="heading-accent">In One Partnership</span>
                    </h2>
                    <p className="range-intro">
                        Tyres for every vehicle. Cooling for every home. Power backup for every need.
                        Kitchen essentials. Lighting and safety products — all supplied through one trusted partner.
                    </p>
                </motion.div>

                {/* ── Highlight Banner ── */}
                <motion.div
                    className="range-banner"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                >
                    <div className="banner-left">
                        <span className="banner-num">40+</span>
                        <span className="banner-text">Product Categories<br/>Ready to Stock</span>
                    </div>
                    <div className="banner-divider" />
                    <div className="banner-right">
                        <span className="banner-icon">📍</span>
                        <p className="banner-desc">
                            Built specifically for rural and semi-urban retail stores across <strong>Jharkhand</strong>.
                        </p>
                    </div>
                </motion.div>

                {/* ── Premium Image Showcase (No Dots!) ── */}
                <motion.div
                    className="range-showcase"
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    viewport={vp}
                >
                    <img 
                        src="/Range/1.png" 
                        alt="Complete Product Range" 
                        className="range-main-img" 
                        draggable="false"
                    />
                </motion.div>

                {/* ── Category Cards Grid ── */}
                <motion.div
                    className="range-cat-grid"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                >
                    {categories.map((cat, i) => (
                        <motion.div key={i} className={`range-cat-card range-cat-card--${cat.color}`} variants={fadeUp}>
                            <div className="cat-icon-wrap">
                                <span className="cat-icon">{cat.icon}</span>
                            </div>
                            <h3 className="cat-title">{cat.name}</h3>
                            <p className="cat-desc">{cat.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

            </Container>
        </Box>
    );
}