import React from 'react';
import { Link } from 'react-router-dom';
import { ProductItem } from '@/src/types';
import { servicesData } from '@/src/data/services';
import { industriesData } from '@/src/data/industries';
import { Container } from '@/src/components/ui/Container';
import { Section, SectionHeader } from '@/src/components/ui/Section';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { Accordion } from '@/src/components/ui/Accordion';
import { SoftwareMockup } from '@/src/components/mockups/SoftwareMockup';
import { SEO } from '@/src/components/seo/SEO';
import { PageHero } from '@/src/components/layout/PageHero';
import {
  Layers,
  Users,
  Receipt,
  FileSpreadsheet,
  Boxes,
  Stethoscope,
  GraduationCap,
  Building2,
  Utensils,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Phone,
  HelpCircle,
  TrendingUp,
  Sparkles,
  Server,
  Lock,
} from 'lucide-react';

export interface ProductPageTemplateProps {
  product: ProductItem;
}

export const ProductPageTemplate: React.FC<ProductPageTemplateProps> = ({ product }) => {
  const getIcon = (name: string) => {
    const props = { className: 'h-8 w-8 text-blue-600 dark:text-blue-400' };
    switch (name) {
      case 'Layers': return <Layers {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Receipt': return <Receipt {...props} />;
      case 'FileSpreadsheet': return <FileSpreadsheet {...props} />;
      case 'Boxes': return <Boxes {...props} />;
      case 'Stethoscope': return <Stethoscope {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'Building2': return <Building2 {...props} />;
      case 'Utensils': return <Utensils {...props} />;
      default: return <Layers {...props} />;
    }
  };

  const relatedServices = servicesData.filter((s) =>
    product.relatedServices?.includes(s.id)
  );

  const relatedIndustries = industriesData.filter((ind) =>
    product.relatedIndustries?.includes(ind.id)
  );

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.title,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Cloud, Desktop',
    description: product.description,
    provider: {
      '@type': 'Organization',
      name: 'TASK SATHI',
      url: 'https://tasksathi.com',
    },
  };

  return (
    <>
      <SEO
        title={product.title}
        description={product.description}
        canonicalPath={`/products/${product.slug}`}
        type="product"
        schema={schema}
      />

      {/* Product Hero */}
      <PageHero
        align="split"
        badge={product.category}
        badgeIcon={Sparkles}
        title={product.title}
        description={product.description}
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: product.title },
        ]}
        highlights={product.features.slice(0, 4).map((f) => ({ icon: CheckCircle2, label: f }))}
        actions={
          <>
            <Link to="/request-quote">
              <Button variant="primary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Request Live Demo
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="md">
                Scope & Licensing
              </Button>
            </Link>
          </>
        }
        rightContent={
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md p-6 sm:p-7 shadow-xl shadow-slate-900/5 dark:shadow-none space-y-5">
            <div className="flex items-center gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center shrink-0 shadow-xs">
                {getIcon(product.iconName)}
              </div>
              <div>
                <div className="text-xs font-bold font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Engineered Product Suite
                </div>
                <div className="text-lg font-extrabold text-slate-900 dark:text-white">
                  {product.title}
                </div>
                <div className="text-xs text-slate-500">{product.tagline}</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Product Specifications
              </div>
              <div className="space-y-2">
                {product.deliverables.slice(0, 3).map((d, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1 font-medium">
                <Server className="h-3.5 w-3.5 text-blue-500" />
                Cloud or Local Server
              </span>
              <span className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                <Lock className="h-3.5 w-3.5" />
                100% Data Sovereignty
              </span>
            </div>
          </div>
        }
      />

      {/* Interactive Software UI Preview Mockup */}
      {product.mockupData && (
        <Section spacing="lg">
          <SectionHeader
            tagline="Product Interface Preview"
            title="Clean, high-density interface built for daily operations."
            description="Designed for speed, zero visual clutter, and accessible keyboard navigation."
          />

          <div className="max-w-5xl mx-auto">
            <SoftwareMockup data={product.mockupData} />
          </div>
        </Section>
      )}

      {/* Problems Solved */}
      <Section spacing="lg" background="subtle">
        <SectionHeader
          tagline="Operational Pain Points"
          title="What makes current manual workflows break down."
          description={`Common bottlenecks that ${product.title} eliminates completely.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.problemsSolved.map((prob, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-red-200/60 dark:border-red-900/40 bg-white dark:bg-[#111827] space-y-2"
            >
              <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Pain Point 0{i + 1}
              </div>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed pt-1">
                {prob}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Key Feature Modules */}
      <Section spacing="lg">
        <SectionHeader
          tagline="Core Architecture"
          title="Modular capabilities built for high-throughput."
          description="Every component is pre-engineered, customizable, and rigorously tested."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.features.map((feat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] shadow-xs space-y-2"
            >
              <div className="h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-mono font-bold flex items-center justify-center text-xs">
                0{i + 1}
              </div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white leading-snug pt-1">
                {feat}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Operational Workflow Steps */}
      <Section spacing="lg" background="subtle">
        <SectionHeader
          tagline="Daily Operational Workflow"
          title={`How your team uses ${product.title} step-by-step.`}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.workflowSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-3"
            >
              <span className="h-8 w-8 rounded-full bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-sm">
                {step.step}
              </span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                {step.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Measurable Benefits */}
      <Section spacing="lg">
        <SectionHeader
          tagline="Business Impact"
          title="Direct operational returns and efficiencies."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {product.benefits.map((b, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-emerald-200/70 dark:border-emerald-900/40 bg-emerald-50/20 dark:bg-emerald-950/10 space-y-2"
            >
              <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
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

      {/* Deployment & Pricing Model Box */}
      {product.pricingPlaceholder && (
        <Section spacing="md" background="subtle">
          <div className="max-w-4xl mx-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-6 sm:p-10 space-y-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Deployment Model
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {product.pricingPlaceholder.model}
                </h3>
              </div>
              <Link to="/pricing">
                <Badge variant="outline" size="md">
                  View Transparent Pricing Guide
                </Badge>
              </Link>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {product.pricingPlaceholder.note}
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Included in Deployment Scope:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.pricingPlaceholder.featuresIncluded.map((inc, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* FAQs */}
      {product.faqs.length > 0 && (
        <Section spacing="lg">
          <SectionHeader
            tagline="Frequently Asked Questions"
            title={`Common questions regarding ${product.title}.`}
          />

          <div className="max-w-3xl mx-auto">
            <Accordion items={product.faqs} />
          </div>
        </Section>
      )}

      {/* Bottom CTA */}
      <Section spacing="lg" background="subtle">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-xl border border-slate-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Ready to deploy {product.title}?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Schedule an interactive demonstration or request a deployment scope tailored to your operational requirements.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/request-quote">
              <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Request Demo & Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800">
                Speak With An Advisor
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};
