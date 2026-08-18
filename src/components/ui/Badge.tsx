import React from 'react';
import { cn } from '@/src/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'success' | 'warning' | 'accent' | 'brand';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  size = 'sm',
  children,
  id,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-medium transition-colors whitespace-nowrap';

  const variants = {
    default: 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60',
    secondary: 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/50',
    accent: 'bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/50',
    success: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/50',
    warning: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/50',
    outline: 'bg-transparent text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800',
    brand: 'bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-700 dark:text-blue-300 border border-blue-500/20',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs rounded-full gap-1',
    md: 'px-2.5 py-1 text-xs rounded-full gap-1.5 font-semibold',
  };

  return (
    <span id={id} className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
};
