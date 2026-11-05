import React from 'react';
import { Compass, Waves, Shield, Eye } from 'lucide-react';

export const HeroTelemetry: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-8 py-3.5 border-t border-b border-white/10 bg-[#070D18]/70 backdrop-blur-md hidden md:flex items-center justify-between text-[11px] font-mono tracking-widest text-slate-300 uppercase">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span className="text-white">Coral Sea Transect</span>
      </div>

      <div className="flex items-center gap-1.5 text-slate-400">
        <Compass className="w-3.5 h-3.5 text-[#E5C890]" />
        <span>18°18&apos;S 147°42&apos;E</span>
      </div>

      <div className="flex items-center gap-1.5 text-slate-400">
        <Waves className="w-3.5 h-3.5 text-[#E5C890]" />
        <span>Depth 38.4m</span>
      </div>

      <div className="flex items-center gap-1.5 text-slate-400">
        <Eye className="w-3.5 h-3.5 text-[#E5C890]" />
        <span>Vis 45m+</span>
      </div>

      <div className="flex items-center gap-1.5 text-slate-400">
        <Shield className="w-3.5 h-3.5 text-[#E5C890]" />
        <span>Nitrox 32%</span>
      </div>
    </div>
  );
};
