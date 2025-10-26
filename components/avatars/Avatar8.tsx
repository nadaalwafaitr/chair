import React from 'react';

export const Avatar8: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path d="M 50,50 m -45,0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0" fill="#fecaca"/>
            <path d="M 50,50 m -30,0 a 30,30 0 1,0 60,0 a 30,30 0 1,0 -60,0" fill="#bbf7d0"/>
            <path d="M 50,50 m -15,0 a 15,15 0 1,0 30,0 a 15,15 0 1,0 -30,0" fill="#bfdbfe"/>
        </g>
    </svg>
);
