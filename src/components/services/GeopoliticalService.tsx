import React, { useEffect, useState } from 'react';
import { Globe2, Network, Map, Activity, Radar, Workflow, Shield } from 'lucide-react';
import { GlitchText } from '../GlitchText';
import { Button } from '../Button';

export function GeopoliticalService() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dataPoints, setDataPoints] = useState<Array<{ x: number; y: number; size: number; pulse: boolean }>>([]);

  useEffect(() => {
    // Generate initial data points
    const points = Array.from({ length: 15 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      pulse: Math.random() > 0.5
    }));
    setDataPoints(points);

    // Update data points periodically
    const interval = setInterval(() => {
      setDataPoints(prev => prev.map(point => ({
        ...point,
        pulse: Math.random() > 0.7,
        size: Math.random() * 3 + 1
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const dashboardFeatures = [
    {
      icon: Activity,
      title: "Real-Time Intelligence Feed",
      description: "Live updates on global events, political shifts, and emerging crises with AI-powered impact analysis"
    },
    {
      icon: Network,
      title: "Power Network Analysis",
      description: "Interactive visualization of political relationships, influence channels, and decision-making hierarchies"
    },
    {
      icon: Map,
      title: "Strategic Territory Mapping",
      description: "Dynamic mapping of territorial disputes, resource control, and strategic chokepoints"
    },
    {
      icon: Radar,
      title: "Early Warning System",
      description: "Predictive alerts for political instability, conflict escalation, and diplomatic opportunities"
    },
    {
      icon: Workflow,
      title: "Scenario Modeling",
      description: "Advanced simulation tools for testing diplomatic strategies and predicting geopolitical outcomes"
    }
  ];

  return (
    <section id="geopolitical" className="relative py-24 bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-600/20 to-transparent top-0"></div>
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-600/20 to-transparent bottom-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <GlitchText text="Global Geopolitical Intelligence" className="mb-6" />
            <p className="text-white/80 text-lg mb-8">
              Advanced geopolitical monitoring and analysis platform providing real-time insights 
              into global power dynamics, emerging threats, and strategic opportunities. Our 
              comprehensive dashboard integrates multiple data streams for unparalleled situational awareness.
            </p>

            <div className="space-y-6 mb-8">
              {dashboardFeatures.map((feature, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 to-red-600/0 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="relative flex items-start space-x-4 p-4 bg-black/50 rounded-lg border border-white/10 group-hover:border-red-600/50 transition-all duration-300">
                    <div className="p-2 bg-red-600/10 rounded">
                      <feature.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-white/60 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
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

          {/* Enhanced Interactive Display */}
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

              {/* Central globe */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <Globe2 
                    className="w-48 h-48 text-red-600 animate-spin-slow relative z-20" 
                    style={{
                      transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                    }}
                  />
                  
                  {/* Shield overlay */}
                  <Shield 
                    className="absolute inset-0 w-48 h-48 text-red-600/20 animate-pulse-slow" 
                    style={{
                      transform: `translate(${mousePosition.x * 1.2}px, ${mousePosition.y * 1.2}px)`
                    }}
                  />
                </div>
              </div>
              
              {/* Orbital rings */}
              {[1, 2, 3, 4].map((ring) => (
                <div
                  key={ring}
                  className="absolute border border-red-600/20 rounded-full"
                  style={{
                    width: `${ring * 150}px`,
                    height: `${ring * 150}px`,
                    left: '50%',
                    top: '50%',
                    transform: `
                      translate(-50%, -50%) 
                      rotate(${ring * 45}deg)
                      translate(${mousePosition.x * (0.1 * ring)}px, ${mousePosition.y * (0.1 * ring)}px)
                    `,
                    animation: `spin ${20 + ring * 10}s linear infinite ${ring % 2 === 0 ? 'reverse' : ''}`
                  }}
                />
              ))}

              {/* Enhanced data points */}
              {dataPoints.map((point, index) => (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: `${point.x}%`,
                    top: `${point.y}%`,
                    transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`
                  }}
                >
                  <div 
                    className={`
                      w-${point.size} h-${point.size} 
                      bg-red-600 rounded-full 
                      ${point.pulse ? 'animate-ping' : 'animate-pulse'}
                    `}
                  />
                  <div 
                    className="absolute w-4 h-4 bg-red-600/30 rounded-full -inset-1 animate-pulse"
                    style={{ animationDelay: `${index * 100}ms` }}
                  />
                </div>
              ))}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full">
                {dataPoints.slice(0, 8).map((point, i) => {
                  const nextPoint = dataPoints[(i + 1) % dataPoints.length];
                  return (
                    <line
                      key={i}
                      x1={`${point.x}%`}
                      y1={`${point.y}%`}
                      x2={`${nextPoint.x}%`}
                      y2={`${nextPoint.y}%`}
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

              {/* Threat indicators */}
              {[...Array(5)].map((_, i) => (
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