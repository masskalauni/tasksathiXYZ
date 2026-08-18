import React from 'react';

export interface SkeletonProps {
  className?: string;
}

export const SkeletonBox: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div className={`rounded-xl bg-slate-200/80 dark:bg-slate-800/80 shimmer-effect ${className}`} />
);

export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({
  lines = 3,
  className = '',
}) => (
  <div className={`space-y-2.5 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className={`h-3.5 rounded-md bg-slate-200/80 dark:bg-slate-800/80 shimmer-effect ${
          i === lines - 1 ? 'w-4/5' : 'w-full'
        }`}
      />
    ))}
  </div>
);

export const CardSkeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div
    className={`rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] p-6 space-y-4 shadow-xs ${className}`}
  >
    <div className="flex items-center justify-between">
      <SkeletonBox className="h-12 w-12 rounded-xl" />
      <SkeletonBox className="h-5 w-20 rounded-full" />
    </div>
    <SkeletonBox className="h-6 w-3/4 rounded-lg" />
    <SkeletonText lines={2} />
    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
      <SkeletonBox className="h-4 w-24 rounded" />
      <SkeletonBox className="h-4 w-16 rounded" />
    </div>
  </div>
);

export const BlogSkeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div
    className={`rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] p-6 space-y-4 shadow-xs ${className}`}
  >
    <div className="flex items-center gap-2">
      <SkeletonBox className="h-4 w-20 rounded-full" />
      <SkeletonBox className="h-4 w-16 rounded" />
    </div>
    <SkeletonBox className="h-6 w-5/6 rounded-lg" />
    <SkeletonText lines={3} />
    <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80">
      <div className="flex items-center gap-2">
        <SkeletonBox className="h-6 w-6 rounded-full" />
        <SkeletonBox className="h-4 w-24 rounded" />
      </div>
      <SkeletonBox className="h-4 w-16 rounded" />
    </div>
  </div>
);

export const ServiceCardSkeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div
    className={`p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-5 shadow-xs flex flex-col justify-between ${className}`}
  >
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <SkeletonBox className="h-12 w-12 rounded-2xl" />
        <SkeletonBox className="h-5 w-28 rounded-full" />
      </div>
      <div className="space-y-1.5">
        <SkeletonBox className="h-6 w-3/4 rounded-lg" />
        <SkeletonBox className="h-4 w-1/2 rounded" />
      </div>
      <SkeletonText lines={2} />
      <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center gap-2">
          <SkeletonBox className="h-3.5 w-3.5 rounded-full shrink-0" />
          <SkeletonBox className="h-3.5 w-4/5 rounded" />
        </div>
        <div className="flex items-center gap-2">
          <SkeletonBox className="h-3.5 w-3.5 rounded-full shrink-0" />
          <SkeletonBox className="h-3.5 w-2/3 rounded" />
        </div>
        <div className="flex items-center gap-2">
          <SkeletonBox className="h-3.5 w-3.5 rounded-full shrink-0" />
          <SkeletonBox className="h-3.5 w-3/4 rounded" />
        </div>
      </div>
    </div>
    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
      <SkeletonBox className="h-4 w-28 rounded" />
      <SkeletonBox className="h-4 w-16 rounded" />
    </div>
  </div>
);

export const ProductCardSkeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div
    className={`rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] p-6 flex flex-col justify-between shadow-xs ${className}`}
  >
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <SkeletonBox className="h-12 w-12 rounded-xl" />
        <SkeletonBox className="h-5 w-24 rounded-full" />
      </div>
      <div>
        <SkeletonBox className="h-6 w-2/3 rounded-lg" />
        <SkeletonBox className="h-3.5 w-1/2 rounded mt-1.5" />
      </div>
      <SkeletonText lines={3} />
      <div className="space-y-2 pt-2">
        <SkeletonBox className="h-3 w-20 rounded" />
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <SkeletonBox className="h-3.5 w-3.5 rounded-full shrink-0" />
            <SkeletonBox className="h-3 w-4/5 rounded" />
          </div>
          <div className="flex items-center gap-2">
            <SkeletonBox className="h-3.5 w-3.5 rounded-full shrink-0" />
            <SkeletonBox className="h-3 w-3/4 rounded" />
          </div>
        </div>
      </div>
    </div>
    <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6 flex items-center gap-3">
      <SkeletonBox className="h-9 flex-1 rounded-xl" />
      <SkeletonBox className="h-9 w-20 rounded-xl" />
    </div>
  </div>
);

export const ProductSkeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <ProductCardSkeleton className={className} />
);

/**
 * Services Index Page Skeleton
 */
export const ServicesIndexSkeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div className={`w-full ${className}`}>
    {/* Page Hero Skeleton */}
    <div className="pt-28 pb-14 sm:pt-36 sm:pb-20 border-b border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-b from-slate-50/60 via-white to-slate-50/40 dark:from-[#0B0F19] dark:via-[#0E1526] dark:to-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        <SkeletonBox className="h-4 w-32 rounded-md" />
        <SkeletonBox className="h-6 w-52 rounded-full" />
        <SkeletonBox className="h-10 sm:h-12 w-4/5 max-w-3xl rounded-xl" />
        <SkeletonBox className="h-5 w-full max-w-2xl rounded-lg" />
        <div className="flex flex-wrap gap-4 pt-3">
          <SkeletonBox className="h-7 w-48 rounded-full" />
          <SkeletonBox className="h-7 w-44 rounded-full" />
          <SkeletonBox className="h-7 w-48 rounded-full" />
        </div>
        <div className="flex gap-3 pt-3">
          <SkeletonBox className="h-10 w-44 rounded-xl" />
          <SkeletonBox className="h-10 w-40 rounded-xl" />
        </div>
      </div>
    </div>

    {/* Filter and Search Bar Skeleton */}
    <div className="border-b border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/30 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          <SkeletonBox className="h-8 w-14 rounded-xl" />
          <SkeletonBox className="h-8 w-36 rounded-xl" />
          <SkeletonBox className="h-8 w-40 rounded-xl" />
          <SkeletonBox className="h-8 w-36 rounded-xl" />
          <SkeletonBox className="h-8 w-32 rounded-xl" />
        </div>
        <SkeletonBox className="h-9 w-full md:w-72 rounded-xl" />
      </div>
    </div>

    {/* Services Grid Skeleton */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <ServiceCardSkeleton key={i} />
        ))}
      </div>
    </div>
  </div>
);

/**
 * Products Index Page Skeleton
 */
export const ProductsIndexSkeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div className={`w-full ${className}`}>
    {/* Page Hero Skeleton */}
    <div className="pt-28 pb-14 sm:pt-36 sm:pb-20 border-b border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-b from-slate-50/60 via-white to-slate-50/40 dark:from-[#0B0F19] dark:via-[#0E1526] dark:to-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        <SkeletonBox className="h-4 w-32 rounded-md" />
        <SkeletonBox className="h-6 w-56 rounded-full" />
        <SkeletonBox className="h-10 sm:h-12 w-4/5 max-w-3xl rounded-xl" />
        <SkeletonBox className="h-5 w-full max-w-2xl rounded-lg" />
        <div className="flex flex-wrap gap-4 pt-3">
          <SkeletonBox className="h-7 w-40 rounded-full" />
          <SkeletonBox className="h-7 w-48 rounded-full" />
          <SkeletonBox className="h-7 w-44 rounded-full" />
        </div>
      </div>
    </div>

    {/* Category Filter Bar Skeleton */}
    <div className="border-b border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/30 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
        <SkeletonBox className="h-8 w-14 rounded-xl" />
        <SkeletonBox className="h-8 w-36 rounded-xl" />
        <SkeletonBox className="h-8 w-32 rounded-xl" />
        <SkeletonBox className="h-8 w-36 rounded-xl" />
      </div>
    </div>

    {/* Products Grid Skeleton */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  </div>
);

/**
 * Standard Marketing Page Skeleton with Hero + Content Cards
 */
export const PageSkeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div className={`min-h-[75vh] w-full ${className}`}>
    {/* Page Hero Skeleton */}
    <div className="pt-28 pb-14 sm:pt-36 sm:pb-20 border-b border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-b from-slate-50/60 via-white to-slate-50/40 dark:from-[#0B0F19] dark:via-[#0E1526] dark:to-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        <SkeletonBox className="h-4 w-32 rounded-md" />
        <SkeletonBox className="h-6 w-48 rounded-full" />
        <SkeletonBox className="h-10 sm:h-12 w-3/4 max-w-2xl rounded-xl" />
        <SkeletonBox className="h-5 w-full max-w-xl rounded-lg" />
        <div className="flex flex-wrap gap-4 pt-3">
          <SkeletonBox className="h-7 w-36 rounded-full" />
          <SkeletonBox className="h-7 w-40 rounded-full" />
          <SkeletonBox className="h-7 w-44 rounded-full" />
        </div>
      </div>
    </div>

    {/* Content Grid Skeleton */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      <div className="flex items-center gap-3 overflow-x-auto pb-2">
        <SkeletonBox className="h-9 w-20 rounded-xl shrink-0" />
        <SkeletonBox className="h-9 w-28 rounded-xl shrink-0" />
        <SkeletonBox className="h-9 w-32 rounded-xl shrink-0" />
        <SkeletonBox className="h-9 w-24 rounded-xl shrink-0" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  </div>
);

/**
 * Split Detail Page Skeleton (Services, Products, Industries, Case Studies)
 */
export const DetailPageSkeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div className={`min-h-[75vh] w-full ${className}`}>
    <div className="pt-28 pb-14 sm:pt-36 sm:pb-20 border-b border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-b from-slate-50/60 via-white to-slate-50/40 dark:from-[#0B0F19] dark:via-[#0E1526] dark:to-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <SkeletonBox className="h-4 w-40 rounded-md" />
            <SkeletonBox className="h-6 w-32 rounded-full" />
            <SkeletonBox className="h-10 sm:h-12 w-5/6 rounded-xl" />
            <SkeletonText lines={3} />
            <div className="flex gap-3 pt-3">
              <SkeletonBox className="h-10 w-36 rounded-xl" />
              <SkeletonBox className="h-10 w-36 rounded-xl" />
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-[#111827]/80 p-7 space-y-5">
              <div className="flex items-center gap-4">
                <SkeletonBox className="h-14 w-14 rounded-2xl shrink-0" />
                <div className="space-y-2 flex-1">
                  <SkeletonBox className="h-4 w-28 rounded" />
                  <SkeletonBox className="h-6 w-4/5 rounded-lg" />
                </div>
              </div>
              <SkeletonText lines={4} />
              <SkeletonBox className="h-10 w-full rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 p-7 space-y-4 bg-white dark:bg-[#111827]">
          <SkeletonBox className="h-5 w-36 rounded-full" />
          <SkeletonBox className="h-7 w-3/4 rounded-lg" />
          <SkeletonText lines={3} />
        </div>
        <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 p-7 space-y-4 bg-white dark:bg-[#111827]">
          <SkeletonBox className="h-5 w-36 rounded-full" />
          <SkeletonBox className="h-7 w-3/4 rounded-lg" />
          <SkeletonText lines={3} />
        </div>
      </div>
    </div>
  </div>
);

/**
 * Dashboard Overview Skeleton (Client & Admin Portals)
 */
export const DashboardSkeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div className={`p-6 sm:p-8 space-y-8 w-full max-w-7xl mx-auto ${className}`}>
    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="space-y-2">
        <SkeletonBox className="h-4 w-32 rounded" />
        <SkeletonBox className="h-8 w-64 rounded-xl" />
      </div>
      <div className="flex gap-3">
        <SkeletonBox className="h-9 w-28 rounded-xl" />
        <SkeletonBox className="h-9 w-32 rounded-xl" />
      </div>
    </div>

    {/* Metric Stat Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] p-5 space-y-3 shadow-xs"
        >
          <div className="flex items-center justify-between">
            <SkeletonBox className="h-4 w-24 rounded" />
            <SkeletonBox className="h-8 w-8 rounded-lg" />
          </div>
          <SkeletonBox className="h-7 w-20 rounded-lg" />
          <SkeletonBox className="h-3.5 w-32 rounded" />
        </div>
      ))}
    </div>

    {/* Content Panels / Table */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <SkeletonBox className="h-5 w-40 rounded-lg" />
          <SkeletonBox className="h-4 w-20 rounded" />
        </div>
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-800/60"
            >
              <div className="flex items-center gap-3">
                <SkeletonBox className="h-9 w-9 rounded-lg" />
                <div className="space-y-1.5">
                  <SkeletonBox className="h-4 w-44 rounded" />
                  <SkeletonBox className="h-3 w-28 rounded" />
                </div>
              </div>
              <SkeletonBox className="h-6 w-20 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] p-6 space-y-4">
        <SkeletonBox className="h-5 w-36 rounded-lg" />
        <SkeletonBox className="h-40 w-full rounded-xl" />
        <SkeletonText lines={3} />
      </div>
    </div>
  </div>
);

/**
 * Data Table Skeleton
 */
export const DataTableSkeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div
    className={`rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] p-6 space-y-5 ${className}`}
  >
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <SkeletonBox className="h-10 w-64 rounded-xl" />
      <div className="flex gap-2">
        <SkeletonBox className="h-10 w-24 rounded-xl" />
        <SkeletonBox className="h-10 w-28 rounded-xl" />
      </div>
    </div>

    <div className="space-y-2 pt-2">
      <SkeletonBox className="h-10 w-full rounded-lg" />
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonBox key={i} className="h-12 w-full rounded-lg" />
      ))}
    </div>

    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
      <SkeletonBox className="h-4 w-32 rounded" />
      <div className="flex gap-2">
        <SkeletonBox className="h-8 w-16 rounded-lg" />
        <SkeletonBox className="h-8 w-16 rounded-lg" />
      </div>
    </div>
  </div>
);
