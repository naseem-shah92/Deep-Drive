import { useState, useEffect } from 'react';

export interface OceanZone {
  name: string;
  depthRange: string;
  minDepth: number;
  maxDepth: number;
  color: string;
  targetId: string;
}

export const OCEAN_ZONES: OceanZone[] = [
  { name: 'Sunlight Surface', depthRange: '0 – 20m', minDepth: 0, maxDepth: 20, color: '#00F0FF', targetId: 'hero' },
  { name: 'Coral Frontier', depthRange: '20 – 45m', minDepth: 20, maxDepth: 45, color: '#00A5B4', targetId: 'expeditions' },
  { name: 'Twilight Sanctuary', depthRange: '45 – 70m', minDepth: 45, maxDepth: 70, color: '#0D7C94', targetId: 'conditions' },
  { name: 'Midnight Threshold', depthRange: '70 – 100m', minDepth: 70, maxDepth: 100, color: '#00233F', targetId: 'fleet' },
  { name: 'Abyssal Floor', depthRange: '100 – 130m', minDepth: 100, maxDepth: 130, color: '#051930', targetId: 'equipment' },
  { name: 'The Hadal Trench', depthRange: '130 – 150m+', minDepth: 130, maxDepth: 150, color: '#030712', targetId: 'logbook' },
];

export function useDepthScroll() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [depthMeters, setDepthMeters] = useState(0);
  const [pressureATA, setPressureATA] = useState(1.0);
  const [currentZone, setCurrentZone] = useState<OceanZone>(OCEAN_ZONES[0]);

  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - winHeight;
      const scrolled = Math.max(0, Math.min(1, window.scrollY / (docHeight || 1)));

      setScrollProgress(scrolled);

      // Map progress 0..1 to 0..150 meters
      const depth = Math.round(scrolled * 150);
      setDepthMeters(depth);

      // Pressure calculation: 1 ATA surface + 1 ATA per 10 meters depth
      const ata = +(1 + depth / 10).toFixed(1);
      setPressureATA(ata);

      // Find matching zone
      const zone = OCEAN_ZONES.find((z) => depth >= z.minDepth && depth <= z.maxDepth) || OCEAN_ZONES[OCEAN_ZONES.length - 1];
      setCurrentZone(zone);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToZone = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    scrollProgress,
    depthMeters,
    pressureATA,
    currentZone,
    scrollToZone,
  };
}
