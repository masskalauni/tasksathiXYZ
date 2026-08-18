import React from 'react';
import { Link } from 'react-router-dom';
import { caseStudiesData } from '@/src/data/portfolio';
import { Container } from '@/src/components/ui/Container';
import { Section, SectionHeader } from '@/src/components/ui/Section';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { SEO } from '@/src/components/seo/SEO';
import { PageHero } from '@/src/components/layout/PageHero';
import {
  FileText,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Layers,
  Code2,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export const CaseStudiesIndexPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Case Studies & Engineering Reports"
        description="Read detailed architectural breakdowns of systems built by TASK SATHI: Discovery, strategy, design, full-stack development, and measurable results."
        canonicalPath="/case-studies"
      />

      {/* Hero */}
      <PageHero
        badge="Deep-Dive Engineering Reports"
        badgeIcon={FileText}
        title="In-Depth Architectural Case Studies."
        highlightText="Architectural Case Studies"
        description="Transparent breakdowns of real system challenges: from initial requirements analysis and schema design to full-stack code delivery and verified business outcomes."
        breadcrumbs={[{ label: 'Case Studies' }]}
        highlights={[
          { icon: CheckCircle2, label: 'Real Operational Metrics' },
          { icon: Code2, label: 'Full System Architecture' },
          { icon: ShieldCheck, label: 'Production Outcomes' },
        ]}
      />

      {/* Case Studies List */}
      <Section spacing="lg">
        <div className="space-y-8 max-w-5xl mx-auto">
          {caseStudiesData.map((cs) => (
            <div
              key={cs.id}
              className="p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] shadow-sm hover:border-blue-500/70 transition-all space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" size="sm">
                      {cs.category}
                    </Badge>
                    <span className="text-xs text-slate-500 font-medium">
                      {cs.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {cs.title}
                  </h3>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 shrink-0">
                  <TrendingUp className="h-4 w-4" />
                  <span>{cs.impactMetric}</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {cs.summary}
              </p>

              {/* Two Column Preview: Challenge vs Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-red-50/40 dark:bg-red-950/15 border border-red-200/60 dark:border-red-900/40 space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                    The Challenge
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3">
                    {cs.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/40 dark:bg-blue-950/15 border border-blue-200/60 dark:border-blue-900/40 space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    The Outcome
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3">
                    {cs.results[0]?.label}: {cs.results[0]?.detail}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex flex-wrap gap-1.5">
                  {cs.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[10px] text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link to={`/case-studies/${cs.slug}`}>
                  <Button variant="secondary" size="sm" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
                    Read Full Case Study
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};
