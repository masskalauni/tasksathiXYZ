import React from 'react';
import { statsData } from '@/src/data/navigation';
import { Container } from '@/src/components/ui/Container';
import { Card } from '@/src/components/ui/Card';
import { CheckCircle2, TrendingUp, Cpu, Headset } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'projects-delivered': <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    'businesses-served': <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
    'domain-solutions': <Cpu className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
    'support-uptime': <Headset className="h-5 w-5 text-amber-600 dark:text-amber-400" />,
  };

  return (
    <section id="about" className="py-12 sm:py-16 border-y border-slate-200/70 dark:border-slate-800/70 bg-white/50 dark:bg-slate-900/30">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Built for businesses ready to move forward.
          </h2>
          <p className="font-nepali text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            व्यवसायको आवश्यकता अनुसार भरपर्दो सफ्टवेयर र डिजिटलाइजेसन
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statsData.map((stat) => (
            <Card
              key={stat.id}
              className="p-5 sm:p-6 text-center rounded-xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div className="flex justify-center mb-3">
                <div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  {iconMap[stat.id] || <TrendingUp className="h-5 w-5 text-blue-600" />}
                </div>
              </div>

              <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white font-mono">
                {stat.value}
              </div>

              <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                {stat.label}
              </div>

              {stat.nepaliLabel && (
                <div className="font-nepali text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.nepaliLabel}
                </div>
              )}

              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
