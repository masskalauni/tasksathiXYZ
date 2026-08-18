import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/src/lib/utils';
import { ChevronDown } from 'lucide-react';

export interface DropdownItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
  description?: string;
  badge?: string;
  onClick?: () => void;
}

export interface DropdownProps {
  triggerLabel: string;
  items: DropdownItem[];
  className?: string;
  triggerClassName?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  triggerLabel,
  items,
  className,
  triggerClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={cn('relative inline-block text-left', className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className={cn(
          'inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
          isOpen && 'text-blue-600 dark:text-blue-400 bg-slate-100/80 dark:bg-slate-800/60',
          triggerClassName
        )}
      >
        <span>{triggerLabel}</span>
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform duration-200 text-slate-400', isOpen && 'rotate-180 text-blue-600')}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-72 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-2 shadow-xl z-50 focus:outline-none animate-in fade-in zoom-in-95 duration-150">
          <div className="space-y-1">
            {items.map((item) => (
              <a
                key={item.id}
                href={item.href || '#'}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                  setIsOpen(false);
                }}
                className="group flex items-start gap-3 rounded-lg p-2.5 text-left transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/80"
              >
                {item.icon && <div className="mt-0.5 text-blue-600 dark:text-blue-400 shrink-0">{item.icon}</div>}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="rounded-full bg-blue-50 dark:bg-blue-950 px-1.5 py-0.2 text-[10px] font-semibold text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5">
                      {item.description}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
