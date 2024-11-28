import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface AnimatedTaglineProps {
  className?: string;
}

export function AnimatedTagline({ className = '' }: AnimatedTaglineProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={`overflow-hidden ${className}`}
    >
      <div className="flex animate-scroll whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <motion.div 
            key={i} 
            className="flex items-center"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <motion.span 
              className="text-sm whitespace-nowrap opacity-60 px-4 animate-pulse-slow"
              whileHover={{ scale: 1.05, color: '#ef4444' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Ready for Anything
            </motion.span>
            <span className="text-sm whitespace-nowrap text-red-600 opacity-60 px-4">
              •
            </span>
            <motion.span 
              className="text-sm whitespace-nowrap opacity-60 px-4 animate-pulse-slow"
              whileHover={{ scale: 1.05, color: '#ef4444' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Prepared for Everything
            </motion.span>
            <span className="text-sm whitespace-nowrap text-red-600 opacity-60 px-4">
              •
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}