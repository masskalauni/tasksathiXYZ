import React from 'react';
import { Container } from '@/src/components/ui/Container';
import { Button } from '@/src/components/ui/Button';
import { siteConfig } from '@/src/config/site';
import { formatPhoneNumber } from '@/src/lib/utils';
import { ArrowRight, Phone, MessageSquare, MapPin, Sparkles } from 'lucide-react';

export interface CTASectionProps {
  onOpenInquiry: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenInquiry }) => {
  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      <Container>
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 to-[#0B0F19] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-slate-800 overflow-hidden text-center">
          {/* Subtle Ambient lights */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            {/* Top Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-blue-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Let's Build Something Meaningful</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
              Have an idea? Let's build it.
            </h2>

            <p className="font-nepali text-sm text-blue-200">
              तपाईंको आवश्यकता अनुसारको प्रविधि योजना बनाउन आजै सम्पर्क गर्नुहोस्
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
              Tell us what you're trying to build, automate or improve. We'll help you find the right technology approach.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={onOpenInquiry}
                className="w-full sm:w-auto shadow-lg shadow-blue-500/25"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Start a Project
              </Button>

              <a href={`tel:${siteConfig.phone}`} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-slate-700 bg-slate-800/80 text-white hover:bg-slate-700"
                  leftIcon={<Phone className="h-4 w-4 text-emerald-400" />}
                >
                  Talk to Us: {formatPhoneNumber(siteConfig.phone)}
                </Button>
              </a>
            </div>

            {/* Location & Quick Contact summary */}
            <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-blue-400" />
                <span>Putalisadak, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                <span>Fast response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
