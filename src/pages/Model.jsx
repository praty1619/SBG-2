import React from 'react';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import './Model.css';

const vp = { once: true, amount: 0.1 };

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

// Added colors to map to the CSS
const levels = [
    {
        id: '01',
        title: 'Starter Retail Setup',
        desc: 'Start with a focused product range including tyres, batteries, and essential appliances. Shyama provides the initial stock and business guidance.',
        img: '/Model/1.png',
        color: 'saffron',
    },
    {
        id: '02',
        title: 'Multi-Category Retail Store',
        desc: 'Expand your store with cooling, kitchen, and power products. Your shop becomes a known destination in your area.',
        img: '/Model/2.png',
        color: 'navy',
    },
    {
        id: '03',
        title: 'High-Performing Showroom',
        desc: 'Full product range with strong customer base, repeat buyers, and steady monthly revenue.',
        img: '/Model/3.png',
        color: 'burgundy',
    },
    {
        id: '04',
        title: 'Retail Business Powerhouse',
        desc: 'A premium multi-category showroom with strong brand presence, staff, and large-scale operations.',
        img: '/Model/4.png',
        color: 'purple',
    },
];

// Added colors to the ecosystem icons to make them pop!
const ecosystem = [
    {
        eyebrow: 'Day 1 Stock',
        title: 'Starter Inventory',
        desc: 'Get 30–40 essential products to stock your store from day one. No need to source from multiple vendors.',
        icon: '📦',
        color: 'saffron',
    },
    {
        eyebrow: 'Skill Building',
        title: 'Sales Training',
        desc: 'Hands-on training in customer interaction, product knowledge, and closing sales so your team builds confidence fast.',
        icon: '🎓',
        color: 'navy',
    },
    {
        eyebrow: 'Always Available',
        title: '24/7 Support Helpline',
        desc: 'Round-the-clock partner support for stock, pricing, customer issues, and day-to-day business operations.',
        icon: '📞',
        color: 'burgundy',
    },
    {
        eyebrow: 'Reliable Supply',
        title: 'Stock Supply & Restocking',
        desc: 'Ongoing stock replenishment directly to your store so you never run out of fast-moving, high-demand products.',
        icon: '🚚',
        color: 'purple',
    },
    {
        eyebrow: 'Scale Strategy',
        title: 'Business Growth Planning',
        desc: 'Structured guidance to help you expand product categories, improve margins, and scale from a small shop to a serious business.',
        icon: '📈',
        color: 'saffron',
    },
    {
        eyebrow: 'Trusted Products',
        title: 'Quality Assurance',
        desc: 'Products are quality-checked before supply so you can build trust with customers and operate with confidence.',
        icon: '⭐',
        color: 'navy',
    },
];

export default function Model() {
    return (
        <Box component="section" className="model-root" id="growth-model">
            <Container maxWidth="lg">

                {/* ── Section Header ── */}
                <motion.div
                    className="model-header"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                >
                    <span className="section-tag">Business Growth Model</span>
                    <h2 className="model-heading">
                        From ₹5L Stock to upto<br />
                        <span className="heading-accent">₹25 Lacs Yearly Business</span>
                    </h2>
                    <p className="model-intro">
                        This is not just a shop — this is a scalable retail system designed to grow
                        step-by-step into a high-revenue business.
                    </p>
                </motion.div>

                {/* ── The 4 Levels Grid ── */}
                <motion.div
                    className="levels-grid"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                >
                    {levels.map((level, i) => (
                        <motion.div key={i} className={`level-card level-card--${level.color}`} variants={fadeUp}>
                            <div className="level-img-wrap">
                                <img src={level.img} alt={`Level ${level.id}`} className="level-img" />
                                <div className="level-overlay" />
                                <div className="level-badge">Level {level.id}</div>
                            </div>
                            <div className="level-body">
                                <h3 className="level-title">{level.title}</h3>
                                <p className="level-desc">{level.desc}</p>
                            </div>
                            {/* Connective arrow for desktop (hidden on last item) */}
                            {i < levels.length - 1 && <div className="level-arrow">→</div>}
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── Financial Highlights Banner ── */}
                <motion.div
                    className="model-stats-banner"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                >
                    <div className="model-stat">
                        <span className="model-stat-label">Initial Stock Investment</span>
                        <span className="model-stat-value">₹5L – ₹15L</span>
                    </div>
                    <div className="model-stat-divider" />
                    <div className="model-stat">
                        <span className="model-stat-label">Estimated Yearly Revenue</span>
                        <span className="model-stat-value">₹15L – ₹25L+</span>
                    </div>
                </motion.div>

                {/* ── Ecosystem Section ── */}
                <motion.div
                    className="eco-header"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                >
                    <h3 className="eco-heading">The Complete Ecosystem</h3>
                    <p className="eco-sub">Everything you need to run, manage, and scale your business.</p>
                </motion.div>

                <motion.div
                    className="eco-grid"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                >
                    {ecosystem.map((eco, i) => (
                        <motion.div key={i} className={`eco-card eco-card--${eco.color}`} variants={fadeUp}>
                            <div className="eco-icon-wrap">
                                <span className="eco-icon">{eco.icon}</span>
                            </div>
                            <div className="eco-content">
                                <span className="eco-eyebrow">{eco.eyebrow}</span>
                                <h4 className="eco-title">{eco.title}</h4>
                                <p className="eco-desc">{eco.desc}</p>
                                <span className="eco-tag">Business support advantage</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── Bottom CTA ── */}
                <motion.div
                    className="model-cta-wrap"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                >
                    <a href="#contact" className="model-cta-btn">
                        Start Your Growth Journey
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </motion.div>

            </Container>
        </Box>
    );
}