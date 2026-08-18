import React from 'react';
import { cn } from '@/src/lib/utils';

export interface TaskSathiLogoProps {
  variant?: 'full' | 'horizontal' | 'icon' | 'stacked' | 'badge';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'custom';
  className?: string;
  showTagline?: boolean;
  showNepali?: boolean;
  animateOnHover?: boolean;
}

export const TaskSathiEmblem: React.FC<{
  className?: string;
  size?: number;
  idSuffix?: string;
}> = ({ className, size = 48, idSuffix = 'ts' }) => {
  const uid = `ts-logo-${idSuffix}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0 transition-transform duration-200', className)}
      aria-label="TASK SATHI Official Emblem"
    >
      <defs>
        {/* Navy Blue Gradients for Letter T & Crescent */}
        <linearGradient id={`${uid}-navy-dark`} x1="30" y1="20" x2="150" y2="170" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B1E3F" />
          <stop offset="40%" stopColor="#12376E" />
          <stop offset="100%" stopColor="#081831" />
        </linearGradient>

        <linearGradient id={`${uid}-navy-bright`} x1="40" y1="30" x2="130" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E4B94" />
          <stop offset="60%" stopColor="#0F2D60" />
          <stop offset="100%" stopColor="#071733" />
        </linearGradient>

        {/* Vibrant Orange Gradients for Letter S & Arrow */}
        <linearGradient id={`${uid}-orange-main`} x1="60" y1="40" x2="160" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF9D00" />
          <stop offset="35%" stopColor="#FF7300" />
          <stop offset="80%" stopColor="#F04E00" />
          <stop offset="100%" stopColor="#D93800" />
        </linearGradient>

        <linearGradient id={`${uid}-orange-arrow`} x1="40" y1="170" x2="170" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E64500" />
          <stop offset="40%" stopColor="#FF6B00" />
          <stop offset="85%" stopColor="#FFA600" />
          <stop offset="100%" stopColor="#FFBE1A" />
        </linearGradient>

        {/* Growth Bar Chart Gradients */}
        <linearGradient id={`${uid}-bar-1`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#133870" />
          <stop offset="100%" stopColor="#0A1C38" />
        </linearGradient>
        <linearGradient id={`${uid}-bar-2`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E4F9C" />
          <stop offset="100%" stopColor="#0F2A56" />
        </linearGradient>
        <linearGradient id={`${uid}-bar-3`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2868CA" />
          <stop offset="100%" stopColor="#173B75" />
        </linearGradient>
        <linearGradient id={`${uid}-bar-4`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6957A8" />
          <stop offset="100%" stopColor="#352662" />
        </linearGradient>

        {/* Pixel Cube Gradients */}
        <linearGradient id={`${uid}-cube-orange`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFA726" />
          <stop offset="100%" stopColor="#F57C00" />
        </linearGradient>
        <linearGradient id={`${uid}-cube-green`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8BC34A" />
          <stop offset="100%" stopColor="#558B2F" />
        </linearGradient>
        <linearGradient id={`${uid}-cube-teal`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00ACC1" />
          <stop offset="100%" stopColor="#006064" />
        </linearGradient>
        <linearGradient id={`${uid}-cube-blue`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E88E5" />
          <stop offset="100%" stopColor="#0D47A1" />
        </linearGradient>
        <linearGradient id={`${uid}-cube-cyan`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#29B6F6" />
          <stop offset="100%" stopColor="#0288D1" />
        </linearGradient>

        {/* Subtle drop shadow for depth */}
        <filter id={`${uid}-shadow`} x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="1" dy="3" stdDeviation="3.5" floodColor="#081427" floodOpacity="0.32" />
        </filter>
        <filter id={`${uid}-orange-shadow`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="2.5" stdDeviation="3" floodColor="#C73800" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* 1. Outer Dark Circular Ring / Crescent */}
      <path
        d="M 98 25 C 50 25 24 64 24 105 C 24 135 41 161 68 175 C 52 161 40 138 40 106 C 40 68 64 39 104 39 C 117 39 128 42 138 48 C 127 34 113 25 98 25 Z"
        fill={`url(#${uid}-navy-bright)`}
      />

      {/* 2. Growth Bar Chart at Bottom Left */}
      <g opacity="0.95">
        {/* Bar 1 (Shortest) */}
        <path d="M 33 138 L 44 138 L 44 168 C 40 166 36 163 33 160 Z" fill={`url(#${uid}-bar-1)`} />
        {/* Bar 2 */}
        <path d="M 47 122 L 58 122 L 58 171 C 54 170 51 168 47 166 Z" fill={`url(#${uid}-bar-2)`} />
        {/* Bar 3 */}
        <path d="M 61 106 L 72 106 L 72 173 C 67 173 64 172 61 171 Z" fill={`url(#${uid}-bar-3)`} />
        {/* Bar 4 (Purple accent) */}
        <path d="M 75 120 L 86 120 L 86 172 C 82 172 78 172 75 172 Z" fill={`url(#${uid}-bar-4)`} />
      </g>

      {/* 3. Pixel Mosaic Tech Cubes (Top Right) */}
      <g>
        {/* Top-most Orange */}
        <rect x="142" y="24" width="13" height="13" rx="1.5" fill={`url(#${uid}-cube-orange)`} />
        {/* Green */}
        <rect x="158" y="32" width="13" height="13" rx="1.5" fill={`url(#${uid}-cube-green)`} />
        {/* Orange secondary */}
        <rect x="134" y="40" width="10" height="10" rx="1.5" fill={`url(#${uid}-cube-orange)`} />
        {/* Teal */}
        <rect x="149" y="40" width="11" height="11" rx="1.5" fill={`url(#${uid}-cube-teal)`} />
        {/* Dark Blue */}
        <rect x="154" y="55" width="13" height="13" rx="1.5" fill={`url(#${uid}-cube-blue)`} />
        {/* Cyan small */}
        <rect x="146" y="69" width="9" height="9" rx="1.2" fill={`url(#${uid}-cube-cyan)`} />
      </g>

      {/* 4. Bold Metallic Navy 'T' */}
      <g filter={`url(#${uid}-shadow)`}>
        {/* T-bar (Top crossbar with beveled end) */}
        <path
          d="M 37 54 L 140 54 C 143 54 145 52 144 50 L 142 47 C 141 45 139 44 136 44 L 48 44 C 40 44 33 50 37 54 Z"
          fill={`url(#${uid}-navy-dark)`}
        />
        <path
          d="M 39 53 L 140 53 L 134 68 L 115 68 L 115 142 L 78 142 L 78 68 L 47 68 Z"
          fill={`url(#${uid}-navy-bright)`}
        />
        {/* T subtle highlight bevel */}
        <path
          d="M 47 68 L 78 68 L 78 142 L 86 142 L 86 63 L 132 63 L 138 53 L 39 53 Z"
          fill="#FFFFFF"
          opacity="0.12"
        />
      </g>

      {/* 5. Interlocking Vibrant Orange 'S' */}
      <g filter={`url(#${uid}-orange-shadow)`}>
        <path
          d="M 136 67 C 122 55 98 56 87 67 C 76 78 81 94 99 101 L 115 107 C 131 113 138 123 135 137 C 131 153 113 162 93 160 C 76 158 64 149 57 141 L 68 131 C 74 138 83 145 96 146 C 108 147 118 141 120 132 C 122 123 117 117 101 111 L 85 105 C 67 98 61 85 66 71 C 72 55 93 43 117 46 C 128 47 138 53 144 60 Z"
          fill={`url(#${uid}-orange-main)`}
        />
        {/* S highlight sheen */}
        <path
          d="M 117 48 C 128 49 137 54 143 60 L 136 67 C 123 57 101 58 91 67 C 88 70 87 73 87 75 C 88 68 97 54 117 48 Z"
          fill="#FFFFFF"
          opacity="0.35"
        />
      </g>

      {/* 6. Dynamic Upward Growth Arrow (Crescent Swoosh to Arrowhead) */}
      <g filter={`url(#${uid}-orange-shadow)`}>
        {/* Curved Trail */}
        <path
          d="M 64 167 C 86 179 116 176 140 158 C 158 143 169 118 171 90 L 160 92 C 158 116 148 136 132 148 C 112 163 87 165 67 154 Z"
          fill={`url(#${uid}-orange-arrow)`}
        />
        {/* Arrow Head */}
        <path
          d="M 172 73 L 184 104 L 168 98 L 154 109 Z"
          fill={`url(#${uid}-orange-arrow)`}
        />
      </g>
    </svg>
  );
};

export const TaskSathiLogo: React.FC<TaskSathiLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className,
  showTagline = true,
  showNepali = true,
  animateOnHover = true,
}) => {
  // Size mapping for emblem & typography
  const sizeConfig = {
    xs: { emblem: 26, text: 'text-sm', sub: 'text-[9px]', nepali: 'text-[8px]', gap: 'gap-2' },
    sm: { emblem: 34, text: 'text-base sm:text-lg', sub: 'text-[10px]', nepali: 'text-[9px]', gap: 'gap-2.5' },
    md: { emblem: 44, text: 'text-xl sm:text-2xl', sub: 'text-[11px]', nepali: 'text-[10px]', gap: 'gap-3' },
    lg: { emblem: 56, text: 'text-2xl sm:text-3xl', sub: 'text-xs', nepali: 'text-[11px]', gap: 'gap-3.5' },
    xl: { emblem: 72, text: 'text-3xl sm:text-4xl', sub: 'text-sm', nepali: 'text-xs', gap: 'gap-4' },
    '2xl': { emblem: 96, text: 'text-4xl sm:text-5xl', sub: 'text-base', nepali: 'text-sm', gap: 'gap-5' },
    custom: { emblem: 44, text: 'text-xl', sub: 'text-xs', nepali: 'text-[10px]', gap: 'gap-3' },
  }[size];

  if (variant === 'icon') {
    return (
      <div className={cn('inline-flex items-center justify-center', className)}>
        <TaskSathiEmblem size={sizeConfig.emblem} className={animateOnHover ? 'group-hover:scale-105 transition-transform' : ''} />
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div
        className={cn(
          'inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-2xs backdrop-blur-xs',
          className
        )}
      >
        <TaskSathiEmblem size={24} />
        <div className="flex items-center font-black tracking-tight text-sm">
          <span className="text-[#0E284E] dark:text-white">Task</span>
          <span className="text-[#FF6600]">Sathi</span>
        </div>
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div
        className={cn(
          'inline-flex flex-col items-center text-center group',
          sizeConfig.gap,
          className
        )}
      >
        <TaskSathiEmblem
          size={sizeConfig.emblem * 1.5}
          className={animateOnHover ? 'group-hover:scale-105 transition-transform duration-300' : ''}
        />

        <div className="flex flex-col items-center">
          {/* Main Wordmark */}
          <div className={cn('font-black tracking-tight leading-none', sizeConfig.text)}>
            <span className="text-[#0E284E] dark:text-white font-extrabold">Task</span>
            <span className="text-[#FF6600] font-black">Sathi</span>
          </div>

          {/* Subtitle */}
          {showTagline && (
            <div className="flex items-center gap-2 mt-1 text-slate-600 dark:text-slate-300 font-medium">
              <span className="h-px w-4 sm:w-6 bg-slate-300 dark:bg-slate-700" />
              <span className={cn('tracking-tight whitespace-nowrap', sizeConfig.sub)}>
                Your Partner For Business Success
              </span>
              <span className="h-px w-4 sm:w-6 bg-slate-300 dark:bg-slate-700" />
            </div>
          )}

          {/* Nepali Tagline */}
          {showNepali && (
            <div className={cn('mt-0.5 text-slate-500 dark:text-slate-400 font-nepali tracking-normal', sizeConfig.nepali)}>
              वेबसाइट <span className="text-orange-500 font-bold">|</span> सफ्टवेयर <span className="text-orange-500 font-bold">|</span> डिजिटल मार्केटिङ
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default: 'horizontal' and 'full'
  return (
    <div
      className={cn(
        'inline-flex items-center group select-none',
        sizeConfig.gap,
        className
      )}
    >
      <TaskSathiEmblem
        size={sizeConfig.emblem}
        className={animateOnHover ? 'group-hover:scale-105 transition-transform duration-200' : ''}
      />

      <div className="flex flex-col justify-center min-w-0">
        {/* Main Wordmark: Task (Navy/White) + Sathi (Orange) */}
        <div className={cn('font-black tracking-tight leading-none flex items-center', sizeConfig.text)}>
          <span className="text-[#0E284E] dark:text-white font-extrabold transition-colors">Task</span>
          <span className="text-[#FF6600] font-black">Sathi</span>
        </div>

        {/* Tagline */}
        {showTagline && (
          <div className="flex items-center gap-1 mt-0.5 text-slate-600 dark:text-slate-300 font-medium leading-none">
            <span className="hidden sm:inline-block h-px w-2 bg-slate-400 dark:bg-slate-600" />
            <span className={cn('tracking-tight whitespace-nowrap font-medium hidden min-[380px]:inline-block', sizeConfig.sub)}>
              Your Partner For Business Success
            </span>
            <span className="hidden sm:inline-block h-px w-2 bg-slate-400 dark:bg-slate-600" />
          </div>
        )}

        {/* Nepali Services */}
        {showNepali && variant === 'full' && (
          <div className={cn('mt-0.5 text-slate-500 dark:text-slate-400 font-nepali leading-none', sizeConfig.nepali)}>
            वेबसाइट <span className="text-orange-500">|</span> सफ्टवेयर <span className="text-orange-500">|</span> डिजिटल मार्केटिङ
          </div>
        )}
      </div>
    </div>
  );
};
