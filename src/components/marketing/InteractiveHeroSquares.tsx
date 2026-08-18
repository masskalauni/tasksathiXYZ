import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface FloatingSquare {
  id: number;
  x: number; // percentage
  y: number; // percentage
  size: number;
  color: string;
  glowColor: string;
  delay: number;
  duration: number;
}

const BRAND_SQUARES: FloatingSquare[] = [
  { id: 1, x: 8, y: 15, size: 18, color: 'bg-orange-500', glowColor: 'rgba(249, 115, 22, 0.4)', delay: 0, duration: 6 },
  { id: 2, x: 18, y: 35, size: 12, color: 'bg-blue-600', glowColor: 'rgba(37, 99, 235, 0.4)', delay: 1.2, duration: 7 },
  { id: 3, x: 42, y: 12, size: 14, color: 'bg-emerald-500', glowColor: 'rgba(16, 185, 129, 0.4)', delay: 0.8, duration: 5.5 },
  { id: 4, x: 62, y: 22, size: 20, color: 'bg-purple-600', glowColor: 'rgba(147, 51, 234, 0.4)', delay: 2, duration: 8 },
  { id: 5, x: 88, y: 18, size: 16, color: 'bg-orange-500', glowColor: 'rgba(249, 115, 22, 0.4)', delay: 1.5, duration: 6.5 },
  { id: 6, x: 92, y: 65, size: 22, color: 'bg-cyan-500', glowColor: 'rgba(6, 182, 212, 0.4)', delay: 0.5, duration: 7.2 },
  { id: 7, x: 78, y: 82, size: 14, color: 'bg-blue-500', glowColor: 'rgba(59, 130, 246, 0.4)', delay: 2.3, duration: 6.8 },
  { id: 8, x: 12, y: 78, size: 16, color: 'bg-amber-500', glowColor: 'rgba(245, 158, 11, 0.4)', delay: 1.8, duration: 7.5 },
  { id: 9, x: 32, y: 88, size: 10, color: 'bg-indigo-500', glowColor: 'rgba(99, 102, 241, 0.4)', delay: 0.3, duration: 5.8 },
  { id: 10, x: 50, y: 75, size: 15, color: 'bg-rose-500', glowColor: 'rgba(244, 63, 94, 0.4)', delay: 1.1, duration: 6.2 },
];

export const InteractiveHeroSquares: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [gridDimensions, setGridDimensions] = useState({ cols: 24, rows: 14 });

  // Dynamically calculate grid density based on container dimensions
  const updateGridSize = useCallback(() => {
    if (!containerRef.current) return;
    const { clientWidth, clientHeight } = containerRef.current;
    const squareSize = 40; // 40px grid cells
    const cols = Math.ceil(clientWidth / squareSize);
    const rows = Math.ceil(clientHeight / squareSize);
    setGridDimensions({ cols, rows });
  }, []);

  useEffect(() => {
    updateGridSize();
    window.addEventListener('resize', updateGridSize);
    return () => window.removeEventListener('resize', updateGridSize);
  }, [updateGridSize]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setMousePos(null);
    setIsHovering(false);
  };

  // Color palette for mouse hover trail & interactive squares
  const colors = [
    'hover:border-orange-500/80 hover:bg-orange-500/20 hover:shadow-orange-500/30',
    'hover:border-blue-500/80 hover:bg-blue-500/20 hover:shadow-blue-500/30',
    'hover:border-cyan-500/80 hover:bg-cyan-500/20 hover:shadow-cyan-500/30',
    'hover:border-purple-500/80 hover:bg-purple-500/20 hover:shadow-purple-500/30',
    'hover:border-emerald-500/80 hover:bg-emerald-500/20 hover:shadow-emerald-500/30',
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 overflow-hidden pointer-events-auto select-none"
      aria-hidden="true"
    >
      {/* 1. Dynamic Cursor Spotlight Glow */}
      {isHovering && mousePos && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.09), rgba(249, 115, 22, 0.07), transparent 80%)`,
          }}
        />
      )}

      {/* 2. Interactive Matrix of Small Squares */}
      <div
        className="w-full h-full grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)]"
        style={{
          gridTemplateColumns: `repeat(${gridDimensions.cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${gridDimensions.rows}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: gridDimensions.cols * gridDimensions.rows }).map((_, index) => {
          const colorClass = colors[index % colors.length];

          return (
            <div
              key={index}
              className={cn(
                'group relative border-[0.5px] border-slate-200/40 dark:border-slate-800/40',
                'transition-all duration-500 ease-out cursor-crosshair',
                'hover:duration-75 hover:scale-105 hover:z-20 hover:rounded-sm hover:shadow-lg',
                colorClass
              )}
            >
              {/* Inner glowing core that reveals on hover */}
              <div className="absolute inset-1 rounded-[2px] opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-50 transition-all duration-150 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* 3. Floating Interactive Tech Pixels (TaskSathi Mosaic Cubes) */}
      <div className="absolute inset-0 pointer-events-none">
        {BRAND_SQUARES.map((square) => (
          <motion.div
            key={square.id}
            initial={{ opacity: 0.4, scale: 0.9, y: 0, rotate: 0 }}
            animate={{
              opacity: [0.35, 0.75, 0.35],
              scale: [0.95, 1.1, 0.95],
              y: [0, -14, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: square.duration,
              repeat: Infinity,
              delay: square.delay,
              ease: 'easeInOut',
            }}
            style={{
              left: `${square.x}%`,
              top: `${square.y}%`,
              width: square.size,
              height: square.size,
              boxShadow: `0 0 16px ${square.glowColor}`,
            }}
            className={cn(
              'pointer-events-auto absolute rounded-[3px] border border-white/40 cursor-pointer shadow-md',
              'transition-transform duration-300 hover:scale-150 hover:rotate-45 hover:z-30 active:scale-95',
              square.color
            )}
          >
            <div className="w-full h-full bg-gradient-to-tr from-black/20 to-white/40 rounded-[2px]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
