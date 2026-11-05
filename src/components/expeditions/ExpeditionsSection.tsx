import React, { useState } from 'react';
import { EXPEDITIONS } from '../../data/expeditionsData';
import { Expedition } from '../../types/expedition';
import { ExpeditionCard } from './ExpeditionCard';
import { SectionHeader } from '../common/SectionHeader';

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
    <section id="expeditions" className="relative py-32 px-6 md:px-12 bg-[#070D18]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Signature Journeys"
          title="The Great Oceanic Frontier"
          description="Private, small-cadre expeditions into Australia's most exclusive underwater sanctuaries. From isolated Coral Sea volcanic spires to giant kelp cathedrals."
          action={
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#0B192C]/80 border border-white/10 overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-mono tracking-wider uppercase rounded-full transition-all whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-white text-slate-950 font-medium shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          }
        />

        {/* Expeditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExpeditions.map((exp) => (
            <ExpeditionCard
              key={exp.id}
              expedition={exp}
              onSelect={onSelectExpedition}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
