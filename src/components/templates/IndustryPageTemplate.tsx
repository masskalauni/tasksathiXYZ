import React from 'react';
import { Link } from 'react-router-dom';
import { IndustryItem } from '@/src/types';
import { servicesData } from '@/src/data/services';
import { productsData } from '@/src/data/products';
import { Container } from '@/src/components/ui/Container';
import { Section, SectionHeader } from '@/src/components/ui/Section';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { Accordion } from '@/src/components/ui/Accordion';
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
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Phone,
  FileText,
  Sparkles,
} from 'lucide-react';

export interface IndustryPageTemplateProps {
  industry: IndustryItem;
}

export const IndustryPageTemplate: React.FC<IndustryPageTemplateProps> = ({ industry }) => {
  const getIcon = (name: string) => {
    const props = { className: 'h-8 w-8 text-blue-600 dark:text-blue-400' };
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

  const relatedServices = servicesData.filter((s) =>
    industry.relatedServices?.includes(s.id)
  );

  const relatedProducts = productsData.filter((p) =>
    industry.relatedProducts?.includes(p.id)
  );

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: industry.title,
    provider: {
      '@type': 'Organization',
      name: 'TASK SATHI',
      url: 'https://tasksathi.com',
    },
    description: industry.description,
  };

  return (
    <>
      <SEO
        title={industry.title}
        description={industry.description}
        canonicalPath={`/industries/${industry.slug}`}
        type="service"
        schema={schema}
      />

      {/* Hero Section */}
      <PageHero
        align="split"
        badge="Industry Vertical"
        badgeIcon={Sparkles}
        title={industry.title}
        description={industry.description}
        breadcrumbs={[
          { label: 'Industries', href: '/industries' },
          { label: industry.title },
        ]}
        highlights={industry.solutions.slice(0, 4).map((s) => ({ icon: CheckCircle2, label: s.title }))}
        actions={
          <>
            <Link to="/request-quote">
              <Button variant="primary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Consult for {industry.title}
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="md">
                Talk to Domain Leads
              </Button>
            </Link>
          </>
        }
        rightContent={
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md p-6 sm:p-7 shadow-xl shadow-slate-900/5 dark:shadow-none space-y-5">
            <div className="flex items-center gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center shrink-0 shadow-xs">
                {getIcon(industry.iconName)}
              </div>
              <div>
                <div className="text-xs font-bold font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Industry Specialization
                </div>
                <div className="text-lg font-extrabold text-slate-900 dark:text-white">
                  {industry.title}
                </div>
                <div className="text-xs text-slate-500">{industry.subtitle}</div>
              </div>
            </div>

            {industry.metrics && (
              <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/60 flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400 shrink-0" />
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {industry.metrics.label}
                  </div>
                  <div className="text-lg font-black text-blue-700 dark:text-blue-300 font-mono">
                    {industry.metrics.value}
                  </div>
                </div>
              </div>
            )}

            <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span>Tailored to Nepal Operations</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                SLA Supported
              </span>
            </div>
          </div>
        }
      />

      {/* Challenges & Solutions */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Challenges */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Unique Industry Challenges
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              The operational friction this vertical faces daily.
            </h3>
            <div className="space-y-3 pt-2">
              {industry.challenges.map((c, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-red-200/60 dark:border-red-900/40 bg-red-50/20 dark:bg-red-950/10 space-y-1"
                >
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                    {c.title}
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              The TASK SATHI Engineering Response
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Purpose-built systems designed for this domain.
            </h3>
            <div className="space-y-3 pt-2">
              {industry.solutions.map((s, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40 bg-emerald-50/20 dark:bg-emerald-950/10 space-y-1"
                >
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                    {s.title}
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Key Solutions Checklist */}
      <Section spacing="lg" background="subtle">
        <SectionHeader
          tagline="Domain Architecture"
          title="Engineered capabilities for this industry."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {industry.keySolutions.map((sol, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] flex items-center gap-3"
            >
              <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                {sol}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Workflow Steps */}
      <Section spacing="lg">
        <SectionHeader
          tagline="Operational Flow"
          title="How digital transformation operates end-to-end."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industry.workflow.map((w) => (
            <div
              key={w.step}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-3"
            >
              <span className="h-8 w-8 rounded-full bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-sm">
                {w.step}
              </span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                {w.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {w.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Example Use Cases */}
      {industry.exampleUseCases && industry.exampleUseCases.length > 0 && (
        <Section spacing="lg" background="subtle">
          <SectionHeader
            tagline="Real-World Deployments"
            title="Demonstrated impact across real organizations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {industry.exampleUseCases.map((uc, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-3"
              >
                <div className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
                  {uc.clientType}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {uc.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {uc.outcome}
                </p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Related Products & Services */}
      {(relatedServices.length > 0 || relatedProducts.length > 0) && (
        <Section spacing="lg">
          <SectionHeader
            tagline="Relevant Capabilities"
            title="Services & software built for this vertical."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedServices.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Engineering Services
                </h4>
                <div className="space-y-2">
                  {relatedServices.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.slug}`}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] hover:border-blue-500 transition-colors flex items-center justify-between block"
                    >
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {s.title}
                      </div>
                      <ArrowRight className="h-4 w-4 text-blue-600 shrink-0 ml-2" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {relatedProducts.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Software Products
                </h4>
                <div className="space-y-2">
                  {relatedProducts.map((p) => (
                    <Link
                      key={p.id}
                      to={`/products/${p.slug}`}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] hover:border-blue-500 transition-colors flex items-center justify-between block"
                    >
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {p.title}
                      </div>
                      <ArrowRight className="h-4 w-4 text-blue-600 shrink-0 ml-2" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Section>
      )}

      {/* FAQs */}
      {industry.faqs.length > 0 && (
        <Section spacing="lg" background="subtle">
          <SectionHeader
            tagline="Frequently Asked Questions"
            title={`Common questions about ${industry.title} software.`}
          />

          <div className="max-w-3xl mx-auto">
            <Accordion items={industry.faqs} />
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section spacing="lg">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-xl border border-slate-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Digitally transform your {industry.title} operations.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Our domain experts in Putalisadak are ready to structure a solution that fits your exact operating workflows.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/request-quote">
              <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Request Domain Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800">
                Contact Technical Team
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};
