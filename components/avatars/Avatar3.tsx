import React from 'react';

export const Avatar3: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g>
            <rect x="20" y="30" width="60" height="50" rx="10" fill="#d1d5db" />
            <rect x="15" y="50" width="10" height="20" rx="5" fill="#9ca3af" />
            <rect x="75" y="50" width="10" height="20" rx="5" fill="#9ca3af" />
            <rect x="35" y="80" width="10" height="15" rx="5" fill="#9ca3af" />
            <rect x="55" y="80" width="10" height="15" rx="5" fill="#9ca3af" />
            <circle cx="50" cy="20" r="10" fill="#a5f3fc" />
            <rect x="30" y="45" width="40" height="15" fill="#fef08a"/>
            <circle cx="40" cy="45" r="5" fill="#1f2937" />
            <circle cx="60" cy="45" r="5" fill="#1f2937" />
        </g>
    </svg>
);
