import React from 'react';
import { Link } from 'react-router-dom';
import { CaseStudyItem } from '@/src/types';
import { Container } from '@/src/components/ui/Container';
import { Section, SectionHeader } from '@/src/components/ui/Section';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { SEO } from '@/src/components/seo/SEO';
import { PageHero } from '@/src/components/layout/PageHero';
import {
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Layers,
  Code2,
  Lightbulb,
  Compass,
  FileText,
  Phone,
  Sparkles,
  Building,
} from 'lucide-react';

export interface CaseStudyPageTemplateProps {
  caseStudy: CaseStudyItem;
}

export const CaseStudyPageTemplate: React.FC<CaseStudyPageTemplateProps> = ({ caseStudy }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.title,
    description: caseStudy.summary,
    author: {
      '@type': 'Organization',
      name: 'TASK SATHI Engineering',
    },
  };

  return (
    <>
      <SEO
        title={`${caseStudy.title} — Case Study`}
        description={caseStudy.summary}
        canonicalPath={`/case-studies/${caseStudy.slug}`}
        type="article"
        schema={schema}
      />

      {/* Hero */}
      <PageHero
        align="split"
        badge={caseStudy.category}
        badgeIcon={FileText}
        title={caseStudy.title}
        description={caseStudy.summary}
        breadcrumbs={[
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Case Studies', href: '/case-studies' },
          { label: caseStudy.title },
        ]}
        highlights={[
          { icon: Building, label: `Industry: ${caseStudy.industry}` },
          { icon: Code2, label: `Profile: ${caseStudy.clientType}` },
          { icon: TrendingUp, label: `Impact: ${caseStudy.impactMetric}` },
        ]}
        actions={
          <>
            <Link to="/request-quote">
              <Button variant="primary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Request Similar System
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button variant="outline" size="md">
                All Case Studies
              </Button>
            </Link>
          </>
        }
        rightContent={
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md p-6 sm:p-7 shadow-xl shadow-slate-900/5 dark:shadow-none space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="text-xs font-bold font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Engineering Blueprint
              </div>
              <Badge variant="accent" size="sm" className="font-mono">
                {caseStudy.impactMetric}
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Technology Stack Deployed
              </div>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono text-xs text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 space-y-1">
              <div className="flex justify-between">
                <span>Client Sector:</span>
                <span className="font-medium text-slate-900 dark:text-white">{caseStudy.industry}</span>
              </div>
              <div className="flex justify-between">
                <span>Execution Type:</span>
                <span className="font-medium text-slate-900 dark:text-white">{caseStudy.clientType}</span>
              </div>
            </div>
          </div>
        }
      />

      {/* Challenge & Discovery */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-red-200/70 dark:border-red-900/40 bg-red-50/30 dark:bg-red-950/10 p-6 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              The Business Challenge
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200/70 dark:border-blue-900/40 bg-blue-50/30 dark:bg-blue-950/10 p-6 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Discovery & Diagnosis
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
              {caseStudy.discovery}
            </p>
          </div>
        </div>
      </Section>

      {/* Strategy, Design & Development */}
      <Section spacing="lg" background="subtle">
        <SectionHeader
          tagline="Engineering Execution"
          title="From strategic architecture to robust production deployment."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-3">
            <div className="h-8 w-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center">
              <Compass className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              System Strategy
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {caseStudy.strategy}
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
              <Layers className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              UI/UX & Design Approach
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {caseStudy.designApproach}
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-3">
            <div className="h-8 w-8 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center">
              <Code2 className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Full-Stack Development
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {caseStudy.developmentDetails}
            </p>
          </div>
        </div>
      </Section>

      {/* Measurable Results */}
      <Section spacing="lg">
        <SectionHeader
          tagline="Quantifiable Impact"
          title="Real outcomes delivered after system cutover."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudy.results.map((res, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-2"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-600 dark:text-blue-400">
                {res.metric}
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {res.label}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {res.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Lessons Learned */}
      {caseStudy.lessonsLearned && (
        <Section spacing="md" background="subtle">
          <div className="max-w-3xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Lightbulb className="h-4 w-4 text-amber-500" />
              Engineering Insights & Lessons Learned
            </div>
            <div className="space-y-2">
              {caseStudy.lessonsLearned.map((l, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section spacing="lg">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-xl border border-slate-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Build something similar for your business.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Discuss your system architecture with our engineering team and get a transparent feasibility plan.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/request-quote">
              <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Request a Proposal
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800">
                View All Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};
