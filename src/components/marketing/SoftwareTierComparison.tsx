import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import {
  Check,
  Minus,
  Sparkles,
  Shield,
  Zap,
  Server,
  Lock,
  Headphones,
  ArrowRight,
  HelpCircle,
  Layers,
  Code2,
  Building,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export interface TierInfo {
  id: 'standard' | 'professional' | 'enterprise';
  name: string;
  badge?: string;
  tagline: string;
  bestFor: string;
  deliveryTime: string;
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}

export const TIERS: TierInfo[] = [
  {
    id: 'standard',
    name: 'Standard Tier',
    tagline: 'Essential Digital Foundation',
    bestFor: 'Startups, single-branch operations, and rapid MVP market launches.',
    deliveryTime: '2 – 4 Weeks',
    ctaText: 'Select Standard Tier',
    ctaLink: '/request-quote?tier=standard',
  },
  {
    id: 'professional',
    name: 'Professional Tier',
    badge: 'Most Recommended',
    tagline: 'Scalable Growth Engine',
    bestFor: 'Growing enterprises, multi-branch retailers, and medium-to-large business automation.',
    deliveryTime: '4 – 8 Weeks',
    isPopular: true,
    ctaText: 'Select Professional Tier',
    ctaLink: '/request-quote?tier=professional',
  },
  {
    id: 'enterprise',
    name: 'Enterprise Tier',
    badge: 'Mission Critical',
    tagline: 'Bespoke Distributed Systems',
    bestFor: 'Hospitals, banks, manufacturing conglomerates, and complex multi-org platforms.',
    deliveryTime: '8 – 16+ Weeks',
    ctaText: 'Consult Enterprise Architect',
    ctaLink: '/request-quote?tier=enterprise',
  },
];

interface ComparisonFeature {
  name: string;
  tooltip?: string;
  standard: string | boolean;
  professional: string | boolean;
  enterprise: string | boolean;
}

interface ComparisonCategory {
  title: string;
  icon: React.ElementType;
  description: string;
  features: ComparisonFeature[];
}

export const COMPARISON_CATEGORIES: ComparisonCategory[] = [
  {
    title: 'Architecture & Engineering Scope',
    icon: Code2,
    description: 'Underlying codebase craftsmanship, tech stack depth, and modularity.',
    features: [
      {
        name: 'Architecture Pattern',
        tooltip: 'Structural framework design ensuring maintainability and scale.',
        standard: 'Structured Modular Monolith',
        professional: 'Clean Layered Architecture',
        enterprise: 'Event-Driven Microservices / Mesh',
      },
      {
        name: 'UI/UX Design Process',
        tooltip: 'Degree of bespoke interface design and prototyping provided.',
        standard: 'Design System & Component Library',
        professional: 'Custom Figma System + Interactive Prototype',
        enterprise: 'Bespoke Multi-Brand Design System & UX Research',
      },
      {
        name: 'Bilingual Support (Nepali + English)',
        standard: true,
        professional: true,
        enterprise: true,
      },
      {
        name: 'Source Code & IP Ownership',
        tooltip: 'Legal ownership and repository handover upon delivery.',
        standard: '100% Full IP Transfer',
        professional: '100% Full IP Transfer',
        enterprise: '100% Full IP Transfer + Escrow Support',
      },
      {
        name: 'Multi-Tenant / Branch Isolation',
        tooltip: 'Support for multiple branch databases and corporate hierarchies.',
        standard: 'Single Branch / Location',
        professional: 'Multi-Branch (Up to 15 branches)',
        enterprise: 'Unlimited Hierarchical Multi-Org / Tenants',
      },
    ],
  },
  {
    title: 'Performance, Data & Reliability',
    icon: Zap,
    description: 'System speed, uptime benchmarks, and data sync capabilities.',
    features: [
      {
        name: 'Concurrent Active Users Capacity',
        standard: 'Up to 500 active users',
        professional: 'Up to 10,000 active users',
        enterprise: '100,000+ Distributed Concurrency',
      },
      {
        name: 'Real-Time Sync & WebSockets',
        tooltip: 'Instant order updates, live stock movements, and notifications.',
        standard: 'Basic Polling',
        professional: 'Low-latency WebSockets & SSE',
        enterprise: 'High-throughput Kafka / Redis PubSub',
      },
      {
        name: 'Offline-First Local Sync Engine',
        tooltip: 'Allows cashiers or field workers to operate without active internet.',
        standard: 'IndexedDB Local Cache',
        professional: 'Bidirectional Conflict-Free Sync',
        enterprise: 'Industrial Multi-Node Edge Sync & Queueing',
      },
      {
        name: 'Target Uptime SLA',
        standard: '99.5% Uptime',
        professional: '99.9% Uptime',
        enterprise: '99.99% Financially-Backed SLA',
      },
      {
        name: 'Database Backup & Recovery',
        standard: 'Daily Automated Cloud Backups',
        professional: 'Point-in-Time Recovery (PITR) + Geo-Replication',
        enterprise: 'Instant Active-Active Multi-Zone Failover',
      },
    ],
  },
  {
    title: 'Integrations & Nepal Ecosystem',
    icon: Layers,
    description: 'Local regulatory compliance, fiscal billing, and peripheral hardware.',
    features: [
      {
        name: 'Nepal Payment Gateways (eSewa, Khalti, ConnectIPS, Fonepay)',
        standard: 'Up to 2 Gateways',
        professional: 'All 4 Gateways + Dynamic QR',
        enterprise: 'All Local + International (Stripe/PayPal/Bank APM)',
      },
      {
        name: 'Nepal IRD Real-Time E-Billing Verification',
        tooltip: 'Automated direct sync with Inland Revenue Department servers.',
        standard: 'IRD Compliant Invoicing Template',
        professional: 'Direct IRD API Sync Module',
        enterprise: 'Real-Time IRD Sync + Fiscal Audit Vault',
      },
      {
        name: 'POS Hardware Drivers (Thermal printers, Barcode/RFID, Weigh Scales)',
        standard: 'Standard Browser Printing (ESC/POS)',
        professional: 'Direct USB/LAN/Bluetooth Printer Engine',
        enterprise: 'Custom IoT Gateway & Industrial Hardware Drivers',
      },
      {
        name: 'SMS & WhatsApp Notification Gateways',
        standard: 'Sparrow/Aakash SMS Gateway',
        professional: 'SMS + Automated WhatsApp Cloud API',
        enterprise: 'Omnichannel Notification Mesh (SMS, WhatsApp, Email, Push)',
      },
      {
        name: 'Custom 3rd-Party ERP / Legacy System APIs',
        standard: 'Standard REST Export/Import',
        professional: 'Custom REST & GraphQL Endpoints',
        enterprise: 'Enterprise SAP / Tally / Oracle Direct Adapters',
      },
    ],
  },
  {
    title: 'Security, Access Control & Compliance',
    icon: Lock,
    description: 'Zero-trust authentication, encryption standards, and compliance.',
    features: [
      {
        name: 'Access Control Model',
        standard: 'Standard Role-Based (RBAC)',
        professional: 'Granular Permissions Matrix per Department',
        enterprise: 'Attribute-Based (ABAC) & Dynamic Security Policies',
      },
      {
        name: 'Single Sign-On (SSO) & MFA',
        standard: 'Email OTP & Password',
        professional: 'MFA (Google Auth / SMS) + Google SSO',
        enterprise: 'Enterprise SAML 2.0 / Okta / Azure AD SSO',
      },
      {
        name: 'Encryption Standards',
        standard: 'TLS 1.3 & AES-256 at Rest',
        professional: 'TLS 1.3 & AES-256 + Encrypted Backups',
        enterprise: 'End-to-End Field-Level Encryption & Custom HSM Keys',
      },
      {
        name: 'Immutable Audit Trail & Activity Logging',
        standard: 'Basic Event Logs (30 days)',
        professional: 'Comprehensive User Audit Trail (1 Year)',
        enterprise: 'Tamper-Proof SIEM Export & Forensic Auditing (7 Years)',
      },
      {
        name: 'Penetration Testing & Security Review',
        standard: 'Automated SAST / Vulnerability Scan',
        professional: 'Pre-launch OWASP Top 10 Security Audit',
        enterprise: 'Third-Party Penetration Test & Formal Certification',
      },
    ],
  },
  {
    title: 'Deployment, Maintenance & Support SLA',
    icon: Headphones,
    description: 'Hosting flexibility, warranty guarantee, and direct engineer access.',
    features: [
      {
        name: 'Deployment Environment',
        standard: 'Managed Cloud (AWS / GCP / DigitalOcean)',
        professional: 'Hybrid or Dedicated Virtual Private Cloud (VPC)',
        enterprise: 'On-Premises, Air-Gapped, or Multi-Region Cloud',
      },
      {
        name: 'CI/CD Automated Deployment Pipelines',
        standard: 'Standard GitHub Actions Pipeline',
        professional: 'Staging, UAT & Production Blue/Green Pipelines',
        enterprise: 'Zero-Downtime Canary Deployments & GitOps Governance',
      },
      {
        name: 'Included Free Warranty & Bug-Fix Period',
        standard: '30 Days Post-Launch',
        professional: '90 Days Post-Launch',
        enterprise: '180 Days Post-Launch + Lifetime Retainer Options',
      },
      {
        name: 'Staff Training & Knowledge Handover',
        standard: 'User Manual (PDF) + 1 Live Training Session',
        professional: 'Video Courseware + Role-Specific Admin Trainings',
        enterprise: 'Comprehensive Onsite Staff Bootcamps & Train-the-Trainer',
      },
      {
        name: 'Engineering Support Channel & Response Time',
        standard: 'Email Support (Next Business Day SLA)',
        professional: 'Dedicated WhatsApp/Slack Desk (< 2 hr Critical SLA)',
        enterprise: '24/7/365 Dedicated Tech Lead & Emergency Pager (< 15 min SLA)',
      },
    ],
  },
];

export const SoftwareTierComparison: React.FC<{ id?: string }> = ({ id = 'tiers-comparison' }) => {
  const [activeMobileTier, setActiveMobileTier] = useState<'standard' | 'professional' | 'enterprise'>('professional');
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (title: string) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const renderValue = (val: string | boolean, tierId: string) => {
    if (typeof val === 'boolean') {
      return val ? (
        <div className="flex items-center justify-center sm:justify-start gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold text-xs">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
          <span className="hidden sm:inline text-[11px]">Included</span>
        </div>
      ) : (
        <div className="flex items-center justify-center sm:justify-start gap-1.5 text-slate-400">
          <Minus className="h-4 w-4 shrink-0" />
          <span className="hidden sm:inline text-[11px]">Not Included</span>
        </div>
      );
    }

    const isProfessionalHighlight = tierId === 'professional';
    const isEnterpriseHighlight = tierId === 'enterprise';

    return (
      <span
        className={`text-xs sm:text-xs leading-relaxed font-medium ${
          isEnterpriseHighlight
            ? 'text-indigo-900 dark:text-indigo-200 font-semibold'
            : isProfessionalHighlight
            ? 'text-blue-900 dark:text-blue-200 font-semibold'
            : 'text-slate-700 dark:text-slate-300'
        }`}
      >
        {val}
      </span>
    );
  };

  return (
    <div id={id} className="w-full scroll-mt-24 space-y-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold">
          <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
          <span>Transparent Engineering Standards</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Compare Software Architecture & Service Tiers
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          From rapid single-branch MVPs to high-concurrency mission-critical platforms, choose the architecture tier that matches your operational scale, compliance needs, and growth trajectory.
        </p>
      </div>

      {/* Tier Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {TIERS.map((tier) => (
          <div
            key={tier.id}
            className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all ${
              tier.isPopular
                ? 'bg-gradient-to-b from-blue-50/80 via-white to-white dark:from-blue-950/30 dark:via-[#111827] dark:to-[#111827] border-2 border-blue-600 dark:border-blue-500 shadow-xl shadow-blue-500/10'
                : 'bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            {tier.badge && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span
                  className={`px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm ${
                    tier.isPopular
                      ? 'bg-blue-600 text-white'
                      : 'bg-indigo-600 text-white'
                  }`}
                >
                  {tier.badge}
                </span>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {tier.name}
                </h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                  {tier.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {tier.bestFor}
              </p>

              <div className="pt-2 pb-1 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500">Typical Sprint Timeline:</span>
                <span className="font-bold text-slate-900 dark:text-white font-mono">
                  {tier.deliveryTime}
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 mt-6">
              <Link to={tier.ctaLink}>
                <Button
                  variant={tier.isPopular ? 'primary' : 'outline'}
                  size="md"
                  className="w-full justify-center"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  {tier.ctaText}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Tier Selector Pill Switcher */}
      <div className="lg:hidden max-w-md mx-auto px-4">
        <div className="bg-slate-100 dark:bg-slate-800/90 p-1.5 rounded-2xl flex items-center gap-1 border border-slate-200 dark:border-slate-700">
          {TIERS.map((tier) => (
            <button
              key={tier.id}
              type="button"
              onClick={() => setActiveMobileTier(tier.id)}
              className={`flex-1 py-2 px-2 text-xs font-bold rounded-xl transition-all ${
                activeMobileTier === tier.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tier.name.replace(' Tier', '')}
            </button>
          ))}
        </div>
      </div>

      {/* Comprehensive Feature Comparison Matrix */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#111827] overflow-hidden shadow-sm">
          
          {/* Desktop Table Header */}
          <div className="hidden lg:grid grid-cols-12 border-b border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 p-6 sticky top-20 z-10 backdrop-blur-md">
            <div className="col-span-4 font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Technical Capabilities & Specs
            </div>
            <div className="col-span-2 text-center text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Standard Tier
            </div>
            <div className="col-span-3 text-center text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30 py-1 rounded-lg">
              Professional Tier (Popular)
            </div>
            <div className="col-span-3 text-center text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Enterprise Tier
            </div>
          </div>

          {/* Categories and Rows */}
          <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
            {COMPARISON_CATEGORIES.map((cat, catIdx) => {
              const isCollapsed = collapsedCategories[cat.title] || false;
              const Icon = cat.icon;

              return (
                <div key={catIdx} className="bg-transparent">
                  {/* Category Header Row with Toggle */}
                  <button
                    type="button"
                    onClick={() => toggleCategory(cat.title)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 bg-slate-50/60 dark:bg-slate-900/40 hover:bg-slate-100/60 dark:hover:bg-slate-800/40 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {cat.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <span className="hidden sm:inline">
                        {isCollapsed ? 'Expand' : 'Collapse'}
                      </span>
                      {isCollapsed ? (
                        <ChevronDown className="h-4 w-4 text-slate-400" />
                      ) : (
                        <ChevronUp className="h-4 w-4 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {/* Feature Rows */}
                  {!isCollapsed && (
                    <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
                      {cat.features.map((feature, fIdx) => (
                        <div key={fIdx} className="p-4 sm:p-5">
                          {/* Desktop Row Grid */}
                          <div className="hidden lg:grid grid-cols-12 items-center gap-4">
                            <div className="col-span-4 pr-4">
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                                  {feature.name}
                                </span>
                              </div>
                              {feature.tooltip && (
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  {feature.tooltip}
                                </p>
                              )}
                            </div>

                            <div className="col-span-2 text-center flex items-center justify-center">
                              {renderValue(feature.standard, 'standard')}
                            </div>

                            <div className="col-span-3 text-center flex items-center justify-center bg-blue-50/20 dark:bg-blue-950/10 py-3 rounded-xl border border-blue-100/50 dark:border-blue-900/30">
                              {renderValue(feature.professional, 'professional')}
                            </div>

                            <div className="col-span-3 text-center flex items-center justify-center">
                              {renderValue(feature.enterprise, 'enterprise')}
                            </div>
                          </div>

                          {/* Mobile View - Selected Single Tier View */}
                          <div className="lg:hidden space-y-2">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                                  {feature.name}
                                </h5>
                                {feature.tooltip && (
                                  <p className="text-[10px] text-slate-500 mt-0.5">
                                    {feature.tooltip}
                                  </p>
                                )}
                              </div>
                              <div className="shrink-0 text-right">
                                {activeMobileTier === 'standard' && renderValue(feature.standard, 'standard')}
                                {activeMobileTier === 'professional' && renderValue(feature.professional, 'professional')}
                                {activeMobileTier === 'enterprise' && renderValue(feature.enterprise, 'enterprise')}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Table Action Callouts */}
          <div className="p-6 sm:p-8 bg-slate-50/80 dark:bg-slate-900/60 border-t border-slate-200/90 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Need a tailored architecture or hybrid SLA tier?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Our Principal Solutions Architects can prepare custom modular scopes for enterprise RFPs, government tenders, or complex multi-org rollouts.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link to="/request-quote">
                <Button variant="primary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Request Custom Scope
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="md">
                  Book Technical Discovery
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
