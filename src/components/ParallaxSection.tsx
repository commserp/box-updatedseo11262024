import React from 'react';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export function ParallaxSection() {
  return (
    <Parallax
      blur={0}
      bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
      bgImageAlt="Digital Globe"
      strength={200}
      className="relative h-[50vh]"
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Shield className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">
            Global Intelligence, Local Impact
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Transforming complex data into actionable intelligence for a safer, more secure world.
          </p>
        </motion.div>
      </div>
    </Parallax>
  );
}