import React from 'react';
import { Vessel } from '../../types/fleet';
import { Check } from 'lucide-react';

export const VesselCard: React.FC<{ vessel: Vessel }> = ({ vessel }) => {
  return (
    <div className="glass-panel-luxury rounded-2xl overflow-hidden flex flex-col group transition-all duration-500 hover:-translate-y-1">
      {/* Vessel Image */}
      <div className="relative h-68 overflow-hidden">
        <img
          src={vessel.image}
          alt={vessel.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-black/30" />

        {/* Status Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-black/70 backdrop-blur-md border border-white/10 text-emerald-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>{vessel.status}</span>
        </div>

        {/* Vessel Name Overlay */}
        <div className="absolute bottom-4 left-6 right-6">
          <span className="text-[10px] font-mono text-[#E5C890] uppercase tracking-widest block">
            {vessel.type}
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-light text-white mt-0.5">
            {vessel.name}
          </h3>
        </div>
      </div>

      {/* Body Specs */}
      <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
        <p className="text-xs font-light text-slate-300/80 leading-relaxed">
          {vessel.description}
        </p>

        {/* Technical Metas */}
        <div className="grid grid-cols-3 gap-2 p-3.5 rounded-xl bg-[#070D18]/70 border border-white/5 text-center text-xs font-mono">
          <div>
            <span className="text-slate-400 block text-[9px]">LENGTH</span>
            <span className="text-white font-medium">{vessel.length}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[9px]">CAPACITY</span>
            <span className="text-white font-medium">{vessel.capacity.split(' + ')[0]}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[9px]">SPEED</span>
            <span className="text-[#E5C890] font-medium">{vessel.speed}</span>
          </div>
        </div>

        {/* Features Checklist */}
        <div className="space-y-2">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
            Shipboard Features
          </span>
          {vessel.features.map((feat) => (
            <div key={feat} className="flex items-start gap-2 text-xs text-slate-300">
              <Check className="w-3.5 h-3.5 text-[#E5C890] shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
