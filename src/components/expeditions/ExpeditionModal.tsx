import React, { useEffect } from 'react';
import { Expedition } from '../../types/expedition';
import { X, Check, Gauge, Clock, Calendar, Users, ArrowRight } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-panel-luxury rounded-2xl border border-white/10 shadow-2xl flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#E5C890] hover:border-[#E5C890] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Banner Image */}
        <div className="relative h-72 sm:h-80 md:h-96 w-full shrink-0 overflow-hidden">
          <img
            src={expedition.image}
            alt={expedition.title}
            className="w-full h-full object-cover filter saturate-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/50 to-transparent" />

          {/* Badges on Banner */}
          <div className="absolute top-6 left-6 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono tracking-widest text-slate-200 uppercase bg-black/60 backdrop-blur-md border border-white/10">
              {expedition.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono tracking-widest text-[#E5C890] uppercase bg-black/60 backdrop-blur-md border border-white/10">
              {expedition.difficulty}
            </span>
          </div>

          {/* Header Title inside banner bottom */}
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#E5C890] uppercase block mb-1">
              {expedition.location}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
              {expedition.title}
            </h2>
            <p className="mt-1 text-sm text-slate-300 font-light">
              {expedition.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-8 flex-1">
          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-[#0B192C]/50 border border-white/5 text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <Gauge className="w-4 h-4 text-white/60" />
              <div>
                <span className="text-slate-400 block text-[10px]">DEPTH</span>
                <span className="text-white font-medium">{expedition.depth}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#E5C890]" />
              <div>
                <span className="text-slate-400 block text-[10px]">DURATION</span>
                <span className="text-white font-medium">{expedition.duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-white/60" />
              <div>
                <span className="text-slate-400 block text-[10px]">SEASON</span>
                <span className="text-white font-medium">{expedition.bestSeason}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-[#E5C890]" />
              <div>
                <span className="text-slate-400 block text-[10px]">CADRE</span>
                <span className="text-white font-medium">{expedition.groupSize}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono tracking-widest text-[#E5C890] uppercase mb-2">
              Expedition Overview
            </h4>
            <p className="text-sm font-light text-slate-300 leading-relaxed">
              {expedition.description}
            </p>
          </div>

          {/* Day-by-Day Itinerary */}
          <div>
            <h4 className="text-xs font-mono tracking-widest text-[#E5C890] uppercase mb-4">
              Voyage Itinerary
            </h4>
            <div className="space-y-4">
              {expedition.itinerary.map((step) => (
                <div
                  key={step.day}
                  className="p-4 rounded-xl bg-[#070D18]/70 border border-white/5 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6"
                >
                  <span className="text-xs font-mono text-[#E5C890] uppercase shrink-0 pt-0.5">
                    {step.day}
                  </span>
                  <div>
                    <h5 className="text-sm font-medium text-white mb-1">
                      {step.title}
                    </h5>
                    <p className="text-xs font-light text-slate-300/80 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions */}
          <div>
            <h4 className="text-xs font-mono tracking-widest text-[#E5C890] uppercase mb-3">
              Included In Voyage
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {expedition.inclusions.map((inc) => (
                <div key={inc} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E5C890] shrink-0" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Pricing & Request CTA */}
        <div className="p-6 md:p-8 bg-[#0B192C]/80 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase block">Total Package</span>
            <span className="text-2xl md:text-3xl font-light text-white font-mono">
              ${expedition.priceAUD.toLocaleString()}{' '}
              <span className="text-sm font-mono text-[#E5C890]">AUD per guest</span>
            </span>
          </div>

          <button
            onClick={() => onRequestExpedition(expedition)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-mono tracking-[0.2em] uppercase font-medium text-slate-950 bg-white hover:bg-[#F4EBD9] transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Request Reservation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
