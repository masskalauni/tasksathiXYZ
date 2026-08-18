import React from 'react';
import { Section, SectionHeader } from '@/src/components/ui/Section';
import { Card } from '@/src/components/ui/Card';
import { Badge } from '@/src/components/ui/Badge';
import {
  Globe,
  Smartphone,
  Layers,
  Bot,
  Cloud,
  BarChart3,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  const capabilities = [
    {
      icon: <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: 'Web Applications',
      tagline: 'High-throughput, reactive web architectures',
      description:
        'Custom client portals, administrative command centers, SaaS platforms, and customer-facing web apps optimized for 100/100 Core Web Vitals.',
      highlights: ['React / Next.js', 'High concurrency APIs', 'Role-based access matrix'],
    },
    {
      icon: <Smartphone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      title: 'Mobile Applications',
      tagline: 'Cross-platform iOS & Android engineering',
      description:
        'Fluid mobile apps with offline caching, push messaging, biometric security, camera barcode scanning, and instant cloud sync.',
      highlights: ['Flutter & React Native', 'Offline-first database', 'Push notifications'],
    },
    {
      icon: <Layers className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      title: 'Enterprise Systems',
      tagline: 'Mission-critical business ERP & operations',
      description:
        'Full-scale ERP, billing engines, inventory warehouses, and hospital/school information systems built around strict operational standards.',
      highlights: ['IRD & VAT compliance', 'Multi-warehouse sync', 'Double-entry accounting'],
    },
    {
      icon: <Bot className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      title: 'AI Automation & Agents',
      tagline: 'Workflow bots and document intelligence',
      description:
        'Extract data from invoices, automate customer inquiries with bilingual Nepali/English AI bots, and eliminate repetitive clerical bottlenecks.',
      highlights: ['Document OCR parsing', 'Custom LLM agents', 'Automated data pipelines'],
    },
    {
      icon: <Cloud className="h-6 w-6 text-sky-600 dark:text-sky-400" />,
      title: 'Cloud Infrastructure',
      tagline: 'Zero-downtime microservices & DevOps',
      description:
        'Containerized Docker & Kubernetes deployments, auto-scaling backend clusters, automated nightly backups, and 99.9% uptime SLA.',
      highlights: ['Auto-scaling clusters', 'Automated daily backups', 'SSL & DDoS shielding'],
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
      title: 'Business Analytics',
      tagline: 'Real-time telemetry and KPI dashboards',
      description:
        'Turn raw operational data into actionable executive insights with custom financial charts, sales velocity graphs, and cash flow forecasts.',
      highlights: ['Live revenue telemetry', 'Export to Excel/PDF', 'Custom KPI alert rules'],
    },
  ];

  return (
    <Section id="capabilities" spacing="lg" background="subtle">
      <SectionHeader
        badge={
          <Badge variant="accent" size="md">
            Engineered for Scale
          </Badge>
        }
        tagline="Core Capabilities"
        nepaliTagline="आधुनिक प्रविधि र उच्च क्षमतायुक्त सफ्टवेयर इन्जिनियरिङ"
        title="What TASK SATHI builds for you."
        description="We combine modern software engineering principles with deep domain understanding to deliver resilient, scalable, and secure technology solutions."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((cap, idx) => (
          <Card
            key={idx}
            className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#111827] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="h-12 w-12 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center mb-5">
                {cap.icon}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                {cap.title}
              </h3>
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                {cap.tagline}
              </p>

              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {cap.description}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
              {cap.highlights.map((h, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                  {h}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
