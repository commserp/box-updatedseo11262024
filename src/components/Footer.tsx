import React from 'react';
import { Logo } from './Logo';
import { Handshake, UserRoundCog, Mail } from 'lucide-react';
import { AnimatedTagline } from './AnimatedTagline';

export function Footer() {
  const footerLinks = [
    {
      id: 'company',
      title: 'Important Features',
      links: [
        { id: 'services', label: 'Services', href: '/#services' },
        { id: 'intelpack', label: 'Intelligence Packages', href: '/#packages' },
        { id: 'about', label: 'About Us', href: '/#about' },
      ],
    },
    {
      id: 'resources',
      title: 'Resources',
      links: [
        { id: 'geointel', label: 'Geopolitical Intelligence', href: '#geopolitical' },
        { id: 'bgCa', label: 'Cyberattack Analysis', href: '#cyber-attack' },
        { id: 'faq', label: 'FAQ', href: '/#faq' },
      ],
    },
    {
      id: 'forgedField',
      title: 'Forged in the Field',
      links: [
        { id: 'ourMission', label: 'Our Mission', href: '/#our-mission' },
        { id: 'ourCommitment', label: 'Our Commitment', href: '/#our-commitment' },
        { id: 'OpProficiency', label: 'Operational Proficiency', href: '#operational-proficiency' },
      ],
    },
  ];

  const socialLinks = [
    { id: 'bgServices', Icon: Handshake, href: '/#services' },
    { id: 'bgFounder', Icon: UserRoundCog, href: '/founder' },
    { id: 'bgMail', Icon: Mail, href: '/contact' },
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <AnimatedTagline className="bg-gradient-to-r from-black via-red-900/20 to-black py-1" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-white/60 text-sm">
            Black Box Analytix provides advanced analytics and intelligence solutions for global challenges, including geopolitical risks, cyber threats, and economic instability.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ id, Icon, href }) => (
                <a
                  key={id}
                  href={href}
                  className="text-white/60 hover:text-red-600 transition-colors duration-200"
                >
                  <Icon className="w-5 h-5 bg-swing" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.id} className="space-y-4">
              <h3 className="text-white font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-red-600 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-white/60 text-sm">
            © Copyright {new Date().getFullYear()} Black Box Analytix. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
