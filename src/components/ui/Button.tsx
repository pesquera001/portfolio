import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <button className={`rounded-lg px-4 py-2 font-sans transition-colors ${className}`} {...props}>
    {children}
  </button>
);

export default Button; 