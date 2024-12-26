import React from 'react';
import { Play } from 'lucide-react';

export const FooterLogo = () => (
  <div className="space-y-4">
    <div className="flex items-center gap-2">
      <Play className="fill-blue-500" size={24} />
      <span className="text-xl font-bold">DREAM BEAT</span>
    </div>
    <p className="text-gray-400 text-sm">
      Empowering artists with authentic beats. No AI, just pure talent.
    </p>
  </div>
);