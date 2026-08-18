import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, BABAL_HOST_AFFILIATE_URL } from '@/src/config/site';
import { Container } from '@/src/components/ui/Container';
import { TaskSathiLogo } from '@/src/components/ui/TaskSathiLogo';
import { formatPhoneNumber } from '@/src/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { WHATSAPP_DISPLAY, createWhatsAppUrl } from '@/src/lib/whatsapp';
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Code2,
  MessageSquare,
  Server,
} from 'lucide-react';

export interface FooterProps {
  onOpenInquiry?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  return (
    <footer
      id="main-footer"
      className="bg-white dark:bg-[#080C14] border-t border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 text-sm transition-colors"
    >
      {/* Top Banner / Headquarters strip */}
      <div className="border-b border-slate-100 dark:border-slate-800/60 py-6 bg-slate-50/50 dark:bg-slate-900/30">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>HQ: Putalisadak, Kathmandu, Nepal</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span>Direct: {formatPhoneNumber(siteConfig.phone)}</span>
            </div>
            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
              <span className="font-nepali">स्मार्ट डिजिटल रूपान्तरणको सहयात्री</span>
              <span className="hidden sm:inline text-slate-400 dark:text-slate-600">•</span>
              <span className="hidden sm:inline font-mono">99.9% Systems Reliability</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Links */}
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Col 1 & 2: Brand Info */}
          <div className="col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center group py-1" aria-label="TaskSathi Home">
              <TaskSathiLogo variant="full" size="md" showTagline={true} showNepali={true} />
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              {siteConfig.positioning}
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{siteConfig.location.formatted}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Phone className="h-4 w-4 text-emerald-600 shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-blue-600 font-semibold transition-colors">
                  {formatPhoneNumber(siteConfig.phone)}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Mail className="h-4 w-4 text-purple-600 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-blue-600 transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Social & Hosting Partner */}
            <div className="pt-2 space-y-2.5">
              <div>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <span>Follow TASK SATHI on Facebook</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>

              {/* Recommended Infrastructure Partner */}
              <a
                href={BABAL_HOST_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/60 dark:bg-blue-950/30 hover:border-blue-300 dark:hover:border-blue-800 transition-all max-w-xs"
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-7 w-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <Server className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                      <span>Babal.Host NVMe Hosting</span>
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-600 text-white leading-none">
                        Partner
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      Nepal Cloud Servers & Domains
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Col 3: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Industries
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/industries/healthcare" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Healthcare & Clinics
                </Link>
              </li>
              <li>
                <Link to="/industries/education" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Schools & Colleges
                </Link>
              </li>
              <li>
                <Link to="/industries/retail" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Retail & Wholesale
                </Link>
              </li>
              <li>
                <Link to="/industries/hospitality" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Hotels & Lodging
                </Link>
              </li>
              <li>
                <Link to="/industries/restaurants" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Restaurants & Cafes
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                  All 8 Verticals →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services/custom-software" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link to="/services/erp-systems" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  ERP & Accounting
                </Link>
              </li>
              <li>
                <Link to="/services/pos-systems" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Smart POS Billing
                </Link>
              </li>
              <li>
                <Link to="/services/ai-automation" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link to="/services/web-development" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Software
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/products/sathi-erp" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Sathi ERP Core
                </Link>
              </li>
              <li>
                <Link to="/products/sathi-pos" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Sathi POS Smart
                </Link>
              </li>
              <li>
                <Link to="/products/sathi-hms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Sathi Clinical HMS
                </Link>
              </li>
              <li>
                <Link to="/products/sathi-school" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Sathi Campus Cloud
                </Link>
              </li>
              <li>
                <Link to="/products/sathi-ai" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Sathi AI Flow
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 6: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Pricing & Models
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Careers & Culture
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Putalisadak Office
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p>© 2026 TASK SATHI (Pvt. Ltd.). Putalisadak, Kathmandu.</p>
            <a
              href={createWhatsAppUrl('Hello TASK SATHI! I would like to consult with your engineering team.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] font-semibold transition-colors border border-emerald-500/20"
            >
              <MessageSquare className="h-3 w-3" />
              <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href={BABAL_HOST_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>Hosting: Babal.Host</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <Link to="/pricing" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
              Pricing Transparency
            </Link>
            <Link to="/contact" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
              IRD Guarantee
            </Link>
            <Link to="/contact" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
              Security & Privacy
            </Link>

            {/* Theme switcher */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800">
              <span className="text-[11px] text-slate-400">Theme:</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
