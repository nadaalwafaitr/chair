import React from 'react';

export const Avatar2: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g transform="rotate(-45 50 50)">
            <path d="M 50 10 L 70 50 L 60 55 L 60 80 L 40 80 L 40 55 L 30 50 Z" fill="#bfdbfe" />
            <path d="M 50 10 L 30 50 L 70 50 Z" fill="#fecaca" />
            <circle cx="50" cy="60" r="10" fill="#fff" />
            <path d="M 30 80 L 20 90 L 40 80" fill="#fed7aa"/>
            <path d="M 70 80 L 80 90 L 60 80" fill="#fed7aa"/>
        </g>
    </svg>
);
