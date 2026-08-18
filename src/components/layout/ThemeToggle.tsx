import React from 'react';
import { useTheme } from '@/src/hooks/useTheme';
import { Sun, Moon, Laptop } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-1 text-slate-500 dark:text-slate-400 shadow-xs',
        className
      )}
      role="group"
      aria-label="Theme switcher"
    >
      <button
        type="button"
        onClick={() => setTheme('light')}
        title="Light theme"
        aria-label="Switch to light theme"
        className={cn(
          'rounded-md p-1.5 transition-all duration-150 hover:text-slate-900 dark:hover:text-white',
          theme === 'light' && 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-semibold shadow-2xs'
        )}
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => setTheme('dark')}
        title="Dark theme"
        aria-label="Switch to dark theme"
        className={cn(
          'rounded-md p-1.5 transition-all duration-150 hover:text-slate-900 dark:hover:text-white',
          theme === 'dark' && 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-semibold shadow-2xs'
        )}
      >
        <Moon className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => setTheme('system')}
        title="System default theme"
        aria-label="Switch to system theme"
        className={cn(
          'rounded-md p-1.5 transition-all duration-150 hover:text-slate-900 dark:hover:text-white',
          theme === 'system' && 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-semibold shadow-2xs'
        )}
      >
        <Laptop className="h-4 w-4" />
      </button>
    </div>
  );
};

export const QuickThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
        className
      )}
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="h-4 w-4 text-amber-400" />
      ) : (
        <Moon className="h-4 w-4 text-slate-700" />
      )}
    </button>
  );
};
