import React from 'react';
import { Diamond } from 'lucide-react';

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        UNLOCK YOUR POTENTIAL
      </h1>
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
        Transform your music production journey with our cutting-edge tools and community. No AI magic, just pure talent and dedication.
      </p>
      <button 
        onClick={scrollToWaitlist}
        className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-md text-lg font-semibold"
      >
        Join Our Beta Launch Community Now
      </button>
      
      <div className="mt-20 flex items-center justify-center gap-8 text-center">
        <div className="text-xl font-medium">No AI Music, Ever</div>
        <Diamond className="w-6 h-6 text-blue-500 fill-blue-500" />
        <div className="text-xl font-medium">Carefully Selected Producers</div>
        <Diamond className="w-6 h-6 text-blue-500 fill-blue-500" />
        <div className="text-xl font-medium">Unbeatable Cost</div>
      </div>
    </div>
  );
};

export default Hero;