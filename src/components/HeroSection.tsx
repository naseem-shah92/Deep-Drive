import React, { useEffect, useRef, useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { Compass, ChevronDown, Sparkles, Eye, Flashlight } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onPlanClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onPlanClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [flashlightOn, setFlashlightOn] = useState(false);
  const [beamRadius, setBeamRadius] = useState<number>(240); // 240px default
  const [floodlightMode, setFloodlightMode] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Mouse & Lerp position refs for smooth glide
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight * 0.45 });
  const lightPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight * 0.45 });
  const animFrameId = useRef<number | null>(null);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    // Check touch capability
    const touch = window.matchMedia('(pointer: coarse)').matches;
    setIsTouchDevice(touch);

    // Initial sequence: logo visible, then torch switches on after 600ms
    const timer = setTimeout(() => {
      setFlashlightOn(true);
    }, 600);

    const onMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || e.touches.length === 0) return;
      const rect = containerRef.current.getBoundingClientRect();
      mousePos.current = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    // Smooth Lerp loop & Touch Auto-Drift
    const lerp = 0.085; // Silky hydraulic water inertia
    const render = () => {
      if (touch) {
        // Slow organic figure-8 Lissajous path across the reef if not actively touched
        timeRef.current += 0.008;
        const w = window.innerWidth;
        const h = window.innerHeight;
        const targetX = w / 2 + Math.sin(timeRef.current) * (w * 0.32);
        const targetY = h * 0.45 + Math.sin(timeRef.current * 2) * (h * 0.2);
        lightPos.current.x += (targetX - lightPos.current.x) * 0.03;
        lightPos.current.y += (targetY - lightPos.current.y) * 0.03;
      } else {
        lightPos.current.x += (mousePos.current.x - lightPos.current.x) * lerp;
        lightPos.current.y += (mousePos.current.y - lightPos.current.y) * lerp;
      }

      if (containerRef.current) {
        containerRef.current.style.setProperty('--light-x', `${lightPos.current.x}px`);
        containerRef.current.style.setProperty('--light-y', `${lightPos.current.y}px`);
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  // Pre-generate 36 floating plankton & micro-bubble particles
  const particles = useRef(
    Array.from({ length: 36 }).map((_, i) => ({
      id: i,
      x: (i * 2.8) % 100,
      y: (i * 17) % 100,
      size: (i % 4) + 1.5,
      delay: (i * 0.35) % 6,
      duration: 6 + (i % 8),
      isGold: i % 5 === 0,
    }))
  ).current;

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-screen h-[100svh] flex flex-col justify-between items-center overflow-hidden bg-[#050E1D] select-none"
      style={{
        // Default center coordinates until mouse moves
        ['--light-x' as string]: '50%',
        ['--light-y' as string]: '45%',
      }}
    >
      {/* 
        UNDERWATER REEF IMAGE LAYER
        Revealed strictly inside the flashlight beam radius via CSS radial mask
      */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
          flashlightOn ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          maskImage: floodlightMode
            ? 'none'
            : `radial-gradient(circle ${beamRadius}px at var(--light-x) var(--light-y), rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0) 100%)`,
          WebkitMaskImage: floodlightMode
            ? 'none'
            : `radial-gradient(circle ${beamRadius}px at var(--light-x) var(--light-y), rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0) 100%)`,
          transition: 'mask-image 0.2s ease-out, -webkit-mask-image 0.2s ease-out',
        }}
      >
        <img
          src="/assets/aistudio/herosection_background_b1167b9b.jfif"
          alt="Coral reef illuminated underwater with sunbeams and diver in the Great Barrier Reef"
          className="w-full h-full object-cover object-center filter saturate-110 brightness-105"
          loading="eager"
        />

        {/* Bioluminescent teal glow halo at the edge of the flashlight cone */}
        {!floodlightMode && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle ${beamRadius * 1.15}px at var(--light-x) var(--light-y), transparent 70%, rgba(0, 165, 180, 0.25) 90%, transparent 100%)`,
            }}
          />
        )}
      </div>

      {/* 
        DARK WATER ABYSS OVERLAY (Deep Abyss #050E1D)
        Keeps everything outside the flashlight cone in mysterious deep ocean dark
      */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
          floodlightMode ? 'opacity-20 bg-[#050E1D]' : 'opacity-92 bg-[#050E1D]'
        }`}
        style={{
          maskImage: floodlightMode
            ? 'none'
            : `radial-gradient(circle ${beamRadius * 1.12}px at var(--light-x) var(--light-y), rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,1) 100%)`,
          WebkitMaskImage: floodlightMode
            ? 'none'
            : `radial-gradient(circle ${beamRadius * 1.12}px at var(--light-x) var(--light-y), rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,1) 100%)`,
        }}
      />

      {/* Atmospheric Soft Light Rays from the Surface */}
      <div className="absolute inset-0 pointer-events-none light-ray-overlay opacity-60" />

      {/* Floating Plankton and Micro-Bubbles Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full transition-opacity duration-500"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.isGold ? '#D4AF6A' : '#00A5B4',
              boxShadow: p.isGold ? '0 0 8px #D4AF6A' : '0 0 8px #00A5B4',
              animation: `floatParticle ${p.duration}s infinite ease-in-out`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Ambient Torch / Torch Mode Floating Controls */}
      <div className="absolute top-24 right-6 md:right-10 z-30 flex items-center gap-2">
        <button
          onClick={() => setFloodlightMode(!floodlightMode)}
          aria-label={floodlightMode ? 'Switch to Torch Beam Mode' : 'Switch to Full Floodlight Mode'}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase border border-[#00A5B4]/30 bg-[#050E1D]/75 backdrop-blur-md text-[#DCE6E9] hover:border-[#00A5B4] hover:text-[#00A5B4] transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00A5B4]"
        >
          <Flashlight className="w-3.5 h-3.5 text-[#00A5B4]" />
          <span className="hidden sm:inline">{floodlightMode ? 'Beam: Torch' : 'Beam: Flood'}</span>
        </button>

        {!floodlightMode && (
          <div className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/10 bg-[#050E1D]/60 backdrop-blur-md text-[10px] font-mono text-[#DCE6E9]/60">
            <span>Radius:</span>
            <button
              onClick={() => setBeamRadius(200)}
              className={`px-1.5 py-0.5 rounded ${beamRadius === 200 ? 'text-[#00A5B4] font-semibold' : 'hover:text-white'}`}
            >
              200
            </button>
            <button
              onClick={() => setBeamRadius(260)}
              className={`px-1.5 py-0.5 rounded ${beamRadius === 260 ? 'text-[#00A5B4] font-semibold' : 'hover:text-white'}`}
            >
              260
            </button>
            <button
              onClick={() => setBeamRadius(320)}
              className={`px-1.5 py-0.5 rounded ${beamRadius === 320 ? 'text-[#00A5B4] font-semibold' : 'hover:text-white'}`}
            >
              320
            </button>
          </div>
        )}
      </div>

      {/* Spacer for Topbar */}
      <div className="h-20 shrink-0" />

      {/* 
        MAIN CENTERED CONTENT
        Logo fades in from the dark, followed by typography and action buttons
      */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center my-auto">
        {/* Brand Logo with concentric glowing rings and mask */}
        <div className="transform transition-transform duration-700 hover:scale-[1.02]">
          <BrandLogo />
        </div>

        {/* Hero Headline */}
        <h2 className="mt-8 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extralight tracking-[0.2em] md:tracking-[0.28em] text-white uppercase text-balance leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
          Descend Into The Extraordinary
        </h2>

        {/* Subtext */}
        <p className="mt-5 text-sm sm:text-base md:text-lg font-light text-[#DCE6E9]/85 max-w-2xl mx-auto tracking-wide leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Private, bespoke scuba expeditions across Australia’s most spectacular remote coral atolls, historic shipwrecks, and deep ocean trenches.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
          {/* Explore Expeditions Button */}
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-light tracking-[0.25em] text-white uppercase bg-[#00A5B4]/20 border border-[#00A5B4] rounded hover:bg-[#00A5B4]/35 hover:shadow-[0_0_30px_rgba(0,165,180,0.5)] transition-all duration-400 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00A5B4]"
          >
            Explore Expeditions
          </button>

          {/* Plan Your Dive Button */}
          <button
            onClick={onPlanClick}
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-light tracking-[0.25em] text-[#DCE6E9] uppercase border border-white/40 rounded hover:border-[#00A5B4] hover:text-white hover:bg-[#00233F]/50 transition-all duration-400 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00A5B4]"
          >
            Plan Your Dive
          </button>
        </div>

        {/* Torch Guidance Hint */}
        <div className="mt-7 flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#00A5B4]/80 uppercase">
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#D4AF6A]" />
          <span>
            {isTouchDevice ? 'Drag to guide expedition dive torch' : 'Move cursor to sweep flashlight across reef'}
          </span>
        </div>
      </div>

      {/* 
        BOTTOM BAR: COORDINATES + ANIMATED RISING BUBBLE SCROLL INDICATOR
      */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pb-6 pt-2 flex items-end justify-between text-xs text-[#DCE6E9]/60 font-mono tracking-wider">
        {/* Geographic Depth / Telemetry */}
        <div className="hidden sm:flex flex-col text-[11px] gap-0.5">
          <span className="text-[#00A5B4]">LOC: 16°12&apos;S 145°58&apos;E</span>
          <span>DEPTH GAUGE: 00.0M — SURFACE</span>
        </div>

        {/* Animated Rising Bubble Scroll Indicator */}
        <a
          href="#expeditions"
          aria-label="Scroll down to expeditions"
          className="mx-auto flex flex-col items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00A5B4] p-2"
        >
          {/* Bubble Rising Animation */}
          <div className="relative w-5 h-9 rounded-full border border-[#00A5B4]/40 flex items-start justify-center p-1 group-hover:border-[#00A5B4] transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00A5B4] shadow-[0_0_8px_#00A5B4] animate-bounce" />
          </div>
          <span className="text-[10px] font-light tracking-[0.3em] uppercase text-[#DCE6E9]/70 group-hover:text-[#00A5B4] transition-colors">
            Descend
          </span>
        </a>

        {/* Fleet Status */}
        <div className="hidden sm:flex flex-col text-right text-[11px] gap-0.5">
          <span className="text-[#D4AF6A]">AUTUMN / SUMMER EXPEDITIONS</span>
          <span>DAN DIVE SAFETY VERIFIED</span>
        </div>
      </div>
    </section>
  );
};
