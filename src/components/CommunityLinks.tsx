import React from 'react';
import { MessageSquare, Instagram, Twitter, Music2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const CommunityLinks = () => {
  const links = [
    {
      name: 'Discord',
      icon: MessageSquare,
      url: 'https://discord.gg/tNJ7rpW4nC',
      color: 'hover:text-[#5865F2]'
    },
    {
      name: 'X',
      icon: Twitter,
      url: 'https://x-placer.com',
      color: 'hover:text-[#1DA1F2]'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram-placer.com',
      color: 'hover:text-[#E4405F]'
    },
    {
      name: 'TikTok',
      icon: Music2,
      url: 'https://tik-tok-placer.com',
      color: 'hover:text-[#00F2EA]'
    }
  ];

  return (
    <div id="community">
      <AnimatedSection>
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Community</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-full border border-blue-500/20 bg-[#0f1729] ${link.color} transition-colors`}
              >
                <link.icon className="w-5 h-5" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default CommunityLinks;