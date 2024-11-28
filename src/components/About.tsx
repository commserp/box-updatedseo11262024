import React from 'react';
import { GlitchText } from './GlitchText';
import { Shield, Globe2, Brain, Target, Map, Network } from 'lucide-react';

export function About() {
  const expertiseAreas = [
    {
      icon: Target,
      title: "Operational Experience",
      description: "Direct field experience in global conflict zones"
    },
    {
      icon: Network,
      title: "Intelligence Networks",
      description: "Extensive network of field operatives and analysts"
    },
    {
      icon: Map,
      title: "Global Coverage",
      description: "Operations spanning critical regions worldwide"
    }
  ];

  return (
    <section id="about" className="bg-black min-h-screen text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto opacity-0 translate-y-4 animate-fade-in">
          <div className="text-center mb-16">
            <GlitchText text="About Black Box Analytix" className="mb-6" />
            <div className="flex justify-center space-x-8 mb-12">
              {[Shield, Globe2, Brain].map((Icon, index) => (
                <div key={index} className="relative group">
                  <Icon className="w-12 h-12 text-red-600 animate-pulse-slow" />
                  <div className="absolute inset-0 bg-red-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              "Ready for Anything. Prepared for Everything."
            </h2>
          </div>

          <div className="space-y-8 text-white/80">
            <div className="relative group p-6 bg-black/30 rounded-lg border border-white/10 hover:border-red-600/30 transition-all duration-300">
              <p className="relative z-10">
                Black Box Analytix is a premier intelligence and analytics provider, established by experts with extensive operational experience in some of the world's most volatile conflict zones. Our work is designed for decision-makers facing high-stakes global challenges where reliable, field-tested intelligence is essential. Black Box Analytix's origins in conflict areas mean that our intelligence is informed by direct, on-the-ground expertise, allowing us to deliver insights that are both actionable and precisely aligned with the unpredictable nature of today's geopolitical landscape.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </div>

            <div className="relative group p-6 bg-black/30 rounded-lg border border-white/10 hover:border-red-600/30 transition-all duration-300">
              <p className="relative z-10">
                Our foundation is built on the principles of strategic resilience and real-time adaptability. Governments, NGOs, international organizations, and multinational corporations depend on Black Box Analytix for intelligence that goes far beyond standard data—providing clarity in complexity and enabling proactive, informed responses in critical environments. With services covering everything from geopolitical risk to advanced cyber intelligence, Black Box Analytix is a trusted partner for those operating at the intersection of security, policy, and technological innovation.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-black/50 p-8 rounded-lg border border-red-600/20 hover:border-red-600/40 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Our Mission</h3>
              <p className="text-white/70">
                At Black Box Analytix, our mission is to transform intricate data into intelligence that not only informs but actively shapes strategic decisions. By combining cutting-edge technology with field-hardened expertise, we deliver intelligence that anticipates shifts, manages risks, and empowers our clients to operate confidently in challenging landscapes. Black Box Analytix exists to provide intelligence that meets the real demands of high-stakes environments, supporting leaders who need to be both informed and ready for any contingency.
              </p>
            </div>

            <div className="bg-black/50 p-8 rounded-lg border border-red-600/20 hover:border-red-600/40 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Our Approach</h3>
              <div className="space-y-4 text-white/70">
                <p>
                  At Black Box Analytix, we prioritize field-tested intelligence combined with advanced technological capabilities. Our data-driven insights are enhanced by a comprehensive understanding of on-the-ground realities, ensuring every recommendation is not only data-informed but field-ready. We maintain the highest standards of security and confidentiality, employing military-grade encryption and secure communication channels to safeguard all intelligence operations.
                </p>
                <p>
                  Our adaptive, real-time analytics keep pace with the rapid shifts characteristic of conflict zones and high-risk areas. Through constant monitoring and a proactive approach to intelligence, we deliver updates that enable clients to respond effectively to emerging threats, shifting alliances, and new opportunities as they arise.
                </p>
              </div>
            </div>
          </div>

          {/* New Commitment Section */}
          <div className="mt-12 bg-black/50 p-8 rounded-lg border border-red-600/20 hover:border-red-600/40 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-red-600">Our Commitment</h3>
            <p className="text-white/70">
              Black Box Analytix is committed to equipping leaders with intelligence that empowers them to act decisively and strategically, regardless of the complexity or volatility of the situation. We were built in the field, for the field—our roots are embedded in the complex environments we now help our clients navigate. With Black Box Analytix, clients can rely on intelligence that is precise, actionable, and forged from experience, ensuring that they are truly "Ready for Anything. Prepared for Everything."
            </p>
          </div>

          {/* Expertise Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-red-600 mb-8 text-center">Expertise Forged in Conflict</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="relative group bg-black/30 p-6 rounded-lg border border-white/10 hover:border-red-600/30 transition-all duration-300">
                  <div className="flex items-center justify-center mb-4">
                    <area.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-center mb-2">{area.title}</h4>
                  <p className="text-white/60 text-center text-sm">{area.description}</p>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div className="relative group p-6 bg-black/30 rounded-lg border border-white/10 hover:border-red-600/30 transition-all duration-300">
                <p className="relative z-10">
                  The backbone of Black Box Analytix's intelligence solutions is the firsthand experience of our team, who have operated extensively in conflict zones worldwide. This unique foundation allows us to approach complex scenarios with a blend of operational insight and analytical precision. Our expertise spans key areas such as geopolitical intelligence, resource scarcity, cyberattack defense, and counter-insurgency support—each informed by a deep understanding of the field realities that shape these domains.
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>

              <div className="relative group p-6 bg-black/30 rounded-lg border border-white/10 hover:border-red-600/30 transition-all duration-300">
                <p className="relative z-10">
                  Black Box Analytix's approach to intelligence is grounded in the recognition that complex environments demand more than theoretical solutions. We employ data analytics, predictive modeling, and real-time surveillance to deliver insights that are as dynamic as the regions we monitor. Whether navigating geopolitical alliances, tracking illicit trade networks, or analyzing environmental risks in resource-scarce regions, our intelligence provides clients with a strategic edge rooted in real-world applicability.
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}