import React, { useEffect } from 'react';
import { LogbookEntry } from '../../types/logbook';
import { X, ChevronLeft, ChevronRight, Gauge, Clock, Eye, Thermometer, UserCheck } from 'lucide-react';

interface PhotoLightboxProps {
  entry: LogbookEntry | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  entry,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    if (entry) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [entry, onClose, onNext, onPrev]);

  if (!entry) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-2xl">
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#E5C890] hover:border-[#E5C890] transition-all"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev / Next buttons */}
      <button
        onClick={onPrev}
        aria-label="Previous Photo"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#E5C890] hover:border-[#E5C890] transition-all hidden md:flex items-center justify-center"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        aria-label="Next Photo"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#E5C890] hover:border-[#E5C890] transition-all hidden md:flex items-center justify-center"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glass-panel-luxury rounded-2xl border border-white/10 shadow-2xl flex flex-col lg:flex-row">
        {/* Image */}
        <div className="lg:w-3/5 h-80 sm:h-96 lg:h-auto min-h-[400px] relative overflow-hidden bg-black">
          <img
            src={entry.image}
            alt={entry.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Log Details */}
        <div className="lg:w-2/5 p-7 md:p-8 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono tracking-widest text-slate-950 bg-white font-medium px-2.5 py-0.5 rounded-full">
                LOG #{entry.diveNo}
              </span>
              <span className="text-xs font-mono text-slate-400">{entry.date}</span>
            </div>

            <span className="text-xs font-mono text-[#E5C890] uppercase block">
              {entry.location}
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-light text-white mt-1">
              {entry.title}
            </h3>

            {/* Telemetry Strip */}
            <div className="grid grid-cols-2 gap-2 mt-4 p-3.5 rounded-xl bg-[#070D18]/70 border border-white/5 text-xs font-mono">
              <div className="flex items-center gap-2">
                <Gauge className="w-3.5 h-3.5 text-white/50" />
                <span>Depth: {entry.depth}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#E5C890]" />
                <span>Time: {entry.bottomTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Thermometer className="w-3.5 h-3.5 text-white/50" />
                <span>Temp: {entry.waterTemp}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-3.5 h-3.5 text-white/50" />
                <span>Vis: {entry.visibility}</span>
              </div>
            </div>

            {/* Diver notes */}
            <div className="mt-4">
              <span className="text-[10px] font-mono text-[#E5C890] uppercase tracking-wider block mb-1">
                Field Journal Notes
              </span>
              <p className="text-xs font-light text-slate-300 leading-relaxed">
                {entry.notes}
              </p>
            </div>

            {/* Species spotted */}
            <div className="mt-4">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                Documented Marine Life
              </span>
              <div className="flex flex-wrap gap-1.5">
                {entry.speciesSpotted.map((sp) => (
                  <span
                    key={sp}
                    className="text-[10px] font-mono bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full text-slate-300"
                  >
                    {sp}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Diver credit */}
          <div className="pt-4 border-t border-white/10 flex items-center gap-3">
            <div className="p-2 rounded-full bg-[#070D18] border border-white/10">
              <UserCheck className="w-4 h-4 text-[#E5C890]" />
            </div>
            <div>
              <span className="text-xs font-medium text-white block">
                {entry.diverName}
              </span>
              <span className="text-[10px] font-mono text-slate-400 block">
                {entry.certification}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
