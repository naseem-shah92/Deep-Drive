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
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#070D18] transition-opacity duration-700 select-none ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        <Logomark size={64} />

        <div className="mt-6 text-center">
          <span className="font-display text-2xl font-light tracking-[0.25em] text-white uppercase block">
            Deep Dive
          </span>
          <span className="text-[10px] font-mono tracking-[0.35em] text-[#E5C890] uppercase block mt-1.5">
            Australia &bull; Expeditions
          </span>
        </div>

        {/* Minimal hairline loading bar */}
        <div className="w-24 h-[1px] bg-white/10 mt-8 overflow-hidden">
          <div className="w-full h-full bg-[#E5C890] animate-pulse" />
        </div>
      </div>
    </div>
  );
};
