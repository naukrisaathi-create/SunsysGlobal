import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/contact');
    };

    const handleBrowseTalent = () => {
        navigate('/why-us');
    };

    return (
        <div className="home-page">
            <HeroSection
                title="Build World-Class Engineering Teams — Fast, Compliant & Affordable"
                subtitle="Connecting elite Indian & global tech talent with high-growth companies worldwide."
                serviceLine="Staffing | Offshore Teams | Talent Deployment | Global Hiring | POSH | L&D"
                primaryButtonText="Hire Engineering Talent"
                secondaryButtonText="Apply for Global Roles"
                primaryButtonAction={handleGetStarted}
                secondaryButtonAction={handleBrowseTalent}
                imageSrc="/hero-engineers.png"
                imageAlt="Diverse engineers working globally"
            />

            {/* About Sunsys Global Section */}
            <section className="about-section">
                <div className="container">
                    <div className="about-grid">
                        {/* Left: Heading + Content */}
                        <div className="about-content">
                            <h2 className="about-title">About Sunsys Global</h2>
                            <p className="about-description">
                                Sunsys Global is the international Talent & Workforce Solutions Division of
                                Sunsys Techsol Pvt. Ltd. We help global companies scale engineering capacity
                                with elite developers, skilled professionals, and fresh talent — at up to
                                <strong> 40% lower cost</strong>.
                            </p>
                            <p className="about-description">
                                We also open global career pathways for Indian engineers through remote roles,
                                international deployments, and startup opportunities.
                            </p>
                        </div>

                        {/* Right: Stats Block */}
                        <div className="about-stats">
                            <div className="stat-item">
                                <div className="stat-value">500+</div>
                                <div className="stat-label">Projects Delivered</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">300+</div>
                                <div className="stat-label">Elite Developers</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">50+</div>
                                <div className="stat-label">Global Clients</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">98%</div>
                                <div className="stat-label">Success & Retention</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Choose Sunsys Global?</h2>
                        <p>Empowering businesses with exceptional engineering talent</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card fade-in">
                            <div className="feature-icon">🌏</div>
                            <h3>Global Talent Pool</h3>
                            <p>Access to world-class developers from across the globe, bringing diverse perspectives and expertise.</p>
                        </div>

                        <div className="feature-card fade-in">
                            <div className="feature-icon">⚡</div>
                            <h3>Rapid Deployment</h3>
                            <p>Get your team up and running in days, not months, with our streamlined onboarding process.</p>
                        </div>

                        <div className="feature-card fade-in">
                            <div className="feature-icon">🚀</div>
                            <h3>Scalable Solutions</h3>
                            <p>Flexible team scaling to match your project needs and business growth trajectory.</p>
                        </div>

                        <div className="feature-card fade-in">
                            <div className="feature-icon">🔒</div>
                            <h3>Enterprise Security</h3>
                            <p>Bank-grade security protocols and compliance standards built into every engagement.</p>
                        </div>

                        <div className="feature-card fade-in">
                            <div className="feature-icon">🎯</div>
                            <h3>Quality Assurance</h3>
                            <p>Rigorous vetting process ensures only top 5% of developers join our talent network.</p>
                        </div>

                        <div className="feature-card fade-in">
                            <div className="feature-icon">🕐</div>
                            <h3>24/7 Support</h3>
                            <p>Round-the-clock support across all time zones to keep your projects moving forward.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="industries-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Industries We Serve</h2>
                        <p>Delivering excellence across multiple sectors</p>
                    </div>

                    <div className="industries-grid">
                        <div className="industry-card">
                            <div className="industry-icon">💰</div>
                            <h3>SaaS</h3>
                            <p>Cloud-based software solutions that scale</p>
                        </div>

                        <div className="industry-card">
                            <div className="industry-icon">🏦</div>
                            <h3>FinTech</h3>
                            <p>Secure financial technology platforms</p>
                        </div>

                        <div className="industry-card">
                            <div className="industry-icon">🎓</div>
                            <h3>EdTech</h3>
                            <p>Educational technology and learning platforms</p>
                        </div>

                        <div className="industry-card">
                            <div className="industry-icon">🏥</div>
                            <h3>Healthcare Tech</h3>
                            <p>Healthcare innovation and digital solutions</p>
                        </div>

                        <div className="industry-card">
                            <div className="industry-icon">🛒</div>
                            <h3>E-Commerce</h3>
                            <p>Powerful online retail experiences</p>
                        </div>

                        <div className="industry-card">
                            <div className="industry-icon">🏢</div>
                            <h3>Enterprise IT</h3>
                            <p>Enterprise-grade IT solutions and infrastructure</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Accelerate Your Innovation Pipeline?</h2>
                        <p>Join hundreds of companies worldwide who trust Sunsys Global to deliver exceptional engineering talent and innovative solutions.</p>
                        <div className="cta-buttons">
                            <button
                                className="custom-button custom-button--primary custom-button--large"
                                onClick={handleGetStarted}
                            >
                                Start Your Journey
                            </button>
                            <button
                                className="custom-button custom-button--secondary custom-button--large"
                                onClick={handleGetStarted}
                            >
                                Talk to an Expert
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
