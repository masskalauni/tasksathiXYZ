import { PricingCategory } from '@/src/types';

export const pricingPhilosophy = {
  headline: 'Transparent, Requirement-Driven Pricing',
  tagline: 'No hidden fees. No misleading flat rates. Scoped around your exact operational needs.',
  quote:
    'Every business is different. We scope projects based on requirements, complexity, integration depth, and launch timeline—delivering clear deliverables with zero ambiguity.',
  principles: [
    {
      title: 'Full Source Code Ownership',
      description: 'Unlike closed SaaS platforms with perpetual per-user licensing fees, you own your custom codebase and database completely.',
    },
    {
      title: 'Fixed-Price Milestones',
      description: 'Once specifications are finalized, development is delivered in fixed-price milestone sprints with guaranteed deliverables.',
    },
    {
      title: 'No Hidden Maintenance Traps',
      description: 'Clear post-launch warranty and optional SLA support tiers with defined response times and backup guarantees.',
    },
  ],
  costFactors: [
    { factor: 'Data Migration Scope', detail: 'Volume and condition of legacy records from Excel sheets, paper ledgers, or legacy databases.' },
    { factor: 'Third-Party Hardware & APIs', detail: 'Interfacing with thermal printers, biometric attendance devices, lab analyzers, or payment gateways.' },
    { factor: 'Multi-Location Concurrency', detail: 'Number of simultaneous operational branches, warehouses, or high-throughput counters.' },
    { factor: 'Deployment Architecture', detail: 'Dedicated secure cloud server setup, on-premise local intranet installation, or hybrid synchronization.' },
  ],
};

export const pricingCategories: PricingCategory[] = [
  {
    id: 'web-presence',
    title: 'Modern Web Applications & Portals',
    subtitle: 'High-performance websites, client portals, and lead generation platforms',
    startingRange: 'Starting from NPR 45,000 (Based on Scope)',
    pricingType: 'Fixed Scope / Milestones',
    description:
      'Engineered with modern TypeScript/Next.js for sub-second load times, 100/100 Core Web Vitals, conversion architecture, and local search SEO.',
    bestFor: 'Growing companies, professional consultancies, schools, and service businesses needing a serious web presence.',
    deliverables: [
      'Bespoke responsive UI/UX design (No generic templates)',
      'Sub-second mobile speed optimization',
      'Technical SEO with Schema.org JSON-LD markup',
      'Integrated lead capture forms & analytics tracking',
      'Domain, SSL, and high-security deployment configuration',
    ],
    typicalTimeline: '2 to 4 Weeks',
    factors: ['Number of interactive page templates', 'Client portal features', 'Custom interactive calculators / forms'],
  },
  {
    id: 'business-systems',
    title: 'Business Systems (ERP / POS / CRM)',
    subtitle: 'Point of Sale, inventory warehouses, customer pipelines, and accounting ledgers',
    startingRange: 'Custom Scoped (Modular Tiers)',
    pricingType: 'Custom Scope & Deployment',
    description:
      'Tailored operational engines designed around your specific business rules, Nepal VAT/IRD compliance, multi-branch syncing, and hardware integration.',
    bestFor: 'Supermarkets, distributors, retail chains, clinics, restaurants, and growing trading enterprises.',
    deliverables: [
      'Custom database schema & relational data architecture',
      'Offline-tolerant counter billing / POS interface',
      'Multi-warehouse stock balance & batch tracking',
      'Nepal IRD compliant sequential tax invoicing & VAT registers',
      'On-site hardware testing (thermal printers, barcode scanners)',
      'Staff onboarding and administrative training sessions in Kathmandu',
    ],
    typicalTimeline: '4 to 10 Weeks',
    factors: ['Number of active billing counters / branches', 'Legacy data migration complexity', 'Hardware driver customization'],
  },
  {
    id: 'mobile-applications',
    title: 'Mobile Applications (iOS & Android)',
    subtitle: 'Cross-platform mobile apps for field staff and end customers',
    startingRange: 'Custom Scoped (By Feature Matrix)',
    pricingType: 'Custom Scope & Deployment',
    description:
      'Native-performance mobile apps built with React Native and Flutter, featuring offline data persistence, push notifications, and hardware integration.',
    bestFor: 'Field sales teams, delivery fleets, patient portals, and customer loyalty mobile experiences.',
    deliverables: [
      'Single codebase delivering native iOS and Android apps',
      'Offline data caching & background cloud sync',
      'Push notification gateway setup',
      'Payment gateway hooks (eSewa, Khalti, Fonepay)',
      'Full App Store and Google Play Store submission management',
    ],
    typicalTimeline: '6 to 12 Weeks',
    factors: ['Biometric / GPS / Camera hardware integration depth', 'Offline database synchronization requirements'],
  },
  {
    id: 'ai-automation',
    title: 'AI & Workflow Automation',
    subtitle: 'Intelligent document parsers, bilingual support bots, and automated data pipelines',
    startingRange: 'Custom Scoped (By Workflow Complexity)',
    pricingType: 'Fixed Scope / Milestones',
    description:
      'Multimodal AI pipelines that extract structured data from paper invoices and customs bills, alongside bilingual Nepali/English support agents.',
    bestFor: 'Enterprises handling high volumes of invoices, paperwork, or repetitive customer support inquiries.',
    deliverables: [
      'Document OCR parsing model with arithmetic validation',
      'Bilingual (Nepali/English) automated customer response bot',
      'Direct integration with existing ERP or accounting databases',
      'Private enterprise model isolation (no public training)',
    ],
    typicalTimeline: '3 to 6 Weeks',
    factors: ['Document layout diversity', 'Volume of monthly processing', 'Integration depth with legacy software'],
  },
  {
    id: 'enterprise-custom',
    title: 'Enterprise Architecture & Legacy Modernization',
    subtitle: 'Large-scale multi-subsidiary platforms, microservices, and dedicated engineering teams',
    startingRange: 'Comprehensive Custom Engagement',
    pricingType: 'Sprint / Dedicated Team',
    description:
      'Full-lifecycle enterprise software engineering, legacy database migration, 24/7 mission-critical SLAs, and dedicated engineering retainers.',
    bestFor: 'Conglomerates, multi-specialty hospital chains, large academic institutions, and financial organizations.',
    deliverables: [
      'Comprehensive system architecture blueprint & threat model',
      'Zero-downtime phased legacy data migration strategy',
      'Role-based multi-subsidiary governance matrix',
      'Automated disaster recovery & continuous replication',
      '24/7 dedicated engineering support with guaranteed response SLAs',
    ],
    typicalTimeline: 'Phased Agile Sprints (12+ Weeks)',
    factors: ['Regulatory compliance standards', 'Sub-system integrations', 'Dedicated engineering headcount'],
  },
];
