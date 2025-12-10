import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WhyUs.css';

const WhyUs = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/contact');
    };

    return (
        <div className="why-us-page">
            {/* Hero Section */}
            <section className="why-us-hero">
                <div className="container">
                    <div className="why-us-hero__content">
                        <div className="why-us-hero__icon">🌟</div>
                        <h1 className="why-us-hero__title">Why Choose Sunsys Global?</h1>
                        <p className="why-us-hero__description">
                            We're not just a staffing agency—we're your strategic partner in building
                            world-class engineering teams. Sunsys Global connects you with elite talent
                            that drives innovation, accelerates growth, and delivers exceptional results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="benefits-section">
                <div className="container">
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-number">01</div>
                            <div className="benefit-icon">�</div>
                            <h3>Global Talent Network</h3>
                            <p>
                                Access to elite developers from around the world, bringing diverse
                                perspectives and expertise to solve your unique challenges.
                            </p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-number">02</div>
                            <div className="benefit-icon">🎯</div>
                            <h3>Top 5% Talent Only</h3>
                            <p>
                                Rigorous vetting process ensures only the most skilled and experienced
                                developers join our network—no compromises on quality.
                            </p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-number">03</div>
                            <div className="benefit-icon">⚡</div>
                            <h3>Rapid Onboarding</h3>
                            <p>
                                Get your team up and running in days, not months. Our streamlined
                                process ensures minimal disruption to your workflow.
                            </p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-number">04</div>
                            <div className="benefit-icon">�</div>
                            <h3>Enterprise Security</h3>
                            <p>
                                Bank-grade security protocols and compliance standards ensure your
                                intellectual property and data remain protected.
                            </p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-number">05</div>
                            <div className="benefit-icon">🚀</div>
                            <h3>Flexible Scaling</h3>
                            <p>
                                Scale your team up or down based on project needs. Pay only for
                                what you use with no long-term commitments.
                            </p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-number">06</div>
                            <div className="benefit-icon">🕐</div>
                            <h3>24/7 Availability</h3>
                            <p>
                                Round-the-clock support across all time zones keeps your projects
                                moving forward without delays.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section">
                <div className="container">
                    <div className="section-header">
                        <h2>How We Work With You</h2>
                        <p>A seamless partnership from start to success</p>
                    </div>

                    <div className="process-timeline">
                        <div className="process-step">
                            <div className="process-step__number">1</div>
                            <div className="process-step__content">
                                <h3>Understand Your Needs</h3>
                                <p>We dive deep into your project requirements, tech stack, and team culture.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="process-step__number">2</div>
                            <div className="process-step__content">
                                <h3>Match Perfect Talent</h3>
                                <p>We handpick developers from our elite network who perfectly fit your needs.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="process-step__number">3</div>
                            <div className="process-step__content">
                                <h3>Seamless Integration</h3>
                                <p>Your new team members integrate smoothly with your existing workflows.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="process-step__number">4</div>
                            <div className="process-step__content">
                                <h3>Continuous Success</h3>
                                <p>Ongoing support and optimization to ensure long-term project success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="why-us-cta">
                <div className="container">
                    <div className="why-us-cta__content">
                        <h2>Ready to Build Your Dream Team?</h2>
                        <p>Join hundreds of companies who trust Sunsys Global for their engineering needs.</p>
                        <button
                            className="custom-button custom-button--primary custom-button--large"
                            onClick={handleGetStarted}
                        >
                            Start Your Journey
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyUs;
