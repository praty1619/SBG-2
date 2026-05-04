import React, { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import './About.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const vp = { once: true, amount: 0.15 };

// --- Pillars Data ---
const pillars = [
    { tag: '🔭', title: 'Our Vision', body: "To build one of India's most trusted and fastest-growing franchise networks — empowering small business owners to grow into successful entrepreneurs.", accent: 'saffron' },
    { tag: '🎯', title: 'Our Mission', body: 'Provide high-demand quality products, back every partner with real-time training and support, and ensure long-term profitability.', accent: 'blue' },
    { tag: '💎', title: 'Our Quality', body: 'We supply trusted branded products, maintain full transparency, resolve complaints swiftly, and hold ourselves to the highest standards.', accent: 'green' },
];

// --- Badges ---
const storyBadges = [
    { icon: '🏅', label: '25+ Years Experience' },
    { icon: '📦', label: '₹5L - ₹15L Initial Stock' },
    { icon: '📈', label: '₹15L - ₹25L+ Yearly Business' },
    { icon: '🤝', label: '87+ Active Partners' },
];

// --- DYNAMIC CAROUSEL DATA ---
const successStories = [
    {
        img: '/About/1.png',
        location: 'Jamshedpur , Jharkhand',
        successDesc: 'From ₹10K to ₹5L+ monthly revenue',
        years: '15 Years'
    },
    {
        img: '/About/2.png',
        location: 'Hazaribag, Jharkhand',
        successDesc: 'From ₹15K to ₹7L+ monthly revenue',
        years: '12 Years'
    },
    {
        img: '/About/3.png',
        location: 'Ranchi , Jharkhand',
        successDesc: 'From ₹12K to ₹6L+ monthly revenue',
        years: '18 Years'
    },
    {
        img: '/About/4.png',
        location: 'Dhanbad , Jharkhand',
        successDesc: 'From ₹20K to ₹8L+ monthly revenue',
        years: '20 Years'
    },
];

const galleryImages = [...successStories, successStories[0]]; // Double for infinite loop

export default function About() {
    const [activeIndex, setActiveIndex] = useState(0);
    const controls = useAnimation();

    // -- PERCENTAGE-BASED Automatic Vertical Scroll Logic --
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % galleryImages.length;
            setActiveIndex(nextIndex);

            // Loop logic using % to ensure it scales down perfectly on all screens
            if (nextIndex === successStories.length) {
                controls.start({ x: `-${successStories.length * 100}%`, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } })
                    .then(() => {
                        controls.set({ x: '0%' }); // Jump back to start instantly
                        setActiveIndex(0);
                    });
            } else {
                controls.start({ x: `-${nextIndex * 100}%`, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } });
            }
        }, 5000); // 5 seconds interval

        return () => clearInterval(interval);
    }, [activeIndex, controls]);

    return (
        <Box component="section" className="about-root" id="about">
            <Container maxWidth="lg">

                {/* ── Section header ── */}
                <motion.div
                    className="about-header"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                >
                    <span className="section-tag">Who We Are</span>
                    <h2 className="about-heading">
                        A Partner, Not Just<br />
                        a <span className="heading-accent">Supplier</span>
                    </h2>
                    <p className="about-intro">
                        Since 2004, Shyama Business Growth has been turning ordinary shops into
                        thriving franchise businesses. We handle the complexity so you can
                        focus on growing your business step-by-step.
                    </p>
                </motion.div>

                {/* ── Pillars grid ── */}
                <motion.div
                    className="pillars-grid"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                >
                    {pillars.map((p, i) => (
                        <motion.div key={i} className={`pillar-card pillar--${p.accent}`} variants={fadeUp}>
                            <div className="pillar-icon-wrap">
                                <span className="pillar-icon">{p.tag}</span>
                            </div>
                            <h3 className="pillar-title">{p.title}</h3>
                            <p className="pillar-body">{p.body}</p>
                            <div className="pillar-line" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── Story strip ── */}
                <div className="story-strip">
                    <motion.div
                        className="story-left"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={vp}
                    >
                        <span className="section-tag">Built for Bharat</span>
                        <h3 className="story-heading">
                            Empowering India's<br />
                            <span className="heading-accent">Smallest Shops</span>
                        </h3>
                        <p className="story-body">
                            From rural kirana stores to semi-urban multi-product outlets, our franchise
                            model lets <strong>anyone</strong> start with confidence. No complex systems,
                            no abandoned partners — just real support, real products, real growth.
                        </p>

                        <div className="story-badges">
                            {storyBadges.map((b, i) => (
                                <span key={i} className="story-badge">
                                    <span className="story-badge-icon">{b.icon}</span>
                                    {b.label}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="story-right story-dynamic-right"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={vp}
                    >
                        {/* Scalable Carousel */}
                        <div className="gallery-carousel">
                            <div className="gallery-inner">
                                <motion.div
                                    className="gallery-track"
                                    animate={controls}
                                    initial={{ x: '0%' }}
                                >
                                    {galleryImages.map((story, index) => (
                                        <div key={index} className="gallery-slide">

                                            <div className="design-match-wrapper">
                                                <img
                                                    src={story.img}
                                                    alt={`Success milestone at ${story.location}`}
                                                    className="design-image"
                                                />

                                                {/* Top-right Navy Badge */}
                                                <div className="design-location-badge">
                                                    <span className="design-badge-icon">📍</span>
                                                    <span className="design-badge-text">{story.location}</span>
                                                </div>

                                                {/* Bottom-right Gold Badge (Moved securely inside the frame) */}
                                                <div className="design-years-badge">
                                                    <span className="design-years-val">{story.years.split(' ')[0]}</span>
                                                    <span className="design-years-label">{story.years.split(' ').slice(1).join(' ')}</span>
                                                </div>

                                            </div>

                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </Container>
        </Box>
    );
}