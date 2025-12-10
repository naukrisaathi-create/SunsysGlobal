import React from 'react';
import HeroSection from '../components/HeroSection';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <HeroSection
                title="Empowering Innovation Through Global Talent"
                subtitle="🌟 About Sunsys Global"
                description="Sunsys Global is your trusted partner in accessing world-class engineering talent. We connect businesses with elite developers who build scalable, innovative, and future-proof solutions that drive success."
                imageSrc="https://illustrations.popsy.co/blue/team.svg"
                imageAlt="Global team collaboration"
                showStats={false}
            />

            {/* Mission Section */}
            <section className="mission-section">
                <div className="container">
                    <div className="mission-content">
                        <div className="mission-text">
                            <h2>Our Mission</h2>
                            <p>
                                At Sunsys Global, we bridge the gap between ambitious businesses and exceptional
                                engineering talent. Our mission is to empower organizations worldwide with access
                                to top-tier developers who bring innovation, technical excellence, and agility to
                                every project.
                            </p>
                            <p>
                                We don't just provide developers—we forge partnerships. With a rigorous vetting
                                process that selects only the top 5% of talent, we ensure that every engagement
                                delivers measurable results and lasting value.
                            </p>
                        </div>
                        <div className="mission-stats">
                            <div className="stat-card">
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Projects Delivered</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">300+</div>
                                <div className="stat-label">Elite Developers</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Global Clients</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">98%</div>
                                <div className="stat-label">Success Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Core Values</h2>
                        <p>The principles that guide everything we do</p>
                    </div>

                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">🎯</div>
                            <h3>Excellence First</h3>
                            <p>
                                We maintain the highest standards in talent selection, ensuring only
                                the most skilled and experienced developers join our network.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">🤝</div>
                            <h3>Partnership Mindset</h3>
                            <p>
                                Your success is our success. We work as an extension of your team,
                                committed to achieving your business objectives.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">🌐</div>
                            <h3>Global Perspective</h3>
                            <p>
                                With talent spanning multiple continents and time zones, we bring
                                diverse perspectives and round-the-clock productivity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="about-industries-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Industries We Serve</h2>
                        <p>Delivering excellence across <strong>SaaS, FinTech, HealthTech</strong>, and beyond.</p>
                    </div>

                    <div className="industries-showcase">
                        <div className="industry-badge">SaaS</div>
                        <div className="industry-badge">FinTech</div>
                        <div className="industry-badge">HealthTech</div>
                        <div className="industry-badge">E-Commerce</div>
                        <div className="industry-badge">EdTech</div>
                        <div className="industry-badge">AI/ML</div>
                        <div className="industry-badge">Blockchain</div>
                        <div className="industry-badge">IoT</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
