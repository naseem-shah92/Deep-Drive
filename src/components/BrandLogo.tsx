import React from 'react';

/**
 * Authentic SVG Logomark: Scuba mask with golden wave swoosh inside glowing translucent bubble
 * Follows the brand style sheet strictly.
 */
export const Logomark: React.FC<{ size?: number; className?: string; glowing?: boolean }> = ({
  size = 48,
  className = '',
  glowing = true,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer ambient glow halo */}
      {glowing && (
        <div
          className="absolute inset-0 rounded-full animate-pulse pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0,165,180,0.45) 0%, rgba(0,35,63,0.1) 70%, transparent 100%)',
            transform: 'scale(1.4)',
            filter: 'blur(8px)',
          }}
        />
      )}

      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="relative z-10 drop-shadow-[0_0_12px_rgba(0,165,180,0.5)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="bubbleGrad" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#00A5B4" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#00233F" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#050E1D" stopOpacity="0.95" />
          </radialGradient>
          <linearGradient id="goldSwooshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F6E7B4" />
            <stop offset="50%" stopColor="#D4AF6A" />
            <stop offset="100%" stopColor="#A8813B" />
          </linearGradient>
          <linearGradient id="maskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2AB8C7" />
            <stop offset="100%" stopColor="#0D4B66" />
          </linearGradient>
          <linearGradient id="lensReflect" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#00A5B4" stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Bubble sphere body */}
        <circle cx="50" cy="50" r="46" fill="url(#bubbleGrad)" stroke="#00A5B4" strokeWidth="1.2" strokeOpacity="0.6" />
        
        {/* Subtle inner bubble shine */}
        <ellipse cx="44" cy="22" rx="18" ry="7" fill="white" fillOpacity="0.12" transform="rotate(-15 44 22)" />
        <circle cx="72" cy="72" r="3" fill="#00A5B4" fillOpacity="0.3" />
        <circle cx="28" cy="74" r="1.5" fill="#D4AF6A" fillOpacity="0.4" />

        {/* Orbit ring arcs */}
        <path d="M20 50 A 30 18 0 0 1 80 50" stroke="#00A5B4" strokeWidth="0.75" strokeOpacity="0.4" strokeDasharray="3 3" />
        <path d="M22 50 A 28 16 0 0 0 78 50" stroke="#D4AF6A" strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="2 4" />

        {/* Scuba Mask Frame */}
        <g transform="translate(0, 1)">
          {/* Mask Top & Temples */}
          <path
            d="M32 38 C32 32, 68 32, 68 38 C74 41, 74 53, 67 56 C62 58, 55 56, 50 53 C45 56, 38 58, 33 56 C26 53, 26 41, 32 38 Z"
            fill="url(#maskGrad)"
            stroke="#00A5B4"
            strokeWidth="1.2"
          />
          {/* Top visor brow bar */}
          <path
            d="M35 37 C42 34, 58 34, 65 37"
            stroke="#DCE6E9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />
          
          {/* Left Lens */}
          <path
            d="M35 40 C35 37, 46 37, 47 41 C47 47, 45 51, 38 51 C35 51, 35 46, 35 40 Z"
            fill="#050E1D"
            stroke="#DCE6E9"
            strokeWidth="0.9"
          />
          <path
            d="M36 41 C37 38, 44 38, 45 42"
            fill="url(#lensReflect)"
          />
          <circle cx="41" cy="45" r="3" stroke="#00A5B4" strokeWidth="0.6" strokeOpacity="0.6" fill="none" />

          {/* Right Lens */}
          <path
            d="M65 40 C65 37, 54 37, 53 41 C53 47, 55 51, 62 51 C65 51, 65 46, 65 40 Z"
            fill="#050E1D"
            stroke="#DCE6E9"
            strokeWidth="0.9"
          />
          <path
            d="M64 41 C63 38, 56 38, 55 42"
            fill="url(#lensReflect)"
          />
          <circle cx="59" cy="45" r="3" stroke="#00A5B4" strokeWidth="0.6" strokeOpacity="0.6" fill="none" />

          {/* Nose pocket contour */}
          <path
            d="M47 50 C48 53, 50 55, 50 57 C50 55, 52 53, 53 50"
            stroke="#00A5B4"
            strokeWidth="1"
            fill="none"
          />

          {/* Golden Wave Swoosh under mask (left side curling upward) */}
          <path
            d="M20 54 C24 51, 32 55, 38 58 C32 60, 25 58, 20 54 Z"
            fill="url(#goldSwooshGrad)"
          />
          <path
            d="M21 57 C27 54, 34 58, 40 60 C33 63, 26 60, 21 57 Z"
            fill="url(#goldSwooshGrad)"
            opacity="0.85"
          />
        </g>
      </svg>
    </div>
  );
};

/**
 * Full Centered Brand Logo with concentric orbital rings, floating particles, and wordmarks
 */
export const BrandLogo: React.FC<{
  className?: string;
  showTagline?: boolean;
}> = ({ className = '', showTagline = true }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center text-center select-none ${className}`}>
      {/* Concentric orbital rings with particles behind the mask */}
      <div className="relative w-64 h-48 flex items-center justify-center">
        {/* Glow backdrop */}
        <div className="absolute w-48 h-48 rounded-full bg-[#00A5B4]/15 blur-2xl pointer-events-none" />

        {/* Orbit Rings SVG */}
        <svg
          viewBox="0 0 300 220"
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Inner ring */}
          <ellipse cx="150" cy="110" rx="90" ry="50" stroke="#00A5B4" strokeWidth="0.8" strokeOpacity="0.4" />
          {/* Middle dashed ring */}
          <ellipse cx="150" cy="110" rx="115" ry="65" stroke="#00A5B4" strokeWidth="0.6" strokeOpacity="0.25" strokeDasharray="3 4" />
          {/* Outer ring */}
          <ellipse cx="150" cy="110" rx="135" ry="78" stroke="#D4AF6A" strokeWidth="0.6" strokeOpacity="0.25" strokeDasharray="2 6" />

          {/* Tiny glowing particle specks on orbits */}
          <circle cx="85" cy="80" r="1.5" fill="#D4AF6A" filter="drop-shadow(0 0 3px #D4AF6A)" />
          <circle cx="215" cy="140" r="1.5" fill="#00A5B4" filter="drop-shadow(0 0 3px #00A5B4)" />
          <circle cx="230" cy="90" r="1.2" fill="#FFFFFF" />
          <circle cx="70" cy="130" r="1.2" fill="#00A5B4" />
          <circle cx="150" cy="45" r="1.8" fill="#D4AF6A" filter="drop-shadow(0 0 3px #D4AF6A)" />
          <circle cx="160" cy="175" r="1" fill="#FFFFFF" />
        </svg>

        {/* Centered Diving Mask with Golden Swoosh */}
        <div className="relative z-10 transform scale-125">
          <svg viewBox="0 0 140 100" width="140" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoMaskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2BBFD0" />
                <stop offset="100%" stopColor="#0B3E56" />
              </linearGradient>
              <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F9E8B6" />
                <stop offset="50%" stopColor="#D4AF6A" />
                <stop offset="100%" stopColor="#A8813B" />
              </linearGradient>
            </defs>

            {/* Mask frame */}
            <path
              d="M45 32 C45 22, 95 22, 95 32 C103 36, 103 54, 93 58 C86 61, 77 59, 70 54 C63 59, 54 61, 47 58 C37 54, 37 36, 45 32 Z"
              fill="url(#logoMaskGrad)"
              stroke="#00A5B4"
              strokeWidth="1.6"
              filter="drop-shadow(0 0 10px rgba(0,165,180,0.4))"
            />
            {/* Top brow ridge */}
            <path d="M48 30 C58 26, 82 26, 92 30" stroke="#DCE6E9" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />
            
            {/* Left lens with frame */}
            <path
              d="M48 36 C48 32, 64 32, 65 38 C65 47, 62 52, 53 52 C48 52, 48 44, 48 36 Z"
              fill="#050E1D"
              stroke="#DCE6E9"
              strokeWidth="1.2"
            />
            <circle cx="56" cy="43" r="5" stroke="#00A5B4" strokeWidth="0.8" strokeOpacity="0.7" fill="none" />
            
            {/* Right lens with frame */}
            <path
              d="M92 36 C92 32, 76 32, 75 38 C75 47, 78 52, 87 52 C92 52, 92 44, 92 36 Z"
              fill="#050E1D"
              stroke="#DCE6E9"
              strokeWidth="1.2"
            />
            <circle cx="84" cy="43" r="5" stroke="#00A5B4" strokeWidth="0.8" strokeOpacity="0.7" fill="none" />

            {/* Golden wave swoosh curling under the left side */}
            <path
              d="M25 54 C33 49, 44 55, 52 60 C44 63, 33 60, 25 54 Z"
              fill="url(#logoGold)"
              filter="drop-shadow(0 0 6px rgba(212,175,106,0.5))"
            />
            <path
              d="M27 58 C36 53, 46 59, 56 63 C46 67, 36 63, 27 58 Z"
              fill="url(#logoGold)"
              opacity="0.85"
            />
          </svg>
        </div>
      </div>

      {/* Wordmark: DEEP DIVE */}
      <div className="relative mt-2">
        {/* Horizontal lens flare streak across the brand name */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-[1px] pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(0,165,180,0.6) 30%, #FFFFFF 50%, rgba(0,165,180,0.6) 70%, transparent 100%)',
            boxShadow: '0 0 10px rgba(0,165,180,0.8), 0 0 20px rgba(0,165,180,0.4)',
          }}
        />
        <h1 className="relative text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.25em] text-white uppercase font-sans">
          DEEP DIVE
        </h1>
      </div>

      {/* Subtitle: AUSTRALIA */}
      <div className="mt-2 text-xs sm:text-sm font-light tracking-[0.45em] text-[#00A5B4] uppercase">
        AUSTRALIA
      </div>

      {/* Tagline: EXPLORE THE DEPTHS */}
      {showTagline && (
        <div className="mt-2 text-[10px] sm:text-xs font-light tracking-[0.35em] text-[#DCE6E9]/75 uppercase">
          EXPLORE THE DEPTHS
        </div>
      )}
    </div>
  );
};

/**
 * Vertical Wordmark with delicate Squid / Jellyfish Icon
 * Specifically designed for the footer or vertical side decoration as shown on the brand sheet.
 */
export const VerticalBrandmark: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center select-none text-center ${className}`}>
      {/* Squid / Nautilus / Jellyfish minimalist geometric mark */}
      <svg
        viewBox="0 0 32 48"
        width="24"
        height="36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#00A5B4] drop-shadow-[0_0_8px_rgba(0,165,180,0.5)]"
      >
        {/* Diamond hood */}
        <polygon points="16,4 26,16 16,22 6,16" stroke="currentColor" strokeWidth="1.2" fill="rgba(0,165,180,0.15)" />
        <line x1="16" y1="4" x2="16" y2="22" stroke="currentColor" strokeWidth="1" strokeOpacity="0.7" />
        {/* Tentacle curves */}
        <path d="M12 22 C10 28, 8 36, 10 44" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M16 22 C16 30, 16 38, 16 46" stroke="#D4AF6A" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M20 22 C22 28, 24 36, 22 44" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>

      {/* Vertical writing text */}
      <span
        className="mt-4 text-xs font-light tracking-[0.35em] text-[#DCE6E9]/80 uppercase [writing-mode:vertical-rl] rotate-180"
        style={{ letterSpacing: '0.4em' }}
      >
        DEEP DIVE
      </span>
    </div>
  );
};
