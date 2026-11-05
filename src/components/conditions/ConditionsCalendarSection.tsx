import React, { useState } from 'react';
import { DIVE_SITES } from '../../data/conditionsData';
import { DiveSite } from '../../types/conditions';
import { useMarineConditions } from '../../hooks/useMarineConditions';
import { ConditionsTelemetryCard } from './ConditionsTelemetryCard';
import { TripCalendar } from './TripCalendar';
import { SectionHeader } from '../common/SectionHeader';

interface ConditionsCalendarSectionProps {
  onReserveTrip: (tripTitle: string, dateStr: string) => void;
}

export const ConditionsCalendarSection: React.FC<ConditionsCalendarSectionProps> = ({
  onReserveTrip,
}) => {
  const [selectedSite, setSelectedSite] = useState<DiveSite>(DIVE_SITES[0]);
  const { conditions, loading } = useMarineConditions(selectedSite);

  return (
    <section id="conditions" className="relative py-32 px-6 md:px-12 bg-[#070D18] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Ocean Telemetry"
          title="Conditions & Voyage Calendar"
          description="Live satellite telemetry tracking swell heights, water temperatures, and currents across Australia's premier maritime sectors. Select a region to view live conditions or reserve departure dates."
          action={
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#0B192C]/80 border border-white/10 overflow-x-auto max-w-full">
              {DIVE_SITES.map((site) => (
                <button
                  key={site.id}
                  onClick={() => setSelectedSite(site)}
                  className={`px-4 py-1.5 text-xs font-mono tracking-wider uppercase rounded-full transition-all whitespace-nowrap shrink-0 ${
                    selectedSite.id === site.id
                      ? 'bg-white text-slate-950 font-medium shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {site.name.split(' (')[0]}
                </button>
              ))}
            </div>
          }
        />

        {/* Dual Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ConditionsTelemetryCard
            site={selectedSite}
            conditions={conditions}
            loading={loading}
          />

          <TripCalendar onReserveTrip={onReserveTrip} />
        </div>
      </div>
    </section>
  );
};
