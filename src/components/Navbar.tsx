import React, { useState, useEffect } from 'react';
import { Logomark } from './BrandLogo';
import { audioSystem } from '../utils/audio';
import { Volume2, VolumeX, Menu, X, Compass, Anchor } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const newState = audioSystem.toggle();
    setAudioActive(newState);
  };

  const navLinks = [
    { label: 'Expeditions', href: '#expeditions' },
    { label: 'Conditions', href: '#conditions' },
    { label: 'Fleet', href: '#fleet' },
    { label: 'Equipment', href: '#equipment' },
    { label: 'Logbook', href: '#logbook' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050E1D]/85 backdrop-blur-xl border-b border-[#00A5B4]/15 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
        {/* Brand Zone (Single-line wordmark with glowing logomark) */}
        <a
          href="#"
          className="flex items-center gap-3.5 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00A5B4]"
        >
          <Logomark size={38} className="transition-transform duration-500 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="text-sm md:text-base font-light tracking-[0.25em] text-white uppercase font-sans">
              DEEP DIVE
            </span>
            <span className="text-[9px] font-light tracking-[0.35em] text-[#00A5B4] uppercase -mt-0.5">
              AUSTRALIA
            </span>
          </div>
        </a>

        {/* Navigation Links (Center, clean typography, hover underline) */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-light tracking-[0.18em] text-[#DCE6E9]/80 uppercase">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 transition-colors hover:text-white whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00A5B4]"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00A5B4] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Zone (Soundscape toggle + Primary 'Book a Dive' CTA) */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Ambient Hydrophone Audio Toggle */}
          <button
            onClick={toggleSound}
            aria-label={audioActive ? 'Mute ocean hydrophone sound' : 'Unmute ocean hydrophone sound'}
            title={audioActive ? 'Mute Ocean Hydrophone' : 'Ambient Ocean Hydrophone'}
            className="p-2 rounded-full border border-[#00A5B4]/30 hover:border-[#00A5B4] text-[#DCE6E9] hover:text-[#00A5B4] transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00A5B4]"
          >
            {audioActive ? (
              <div className="flex items-center gap-1">
                <Volume2 className="w-4 h-4 text-[#00A5B4] animate-pulse" />
                <span className="hidden sm:inline text-[10px] tracking-widest text-[#00A5B4] uppercase">Live Sound</span>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <VolumeX className="w-4 h-4 text-[#DCE6E9]/60" />
                <span className="hidden sm:inline text-[10px] tracking-widest text-[#DCE6E9]/60 uppercase">Hydrophone</span>
              </div>
            )}
          </button>

          {/* Book a Dive CTA Button */}
          <button
            onClick={onBookClick}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs font-light tracking-[0.2em] text-white uppercase border border-[#00A5B4]/60 rounded hover:border-[#00A5B4] hover:bg-[#00A5B4]/15 hover:shadow-[0_0_20px_rgba(0,165,180,0.4)] transition-all duration-300 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00A5B4]"
          >
            <span>Book a Dive</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-[#DCE6E9] hover:text-[#00A5B4] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00A5B4]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu with Staggered Links */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#050E1D]/98 backdrop-blur-2xl z-40 flex flex-col justify-between p-8 border-t border-[#00A5B4]/20 animate-in fade-in duration-300">
          <div className="flex flex-col gap-6 pt-6">
            <div className="text-[10px] font-mono tracking-[0.3em] text-[#00A5B4] uppercase">
              // EXPEDITION NAVIGATION
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light tracking-[0.2em] text-[#DCE6E9] hover:text-[#00A5B4] transition-colors uppercase border-b border-white/5 pb-3"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 pb-8">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3.5 text-center text-xs font-light tracking-[0.25em] text-white uppercase bg-[#00A5B4]/20 border border-[#00A5B4] rounded shadow-[0_0_20px_rgba(0,165,180,0.3)] hover:bg-[#00A5B4]/30"
            >
              Book an Expedition
            </button>
            <div className="flex items-center justify-between text-xs text-[#DCE6E9]/50 pt-2 font-mono">
              <span>CAIRNS · NINGALOO · CORAL SEA</span>
              <span>18°S 146°E</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
