import React from 'react';
import { Link } from 'react-router-dom';
import { industriesData } from '@/src/data/industries';
import { Container } from '@/src/components/ui/Container';
import { Section } from '@/src/components/ui/Section';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { SEO } from '@/src/components/seo/SEO';
import { PageHero } from '@/src/components/layout/PageHero';
import {
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Building2,
  Utensils,
  Briefcase,
  Rocket,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

export const IndustriesIndexPage: React.FC = () => {
  const getIcon = (name: string) => {
    const props = { className: 'h-6 w-6 text-blue-600 dark:text-blue-400' };
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
    <>
      <SEO
        title="Industry Verticals & Domains"
        description="Tailored software systems built around specific business dynamics: Healthcare, Education, Retail, Hospitality, Food & Beverage, and Enterprises."
        canonicalPath="/industries"
      />

      {/* Hero */}
      <PageHero
        badge="Domain-Specific Architectures"
        badgeIcon={Building2}
        title="Software Tailored to Your Specific Industry."
        highlightText="Specific Industry"
        description="Every industry has distinct operational nuances. We design systems around the daily realities of hospitals, retail stores, academic campuses, and hospitality venues."
        breadcrumbs={[{ label: 'Industries' }]}
        highlights={[
          { icon: ShieldCheck, label: 'Nepal Compliance Baked-In' },
          { icon: Sparkles, label: 'Tested in Real Operations' },
          { icon: Building2, label: '6 Key Industry Verticals' },
        ]}
      />

      {/* Industry Grid */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industriesData.map((ind) => (
            <Link
              key={ind.id}
              to={`/industries/${ind.slug}`}
              className="group p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] hover:border-blue-500/80 transition-all hover:shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(ind.iconName)}
                  </div>
                  {ind.metrics && (
                    <div className="flex items-center gap-1 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-200/60 dark:border-emerald-800/60">
                      <TrendingUp className="h-3.5 w-3.5" />
                      <span>{ind.metrics.value}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                    {ind.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {ind.description}
                </p>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Key Capabilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {ind.keySolutions.slice(0, 4).map((sol, i) => (
                      <div key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span className="truncate">{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                <span>Explore {ind.title} Platform</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
};
