import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GlitchText } from '../components/GlitchText';
import { Shield, Brain, Network, Globe2, LineChart } from 'lucide-react';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function FounderPage() {
  const achievements = [
    {
      icon: Shield,
      title: 'Adaptive Regulatory Compliance Systems (ARCS)',
      description:
        'Pioneered real-time regulatory monitoring with sub-100ms response times',
    },
    {
      icon: Brain,
      title: 'Predictive Threat Actor Profiling',
      description: 'Developed AI-driven systems for cyber espionage detection',
    },
    {
      icon: Network,
      title: 'Dynamic Compliance Frameworks',
      description:
        'Created adaptive frameworks for critical infrastructure protection',
    },
  ];

  const qaItems = [
    {
      question: 'Who is James Scott?',
      answer:
        'James Scott is a visionary in cybersecurity and the founder of Black Box Analytix. Recognized for his contributions to critical infrastructure protection and adaptive compliance systems, Scott has redefined the role of technology in safeguarding global operations.',
    },
    {
      question: 'What Innovations Has James Scott Introduced in Cybersecurity?',
      answer:
        'Scott is known for developing Adaptive Regulatory Compliance Systems (ARCS) for real-time regulatory monitoring, predictive threat actor profiling and cyber espionage detection systems, and dynamic compliance frameworks tailored for critical industries.',
    },
    {
      question:
        'How Does James Scott Approach Critical Infrastructure Protection?',
      answer:
        'By integrating real-time data analytics, machine learning, and AI-powered systems, Scott creates strategies that dynamically adapt to emerging threats, ensuring uninterrupted operations in critical sectors like energy, finance, and defense.',
    },
    {
      question: 'What Makes James Scott a Thought Leader in Cybersecurity?',
      answer:
        'Through his leadership in think tanks and initiatives like ARCS and ARCF, Scott blends innovative technology with policy strategies to provide unparalleled insights and tools for global resilience.',
    },
    {
      question:
        'What Role Does James Scott Play in the Cybersecurity Think Tank Community?',
      answer:
        'Scott leads multiple DC-based think tanks, offering solutions that merge diplomacy, technology, and global collaboration. His institutes focus on fostering resilience, sustainability, and proactive cybersecurity measures.',
    },
  ];

  const features = [
    {
      icon: Globe2,
      title: 'Real-Time Monitoring',
      description:
        'ARCS detects and responds to regulatory or threat shifts in under 100ms, ensuring compliance and system integrity',
    },
    {
      icon: Brain,
      title: 'Predictive Compliance',
      description:
        'Advanced ML models forecast regulatory trends, delivering 95% accuracy in proactive defense measures',
    },
    {
      icon: LineChart,
      title: 'Dynamic Risk Mitigation',
      description:
        'ARCF applies scenario-based modeling to minimize exposure to geopolitical risks and cyberattacks',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>
          James Scott | Visionary Leader in Cybersecurity and Critical
          Infrastructure
        </title>
        <meta
          name="description"
          content="Discover James Scott, the founder of Black Box Analytix, renowned for his pioneering work in cybersecurity, critical infrastructure protection, and strategic risk intelligence."
        />
        <meta
          name="keywords"
          content="James Scott, Black Box Analytix Founder, Cybersecurity Visionary, Critical Infrastructure Specialist, DC Think Tank Leader, Advanced Threat Analysis, ARCS Innovator"
        />
        <meta name="author" content="James Scott" />
        <meta property="og:site_name" content="Black Box Analytix" />
        <meta
          property="og:image:title"
          content="James Scott - Cybersecurity Visionary and Innovator"
        />
        <meta
          property="og:image:alt"
          content="James Scott, founder of Black Box Analytix, leading innovations in cybersecurity and critical infrastructure"
        />
      </Helmet>
      <Navbar />
      <main className="pt-16">
        <section className="relative py-24 bg-black">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-600/20 to-transparent top-0"></div>
            <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-600/20 to-transparent bottom-0"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Rest of the component content remains the same */}
            {/* Hero Section */}
            <div className="text-center mb-16">
              <GlitchText text="James Scott" className="mb-4" />
              <h2 className="text-2xl text-red-600 mb-8">
                Founder & Visionary
              </h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                James Scott, the founder of Black Box Analytix, is a globally
                acclaimed cybersecurity expert and thought leader. With decades
                of experience in threat analysis, infrastructure resilience, and
                cyber intelligence, he has pioneered solutions that integrate
                AI, real-time analytics, and compliance frameworks to protect
                against the world's most sophisticated cyber threats.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 to-red-600/0 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative p-6 bg-black/50 rounded-lg border border-white/10 hover:border-red-600/50 transition-all duration-300">
                    <achievement.icon className="w-12 h-12 text-red-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-white/60">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Q&A Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Q&A with James Scott</h2>
              <div className="space-y-6">
                {qaItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 to-red-600/0 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="relative p-6 bg-black/50 rounded-lg border border-white/10 hover:border-red-600/50 transition-all duration-300">
                      <h3 className="text-lg font-semibold mb-2">
                        {item.question}
                      </h3>
                      <p className="text-white/60">{item.answer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">
                ARCS & ARCF Integration Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 to-red-600/0 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="relative p-6 bg-black/50 rounded-lg border border-white/10 hover:border-red-600/50 transition-all duration-300">
                      <feature.icon className="w-12 h-12 text-red-600 mb-4" />
                      <h3 className="text-lg font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/60">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <p className="text-lg text-white/80 mb-8">
                Learn more about James Scott's groundbreaking vision and explore
                how Black Box Analytix can safeguard your critical operations.
              </p>
              <Link to="/contact" className="button-link">
                <Button>
                  Get in Touch
                  <span className="ml-2">→</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
