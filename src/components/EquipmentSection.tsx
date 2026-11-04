import React, { useState } from 'react';
import { RENTAL_GEAR, GearItem } from '../data/diveData';
import { Check, Plus, Trash2, ShoppingBag, Cpu, Camera, Shield, Wrench, ArrowRight } from 'lucide-react';

interface EquipmentSectionProps {
  onSendRentalRequest: (items: { item: GearItem; days: number }[], totalAUD: number) => void;
}

export const EquipmentSection: React.FC<EquipmentSectionProps> = ({ onSendRentalRequest }) => {
  const [activeCategory, setActiveCategory] = useState<GearItem['category']>('Regulators');
  const [cart, setCart] = useState<{ [id: string]: number }>({}); // id -> days
  const [defaultDays, setDefaultDays] = useState<number>(3);

  const categories: GearItem['category'][] = [
    'Regulators',
    'Computers',
    'BCDs',
    'Suits',
    'Cameras',
    'Technical',
  ];

  const filteredGear = RENTAL_GEAR.filter((g) => g.category === activeCategory);

  const addToCart = (item: GearItem) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: prev[item.id] || defaultDays,
    }));
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const updateDays = (id: string, days: number) => {
    if (days <= 0) {
      removeFromCart(id);
    } else {
      setCart((prev) => ({ ...prev, [id]: days }));
    }
  };

  // Calculate cart total
  const cartEntries = Object.entries(cart).map(([id, days]) => {
    const item = RENTAL_GEAR.find((g) => g.id === id)!;
    const cost = item ? item.dailyAUD * days : 0;
    return { item, days, cost };
  }).filter((entry) => Boolean(entry.item));

  const totalAUD = cartEntries.reduce((sum, entry) => sum + entry.cost, 0);

  const handleCheckout = () => {
    onSendRentalRequest(
      cartEntries.map((e) => ({ item: e.item, days: e.days })),
      totalAUD
    );
  };

  return (
    <section id="equipment" className="relative py-28 px-6 md:px-12 bg-[#00233F]/30 border-t border-[#00A5B4]/15">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-[#00A5B4] uppercase">
              <span className="w-6 h-[1px] bg-[#00A5B4]" />
              <span>PRECISION GEAR</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extralight tracking-[0.15em] text-white uppercase">
              Expedition Life Support
            </h2>
            <p className="mt-3 text-sm font-light text-[#DCE6E9]/80 max-w-2xl leading-relaxed">
              Every regulator, computer, and rebreather is rigorously ultrasound-cleaned, O2-sanitized, and bench-tested before departure.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded bg-[#050E1D]/80 border border-[#00A5B4]/20 self-start md:self-end overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-widest uppercase rounded transition-all duration-300 whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-[#00A5B4] text-white shadow-[0_0_12px_rgba(0,165,180,0.5)]'
                    : 'text-[#DCE6E9]/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Layout: Gear Catalog (8 Cols) + Sticky Rental Drawer (4 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Gear Cards Grid (8 Cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredGear.map((gear) => {
              const inCart = !!cart[gear.id];
              return (
                <div
                  key={gear.id}
                  className="glass-panel glass-panel-hover rounded-lg p-6 flex flex-col justify-between border border-[#00A5B4]/20"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono tracking-widest text-[#00A5B4] uppercase">
                        {gear.brand}
                      </span>
                      {gear.badge && (
                        <span className="text-[10px] font-mono tracking-widest text-[#D4AF6A] uppercase px-2 py-0.5 rounded bg-[#D4AF6A]/10 border border-[#D4AF6A]/30">
                          {gear.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-light text-white uppercase tracking-wide">
                      {gear.name}
                    </h3>
                    <p className="mt-2 text-xs font-light text-[#DCE6E9]/75 leading-relaxed">
                      {gear.description}
                    </p>

                    {/* Specs list */}
                    <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5 text-xs">
                      {gear.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[#DCE6E9]/70">
                          <span className="text-[#00A5B4] text-[10px]">✦</span>
                          <span className="text-[11px] font-light">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price and Add button */}
                  <div className="mt-6 pt-4 border-t border-[#00A5B4]/20 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-light text-white tracking-wide">
                        ${gear.dailyAUD}{' '}
                        <span className="text-[10px] font-mono text-[#DCE6E9]/60">/ day AUD</span>
                      </div>
                      <div className="text-[10px] font-mono text-[#DCE6E9]/50">
                        ${gear.weeklyAUD} weekly rate
                      </div>
                    </div>

                    <button
                      onClick={() => addToCart(gear)}
                      className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider rounded transition-all duration-300 flex items-center gap-1.5 ${
                        inCart
                          ? 'bg-[#00233F] text-[#00A5B4] border border-[#00A5B4]'
                          : 'bg-[#00A5B4]/20 text-white border border-[#00A5B4] hover:bg-[#00A5B4] hover:shadow-[0_0_15px_rgba(0,165,180,0.4)]'
                      }`}
                    >
                      {inCart ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#00A5B4]" />
                          <span>Added</span>
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
            })}
          </div>

          {/* Sticky Rental Summary Panel (4 Cols) */}
          <div className="lg:col-span-4 sticky top-28 glass-panel rounded-lg p-6 border border-[#00A5B4]/30 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#00A5B4]" />
                <h3 className="text-sm font-mono tracking-widest text-white uppercase">
                  Rental Summary
                </h3>
              </div>
              <span className="text-[10px] font-mono text-[#D4AF6A]">
                {cartEntries.length} Items Selected
              </span>
            </div>

            {/* Global Duration Selector */}
            <div className="p-3 rounded bg-[#050E1D]/60 border border-white/10 mb-4 flex items-center justify-between text-xs font-mono">
              <span className="text-[#DCE6E9]/70">Default Expedition Days:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setDefaultDays((d) => Math.max(1, d - 1))}
                  className="w-6 h-6 rounded bg-[#00233F] text-white flex items-center justify-center hover:bg-[#00A5B4]"
                >
                  -
                </button>
                <span className="text-white font-medium">{defaultDays}d</span>
                <button
                  onClick={() => setDefaultDays((d) => d + 1)}
                  className="w-6 h-6 rounded bg-[#00233F] text-white flex items-center justify-center hover:bg-[#00A5B4]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Itemized List */}
            {cartEntries.length > 0 ? (
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {cartEntries.map(({ item, days, cost }) => (
                  <div
                    key={item.id}
                    className="p-3 rounded bg-[#050E1D]/50 border border-white/5 flex items-center justify-between gap-2 text-xs"
                  >
                    <div className="truncate">
                      <div className="text-white font-light truncate">{item.name}</div>
                      <div className="text-[10px] font-mono text-[#DCE6E9]/60">
                        ${item.dailyAUD} × {days} days
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-white text-xs">
                        ${cost} AUD
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 text-[#DCE6E9]/40 hover:text-rose-400"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Total and CTA */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-mono text-[#DCE6E9]/70 uppercase">
                      Estimated Rental Total
                    </span>
                    <span className="text-xl font-light text-[#D4AF6A] tracking-wider">
                      ${totalAUD.toLocaleString()} AUD
                    </span>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full py-3 text-xs font-mono tracking-widest text-white uppercase bg-[#00A5B4] rounded hover:bg-[#00A5B4]/85 shadow-[0_0_20px_rgba(0,165,180,0.4)] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Send Rental Request</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center text-xs text-[#DCE6E9]/50 font-mono">
                No equipment added yet. Click &quot;Add to Kit&quot; on any precision gear items above.
              </div>
            )}
          </div>
        </div>

        {/* Deep Tech Highlight Band */}
        <div className="mt-16 p-8 rounded-lg glass-panel border border-[#00A5B4]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00A5B4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF6A] uppercase tracking-widest mb-1">
                <Cpu className="w-4 h-4 text-[#D4AF6A]" />
                <span>Closed-Circuit Rebreather (CCR) Support</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-white uppercase tracking-wide">
                Silent Bubble-Free Oceanic Exploration
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-light text-[#DCE6E9]/80 max-w-3xl leading-relaxed">
                Experience unprecedented wildlife interactions. With no exhaust bubbles or mechanical regulator clatter, pelagic hammerheads, manta rays, and whale sharks approach within inches. Full Sofnolime and booster pump support onboard all vessels.
              </p>
            </div>

            <a
              href="#contact"
              className="px-6 py-2.5 text-xs font-mono tracking-widest text-white uppercase border border-[#D4AF6A] rounded hover:bg-[#D4AF6A]/20 transition-colors whitespace-nowrap self-start md:self-center"
            >
              Inquire Technical CCR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
