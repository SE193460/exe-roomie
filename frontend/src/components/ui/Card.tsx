import React, { type HTMLAttributes } from 'react';
import './Card.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    padding?: 'none' | 'sm' | 'md' | 'lg';
    shadow?: 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
    children,
    padding = 'md',
    shadow = 'md',
    className = '',
    ...props
}) => {
    return (
        <div className={`card padding-${padding} shadow-${shadow} ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Card;
