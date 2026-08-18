import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/src/context/AuthContext';
import { useTheme } from '@/src/hooks/useTheme';
import { NotificationCenter } from './NotificationCenter';
import {
  Menu,
  Search,
  Moon,
  Sun,
  User,
  Settings,
  LogOut,
  ChevronDown,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { Role } from '@/src/types/auth';

interface DashboardTopbarProps {
  onOpenMobileSidebar: () => void;
  onOpenCommandPalette: () => void;
  isAdminMode?: boolean;
}

export const DashboardTopbar: React.FC<DashboardTopbarProps> = ({
  onOpenMobileSidebar,
  onOpenCommandPalette,
  isAdminMode = false,
}) => {
  const navigate = useNavigate();
  const { user, logout, switchRole } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const handleSwitchRole = (role: Role) => {
    switchRole(role);
    setIsUserMenuOpen(false);
    if (role === 'admin' || role === 'manager') {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <header className="h-16 px-4 sm:px-6 bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between sticky top-0 z-30">
      {/* Left side: Hamburger + Search Trigger */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobileSidebar}
          className="lg:hidden p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Open Navigation"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Command Palette Trigger */}
        <button
          type="button"
          onClick={onOpenCommandPalette}
          className="hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-500 dark:text-slate-400 hover:border-blue-500/50 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer shadow-2xs"
        >
          <Search className="h-3.5 w-3.5" />
          <span>Quick search or jump to...</span>
          <kbd className="font-mono text-[10px] bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded-sm border border-slate-200 dark:border-slate-700">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Right side: Actions & User Dropdown */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Mobile Search Icon */}
        <button
          type="button"
          onClick={onOpenCommandPalette}
          className="sm:hidden p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <Search className="h-5 w-5" />
        </button>

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

        {/* Notification Center Dropdown */}
        <NotificationCenter />

        {/* User Menu Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <div className="h-8 w-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-xs shadow-2xs">
              {user?.name ? user.name[0] : 'U'}
            </div>
            <div className="hidden md:block text-left">
              <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                {user?.name || 'User'}
              </div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 capitalize">
                {user?.role || 'Client'}
              </div>
            </div>
            <ChevronDown className="h-3.5 w-3.5 text-slate-400 hidden md:block" />
          </button>

          {isUserMenuOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setIsUserMenuOpen(false)} />
              <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xl z-50 p-1.5 space-y-1 animate-in fade-in zoom-in-95 duration-100">
                <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    {user?.name}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">{user?.email}</div>
                </div>

                <Link
                  to={isAdminMode ? '/admin/settings' : '/dashboard/profile'}
                  onClick={() => setIsUserMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <User className="h-4 w-4 text-slate-400" />
                  <span>My Profile</span>
                </Link>

                <Link
                  to={isAdminMode ? '/admin/settings' : '/dashboard/settings'}
                  onClick={() => setIsUserMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <Settings className="h-4 w-4 text-slate-400" />
                  <span>Settings & Preferences</span>
                </Link>

                {/* Demo Role Switcher in User Dropdown */}
                <div className="pt-1 border-t border-slate-100 dark:border-slate-800">
                  <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Switch Demo Role
                  </div>
                  <button
                    type="button"
                    onClick={() => handleSwitchRole('client')}
                    className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    <span>Client (Aarav)</span>
                    {user?.role === 'client' && <span className="text-blue-600 font-bold">✓</span>}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSwitchRole('admin')}
                    className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    <span>Admin (Sajan)</span>
                    {user?.role === 'admin' && <span className="text-blue-600 font-bold">✓</span>}
                  </button>
                </div>

                <div className="pt-1 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
