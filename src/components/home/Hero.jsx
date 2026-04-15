import React from 'react';
import { motion } from 'framer-motion';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VerifiedIcon from '@mui/icons-material/Verified';
import './Hero.css';

const stagger = {
    container: { animate: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } } },
    item: {
        initial: { opacity: 0, y: 32 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
    }
};

const Hero = () => (
    <section className="h-root">

        {/* ── Background Decoration ── */}
        <div className="h-bg-blob-mint" />
        <div className="h-bg-blob-coral" />
        <div className="h-bg-lines" />

        <div className="h-inner">

            {/* ══ LEFT COLUMN ══ */}
            <motion.div
                className="h-left"
                variants={stagger.container}
                initial="initial"
                animate="animate"
            >

                {/* Badge */}
                <motion.div variants={stagger.item}>
                    <div className="h-badge">
                        <span className="h-badge-dot" />
                        <span>150+ Retailers Trust Us</span>
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.div variants={stagger.item}>
                    <h1 className="h-headline">
                        Build a store. <span className="h-headline-accent">Own your market.</span>
                    </h1>
                </motion.div>

                {/* Sub */}
                <motion.div variants={stagger.item}>
                    <p className="h-sub">
                        Shyama Business Growth equips you with inventory, supply chain,
                        and training to turn an empty shop into a high-revenue franchise —
                        backed every step of the way.
                    </p>
                </motion.div>

                {/* Buttons */}
                <motion.div variants={stagger.item} className="h-cta-row">
                    <button className="h-btn-primary">
                        Start Your Journey <ArrowForwardIcon style={{ fontSize: 18 }} />
                    </button>
                    <button className="h-btn-outline">
                        <StorefrontIcon style={{ fontSize: 18 }} /> Explore Catalog
                    </button>
                </motion.div>

                {/* Stats Box Strip */}
                <motion.div variants={stagger.item}>
                    <div className="h-stats-strip">
                        {[
                            { n: '25+', l: 'Years Experience' },
                            { n: '40+', l: 'Products' },
                            { n: '150+', l: 'Retailers' },
                            { n: '₹5L–15L', l: 'Growth Potential' },
                        ].map((s, i) => (
                            <React.Fragment key={s.n}>
                                {i > 0 && <div className="h-stat-sep" />}
                                <div className="h-stat">
                                    <span className="h-stat-n">{s.n}</span>
                                    <span className="h-stat-l">{s.l}</span>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>

            </motion.div>

            {/* ══ RIGHT COLUMN ══ */}
            <motion.div
                className="h-right"
                initial={{ opacity: 0, scale: 0.94, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >

                {/* Decorative number */}
                <div className="h-deco-num">01</div>

                {/* Image Card */}
                <div className="h-img-card">

                    {/* Corner accents */}
                    <span className="h-corner h-corner-tl" />
                    <span className="h-corner h-corner-br" />

                    <img src="/Hero/1.jpeg" alt="Franchise store" className="h-img" />
                    <div className="h-img-scrim" />

                    {/* Floating Revenue Card */}
                    <motion.div
                        className="h-float-revenue"
                        animate={{ y: [0, -9, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <div className="h-float-icon">
                            {/* Bright Coral Icon */}
                            <TrendingUpIcon sx={{ fontSize: 19, color: '#FF6B6B' }} />
                        </div>
                        <div>
                            <div className="h-float-label">Proven Potential</div>
                            <div className="h-float-value">₹5L – ₹15L / mo</div>
                        </div>
                    </motion.div>

                    {/* Floating Stores Chip */}
                    <motion.div
                        className="h-float-chip"
                        animate={{ y: [0, 9, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    >
                        <span className="h-chip-dot" />
                        150+ Stores Live
                    </motion.div>

                </div>

                {/* Verified Line */}
                <motion.div
                    className="h-verified"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    {/* Bright Coral Icon */}
                    <VerifiedIcon sx={{ fontSize: 16, color: '#FF6B6B' }} />
                    <span>Verified franchise partner network across India</span>
                </motion.div>

            </motion.div>
        </div>
    </section>
);

export default Hero;