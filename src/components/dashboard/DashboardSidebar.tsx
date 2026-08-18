import React from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/src/context/AuthContext';
import { TaskSathiLogo } from '@/src/components/ui/TaskSathiLogo';
import {
  LayoutDashboard,
  FolderGit2,
  CheckSquare,
  MessageSquare,
  FileText,
  CreditCard,
  LifeBuoy,
  User,
  Settings,
  LogOut,
  Users,
  Briefcase,
  Layers,
  Sparkles,
  BarChart3,
  ShieldCheck,
  Globe,
  ChevronRight,
  Repeat,
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Role } from '@/src/types/auth';

interface DashboardSidebarProps {
  isAdminMode?: boolean;
  onCloseMobile?: () => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  isAdminMode = false,
  onCloseMobile,
}) => {
  const navigate = useNavigate();
  const { user, logout, switchRole } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const clientNav = [
    { label: 'Overview', href: '/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
    { label: 'Projects', href: '/dashboard/projects', icon: <FolderGit2 className="h-4 w-4" />, badge: '2' },
    { label: 'Tasks', href: '/dashboard/tasks', icon: <CheckSquare className="h-4 w-4" />, badge: '4' },
    { label: 'Messages', href: '/dashboard/messages', icon: <MessageSquare className="h-4 w-4" /> },
    { label: 'Documents', href: '/dashboard/documents', icon: <FileText className="h-4 w-4" /> },
    { label: 'Invoices', href: '/dashboard/invoices', icon: <CreditCard className="h-4 w-4" />, badge: '1 Due' },
    { label: 'Support', href: '/dashboard/support', icon: <LifeBuoy className="h-4 w-4" /> },
    { label: 'Profile', href: '/dashboard/profile', icon: <User className="h-4 w-4" /> },
    { label: 'Settings', href: '/dashboard/settings', icon: <Settings className="h-4 w-4" /> },
  ];

  const adminNav = [
    { label: 'Overview', href: '/admin', icon: <LayoutDashboard className="h-4 w-4" /> },
    { label: 'Leads CRM', href: '/admin/leads', icon: <Users className="h-4 w-4" />, badge: '5' },
    { label: 'Clients', href: '/admin/clients', icon: <Briefcase className="h-4 w-4" /> },
    { label: 'Projects', href: '/admin/projects', icon: <FolderGit2 className="h-4 w-4" /> },
    { label: 'Tasks Dispatch', href: '/admin/tasks', icon: <CheckSquare className="h-4 w-4" /> },
    { label: 'Services', href: '/admin/services', icon: <Layers className="h-4 w-4" /> },
    { label: 'Products', href: '/admin/products', icon: <Sparkles className="h-4 w-4" /> },
    { label: 'Portfolio', href: '/admin/portfolio', icon: <Briefcase className="h-4 w-4" /> },
    { label: 'Blog Posts', href: '/admin/blog', icon: <FileText className="h-4 w-4" /> },
    { label: 'Invoices & IRD', href: '/admin/invoices', icon: <CreditCard className="h-4 w-4" /> },
    { label: 'Messages', href: '/admin/messages', icon: <MessageSquare className="h-4 w-4" /> },
    { label: 'Support Queue', href: '/admin/support', icon: <LifeBuoy className="h-4 w-4" />, badge: '2' },
    { label: 'Analytics', href: '/admin/analytics', icon: <BarChart3 className="h-4 w-4" /> },
    { label: 'Users & Roles', href: '/admin/users', icon: <ShieldCheck className="h-4 w-4" /> },
    { label: 'Settings', href: '/admin/settings', icon: <Settings className="h-4 w-4" /> },
  ];

  const navItems = isAdminMode ? adminNav : clientNav;

  return (
    <aside className="w-64 h-full flex flex-col justify-between bg-white dark:bg-[#111827] border-r border-slate-200 dark:border-slate-800/80 select-none">
      {/* Top Header */}
      <div>
        <div className="p-5 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
          <Link to="/" className="inline-block" onClick={onCloseMobile}>
            <TaskSathiLogo size="sm" />
          </Link>
          <span
            className={cn(
              'px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border',
              isAdminMode
                ? 'bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                : 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800'
            )}
          >
            {isAdminMode ? 'Admin Console' : 'Client Portal'}
          </span>
        </div>

        {/* Navigation List */}
        <nav className="p-3 space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/dashboard' || item.href === '/admin'}
              onClick={onCloseMobile}
              className={({ isActive }) =>
                cn(
                  'flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-150',
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70 hover:text-slate-900 dark:hover:text-white'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center gap-2.5">
                    <span className={cn(isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400')}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={cn(
                        'px-1.5 py-0.5 rounded-md text-[10px] font-bold',
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      )}
                    >
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Switcher & Profile Strip */}
      <div className="p-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
        {/* Quick Mode Switcher for multi-role users */}
        <div className="flex gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] font-semibold">
          <button
            type="button"
            onClick={() => {
              if (user?.role === 'client') switchRole('admin');
              navigate(isAdminMode ? '/dashboard' : '/admin');
              onCloseMobile?.();
            }}
            className="w-full py-1.5 px-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Repeat className="h-3 w-3 text-blue-600" />
            <span>Switch to {isAdminMode ? 'Client Portal' : 'Admin Console'}</span>
          </button>
        </div>

        {/* Public Site Link */}
        <Link
          to="/"
          onClick={onCloseMobile}
          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Globe className="h-3.5 w-3.5" />
            <span>Public Website</span>
          </div>
          <ChevronRight className="h-3 w-3" />
        </Link>

        {/* User Mini Card */}
        <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center gap-2 min-w-0">
            <div className="h-8 w-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-xs shrink-0">
              {user?.name ? user.name[0] : 'U'}
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                {user?.name || 'Authorized User'}
              </div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate capitalize">
                {user?.role || 'Client'} • {user?.company || 'Enterprise'}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            title="Sign Out"
            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
