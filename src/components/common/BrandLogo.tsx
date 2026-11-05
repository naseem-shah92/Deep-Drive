import React from 'react';

interface LogomarkProps {
  size?: number;
  className?: string;
}

export const Logomark: React.FC<LogomarkProps> = ({
  size = 40,
  className = '',
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="relative z-10 text-white"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Fine Nautical Compass Ring */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
        <circle
          cx="50"
          cy="50"
          r="41"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeOpacity="0.2"
          strokeDasharray="2 3"
        />

        {/* 4 Cardinal Tick Marks */}
        <line x1="50" y1="4" x2="50" y2="10" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
        <line x1="50" y1="90" x2="50" y2="96" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
        <line x1="4" y1="50" x2="10" y2="50" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
        <line x1="90" y1="50" x2="96" y2="50" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />

        {/* Geometric Compass Star */}
        <polygon
          points="50,18 53,47 82,50 53,53 50,82 47,53 18,50 47,47"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeOpacity="0.8"
        />

        {/* Inner Golden Core Dot */}
        <circle cx="50" cy="50" r="3" fill="#E5C890" />
      </svg>
    </div>
  );
};

export const BrandLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      <Logomark size={52} />
      <div className="mt-4 text-center">
        <h1 className="font-display text-2xl sm:text-3xl tracking-[0.22em] text-white font-light uppercase">
          Deep Dive
        </h1>
        <div className="flex items-center justify-center gap-2 mt-1">
          <span className="w-6 h-[1px] bg-white/20" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#E5C890] uppercase">
            Australia &bull; Expeditions
          </span>
          <span className="w-6 h-[1px] bg-white/20" />
        </div>
      </div>
    </div>
  );
};
