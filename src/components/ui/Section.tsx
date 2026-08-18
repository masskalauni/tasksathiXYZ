import React from 'react';
import { cn } from '@/src/lib/utils';
import { Container } from './Container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  background?: 'default' | 'subtle' | 'elevated' | 'dark';
}

export const Section: React.FC<SectionProps> = ({
  className,
  containerSize = 'lg',
  spacing = 'lg',
  background = 'default',
  children,
  id,
  ...props
}) => {
  const spacingClasses = {
    none: 'py-0',
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-24',
    xl: 'py-20 sm:py-32',
  };

  const bgClasses = {
    default: 'bg-transparent',
    subtle: 'bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60',
    elevated: 'bg-white dark:bg-[#111827] border-y border-slate-200/80 dark:border-slate-800/80',
    dark: 'bg-[#0B0F19] text-white border-y border-slate-800',
  };

  return (
    <section
      id={id}
      className={cn('relative overflow-hidden', spacingClasses[spacing], bgClasses[background], className)}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
};

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: React.ReactNode;
  tagline?: string;
  nepaliTagline?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  tagline,
  nepaliTagline,
  title,
  description,
  align = 'center',
  className,
  id,
  ...props
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div
      id={id}
      className={cn('flex flex-col mb-12 sm:mb-16 max-w-3xl', alignClasses[align], className)}
      {...props}
    >
      {badge && <div className="mb-3.5">{badge}</div>}
      {tagline && (
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
          {tagline}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.2]">
        {title}
      </h2>
      {nepaliTagline && (
        <p className="font-nepali text-sm font-medium text-slate-500 dark:text-slate-400 mt-1.5">
          {nepaliTagline}
        </p>
      )}
      {description && (
        <p className="mt-3.5 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
