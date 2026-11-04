import React, { useState } from 'react';
import { FLEET, Vessel } from '../data/diveData';
import { ShieldCheck, HeartPulse, Anchor, Wind, Check, ChevronDown, ChevronUp, AlertCircle, Award } from 'lucide-react';

export const SafetyFleetSection: React.FC = () => {
  const [expandedVesselId, setExpandedVesselId] = useState<string>('odyssey-explorer');

  const standards = [
    {
      title: '1:4 Maximum Guide Ratio',
      desc: 'Strictly limited guest cadres ensure personalized supervision and undisturbed wildlife encounters.',
    },
    {
      title: 'Dedicated Emergency O2',
      desc: 'Redundant demand-valve 100% medical oxygen delivery systems on all dive decks and tender vessels.',
    },
    {
      title: 'DAN Insurance Integration',
      desc: 'Direct telemetry connection with Divers Alert Network medical hotline and priority airlift protocols.',
    },
    {
      title: 'Nitrox & Trimix Blending',
      desc: 'Onboard continuous membrane nitrox generators and certified gas blenders with digital oxygen analysis.',
    },
    {
      title: 'Satellite Marine Radar & AIS',
      desc: 'Every diver is equipped with personal GPS/AIS emergency transponders linked to shipboard plotters.',
    },
    {
      title: 'Hyperbaric Chamber Ready',
      desc: 'Onboard portable Hyperlite chamber and emergency evacuation protocols mapped for every dive site.',
    },
  ];

  return (
    <section id="fleet" className="relative py-28 px-6 md:px-12 bg-[#050E1D]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-[#00A5B4] uppercase">
            <span className="w-6 h-[1px] bg-[#00A5B4]" />
            <span>EXCELLENCE IN REMOTE EXPEDITIONS</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extralight tracking-[0.15em] text-white uppercase">
            Safety Is Our Depth Gauge
          </h2>
          <p className="mt-3 text-sm sm:text-base font-light text-[#DCE6E9]/80 max-w-2xl leading-relaxed">
            In the remote Coral Sea and open Pacific swell, luxury is inseparable from rigorous, military-grade marine protocols.
          </p>
        </div>

        {/* Stats Row with Tabular Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-6 rounded-lg glass-panel text-center border border-[#00A5B4]/25">
            <span className="text-3xl md:text-4xl font-light text-white font-mono tracking-tight">18+</span>
            <span className="block text-xs font-mono text-[#00A5B4] uppercase mt-1 tracking-widest">
              Years Operating
            </span>
            <span className="block text-[11px] text-[#DCE6E9]/60 mt-0.5 font-light">Australian waters</span>
          </div>

          <div className="p-6 rounded-lg glass-panel text-center border border-[#00A5B4]/25">
            <span className="text-3xl md:text-4xl font-light text-white font-mono tracking-tight">4,200+</span>
            <span className="block text-xs font-mono text-[#00A5B4] uppercase mt-1 tracking-widest">
              Dives Completed
            </span>
            <span className="block text-[11px] text-[#DCE6E9]/60 mt-0.5 font-light">Across 42 remote atolls</span>
          </div>

          <div className="p-6 rounded-lg glass-panel text-center border border-[#00A5B4]/25">
            <span className="text-3xl md:text-4xl font-light text-[#D4AF6A] font-mono tracking-tight">100%</span>
            <span className="block text-xs font-mono text-[#D4AF6A] uppercase mt-1 tracking-widest">
              Incident-Free
            </span>
            <span className="block text-[11px] text-[#DCE6E9]/60 mt-0.5 font-light">Zero decompression hits</span>
          </div>

          <div className="p-6 rounded-lg glass-panel text-center border border-[#00A5B4]/25">
            <span className="text-3xl md:text-4xl font-light text-white font-mono tracking-tight">1 : 4</span>
            <span className="block text-xs font-mono text-[#00A5B4] uppercase mt-1 tracking-widest">
              Max Guide Ratio
            </span>
            <span className="block text-[11px] text-[#DCE6E9]/60 mt-0.5 font-light">Personal master instructor</span>
          </div>
        </div>

        {/* Safety Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {standards.map((s, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-[#00233F]/40 border border-[#00A5B4]/20 hover:border-[#00A5B4]/40 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <ShieldCheck className="w-4 h-4 text-[#00A5B4]" />
                <h3 className="text-sm font-medium text-white tracking-wide">{s.title}</h3>
              </div>
              <p className="text-xs font-light text-[#DCE6E9]/75 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Fleet Breakdown & Depth Gauge Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Fleet Cards (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-light tracking-wide text-white uppercase">
                The Expedition Fleet
              </h3>
              <span className="text-xs font-mono text-[#00A5B4]">
                3 Custom Built Vessels
              </span>
            </div>

            {FLEET.map((vessel) => {
              const isExpanded = expandedVesselId === vessel.id;
              return (
                <div
                  key={vessel.id}
                  className="glass-panel rounded-lg overflow-hidden border border-[#00A5B4]/25 transition-all duration-300"
                >
                  <div
                    onClick={() => setExpandedVesselId(isExpanded ? '' : vessel.id)}
                    className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#00233F]/30 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-14 rounded overflow-hidden shrink-0 border border-white/10">
                        <img
                          src={vessel.image}
                          alt={vessel.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#00A5B4] uppercase tracking-widest block">
                          {vessel.type}
                        </span>
                        <h4 className="text-lg font-light text-white tracking-wide uppercase">
                          {vessel.name}
                        </h4>
                        <span className="text-xs font-mono text-[#DCE6E9]/60">
                          {vessel.length} · {vessel.capacity}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 self-end md:self-center">
                      <div className="hidden sm:block text-right">
                        <span className="text-[10px] font-mono text-[#DCE6E9]/50 uppercase block">Range</span>
                        <span className="text-xs font-mono text-white">{vessel.range}</span>
                      </div>
                      <button
                        aria-label="Expand vessel details"
                        className="p-2 rounded-full border border-white/20 text-[#DCE6E9] hover:text-[#00A5B4] hover:border-[#00A5B4] transition-colors"
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Vessel Specs */}
                  {isExpanded && (
                    <div className="p-6 pt-0 border-t border-white/10 bg-[#050E1D]/50 animate-in fade-in duration-300">
                      <p className="text-xs font-light text-[#DCE6E9]/85 my-4 leading-relaxed">
                        {vessel.description}
                      </p>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                        {vessel.specs.map((spec, i) => (
                          <div key={i} className="p-2.5 rounded bg-[#00233F]/40 border border-white/5 text-xs">
                            <span className="text-[#DCE6E9]/50 font-mono block text-[10px] uppercase">
                              {spec.label}
                            </span>
                            <span className="text-white font-medium">{spec.value}</span>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-white/5 text-xs">
                        <div>
                          <span className="text-[11px] font-mono text-[#00A5B4] uppercase block mb-1.5">
                            Comfort & Hospitality
                          </span>
                          <ul className="space-y-1 text-[#DCE6E9]/80 font-light">
                            {vessel.amenities.map((a, idx) => (
                              <li key={idx} className="flex items-center gap-1.5">
                                <span className="text-[#00A5B4]">·</span>
                                <span>{a}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="text-[11px] font-mono text-[#D4AF6A] uppercase block mb-1.5">
                            Emergency & Marine Safety
                          </span>
                          <ul className="space-y-1 text-[#DCE6E9]/80 font-light">
                            {vessel.safetyKit.map((s, idx) => (
                              <li key={idx} className="flex items-center gap-1.5">
                                <span className="text-[#D4AF6A]">·</span>
                                <span>{s}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Depth Gauge Diagram (4 Cols) */}
          <div className="lg:col-span-4 glass-panel rounded-lg p-6 sm:p-8 border border-[#00A5B4]/30">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-6">
              <span className="text-xs font-mono tracking-widest text-[#00A5B4] uppercase">
                DEPTH TELEMETRY GAUGE
              </span>
              <span className="text-[10px] font-mono text-[#D4AF6A]">STANDARD EN-13319</span>
            </div>

            {/* Vertical Depth Scale graphic */}
            <div className="relative pl-8 border-l-2 border-[#00A5B4]/40 space-y-6 text-xs font-mono">
              {/* Surface */}
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-white shadow-[0_0_8px_white]" />
                <span className="text-white font-bold">0.0M — SURFACE</span>
                <span className="block text-[10px] text-[#DCE6E9]/60 font-light">1.0 Atmosphere · Pure Sunlight</span>
              </div>

              {/* 18m Open Water */}
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-[#00A5B4]" />
                <span className="text-[#00A5B4]">18.0M — RECREATIONAL</span>
                <span className="block text-[10px] text-[#DCE6E9]/60 font-light">2.8 ATM · Coral Reef Gardens</span>
              </div>

              {/* 30m Advanced */}
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-[#00A5B4]" />
                <span className="text-[#00A5B4]">30.0M — ADVANCED LIMIT</span>
                <span className="block text-[10px] text-[#DCE6E9]/60 font-light">4.0 ATM · SS Yongala Superstructure</span>
              </div>

              {/* 40m Deep Sport Max */}
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-[#D4AF6A]" />
                <span className="text-[#D4AF6A]">40.0M — SPORT DIVING CEILING</span>
                <span className="block text-[10px] text-[#DCE6E9]/60 font-light">5.0 ATM · Absolute recreational limit</span>
              </div>

              {/* 60m Technical */}
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-amber-400" />
                <span className="text-amber-400">60.0M — NORMOXIC TRIMIX</span>
                <span className="block text-[10px] text-[#DCE6E9]/60 font-light">7.0 ATM · Planned stage decompression</span>
              </div>

              {/* 100m Abyssal */}
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-rose-400" />
                <span className="text-rose-400">100.0M — HYPOXIC CCR ABYSS</span>
                <span className="block text-[10px] text-[#DCE6E9]/60 font-light">11.0 ATM · Closed-circuit rebreathers only</span>
              </div>
            </div>

            <div className="mt-8 p-3 rounded bg-[#050E1D]/60 border border-white/5 text-[11px] font-light text-[#DCE6E9]/70">
              All Deep Dive Australia excursions utilize continuous computer telemetry with real-time gradient factor modeling.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
