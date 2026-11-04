import React, { useEffect } from 'react';
import { Expedition } from '../data/diveData';
import { X, MapPin, Gauge, Clock, ShieldCheck, Users, Calendar, Check, ArrowRight } from 'lucide-react';

interface ExpeditionModalProps {
  expedition: Expedition | null;
  onClose: () => void;
  onRequestExpedition: (expedition: Expedition) => void;
}

export const ExpeditionModal: React.FC<ExpeditionModalProps> = ({
  expedition,
  onClose,
  onRequestExpedition,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (expedition) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [expedition, onClose]);

  if (!expedition) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#00233F]/90 border border-[#00A5B4]/30 rounded-lg shadow-2xl text-[#DCE6E9] p-6 sm:p-8 md:p-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close expedition details"
          className="absolute top-5 right-5 p-2 rounded-full border border-white/20 text-[#DCE6E9] hover:text-[#00A5B4] hover:border-[#00A5B4] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00A5B4]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Hero Image & Badges */}
        <div className="relative w-full h-64 sm:h-80 rounded overflow-hidden mb-6 border border-[#00A5B4]/20">
          <img
            src={expedition.image}
            alt={expedition.title}
            className="w-full h-full object-cover filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00233F] via-[#00233F]/30 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#00A5B4] uppercase block">
                {expedition.category} EXPEDITION · {expedition.region}
              </span>
              <h3 className="text-xl sm:text-3xl font-light tracking-[0.1em] text-white uppercase mt-1">
                {expedition.title}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-[#DCE6E9]/70 uppercase block">Expedition Rate</span>
              <span className="text-2xl font-light text-[#D4AF6A] tracking-wider">
                ${expedition.priceAUD.toLocaleString()} AUD
              </span>
              <span className="text-[10px] font-mono text-[#DCE6E9]/60 block">/ guest all-inclusive</span>
            </div>
          </div>
        </div>

        {/* Quick Spec Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-[#00A5B4]/20 text-xs font-mono mb-8">
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-[#00A5B4] shrink-0" />
            <div>
              <span className="text-[#DCE6E9]/50 block text-[10px]">MAX DEPTH</span>
              <span className="text-white font-medium">{expedition.depth}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#00A5B4] shrink-0" />
            <div>
              <span className="text-[#DCE6E9]/50 block text-[10px]">DURATION</span>
              <span className="text-white font-medium">{expedition.duration}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#00A5B4] shrink-0" />
            <div>
              <span className="text-[#DCE6E9]/50 block text-[10px]">GROUP RATIO</span>
              <span className="text-white font-medium">{expedition.groupSize}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00A5B4] shrink-0" />
            <div>
              <span className="text-[#DCE6E9]/50 block text-[10px]">CERTIFICATION</span>
              <span className="text-white font-medium">{expedition.difficulty}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h4 className="text-xs font-mono tracking-[0.2em] text-[#00A5B4] uppercase mb-2">
            Expedition Overview
          </h4>
          <p className="text-sm font-light text-[#DCE6E9]/90 leading-relaxed">
            {expedition.description}
          </p>
        </div>

        {/* Expedition Highlights */}
        <div className="mb-8">
          <h4 className="text-xs font-mono tracking-[0.2em] text-[#00A5B4] uppercase mb-3">
            Key Marine Encounters
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {expedition.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-3 rounded bg-[#050E1D]/60 border border-white/10 text-xs font-light text-[#DCE6E9]"
              >
                <span className="text-[#D4AF6A] mr-1.5">✦</span>
                {highlight}
              </div>
            ))}
          </div>
        </div>

        {/* Day-by-Day Itinerary */}
        <div className="mb-8">
          <h4 className="text-xs font-mono tracking-[0.2em] text-[#00A5B4] uppercase mb-3">
            Detailed Itinerary
          </h4>
          <div className="space-y-3">
            {expedition.itinerary.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded bg-[#050E1D]/40 border border-[#00A5B4]/15 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4"
              >
                <span className="font-mono text-xs text-[#00A5B4] tracking-widest shrink-0">
                  {item.day}
                </span>
                <div>
                  <h5 className="text-sm font-medium text-white">{item.title}</h5>
                  <p className="text-xs text-[#DCE6E9]/75 mt-1 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inclusions & Season */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pt-4 border-t border-[#00A5B4]/20">
          <div>
            <h4 className="text-xs font-mono tracking-[0.2em] text-[#00A5B4] uppercase mb-3">
              Included With Expedition
            </h4>
            <ul className="space-y-2 text-xs text-[#DCE6E9]/80 font-light">
              {expedition.inclusions.map((inc, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00A5B4] shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-mono tracking-[0.2em] text-[#00A5B4] uppercase mb-3">
              Optimal Season & Requirements
            </h4>
            <div className="p-4 rounded bg-[#050E1D]/50 border border-white/10 space-y-2.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#DCE6E9]/60 font-mono">Best Season:</span>
                <span className="text-[#D4AF6A] font-medium">{expedition.bestSeason}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#DCE6E9]/60 font-mono">Certification Required:</span>
                <span className="text-white">{expedition.certification}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#DCE6E9]/60 font-mono">Insurance:</span>
                <span className="text-white">DAN Dive Medical Cover Required</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#00A5B4]/20">
          <div className="text-xs text-[#DCE6E9]/60 font-mono">
            Location: {expedition.location}
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 text-xs uppercase tracking-wider text-[#DCE6E9] border border-white/20 rounded hover:border-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => onRequestExpedition(expedition)}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-light tracking-[0.2em] text-white uppercase bg-[#00A5B4] hover:bg-[#00A5B4]/90 rounded shadow-[0_0_20px_rgba(0,165,180,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <span>Request This Expedition</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
