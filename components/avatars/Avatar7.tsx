import React from 'react';

export const Avatar7: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g>
            <ellipse cx="50" cy="50" rx="40" ry="20" fill="#fed7aa" transform="rotate(-30 50 50)" />
            <circle cx="50" cy="50" r="30" fill="#a5f3fc" />
            <circle cx="42" cy="45" r="5" fill="#0e7490" />
            <circle cx="58" cy="45" r="5" fill="#0e7490" />
            <path d="M 45 60 Q 50 65, 55 60" stroke="#0e7490" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>
    </svg>
);
