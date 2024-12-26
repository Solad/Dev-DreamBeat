import React from 'react';
import { FooterLinks } from './footer/types';
import { FooterLinkSection } from './footer/FooterLinkSection';
import { FooterLogo } from './footer/FooterLogo';

const footerLinks: FooterLinks = {
  'Legal': [
    { name: 'Terms of Service', path: '/legal/terms' },
    { name: 'Privacy Policy', path: '/legal/privacy' },
    { name: 'Cookie Policy', path: '/legal/cookies' }
  ],
  'Support': [
    { name: 'Contact Us', path: 'mailto:contact@dreambeat.com' },
    { name: 'Status', path: '/status' }
  ]
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#0a0f1d] border-t border-blue-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FooterLogo />
          {Object.entries(footerLinks).map(([category, links]) => (
            <FooterLinkSection key={category} category={category} links={links} />
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-blue-500/10">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} DreamBeat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;