import React, { useState } from 'react';
import { SCHEDULED_TRIPS } from '../../data/conditionsData';
import { Calendar, ChevronLeft, ChevronRight, ArrowRight, Users } from 'lucide-react';

interface TripCalendarProps {
  onReserveTrip: (tripTitle: string, dateStr: string) => void;
}

export const TripCalendar: React.FC<TripCalendarProps> = ({ onReserveTrip }) => {
  const [selectedDay, setSelectedDay] = useState<number>(14);
  const [monthIndex, setMonthIndex] = useState(0);

  const months = ['November 2026', 'December 2026', 'January 2027'];
  const currentMonth = months[monthIndex];
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);
  const activeTrips = SCHEDULED_TRIPS[selectedDay] || [];

  return (
    <div className="glass-panel-luxury rounded-2xl p-7 md:p-8 flex flex-col justify-between">
      <div>
        {/* Month Navigation */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#E5C890]" />
            <h4 className="font-display text-xl font-light text-white tracking-wide">
              {currentMonth}
            </h4>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setMonthIndex((prev) => Math.max(0, prev - 1))}
              disabled={monthIndex === 0}
              className="p-1.5 rounded-full border border-white/10 hover:border-white text-white disabled:opacity-20 disabled:pointer-events-none transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMonthIndex((prev) => Math.min(months.length - 1, prev + 1))}
              disabled={monthIndex === months.length - 1}
              className="p-1.5 rounded-full border border-white/10 hover:border-white text-white disabled:opacity-20 disabled:pointer-events-none transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-2 mt-5 text-center">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
            <span key={i} className="text-[10px] font-mono text-slate-400 py-1">
              {d}
            </span>
          ))}

          {daysInMonth.map((day) => {
            const hasTrip = Boolean(SCHEDULED_TRIPS[day]);
            const isSelected = selectedDay === day;

            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`relative py-2.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                  isSelected
                    ? 'bg-white text-slate-950 font-medium shadow-md'
                    : hasTrip
                    ? 'bg-[#0B192C] text-white border border-white/15 hover:border-white/40'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{day}</span>
                {hasTrip && !isSelected && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E5C890]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Day Expeditions Preview */}
      <div className="mt-6 pt-5 border-t border-white/10">
        {activeTrips.length > 0 ? (
          activeTrips.map((trip) => (
            <div
              key={trip.title}
              className="p-5 rounded-xl bg-[#070D18]/70 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <span className="text-[10px] font-mono text-[#E5C890] uppercase tracking-wider block">
                  {trip.site} &bull; {trip.vessel}
                </span>
                <h5 className="font-display text-lg text-white font-normal mt-0.5">
                  {trip.title}
                </h5>
                <div className="flex items-center gap-3 text-xs font-mono text-slate-300 mt-1.5">
                  <span className="text-[#E5C890] flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {trip.spots} spots remaining
                  </span>
                  <span className="text-white/20">&bull;</span>
                  <span>${trip.price.toLocaleString()} AUD</span>
                </div>
              </div>

              <button
                onClick={() => onReserveTrip(trip.title, `${selectedDay} ${currentMonth}`)}
                className="px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase font-medium text-slate-950 bg-white hover:bg-[#F4EBD9] transition-all shrink-0 flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>Book Date</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-4 text-xs font-mono text-slate-400">
            No scheduled departures on Day {selectedDay}. Select highlighted dates or contact concierge for custom dates.
          </div>
        )}
      </div>
    </div>
  );
};
