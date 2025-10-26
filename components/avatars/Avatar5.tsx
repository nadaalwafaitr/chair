import React from 'react';

export const Avatar5: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path d="M50 5 L61 39 L98 39 L68 62 L79 96 L50 75 L21 96 L32 62 L2 39 L39 39 Z" fill="#fef08a" />
            <circle cx="42" cy="50" r="5" fill="#a16207" />
            <circle cx="58" cy="50" r="5" fill="#a16207" />
            <path d="M 40 65 A 10 10 0 0 0 60 65" stroke="#a16207" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>
    </svg>
);
