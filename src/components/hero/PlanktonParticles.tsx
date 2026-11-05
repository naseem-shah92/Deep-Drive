import React, { useMemo } from 'react';

export const PlanktonParticles: React.FC = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 32 }).map((_, i) => ({
        id: i,
        x: (i * 3.1) % 100,
        y: (i * 19) % 100,
        size: (i % 3) + 1.5,
        delay: (i * 0.4) % 6,
        duration: 7 + (i % 8),
        isGold: i % 4 === 0,
      })),
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.isGold ? '#D4AF6A' : '#00F0FF',
            boxShadow: p.isGold ? '0 0 10px #D4AF6A' : '0 0 10px #00F0FF',
            animation: `floatParticle ${p.duration}s infinite ease-in-out`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
