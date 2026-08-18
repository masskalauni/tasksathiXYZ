import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '@/src/config/site';
import { Button } from '@/src/components/ui/Button';
import { Badge } from '@/src/components/ui/Badge';
import { Container } from '@/src/components/ui/Container';
import { HeroVisual } from './HeroVisual';
import { InteractiveHeroSquares } from './InteractiveHeroSquares';
import { ArrowRight, Sparkles, ShieldCheck, MapPin, Check } from 'lucide-react';

export interface HeroProps {
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative pt-6 sm:pt-12 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
      {/* Interactive Background Squares Matrix */}
      <InteractiveHeroSquares />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Messaging & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 text-left space-y-6 sm:space-y-8"
          >
            {/* Top Badge: Kathmandu Tech Partner */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" size="md" className="gap-1.5 py-1 px-3">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="font-semibold">{siteConfig.name}</span>
                <span className="text-slate-400 dark:text-slate-600">•</span>
                <span className="font-nepali text-xs">नेपालको भरपर्दो प्रविधि साझेदार</span>
              </Badge>

              <div className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <MapPin className="h-3.5 w-3.5 text-slate-400" />
                <span>Putalisadak, Kathmandu</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Technology that <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
                  works for your business.
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {siteConfig.positioning}
            </p>

            {/* Core Value Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span>Custom Software & Cloud ERP</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span>AI Automation & Workflow Bots</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span>High-Speed POS & Billing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span>Dedicated Local Support in Nepal</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenInquiry}
                className="shadow-lg shadow-slate-900/10 dark:shadow-none"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Start a Project
              </Button>

              <a href="#services">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto justify-center"
                >
                  Explore Solutions
                </Button>
              </a>
            </div>

            {/* Trust Micro-Footer */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
              <span>Production-ready architectures built for resilience & data privacy</span>
            </div>
          </motion.div>

          {/* Right Column: Abstract Technology Architecture Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
