import React, { useState, useEffect } from 'react';
import { DIVE_SITES, DiveSiteLocation } from '../data/diveData';
import { Waves, Wind, Thermometer, Eye, Sun, Calendar as CalendarIcon, ChevronLeft, ChevronRight, CheckCircle2, AlertTriangle, RefreshCw } from 'lucide-react';

interface ConditionsData {
  waterTemp: number;
  visibility: number;
  swellHeight: number;
  windSpeed: number;
  windDirection: string;
  uvIndex: number;
  rating: 'Excellent' | 'Good' | 'Fair' | 'Challenging';
  ratingScore: number; // 1-10
  isLive: boolean;
  updatedAt: string;
}

interface CalendarTrip {
  date: number; // day of month
  title: string;
  site: string;
  spots: number;
  price: number;
  vessel: string;
}

export const ConditionsCalendarSection: React.FC<{
  onReserveTrip: (tripTitle: string, dateStr: string) => void;
}> = ({ onReserveTrip }) => {
  const [selectedSite, setSelectedSite] = useState<DiveSiteLocation>(DIVE_SITES[0]);
  const [conditions, setConditions] = useState<ConditionsData>({
    waterTemp: DIVE_SITES[0].defaultTemp,
    visibility: DIVE_SITES[0].defaultVis,
    swellHeight: DIVE_SITES[0].defaultSwell,
    windSpeed: DIVE_SITES[0].defaultWind,
    windDirection: 'ESE',
    uvIndex: 8,
    rating: 'Excellent',
    ratingScore: 9.4,
    isLive: false,
    updatedAt: 'Live Telemetry',
  });
  const [isLoadingConditions, setIsLoadingConditions] = useState(false);

  // Calendar State: Month navigation
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0); // 0 = Nov 2026, 1 = Dec 2026, 2 = Jan 2027
  const months = ['November 2026', 'December 2026', 'January 2027'];
  const [selectedDay, setSelectedDay] = useState<number>(14);

  // Sample scheduled luxury trips on specific dates
  const scheduledTrips: Record<number, CalendarTrip[]> = {
    7: [
      { date: 7, title: 'Ribbon Reefs #3 & Cod Hole', site: 'Outer Great Barrier Reef', spots: 2, price: 2850, vessel: 'The Odyssey Explorer' },
    ],
    12: [
      { date: 12, title: 'Ningaloo Megafauna Drift', site: 'Exmouth Continental Trench', spots: 1, price: 3850, vessel: 'MV Calypso Deep' },
    ],
    14: [
      { date: 14, title: 'SS Yongala Historic Coral Phantom', site: 'Cape Bowling Green Wreck', spots: 3, price: 2950, vessel: 'MV Calypso Deep' },
    ],
    21: [
      { date: 21, title: 'Fish Rock 125m Ocean Chimney', site: 'South West Rocks Sanctuary', spots: 4, price: 2400, vessel: 'Triton Apex RIB' },
    ],
    28: [
      { date: 28, title: 'Osprey Coral Sea Deep Dropoff', site: 'Isolated Coral Sea Atolls', spots: 2, price: 4200, vessel: 'The Odyssey Explorer' },
    ],
  };

  // Fetch real-time marine weather from Open-Meteo
  useEffect(() => {
    let isCancelled = false;

    const fetchConditions = async () => {
      setIsLoadingConditions(true);
      try {
        // Open-Meteo Marine API
        const marineUrl = `https://marine-api.open-meteo.com/v1/marine?latitude=${selectedSite.lat}&longitude=${selectedSite.lng}&current=wave_height,wave_period`;
        // Open-Meteo Weather API for wind & temperature
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${selectedSite.lat}&longitude=${selectedSite.lng}&current=temperature_2m,wind_speed_10m,wind_direction_10m,uv_index`;

        const [marineRes, weatherRes] = await Promise.allSettled([
          fetch(marineUrl),
          fetch(weatherUrl),
        ]);

        let swell = selectedSite.defaultSwell;
        let wind = selectedSite.defaultWind;
        let uv = 8;
        let temp = selectedSite.defaultTemp;

        if (marineRes.status === 'fulfilled' && marineRes.value.ok) {
          const mData = await marineRes.value.json();
          if (mData?.current?.wave_height !== undefined) {
            swell = Number(mData.current.wave_height.toFixed(1));
          }
        }

        if (weatherRes.status === 'fulfilled' && weatherRes.value.ok) {
          const wData = await weatherRes.value.json();
          if (wData?.current?.wind_speed_10m !== undefined) {
            wind = Math.round(wData.current.wind_speed_10m);
          }
          if (wData?.current?.uv_index !== undefined) {
            uv = Math.round(wData.current.uv_index);
          }
          if (wData?.current?.temperature_2m !== undefined) {
            // Water temp in tropical Australia correlates within ~2-3C of air temp
            temp = Math.min(30, Math.max(15, Math.round(wData.current.temperature_2m - 1.5)));
          }
        }

        // Calculate rating based on swell and wind
        let rating: ConditionsData['rating'] = 'Excellent';
        let score = 9.4;
        if (swell > 2.0 || wind > 25) {
          rating = 'Challenging';
          score = 6.2;
        } else if (swell > 1.5 || wind > 18) {
          rating = 'Fair';
          score = 7.5;
        } else if (swell > 1.0 || wind > 14) {
          rating = 'Good';
          score = 8.6;
        }

        if (!isCancelled) {
          setConditions({
            waterTemp: temp,
            visibility: selectedSite.defaultVis,
            swellHeight: swell,
            windSpeed: wind,
            windDirection: 'SE',
            uvIndex: uv,
            rating,
            ratingScore: score,
            isLive: true,
            updatedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          });
        }
      } catch (err) {
        // Fallback to calibrated site telemetry
        if (!isCancelled) {
          setConditions({
            waterTemp: selectedSite.defaultTemp,
            visibility: selectedSite.defaultVis,
            swellHeight: selectedSite.defaultSwell,
            windSpeed: selectedSite.defaultWind,
            windDirection: 'ESE',
            uvIndex: 8,
            rating: 'Excellent',
            ratingScore: 9.2,
            isLive: false,
            updatedAt: 'Estimated Baseline',
          });
        }
      } finally {
        if (!isCancelled) setIsLoadingConditions(false);
      }
    };

    fetchConditions();

    return () => {
      isCancelled = true;
    };
  }, [selectedSite]);

  const ratingColors = {
    Excellent: 'text-[#00A5B4] border-[#00A5B4]/50 bg-[#00A5B4]/10',
    Good: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
    Fair: 'text-[#D4AF6A] border-[#D4AF6A]/40 bg-[#D4AF6A]/10',
    Challenging: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
  };

  const selectedTripsForDay = scheduledTrips[selectedDay] || [];

  return (
    <section id="conditions" className="relative py-28 px-6 md:px-12 bg-[#00233F]/40 border-y border-[#00A5B4]/15">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-[#00A5B4] uppercase">
            <span className="w-6 h-[1px] bg-[#00A5B4]" />
            <span>METEOROLOGICAL & DIVE DISPATCH</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extralight tracking-[0.15em] text-white uppercase">
            Real-Time Conditions & Expedition Calendar
          </h2>
          <p className="mt-3 text-sm font-light text-[#DCE6E9]/80 max-w-2xl">
            Live oceanic buoys telemetry, water clarity observations, and scheduled private departure dates.
          </p>
        </div>

        {/* 2-Column Split: Conditions Widget + Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Live Conditions Widget (5 Cols) */}
          <div className="lg:col-span-5 glass-panel rounded-lg p-6 sm:p-8 flex flex-col justify-between border border-[#00A5B4]/30">
            <div>
              {/* Header with Site Dropdown and Live Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00A5B4] animate-ping" />
                  <span className="text-[11px] font-mono tracking-widest text-[#00A5B4] uppercase">
                    {conditions.isLive ? 'LIVE BUOY FEED' : 'CALIBRATED FEED'}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#DCE6E9]/60">
                  {conditions.updatedAt}
                </span>
              </div>

              {/* Site Selector Dropdown */}
              <div className="mt-5">
                <label className="text-[10px] font-mono tracking-widest text-[#DCE6E9]/60 uppercase block mb-1.5">
                  Select Oceanic Station
                </label>
                <select
                  value={selectedSite.id}
                  onChange={(e) => {
                    const site = DIVE_SITES.find((s) => s.id === e.target.value);
                    if (site) setSelectedSite(site);
                  }}
                  className="w-full bg-[#050E1D] border border-[#00A5B4]/40 rounded p-2.5 text-xs text-white font-mono focus:border-[#00A5B4] focus:outline-none"
                >
                  {DIVE_SITES.map((site) => (
                    <option key={site.id} value={site.id}>
                      {site.name} — {site.region}
                    </option>
                  ))}
                </select>
              </div>

              {/* Overall Dive Rating Banner */}
              <div className="mt-6 p-4 rounded bg-[#050E1D]/60 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#DCE6E9]/60 uppercase block">
                    Composite Dive Rating
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-2xl font-light text-white tracking-wide">
                      {conditions.rating}
                    </span>
                    <span className="text-xs font-mono text-[#00A5B4]">
                      {conditions.ratingScore}/10.0
                    </span>
                  </div>
                </div>
                <div
                  className={`px-3 py-1 rounded text-xs font-mono uppercase border ${ratingColors[conditions.rating]}`}
                >
                  Optimal
                </div>
              </div>

              {/* 4 Metric Tiles Grid */}
              <div className="grid grid-cols-2 gap-3.5 mt-4">
                {/* Water Temp */}
                <div className="p-3.5 rounded bg-[#050E1D]/50 border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-[#00A5B4] font-mono mb-1">
                    <Thermometer className="w-3.5 h-3.5" />
                    <span>WATER TEMP</span>
                  </div>
                  <div className="text-xl font-light text-white">
                    {conditions.waterTemp}°C
                  </div>
                  <span className="text-[10px] font-mono text-[#DCE6E9]/50 block mt-0.5">
                    3mm / 5mm suit
                  </span>
                </div>

                {/* Visibility */}
                <div className="p-3.5 rounded bg-[#050E1D]/50 border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-[#00A5B4] font-mono mb-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>VISIBILITY</span>
                  </div>
                  <div className="text-xl font-light text-white">
                    {conditions.visibility}m+
                  </div>
                  <span className="text-[10px] font-mono text-[#DCE6E9]/50 block mt-0.5">
                    Crystalline clarity
                  </span>
                </div>

                {/* Swell Height */}
                <div className="p-3.5 rounded bg-[#050E1D]/50 border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-[#00A5B4] font-mono mb-1">
                    <Waves className="w-3.5 h-3.5" />
                    <span>SWELL</span>
                  </div>
                  <div className="text-xl font-light text-white">
                    {conditions.swellHeight}m
                  </div>
                  <span className="text-[10px] font-mono text-[#DCE6E9]/50 block mt-0.5">
                    Gentle open surge
                  </span>
                </div>

                {/* Wind */}
                <div className="p-3.5 rounded bg-[#050E1D]/50 border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-[#00A5B4] font-mono mb-1">
                    <Wind className="w-3.5 h-3.5" />
                    <span>SURFACE WIND</span>
                  </div>
                  <div className="text-xl font-light text-white">
                    {conditions.windSpeed} kts
                  </div>
                  <span className="text-[10px] font-mono text-[#DCE6E9]/50 block mt-0.5">
                    {conditions.windDirection} breeze
                  </span>
                </div>
              </div>

              {/* Station Wildlife / Seasonal Callout */}
              <div className="mt-5 p-3 rounded bg-[#00A5B4]/10 border border-[#00A5B4]/20 text-xs font-light text-[#DCE6E9]">
                <span className="text-[#D4AF6A] font-medium mr-1.5">Season Note:</span>
                {selectedSite.seasonHighlights}
              </div>
            </div>

            {/* Coordinates Footer */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#DCE6E9]/50">
              <span>GPS: {selectedSite.lat.toFixed(4)}° / {selectedSite.lng.toFixed(4)}°</span>
              <span>Recreational Limit: {selectedSite.depthRecreation}</span>
            </div>
          </div>

          {/* RIGHT: Interactive Monthly Dive Calendar (7 Cols) */}
          <div className="lg:col-span-7 glass-panel rounded-lg p-6 sm:p-8 border border-[#00A5B4]/30">
            {/* Calendar Month Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-[#00A5B4]" />
                <h3 className="text-lg font-light tracking-wide text-white uppercase">
                  {months[currentMonthIndex]}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentMonthIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentMonthIndex === 0}
                  aria-label="Previous month"
                  className="p-1.5 rounded border border-white/20 text-[#DCE6E9] hover:border-[#00A5B4] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentMonthIndex((prev) => Math.min(months.length - 1, prev + 1))}
                  disabled={currentMonthIndex === months.length - 1}
                  aria-label="Next month"
                  className="p-1.5 rounded border border-white/20 text-[#DCE6E9] hover:border-[#00A5B4] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-mono tracking-widest text-[#DCE6E9]/60 uppercase my-3">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>

            {/* 30-Day Grid */}
            <div className="grid grid-cols-7 gap-1.5">
              {/* Day offset padding */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={`empty-${i}`} className="h-10 sm:h-12 rounded bg-transparent opacity-20" />
              ))}

              {Array.from({ length: 30 }).map((_, i) => {
                const day = i + 1;
                const hasTrips = !!scheduledTrips[day];
                const isSelected = selectedDay === day;

                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`relative h-10 sm:h-12 rounded flex flex-col items-center justify-center font-mono text-xs transition-all duration-200 border ${
                      isSelected
                        ? 'bg-[#00A5B4] text-white border-white shadow-[0_0_15px_rgba(0,165,180,0.5)]'
                        : hasTrips
                        ? 'bg-[#050E1D] text-white border-[#00A5B4]/50 hover:border-[#00A5B4] hover:bg-[#00233F]'
                        : 'bg-[#050E1D]/40 text-[#DCE6E9]/60 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <span>{day}</span>
                    {hasTrips && (
                      <span
                        className={`w-1.5 h-1.5 rounded-full mt-0.5 ${
                          isSelected ? 'bg-white' : 'bg-[#00A5B4] shadow-[0_0_6px_#00A5B4]'
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected Day Trips Details Drawer */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono tracking-widest text-[#00A5B4] uppercase">
                  Departures For {selectedDay} {months[currentMonthIndex]}
                </span>
                <span className="text-[10px] font-mono text-[#DCE6E9]/60">
                  {selectedTripsForDay.length} Expedition(s) Scheduled
                </span>
              </div>

              {selectedTripsForDay.length > 0 ? (
                <div className="space-y-2.5">
                  {selectedTripsForDay.map((trip, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded bg-[#050E1D]/80 border border-[#00A5B4]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-medium text-white">{trip.title}</h4>
                          <span className="text-[10px] font-mono text-[#D4AF6A] bg-[#D4AF6A]/10 px-2 py-0.5 rounded border border-[#D4AF6A]/20">
                            {trip.spots} spots left
                          </span>
                        </div>
                        <div className="text-xs text-[#DCE6E9]/70 font-mono mt-0.5">
                          {trip.site} · {trip.vessel}
                        </div>
                      </div>

                      <div className="flex items-center gap-4 self-end sm:self-center">
                        <span className="text-sm font-light text-white tracking-wider">
                          ${trip.price.toLocaleString()} AUD
                        </span>
                        <button
                          onClick={() =>
                            onReserveTrip(
                              trip.title,
                              `${selectedDay} ${months[currentMonthIndex]}`
                            )
                          }
                          className="px-4 py-1.5 text-xs font-mono tracking-wider text-white uppercase bg-[#00A5B4] rounded hover:bg-[#00A5B4]/85 shadow-[0_0_12px_rgba(0,165,180,0.35)] transition-all"
                        >
                          Reserve
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 rounded bg-[#050E1D]/40 border border-white/5 text-center text-xs text-[#DCE6E9]/60 font-mono">
                  No group departures scheduled on Day {selectedDay}. Private bespoke charters can be arranged upon request.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Season Guide Strip */}
        <div className="mt-12 p-6 rounded-lg glass-panel border border-[#00A5B4]/20">
          <div className="text-xs font-mono tracking-[0.2em] text-[#00A5B4] uppercase mb-4">
            Seasonal Oceanic Aggregation Windows
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-3.5 rounded bg-[#050E1D]/60 border border-white/5">
              <span className="text-[#D4AF6A] font-mono uppercase block text-[10px]">March — August</span>
              <h5 className="font-medium text-white mt-0.5">Whale Sharks & Mantas</h5>
              <p className="text-[11px] text-[#DCE6E9]/70 mt-1">Ningaloo Reef & Muiron Islands migration corridor.</p>
            </div>
            <div className="p-3.5 rounded bg-[#050E1D]/60 border border-white/5">
              <span className="text-[#D4AF6A] font-mono uppercase block text-[10px]">November — December</span>
              <h5 className="font-medium text-white mt-0.5">Coral Spawning Phenomenon</h5>
              <p className="text-[11px] text-[#DCE6E9]/70 mt-1">Great Barrier Reef synchronized nocturnal spawning.</p>
            </div>
            <div className="p-3.5 rounded bg-[#050E1D]/60 border border-white/5">
              <span className="text-[#D4AF6A] font-mono uppercase block text-[10px]">August — November</span>
              <h5 className="font-medium text-white mt-0.5">SS Yongala Predator Peak</h5>
              <p className="text-[11px] text-[#DCE6E9]/70 mt-1">Bull sharks, giant trevally, and schooling barracuda.</p>
            </div>
            <div className="p-3.5 rounded bg-[#050E1D]/60 border border-white/5">
              <span className="text-[#D4AF6A] font-mono uppercase block text-[10px]">December — May</span>
              <h5 className="font-medium text-white mt-0.5">Tasmanian Giant Kelp</h5>
              <p className="text-[11px] text-[#DCE6E9]/70 mt-1">Eaglehawk Neck 30m visibility & weedy seadragons.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
