import React from 'react';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    onClick,
    className = '',
    href,
    ...props
}) => {
    const baseClass = 'custom-button';
    const variantClass = `custom-button--${variant}`;
    const sizeClass = `custom-button--${size}`;

    const buttonClasses = `${baseClass} ${variantClass} ${sizeClass} ${className}`;

    if (href) {
        return (
            <a href={href} className={buttonClasses} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={buttonClasses} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
