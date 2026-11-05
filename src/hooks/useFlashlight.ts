import { useEffect, useRef, useState } from 'react';

export type FlashlightMode = 'torch' | 'flood' | 'uv';

interface UseFlashlightOptions {
  initialRadius?: number;
}

export function useFlashlight(options: UseFlashlightOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [flashlightOn, setFlashlightOn] = useState(false);
  const [mode, setMode] = useState<FlashlightMode>('torch');
  const [beamRadius, setBeamRadius] = useState<number>(options.initialRadius || 260);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Position references for silky smooth hydraulic inertia
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight * 0.45 });
  const lightPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight * 0.45 });
  const animFrameId = useRef<number | null>(null);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    setIsTouchDevice(isTouch);

    // Initial sequence: soft ignite after 400ms
    const timer = setTimeout(() => {
      setFlashlightOn(true);
    }, 400);

    const onMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || e.touches.length === 0) return;
      const rect = containerRef.current.getBoundingClientRect();
      mousePos.current = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    // Silky hydraulic inertia loop
    const lerpFactor = 0.085;
    const render = () => {
      if (isTouch) {
        // Slow organic figure-8 Lissajous path across the reef when idle
        timeRef.current += 0.008;
        const w = window.innerWidth;
        const h = window.innerHeight;
        const targetX = w / 2 + Math.sin(timeRef.current) * (w * 0.3);
        const targetY = h * 0.45 + Math.sin(timeRef.current * 2) * (h * 0.18);
        lightPos.current.x += (targetX - lightPos.current.x) * 0.035;
        lightPos.current.y += (targetY - lightPos.current.y) * 0.035;
      } else {
        lightPos.current.x += (mousePos.current.x - lightPos.current.x) * lerpFactor;
        lightPos.current.y += (mousePos.current.y - lightPos.current.y) * lerpFactor;
      }

      if (containerRef.current) {
        containerRef.current.style.setProperty('--light-x', `${lightPos.current.x}px`);
        containerRef.current.style.setProperty('--light-y', `${lightPos.current.y}px`);
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  return {
    containerRef,
    flashlightOn,
    setFlashlightOn,
    mode,
    setMode,
    beamRadius,
    setBeamRadius,
    isTouchDevice,
  };
}
