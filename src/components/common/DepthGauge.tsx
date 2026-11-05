import React from 'react';
import { useDepthScroll, OCEAN_ZONES } from '../../hooks/useDepthScroll';
import { Compass } from 'lucide-react';

export const DepthGauge: React.FC = () => {
  const { depthMeters, pressureATA, currentZone, scrollToZone, scrollProgress } = useDepthScroll();

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end pointer-events-auto select-none">
      {/* Telemetry pill */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#070D18]/85 backdrop-blur-md border border-white/10 shadow-xl text-[10px] font-mono tracking-widest text-slate-300 mb-3">
        <Compass className="w-3.5 h-3.5 text-[#E5C890]" />
        <span>DEPTH: <strong className="text-white font-medium">{depthMeters}m</strong></span>
        <span className="text-white/20">|</span>
        <span className="text-slate-400">{pressureATA} ATA</span>
      </div>

      {/* Vertical gauge bar */}
      <div className="relative w-8 flex flex-col items-center">
        {/* Track line */}
        <div className="w-[1px] h-60 bg-white/10 relative">
          <div
            className="w-full bg-[#E5C890] transition-all duration-150"
            style={{ height: `${Math.round(scrollProgress * 100)}%` }}
          />
        </div>

        {/* Zone markers */}
        <div className="absolute inset-y-0 right-3 flex flex-col justify-between py-1">
          {OCEAN_ZONES.map((zone) => {
            const isActive = currentZone.name === zone.name;
            return (
              <button
                key={zone.name}
                onClick={() => scrollToZone(zone.targetId)}
                title={`${zone.name} (${zone.depthRange})`}
                className="group flex items-center justify-end gap-2 focus:outline-none"
              >
                <span className="hidden group-hover:block text-[9px] font-mono tracking-wider uppercase text-white bg-black/85 px-2 py-0.5 rounded border border-white/10 whitespace-nowrap">
                  {zone.name}
                </span>
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-2 h-2 bg-[#E5C890] shadow-[0_0_8px_rgba(229,200,144,0.6)]'
                      : 'w-1 h-1 bg-white/20 group-hover:bg-white/60'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Current zone label */}
      <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#E5C890] mt-3">
        {currentZone.name}
      </span>
    </div>
  );
};
