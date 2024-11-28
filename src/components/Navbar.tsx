import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { AnimatedTagline } from './AnimatedTagline';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', to: '/' },
    { id: 'services', label: 'Services', to: '/#services' },
    { id: 'packages', label: 'Intelligence Packages', to: '/#packages' },
    { id: 'about', label: 'About', to: '/#about' },
    { id: 'founder', label: 'Our Founder', to: '/founder' },
    { id: 'contact', label: 'Contact', to: '/contact' },
  ];

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.getElementById(location.hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Close mobile menu when location changes
    setIsOpen(false);
  }, [location]);

  const handleGetStarted = () => {
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <AnimatedTagline className="bg-gradient-to-r from-black via-red-900/20 to-black py-1" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <Logo />
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={item.id}
                to={item.to}
                className={`
                  text-white/80 hover:text-red-600 
                  transition-all duration-300
                  relative group
                  animate-fade-in
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
            <button
              onClick={handleGetStarted}
              className="
                px-4 py-2 
                bg-red-600 hover:bg-red-700 
                rounded 
                transition-all duration-300
                transform hover:scale-105
                animate-fade-in
                relative overflow-hidden group
              "
              style={{ animationDelay: '500ms' }}
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-600 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className="text-white/80 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={handleGetStarted}
            className="w-full text-center px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-base font-medium transition-colors duration-300 mt-4"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
