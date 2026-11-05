import React from 'react';
import { SAFETY_STANDARDS, FLEET_STATS } from '../../data/fleetData';
import { Users, HeartPulse, ShieldCheck, Wind, Anchor, Award } from 'lucide-react';

export const SafetyStandardsGrid: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users className="w-5 h-5 text-[#E5C890]" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-rose-300" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#E5C890]" />;
      case 'Wind': return <Wind className="w-5 h-5 text-slate-300" />;
      case 'Anchor': return <Anchor className="w-5 h-5 text-slate-300" />;
      case 'Award': return <Award className="w-5 h-5 text-[#E5C890]" />;
      default: return <ShieldCheck className="w-5 h-5 text-[#E5C890]" />;
    }
  };

  return (
    <div className="space-y-12">
      {/* 4 Key Numerical Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {FLEET_STATS.map((stat) => (
          <div
            key={stat.label}
            className="p-6 rounded-2xl glass-panel-luxury text-center border border-white/10"
          >
            <span
              className={`text-3xl md:text-4xl font-light font-display tracking-tight block ${
                stat.highlight ? 'text-[#E5C890]' : 'text-white'
              }`}
            >
              {stat.value}
            </span>
            <span
              className={`block text-xs font-mono uppercase mt-1 tracking-widest ${
                stat.highlight ? 'text-[#E5C890]' : 'text-slate-300'
              }`}
            >
              {stat.label}
            </span>
            <span className="block text-[11px] text-slate-400 mt-0.5 font-light">
              {stat.sub}
            </span>
          </div>
        ))}
      </div>

      {/* 6 Protocols */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAFETY_STANDARDS.map((s) => (
          <div
            key={s.title}
            className="p-6 rounded-2xl glass-panel-luxury flex flex-col justify-between space-y-4"
          >
            <div className="p-3 rounded-xl bg-[#070D18]/80 w-fit border border-white/5">
              {getIcon(s.iconName)}
            </div>
            <div>
              <h4 className="font-display text-xl font-normal text-white mb-2">
                {s.title}
              </h4>
              <p className="text-xs font-light text-slate-300/80 leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
