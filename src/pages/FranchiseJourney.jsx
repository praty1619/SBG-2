import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import './FranchiseJourney.css';

const vp = { once: true, amount: 0.15 };

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const steps = [
    {
        num: '01',
        title: 'Apply & Connect',
        desc: 'Fill a simple form. Our team reaches you within 24 hours to understand your goals, location, and investment capacity.',
        highlight: 'Response within 24 hrs',
        color: 'p1', // Lightest Purple
    },
    {
        num: '02',
        title: 'Receive Your Stock',
        desc: 'We deliver 30–40 curated, high-demand products straight to your store — pre-selected to move fast in any local market.',
        highlight: '30–40 products, Day 1',
        color: 'p2', // Medium Light Purple
    },
    {
        num: '03',
        title: 'Train & Launch',
        desc: 'Complete our sales & customer handling training. We stay beside you through your grand opening and first 30 days.',
        highlight: 'Full launch support',
        color: 'p3', // Deep Purple
    },
    {
        num: '04',
        title: 'Grow Together',
        desc: 'Quarterly reviews, 24/7 assistance, complaint resolution, and an expanding product range as your business scales.',
        highlight: '24/7 ongoing support',
        color: 'p4', // Brand Dark Purple
    },
];

export default function FranchiseJourney() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <Box component="section" className="journey-root" id="franchise">
            <Container maxWidth="lg">

                {/* ── Header ── */}
                <motion.div
                    className="journey-header"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                >
                    <span className="section-tag">How It Works</span>
                    <h2 className="journey-heading">
                        Your Franchise Journey<br />
                        in <span className="heading-accent">4 Simple Steps</span>
                    </h2>
                    <p className="journey-intro">
                        From application to a fully running store — we handle the complexity
                        so you can focus on growing your business.
                    </p>
                </motion.div>

                {/* ── Interactive Horizontal Accordion ── */}
                <motion.div
                    className="fj-accordion-container"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                >
                    {steps.map((step, index) => {
                        const isActive = activeStep === index;

                        return (
                            <motion.div
                                key={step.num}
                                layout
                                onClick={() => setActiveStep(index)}
                                className={`fj-card fj-card--${step.color} ${isActive ? 'active' : ''}`}
                                /* Buttery smooth custom spring transition */
                                transition={{ layout: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }}
                            >
                                {/* ── Collapsed Content (Vertical) ── */}
                                <div className={`fj-collapsed ${isActive ? 'hidden' : ''}`}>
                                    <span className="fj-col-num">{step.num}</span>
                                    <span className="fj-col-title">{step.title}</span>
                                </div>

                                {/* ── Expanded Content (Text + Image Space) ── */}
                                <div className={`fj-expanded ${isActive ? 'visible' : ''}`}>

                                    {/* Top Text Area */}
                                    <div className="fj-exp-header">
                                        <h3 className="fj-exp-title">{step.title}</h3>
                                        <p className="fj-exp-desc">{step.desc}</p>
                                    </div>

                                    {/* Middle Image Area (Ready for your /journey/ PNGs) */}
                                    <div className="fj-exp-image-wrap">
                                        <img
                                            src={`/Journey/${index + 1}.png`}
                                            alt={step.title}
                                            className="fj-exp-image"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Bottom Info/CTA Area */}
                                    <div className="fj-exp-bottom">
                                        <div className="fj-exp-highlight">
                                            <span className="fj-hl-dot" />
                                            {step.highlight}
                                        </div>
                                        <span className="fj-exp-num-large">{step.num}</span>
                                    </div>

                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* ── Bottom CTA strip ── */}
                <motion.div
                    className="journey-cta-strip"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                >
                    <div className="journey-cta-left">
                        <span className="journey-cta-emoji">🚀</span>
                        <div>
                            <p className="journey-cta-title">Ready to start your journey?</p>
                            <p className="journey-cta-sub">Join 150+ partners already growing with Shyama.</p>
                        </div>
                    </div>
                    <a href="#contact" className="journey-cta-btn">
                        Apply Now
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