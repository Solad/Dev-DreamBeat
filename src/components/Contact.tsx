import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimatedSection>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Waitlist</h2>
          <p className="text-gray-400 mb-8">
            Be the first to know when we launch and get exclusive early access.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md bg-[#0f1729] border border-blue-500/20 focus:border-blue-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition-colors"
              >
                Join Waitlist
              </button>
            </div>
          </form>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Contact;