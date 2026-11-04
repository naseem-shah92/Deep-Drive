import React, { useState } from 'react';
import { EXPEDITIONS, Expedition } from '../data/diveData';
import { ArrowUpRight, Gauge, Clock, Sparkles } from 'lucide-react';

interface ExpeditionsSectionProps {
  onSelectExpedition: (expedition: Expedition) => void;
}

export const ExpeditionsSection: React.FC<ExpeditionsSectionProps> = ({ onSelectExpedition }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Reef', 'Wreck', 'Cave', 'Wildlife', 'Technical'];

  const filteredExpeditions =
    selectedCategory === 'All'
      ? EXPEDITIONS
      : EXPEDITIONS.filter((exp) => exp.category === selectedCategory);

  return (
    <section id="expeditions" className="relative py-28 px-6 md:px-12 bg-[#050E1D] overflow-hidden">
      {/* Background subtle oceanic glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-[#00A5B4]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-[#00233F]/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-[#00A5B4] uppercase">
              <span className="w-6 h-[1px] bg-[#00A5B4]" />
              <span>SIGNATURE DIVES</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extralight tracking-[0.15em] text-white uppercase">
              The Great Oceanic Frontier
            </h2>
            <p className="mt-4 text-sm sm:text-base font-light text-[#DCE6E9]/80 max-w-2xl leading-relaxed">
              Private, small-cadre expeditions into Australia’s most exclusive underwater sanctuaries. From isolated Coral Sea volcanic spires to giant kelp cathedrals.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded bg-[#00233F]/60 border border-[#00A5B4]/20 self-start md:self-end overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-xs font-mono tracking-widest uppercase rounded transition-all duration-300 whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#00A5B4] text-white shadow-[0_0_12px_rgba(0,165,180,0.5)]'
                    : 'text-[#DCE6E9]/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Expeditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExpeditions.map((exp) => (
            <div
              key={exp.id}
              className="glass-panel glass-panel-hover rounded-lg overflow-hidden flex flex-col group border border-[#00A5B4]/20"
            >
              {/* Card Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter saturate-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00233F] via-transparent to-black/30" />

                {/* Difficulty & Category Tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-[#DCE6E9] uppercase bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                    {exp.category}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-[#D4AF6A] uppercase bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-[#D4AF6A]/30">
                    {exp.difficulty}
                  </span>
                </div>

                {/* Price Display */}
                <div className="absolute bottom-3 right-4 text-right">
                  <span className="text-[10px] font-mono text-[#DCE6E9]/70 uppercase block">From</span>
                  <span className="text-xl font-light text-white tracking-wide">
                    ${exp.priceAUD.toLocaleString()}{' '}
                    <span className="text-xs font-mono text-[#00A5B4]">AUD</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-[#00A5B4] tracking-wider uppercase mb-1">
                    {exp.location}
                  </div>
                  <h3 className="text-xl font-light tracking-wide text-white uppercase group-hover:text-[#00A5B4] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="mt-2 text-xs font-light text-[#DCE6E9]/75 line-clamp-2 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Clean unboxed metadata with · separators */}
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3 text-xs font-mono text-[#DCE6E9]/70">
                    <div className="flex items-center gap-1.5">
                      <Gauge className="w-3.5 h-3.5 text-[#00A5B4]" />
                      <span>{exp.depth}</span>
                    </div>
                    <span aria-hidden="true">·</span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#00A5B4]" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>

                {/* View Details Button */}
                <div className="mt-6 pt-4 border-t border-[#00A5B4]/15 flex items-center justify-between">
                  <span className="text-xs text-[#D4AF6A] font-light">
                    {exp.bestSeason}
                  </span>
                  <button
                    onClick={() => onSelectExpedition(exp)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-white uppercase group-hover:text-[#00A5B4] transition-colors focus-visible:outline-none"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#00A5B4] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
