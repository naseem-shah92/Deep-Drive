import React, { useEffect, useState } from 'react';
import { Logomark } from './BrandLogo';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        onComplete();
      }, 700);
    }, 1000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050E1D] transition-opacity duration-700 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing and pulsing logomark bubble */}
        <div className="animate-pulse">
          <Logomark size={88} glowing={true} />
        </div>

        {/* Brand wordmark */}
        <div className="mt-6 text-center">
          <span className="text-xl font-light tracking-[0.3em] text-white uppercase block">
            DEEP DIVE
          </span>
          <span className="text-[10px] font-mono tracking-[0.4em] text-[#00A5B4] uppercase block mt-1">
            AUSTRALIA
          </span>
          <span className="text-[9px] font-light tracking-[0.3em] text-[#DCE6E9]/50 uppercase block mt-2">
            EXPLORE THE DEPTHS
          </span>
        </div>

        {/* Minimal loading bar */}
        <div className="w-24 h-[1px] bg-white/10 mt-6 overflow-hidden rounded">
          <div className="w-full h-full bg-[#00A5B4] animate-[progress_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};
