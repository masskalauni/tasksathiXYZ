import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { adminService } from '@/src/services/adminService';
import { dashboardService } from '@/src/services/dashboardService';
import { MetricCard } from '@/src/components/dashboard/MetricCard';
import { StatusBadge } from '@/src/components/dashboard/StatusBadge';
import { DashboardSkeleton } from '@/src/components/ui/Skeletons';
import { Button } from '@/src/components/ui/Button';
import {
  Users,
  Briefcase,
  CreditCard,
  LifeBuoy,
  Plus,
  ArrowRight,
  TrendingUp,
  FolderGit2,
  CheckCircle2,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

export const AdminOverviewPage: React.FC = () => {
  const [stats, setStats] = useState<any>(null);
  const [leads, setLeads] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      adminService.getAdminStats(),
      adminService.getLeads(),
      dashboardService.getProjects(),
    ]).then(([statsData, leadsData, projData]) => {
      setStats(statsData);
      setLeads(leadsData);
      setProjects(projData);
      setLoading(false);
    });
  }, []);

  if (loading || !stats) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 text-white shadow-xl border border-slate-800">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-400/20">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>TaskSathi Internal Operations & Management Console</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Engineering & Revenue Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Live telemetry across enterprise leads, client delivery pods, and billing.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link to="/admin/leads">
            <Button variant="primary" size="sm">
              <Plus className="h-3.5 w-3.5 mr-1" /> Add Lead
            </Button>
          </Link>
          <Link to="/admin/invoices">
            <Button variant="secondary" size="sm">
              <Plus className="h-3.5 w-3.5 mr-1" /> Create Invoice
            </Button>
          </Link>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Billed Revenue"
          value={`NPR ${(stats.totalRevenue / 1000000).toFixed(2)}M`}
          subtitle="YTD FY 2081/82"
          icon={<CreditCard className="h-5 w-5" />}
          accentColor="emerald"
          trend={{ value: '+24.5% vs last quarter', isPositive: true }}
        />
        <MetricCard
          title="Active CRM Leads"
          value={stats.activeLeads}
          subtitle={`NPR ${(stats.leadsPipelineValue / 1000000).toFixed(1)}M Pipeline`}
          icon={<Users className="h-5 w-5" />}
          accentColor="blue"
          trend={{ value: '5 New inquiries', isPositive: true }}
        />
        <MetricCard
          title="Active Client Pods"
          value={stats.activeProjects}
          subtitle={`${stats.totalClients} Retained Clients`}
          icon={<FolderGit2 className="h-5 w-5" />}
          accentColor="purple"
        />
        <MetricCard
          title="Open Tickets SLA"
          value={stats.openTickets}
          subtitle="Avg resolution < 2.4 hrs"
          icon={<LifeBuoy className="h-5 w-5" />}
          accentColor="rose"
        />
      </div>

      {/* Grid: Leads CRM & Projects Delivery */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Left: Recent Leads Pipeline */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span>Inbound Leads & Sales Pipeline</span>
            </h2>
            <Link
              to="/admin/leads"
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <span>View CRM</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="p-5 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            {leads.slice(0, 5).map((lead) => (
              <div
                key={lead.id}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3 hover:border-blue-500/40 transition-colors"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {lead.name}
                    </span>
                    <span className="text-[11px] text-slate-500 truncate">({lead.company})</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {lead.serviceRequested || lead.serviceInterest || 'Custom Project'} • {lead.budgetRange || (lead.estimatedValue ? `NPR ${Number(lead.estimatedValue).toLocaleString()}` : 'Custom Scope')}
                  </div>
                </div>
                <StatusBadge status={lead.status} size="sm" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Active Project Health */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FolderGit2 className="h-5 w-5 text-purple-600" />
              <span>Project Pod Health</span>
            </h2>
            <Link
              to="/admin/projects"
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <span>Manage</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="p-5 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
            {projects.map((p) => (
              <div key={p.id} className="space-y-2 pb-3 border-b border-slate-100 dark:border-slate-800 last:border-0 last:pb-0">
                <div className="flex justify-between items-start text-xs">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">{p.title}</span>
                    <div className="text-[10px] text-slate-400">Client: {p.clientName}</div>
                  </div>
                  <StatusBadge status={p.status} size="sm" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-medium text-slate-500">
                    <span>Sprint Milestone</span>
                    <span className="text-blue-600 font-bold">{p.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
