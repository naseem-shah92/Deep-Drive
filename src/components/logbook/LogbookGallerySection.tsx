import React, { useState } from 'react';
import { LOGBOOK_ENTRIES } from '../../data/logbookData';
import { LogbookEntry, LogbookCategory } from '../../types/logbook';
import { LogbookCard } from './LogbookCard';
import { PhotoLightbox } from './PhotoLightbox';
import { SectionHeader } from '../common/SectionHeader';

export const LogbookGallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<LogbookCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: LogbookCategory[] = ['All', 'Reef', 'Wrecks', 'Marine Life', 'Night Dives', 'Divers'];

  const filteredEntries =
    activeFilter === 'All'
      ? LOGBOOK_ENTRIES
      : LOGBOOK_ENTRIES.filter((e) => e.category === activeFilter);

  const selectedEntry = lightboxIndex !== null ? filteredEntries[lightboxIndex] : null;

  const nextPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredEntries.length);
  };

  const prevPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredEntries.length) % filteredEntries.length);
  };

  return (
    <section id="logbook" className="relative py-32 px-6 md:px-12 bg-[#070D18]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Expedition Field Journal"
          title="Witnessing The Deep"
          description="Authentic dive logs and photography recorded across our Australian voyages. Select any entry to inspect raw nautical telemetry, species sightings, and field notes."
          action={
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#0B192C]/80 border border-white/10 overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 text-xs font-mono tracking-wider uppercase rounded-full transition-all whitespace-nowrap shrink-0 ${
                    activeFilter === cat
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEntries.map((entry, idx) => (
            <LogbookCard
              key={entry.diveNo}
              entry={entry}
              onClick={() => setLightboxIndex(idx)}
            />
          ))}
        </div>

        {/* Fullscreen Lightbox */}
        <PhotoLightbox
          entry={selectedEntry}
          onClose={() => setLightboxIndex(null)}
          onNext={nextPhoto}
          onPrev={prevPhoto}
        />
      </div>
    </section>
  );
};
