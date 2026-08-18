import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs';

interface DashboardPageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: React.ReactNode;
  homeHref?: string;
}

export const DashboardPageHeader: React.FC<DashboardPageHeaderProps> = ({
  title,
  description,
  breadcrumbs,
  actions,
  homeHref,
}) => {
  return (
    <div className="mb-6 sm:mb-8 space-y-3">
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} homeHref={homeHref} />}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {title}
          </h1>
          {description && (
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {description}
            </p>
          )}
        </div>
        {actions && <div className="flex items-center gap-2.5 shrink-0">{actions}</div>}
      </div>
    </div>
  );
};
