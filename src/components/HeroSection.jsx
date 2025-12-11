import React from 'react';
import Button from './Button';
import './HeroSection.css';

const HeroSection = ({
    title,
    subtitle,
    description,
    serviceLine,
    primaryButtonText,
    secondaryButtonText,
    primaryButtonAction,
    secondaryButtonAction,
    imageSrc,
    imageAlt = 'Hero illustration',
    showTrustBadges = true
}) => {
    const trustBadges = [
        { icon: '✔', text: 'Trusted by Global Startups' },
        { icon: '✔', text: 'PAN-India Networks' },
        { icon: '✔', text: 'IIT/NIT Talent Pool' }
    ];

    return (
        <section className="hero-section">
            <div className="hero-section__container container">
                <div className="hero-section__content">
                    {/* LEFT SIDE - Text Block */}
                    <div className="hero-section__text fade-in">
                        <h1 className="hero-section__title">{title}</h1>

                        {subtitle && (
                            <p className="hero-section__subtitle">{subtitle}</p>
                        )}

                        {serviceLine && (
                            <div className="hero-section__service-line">
                                {serviceLine}
                            </div>
                        )}

                        <div className="hero-section__buttons">
                            {primaryButtonText && (
                                <Button
                                    variant="primary"
                                    size="large"
                                    onClick={primaryButtonAction}
                                >
                                    {primaryButtonText}
                                </Button>
                            )}
                            {secondaryButtonText && (
                                <Button
                                    variant="secondary"
                                    size="large"
                                    onClick={secondaryButtonAction}
                                >
                                    {secondaryButtonText}
                                </Button>
                            )}
                        </div>

                        {/* Trust Badges */}
                        {showTrustBadges && (
                            <div className="hero-section__trust-badges">
                                {trustBadges.map((badge, index) => (
                                    <div key={index} className="trust-badge">
                                        <span className="trust-badge__icon">{badge.icon}</span>
                                        <span className="trust-badge__text">{badge.text}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* RIGHT SIDE - Visual Block */}
                    {imageSrc && (
                        <div className="hero-section__image-wrapper">
                            <div className="hero-section__image float-animation">
                                <img src={imageSrc} alt={imageAlt} />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Animated Background */}
            <div className="hero-section__bg-animated"></div>
            <div className="hero-section__bg-grid"></div>
        </section>
    );
};

export default HeroSection;
