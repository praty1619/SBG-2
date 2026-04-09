import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import './Hero.css';

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
};

const popIn = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Hero() {
    return (
        <Box component="section" className="hero-bento-root" id="hero">

            <motion.div
                className="hero-bento-grid"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                {/* ── Main Typography & CTA Card ── */}
                <motion.div variants={popIn} className="bento-card bento-main">
                    <div className="bento-pill">
                        Partnering Since 2004
                    </div>

                    <h1 className="bento-headline">
                        Start Your Business <br />
                        With <span className="bento-accent">Complete</span> Support.
                    </h1>

                    <p className="bento-sub">
                        Shyama Business Growth gives you ready stock of 30–40 products,
                        expert sales training, and round-the-clock guidance so your franchise
                        hits the ground running from day one.
                    </p>

                    <div className="bento-actions">
                        <a href="#contact" className="btn-emerald">
                            Start Your Franchise
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#products" className="btn-outline">
                            View Products
                        </a>
                    </div>
                </motion.div>

                {/* ── Product Showcase Card ── */}
                <motion.div variants={popIn} className="bento-card bento-visual">
                    <img src="/Hero/1.jpeg" alt="Shyama Business Growth Product Range" />
                </motion.div>

                {/* ── Stat Cards Row ── */}
                {[
                    { num: '20+', label: 'Years of Trust' },
                    { num: '500+', label: 'Active Partners' },
                    { num: '40+', label: 'Product SKUs' },
                    { num: '24/7', label: 'Dedicated Support' },
                ].map((stat, idx) => (
                    <motion.div key={idx} variants={popIn} className="bento-card bento-stat">
                        <span className="stat-number">{stat.num}</span>
                        <span className="stat-text">{stat.label}</span>
                    </motion.div>
                ))}

            </motion.div>
        </Box>
    );
}