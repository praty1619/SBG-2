import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import './Complaint.css';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function Complaint() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Grab all the data from the form
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        // 1. Format the message for WhatsApp (using * for bold)
        const whatsappMessage = `*🚨 New Partner Complaint 🚨*\n\n` +
            `*Name:* ${data.fullName}\n` +
            `*Store Name:* ${data.storeName}\n` +
            `*Phone Number:* ${data.phone}\n` +
            `*Issue Category:* ${data.issueType}\n\n` +
            `*Detailed Description:*\n${data.description}`;

        // 2. Encode the text so it works in a URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // 3. Set the Owner's WhatsApp Number (Include country code, NO plus sign!)
        const ownerNumber = "916201739296";

        // 4. Create the final WhatsApp URL
        const whatsappURL = `https://wa.me/${ownerNumber}?text=${encodedMessage}`;

        // 5. Open WhatsApp in a new tab/app
        window.open(whatsappURL, '_blank');

        // Show the success screen on the website
        setIsSubmitted(true);
    };

    return (
        <Box component="section" className="complaint-root">
            {/* Background Decor */}
            <div className="complaint-bg-glow complaint-bg-glow--tl" />
            <div className="complaint-bg-glow complaint-bg-glow--br" />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>

                {/* ── Header ── */}
                <motion.div
                    className="complaint-header"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                >
                    <span className="section-tag">Partner Support</span>
                    <h1 className="complaint-heading">
                        Dedicated <span className="heading-accent">Help Desk</span>
                    </h1>
                    <p className="complaint-sub">
                        Facing an issue with stock, delivery, or product quality? Let us know immediately.
                        Our support team is committed to resolving partner concerns within 24 hours.
                    </p>
                </motion.div>

                {/* ── Main Layout ── */}
                <div className="complaint-layout">

                    {/* Left: Info Card */}
                    <motion.div
                        className="complaint-info-col"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="info-card">
                            <h3 className="info-card-title">We are here to listen.</h3>
                            <p className="info-card-desc">
                                At Shyama Business Growth, our partners are our priority. We maintain complete transparency and strive for rapid resolution.
                            </p>

                            <div className="info-list">
                                <div className="info-item">
                                    <div className="info-icon">⏱️</div>
                                    <div>
                                        <div className="info-item-title">24-Hour SLA</div>
                                        <div className="info-item-sub">Guaranteed first response</div>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">📞</div>
                                    <div>
                                        <div className="info-item-title">Direct Helpline</div>
                                        <div className="info-item-sub">+91 62017 39296</div>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">📧</div>
                                    <div>
                                        <div className="info-item-title">Email Escalation</div>
                                        <div className="info-item-sub">support@shyamabusiness.in</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: The Form */}
                    <motion.div
                        className="complaint-form-col"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="form-card">
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form
                                        key="form"
                                        className="complaint-form"
                                        onSubmit={handleSubmit}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                    >
                                        <h3 className="form-title">Submit a Ticket</h3>

                                        <div className="form-grid">
                                            <div className="input-group">
                                                <label>Full Name</label>
                                                {/* Added name="fullName" */}
                                                <input type="text" name="fullName" placeholder="Enter your name" required />
                                            </div>
                                            <div className="input-group">
                                                <label>Store / Franchise Name</label>
                                                {/* Added name="storeName" */}
                                                <input type="text" name="storeName" placeholder="e.g. Sharma Electronics" required />
                                            </div>
                                            <div className="input-group">
                                                <label>Registered Phone Number</label>
                                                {/* Added name="phone" */}
                                                <input type="tel" name="phone" placeholder="+91" required />
                                            </div>
                                            <div className="input-group">
                                                <label>Issue Type</label>
                                                {/* Added name="issueType" */}
                                                <select name="issueType" required defaultValue="">
                                                    <option value="" disabled>Select category...</option>
                                                    <option value="Stock / Delivery Delay">Stock / Delivery Delay</option>
                                                    <option value="Product Quality / Damage">Product Quality / Damage</option>
                                                    <option value="Billing / Payments">Billing / Payments</option>
                                                    <option value="Training / Support">Training / Support</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="input-group full-width">
                                            <label>Detailed Description</label>
                                            {/* Added name="description" */}
                                            <textarea
                                                name="description"
                                                rows="5"
                                                placeholder="Please provide order numbers, product details, or specific issues so we can help you faster..."
                                                required
                                            />
                                        </div>

                                        <button type="submit" className="form-submit-btn">
                                            Submit Complaint →
                                        </button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        className="form-success-state"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    >
                                        <div className="success-icon">✅</div>
                                        <h3 className="success-title">Opening WhatsApp...</h3>
                                        <p className="success-desc">
                                            Please press "Send" in WhatsApp to finalize your ticket. Our team will contact you within 24 hours.
                                        </p>
                                        <button type="button" className="form-reset-btn" onClick={() => setIsSubmitted(false)}>
                                            Submit Another Ticket
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </Box>
    );
}