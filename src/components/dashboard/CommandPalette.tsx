import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/src/context/AuthContext';
import {
  Search,
  LayoutDashboard,
  FolderGit2,
  CheckSquare,
  MessageSquare,
  FileText,
  CreditCard,
  LifeBuoy,
  Users,
  ShieldCheck,
  Briefcase,
  Layers,
  Sparkles,
  X,
  ArrowRight,
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [query, setQuery] = useState('');

  const isAdmin = user?.role === 'admin' || user?.role === 'manager';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const clientItems = [
    { title: 'Client Overview', category: 'Pages', path: '/dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
    { title: 'My Projects', category: 'Pages', path: '/dashboard/projects', icon: <FolderGit2 className="h-4 w-4" /> },
    { title: 'Tasks & Milestones', category: 'Pages', path: '/dashboard/tasks', icon: <CheckSquare className="h-4 w-4" /> },
    { title: 'Team Messages', category: 'Pages', path: '/dashboard/messages', icon: <MessageSquare className="h-4 w-4" /> },
    { title: 'Project Documents', category: 'Pages', path: '/dashboard/documents', icon: <FileText className="h-4 w-4" /> },
    { title: 'Invoices & Billing', category: 'Pages', path: '/dashboard/invoices', icon: <CreditCard className="h-4 w-4" /> },
    { title: 'Support & Tickets', category: 'Pages', path: '/dashboard/support', icon: <LifeBuoy className="h-4 w-4" /> },
  ];

  const adminItems = [
    { title: 'Admin Overview & Analytics', category: 'Admin', path: '/admin', icon: <LayoutDashboard className="h-4 w-4" /> },
    { title: 'Lead Pipeline CRM', category: 'Admin', path: '/admin/leads', icon: <Users className="h-4 w-4" /> },
    { title: 'Enterprise Clients', category: 'Admin', path: '/admin/clients', icon: <Briefcase className="h-4 w-4" /> },
    { title: 'Project Management', category: 'Admin', path: '/admin/projects', icon: <FolderGit2 className="h-4 w-4" /> },
    { title: 'Task Dispatch', category: 'Admin', path: '/admin/tasks', icon: <CheckSquare className="h-4 w-4" /> },
    { title: 'Service Catalog', category: 'Admin', path: '/admin/services', icon: <Layers className="h-4 w-4" /> },
    { title: 'Product Catalog', category: 'Admin', path: '/admin/products', icon: <Sparkles className="h-4 w-4" /> },
    { title: 'Blog Manager', category: 'Admin', path: '/admin/blog', icon: <FileText className="h-4 w-4" /> },
    { title: 'Invoices & IRD Ledger', category: 'Admin', path: '/admin/invoices', icon: <CreditCard className="h-4 w-4" /> },
    { title: 'User Permissions', category: 'Admin', path: '/admin/users', icon: <ShieldCheck className="h-4 w-4" /> },
  ];

  const allItems = isAdmin ? [...adminItems, ...clientItems] : clientItems;

  const filtered = allItems.filter((i) =>
    i.title.toLowerCase().includes(query.toLowerCase()) || i.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-xs">
      <div className="w-full max-w-lg rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Search Header */}
        <div className="flex items-center px-4 border-b border-slate-200 dark:border-slate-800">
          <Search className="h-4 w-4 text-slate-400 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to page..."
            className="w-full py-3.5 px-3 bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-500">
              No matching pages or tools found for "{query}"
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleSelect(item.path)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold">{item.title}</div>
                    <div className="text-[10px] text-slate-400">{item.category}</div>
                  </div>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span>Navigate with mouse or enter</span>
          <span className="font-mono text-[10px] bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded-sm">ESC to close</span>
        </div>
      </div>
    </div>
  );
};
