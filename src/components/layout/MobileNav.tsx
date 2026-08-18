import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigationData } from '@/src/data/navigation';
import { siteConfig } from '@/src/config/site';
import { Button } from '@/src/components/ui/Button';
import { TaskSathiLogo } from '@/src/components/ui/TaskSathiLogo';
import { ThemeToggle } from './ThemeToggle';
import { X, ChevronRight, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { formatPhoneNumber } from '@/src/lib/utils';

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, onOpenInquiry }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 shadow-2xl border-l border-slate-200 dark:border-slate-800 flex flex-col justify-between overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800">
              <Link to="/" onClick={onClose} className="flex items-center">
                <TaskSathiLogo variant="horizontal" size="xs" showTagline={true} />
              </Link>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav Items */}
            <div className="flex-1 px-4 py-6 space-y-2">
              {navigationData.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isExpanded = expandedSection === item.title;

                return (
                  <div key={item.title} className="border-b border-slate-100 dark:border-slate-800/60 pb-2">
                    {hasChildren ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => toggleSection(item.title)}
                          className="flex items-center justify-between w-full py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-left"
                        >
                          <span>{item.title}</span>
                          <ChevronRight
                            className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                              isExpanded ? 'rotate-90 text-blue-600' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-3 pr-2 py-1 space-y-1 overflow-hidden"
                            >
                              {item.children?.map((sub) => (
                                <Link
                                  key={sub.title}
                                  to={sub.href}
                                  onClick={onClose}
                                  className="flex items-center justify-between py-2 px-3 rounded-md text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-colors"
                                >
                                  <span>{sub.title}</span>
                                  {sub.badge && (
                                    <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                                      {sub.badge}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={onClose}
                        className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                );
              })}

              {/* Mobile CTA */}
              <div className="pt-4 space-y-3">
                <Button
                  variant="secondary"
                  size="md"
                  className="w-full justify-center shadow-md shadow-blue-500/20"
                  onClick={() => {
                    onClose();
                    onOpenInquiry();
                  }}
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Let's Talk
                </Button>
              </div>
            </div>

            {/* Footer info & Theme switcher */}
            <div className="p-5 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Theme</span>
                <ThemeToggle />
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                  <span>{siteConfig.location.formatted}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <a href={`tel:${siteConfig.phone}`} className="font-semibold text-slate-800 dark:text-slate-200">
                    {formatPhoneNumber(siteConfig.phone)}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
