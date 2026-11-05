import React from 'react';
import { LogbookEntry } from '../../types/logbook';
import { Gauge, Clock, Eye } from 'lucide-react';

interface LogbookCardProps {
  entry: LogbookEntry;
  onClick: () => void;
}

export const LogbookCard: React.FC<LogbookCardProps> = ({ entry, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="glass-panel-luxury rounded-2xl overflow-hidden cursor-pointer group flex flex-col justify-between transition-all duration-500 hover:-translate-y-1"
    >
      <div>
        {/* Photo Container */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={entry.image}
            alt={entry.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-black/30" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-widest text-slate-950 bg-white font-medium px-3 py-0.5 rounded-full shadow-sm">
              LOG #{entry.diveNo}
            </span>
            <span className="text-[10px] font-mono tracking-widest text-slate-200 uppercase bg-black/60 backdrop-blur-md px-3 py-0.5 rounded-full border border-white/10">
              {entry.category}
            </span>
          </div>

          <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-slate-300 flex items-center justify-between">
            <span>{entry.date}</span>
            <span className="text-[#E5C890]">{entry.gasMix}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-7">
          <span className="text-[10px] font-mono text-[#E5C890] uppercase tracking-wider block mb-1.5">
            {entry.location}
          </span>
          <h4 className="font-display text-2xl font-light text-white group-hover:text-[#E5C890] transition-colors">
            {entry.title}
          </h4>
          <p className="mt-2.5 text-xs font-light text-slate-300/80 line-clamp-2 leading-relaxed">
            {entry.notes}
          </p>
        </div>
      </div>

      {/* Footer Metas */}
      <div className="px-7 pb-6 pt-2 flex items-center justify-between text-xs font-mono text-slate-400 border-t border-white/5">
        <div className="flex items-center gap-1.5">
          <Gauge className="w-3.5 h-3.5 text-white/50" />
          <span>{entry.depth}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#E5C890]" />
          <span>{entry.bottomTime}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Eye className="w-3.5 h-3.5 text-white/50" />
          <span>Vis {entry.visibility}</span>
        </div>
      </div>
    </div>
  );
};
