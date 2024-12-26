import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-[#0a0f1d] p-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Play className="fill-blue-500" size={24} />
          DREAM BEAT
        </Link>
      </nav>
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        <div className="space-y-6 text-gray-300">
          <p>Last updated: March 14, 2024</p>
          
          <h2 className="text-xl font-semibold mt-6">1. Acceptance of Terms</h2>
          <p>By accessing and using DreamBeat's services, you agree to be bound by these Terms of Service.</p>
          
          <h2 className="text-xl font-semibold mt-6">2. License Terms</h2>
          <p>All beats purchased through DreamBeat are subject to our licensing terms, which specify usage rights and limitations.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;