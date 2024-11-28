import React, { useState } from 'react';
import { Globe2, Shield, Brain, Scale, Map, BarChart3, HeartHandshake } from 'lucide-react';
import { PackageDetails } from './PackageDetails';
import { GlitchText } from './GlitchText';
import { Button } from './Button';

interface Package {
  title: string;
  description: string;
  features: string[];
  Icon: React.ElementType;
  isPopular?: boolean;
  showDetails?: boolean;
  type: 'geopolitical' | 'predictive' | 'sanctions' | 'conflict' | 'diplomacy' | 
        'cyber' | 'economic' | 'humanitarian' | 'dataanalytics' | 'postconflict';
}

export function Packages() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package['type']>('geopolitical');

  const packages: Package[] = [
    {
      title: "Global Geopolitical Intelligence",
      description: "Real-time mapping and monitoring of geopolitical dynamics, alliances, and power shifts.",
      features: [
        "Strategic Alliance Mapping",
        "Threat Environment Visualization",
        "Influence Network Analysis",
        "Diplomatic Relations Impact",
        "Regional Stability Support"
      ],
      Icon: Globe2,
      showDetails: true,
      type: 'geopolitical'
    },
    {
      title: "Predictive Analytics",
      description: "AI-driven modeling for crisis prediction and strategic planning.",
      features: [
        "Crisis Escalation Prediction",
        "Stability Index Analysis",
        "Natural Disaster Forecasting",
        "Economic Downturn Modeling",
        "Cross-Regional Crisis Assessment"
      ],
      Icon: Brain,
      isPopular: true,
      showDetails: true,
      type: 'predictive'
    },
    {
      title: "Sanctions Intelligence",
      description: "Comprehensive sanctions monitoring and compliance analysis.",
      features: [
        "Sanctions Impact Analysis",
        "Evasion Detection",
        "Regulatory Compliance",
        "International Monitoring",
        "Risk Management"
      ],
      Icon: Scale,
      showDetails: true,
      type: 'sanctions'
    },
    {
      title: "Conflict Zone Mapping",
      description: "Tactical mapping and field support for volatile regions.",
      features: [
        "Field Intelligence",
        "Safe Corridor Mapping",
        "Resource Allocation",
        "Real-Time Surveillance",
        "Humanitarian Impact Assessment"
      ],
      Icon: Map,
      showDetails: true,
      type: 'conflict'
    },
    {
      title: "Cyber Attack Analysis",
      description: "Advanced cyber threat monitoring and response strategies.",
      features: [
        "APT Profiling",
        "Infrastructure Defense",
        "Digital Espionage Detection",
        "Response Strategy",
        "Malware Analysis"
      ],
      Icon: Shield,
      showDetails: true,
      type: 'cyber'
    },
    {
      title: "Economic Intelligence",
      description: "Financial stability monitoring and market analysis.",
      features: [
        "Market Risk Assessment",
        "Resource Allocation",
        "Trade Flow Analysis",
        "Economic Impact Modeling",
        "Investment Strategy"
      ],
      Icon: BarChart3,
      showDetails: true,
      type: 'economic'
    },
    {
      title: "Advanced Data Science and Analytics",
      description: "Cutting-edge data science and machine learning solutions for comprehensive intelligence analysis and pattern recognition.",
      features: [
        "Multi-Source Data Fusion",
        "Predictive Modeling",
        "Social Sentiment Analysis",
        "Big Data Processing",
        "Custom Intelligence Dashboards"
      ],
      Icon: Brain,
      showDetails: true,
      type: 'dataanalytics'
    },
    {
      title: "Post-Conflict Solutions",
      description: "Comprehensive support for post-conflict recovery, governance, and sustainable development.",
      features: [
        "Governance Support",
        "Infrastructure Recovery",
        "Aid Coordination",
        "Community Engagement",
        "Resource Stability"
      ],
      Icon: HeartHandshake,
      showDetails: true,
      type: 'postconflict'
    }
  ];

  return (
    <section id="packages" className="relative py-24 bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-600/20 to-transparent top-0"></div>
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-600/20 to-transparent bottom-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <GlitchText text="Intelligence Packages" className="mb-4" />
          <p className="text-white/60 max-w-2xl mx-auto">
            Comprehensive intelligence solutions tailored to your strategic needs,
            powered by advanced analytics and real-time data processing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 to-red-600/0 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative p-6 bg-black border border-white/10 rounded-lg hover:border-red-600/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <pkg.Icon className="w-8 h-8 text-red-600" />
                  {pkg.isPopular && (
                    <span className="px-3 py-1 text-xs bg-red-600/20 text-red-600 rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-white/60 mb-4">{pkg.description}</p>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-white/80 flex items-center">
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {pkg.showDetails && (
                  <Button 
                    onClick={() => {
                      setSelectedPackage(pkg.type);
                      setShowDetails(true);
                    }}
                    className="w-full"
                  >
                    View Details
                    <span className="ml-2">→</span>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <PackageDetails 
        isVisible={showDetails}
        onClose={() => setShowDetails(false)}
        packageType={selectedPackage}
      />
    </section>
  );
}