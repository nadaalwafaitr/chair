
import React from 'react';

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ children, icon, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "px-6 py-3 rounded-full font-bold text-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100";
  
  const variantClasses = {
    primary: 'bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-400',
    secondary: 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-300',
    ghost: 'bg-transparent hover:bg-gray-200 text-gray-700 shadow-none border border-gray-300 focus:ring-gray-300'
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {icon}
      {children}
    </button>
  );
};
