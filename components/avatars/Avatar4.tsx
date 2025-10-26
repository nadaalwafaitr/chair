import React from 'react';

export const Avatar4: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g>
            <rect x="30" y="75" width="40" height="20" rx="5" fill="#c2410c"/>
            <path d="M 50 80 C 30 80, 30 30, 50 30 C 70 30, 70 80, 50 80 Z" fill="#bbf7d0" />
            <path d="M 35 60 C 20 60, 20 40, 35 40" stroke="#166534" strokeWidth="6" fill="none" strokeLinecap="round"/>
            <path d="M 65 60 C 80 60, 80 40, 65 40" stroke="#166534" strokeWidth="6" fill="none" strokeLinecap="round"/>
            <circle cx="45" cy="50" r="4" fill="#166534"/>
            <circle cx="60" cy="50" r="4" fill="#166534"/>
            <path d="M 45 65 Q 52.5 70, 60 65" stroke="#166534" strokeWidth="4" fill="none" strokeLinecap="round"/>
        </g>
    </svg>
);
