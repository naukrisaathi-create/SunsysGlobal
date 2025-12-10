import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Newsletter subscription:', email);
        setEmail('');
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer__container container">
                {/* Newsletter Section */}
                <div className="footer__newsletter">
                    <div className="footer__newsletter-content">
                        <h3 className="footer__newsletter-title">Stay Updated</h3>
                        <p className="footer__newsletter-description">
                            Subscribe to our newsletter for the latest updates and insights.
                        </p>
                    </div>
                    <form className="footer__newsletter-form" onSubmit={handleNewsletterSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="footer__newsletter-input"
                            required
                        />
                        <Button variant="primary" size="medium" type="submit">
                            Subscribe
                        </Button>
                    </form>
                </div>

                <div className="footer__divider"></div>

                <div className="footer__content">
                    {/* Company Info */}
                    <div className="footer__section">
                        <Link to="/" className="footer__logo">
                            <span className="footer__logo-icon">☀️</span>
                            <div className="footer__logo-content">
                                <span className="footer__logo-text">SUNSYS</span>
                                <span className="footer__logo-subtext">GLOBAL</span>
                            </div>
                        </Link>
                        <p className="footer__description">
                            Your Gateway to World-Class Engineering Talent. Building scalable, future-proof solutions.
                        </p>
                        <div className="footer__social">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer__section">
                        <h3 className="footer__title">Quick Links</h3>
                        <ul className="footer__links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/why-us">Why Us?</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer__section">
                        <h3 className="footer__title">Get in Touch</h3>
                        <ul className="footer__contact">
                            <li>
                                <span className="footer__contact-icon">📧</span>
                                <a href="mailto:contact@sunsysglobal.com">contact@sunsysglobal.com</a>
                            </li>
                            <li>
                                <span className="footer__contact-icon">📞</span>
                                <a href="tel:+919876543210">+91 98765 43210</a>
                            </li>
                            <li>
                                <span className="footer__contact-icon">📍</span>
                                <span>Mumbai, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} Sunsys Global. All rights reserved.
                    </p>
                    <button
                        className="footer__back-to-top"
                        onClick={scrollToTop}
                        aria-label="Back to top"
                    >
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 4l-8 8h5v8h6v-8h5z" />
                        </svg>
                        Back to Top
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
