import React from 'react';
import Button from './Button';
import './HeroSection.css';

const HeroSection = ({
    title,
    subtitle,
    description,
    primaryButtonText,
    secondaryButtonText,
    primaryButtonAction,
    secondaryButtonAction,
    imageSrc,
    imageAlt = 'Hero illustration',
    showStats = true
}) => {
    const stats = [
        { value: '500+', label: 'Projects Delivered' },
        { value: '50+', label: 'Happy Clients' },
        { value: '98%', label: 'Success Rate' },
        { value: '24/7', label: 'Support' }
    ];

    return (
        <section className="hero-section">
            <div className="hero-section__container container">
                <div className="hero-section__content">
                    <div className="hero-section__text fade-in">
                        {subtitle && (
                            <p className="hero-section__subtitle">{subtitle}</p>
                        )}
                        <h1 className="hero-section__title">{title}</h1>
                        {description && (
                            <p className="hero-section__description">{description}</p>
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

                        {/* Stats Section */}
                        {showStats && (
                            <div className="hero-section__stats">
                                {stats.map((stat, index) => (
                                    <div key={index} className="hero-section__stat">
                                        <div className="hero-section__stat-value">{stat.value}</div>
                                        <div className="hero-section__stat-label">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

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
