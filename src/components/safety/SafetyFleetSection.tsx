import React from 'react';
import { FLEET } from '../../data/fleetData';
import { VesselCard } from './VesselCard';
import { SafetyStandardsGrid } from './SafetyStandardsGrid';
import { SectionHeader } from '../common/SectionHeader';

export const SafetyFleetSection: React.FC = () => {
  return (
    <section id="fleet" className="relative py-32 px-6 md:px-12 bg-[#070D18]">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Safety Header & Protocols */}
        <div>
          <SectionHeader
            badge="Maritime Safety Standards"
            title="Safety is Our Depth Gauge"
            description="In the remote Coral Sea and open Pacific swell, luxury is inseparable from rigorous, military-grade marine protocols. 100% incident-free across two decades of deep exploration."
          />
          <SafetyStandardsGrid />
        </div>

        {/* Fleet Section */}
        <div>
          <div className="mb-12">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#E5C890] uppercase mb-2">
              <span className="w-5 h-[1px] bg-[#E5C890]/60" />
              <span>The Expedition Fleet</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
              Purpose-Built Blue Water Vessels
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FLEET.map((vessel) => (
              <VesselCard key={vessel.id} vessel={vessel} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
