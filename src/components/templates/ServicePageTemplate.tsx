import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '@/src/types';
import { productsData } from '@/src/data/products';
import { industriesData } from '@/src/data/industries';
import { Container } from '@/src/components/ui/Container';
import { Section, SectionHeader } from '@/src/components/ui/Section';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { Accordion } from '@/src/components/ui/Accordion';
import { SEO } from '@/src/components/seo/SEO';
import { PageHero } from '@/src/components/layout/PageHero';
import { BabalHostPartnerCard } from '@/src/components/marketing/BabalHostPartnerCard';
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
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Phone,
  HelpCircle,
  Clock,
  Sparkles,
} from 'lucide-react';

export interface ServicePageTemplateProps {
  service: ServiceItem;
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ service }) => {
  const getIcon = (name: string) => {
    const props = { className: 'h-8 w-8 text-blue-600 dark:text-blue-400' };
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
      case 'Bot': return <Bot {...props} />;
      case 'Cloud': return <Cloud {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      default: return <Code2 {...props} />;
    }
  };

  const relatedProducts = productsData.filter((p) =>
    service.relatedProducts?.includes(p.id)
  );

  const relatedIndustries = industriesData.filter((ind) =>
    service.relatedIndustries?.includes(ind.id)
  );

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'Organization',
      name: 'TASK SATHI',
      url: 'https://tasksathi.com',
    },
    description: service.shortDescription,
    areaServed: 'Nepal',
  };

  return (
    <>
      <SEO
        title={service.title}
        description={service.shortDescription}
        canonicalPath={`/services/${service.slug}`}
        type="service"
        schema={schema}
      />

      {/* Hero Section */}
      <PageHero
        align="split"
        badge={service.categoryLabel}
        badgeIcon={Sparkles}
        title={service.title}
        description={service.fullDescription}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
        highlights={service.features.slice(0, 4).map((f) => ({ icon: CheckCircle2, label: f }))}
        actions={
          <>
            <Link to="/request-quote">
              <Button variant="primary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Get an Estimate
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="md" leftIcon={<Phone className="h-4 w-4 text-emerald-500" />}>
                Talk to an Engineer
              </Button>
            </Link>
          </>
        }
        rightContent={
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md p-6 sm:p-7 shadow-xl shadow-slate-900/5 dark:shadow-none space-y-5">
            <div className="flex items-center gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center shrink-0 shadow-xs">
                {getIcon(service.iconName)}
              </div>
              <div>
                <div className="text-xs font-bold font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Service Capability
                </div>
                <div className="text-lg font-extrabold text-slate-900 dark:text-white">
                  {service.title}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Core Engineering Deliverables
              </div>
              <div className="space-y-2">
                {service.deliverables.slice(0, 4).map((d, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1 font-medium">
                <Clock className="h-3.5 w-3.5" />
                Delivery: 2 - 8 Sprints
              </span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                100% Code Handover
              </span>
            </div>
          </div>
        }
      />

      {/* Problem & Solution Asymmetric Grid */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* The Problem */}
          <div className="rounded-2xl border border-red-200/70 dark:border-red-900/40 bg-red-50/30 dark:bg-red-950/10 p-6 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              The Business Problem
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Why current off-the-shelf options break down
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {service.problem}
            </p>
          </div>

          {/* The Solution */}
          <div className="rounded-2xl border border-emerald-200/70 dark:border-emerald-900/40 bg-emerald-50/30 dark:bg-emerald-950/10 p-6 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              The TASK SATHI Approach
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              How we architect the right solution
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {service.solution}
            </p>
          </div>
        </div>
      </Section>

      {/* Engineered Features */}
      <Section spacing="lg" background="subtle">
        <SectionHeader
          tagline="Capabilities Matrix"
          title="Key features engineered into every deployment."
          description="We do not cut corners. Every module is built with strict typing, role-based security, and high test coverage."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {service.features.map((feat, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] shadow-xs flex items-start gap-3"
            >
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {feat}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Business Outcomes & Benefits */}
      <Section spacing="lg">
        <SectionHeader
          tagline="Measurable Outcomes"
          title="Real business benefits you can expect."
          description="Software is an investment. We focus relentlessly on outcomes that save time, eliminate errors, and grow revenue."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.benefits.map((b, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-2"
            >
              <div className="h-8 w-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-mono font-bold flex items-center justify-center text-sm">
                0{i + 1}
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white pt-2">
                {b.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 7-Step Engineering Process */}
      {service.processSteps && (
        <Section spacing="lg" background="subtle">
          <SectionHeader
            tagline="Engineering Lifecycle"
            title="How we build from discovery to continuous improvement."
            description="Our disciplined 7-step process ensures predictable milestones and zero surprise delays."
          />

          <div className="space-y-4 max-w-4xl mx-auto">
            {service.processSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] flex items-start gap-4"
              >
                <span className="h-8 w-8 rounded-full bg-blue-600 text-white font-mono font-bold flex items-center justify-center shrink-0 text-sm">
                  {step.step}
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Technology Stack */}
      <Section spacing="md">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-white p-8 sm:p-10 text-center space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Technologies Powering This Solution
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            We use only battle-tested, high-concurrency modern frameworks. No unmaintained packages or closed proprietary locks.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {service.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 font-mono text-xs font-semibold text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Recommended Hosting Partner for Web, Cloud, & Infrastructure Services */}
      {(service.slug === 'cloud-solutions' ||
        service.slug === 'web-development' ||
        service.slug === 'ecommerce-systems' ||
        service.slug === 'custom-software' ||
        service.category === 'software') && (
        <Section spacing="md">
          <BabalHostPartnerCard variant="banner" />
        </Section>
      )}

      {/* Related Products & Industries */}
      {(relatedProducts.length > 0 || relatedIndustries.length > 0) && (
        <Section spacing="lg" background="subtle">
          <SectionHeader
            tagline="Ecosystem Links"
            title="Related software products & industry verticals."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProducts.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Ready Software Products
                </h4>
                <div className="space-y-2">
                  {relatedProducts.map((p) => (
                    <Link
                      key={p.id}
                      to={`/products/${p.slug}`}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] hover:border-blue-500 transition-colors flex items-center justify-between block"
                    >
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          {p.title}
                        </div>
                        <div className="text-xs text-slate-500">{p.tagline}</div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-blue-600 shrink-0 ml-2" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {relatedIndustries.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Applicable Industry Sectors
                </h4>
                <div className="space-y-2">
                  {relatedIndustries.map((ind) => (
                    <Link
                      key={ind.id}
                      to={`/industries/${ind.slug}`}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] hover:border-blue-500 transition-colors flex items-center justify-between block"
                    >
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          {ind.title}
                        </div>
                        <div className="text-xs text-slate-500">{ind.subtitle}</div>
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

      {/* Service Specific FAQs */}
      {service.faqs.length > 0 && (
        <Section spacing="lg">
          <SectionHeader
            tagline="Frequently Asked Questions"
            title={`Common questions about ${service.title}.`}
          />

          <div className="max-w-3xl mx-auto">
            <Accordion items={service.faqs} />
          </div>
        </Section>
      )}

      {/* Final Call to Action */}
      <Section spacing="lg" background="subtle">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-xl border border-slate-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Let's build the right solution for your business.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Speak directly with our engineering team in Putalisadak, Kathmandu to scope requirements and get a detailed timeline.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/request-quote">
              <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Request a Quote
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
