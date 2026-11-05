import React from 'react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  align = 'left',
  action,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 ${
        align === 'center' ? 'text-center md:text-center items-center' : ''
      }`}
    >
      <div className={align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}>
        <div
          className={`flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#E5C890] uppercase mb-3 ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          <span className="w-5 h-[1px] bg-[#E5C890]/60" />
          <span>{badge}</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1] text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-sm sm:text-base font-light text-slate-300/80 leading-relaxed max-w-xl">
            {description}
          </p>
        )}
      </div>

      {action && <div className="self-start md:self-end shrink-0">{action}</div>}
    </div>
  );
};
