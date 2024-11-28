import React from 'react';
import { GlitchText } from './GlitchText';
import { Globe2, Shield, Brain, Scale, Map, BarChart3 } from 'lucide-react';
import { Button } from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
  details: string[];
  Icon: React.ElementType;
  sectionId: string;
}

function ServiceCard({ title, description, details, Icon, sectionId }: ServiceCardProps) {
  const scrollToSection = () => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/50 to-red-600/0 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
      
      <div className="relative p-8 bg-black border border-white/10 rounded-lg hover:border-red-600/50 transition-colors duration-300">
        <div className="flex items-center justify-between mb-4">
          <Icon className="w-8 h-8 text-red-600" />
          <div className="w-12 h-12 rounded-full border border-red-600/20 group-hover:animate-spin-slow"></div>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white/60 mb-4">{description}</p>
        
        <div className="space-y-4 mb-6">
          {details.map((detail, index) => (
            <div key={index} className="text-sm text-white/80">
              {detail}
            </div>
          ))}
        </div>
        
        <Button onClick={scrollToSection} className="w-full group">
          Learn More
          <span className="ml-2 transform group-hover:translate-y-1 transition-transform duration-300">↓</span>
        </Button>
      </div>
    </div>
  );
}

export function Services() {
  const services = [
    {
      title: "Global Geopolitical Intelligence and Influence Mapping",
      description: "Real-time mapping and monitoring of geopolitical dynamics, alliances, and power shifts. Provides clients with insights into political influence patterns, emerging threats, and opportunities for strategic alliances.",
      details: [
        "Interactive Map and Influence Layers: Clients can explore regions and apply filters to view influence networks, conflict zones, and diplomatic relations, with predictive overlays indicating potential shifts or escalations."
      ],
      Icon: Globe2,
      sectionId: "geopolitical"
    },
    {
      title: "Cyber Attack Analysis",
      description: "Tracks digital threats, Advanced Persistent Threat (APT) actors, and infrastructure vulnerabilities critical to national and corporate security.",
      details: [
        "Threat Actor Dashboard: A grid displaying profiles of active threat actors, detailing tactics, observed activities, and BlackBox's assessment of each threat's risk level.",
        "Real-Time Attack Feed: A live-updated feed of cyber-attack data, showing recent breaches, origins, and known tactics with hover-over details."
      ],
      Icon: Shield,
      sectionId: "cyber-attack"
    },
    {
      title: "Predictive Analytics and Crisis Forecasting",
      description: "Uses AI-driven modeling and historical data to predict crises, geopolitical shifts, and market fluctuations, offering clients tools to mitigate risks and capitalize on potential opportunities.",
      details: [
        "Interactive Scenario Simulator: Users can adjust parameters (e.g., geographic location, type of threat) to visualize BlackBox's risk predictions and recommendations in real time, with layered visualizations showing risk probabilities."
      ],
      Icon: Brain,
      sectionId: "predictive"
    },
    {
      title: "Sanctions and Compliance Monitoring",
      description: "A comprehensive service tracking global sanctions, compliance risks, and potential financial impacts across borders.",
      details: [
        "Compliance Dashboard: A dynamic map with region-specific compliance status, sanction categories, and regulatory updates.",
        "Risk Evaluation Tool: Enables users to assess specific compliance risks by selecting entities, industries, and regions, producing actionable insights on potential vulnerabilities and avoidance strategies."
      ],
      Icon: Scale,
      sectionId: "compliance"
    },
    {
      title: "Conflict Zone Mapping and Field Support",
      description: "Provides tactical mapping of conflict zones, infrastructure assets, adversary networks, and logistics for on-the-ground support in volatile areas.",
      details: [
        "Multi-Layered Map Interface: Layers include safe zones, critical infrastructure, threat positions, and humanitarian corridors, allowing clients to toggle data for operational planning.",
        "Field-Ready Data Access: Features real-time information on safe routes, enemy movements, and infrastructure vulnerabilities essential for secure operations in conflict regions."
      ],
      Icon: Map,
      sectionId: "conflict"
    },
    {
      title: "Economic Stability and Resource Allocation Analysis",
      description: "Predictive analysis of economic trends, resource dependencies, and supply chain stability, supporting government and corporate clients in strategic planning.",
      details: [
        "Resource Dependency Map: Real-time updates showing global resource flow, highlighting potential shortages or risks of market disruptions in relation to geopolitical factors.",
        "Market Risk Dashboard: Insights into commodity price fluctuations, economic sanctions impacts, and market volatility across regions."
      ],
      Icon: BarChart3,
      sectionId: "economic"
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-600/20 to-transparent top-0"></div>
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-600/20 to-transparent bottom-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <GlitchText 
            text="Our Services" 
            className="mb-4"
          />
          <p className="text-white/60 max-w-2xl mx-auto">
            Comprehensive intelligence solutions powered by advanced analytics and AI,
            designed to keep you ahead in an ever-evolving global landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}