import React from 'react';
import { BrandLogo } from '../common/BrandLogo';
import { PlanktonParticles } from './PlanktonParticles';
import { TorchControls } from './TorchControls';
import { HeroTelemetry } from './HeroTelemetry';
import { useFlashlight } from '../../hooks/useFlashlight';
import { Compass, ChevronDown, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onPlanClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onPlanClick,
}) => {
  const {
    containerRef,
    flashlightOn,
    mode,
    setMode,
    beamRadius,
    setBeamRadius,
  } = useFlashlight({ initialRadius: 280 });

  const isFlood = mode === 'flood';
  const isUV = mode === 'uv';

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-screen h-[100svh] flex flex-col justify-between items-center overflow-hidden bg-[#070D18] select-none"
      style={{
        ['--light-x' as string]: '50%',
        ['--light-y' as string]: '45%',
      }}
    >
      {/* 
        UNDERWATER REEF IMAGE LAYER
        Natural, realistic oceanic light cone
      */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
          flashlightOn ? 'opacity-100' : 'opacity-0'
        } ${isUV ? 'uv-bioluminescence' : ''}`}
        style={{
          maskImage: isFlood
            ? 'none'
            : `radial-gradient(circle ${beamRadius}px at var(--light-x) var(--light-y), rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0) 100%)`,
          WebkitMaskImage: isFlood
            ? 'none'
            : `radial-gradient(circle ${beamRadius}px at var(--light-x) var(--light-y), rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0) 100%)`,
          transition: 'mask-image 0.25s ease-out, -webkit-mask-image 0.25s ease-out',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2400&q=85"
          alt="Coral reef illuminated underwater in the Great Barrier Reef"
          className="w-full h-full object-cover object-center filter saturate-110 brightness-105"
          loading="eager"
        />

        {/* Soft natural halo at the edge of the beam */}
        {!isFlood && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: isUV
                ? `radial-gradient(circle ${beamRadius * 1.15}px at var(--light-x) var(--light-y), transparent 65%, rgba(168, 85, 247, 0.2) 85%, transparent 100%)`
                : `radial-gradient(circle ${beamRadius * 1.12}px at var(--light-x) var(--light-y), transparent 70%, rgba(229, 200, 144, 0.15) 90%, transparent 100%)`,
            }}
          />
        )}
      </div>

      {/* 
        DEEP ABYSS OVERLAY (#070D18)
      */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
          isFlood ? 'opacity-25 bg-[#070D18]' : 'opacity-90 bg-[#070D18]'
        }`}
        style={{
          maskImage: isFlood
            ? 'none'
            : `radial-gradient(circle ${beamRadius * 1.1}px at var(--light-x) var(--light-y), rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,1) 100%)`,
          WebkitMaskImage: isFlood
            ? 'none'
            : `radial-gradient(circle ${beamRadius * 1.1}px at var(--light-x) var(--light-y), rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,1) 100%)`,
        }}
      />

      {/* Atmospheric Soft Light Rays */}
      <div className="absolute inset-0 pointer-events-none water-caustics opacity-40" />

      {/* Floating Plankton Particles */}
      <PlanktonParticles />

      {/* Top Right Controls */}
      <TorchControls
        mode={mode}
        onModeChange={setMode}
        beamRadius={beamRadius}
        onRadiusChange={setBeamRadius}
      />

      {/* Spacer for Topbar */}
      <div className="h-24 shrink-0" />

      {/* EDITORIAL CENTERED HERO CONTENT */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center my-auto">
        <BrandLogo />

        {/* Editorial Heading */}
        <h2 className="mt-8 font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.05] text-balance">
          Descend into the <span className="italic font-normal text-[#E5C890]">Extraordinary</span>
        </h2>

        {/* Refined Subtitle */}
        <p className="mt-6 text-sm sm:text-base md:text-lg font-light text-slate-300/85 max-w-2xl mx-auto leading-relaxed">
          Private, bespoke scuba expeditions across Australia’s most remote coral atolls, historic shipwrecks, and deep ocean dropoffs.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-mono tracking-[0.2em] uppercase font-medium text-slate-950 bg-white hover:bg-[#F4EBD9] transition-all duration-300 shadow-xl shadow-black/50 hover:shadow-2xl flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-slate-950" />
            <span>Explore Voyages</span>
          </button>

          <button
            onClick={onPlanClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-mono tracking-[0.2em] uppercase text-white/90 border border-white/20 hover:border-white/50 hover:bg-white/5 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#E5C890]" />
            <span>Plan Expedition</span>
          </button>
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="w-full relative z-20 pb-4">
        <HeroTelemetry />

        <div
          className="flex flex-col items-center justify-center mt-3 text-slate-400 hover:text-white transition-colors cursor-pointer"
          onClick={onExploreClick}
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Descend</span>
          <ChevronDown className="w-4 h-4 animate-bounce mt-1 text-[#E5C890]" />
        </div>
      </div>
    </section>
  );
};
