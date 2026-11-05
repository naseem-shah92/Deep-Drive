import React, { useState, useEffect } from 'react';
import { Logomark } from '../common/BrandLogo';
import { useUnderwaterAudio } from '../../hooks/useUnderwaterAudio';
import { Volume2, VolumeX, Menu, X, Compass } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isPlaying, toggle, playBubble } = useUnderwaterAudio();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundClick = () => {
    playBubble();
    toggle();
  };

  const navLinks = [
    { label: 'Expeditions', href: '#expeditions' },
    { label: 'Telemetry', href: '#conditions' },
    { label: 'Fleet', href: '#fleet' },
    { label: 'Equipment', href: '#equipment' },
    { label: 'Journal', href: '#logbook' },
    { label: 'Concierge', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#070D18]/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
        {/* Brand Zone */}
        <a
          href="#hero"
          className="flex items-center gap-3.5 group whitespace-nowrap shrink-0 focus:outline-none"
        >
          <Logomark size={36} className="transition-transform duration-500 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-display text-lg tracking-[0.18em] text-white uppercase leading-none">
              Deep Dive
            </span>
            <span className="text-[8px] font-mono tracking-[0.3em] text-[#E5C890] uppercase mt-0.5">
              Australia
            </span>
          </div>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-widest text-slate-300 uppercase">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={playBubble}
              className="relative py-1 transition-colors hover:text-white whitespace-nowrap shrink-0 group focus:outline-none"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#E5C890] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Hydrophone Audio Toggle */}
          <button
            onClick={handleSoundClick}
            aria-label={isPlaying ? 'Mute hydrophone audio' : 'Play ambient hydrophone audio'}
            title={isPlaying ? 'Mute Ocean Hydrophone' : 'Ambient Hydrophone Audio'}
            className="p-2 rounded-full border border-white/10 hover:border-white/30 text-slate-300 hover:text-white transition-all focus:outline-none"
          >
            {isPlaying ? (
              <div className="flex items-center gap-1.5 px-1">
                <Volume2 className="w-4 h-4 text-[#E5C890] animate-pulse" />
                <span className="hidden sm:inline text-[10px] font-mono tracking-widest text-[#E5C890] uppercase">Hydrophone Live</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 px-1">
                <VolumeX className="w-4 h-4 text-slate-400" />
                <span className="hidden sm:inline text-[10px] font-mono tracking-widest text-slate-400 uppercase">Hydrophone</span>
              </div>
            )}
          </button>

          {/* Primary Book CTA */}
          <button
            onClick={() => {
              playBubble();
              onBookClick();
            }}
            className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase font-medium text-slate-950 bg-white hover:bg-[#F4EBD9] transition-all shadow-md"
          >
            <Compass className="w-3.5 h-3.5 text-slate-950" />
            <span>Book Expedition</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#E5C890] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070D18]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                playBubble();
                setMobileMenuOpen(false);
              }}
              className="block text-sm font-mono tracking-widest uppercase text-slate-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                playBubble();
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 rounded-full text-xs font-mono tracking-widest uppercase font-medium text-slate-950 bg-white text-center"
            >
              Book Expedition
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
