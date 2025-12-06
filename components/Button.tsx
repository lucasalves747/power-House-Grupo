import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  fullWidth = false
}) => {
  const baseStyles = "relative font-semibold tracking-wide py-3 px-8 rounded-full transition-all duration-300 group flex items-center justify-center gap-2 overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:brightness-110 shadow-violet-500/20",
    secondary: "bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20",
    accent: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:brightness-110 shadow-cyan-500/20"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </button>
  );
};