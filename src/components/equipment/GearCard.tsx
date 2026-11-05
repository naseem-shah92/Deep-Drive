import React from 'react';
import { GearItem } from '../../types/gear';
import { Plus, Check, Sparkles } from 'lucide-react';

interface GearCardProps {
  item: GearItem;
  inCart: boolean;
  onToggle: (item: GearItem) => void;
}

export const GearCard: React.FC<GearCardProps> = ({ item, inCart, onToggle }) => {
  return (
    <div
      className={`glass-panel-luxury rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between ${
        inCart
          ? 'border-white/40 bg-[#0B192C]/90 shadow-xl'
          : 'border-white/10 hover:border-white/20'
      }`}
    >
      <div>
        {/* Brand & Price Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono text-[#E5C890] uppercase tracking-wider block">
              {item.brand}
            </span>
            <h4 className="font-display text-2xl font-light text-white mt-1">
              {item.name}
            </h4>
          </div>

          <div className="text-right shrink-0">
            <span className="text-xl font-light text-white font-mono">
              ${item.dailyAUD}
            </span>
            <span className="text-[10px] font-mono text-slate-400 block -mt-1">
              AUD / day
            </span>
          </div>
        </div>

        <p className="mt-3 text-xs font-light text-slate-300/80 leading-relaxed">
          {item.description}
        </p>

        {/* Specs List */}
        <div className="mt-4 space-y-1.5 pt-3 border-t border-white/5">
          {item.specs.map((spec) => (
            <div key={spec} className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <span className="w-1 h-1 rounded-full bg-[#E5C890]" />
              <span>{spec}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
        {item.isPopular ? (
          <span className="text-[10px] font-mono text-[#E5C890] uppercase flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Expedition Standard
          </span>
        ) : <div />}
        <button
          onClick={() => onToggle(item)}
          className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all flex items-center gap-1.5 ${
            inCart
              ? 'bg-white text-slate-950 font-medium shadow-md'
              : 'border border-white/20 text-white hover:border-white hover:bg-white/5'
          }`}
        >
          {inCart ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Selected</span>
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" />
              <span>Add to Kit</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
