import React, { useState } from 'react';
import { GlitchText } from './GlitchText';
import { Globe2, Shield, Sliders, RefreshCw, Activity, Crosshair, Globe, DollarSign, HelpCircle, Brain, Scale, Map, BarChart3, Zap, Bell, FileText, PieChart, Database, Users, PlayCircle, AlertTriangle, Briefcase, Satellite, Radio, ShieldAlert, TrendingUp, Boxes, LineChart } from 'lucide-react';
import { Button } from './Button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './Dialog';

interface ServiceCardProps {
  title: string;
  description: string;
  details: string[];
  Icon: React.ElementType;
  sectionId: string;
  moreDetails: Array<{
    icon: React.ElementType;
    text: string;
  }>;
}

function ServiceCard({ title, description, details, Icon, sectionId, moreDetails }: ServiceCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

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
        
        <Button onClick={openDialog} className="w-full group">
          Learn More
          <span className="ml-2 transform group-hover:translate-y-1 transition-transform duration-300">↓</span>
        </Button>

        <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold text-white">Key Features:</h3>
              {moreDetails.map((detail, index) => (
                <div key={index} className="flex items-start">
                  <detail.icon className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-white/80">{detail.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <Button onClick={closeDialog} className="px-4 py-2">
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export function Services() {
  const services = [
    {
      title: "Global Geopolitical Intelligence and Influence Mapping",
      description: "Real-time mapping and monitoring of geopolitical dynamics, alliances, and power shifts.",
      details: [
        "Interactive Map and Influence Layers: Explore regions and apply filters to view influence networks, conflict zones, and diplomatic relations."
      ],
      Icon: Globe2,
      sectionId: "geopolitical",
      moreDetails: [
        { icon: Zap, text: "Advanced AI-driven analysis of global political trends and power dynamics" },
        { icon: Bell, text: "Real-time updates on diplomatic relations and international agreements" },
        { icon: AlertTriangle, text: "Customizable alerts for significant geopolitical events and policy changes" },
        { icon: FileText, text: "In-depth reports on regional stability and potential areas of conflict" },
        { icon: PieChart, text: "Visualization tools for complex geopolitical relationships and alliances" }
      ]
    },
    {
      title: "Cyber Attack Analysis",
      description: "Tracks digital threats, Advanced Persistent Threat (APT) actors, and infrastructure vulnerabilities.",
      details: [
        "Threat Actor Dashboard: Profiles of active threat actors, detailing tactics, observed activities, and risk levels.",
        "Real-Time Attack Feed: Live-updated feed of cyber-attack data, showing recent breaches, origins, and known tactics."
      ],
      Icon: Shield,
      sectionId: "cyber-attack",
      moreDetails: [
        { icon: Database, text: "Comprehensive database of known cyber threats and attack patterns" },
        { icon: Brain, text: "Machine learning algorithms for detecting and predicting new attack vectors" },
        { icon: Users, text: "Detailed analysis of APT groups, their motivations, and typical targets" },
        { icon: ShieldAlert, text: "Vulnerability assessments for critical infrastructure and corporate networks" },
        { icon: PlayCircle, text: "Incident response planning and simulation exercises" }
      ]
    },
    {
      title: "Predictive Analytics and Crisis Forecasting",
      description: "AI-driven modeling and historical data to predict crises, geopolitical shifts, and market fluctuations.",
      details: [
        "Interactive Scenario Simulator: Adjust parameters to visualize risk predictions and recommendations in real time."
      ],
      Icon: Brain,
      sectionId: "predictive",
      moreDetails: [
        { icon: Database, text: "Advanced machine learning models trained on extensive historical data" },
        { icon: Zap, text: "Real-time integration of current events and emerging trends" },
        { icon: Sliders, text: "Customizable risk assessment tools for various industries and regions" },
        { icon: RefreshCw, text: "Regular forecast updates and trend analysis reports" },
        { icon: Users, text: "Scenario planning workshops and crisis management training" }
      ]
    },
    {
      title: "Sanctions and Compliance Monitoring",
      description: "Comprehensive service tracking global sanctions, compliance risks, and potential financial impacts.",
      details: [
        "Compliance Dashboard: Dynamic map with region-specific compliance status and regulatory updates.",
        "Risk Evaluation Tool: Assess specific compliance risks by selecting entities, industries, and regions."
      ],
      Icon: Scale,
      sectionId: "compliance",
      moreDetails: [
        { icon: Globe, text: "Real-time tracking of global sanctions and trade restrictions" },
        { icon: Bell, text: "Automated alerts for changes in compliance requirements" },
        { icon: DollarSign, text: "Detailed analysis of financial implications for different business activities" },
        { icon: FileText, text: "Custom compliance risk assessments for specific transactions or partnerships" },
        { icon: HelpCircle, text: "Expert guidance on navigating complex international regulations" }
      ]
    },
    {
      title: "Conflict Zone Mapping and Field Support",
      description: "Tactical mapping of conflict zones, infrastructure assets, adversary networks, and logistics.",
      details: [
        "Multi-Layered Map Interface: Toggle layers for safe zones, critical infrastructure, threat positions, and humanitarian corridors.",
        "Field-Ready Data Access: Real-time information on safe routes, enemy movements, and infrastructure vulnerabilities."
      ],
      Icon: Map,
      sectionId: "conflict",
      moreDetails: [
        { icon: Satellite, text: "High-resolution satellite imagery and terrain analysis" },
        { icon: Crosshair, text: "Real-time tracking of conflict developments and troop movements" },
        { icon: Radio, text: "Secure communication channels for field operatives" },
        { icon: ShieldAlert, text: "Risk assessment tools for humanitarian aid operations" },
        { icon: Users, text: "Detailed reports on local power structures and key stakeholders" }
      ]
    },
    {
      title: "Economic Stability and Resource Allocation Analysis",
      description: "Predictive analysis of economic trends, resource dependencies, and supply chain stability.",
      details: [
        "Resource Dependency Map: Real-time updates on global resource flow and potential market disruptions.",
        "Market Risk Dashboard: Insights into commodity price fluctuations and economic sanctions impacts."
      ],
      Icon: BarChart3,
      sectionId: "economic",
      moreDetails: [
        { icon: Boxes, text: "In-depth analysis of global supply chains and potential disruptions" },
        { icon: TrendingUp, text: "Forecasting models for commodity prices and market trends" },
        { icon: Activity, text: "Assessment of economic impacts from geopolitical events and policy changes" },
        { icon: FileText, text: "Customized reports on regional economic stability and growth potential" },
        { icon: Briefcase, text: "Strategic recommendations for resource allocation and investment" }
      ]
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

