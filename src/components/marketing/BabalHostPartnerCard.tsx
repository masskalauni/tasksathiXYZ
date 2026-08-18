import React from 'react';
import {
  Server,
  Zap,
  ShieldCheck,
  Globe,
  HardDrive,
  CreditCard,
  ArrowUpRight,
  Sparkles,
  Headphones,
  CheckCircle2,
} from 'lucide-react';
import { BABAL_HOST_AFFILIATE_URL } from '@/src/config/site';
import { Button } from '@/src/components/ui/Button';
import { Badge } from '@/src/components/ui/Badge';
import { cn } from '@/src/lib/utils';

export interface BabalHostPartnerCardProps {
  variant?: 'card' | 'banner' | 'compact';
  className?: string;
}

export const BabalHostPartnerCard: React.FC<BabalHostPartnerCardProps> = ({
  variant = 'card',
  className = '',
}) => {
  const affiliateUrl = BABAL_HOST_AFFILIATE_URL;

  const features = [
    {
      icon: HardDrive,
      title: 'Ultra-Fast NVMe SSD',
      description: 'Up to 10x faster data read/write speeds for low latency.',
    },
    {
      icon: ShieldCheck,
      title: 'Free SSL & Daily Backups',
      description: 'Automated snapshot defense and enterprise DDoS filtering.',
    },
    {
      icon: CreditCard,
      title: 'Local Nepal Payments',
      description: 'Instant checkout via eSewa, Khalti, ConnectIPS & Fonepay.',
    },
    {
      icon: Headphones,
      title: '24/7 Priority Support',
      description: 'Fast local ticketing and phone assistance in Nepal.',
    },
  ];

  if (variant === 'compact') {
    return (
      <div
        className={cn(
          'p-4 rounded-2xl border border-blue-200/80 dark:border-blue-900/60 bg-gradient-to-br from-blue-50/70 to-indigo-50/40 dark:from-blue-950/30 dark:to-indigo-950/20 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs',
          className
        )}
      >
        <div className="flex items-center gap-3 text-left">
          <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <Server className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-900 dark:text-white">
                Babal.Host Cloud & Domain Hosting
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                Recommended Partner
              </span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400">
              High-speed NVMe hosting, cPanel, .NP/.COM domains, and eSewa/Khalti checkout.
            </p>
          </div>
        </div>

        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 w-full sm:w-auto"
        >
          <Button
            variant="primary"
            size="sm"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}
          >
            Explore Babal.Host Plans
          </Button>
        </a>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div
        className={cn(
          'relative overflow-hidden rounded-3xl border border-blue-200/90 dark:border-blue-900/80 bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-950 text-white p-6 sm:p-8 shadow-xl',
          className
        )}
      >
        <div className="absolute right-0 top-0 w-96 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.3),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>Recommended Nepal Hosting & Cloud Partner</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Looking for reliable, ultra-fast hosting in Nepal?
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We recommend <strong className="text-white">Babal.Host</strong> for your production web applications, WordPress portals, and enterprise cPanel hosting. Enjoy 99.9% uptime, pure NVMe SSD speed, automated daily backups, and seamless local payments via eSewa, Khalti, and Fonepay.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-blue-200">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>NVMe Storage</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-blue-200">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>Free SSL & cPanel</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-blue-200">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>eSewa & Khalti</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-blue-200">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <a
              href={affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                variant="primary"
                size="md"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20"
                rightIcon={<ArrowUpRight className="h-4 w-4" />}
              >
                Get Hosting on Babal.Host
              </Button>
            </a>
            <span className="text-[11px] text-center text-slate-400">
              Direct affiliate partner link • Instant setup
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Default 'card' variant
  return (
    <div
      className={cn(
        'rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#111827] p-6 sm:p-8 shadow-md hover:shadow-xl transition-all space-y-6',
        className
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center gap-3.5">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/10">
            <Server className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Babal.Host
              </h3>
              <Badge variant="accent" size="sm">
                Preferred Cloud Partner
              </Badge>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              High-Speed NVMe Web & Cloud Hosting Infrastructure (Nepal)
            </p>
          </div>
        </div>

        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0"
        >
          <Button
            variant="primary"
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white"
            rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}
          >
            Visit Babal.Host
          </Button>
        </a>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        For businesses looking to host their websites, WordPress applications, and custom APIs on high-speed infrastructure in Nepal, we recommend <strong className="text-slate-900 dark:text-white">Babal.Host</strong>. They provide rock-solid server reliability, automated backups, low latency, and convenient local payments.
      </p>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/70 bg-slate-50/60 dark:bg-slate-900/40 flex items-start gap-3"
            >
              <div className="h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <Icon className="h-4 w-4" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                  {feat.title}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                  {feat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-blue-500" />
          <span>Domain Registration (.COM, .NP DNS, .ORG) & VPS Solutions</span>
        </div>
        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
        >
          <span>Order Hosting & Domains with Nepal Local Pay</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
};
