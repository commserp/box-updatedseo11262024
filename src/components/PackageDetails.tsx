import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, Globe2, Shield, Brain, Scale, Map, BarChart3, HeartHandshake, Activity, Network, Lock, AlertTriangle, LineChart } from 'lucide-react';
import { Button } from './Button';

interface PackageDetailsProps {
  isVisible: boolean;
  onClose: () => void;
  packageType: string;
}

interface PackageData {
  title: string;
  description: string;
  Icon: React.ElementType;
  services: string[];
}

const geopoliticalPackages: PackageData[] = [
  {
    title: "Strategic Alliance Mapping",
    description: "Identifies and analyzes critical alliances and coalitions across global regions, mapping the influence networks that shape geopolitics.",
    Icon: Globe2,
    services: [
      "Regional Power Structure Analysis",
      "Diplomatic Influence Mapping",
      "Cross-Border Alliance Tracking",
      "Key Influencer Identification",
      "Strategic Coalition Forecasting"
    ]
  },
  {
    title: "Threat Environment Visualization",
    description: "Provides real-time, high-definition mapping of geopolitical threats, supporting proactive risk management and strategic planning.",
    Icon: AlertTriangle,
    services: [
      "Threat Actor Network Mapping",
      "Real-Time Hostile Zone Monitoring",
      "Political Instability Indicators",
      "Conflict Hotspot Tracking",
      "Intelligence-Driven Response Analysis"
    ]
  },
  {
    title: "Influence Network Analysis",
    description: "Analyzes influence dynamics within regions to uncover political, social, and economic power structures that drive decision-making.",
    Icon: Network,
    services: [
      "Political Power Mapping",
      "Socio-Economic Influence Profiling",
      "Media and Public Opinion Tracking",
      "Corporate Influence Analysis",
      "Geopolitical Influence Forecasting"
    ]
  },
  {
    title: "Diplomatic Relations and Policy Impact",
    description: "Assesses the impact of diplomatic relations on policy outcomes, providing insights into how international dynamics affect local policies.",
    Icon: Globe2,
    services: [
      "Bilateral Relations Mapping",
      "Policy Influence Analysis",
      "International Sanctions Monitoring",
      "Government Power Grid Mapping",
      "Diplomatic Pressure Point Analysis"
    ]
  },
  {
    title: "Regional Stability and Intervention Support",
    description: "Supports governments and IGOs in assessing regional stability, providing intervention insights based on local influence networks.",
    Icon: Map,
    services: [
      "Stability Risk Assessment",
      "Military Influence Mapping",
      "Civilian and Humanitarian Infrastructure Support",
      "Cultural Sensitivity Analysis",
      "Local Governance Influence Mapping"
    ]
  }
];

const predictivePackages: PackageData[] = [
  {
    title: "Conflict Escalation Prediction",
    description: "Predicts potential escalation points in conflict zones, providing actionable insights for crisis response.",
    Icon: Brain,
    services: [
      "Threat Escalation Modeling",
      "Conflict Trigger Analysis",
      "Predictive Intelligence on Hostile Actions",
      "Cross-Border Tension Tracking",
      "Political Sentiment Analysis"
    ]
  },
  {
    title: "Stability and Fragility Index",
    description: "Provides a stability index for volatile regions, assessing economic, social, and political fragility to preemptively manage crises.",
    Icon: Activity,
    services: [
      "Fragility Indicator Mapping",
      "Civil Unrest Prediction",
      "Resource Scarcity Risk Assessment",
      "Economic Collapse Forecasting",
      "Social Cohesion Analytics"
    ]
  },
  {
    title: "Natural Disaster Impact Forecasting",
    description: "Forecasts natural disasters and models their socio-economic impacts to inform humanitarian planning and resource allocation.",
    Icon: AlertTriangle,
    services: [
      "Disaster Risk Analysis",
      "Infrastructure Vulnerability Mapping",
      "Resource Distribution Modeling",
      "Population Displacement Prediction",
      "Crisis Response Pathways"
    ]
  },
  {
    title: "Economic Stability and Downturn Modeling",
    description: "Predicts economic downturns in vulnerable regions, helping stakeholders preemptively address financial crises.",
    Icon: LineChart,
    services: [
      "Inflation and Currency Stability Modeling",
      "GDP and Trade Shock Analysis",
      "Regional Market Impact Assessment",
      "Financial Resilience Index",
      "Cross-Sector Economic Dependency Mapping"
    ]
  },
  {
    title: "Cross-Regional Crisis Forecasting",
    description: "Offers forecasting models for complex crises that span multiple regions, integrating climate, conflict, and political risks.",
    Icon: Globe2,
    services: [
      "Climate and Environmental Forecasting",
      "Multi-Regional Conflict Correlation",
      "Infrastructure Resilience Assessment",
      "Trans-Border Crisis Modeling",
      "Socio-Economic Stability Monitoring"
    ]
  }
];

const cyberPackages: PackageData[] = [
  {
    title: "APT Threat Actor Profiling",
    description: "Profiles Advanced Persistent Threat (APT) groups, tracking their tactics, infrastructure, and active campaigns.",
    Icon: Shield,
    services: [
      "APT Group Behavior Analysis",
      "Infrastructure Mapping",
      "Cyber Attack Chain Mapping",
      "Real-Time Threat Actor Tracking",
      "Threat Mitigation Planning"
    ]
  },
  {
    title: "Critical Infrastructure Defense",
    description: "Maps vulnerabilities in critical infrastructure sectors and provides defense strategies.",
    Icon: Lock,
    services: [
      "Infrastructure Vulnerability Assessment",
      "Threat Intelligence Integration",
      "Power Grid Cyber Defense",
      "Healthcare Security Mapping",
      "Automated Response Protocols"
    ]
  },
  {
    title: "Digital Espionage Detection",
    description: "Detects and maps digital espionage activities and potential data leaks.",
    Icon: Eye,
    services: [
      "Digital Surveillance Mapping",
      "Data Exfiltration Detection",
      "IP Security Analysis",
      "Network Breach Detection",
      "Insider Threat Assessment"
    ]
  },
  {
    title: "Cyber Deterrence Strategy",
    description: "Develops proactive cyber defense and response strategies.",
    Icon: Shield,
    services: [
      "Defense Posture Evaluation",
      "Deterrence Planning",
      "Vulnerability Prioritization",
      "Threat Simulation",
      "Regulatory Compliance"
    ]
  },
  {
    title: "Malware Analysis",
    description: "Analyzes sophisticated malware and conducts cyber warfare simulations.",
    Icon: Activity,
    services: [
      "Malware Behavior Analysis",
      "Attack Simulation",
      "Defense Testing",
      "Protocol Development",
      "Threat Intelligence Sharing"
    ]
  }
];

function getPackages(type: string) {
  switch (type) {
    case 'geopolitical':
      return {
        packages: geopoliticalPackages,
        title: 'Global Geopolitical Intelligence and Influence Mapping',
        description: 'Comprehensive mapping and analysis of global political dynamics, helping organizations navigate international complexities.'
      };
    case 'predictive':
      return {
        packages: predictivePackages,
        title: 'Predictive Analytics and Crisis Forecasting',
        description: 'Advanced AI-driven modeling for crisis prediction and strategic planning across multiple domains.'
      };
    case 'cyber':
      return {
        packages: cyberPackages,
        title: 'Cyberattack Analysis and Defense',
        description: 'Comprehensive cyber threat monitoring and response platform for critical infrastructure protection.'
      };
    default:
      return {
        packages: geopoliticalPackages,
        title: 'Intelligence Package Details',
        description: 'Comprehensive intelligence solutions for complex global challenges.'
      };
  }
}

export function PackageDetails({ isVisible, onClose, packageType }: PackageDetailsProps) {
  const { packages, title, description } = getPackages(packageType);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-4xl bg-black border border-red-600/20 rounded-lg p-6 overflow-y-auto max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <p className="text-white/60">{description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className="relative group bg-black/30 p-6 rounded-lg border border-white/10 hover:border-red-600/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <pkg.Icon className="w-6 h-6 text-red-600" />
                    <h3 className="text-lg font-semibold">{pkg.title}</h3>
                  </div>
                  <p className="text-white/60 text-sm mb-4">{pkg.description}</p>
                  <ul className="space-y-2">
                    {pkg.services.map((service, idx) => (
                      <li key={idx} className="text-sm text-white/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-end gap-4">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button>
                Request Demo
                <span className="ml-2">→</span>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}