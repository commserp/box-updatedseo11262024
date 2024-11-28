import React, { useState } from 'react';
import { GlitchText } from './GlitchText';
import { ChevronDown, Brain, Shield, Globe2, Lock, Network } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: number;
  question: string;
  answer: React.ReactNode;
  Icon: React.ElementType;
}

export function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "What is Black Box Analytix?",
      answer: (
        <p>
          Black Box Analytix, founded by James Scott, is a global leader in cybersecurity, 
          providing innovative solutions for critical infrastructure protection, threat analytics, 
          and operational resilience. The firm specializes in safeguarding high-risk industries 
          through predictive and adaptive intelligence.
        </p>
      ),
      Icon: Shield
    },
    {
      id: 2,
      question: "How Does Black Box Analytix Protect Against Cyber Threats?",
      answer: (
        <p>
          Our solutions combine advanced AI-driven threat detection, real-time compliance monitoring, 
          and predictive modeling to counteract cyber espionage, threat actors, and infrastructure 
          vulnerabilities. These tools ensure immediate response and long-term resilience.
        </p>
      ),
      Icon: Lock
    },
    {
      id: 3,
      question: "What Services Does Black Box Analytix Offer?",
      answer: (
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-2"></span>
            <span>Critical Infrastructure Protection: Secures essential systems from nation-state actors and advanced persistent threats.</span>
          </li>
          <li className="flex items-start">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-2"></span>
            <span>Threat Actor Profiling: Maps and neutralizes high-priority cybercriminal activities.</span>
          </li>
          <li className="flex items-start">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-2"></span>
            <span>Cyber Espionage Detection: Identifies and mitigates targeted espionage threats with real-time analytics.</span>
          </li>
          <li className="flex items-start">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-2"></span>
            <span>Conflict Zone Mapping: Offers situational awareness and risk assessment in geopolitical hotspots.</span>
          </li>
        </ul>
      ),
      Icon: Network
    },
    {
      id: 4,
      question: "Why Choose Black Box Analytix for Cybersecurity?",
      answer: (
        <p>
          Black Box Analytix, under James Scott's leadership, uniquely integrates ARCS 
          (Adaptive Regulatory Compliance System) and ARCF (Adaptive Regulatory Compliance Framework) 
          to deliver tailored, scalable, and adaptive cybersecurity solutions. This ensures 
          unparalleled protection in an evolving cyber landscape.
        </p>
      ),
      Icon: Globe2
    },
    {
      id: 5,
      question: "How Does Black Box Analytix Incorporate AI and Predictive Analytics?",
      answer: (
        <p>
          Our systems use ensemble machine learning and Bayesian models to predict threats 
          with 95% accuracy while dynamically adapting to regulatory changes and emerging risks.
        </p>
      ),
      Icon: Brain
    }
  ];

  return (
    <section id="faq" className="relative py-24 bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-600/20 to-transparent top-0"></div>
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-600/20 to-transparent bottom-0"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <GlitchText text="Frequently Asked Questions" className="mb-4" />
          <p className="text-white/60 max-w-2xl mx-auto">
            Get answers to common questions about Black Box Analytix's cybersecurity solutions and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 to-red-600/0 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-black/50 border border-white/10 rounded-lg overflow-hidden group-hover:border-red-600/50 transition-all duration-300">
                <button
                  onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-red-600/10 rounded">
                      <item.Icon className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="font-medium">{item.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-white/60 transition-transform duration-300 ${
                      openItem === item.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openItem === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-4 text-white/80">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}