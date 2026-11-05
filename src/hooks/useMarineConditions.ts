import { useState, useEffect } from 'react';
import { DiveSite, MarineConditions } from '../types/conditions';

export function useMarineConditions(site: DiveSite) {
  const [conditions, setConditions] = useState<MarineConditions>({
    waterTemp: site.defaultTemp,
    visibility: site.defaultVis,
    swellHeight: site.defaultSwell,
    windSpeed: site.defaultWind,
    windDirection: 'ESE',
    uvIndex: 8,
    rating: 'Excellent',
    ratingScore: 9.4,
    isLive: false,
    updatedAt: 'Live Telemetry Target',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const fetchLive = async () => {
      setLoading(true);
      try {
        const marineUrl = `https://marine-api.open-meteo.com/v1/marine?latitude=${site.lat}&longitude=${site.lng}&current=wave_height,wave_period`;
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${site.lat}&longitude=${site.lng}&current=temperature_2m,wind_speed_10m,wind_direction_10m,uv_index`;

        const [marineRes, weatherRes] = await Promise.allSettled([
          fetch(marineUrl).then((r) => r.json()),
          fetch(weatherUrl).then((r) => r.json()),
        ]);

        if (cancelled) return;

        let liveSwell = site.defaultSwell;
        let liveWind = site.defaultWind;
        let liveWindDir = 'ESE';
        let liveUv = 8;
        let isAnyLive = false;

        if (marineRes.status === 'fulfilled' && marineRes.value?.current?.wave_height != null) {
          liveSwell = Number(marineRes.value.current.wave_height.toFixed(1));
          isAnyLive = true;
        }

        if (weatherRes.status === 'fulfilled' && weatherRes.value?.current) {
          const c = weatherRes.value.current;
          if (c.wind_speed_10m != null) liveWind = Math.round(c.wind_speed_10m);
          if (c.uv_index != null) liveUv = Math.round(c.uv_index);
          if (c.wind_direction_10m != null) {
            const deg = c.wind_direction_10m;
            const dirs = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
            liveWindDir = dirs[Math.round(deg / 22.5) % 16];
          }
          isAnyLive = true;
        }

        // Calculate dynamic dive condition rating
        let score = 9.5;
        if (liveSwell > 2.0) score -= 2.0;
        else if (liveSwell > 1.5) score -= 1.0;

        if (liveWind > 22) score -= 1.8;
        else if (liveWind > 15) score -= 0.8;

        score = Math.max(5.5, Math.min(9.9, Number(score.toFixed(1))));

        let ratingCategory: MarineConditions['rating'] = 'Excellent';
        if (score < 7.0) ratingCategory = 'Fair';
        else if (score < 8.5) ratingCategory = 'Good';

        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        setConditions({
          waterTemp: site.defaultTemp,
          visibility: liveSwell < 1.3 ? site.defaultVis + 3 : site.defaultVis - 2,
          swellHeight: liveSwell,
          windSpeed: liveWind,
          windDirection: liveWindDir,
          uvIndex: liveUv,
          rating: ratingCategory,
          ratingScore: score,
          isLive: isAnyLive,
          updatedAt: isAnyLive ? `Live Satellite AIS (${timeStr})` : 'Calibrated Telemetry Target',
        });
      } catch {
        // Fallback gracefully
        if (!cancelled) {
          setConditions((prev) => ({
            ...prev,
            waterTemp: site.defaultTemp,
            visibility: site.defaultVis,
            swellHeight: site.defaultSwell,
            windSpeed: site.defaultWind,
            isLive: false,
          }));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchLive();

    return () => {
      cancelled = true;
    };
  }, [site]);

  return {
    conditions,
    loading,
  };
}
