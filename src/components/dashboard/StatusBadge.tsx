import React from 'react';
import { cn } from '@/src/lib/utils';

export type StatusType =
  | 'planning'
  | 'design'
  | 'development'
  | 'testing'
  | 'review'
  | 'completed'
  | 'on_hold'
  | 'todo'
  | 'in_progress'
  | 'draft'
  | 'sent'
  | 'paid'
  | 'overdue'
  | 'open'
  | 'waiting_for_client'
  | 'resolved'
  | 'closed'
  | 'new'
  | 'contacted'
  | 'qualified'
  | 'proposal'
  | 'won'
  | 'lost'
  | 'low'
  | 'medium'
  | 'high'
  | 'urgent'
  | 'active'
  | 'inactive'
  | 'approved';

interface StatusBadgeProps {
  status: string;
  size?: 'sm' | 'md';
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md', className }) => {
  const normalized = status.toLowerCase().replace(/\s+/g, '_');

  const getStyle = (s: string) => {
    switch (s) {
      case 'completed':
      case 'paid':
      case 'resolved':
      case 'won':
      case 'active':
      case 'approved':
        return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/60';
      case 'development':
      case 'in_progress':
      case 'proposal':
      case 'sent':
      case 'open':
      case 'medium':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400 border-blue-200 dark:border-blue-800/60';
      case 'testing':
      case 'review':
      case 'qualified':
      case 'waiting_for_client':
      case 'high':
        return 'bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-400 border-purple-200 dark:border-purple-800/60';
      case 'planning':
      case 'design':
      case 'contacted':
      case 'new':
      case 'draft':
      case 'low':
        return 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400 border-amber-200 dark:border-amber-800/60';
      case 'urgent':
      case 'overdue':
      case 'lost':
      case 'closed':
      case 'on_hold':
      case 'inactive':
        return 'bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400 border-rose-200 dark:border-rose-800/60';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  const formatText = (text: string) => {
    return text.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 font-semibold rounded-full border tracking-wide uppercase',
        size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-[11px]',
        getStyle(normalized),
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      <span>{formatText(status)}</span>
    </span>
  );
};
