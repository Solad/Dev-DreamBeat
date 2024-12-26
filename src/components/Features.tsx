import React from 'react';
import AnimatedSection from './AnimatedSection';
import { images } from '../config/images';

const Features = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div>
              <h2 className="text-3xl font-bold mb-4">Unbeatable Prices.</h2>
              <p className="text-gray-400">
                Access premium quality beats at prices that won't break the bank.
                Our platform connects you directly with talented producers,
                cutting out the middleman and passing the savings to you.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="relative">
              <img
                src={images.studio}
                alt="Professional music studio"
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg" />
            </div>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="order-2 md:order-1 relative">
              <img
                src={images.production}
                alt="Music production setup"
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg" />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4">No AI, Ever.</h2>
              <p className="text-gray-400">
                We believe in authentic music creation. Every beat on our platform
                is crafted by real producers with real passion. No AI-generated
                content, just pure musical talent.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div>
              <h2 className="text-3xl font-bold mb-4">Professional Studio Equipment</h2>
              <p className="text-gray-400">
                Work with carefully vetted producers who have proven track
                records. Our community consists of talented artists dedicated to
                creating unique, high-quality beats.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="relative">
              <img
                src={images.equipment}
                alt="Professional studio equipment"
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Features;