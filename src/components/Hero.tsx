import React, { useEffect, useState } from 'react';
import { GlitchText } from './GlitchText';
import { Button } from './Button';
import { BackgroundGrid } from './BackgroundGrid';
import { OrbitalRings } from './OrbitalRings';
import { DataPoints } from './DataPoints';
import { ScrollIndicator } from './ScrollIndicator';
import { AnimatedGlobe } from './AnimatedGlobe';
import { ChevronDown, Shield } from 'lucide-react';

export function Hero() {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const taglines = [
    "Ready for Anything",
    "Prepared for Everything"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const opacity = Math.max(0, 1 - window.scrollY / 500);
      setScrollOpacity(opacity);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    const taglineInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    setTimeout(() => setIsLoaded(true), 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(taglineInterval);
    };
  }, []);

  const handleExplore = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToNext = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black transform-gpu transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        />
        
        {/* Dynamic grid pattern */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-red-600/10 rounded-full animate-pulse-slow"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>
      </div>

      {/* Interactive Elements */}
      <AnimatedGlobe mousePosition={mousePosition} scrollOpacity={scrollOpacity} />
      <OrbitalRings mousePosition={mousePosition} scrollOpacity={scrollOpacity} />
      <BackgroundGrid mousePosition={mousePosition} scrollOpacity={scrollOpacity} />
      <DataPoints scrollOpacity={scrollOpacity} />

      {/* Security Shield Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Shield 
          className="w-96 h-96 text-red-600/10 animate-pulse-slow"
          style={{ opacity: scrollOpacity * 0.5 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-12 px-4 max-w-4xl mx-auto">
        <div className={`space-y-6 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <GlitchText 
            text={taglines[activeIndex]}
            delay={0}
            className="text-5xl md:text-7xl font-bold"
            color={activeIndex === 0 ? 'white' : 'red-600'}
          />
        </div>

        <p className={`text-lg md:text-xl text-white/80 max-w-2xl mx-auto transform transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Empowering organizations with cutting-edge analytics and predictive intelligence
          for a world of evolving challenges and opportunities.
        </p>

        <div className={`flex flex-col sm:flex-row justify-center gap-4 transform transition-all duration-1000 delay-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Button 
            variant="primary"
            className="group relative overflow-hidden"
            onClick={handleExplore}
          >
            <span className="relative z-10 flex items-center">
              Explore Our Services
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
          </Button>
          <Button 
            variant="outline"
            className="group relative overflow-hidden"
            onClick={handleLearnMore}
          >
            <span className="relative z-10 flex items-center">
              Learn More
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </Button>
        </div>

        <ScrollIndicator scrollOpacity={scrollOpacity} onClick={handleScrollToNext} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
    </div>
  );
}