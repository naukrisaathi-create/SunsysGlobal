import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Why Us?', path: '/why-us' },
        { name: 'Careers', path: '/careers' },
        { name: 'Get in touch', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__container container">
                {/* Logo */}
                <Link to="/" className="navbar__logo">
                    <span className="navbar__logo-icon">☀️</span>
                    <div className="navbar__logo-content">
                        <span className="navbar__logo-text">SUNSYS</span>
                        <span className="navbar__logo-subtext">GLOBAL</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <ul className="navbar__links">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`navbar__link ${isActive(link.path) ? 'navbar__link--active' : ''}`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <div className="navbar__cta">
                    <Link to="/contact">
                        <Button variant="primary" size="medium">
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="navbar__mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${mobileMenuOpen ? 'hamburger--open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`navbar__mobile-menu ${mobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
                <ul className="navbar__mobile-links">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`navbar__mobile-link ${isActive(link.path) ? 'navbar__mobile-link--active' : ''}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                            <Button variant="primary" size="large" className="w-full">
                                Get Started
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
