import React from 'react';
import { RentalCartItem } from '../../types/gear';
import { ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

interface RentalCalculatorDrawerProps {
  cart: RentalCartItem[];
  totalAUD: number;
  onUpdateDays: (id: string, days: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export const RentalCalculatorDrawer: React.FC<RentalCalculatorDrawerProps> = ({
  cart,
  totalAUD,
  onUpdateDays,
  onRemoveItem,
  onCheckout,
}) => {
  if (cart.length === 0) {
    return (
      <div className="p-8 rounded-2xl glass-panel-luxury border border-white/10 text-center flex flex-col items-center justify-center">
        <ShoppingBag className="w-8 h-8 text-white/30 mb-3" />
        <h4 className="font-display text-xl font-light text-white">Your Expedition Kit is Empty</h4>
        <p className="mt-1 text-xs text-slate-400 max-w-sm">
          Select life support regulators, titanium computers, and camera systems above to configure your custom rental kit.
        </p>
      </div>
    );
  }

  return (
    <div className="p-7 md:p-8 rounded-2xl glass-panel-luxury border border-white/10 shadow-2xl space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4 text-[#E5C890]" />
          <h4 className="font-display text-2xl font-light text-white tracking-wide">
            Kit Configuration ({cart.length} {cart.length === 1 ? 'item' : 'items'})
          </h4>
        </div>

        <span className="text-xs font-mono text-slate-400 uppercase">
          Ultrasonic Cleaned & Sanitized
        </span>
      </div>

      {/* Cart Items List */}
      <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
        {cart.map(({ item, days, cost }) => (
          <div
            key={item.id}
            className="p-4 rounded-xl bg-[#070D18]/70 border border-white/5 flex items-center justify-between gap-4"
          >
            <div className="flex-1">
              <span className="text-[10px] font-mono text-[#E5C890] uppercase block">
                {item.brand}
              </span>
              <h5 className="text-sm font-medium text-white truncate max-w-[240px]">
                {item.name}
              </h5>
              <span className="text-[11px] font-mono text-slate-400">
                ${item.dailyAUD} AUD / day
              </span>
            </div>

            {/* Days Controller */}
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-white/15 rounded-lg overflow-hidden bg-black/40">
                <button
                  onClick={() => onUpdateDays(item.id, Math.max(1, days - 1))}
                  className="px-2.5 py-1 text-xs text-white hover:bg-white/10"
                >
                  -
                </button>
                <span className="px-2.5 text-xs font-mono text-white">{days}d</span>
                <button
                  onClick={() => onUpdateDays(item.id, days + 1)}
                  className="px-2.5 py-1 text-xs text-white hover:bg-white/10"
                >
                  +
                </button>
              </div>

              <span className="text-sm font-mono text-white min-w-[70px] text-right">
                ${cost.toLocaleString()}
              </span>

              <button
                onClick={() => onRemoveItem(item.id)}
                className="p-1.5 text-slate-400 hover:text-rose-300 transition-colors"
                title="Remove Item"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total & Transfer to Booking Form */}
      <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-slate-400 uppercase block">Total Rental Kit Cost</span>
          <span className="text-2xl md:text-3xl font-light text-white font-mono">
            ${totalAUD.toLocaleString()}{' '}
            <span className="text-sm text-[#E5C890]">AUD</span>
          </span>
        </div>

        <button
          onClick={onCheckout}
          className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-mono tracking-[0.2em] uppercase font-medium text-slate-950 bg-white hover:bg-[#F4EBD9] transition-all flex items-center justify-center gap-2 shadow-lg"
        >
          <span>Include Kit in Booking</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
