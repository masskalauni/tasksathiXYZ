import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/src/components/ui/Container';
import { Section, SectionHeader } from '@/src/components/ui/Section';
import { Button } from '@/src/components/ui/Button';
import { SEO } from '@/src/components/seo/SEO';
import { siteConfig } from '@/src/config/site';
import { PageHero } from '@/src/components/layout/PageHero';
import {
  Building2,
  Code2,
  ShieldCheck,
  Zap,
  Target,
  HeartHandshake,
  Compass,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles,
  Award,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const principles = [
    {
      title: 'Real Engineering, No Fluff',
      description: 'We do not build flimsy templates or wrap generic scripts. We engineer resilient software with strict TypeScript typing, relational schemas, and comprehensive tests.',
      icon: <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: 'Built for Nepal’s Operational Reality',
      description: 'We know firsthand that software in Nepal must handle power blips, internet drops, dual Bikram Sambat dates, and local IRD tax compliance without crashing.',
      icon: <ShieldCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: 'Full Source Code Ownership',
      description: 'We believe clients should own their intellectual property and databases, free from hostile vendor lock-in or recurring per-user extortion fees.',
      icon: <HeartHandshake className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
    },
    {
      title: 'Long-Term Technical Partnership',
      description: 'We are not freelance mercenaries who disappear after launch. We provide ongoing 24/7 Kathmandu-based SLA monitoring, security audits, and feature evolutions.',
      icon: <Compass className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
    },
  ];

  const milestones = [
    {
      phase: 'Phase 1 • Foundation',
      title: 'Architectural Groundwork in Kathmandu',
      desc: 'Established our technical headquarters in Putalisadak to deliver custom software solutions for commercial enterprises and growing institutions in Nepal.',
    },
    {
      phase: 'Phase 2 • Domain Suites',
      title: 'Core Business Operating Suites',
      desc: 'Engineered specialized offline-first Point of Sale, multi-branch ERP engines, and healthcare diagnostic systems designed around local tax and operational workflows.',
    },
    {
      phase: 'Phase 3 • Intelligent Automation',
      title: 'AI & Multimodal Workflow Pipelines',
      desc: 'Introduced high-precision document OCR and bilingual business automation bots to eliminate manual clerical overhead for commercial enterprises.',
    },
  ];

  return (
    <>
      <SEO
        title="About Us"
        description="TASK SATHI is a technology engineering partner based in Putalisadak, Kathmandu, helping businesses transform through intelligent software, ERP, POS, and AI automation."
        canonicalPath="/about"
      />

      {/* Hero Section */}
      <PageHero
        align="split"
        badge="Technology Partner in Putalisadak, Kathmandu"
        badgeIcon={Building2}
        title="Building Intelligent Software for the Future of Business in Nepal."
        highlightText="Future of Business in Nepal"
        description="TASK SATHI is a Kathmandu-based software engineering and digital solutions firm. We help enterprises, healthcare networks, institutions, and growing businesses modernize through custom architectures, ERP, offline POS, and AI automation."
        breadcrumbs={[{ label: 'About Us' }]}
        highlights={[
          { icon: ShieldCheck, label: 'Nepal IRD Certified Workflows' },
          { icon: Code2, label: 'Strict TypeScript & Relational SQL' },
          { icon: MapPin, label: 'Putalisadak Engineering Team' },
          { icon: Award, label: '100% Source Code Delivery' },
        ]}
        actions={
          <>
            <Link to="/request-quote">
              <Button variant="primary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Partner With Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="md" leftIcon={<Phone className="h-4 w-4 text-emerald-500" />}>
                Direct Desk: +977 9851359812
              </Button>
            </Link>
          </>
        }
        rightContent={
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md p-6 sm:p-7 shadow-xl shadow-slate-900/5 dark:shadow-none space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold font-mono uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  Engineering HQ Active
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">Putalisadak, Ward 28</span>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800/80 space-y-1">
                <div className="text-xl font-extrabold text-blue-600 dark:text-blue-400">100%</div>
                <div className="text-xs font-semibold text-slate-900 dark:text-white">IP Ownership</div>
                <div className="text-[11px] text-slate-500">Full source code access</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800/80 space-y-1">
                <div className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">24/7</div>
                <div className="text-xs font-semibold text-slate-900 dark:text-white">Local Support</div>
                <div className="text-[11px] text-slate-500">Kathmandu SLA monitoring</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800/80 space-y-1">
                <div className="text-xl font-extrabold text-purple-600 dark:text-purple-400">BS & AD</div>
                <div className="text-xs font-semibold text-slate-900 dark:text-white">Dual Calendar</div>
                <div className="text-[11px] text-slate-500">Bikram Sambat native</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800/80 space-y-1">
                <div className="text-xl font-extrabold text-amber-600 dark:text-amber-400">13% VAT</div>
                <div className="text-xs font-semibold text-slate-900 dark:text-white">IRD Compliant</div>
                <div className="text-[11px] text-slate-500">Integrated audit logs</div>
              </div>
            </div>

            <div className="pt-2 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">
              Registered with Office of Company Registrar, Nepal
            </div>
          </div>
        }
      />

      {/* Mission & Vision */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-4">
            <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              To engineer dependable, high-performance software systems that eliminate operational bottlenecks, automate repetitive labor, and empower organizations in Nepal to scale with confidence.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-4">
            <div className="h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              To be the most trusted software engineering partner in Nepal—recognized for unwavering technical integrity, accessible customer service, and long-term client success.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Nepal Needs Better Software */}
      <Section spacing="lg" background="subtle">
        <SectionHeader
          tagline="The Local Reality"
          title="Why businesses in Nepal need purpose-built engineering."
          description="Generic foreign SaaS tools ignore local requirements, while flimsy agency templates break under load."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-2">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Tax & Regulatory Compliance
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Software must strictly generate sequential tax invoices and sales/purchase books meeting Inland Revenue Department (IRD) standards without workarounds.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-2">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Dual B.S. & A.D. Calendars
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Every invoice, student mark sheet, hotel folio, and financial ledger must support seamless Bikram Sambat dates alongside standard Gregorian timestamps.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-2">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Local Hardware & Payment Sync
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Instant hardware integration with 80mm thermal receipt printers, electronic weighing scales, and Fonepay QR payment rails.
            </p>
          </div>
        </div>
      </Section>

      {/* Core Engineering Principles */}
      <Section spacing="lg">
        <SectionHeader
          tagline="Our Standards"
          title="The engineering principles behind everything we ship."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-3"
            >
              <div className="h-12 w-12 rounded-xl bg-slate-50 dark:bg-slate-800/60 flex items-center justify-center">
                {p.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                {p.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Evolution Journey */}
      <Section spacing="lg" background="subtle">
        <SectionHeader
          tagline="Our Trajectory"
          title="A history of steady, principled growth."
        />

        <div className="space-y-4 max-w-3xl mx-auto">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-2"
            >
              <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {m.phase}
              </span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                {m.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Office & Direct Contact Summary */}
      <Section spacing="lg">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Headquarters
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Based in Putalisadak, Kathmandu.
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Visit our office or call our engineering desk for in-person project scoping, software demonstrations, and on-site hardware consultations.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <MapPin className="h-4 w-4 text-red-500 shrink-0" />
                  <span>{siteConfig.contact.address.formatted}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <Phone className="h-4 w-4 text-emerald-500 shrink-0" />
                  <a href={siteConfig.contact.phone.href} className="hover:text-blue-600 font-mono font-semibold">
                    {siteConfig.contact.phone.display}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <Mail className="h-4 w-4 text-blue-500 shrink-0" />
                  <a href={siteConfig.contact.email.href} className="hover:text-blue-600 font-mono">
                    {siteConfig.contact.email.primary}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 space-y-4 text-center">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Ready to talk about your project?
              </h4>
              <p className="text-xs text-slate-500">
                Get in touch for a direct, non-binding technical scoping consultation.
              </p>
              <div className="flex flex-col gap-2.5">
                <Link to="/request-quote">
                  <Button variant="secondary" size="md" fullWidth>
                    Request a Quote
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="md" fullWidth>
                    Leave a Message
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
