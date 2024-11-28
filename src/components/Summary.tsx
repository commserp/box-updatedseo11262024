import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Network } from 'lucide-react';

export function Summary() {
  return (
    <section className="relative py-16 bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-600/20 to-transparent top-0"></div>
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-600/20 to-transparent bottom-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative group bg-black/50 p-8 rounded-lg border border-white/10 hover:border-red-600/50 transition-all duration-300"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 to-red-600/0 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          
          <div className="relative">
            <div className="flex justify-center space-x-8 mb-6">
              <Shield className="w-8 h-8 text-red-600 animate-pulse" />
              <Brain className="w-8 h-8 text-red-600 animate-pulse-slow" />
              <Network className="w-8 h-8 text-red-600 animate-pulse" />
            </div>
            
            <p className="text-white/80 text-lg text-center max-w-3xl mx-auto">
              At the forefront of global cybersecurity, Black Box Analytix offers state-of-the-art solutions in critical infrastructure protection, threat actor profiling, and cyber espionage detection. Led by visionary James Scott, the firm employs AI, real-time analytics, and machine learning to provide proactive defense strategies for organizations in high-stakes industries.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}