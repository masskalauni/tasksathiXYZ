import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Quote,
  Star,
  Building2,
  Stethoscope,
  Store,
  Truck,
  GraduationCap,
  Landmark,
  UtensilsCrossed,
  Cpu,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Pause,
  Play,
  SlidersHorizontal,
  ChevronRight,
  UserCheck,
} from 'lucide-react';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { cn } from '@/src/lib/utils';

export interface SuccessStory {
  id: string;
  clientName: string;
  clientCategory: string;
  industry: 'retail' | 'healthcare' | 'logistics' | 'fintech' | 'hospitality' | 'education' | 'tech';
  location: string;
  logoIcon: React.ElementType;
  accentColor: string;
  borderAccent: string;
  tagline: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorCompany: string;
  authorAvatar?: string;
  systemDeployed: string;
  impactMetric: string;
  rating: number;
  highlightTag: string;
}

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'himalayan-retail',
    clientName: 'Himalayan Retail Group',
    clientCategory: 'Supermarket Chain (38 Outlets)',
    industry: 'retail',
    location: 'Kathmandu & Pokhara',
    logoIcon: Store,
    accentColor: 'from-amber-500/20 to-orange-500/20 text-orange-600 dark:text-orange-400',
    borderAccent: 'hover:border-orange-500/50',
    tagline: 'Multi-Branch Cloud POS & ERP',
    quote:
      'TASK SATHI replaced 4 fragmented desktop billing setups across our 38 supermarket branches. Their offline-first sync ensures cash counters never freeze during internet dips, and real-time IRD tax verification operates without manual intervention.',
    authorName: 'Aarav Sharma',
    authorTitle: 'Chief Operating Officer',
    authorCompany: 'Himalayan Retail Group',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    systemDeployed: 'SathiPOS Enterprise Cloud & IRD Sync Module',
    impactMetric: '38 Outlets Synced • Zero Offline Downtime',
    rating: 5,
    highlightTag: 'Retail & Multi-Branch POS',
  },
  {
    id: 'kathmandu-medicare',
    clientName: 'Kathmandu MediCare Hub',
    clientCategory: 'Hospital & Pathology Network',
    industry: 'healthcare',
    location: 'Lalitpur, Nepal',
    logoIcon: Stethoscope,
    accentColor: 'from-emerald-500/20 to-teal-500/20 text-emerald-600 dark:text-emerald-400',
    borderAccent: 'hover:border-emerald-500/50',
    tagline: 'Hospital EMR & Specimen Lab Cloud',
    quote:
      'Their custom hospital EMR and automated lab analyzer interface completely revamped our patient diagnostics. Outpatient wait times dropped by 55% in the first quarter, while doctors access clinical histories instantly on tablets.',
    authorName: 'Dr. Rohan Malla',
    authorTitle: 'Medical Director',
    authorCompany: 'Kathmandu MediCare Hub',
    authorAvatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=120&auto=format&fit=crop&q=80',
    systemDeployed: 'Custom Hospital EMR & Patient WhatsApp Portal',
    impactMetric: '55% Reduction in OPD Patient Wait Times',
    rating: 5,
    highlightTag: 'Healthcare & Patient EMR',
  },
  {
    id: 'apex-logistics',
    clientName: 'Apex Freight & Logistics',
    clientCategory: 'National Cargo & Warehouse TMS',
    industry: 'logistics',
    location: 'Birgunj & Kathmandu',
    logoIcon: Truck,
    accentColor: 'from-blue-500/20 to-cyan-500/20 text-blue-600 dark:text-blue-400',
    borderAccent: 'hover:border-blue-500/50',
    tagline: 'Live Fleet Tracking & Dispatch TMS',
    quote:
      'Managing 120+ freight carriers between Birgunj border customs and Kathmandu was chaotic on spreadsheets. TASK SATHI built a telematics-linked dispatch system that reduced shipment turnaround by 32% and digitized waybills.',
    authorName: 'Sunita Basnet',
    authorTitle: 'Head of Supply Chain & Logistics',
    authorCompany: 'Apex Freight Systems',
    authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80',
    systemDeployed: 'Apex Fleet TMS & Consignment Tracker',
    impactMetric: '32% Faster Highway Consignment Turnaround',
    rating: 5,
    highlightTag: 'Supply Chain & Telematics',
  },
  {
    id: 'everest-coop',
    clientName: 'Everest Financial Union',
    clientCategory: 'Banking & Cooperative Core',
    industry: 'fintech',
    location: 'Nationwide Network',
    logoIcon: Landmark,
    accentColor: 'from-indigo-500/20 to-blue-500/20 text-indigo-600 dark:text-indigo-400',
    borderAccent: 'hover:border-indigo-500/50',
    tagline: 'Core Banking Engine & Member Portal',
    quote:
      'Ledger auditability, NRB regulatory compliance, and zero-compromise security were our primary requirements. TASK SATHI delivered an air-tight double-entry core with bi-directional SMS OTP and automated interest settlement.',
    authorName: 'Bikash Thapa',
    authorTitle: 'VP of Information Technology',
    authorCompany: 'Everest Financial Union',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    systemDeployed: 'Core Banking System & Member Mobile App',
    impactMetric: '99.99% Ledger Uptime • Full NRB Compliance',
    rating: 5,
    highlightTag: 'Fintech & Core Banking',
  },
  {
    id: 'patan-hospitality',
    clientName: 'Patan Heritage Hotels & Cafes',
    clientCategory: 'Boutique Resorts & Dining Group',
    industry: 'hospitality',
    location: 'Patan & Nagarkot',
    logoIcon: UtensilsCrossed,
    accentColor: 'from-amber-500/20 to-rose-500/20 text-amber-600 dark:text-amber-400',
    borderAccent: 'hover:border-amber-500/50',
    tagline: 'Tablet Waiter Ordering & Kitchen KDS',
    quote:
      'The handheld waiter tablet ordering and live Kitchen Display System (KDS) completely transformed our weekend dinner rush. Dinner table turnover speed improved by 22 minutes and order discrepancy errors dropped to zero.',
    authorName: 'Suman Shakya',
    authorTitle: 'General Manager',
    authorCompany: 'Patan Heritage Hospitality Group',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    systemDeployed: 'SathiRestaurant POS, Floor Map & KDS Mesh',
    impactMetric: '22-Minute Faster Dinner Table Turnover',
    rating: 5,
    highlightTag: 'Hospitality & Food Ops',
  },
  {
    id: 'valley-academy',
    clientName: 'Valley Educational Trust',
    clientCategory: 'Institutions & Higher Ed (2 Campuses)',
    industry: 'education',
    location: 'Kathmandu Valley',
    logoIcon: GraduationCap,
    accentColor: 'from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400',
    borderAccent: 'hover:border-purple-500/50',
    tagline: 'Campus Cloud & Digital Fee Gateway',
    quote:
      'Administering gradebooks, parent communications, and tuition collection for 3,400 students across 2 campuses became effortless. Online tuition payments through eSewa and Khalti reached 92% adoption within the very first semester.',
    authorName: 'Meera Koirala',
    authorTitle: 'Administrative Principal',
    authorCompany: 'Valley Educational Trust',
    authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
    systemDeployed: 'Campus Cloud ERP & Multi-Gateway Fee Engine',
    impactMetric: '92% Digital Fee Collection in Month 1',
    rating: 5,
    highlightTag: 'EdTech & Campus Cloud',
  },
  {
    id: 'sagarmatha-exports',
    clientName: 'Sagarmatha Agro Commodities',
    clientCategory: 'Export & Agro-Processing',
    industry: 'retail',
    location: 'Eastern Nepal & India',
    logoIcon: Building2,
    accentColor: 'from-teal-500/20 to-emerald-500/20 text-teal-600 dark:text-teal-400',
    borderAccent: 'hover:border-teal-500/50',
    tagline: 'Dual-Currency ERP & Stock Ledgers',
    quote:
      'The multi-warehouse batch tracking and automatic dual-currency NPR/INR invoicing allowed us to scale ginger and cardamom exports without customs documentation delays. Tax audit preparation time shrank from 3 weeks to 1 hour.',
    authorName: 'Dawa Sherpa',
    authorTitle: 'Managing Director',
    authorCompany: 'Sagarmatha Agro Exports',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80',
    systemDeployed: 'SathiCloud ERP with Multi-Currency Customs Sync',
    impactMetric: 'Tax Audit Prep Reduced from 3 Weeks to 1 Hr',
    rating: 5,
    highlightTag: 'Agro Trade & Export ERP',
  },
  {
    id: 'zenith-tech',
    clientName: 'Zenith Labs Global',
    clientCategory: 'Cross-Border SaaS & Microservices',
    industry: 'tech',
    location: 'Kathmandu / Singapore',
    logoIcon: Cpu,
    accentColor: 'from-cyan-500/20 to-blue-500/20 text-cyan-600 dark:text-cyan-400',
    borderAccent: 'hover:border-cyan-500/50',
    tagline: 'High-Concurrency TypeScript Microservices',
    quote:
      'Finding an engineering partner in Kathmandu capable of architecting high-throughput TypeScript microservices, event-driven Redis pub/sub queues, and Dockerized CI/CD was a game changer for our regional product rollout.',
    authorName: 'Pratik Joshi',
    authorTitle: 'Co-Founder & Head of Engineering',
    authorCompany: 'Zenith Labs Global',
    authorAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80',
    systemDeployed: 'Cloud-Native Distributed APIs & Event Stream Mesh',
    impactMetric: 'Sub-50ms API Latency • 100k+ Concurrency',
    rating: 5,
    highlightTag: 'Cloud Microservices & SaaS',
  },
];

export const ClientSuccessStoriesSection: React.FC<{
  onOpenInquiry?: () => void;
  id?: string;
}> = ({ onOpenInquiry, id = 'client-success-stories' }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1); // 1 = Normal (45s), 1.5 = Slower (60s), 0.7 = Faster (30s)

  const filteredStories =
    selectedIndustry === 'all'
      ? SUCCESS_STORIES
      : SUCCESS_STORIES.filter((s) => s.industry === selectedIndustry);

  // Duplicate filtered stories 3 times for a seamless infinite loop
  const carouselItems = [...filteredStories, ...filteredStories, ...filteredStories];

  const industryFilters = [
    { id: 'all', label: 'All Sectors' },
    { id: 'retail', label: 'Retail & POS' },
    { id: 'healthcare', label: 'Healthcare & EMR' },
    { id: 'logistics', label: 'Logistics & Fleet' },
    { id: 'fintech', label: 'Fintech & Banking' },
    { id: 'hospitality', label: 'Hospitality & Dining' },
    { id: 'education', label: 'Education & Cloud' },
    { id: 'tech', label: 'SaaS & Microservices' },
  ];

  // Base duration in seconds
  const animationDuration = 55 * speedMultiplier;

  return (
    <section id={id} className="relative py-16 sm:py-24 bg-white dark:bg-[#0B0F19] overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-500/5 dark:bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              <span>Verified Client Success & Testimonials</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Trusted by leaders modernising Nepal's digital core.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Read direct quotes from operations directors, chief physicians, and CTOs who partnered with TASK SATHI to automate high-stakes workflows and ensure 100% regulatory compliance.
            </p>
          </div>

          {/* Controls: Pause / Play Toggle & Industry Filter */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-700 shadow-xs"
              title={isPaused ? 'Resume scrolling' : 'Pause scrolling'}
            >
              {isPaused ? (
                <>
                  <Play className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Resume Auto-Scroll</span>
                </>
              ) : (
                <>
                  <Pause className="h-3.5 w-3.5 text-slate-500" />
                  <span>Pause Scroll</span>
                </>
              )}
            </button>

            <Link to="/case-studies">
              <Button variant="outline" size="sm" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
                All Case Studies
              </Button>
            </Link>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {industryFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setSelectedIndustry(filter.id)}
              className={cn(
                'px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all',
                selectedIndustry === filter.id
                  ? 'bg-blue-600 text-white shadow-sm font-semibold'
                  : 'bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-slate-800'
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Infinite Horizontal Scrolling Carousel with Framer Motion */}
      <div
        className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-6 w-max select-none"
          animate={{
            x: isPaused ? undefined : ['0%', '-50%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: animationDuration,
              ease: 'linear',
            },
          }}
          style={{
            willChange: 'transform',
          }}
        >
          {carouselItems.map((story, idx) => {
            const Icon = story.logoIcon;
            return (
              <div
                key={`${story.id}-${idx}`}
                className={cn(
                  'w-[340px] sm:w-[410px] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shrink-0',
                  'bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 shadow-sm',
                  'transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1',
                  story.borderAccent
                )}
              >
                {/* Top Row: Client Logo & Tag */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          'h-11 w-11 rounded-2xl flex items-center justify-center shrink-0 border bg-gradient-to-br',
                          story.accentColor
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                          {story.clientName}
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {story.clientCategory}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating Indicator */}
                    <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
                      {[...Array(story.rating)].map((_, sIdx) => (
                        <Star key={sIdx} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Impact Tag Badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/50 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 font-mono">
                    <CheckCircle2 className="h-3 w-3 text-emerald-500 shrink-0" />
                    <span className="truncate">{story.impactMetric}</span>
                  </div>

                  {/* Client Quote Text */}
                  <div className="relative pt-1">
                    <Quote className="h-6 w-6 text-blue-200 dark:text-blue-950/80 absolute -top-1 -left-1 -z-0 opacity-70" />
                    <p className="relative z-10 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                      "{story.quote}"
                    </p>
                  </div>
                </div>

                {/* Bottom Row: Author Details & System Deployed */}
                <div className="pt-5 mt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                  <div className="flex items-center gap-3">
                    {story.authorAvatar ? (
                      <img
                        src={story.authorAvatar}
                        alt={story.authorName}
                        referrerPolicy="no-referrer"
                        className="h-9 w-9 rounded-full object-cover border border-slate-200 dark:border-slate-700 shrink-0 shadow-xs"
                      />
                    ) : (
                      <div className="h-9 w-9 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center shrink-0">
                        {story.authorName.charAt(0)}
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 dark:text-white truncate flex items-center gap-1.5">
                        <span>{story.authorName}</span>
                        <UserCheck className="h-3.5 w-3.5 text-blue-500 shrink-0" title="Verified Client" />
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        {story.authorTitle}
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-400 dark:text-slate-500 font-mono truncate flex items-center gap-1">
                    <span className="text-slate-500 font-medium">Stack:</span>
                    <span>{story.systemDeployed}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Trust Snapshot & Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 dark:bg-[#111827]/80 border border-slate-200/90 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-blue-600 dark:text-blue-400">
              <ShieldCheck className="h-4 w-4" />
              <span>Full Source Code Transfer & IP Protection Guaranteed</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Ready to build the next success story for your business?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
              Book a direct architectural discovery with our senior engineering group in Putalisadak. We provide detailed sprint scopes, fixed-timeline milestones, and lifetime engineering retainers.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {onOpenInquiry ? (
              <Button
                variant="primary"
                size="md"
                onClick={onOpenInquiry}
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Start Technical Discovery
              </Button>
            ) : (
              <Link to="/request-quote">
                <Button variant="primary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Request Custom Scope
                </Button>
              </Link>
            )}
            <Link to="/services">
              <Button variant="outline" size="md">
                Explore Engineering Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
