import React from 'react';

export const Avatar6: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path d="M 20 90 L 20 50 C 20 20, 80 20, 80 50 L 80 90 L 70 80 L 60 90 L 50 80 L 40 90 L 30 80 Z" fill="#f1f5f9" />
            <circle cx="40" cy="55" r="8" fill="#1e293b" />
            <circle cx="60" cy="55" r="8" fill="#1e293b" />
            <path d="M 45 75 Q 50 65, 55 75" stroke="#1e293b" strokeWidth="5" fill="none" strokeLinecap="round" />
        </g>
    </svg>
);
