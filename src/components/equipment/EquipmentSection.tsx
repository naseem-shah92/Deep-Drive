import React, { useState } from 'react';
import { RENTAL_GEAR } from '../../data/gearData';
import { GearItem, GearCategory, RentalCartItem } from '../../types/gear';
import { GearCard } from './GearCard';
import { RentalCalculatorDrawer } from './RentalCalculatorDrawer';
import { SectionHeader } from '../common/SectionHeader';

interface EquipmentSectionProps {
  onSendRentalRequest: (items: { item: GearItem; days: number }[], totalAUD: number) => void;
}

export const EquipmentSection: React.FC<EquipmentSectionProps> = ({ onSendRentalRequest }) => {
  const [activeCategory, setActiveCategory] = useState<GearCategory>('Regulators');
  const [cartState, setCartState] = useState<{ [id: string]: number }>({});
  const defaultDays = 3;

  const categories: GearCategory[] = [
    'Regulators',
    'Computers',
    'BCDs',
    'Suits',
    'Cameras',
    'Technical',
  ];

  const filteredGear = RENTAL_GEAR.filter((g) => g.category === activeCategory);

  const toggleCart = (item: GearItem) => {
    setCartState((prev) => {
      const next = { ...prev };
      if (next[item.id]) {
        delete next[item.id];
      } else {
        next[item.id] = defaultDays;
      }
      return next;
    });
  };

  const updateDays = (id: string, days: number) => {
    setCartState((prev) => ({ ...prev, [id]: days }));
  };

  const removeItem = (id: string) => {
    setCartState((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const cartItems: RentalCartItem[] = Object.entries(cartState)
    .map(([id, days]) => {
      const item = RENTAL_GEAR.find((g) => g.id === id);
      if (!item) return null;
      return { item, days, cost: item.dailyAUD * days };
    })
    .filter((entry): entry is RentalCartItem => Boolean(entry));

  const totalAUD = cartItems.reduce((sum, item) => sum + item.cost, 0);

  const handleCheckout = () => {
    onSendRentalRequest(
      cartItems.map((e) => ({ item: e.item, days: e.days })),
      totalAUD
    );
  };

  return (
    <section id="equipment" className="relative py-32 px-6 md:px-12 bg-[#070D18] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeader
          badge="Technical Equipment"
          title="Expedition Life Support Systems"
          description="Every regulator, computer, and rebreather is rigorously ultrasound-cleaned, O2-sanitized, and bench-tested before departure. Configure your personal equipment kit."
          action={
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#0B192C]/80 border border-white/10 overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-mono tracking-wider uppercase rounded-full transition-all whitespace-nowrap shrink-0 ${
                    activeCategory === cat
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

        {/* Gear Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredGear.map((item) => (
            <GearCard
              key={item.id}
              item={item}
              inCart={Boolean(cartState[item.id])}
              onToggle={toggleCart}
            />
          ))}
        </div>

        {/* Rental Kit Calculator Drawer */}
        <RentalCalculatorDrawer
          cart={cartItems}
          totalAUD={totalAUD}
          onUpdateDays={updateDays}
          onRemoveItem={removeItem}
          onCheckout={handleCheckout}
        />
      </div>
    </section>
  );
};
