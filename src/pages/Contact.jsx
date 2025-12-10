import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for reaching out! We will get back to you soon.');
        setFormData({ name: '', email: '', company: '', message: '' });
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <div className="contact-hero__content">
                        <h1 className="contact-hero__title">Let's Build Something Great Together</h1>
                        <p className="contact-hero__description">
                            Ready to transform your business with world-class engineering talent?
                            Get in touch with Sunsys Global today.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Information */}
                        <div className="contact-info">
                            <h2>Get in Touch</h2>
                            <p className="contact-info__description">
                                Ready to access elite engineering talent? Whether you have questions
                                about our services, need a custom solution, or want to discuss your
                                project, our team is here to help you succeed.
                            </p>

                            <div className="contact-details">
                                <div className="contact-detail">
                                    <div className="contact-detail__icon">📧</div>
                                    <div className="contact-detail__content">
                                        <h3>Email</h3>
                                        <a href="mailto:contact@sunsysglobal.com">contact@sunsysglobal.com</a>
                                    </div>
                                </div>

                                <div className="contact-detail">
                                    <div className="contact-detail__icon">📞</div>
                                    <div className="contact-detail__content">
                                        <h3>Phone</h3>
                                        <a href="tel:+919876543210">+91 98765 43210</a>
                                    </div>
                                </div>

                                <div className="contact-detail">
                                    <div className="contact-detail__icon">📍</div>
                                    <div className="contact-detail__content">
                                        <h3>Location</h3>
                                        <p>Mumbai, India</p>
                                    </div>
                                </div>

                                <div className="contact-detail">
                                    <div className="contact-detail__icon">🕒</div>
                                    <div className="contact-detail__content">
                                        <h3>Availability</h3>
                                        <p>24/7 Support Across All Time Zones</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-links">
                                <h3>Follow Us</h3>
                                <div className="social-icons">
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                        </svg>
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                            <circle cx="4" cy="4" r="2" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <h2>Send us a Message</h2>

                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your Company"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="custom-button custom-button--primary custom-button--large">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
