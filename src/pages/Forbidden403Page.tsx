import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/src/context/AuthContext';
import { TaskSathiLogo } from '@/src/components/ui/TaskSathiLogo';
import { Button } from '@/src/components/ui/Button';
import { ShieldAlert, ArrowLeft, LayoutDashboard, Home, UserCheck } from 'lucide-react';

export const Forbidden403Page: React.FC = () => {
  const { user, switchRole } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-[#0B0F19]">
      <div className="max-w-md w-full p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xl text-center space-y-6">
        <div className="inline-block mb-2">
          <Link to="/">
            <TaskSathiLogo size="md" />
          </Link>
        </div>

        <div className="h-16 w-16 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto border border-amber-200 dark:border-amber-900/60 shadow-xs">
          <ShieldAlert className="h-8 w-8" />
        </div>

        <div className="space-y-2">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 text-[11px] font-bold tracking-wide uppercase">
            403 • Access Restricted
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Administrative Access Only
          </h1>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Your current account role (<strong className="capitalize text-slate-900 dark:text-white">{user?.role || 'Client'}</strong>) does not have privileges to view the TASK SATHI Internal Administration Console.
          </p>
        </div>

        {/* Demo Role Switcher helper for reviewers */}
        <div className="p-3.5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-left space-y-2">
          <div className="text-[11px] font-semibold text-blue-900 dark:text-blue-300 flex items-center gap-1.5">
            <UserCheck className="h-3.5 w-3.5 text-blue-600" />
            <span>Reviewing as Demo Admin?</span>
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400">
            You can switch to the Admin profile to test the administrative features:
          </p>
          <button
            type="button"
            onClick={() => {
              switchRole('admin');
              window.location.href = '/admin';
            }}
            className="w-full py-1.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors cursor-pointer text-center"
          >
            Switch to Demo Admin Profile
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link to="/dashboard" className="flex-1">
            <Button variant="primary" fullWidth size="md">
              <LayoutDashboard className="h-4 w-4 mr-1.5" />
              <span>Client Portal</span>
            </Button>
          </Link>
          <Link to="/" className="flex-1">
            <Button variant="outline" fullWidth size="md">
              <Home className="h-4 w-4 mr-1.5" />
              <span>Public Site</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
