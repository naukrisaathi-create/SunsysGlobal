import React from 'react';
import HeroSection from '../components/HeroSection';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <HeroSection
                title="Empowering Innovation Through Global Talent"
                subtitle="Sunsys Global is your trusted partner in accessing world-class engineering talent. We connect businesses with elite developers who build scalable, innovative, and future-proof solutions that drive success."
                imageSrc="https://illustrations.popsy.co/blue/team.svg"
                imageAlt="Global team collaboration"
                showTrustBadges={false}
            />

            {/* Mission Section */}
            <section className="mission-section">
                <div className="container">
                    <div className="mission-content">
                        <div className="mission-text">
                            <h2>Our Mission</h2>
                            <p>
                                To empower global organizations with elite engineering talent who drive innovation,
                                excellence, and measurable business impact.
                            </p>
                            <p>
                                At Sunsys Global, we bridge the gap between ambitious businesses and exceptional
                                engineering talent. We don't just provide developers—we forge partnerships. With a
                                rigorous vetting process that selects only the top 5% of talent, we ensure that every
                                engagement delivers measurable results and lasting value.
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
                                <div className="stat-label">Success & Retention</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="vision-section">
                <div className="container">
                    <div className="vision-content">
                        <h2>Our Vision</h2>
                        <p>
                            To become the world's most trusted catalyst for engineering excellence—enabling companies
                            to innovate boldly and scale confidently.
                        </p>
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
                                Only the top 5% of developers join our network. We maintain the highest
                                standards in talent selection and technical expertise.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">🤝</div>
                            <h3>Partnership Mindset</h3>
                            <p>
                                We work as a true extension of your team. Your success is our success,
                                and we're committed to achieving your business objectives.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">🌐</div>
                            <h3>Global Perspective</h3>
                            <p>
                                Diverse, multicultural, round-the-clock efficiency. We bring global
                                perspectives and 24/7 productivity to every engagement.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">🛡️</div>
                            <h3>Trust & Transparency</h3>
                            <p>
                                Clear communication and full accountability. We build lasting relationships
                                through honesty, integrity, and transparent processes.
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
                        <p>Delivering excellence across <strong>SaaS, FinTech, EdTech, Healthcare Tech</strong>, and beyond.</p>
                    </div>

                    <div className="industries-showcase">
                        <div className="industry-badge">SaaS</div>
                        <div className="industry-badge">FinTech</div>
                        <div className="industry-badge">EdTech</div>
                        <div className="industry-badge">Healthcare Tech</div>
                        <div className="industry-badge">E-Commerce</div>
                        <div className="industry-badge">Enterprise IT</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
