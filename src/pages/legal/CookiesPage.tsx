import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const CookiesPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-[#0a0f1d] p-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Play className="fill-blue-500" size={24} />
          DREAM BEAT
        </Link>
      </nav>
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
        <div className="space-y-6 text-gray-300">
          <p>Last updated: March 14, 2024</p>
          
          <h2 className="text-xl font-semibold mt-6">1. What Are Cookies</h2>
          <p>Cookies are small text files stored on your device when you visit our website.</p>
          
          <h2 className="text-xl font-semibold mt-6">2. How We Use Cookies</h2>
          <p>We use cookies to enhance your browsing experience and provide personalized features.</p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;