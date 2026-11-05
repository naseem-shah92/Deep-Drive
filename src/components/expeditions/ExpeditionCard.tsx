import React from 'react';
import { Expedition } from '../../types/expedition';
import { ArrowUpRight, Gauge, Clock } from 'lucide-react';

interface ExpeditionCardProps {
  expedition: Expedition;
  onSelect: (exp: Expedition) => void;
}

export const ExpeditionCard: React.FC<ExpeditionCardProps> = ({ expedition, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(expedition)}
      className="glass-panel-luxury rounded-2xl overflow-hidden flex flex-col group cursor-pointer transition-all duration-500 hover:-translate-y-1.5"
    >
      {/* Card Image */}
      <div className="relative h-68 overflow-hidden">
        <img
          src={expedition.image}
          alt={expedition.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-black/30" />

        {/* Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="text-[10px] font-mono tracking-widest text-slate-200 uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            {expedition.category}
          </span>
          <span className="text-[10px] font-mono tracking-widest text-[#E5C890] uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            {expedition.difficulty}
          </span>
        </div>

        {/* Price Display */}
        <div className="absolute bottom-3 right-4 text-right">
          <span className="text-[10px] font-mono text-slate-300 uppercase block">From</span>
          <span className="text-xl font-light text-white font-mono">
            ${expedition.priceAUD.toLocaleString()}{' '}
            <span className="text-xs text-[#E5C890]">AUD</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
        <div>
          <div className="text-[10px] font-mono text-[#E5C890] tracking-[0.2em] uppercase mb-1.5">
            {expedition.location}
          </div>
          <h3 className="font-display text-2xl font-normal text-white group-hover:text-[#E5C890] transition-colors flex items-center justify-between">
            <span>{expedition.title}</span>
            <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#E5C890] transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </h3>
          <p className="mt-2 text-xs font-light text-slate-300/80 line-clamp-2 leading-relaxed">
            {expedition.subtitle}
          </p>
        </div>

        {/* Metas */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <Gauge className="w-3.5 h-3.5 text-white/60" />
            <span>{expedition.depth}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#E5C890]" />
            <span>{expedition.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
