import React from 'react';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import './WhyShyama.css';

const vp = { once: true, amount: 0.15 };

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

// ── PART 1: Features Data ──
const features = [
  { icon: '🕐', title: '24/7 Partner Support', desc: 'Call us at midnight or noon — our team is always on standby for your business needs.', color: 'saffron' },
  { icon: '📦', title: 'Ready Stock on Day 1', desc: '30–40 in-demand products delivered to your store before you open your doors.', color: 'navy' },
  { icon: '🏆', title: 'Proven Since 2004', desc: 'Two decades of franchise success across India — not a startup promise, a proven track.', color: 'burgundy' },
  { icon: '📊', title: 'Structured Growth Plans', desc: 'Quarterly reviews, expansion roadmaps, and data-driven strategies built around you.', color: 'purple' },
  { icon: '🤝', title: 'Long-term Partnership', desc: "We don't just supply products — we invest in your success and grow beside you always.", color: 'saffron' },
  { icon: '🌾', title: 'Rural & Urban Ready', desc: 'Our model lets small shops in any town compete confidently with big national brands.', color: 'navy' },
];

// ── PART 2: Testimonials Data ──
const testimonials = [
  { name: 'Amit Singh', role: 'Dhanbad Partner', stars: 5, review: 'From the first stock delivery, Shyama has been a reliable supply partner. No vendor headaches anymore.' },
  { name: 'Priya Sharma', role: 'Bokaro Partner', stars: 5, review: 'The structured support and business planning helped me scale my small shop into a real showroom within a year.' },
  { name: 'Rahul Prasad', role: 'Ranchi Partner', stars: 5, review: 'The 24/7 support helpline is not just a promise; they are always there for stock and customer queries.' },
  { name: 'Neha Verma', role: 'Hazaribagh Partner', stars: 5, review: 'The sales training provided confident skills to my team. We are closing more deals and building trust.' },
  { name: 'Vikram Roy', role: 'Jamshedpur Partner', stars: 5, review: 'Shyama ecosystem takes care of everything from stock to marketing. I just focus on my customers.' },
];

const col1Reviews = [...testimonials, ...testimonials];
const col2Reviews = [...testimonials, ...testimonials];
const starColors = ['#E8841A', '#831843', '#3e1387'];

export default function WhyShyama() {
  return (
    <>
      {/* ═════════════════════════════════════════════════════════════
                SECTION 1: WHY CHOOSE US (Features Grid)
            ═════════════════════════════════════════════════════════════ */}
      <Box component="section" className="why-root" id="why-us">
        <Container maxWidth="lg">
          <motion.div
            className="why-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <span className="section-tag">Why Choose Us</span>
            <h2 className="why-heading">
              Everything You Need to<br />
              <span className="heading-accent">Succeed From Day One</span>
            </h2>
            <p className="why-intro">
              We've built every element of our franchise model around one goal —
              making sure every partner grows profitably and sustainably.
            </p>
          </motion.div>

          <motion.div
            className="why-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                className={`why-card why-card--${f.color}`}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
              >
                <div className="why-icon-wrap">
                  <span className="why-icon">{f.icon}</span>
                </div>
                <h3 className="why-title">{f.title}</h3>
                <p className="why-desc">{f.desc}</p>
                <div className={`why-line why-line--${f.color}`} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Box>

      {/* ═════════════════════════════════════════════════════════════
                SECTION 2: PARTNER STORIES (Full Bleed Purple Section)
            ═════════════════════════════════════════════════════════════ */}
      <Box component="section" className="ws-section-full" id="testimonials">
        <Container maxWidth="lg">
          <div className="ws-layout">

            {/* Left Side: Header */}
            <motion.div
              className="ws-header"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <span className="section-tag section-tag--dark">Trust of 150+ Partners</span>
              <h2 className="ws-heading">
                Our Partner<br />
                Success Stories
              </h2>
              <p className="ws-intro">
                From application to a fully running store — we handle the complexity so you can focus on growing your business step-by-step.
              </p>
            </motion.div>

            {/* Right Side: Opposite Vertical Scrollers */}
            <div className="ws-scroller">
              {/* Vignette Gradients for faded edges */}
              <div className="ws-vignette ws-vignette--top" />
              <div className="ws-vignette ws-vignette--bottom" />

              <motion.div
                className="ws-scroller-wrapper"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
              >
                {/* Column 1: Vertical Scroll UP */}
                <motion.div
                  className="ws-scroller-col"
                  initial={{ y: "0%" }}
                  animate={{ y: "-50%" }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                >
                  {col1Reviews.map((review, i) => (
                    <motion.div key={`col1-${i}`} className="ws-testimonial-card ws-testimonial-card--up" variants={fadeUp}>
                      <TestimonialCard review={review} index={i} />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Column 2: Vertical Scroll DOWN (opposite) */}
                <motion.div
                  className="ws-scroller-col"
                  initial={{ y: "-50%" }}
                  animate={{ y: "0%" }}
                  transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                >
                  {col2Reviews.map((review, i) => (
                    <motion.div key={`col2-${i}`} className="ws-testimonial-card ws-testimonial-card--down" variants={fadeUp}>
                      <TestimonialCard review={review} index={i + 1} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Box>
    </>
  );
}

// ── Testimonial Card Helper Component (Light Purple Theme) ──
function TestimonialCard({ review, index }) {
  const sColor = starColors[index % starColors.length];

  return (
    <div className="ws-card-inner">
      <div className="ws-quote-row">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3e1387" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ws-quote-icon">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v7c0 1.25.75 2 2 2h4c0 2.5 1.75 5 4 6" />
          <path d="M14 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v7c0 1.25.75 2 2 2h4c0 2.5 1.75 5 4 6" />
        </svg>
        <div className="ws-stars">
          {[...Array(review.stars)].map((_, i) => (
            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={sColor} stroke={sColor} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
      </div>
      <p className="ws-review-text">{review.review}</p>
      <div className="ws-author">
        <p className="ws-author-name">{review.name}</p>
        <p className="ws-author-role">{review.role}</p>
      </div>
      <div className="ws-card-blur" />
    </div>
  );
}