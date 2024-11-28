import React, { useEffect, useState } from 'react';
import { Shield, Lock, AlertTriangle, Eye, Network, Workflow, Activity, Database, LineChart } from 'lucide-react';
import { GlitchText } from '../GlitchText';
import { Button } from '../Button';

export function CyberSecurityService() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dataBreaches, setDataBreaches] = useState<Array<{ x: number; y: number; speed: number }>>([]);

  useEffect(() => {
    // Generate initial data breaches
    const breaches = Array.from({ length: 10 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: Math.random() * 2 + 1
    }));
    setDataBreaches(breaches);

    // Update data breaches periodically
    const interval = setInterval(() => {
      setDataBreaches(prev => prev.map(breach => ({
        ...breach,
        y: breach.y + breach.speed > 100 ? 0 : breach.y + breach.speed
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  return (
    <section id="cyber-attack" className="relative py-24 bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-600/20 to-transparent top-0"></div>
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-600/20 to-transparent bottom-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <GlitchText text="Cyberattack Analysis" className="mb-6" />
            <p className="text-white/80 text-lg mb-8">
              Advanced threat detection and response platform providing real-time monitoring
              of cyber threats, APT actors, and infrastructure vulnerabilities. Our
              comprehensive dashboard integrates multiple security feeds for rapid incident response.
            </p>

            <div className="space-y-6 mb-8">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 to-red-600/0 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative flex items-start space-x-4 p-4 bg-black/50 rounded-lg border border-white/10 group-hover:border-red-600/50 transition-all duration-300">
                  <div className="p-2 bg-red-600/10 rounded">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Advanced Threat Detection</h3>
                    <p className="text-white/60 text-sm">Real-time monitoring and analysis of cyber threats</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 to-red-600/0 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative flex items-start space-x-4 p-4 bg-black/50 rounded-lg border border-white/10 group-hover:border-red-600/50 transition-all duration-300">
                  <div className="p-2 bg-red-600/10 rounded">
                    <Network className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Network Security Analysis</h3>
                    <p className="text-white/60 text-sm">Comprehensive network monitoring and security assessment</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 to-red-600/0 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative flex items-start space-x-4 p-4 bg-black/50 rounded-lg border border-white/10 group-hover:border-red-600/50 transition-all duration-300">
                  <div className="p-2 bg-red-600/10 rounded">
                    <Activity className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Incident Response</h3>
                    <p className="text-white/60 text-sm">Automated response protocols and threat mitigation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button>
                Live Demo
                <span className="ml-2">→</span>
              </Button>
              <Button variant="outline">
                Documentation
                <span className="ml-2">↗</span>
              </Button>
            </div>
          </div>

          <div className="relative" onMouseMove={handleMouseMove}>
            <div className="aspect-square rounded-lg overflow-hidden bg-black border border-white/10 relative">
              {/* Background grid */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,0.1) 1px, transparent 1px)',
                  backgroundSize: '50px 50px',
                  transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
                }}
              />

              {/* Central shield */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <Shield 
                    className="w-48 h-48 text-red-600 animate-pulse-slow relative z-20" 
                    style={{
                      transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                    }}
                  />
                  
                  {/* Lock overlay */}
                  <Lock 
                    className="absolute inset-0 w-48 h-48 text-red-600/20 animate-spin-slow" 
                    style={{
                      transform: `translate(${mousePosition.x * 1.2}px, ${mousePosition.y * 1.2}px)`
                    }}
                  />
                </div>
              </div>

              {/* Data breaches */}
              {dataBreaches.map((breach, index) => (
                <div
                  key={index}
                  className="absolute w-1 h-4 bg-red-600/50"
                  style={{
                    left: `${breach.x}%`,
                    top: `${breach.y}%`,
                    transform: `
                      translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)
                      rotate(45deg)
                    `
                  }}
                >
                  <div className="absolute w-1 h-4 bg-red-600 animate-pulse" />
                </div>
              ))}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full">
                {dataBreaches.slice(0, 5).map((breach, i) => {
                  const nextBreach = dataBreaches[(i + 1) % dataBreaches.length];
                  return (
                    <line
                      key={i}
                      x1={`${breach.x}%`}
                      y1={`${breach.y}%`}
                      x2={`${nextBreach.x}%`}
                      y2={`${nextBreach.y}%`}
                      className="stroke-red-600/20"
                      strokeWidth="1"
                      style={{
                        transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
                      }}
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="0"
                        to="20"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </line>
                  );
                })}
              </svg>

              {/* Alert indicators */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
                  }}
                >
                  <div className="w-full h-full bg-red-600/50 rounded-full animate-ping" />
                  <div className="absolute inset-0 bg-red-600 rounded-full animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}