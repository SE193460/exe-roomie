import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    leftIcon,
    rightIcon,
    isLoading,
    className = '',
    disabled,
    ...props
}) => {
    const baseClass = `btn btn-${variant} btn-${size} ${fullWidth ? 'w-full' : ''} ${className}`;

    return (
        <button className={baseClass} disabled={disabled || isLoading} {...props}>
            {isLoading ? (
                <span className="loader mr-2"></span>
            ) : leftIcon ? (
                <span className="btn-icon-left">{leftIcon}</span>
            ) : null}
            <span className="btn-text">{children}</span>
            {rightIcon && <span className="btn-icon-right">{rightIcon}</span>}
        </button>
    );
};

export default Button;
