import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const StatusPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-[#0a0f1d] p-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Play className="fill-blue-500" size={24} />
          DREAM BEAT
        </Link>
      </nav>
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">System Status</h1>
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Beat Marketplace</h2>
              <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">Active</span>
            </div>
            <p className="text-gray-400">All systems operational</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Payment Processing</h2>
              <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">Active</span>
            </div>
            <p className="text-gray-400">All systems operational</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Download Service</h2>
              <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">Active</span>
            </div>
            <p className="text-gray-400">All systems operational</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPage;