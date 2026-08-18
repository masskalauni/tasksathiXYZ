import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Container } from '@/src/components/ui/Container';
import { Badge } from '@/src/components/ui/Badge';
import { ChevronRight, LucideIcon } from 'lucide-react';

export interface PageHeroBreadcrumb {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  badgeVariant?: 'primary' | 'secondary' | 'outline' | 'success';
  title: string | React.ReactNode;
  highlightText?: string;
  description?: string | React.ReactNode;
  align?: 'center' | 'split';
  breadcrumbs?: PageHeroBreadcrumb[];
  highlights?: Array<{ icon?: LucideIcon; label: string } | string>;
  actions?: React.ReactNode;
  rightContent?: React.ReactNode;
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  badgeIcon: BadgeIcon,
  badgeVariant = 'secondary',
  title,
  highlightText,
  description,
  align = 'center',
  breadcrumbs,
  highlights,
  actions,
  rightContent,
  className = '',
}) => {
  return (
    <section
      className={`relative pt-24 pb-14 sm:pt-32 sm:pb-20 border-b border-slate-200/80 dark:border-slate-800/80 overflow-hidden bg-white dark:bg-[#0B0F19] ${className}`}
    >
      {/* Ambient background lighting & grid overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radial ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent dark:from-blue-600/15 dark:via-purple-900/10 dark:to-transparent blur-3xl opacity-80" />
        
        {/* Subtle dot matrix grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(#3B82F6 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Decorative subtle border light line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 dark:via-blue-400/30 to-transparent" />
      </div>

      <Container className="relative z-10">
        {/* Optional Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className={`flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium mb-6 ${
              align === 'center' ? 'justify-center' : 'justify-start'
            }`}
          >
            <Link
              to="/"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                {crumb.href ? (
                  <Link
                    to={crumb.href}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-slate-800 dark:text-slate-200 font-semibold truncate max-w-[200px] sm:max-w-none">
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {align === 'center' ? (
          /* Centered Layout */
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="max-w-3xl mx-auto text-center space-y-5"
          >
            {badge && (
              <div className="flex justify-center">
                <Badge
                  variant={badgeVariant}
                  size="md"
                  className="gap-1.5 px-3 py-1 text-xs font-semibold shadow-xs"
                >
                  {BadgeIcon && <BadgeIcon className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />}
                  <span>{badge}</span>
                </Badge>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.18]">
              {typeof title === 'string' && highlightText ? (
                <>
                  {title.split(highlightText)[0]}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
                    {highlightText}
                  </span>
                  {title.split(highlightText)[1]}
                </>
              ) : (
                title
              )}
            </h1>

            {description && (
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
                {description}
              </p>
            )}

            {/* Highlights pills */}
            {highlights && highlights.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {highlights.map((h, i) => {
                  const label = typeof h === 'string' ? h : h.label;
                  const Icon = typeof h === 'object' && h.icon ? h.icon : null;
                  return (
                    <div
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs font-medium text-slate-700 dark:text-slate-300"
                    >
                      {Icon && <Icon className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />}
                      <span>{label}</span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Action Buttons */}
            {actions && (
              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                {actions}
              </div>
            )}
          </motion.div>
        ) : (
          /* Split 2-Column Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-5 text-left"
            >
              {badge && (
                <div className="flex">
                  <Badge
                    variant={badgeVariant}
                    size="md"
                    className="gap-1.5 px-3 py-1 text-xs font-semibold shadow-xs"
                  >
                    {BadgeIcon && <BadgeIcon className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />}
                    <span>{badge}</span>
                  </Badge>
                </div>
              )}

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.18]">
                {typeof title === 'string' && highlightText ? (
                  <>
                    {title.split(highlightText)[0]}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
                      {highlightText}
                    </span>
                    {title.split(highlightText)[1]}
                  </>
                ) : (
                  title
                )}
              </h1>

              {description && (
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-xl">
                  {description}
                </p>
              )}

              {/* Highlights */}
              {highlights && highlights.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {highlights.map((h, i) => {
                    const label = typeof h === 'string' ? h : h.label;
                    const Icon = typeof h === 'object' && h.icon ? h.icon : null;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        <div className="h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                          {Icon ? <Icon className="h-3 w-3" /> : <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />}
                        </div>
                        <span>{label}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Action Buttons */}
              {actions && (
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {actions}
                </div>
              )}
            </motion.div>

            {rightContent && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                className="lg:col-span-5"
              >
                {rightContent}
              </motion.div>
            )}
          </div>
        )}
      </Container>
    </section>
  );
};
