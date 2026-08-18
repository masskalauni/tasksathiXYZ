import React from 'react';
import { cn } from '@/src/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  bordered?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = false, bordered = true, children, id, ...props }, ref) => {
    return (
      <div
        ref={ref}
        id={id}
        className={cn(
          'rounded-xl bg-white dark:bg-[#111827] text-slate-900 dark:text-slate-100 transition-all duration-200',
          bordered && 'border border-slate-200/80 dark:border-slate-800/80 shadow-xs',
          hoverEffect &&
            'hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md hover:-translate-y-0.5',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  id,
  ...props
}) => (
  <div id={id} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  id,
  ...props
}) => (
  <h3
    id={id}
    className={cn('text-lg font-semibold tracking-tight text-slate-900 dark:text-white', className)}
    {...props}
  >
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  children,
  id,
  ...props
}) => (
  <p id={id} className={cn('text-sm text-slate-600 dark:text-slate-400 leading-relaxed', className)} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  id,
  ...props
}) => (
  <div id={id} className={cn('p-6 pt-0', className)} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  id,
  ...props
}) => (
  <div id={id} className={cn('flex items-center p-6 pt-0', className)} {...props}>
    {children}
  </div>
);
