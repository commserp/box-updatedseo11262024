import React from 'react';
import { Logo } from './Logo';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { AnimatedTagline } from './AnimatedTagline';

export function Footer() {
  const footerLinks = [
    {
      id: 'company',
      title: 'Company',
      links: [
        { id: 'about', label: 'About', href: '/#about' },
        { id: 'ourfounder', label: 'Our Founder', href: '/founder' },
        { id: 'contact', label: 'Contact', href: '/contact' },
      ],
    },
    {
      id: 'resources',
      title: 'Resources',
      links: [
        { id: 'blog', label: 'Blog', href: '#blog' },
        { id: 'documentation', label: 'Documentation', href: '#docs' },
        { id: 'support', label: 'Support', href: '#support' },
      ],
    },
    {
      id: 'legal',
      title: 'Legal',
      links: [
        { id: 'privacy', label: 'Privacy', href: '#privacy' },
        { id: 'terms', label: 'Terms', href: '#terms' },
        { id: 'security', label: 'Security', href: '#security' },
      ],
    },
  ];

  const socialLinks = [
    { id: 'github', Icon: Github, href: '#' },
    { id: 'twitter', Icon: Twitter, href: '#' },
    { id: 'linkedin', Icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <AnimatedTagline className="bg-gradient-to-r from-black via-red-900/20 to-black py-1" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-white/60 text-sm">
              Ready for Anything.
              <br />
              Prepared for Everything.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ id, Icon, href }) => (
                <a
                  key={id}
                  href={href}
                  className="text-white/60 hover:text-red-600 transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
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
