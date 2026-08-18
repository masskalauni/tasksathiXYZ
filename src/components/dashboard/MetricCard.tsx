import React from 'react';
import { cn } from '@/src/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  trend?: {
    value: string;
    isPositive?: boolean;
  };
  accentColor?: string;
  className?: string;
  onClick?: () => void;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  trend,
  accentColor = 'blue',
  className,
  onClick,
}) => {
  const getIconBg = () => {
    switch (accentColor) {
      case 'orange':
        return 'bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-900/60';
      case 'emerald':
        return 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/60';
      case 'purple':
        return 'bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900/60';
      case 'rose':
        return 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/60';
      default:
        return 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/60';
    }
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        'p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800/80 shadow-xs transition-all duration-200',
        onClick ? 'cursor-pointer hover:border-blue-500/50 hover:shadow-md' : '',
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            {title}
          </p>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {value}
          </div>
        </div>
        <div className={cn('p-3 rounded-xl border flex items-center justify-center', getIconBg())}>
          {icon}
        </div>
      </div>

      {(subtitle || trend) && (
        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
          {trend && (
            <span
              className={cn(
                'inline-flex items-center gap-1 font-semibold',
                trend.isPositive !== false
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-rose-600 dark:text-rose-400'
              )}
            >
              {trend.isPositive !== false ? (
                <TrendingUp className="h-3.5 w-3.5" />
              ) : (
                <TrendingDown className="h-3.5 w-3.5" />
              )}
              <span>{trend.value}</span>
            </span>
          )}
          {subtitle && (
            <span className="text-slate-500 dark:text-slate-400 font-medium truncate">
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
