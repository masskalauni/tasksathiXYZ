import React from 'react';
import { ServiceItem } from '@/src/types';
import { Card } from '@/src/components/ui/Card';
import { Badge } from '@/src/components/ui/Badge';
import {
  Code2,
  Layers,
  Users,
  Receipt,
  FileSpreadsheet,
  Boxes,
  Stethoscope,
  GraduationCap,
  Building2,
  Utensils,
  Globe,
  Smartphone,
  Bot,
  Cloud,
  Compass,
  TrendingUp,
  ArrowRight,
  Check,
} from 'lucide-react';

export interface ServiceCardProps {
  service: ServiceItem;
  onSelectService?: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelectService }) => {
  const getIcon = (name: string) => {
    const props = { className: 'h-5 w-5 text-blue-600 dark:text-blue-400' };
    switch (name) {
      case 'Code2': return <Code2 {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Receipt': return <Receipt {...props} />;
      case 'FileSpreadsheet': return <FileSpreadsheet {...props} />;
      case 'Boxes': return <Boxes {...props} />;
      case 'Stethoscope': return <Stethoscope {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'Building2': return <Building2 {...props} />;
      case 'Utensils': return <Utensils {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'Bot': return <Bot className="h-5 w-5 text-purple-600 dark:text-purple-400" />;
      case 'Cloud': return <Cloud {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      default: return <Code2 {...props} />;
    }
  };

  return (
    <Card
      hoverEffect
      className="flex flex-col justify-between p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#111827] shadow-xs group"
    >
      <div>
        {/* Header with Icon and Badge */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
            {getIcon(service.iconName)}
          </div>
          {service.popular && (
            <Badge variant="secondary" size="sm">
              Popular
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Features list */}
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60 space-y-1.5">
          {service.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
              <Check className="h-3.5 w-3.5 text-blue-500 shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Action */}
      <div className="mt-6 pt-3">
        <button
          type="button"
          onClick={() => onSelectService?.(service)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-200"
        >
          <span>Discuss this solution</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </Card>
  );
};
