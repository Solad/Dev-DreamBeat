import React from 'react';
import { Link } from 'react-router-dom';
import { FooterLink } from './types';

interface FooterLinkSectionProps {
  category: string;
  links: FooterLink[];
}

export const FooterLinkSection = ({ category, links }: FooterLinkSectionProps) => (
  <div>
    <h3 className="font-semibold mb-4">{category}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.name}>
          {link.path.startsWith('mailto:') ? (
            <a
              href={link.path}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {link.name}
            </a>
          ) : (
            <Link
              to={link.path}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {link.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);