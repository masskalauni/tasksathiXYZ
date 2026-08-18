import React from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  Stethoscope,
  Store,
  Truck,
  GraduationCap,
  Landmark,
  UtensilsCrossed,
  Cpu,
  ShieldCheck,
  Award,
  Globe2,
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export interface ClientPartner {
  id: string;
  name: string;
  category: string;
  location: string;
  icon: React.ReactNode;
  tag: string;
  accent: string;
}

export const CLIENT_PARTNERS: ClientPartner[] = [
  {
    id: 'himalayan-retail',
    name: 'Himalayan Retail Group',
    category: 'Supermarket & Retail Chain',
    location: 'Kathmandu & Pokhara',
    icon: <Store className="h-5 w-5" />,
    tag: 'Cloud POS & ERP (38 Outlets)',
    accent: 'from-orange-500/20 to-amber-500/20 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-900/50',
  },
  {
    id: 'apex-logistics',
    name: 'Apex Freight & Logistics',
    category: 'Supply Chain & Warehousing',
    location: 'Birgunj & Kathmandu',
    icon: <Truck className="h-5 w-5" />,
    tag: 'Fleet Dispatch System',
    accent: 'from-blue-500/20 to-cyan-500/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/50',
  },
  {
    id: 'kathmandu-medicare',
    name: 'Kathmandu MediCare Hub',
    category: 'Hospital & Healthcare Group',
    location: 'Lalitpur, Nepal',
    icon: <Stethoscope className="h-5 w-5" />,
    tag: 'Patient Portal & EMR',
    accent: 'from-emerald-500/20 to-teal-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50',
  },
  {
    id: 'everest-coop',
    name: 'Everest Financial Network',
    category: 'Banking & Cooperative Union',
    location: 'Nationwide',
    icon: <Landmark className="h-5 w-5" />,
    tag: 'CBS & Mobile Banking Core',
    accent: 'from-indigo-500/20 to-blue-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900/50',
  },
  {
    id: 'valley-academy',
    name: 'Valley Educational Trust',
    category: 'Institutions & Higher Ed',
    location: 'Kathmandu Valley',
    icon: <GraduationCap className="h-5 w-5" />,
    tag: 'Campus ERP & Fee Gateway',
    accent: 'from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900/50',
  },
  {
    id: 'patan-hospitality',
    name: 'Patan Heritage Hotels',
    category: 'Boutique Resorts & Cafes',
    location: 'Patan & Nagarkot',
    icon: <UtensilsCrossed className="h-5 w-5" />,
    tag: 'Kitchen KDS & Table Orders',
    accent: 'from-amber-500/20 to-orange-500/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/50',
  },
  {
    id: 'zenith-tech',
    name: 'Zenith Labs Global',
    category: 'Cross-Border SaaS & AI',
    location: 'Kathmandu / Singapore',
    icon: <Cpu className="h-5 w-5" />,
    tag: 'Cloud Native Microservices',
    accent: 'from-cyan-500/20 to-blue-500/20 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-900/50',
  },
  {
    id: 'sagarmatha-exports',
    name: 'Sagarmatha Agro Exports',
    category: 'Export & Commodity Trading',
    location: 'Eastern Nepal',
    icon: <Building2 className="h-5 w-5" />,
    tag: 'Automated VAT Billing & Ledgers',
    accent: 'from-teal-500/20 to-emerald-500/20 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-900/50',
  },
];

export const TrustedByCarousel: React.FC = () => {
  // Duplicate array for infinite continuous loop
  const duplicatedPartners = [...CLIENT_PARTNERS, ...CLIENT_PARTNERS];

  return (
    <section className="relative py-12 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#0B0F19]/50 overflow-hidden">
      {/* Top Header Label */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs text-xs font-semibold text-slate-700 dark:text-slate-300">
          <ShieldCheck className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
          <span>PROVEN RELIABILITY</span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="text-slate-500 dark:text-slate-400 font-normal">
            Trusted by 80+ forward-thinking enterprises in Nepal & abroad
          </span>
        </div>
      </div>

      {/* Infinite Scrolling Logo Marquee Container */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex gap-4 sm:gap-6 animate-infinite-marquee hover:[animation-play-state:paused] w-max py-2">
          {duplicatedPartners.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className={cn(
                'group flex items-center gap-3.5 px-4 sm:px-5 py-3 rounded-2xl',
                'bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 shadow-xs',
                'hover:border-blue-500/60 dark:hover:border-blue-500/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 select-none'
              )}
            >
              {/* Client Logo Icon Badge */}
              <div
                className={cn(
                  'h-10 w-10 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-200 group-hover:scale-105',
                  client.accent
                )}
              >
                {client.icon}
              </div>

              {/* Client Info Text */}
              <div className="flex flex-col text-left min-w-[170px] sm:min-w-[190px]">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                  <span>{client.category}</span>
                  <span>•</span>
                  <span className="text-slate-400 dark:text-slate-500">{client.location}</span>
                </div>
                <div className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 font-mono mt-0.5 truncate">
                  {client.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Micro Metrics Strip */}
      <div className="max-w-4xl mx-auto px-4 mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">99.98%</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Uptime Guarantee</div>
        </div>
        <div className="border-x border-slate-200/60 dark:border-slate-800/60">
          <div className="text-base sm:text-lg font-extrabold text-blue-600 dark:text-blue-400">100% IRD</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Tax Compliance</div>
        </div>
        <div>
          <div className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">&lt; 15 Mins</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Support Response</div>
        </div>
      </div>
    </section>
  );
};
