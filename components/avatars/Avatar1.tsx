import React from 'react';

export const Avatar1: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M 20 95 Q 50 80, 80 95 L 80 50 C 80 20, 20 20, 20 50 Z" fill="#e9d5ff" />
      <circle cx="50" cy="50" r="15" fill="#fff" />
      <circle cx="50" cy="50" r="8" fill="#581c87" />
      <path d="M 35 75 Q 50 65, 65 75" stroke="#581c87" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M 20 30 Q 30 20, 40 30" stroke="#581c87" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M 80 30 Q 70 20, 60 30" stroke="#581c87" strokeWidth="6" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);
