import React from 'react';
import {
  PageSkeleton,
  DetailPageSkeleton,
  DashboardSkeleton,
  DataTableSkeleton,
  CardSkeleton,
  ServicesIndexSkeleton,
  ProductsIndexSkeleton,
} from '@/src/components/ui/Skeletons';

export type SkeletonType = 'page' | 'detail' | 'dashboard' | 'table' | 'cards' | 'services' | 'products' | 'custom';

export interface SkeletonScreenWrapperProps {
  isLoading: boolean;
  type?: SkeletonType;
  customSkeleton?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const SkeletonScreenWrapper: React.FC<SkeletonScreenWrapperProps> = ({
  isLoading,
  type = 'page',
  customSkeleton,
  children,
  className = '',
}) => {
  if (!isLoading) {
    return <>{children}</>;
  }

  if (customSkeleton) {
    return <div className={className}>{customSkeleton}</div>;
  }

  const renderSkeleton = () => {
    switch (type) {
      case 'detail':
        return <DetailPageSkeleton className={className} />;
      case 'dashboard':
        return <DashboardSkeleton className={className} />;
      case 'table':
        return <DataTableSkeleton className={className} />;
      case 'services':
        return <ServicesIndexSkeleton className={className} />;
      case 'products':
        return <ProductsIndexSkeleton className={className} />;
      case 'cards':
        return (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        );
      case 'page':
      default:
        return <PageSkeleton className={className} />;
    }
  };

  return renderSkeleton();
};
