import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioProjects } from '@/src/data/portfolio';
import { Container } from '@/src/components/ui/Container';
import { Section } from '@/src/components/ui/Section';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { SEO } from '@/src/components/seo/SEO';
import { PageHero } from '@/src/components/layout/PageHero';
import {
  Briefcase,
  ArrowRight,
  TrendingUp,
  Code2,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const PortfolioIndexPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Software', 'Web', 'Automation'];

  const filteredProjects = portfolioProjects.filter((p) => {
    return selectedCategory === 'All' || p.category === selectedCategory;
  });

  return (
    <>
      <SEO
        title="Portfolio & Project Showcase"
        description="Explore systems, web platforms, and workflow automation engines built by TASK SATHI for commercial enterprises, clinics, and businesses in Nepal."
        canonicalPath="/portfolio"
      />

      {/* Hero */}
      <PageHero
        badge="Engineered Systems & Showcase"
        badgeIcon={Briefcase}
        title="Selected Projects & Systems Showcase."
        highlightText="Systems Showcase"
        description="A curated look at software platforms, web systems, and automation pipelines designed to eliminate operational friction and accelerate growth across Nepal."
        breadcrumbs={[{ label: 'Portfolio' }]}
        highlights={[
          { icon: CheckCircle2, label: 'Custom Enterprise ERPs' },
          { icon: Sparkles, label: 'High-Performance Web Platforms' },
          { icon: ShieldCheck, label: 'Production Workflows in Nepal' },
        ]}
      />

      {/* Filter Tabs */}
      <Section spacing="sm" background="subtle">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <Link to="/case-studies" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline hidden sm:inline-flex items-center gap-1">
            <span>Read In-Depth Case Studies</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Section>

      {/* Projects Grid */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" size="sm">
                    {p.category}
                  </Badge>
                  {p.impactMetric && (
                    <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200/60 dark:border-emerald-800/60">
                      <TrendingUp className="h-3 w-3" />
                      <span>{p.impactMetric}</span>
                    </div>
                  )}
                </div>

                <div>
                  <span className="text-xs text-slate-500 font-medium">
                    {p.clientIndustry}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                    {p.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {p.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[10px] text-slate-600 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6 flex items-center justify-between">
                {p.caseStudySlug ? (
                  <Link
                    to={`/case-studies/${p.caseStudySlug}`}
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1"
                  >
                    <span>Read Architectural Breakdown</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ) : (
                  <Link
                    to="/request-quote"
                    className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600"
                  >
                    Scope Similar System
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};
