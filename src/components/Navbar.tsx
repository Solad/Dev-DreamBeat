import React from 'react';
import { Play } from 'lucide-react';

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full z-50 bg-[#020817]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white flex items-center gap-2">
              <Play className="fill-blue-500" size={24} />
              DREAM BEAT
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-white px-3 py-2">FAQ</button>
              <button onClick={() => scrollToSection('community')} className="text-gray-300 hover:text-white px-3 py-2">Community</button>
              <button onClick={() => scrollToSection('footer')} className="text-gray-300 hover:text-white px-3 py-2">Contact</button>
              <button 
                onClick={() => scrollToSection('waitlist')} 
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
              >
                Join Our Email List
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;