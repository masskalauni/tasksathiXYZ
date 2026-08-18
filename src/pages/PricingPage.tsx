import React from 'react';
import { Link } from 'react-router-dom';
import { pricingPhilosophy, pricingCategories } from '@/src/data/pricing';
import { Container } from '@/src/components/ui/Container';
import { Section, SectionHeader } from '@/src/components/ui/Section';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { SEO } from '@/src/components/seo/SEO';
import { PageHero } from '@/src/components/layout/PageHero';
import { BabalHostPartnerCard } from '@/src/components/marketing/BabalHostPartnerCard';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Scale,
  Clock,
  Code2,
  Phone,
  Sparkles,
  Lock,
} from 'lucide-react';

export const PricingPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Pricing Philosophy & Scope Tiers"
        description="Requirement-driven software pricing for custom software, ERP, POS, web and mobile apps in Nepal. Transparent milestones and full source code ownership."
        canonicalPath="/pricing"
      />

      {/* Hero */}
      <PageHero
        badge="Transparent & Requirement-Driven"
        badgeIcon={Scale}
        title="Transparent, Requirement-Driven Pricing"
        highlightText="Requirement-Driven Pricing"
        description={pricingPhilosophy.quote}
        breadcrumbs={[{ label: 'Pricing' }]}
        highlights={[
          { icon: ShieldCheck, label: '100% Source Code Ownership' },
          { icon: Lock, label: 'Fixed-Price Milestones' },
          { icon: Sparkles, label: 'Zero Vendor Lock-In' },
        ]}
        actions={
          <>
            <Link to="/request-quote">
              <Button variant="primary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Request Project Estimate
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="md">
                Schedule Technical Scoping
              </Button>
            </Link>
          </>
        }
      />

      {/* 3 Core Pricing Principles */}
      <Section spacing="lg" background="subtle">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPhilosophy.principles.map((pr, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-2"
            >
              <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <h4 className="text-base font-bold text-slate-900 dark:text-white pt-1">
                {pr.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pr.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5 Modular Scope Tiers */}
      <Section spacing="lg">
        <SectionHeader
          tagline="Scope & Engagement Categories"
          title="Modular project scoping framework."
          description="We break projects into structured deliverables with predictable sprint milestones."
        />

        <div className="space-y-8 max-w-5xl mx-auto">
          {pricingCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] shadow-sm space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {cat.pricingType}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-500">{cat.subtitle}</p>
                </div>

                <div className="text-left sm:text-right">
                  <div className="text-base font-bold font-mono text-slate-900 dark:text-white">
                    {cat.startingRange}
                  </div>
                  <div className="text-xs text-slate-500 flex items-center sm:justify-end gap-1">
                    <Clock className="h-3 w-3" />
                    <span>Typical Delivery: {cat.typicalTimeline}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {cat.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Standard Scope Deliverables:
                  </div>
                  <div className="space-y-1.5">
                    {cat.deliverables.map((del, i) => (
                      <div key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Key Scope Variables:
                  </div>
                  <div className="space-y-1.5">
                    {cat.factors.map((fac, i) => (
                      <div key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                        <span>{fac}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  Best For: <span className="font-semibold text-slate-700 dark:text-slate-300">{cat.bestFor}</span>
                </span>
                <Link to="/request-quote">
                  <Button variant="secondary" size="sm" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
                    Request Quote for This Scope
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Cost Drivers & Estimation Factors */}
      <Section spacing="lg" background="subtle">
        <SectionHeader
          tagline="Pricing Factors"
          title="What determines the technical investment?"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pricingPhilosophy.costFactors.map((cf, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-1.5"
            >
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                {cf.factor}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {cf.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Recommended Nepal Cloud & Domain Hosting */}
      <Section spacing="lg">
        <SectionHeader
          tagline="Infrastructure & Deployment"
          title="Recommended Cloud & Domain Hosting in Nepal"
          description="High-speed NVMe servers, cPanel, low-latency Nepal routing, and seamless eSewa/Khalti checkout."
        />
        <div className="max-w-4xl mx-auto">
          <BabalHostPartnerCard variant="card" />
        </div>
      </Section>

      {/* CTA */}
      <Section spacing="lg">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-xl border border-slate-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Get an exact, fixed-price proposal for your project.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Share your requirements and we will provide an itemized proposal with clear deliverables and milestones.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/request-quote">
              <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Request a Custom Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800">
                Talk with an Engineer
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};
