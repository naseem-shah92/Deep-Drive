import React from 'react';
import { MarineConditions, DiveSite } from '../../types/conditions';
import { Waves, Wind, Thermometer, Eye } from 'lucide-react';

interface ConditionsTelemetryCardProps {
  site: DiveSite;
  conditions: MarineConditions;
  loading: boolean;
}

export const ConditionsTelemetryCard: React.FC<ConditionsTelemetryCardProps> = ({
  site,
  conditions,
}) => {
  return (
    <div className="glass-panel-luxury rounded-2xl p-7 md:p-8 flex flex-col justify-between">
      <div>
        {/* Top telemetry title & live ping */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${conditions.isLive ? 'bg-emerald-400' : 'bg-[#E5C890]'}`} />
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                {conditions.updatedAt}
              </span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-light text-white mt-1">
              {site.name}
            </h3>
          </div>

          {/* Rating Badge */}
          <div className="text-right">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Conditions Rating</span>
            <span className="text-2xl font-light text-white font-mono">
              {conditions.ratingScore} <span className="text-xs text-slate-400">/10</span>
            </span>
            <span className="block text-[10px] font-mono uppercase text-[#E5C890]">
              {conditions.rating}
            </span>
          </div>
        </div>

        {/* 4 Telemetry Meters */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="p-5 rounded-xl bg-[#070D18]/60 border border-white/5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#E5C890]">
              <Thermometer className="w-4 h-4 text-white/50" />
              <span>WATER TEMP</span>
            </div>
            <div className="mt-2 text-2xl font-light text-white font-mono">
              {conditions.waterTemp}°C
            </div>
            <span className="text-[10px] text-slate-400 block mt-0.5">Optimal 5mm steamer</span>
          </div>

          <div className="p-5 rounded-xl bg-[#070D18]/60 border border-white/5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#E5C890]">
              <Eye className="w-4 h-4 text-white/50" />
              <span>VISIBILITY</span>
            </div>
            <div className="mt-2 text-2xl font-light text-white font-mono">
              {conditions.visibility}m
            </div>
            <span className="text-[10px] text-slate-400 block mt-0.5">Crystal Oceanic</span>
          </div>

          <div className="p-5 rounded-xl bg-[#070D18]/60 border border-white/5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#E5C890]">
              <Waves className="w-4 h-4 text-white/50" />
              <span>SWELL HEIGHT</span>
            </div>
            <div className="mt-2 text-2xl font-light text-white font-mono">
              {conditions.swellHeight}m
            </div>
            <span className="text-[10px] text-slate-400 block mt-0.5">Gentle oceanic swell</span>
          </div>

          <div className="p-5 rounded-xl bg-[#070D18]/60 border border-white/5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#E5C890]">
              <Wind className="w-4 h-4 text-white/50" />
              <span>WIND SPEED</span>
            </div>
            <div className="mt-2 text-2xl font-light text-white font-mono">
              {conditions.windSpeed} <span className="text-xs">kts</span>
            </div>
            <span className="text-[10px] text-slate-400 block mt-0.5">Direction: {conditions.windDirection}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6 pt-5 border-t border-white/10 text-xs font-light text-slate-300 italic">
        &ldquo;{site.description}&rdquo;
      </div>
    </div>
  );
};
