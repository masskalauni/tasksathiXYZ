import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { navigationData } from '@/src/data/navigation';
import { siteConfig } from '@/src/config/site';
import { Button } from '@/src/components/ui/Button';
import { TaskSathiLogo } from '@/src/components/ui/TaskSathiLogo';
import { QuickThemeToggle } from './ThemeToggle';
import { MobileNav } from './MobileNav';
import {
  ChevronDown,
  Menu,
  ArrowRight,
  Sparkles,
  Box,
  Building2,
  Code2,
  Layers,
  Receipt,
  Bot,
  Globe,
  Briefcase,
  FileText,
  Users,
  Phone,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export interface NavbarProps {
  onOpenInquiry: () => void;
}

// Icon resolver helper for flat navigation cards
const getNavIcon = (name?: string) => {
  switch (name) {
    case 'Sparkles':
      return <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />;
    case 'Box':
      return <Box className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />;
    case 'Building2':
      return <Building2 className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />;
    case 'Code2':
      return <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />;
    case 'Layers':
      return <Layers className="h-4 w-4 text-purple-600 dark:text-purple-400" />;
    case 'Receipt':
      return <Receipt className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />;
    case 'Bot':
      return <Bot className="h-4 w-4 text-orange-600 dark:text-orange-400" />;
    case 'Globe':
      return <Globe className="h-4 w-4 text-teal-600 dark:text-teal-400" />;
    case 'Briefcase':
      return <Briefcase className="h-4 w-4 text-amber-600 dark:text-amber-400" />;
    case 'FileText':
      return <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />;
    case 'Users':
      return <Users className="h-4 w-4 text-pink-600 dark:text-pink-400" />;
    case 'Phone':
      return <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />;
    default:
      return <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />;
  }
};

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <header
      id="main-header"
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-200',
        isScrolled
          ? 'bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg py-1 shrink-0"
            aria-label="TaskSathi Home"
          >
            <TaskSathiLogo variant="horizontal" size="sm" showTagline={true} />
          </Link>

          {/* Desktop Navigation Links with Flat Dropdown */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navigationData.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isHovered = activeDropdown === item.title;
              const isSolutions = item.title === 'Solutions';

              if (!hasChildren) {
                return (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="px-3.5 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white rounded-lg transition-colors hover:bg-slate-100/60 dark:hover:bg-slate-800/40"
                  >
                    {item.title}
                  </Link>
                );
              }

              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className={cn(
                      'inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white rounded-lg transition-colors hover:bg-slate-100/60 dark:hover:bg-slate-800/40',
                      isHovered && 'text-blue-600 dark:text-blue-400 bg-slate-100/60 dark:bg-slate-800/40'
                    )}
                    aria-expanded={isHovered}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={cn(
                        'h-3.5 w-3.5 text-slate-400 transition-transform duration-200',
                        isHovered && 'rotate-180 text-blue-600 dark:text-blue-400'
                      )}
                    />
                  </button>

                  {/* Flat Mega Dropdown Panels */}
                  {isHovered && (
                    <div
                      className={cn(
                        'absolute top-full pt-2 z-50 animate-in fade-in-50 zoom-in-95 duration-150',
                        isSolutions
                          ? 'left-1/2 -translate-x-1/2 w-[760px] xl:w-[840px]'
                          : 'left-1/2 -translate-x-1/2 w-[480px]'
                      )}
                    >
                      <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/98 dark:bg-[#0F172A]/98 backdrop-blur-xl shadow-2xl ring-1 ring-black/5 overflow-hidden">
                        {isSolutions ? (
                          /* Flat Solutions Grid (Horizontal Multi-Column Layout) */
                          <div>
                            <div className="p-4 sm:p-5">
                              <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-slate-100 dark:border-slate-800/80">
                                <div>
                                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                                    Software Engineering & Business Solutions
                                  </span>
                                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                    End-to-end digital transformation engineered for Nepal & Global enterprises
                                  </p>
                                </div>
                                <Link
                                  to="/services"
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                                >
                                  <span>View all services</span>
                                  <ArrowRight className="h-3 w-3" />
                                </Link>
                              </div>

                              {/* Flat 2-Column Responsive Grid with Icon Badges */}
                              <div className="grid grid-cols-2 gap-2.5">
                                {item.children?.map((sub) => (
                                  <Link
                                    key={sub.title}
                                    to={sub.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="group flex items-start gap-3 p-2.5 rounded-xl border border-transparent hover:border-slate-200/80 dark:hover:border-slate-700/60 hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-all text-left"
                                  >
                                    <div className="h-8 w-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/60 transition-all">
                                      {getNavIcon(sub.iconName)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-1.5">
                                        <span className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                          {sub.title}
                                        </span>
                                        {sub.badge && (
                                          <span className="rounded-full bg-blue-50 dark:bg-blue-950/70 px-1.5 py-0.2 text-[9px] font-bold text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60">
                                            {sub.badge}
                                          </span>
                                        )}
                                      </div>
                                      {sub.description && (
                                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1 leading-snug">
                                          {sub.description}
                                        </p>
                                      )}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Flat Bottom Strip with Quick Actions */}
                            <div className="bg-slate-50/90 dark:bg-slate-900/90 px-5 py-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                                <span className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
                                  <CheckCircle2 className="h-3.5 w-3.5" />
                                  <span>IRD Certified Billing</span>
                                </span>
                                <span className="text-slate-300 dark:text-slate-700">•</span>
                                <span>Putalisadak Engineering Team</span>
                              </div>
                              <Link
                                to="/request-quote"
                                onClick={() => setActiveDropdown(null)}
                                className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1.5"
                              >
                                <span>Get Instant Custom Quote</span>
                                <ArrowRight className="h-3 w-3" />
                              </Link>
                            </div>
                          </div>
                        ) : (
                          /* Flat 2-Column Grid for Work & Company Dropdowns */
                          <div className="p-3.5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {item.children?.map((sub) => (
                                <Link
                                  key={sub.title}
                                  to={sub.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className="group flex items-start gap-3 p-2.5 rounded-xl border border-transparent hover:border-slate-200/80 dark:hover:border-slate-700/60 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all text-left"
                                >
                                  <div className="h-8 w-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/60 transition-all">
                                    {getNavIcon(sub.iconName)}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {sub.title}
                                      </span>
                                    </div>
                                    {sub.description && (
                                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1 leading-snug">
                                        {sub.description}
                                      </p>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Actions: Theme Toggle + Desktop-Only Let's Talk CTA (Hidden on mobile) + Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Quick theme toggle */}
            <QuickThemeToggle />

            {/* Desktop-Only CTA Button: Strictly hidden on mobile & tablets, shown only on desktop (lg:inline-flex) */}
            <Button
              variant="secondary"
              size="sm"
              onClick={onOpenInquiry}
              className="hidden lg:inline-flex shadow-xs"
              rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
            >
              Let's Talk
            </Button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:scale-95"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        onOpenInquiry={onOpenInquiry}
      />
    </header>
  );
};

