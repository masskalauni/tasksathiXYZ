import React from 'react';
import { IndustryItem } from '@/src/types';
import { Card } from '@/src/components/ui/Card';
import { Badge } from '@/src/components/ui/Badge';
import {
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Building2,
  Utensils,
  Briefcase,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export interface IndustryCardProps {
  industry: IndustryItem;
  isSelected?: boolean;
  onSelect?: (industry: IndustryItem) => void;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({
  industry,
  isSelected = false,
  onSelect,
}) => {
  const getIcon = (name: string) => {
    const props = { className: 'h-5 w-5 text-blue-600 dark:text-blue-400' };
    switch (name) {
      case 'Stethoscope': return <Stethoscope {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'Building2': return <Building2 {...props} />;
      case 'Utensils': return <Utensils {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Rocket': return <Rocket {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      default: return <Building2 {...props} />;
    }
  };

  return (
    <div
      onClick={() => onSelect?.(industry)}
      className={`cursor-pointer rounded-xl p-4 transition-all duration-200 border text-left ${
        isSelected
          ? 'bg-blue-50/70 dark:bg-blue-950/40 border-blue-500/80 shadow-xs'
          : 'bg-white dark:bg-[#111827] border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
          {getIcon(industry.iconName)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
              {industry.title}
            </h4>
            {industry.metrics && (
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded">
                {industry.metrics.value}
              </span>
            )}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
            {industry.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
