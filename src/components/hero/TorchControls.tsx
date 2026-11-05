import React from 'react';
import { Flashlight, Sun, Sparkles } from 'lucide-react';
import { FlashlightMode } from '../../hooks/useFlashlight';

interface TorchControlsProps {
  mode: FlashlightMode;
  onModeChange: (mode: FlashlightMode) => void;
  beamRadius: number;
  onRadiusChange: (radius: number) => void;
}

export const TorchControls: React.FC<TorchControlsProps> = ({
  mode,
  onModeChange,
  beamRadius,
  onRadiusChange,
}) => {
  return (
    <div className="absolute top-24 right-6 md:right-10 z-30 flex items-center gap-3">
      {/* Mode Selector Pill */}
      <div className="flex items-center gap-1 p-1 rounded-full border border-white/10 bg-[#070D18]/80 backdrop-blur-md">
        <button
          onClick={() => onModeChange('torch')}
          title="Direct Torch Light"
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase transition-all ${
            mode === 'torch'
              ? 'bg-white text-slate-950 font-medium shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Flashlight className="w-3 h-3" />
          <span className="hidden sm:inline">Torch</span>
        </button>

        <button
          onClick={() => onModeChange('flood')}
          title="Ambient Flood Light"
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase transition-all ${
            mode === 'flood'
              ? 'bg-white text-slate-950 font-medium shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Sun className="w-3 h-3" />
          <span className="hidden sm:inline">Flood</span>
        </button>

        <button
          onClick={() => onModeChange('uv')}
          title="Ultraviolet Fluro Mode"
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase transition-all ${
            mode === 'uv'
              ? 'bg-[#E5C890] text-slate-950 font-medium shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Sparkles className="w-3 h-3" />
          <span className="hidden sm:inline">UV Fluro</span>
        </button>
      </div>

      {/* Radius quick adjustments (Torch mode only) */}
      {mode === 'torch' && (
        <div className="hidden lg:flex items-center gap-1 px-3 py-1 rounded-full border border-white/10 bg-[#070D18]/70 backdrop-blur-md text-[10px] font-mono text-slate-400">
          <span>Beam:</span>
          {[220, 280, 360].map((r) => (
            <button
              key={r}
              onClick={() => onRadiusChange(r)}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                beamRadius === r ? 'text-[#E5C890] font-medium' : 'hover:text-white'
              }`}
            >
              {r}px
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
