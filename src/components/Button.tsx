import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function Button({ 
  children, 
  className = '', 
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false
}: ButtonProps) {
  return (
    <motion.button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative
        px-8 py-3 
        ${variant === 'primary' ? 'bg-red-600 text-white' : 'bg-transparent text-white'}
        border-2
        ${variant === 'primary' ? 'border-red-600' : 'border-white/20'}
        hover:bg-transparent 
        transition-all duration-300 
        overflow-hidden
        group
        animate-fade-in
        hover:animate-pulse-glow
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:hover:scale-100
        ${className}
      `}
    >
      {/* Enhanced glowing effect */}
      <motion.div 
        className={`
          absolute inset-0 
          ${variant === 'primary' ? 'bg-red-600/20' : 'bg-white/5'}
          blur-lg 
          group-hover:bg-red-600/40 
          transition-colors duration-300
          animate-pulse-glow
        `}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Button content with wave animation */}
      <motion.span 
        className="relative z-10 flex items-center justify-center gap-2"
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {children}
      </motion.span>

      {/* Enhanced hover line animation */}
      <motion.span 
        className="
          absolute bottom-0 left-0 w-full h-[2px]
          bg-current transform scale-x-0 
          group-hover:scale-x-100 
          transition-transform duration-300 
          origin-left
          animate-glow
        "
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Enhanced hover background animation */}
      <motion.div 
        className={`
          absolute inset-0 
          ${variant === 'primary' ? 'bg-red-600' : 'bg-white/10'}
          transform translate-y-full 
          group-hover:translate-y-0 
          transition-transform duration-300
          group-hover:animate-pulse-glow
        `}
        initial={{ y: "100%" }}
        whileHover={{ y: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Ripple effect container */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="
            absolute inset-0 
            transform scale-0 
            group-hover:animate-ripple 
            bg-white/20
            rounded-full
            pointer-events-none
          "
          initial={{ scale: 0 }}
          whileHover={{ scale: 2 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.button>
  );
}