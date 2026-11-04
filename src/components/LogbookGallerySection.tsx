import React, { useState } from 'react';
import { LOGBOOK_ENTRIES, LogbookEntry } from '../data/diveData';
import { X, ChevronLeft, ChevronRight, Gauge, Clock, Thermometer, Eye, Sparkles, BookOpen } from 'lucide-react';

export const LogbookGallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Reef', 'Wrecks', 'Marine Life', 'Night Dives', 'Divers'];

  const filteredEntries =
    activeFilter === 'All'
      ? LOGBOOK_ENTRIES
      : LOGBOOK_ENTRIES.filter((e) => e.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredEntries.length);
  };

  const prevPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + filteredEntries.length) % filteredEntries.length
    );
  };

  return (
    <section id="logbook" className="relative py-28 px-6 md:px-12 bg-[#050E1D]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-[#00A5B4] uppercase">
              <span className="w-6 h-[1px] bg-[#00A5B4]" />
              <span>THE EXPEDITION LOGBOOK</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extralight tracking-[0.15em] text-white uppercase">
              Witnessing The Deep
            </h2>
            <p className="mt-3 text-sm font-light text-[#DCE6E9]/80 max-w-2xl leading-relaxed">
              Authentic dive logs and high-definition underwater photography recorded across our Australian voyages. Hover to cast torchlight across the scene.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-1.5 p-1 rounded bg-[#00233F]/60 border border-[#00A5B4]/20 self-start md:self-end overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-widest uppercase rounded transition-all duration-300 whitespace-nowrap shrink-0 ${
                  activeFilter === cat
                    ? 'bg-[#00A5B4] text-white shadow-[0_0_12px_rgba(0,165,180,0.5)]'
                    : 'text-[#DCE6E9]/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* The Logbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEntries.map((entry, idx) => (
            <div
              key={entry.diveNo}
              onClick={() => openLightbox(idx)}
              className="glass-panel glass-panel-hover rounded-lg overflow-hidden cursor-pointer group border border-[#00A5B4]/20 flex flex-col justify-between"
            >
              {/* Photo with torch hover brightening */}
              <div className="relative h-60 overflow-hidden bg-black">
                <img
                  src={entry.image}
                  alt={entry.site}
                  className="w-full h-full object-cover filter brightness-75 group-hover:brightness-105 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00233F] via-transparent to-black/40" />

                {/* Torch highlight circle simulation on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,165,180,0.18)_0%,transparent_70%)]" />

                {/* Log Number & Category */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-[#00A5B4] bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-[#00A5B4]/30 uppercase">
                    LOG #{entry.diveNo}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-[#D4AF6A] bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-[#D4AF6A]/30 uppercase">
                    {entry.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-white/90 truncate">
                  {entry.site}
                </div>
              </div>

              {/* Logbook Page Body */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-[#00233F]/30">
                {/* Telemetry Row */}
                <div className="grid grid-cols-4 gap-2 py-2 border-y border-white/10 text-center font-mono text-[10px] mb-4">
                  <div>
                    <span className="text-[#DCE6E9]/50 block">DEPTH</span>
                    <span className="text-white font-medium">{entry.depthMeters}m</span>
                  </div>
                  <div>
                    <span className="text-[#DCE6E9]/50 block">TIME</span>
                    <span className="text-white font-medium">{entry.bottomTimeMin}m</span>
                  </div>
                  <div>
                    <span className="text-[#DCE6E9]/50 block">TEMP</span>
                    <span className="text-white font-medium">{entry.tempCelsius}°C</span>
                  </div>
                  <div>
                    <span className="text-[#DCE6E9]/50 block">VIS</span>
                    <span className="text-white font-medium">{entry.visibilityMeters}m</span>
                  </div>
                </div>

                {/* Excerpt Notes */}
                <p className="text-xs font-light text-[#DCE6E9]/80 italic line-clamp-3 leading-relaxed mb-4">
                  &ldquo;{entry.notes}&rdquo;
                </p>

                {/* Diver & Guide Footer */}
                <div className="pt-3 border-t border-[#00A5B4]/15 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#00A5B4]/20 border border-[#00A5B4]/50 flex items-center justify-center font-mono text-[10px] text-white">
                      {entry.avatar}
                    </div>
                    <div>
                      <div className="text-white font-light text-[11px]">{entry.diverName}</div>
                      <div className="text-[9px] font-mono text-[#DCE6E9]/50">{entry.diverRole}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#D4AF6A]">
                    {entry.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guest Signatures Strip */}
        <div className="mt-16 p-8 rounded-lg glass-panel border border-[#00A5B4]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <BookOpen className="w-8 h-8 text-[#00A5B4] shrink-0" />
            <div>
              <h4 className="text-sm font-mono tracking-widest text-white uppercase">
                Official Expedition Manifest
              </h4>
              <p className="text-xs font-light text-[#DCE6E9]/80 mt-0.5">
                Each expedition is certified and archived with custom digital log stamps and 4K macro video logs for every guest.
              </p>
            </div>
          </div>
          <div className="text-xs font-mono text-[#D4AF6A] tracking-wider uppercase shrink-0">
            AUDITED BY DAN ASIA-PACIFIC
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8 animate-in fade-in duration-300">
          <button
            onClick={closeLightbox}
            aria-label="Close lightbox"
            className="absolute top-6 right-6 p-2 rounded-full border border-white/20 text-white hover:text-[#00A5B4] hover:border-[#00A5B4] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Nav buttons */}
          <button
            onClick={prevPhoto}
            aria-label="Previous photograph"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 text-white hover:border-[#00A5B4] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextPhoto}
            aria-label="Next photograph"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 text-white hover:border-[#00A5B4] transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div className="max-w-5xl w-full flex flex-col items-center">
            <div className="relative max-h-[70vh] rounded overflow-hidden border border-[#00A5B4]/30">
              <img
                src={filteredEntries[lightboxIndex].image}
                alt={filteredEntries[lightboxIndex].site}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            {/* Photo caption & Logbook stats */}
            <div className="mt-4 text-center max-w-2xl">
              <div className="text-[11px] font-mono tracking-widest text-[#00A5B4] uppercase">
                LOG #{filteredEntries[lightboxIndex].diveNo} · {filteredEntries[lightboxIndex].site} · {filteredEntries[lightboxIndex].date}
              </div>
              <p className="mt-2 text-xs font-light text-[#DCE6E9]/90 italic">
                &ldquo;{filteredEntries[lightboxIndex].notes}&rdquo;
              </p>
              <div className="mt-3 flex items-center justify-center gap-6 text-[11px] font-mono text-[#DCE6E9]/60">
                <span>Depth: {filteredEntries[lightboxIndex].depthMeters}m</span>
                <span>Bottom Time: {filteredEntries[lightboxIndex].bottomTimeMin} min</span>
                <span>Visibility: {filteredEntries[lightboxIndex].visibilityMeters}m</span>
                <span>Guide: {filteredEntries[lightboxIndex].guide}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
