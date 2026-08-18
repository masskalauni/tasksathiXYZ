import React, { useState } from 'react';
import { industriesData } from '@/src/data/industries';
import { IndustryItem } from '@/src/types';
import { Section, SectionHeader } from '@/src/components/ui/Section';
import { IndustryCard } from './IndustryCard';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
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
  TrendingUp,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface IndustriesSectionProps {
  onOpenInquiry: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenInquiry }) => {
  const [activeIndustry, setActiveIndustry] = useState<IndustryItem>(industriesData[0]);

  const getIcon = (name: string) => {
    const props = { className: 'h-6 w-6 text-white' };
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
    <Section id="industries" spacing="lg">
      <SectionHeader
        badge={
          <Badge variant="secondary" size="md">
            Vertical Solutions
          </Badge>
        }
        tagline="Industry Expertise"
        nepaliTagline="तपाईंको व्यवसाय क्षेत्रको विशिष्ट आवश्यकता अनुसार निर्मित प्रणाली"
        title="Solutions built around your industry."
        description="We understand that a hospital has vastly different operational dynamics than a supermarket or an academic campus. We tailor architecture to your domain."
      />

      {/* Asymmetric Showcase: Big Spotlight on Left, Interactive Selector Grid on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Featured Big Detail Card */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-6 sm:p-8 shadow-sm flex flex-col justify-between h-full text-left"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-600/20">
                    {getIcon(activeIndustry.iconName)}
                  </div>
                  {activeIndustry.metrics && (
                    <div className="text-right">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                        {activeIndustry.metrics.label}
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                        {activeIndustry.metrics.value}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {activeIndustry.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                  {activeIndustry.subtitle}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeIndustry.description}
                </p>

                {/* Key Solutions Checklist */}
                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    Engineered Modules Included
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeIndustry.keySolutions.map((sol, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <Button
                  variant="primary"
                  size="md"
                  onClick={onOpenInquiry}
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Request {activeIndustry.title} Demo
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Industry Selector Grid */}
        <div className="lg:col-span-6 space-y-2.5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-1 mb-2">
            Select Your Industry Sector
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {industriesData.map((ind) => (
              <IndustryCard
                key={ind.id}
                industry={ind}
                isSelected={activeIndustry.id === ind.id}
                onSelect={(selected) => setActiveIndustry(selected)}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
