import { type PropsWithChildren } from 'react';
import { gradients } from '../config/images';

interface GradientBackgroundProps extends PropsWithChildren {
  className?: string;
}

const GradientBackground = ({ children }: GradientBackgroundProps) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Base background with gradient */}
      <div 
        className="absolute inset-0 bg-[#020617]"
        style={{
          background: gradients.background
        }}
      >
        {/* Overlay for additional depth */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              radial-gradient(
                circle at 50% 50%,
                rgba(30, 64, 175, 0.15) 0%,
                rgba(2, 6, 23, 0) 100%
              )
            `
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;