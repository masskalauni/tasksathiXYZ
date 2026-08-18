import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/src/context/AuthContext';
import { dashboardService } from '@/src/services/dashboardService';
import { Project, Task, Invoice } from '@/src/types/dashboard';
import { MetricCard } from '@/src/components/dashboard/MetricCard';
import { StatusBadge } from '@/src/components/dashboard/StatusBadge';
import { DashboardSkeleton } from '@/src/components/ui/Skeletons';
import {
  FolderGit2,
  CheckSquare,
  CreditCard,
  LifeBuoy,
  ArrowRight,
  Sparkles,
  Calendar,
  CheckCircle2,
  Clock,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/src/components/ui/Button';

export const ClientOverviewPage: React.FC = () => {
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      dashboardService.getProjects(),
      dashboardService.getTasks(),
      dashboardService.getInvoices(),
    ]).then(([projData, taskData, invData]) => {
      setProjects(projData);
      setTasks(taskData);
      setInvoices(invData);
      setLoading(false);
    });
  }, []);

  const activeProjects = projects.filter((p) => p.status !== 'completed' && p.status !== 'on_hold');
  const pendingTasks = tasks.filter((t) => t.status !== 'completed');
  const completedTasks = tasks.filter((t) => t.status === 'completed');
  const outstandingInvoices = invoices.filter((i) => i.status === 'sent' || i.status === 'overdue');

  const handleToggleTask = async (taskId: string, currentStatus: string) => {
    const newStatus = currentStatus === 'completed' ? 'todo' : 'completed';
    const updated = await dashboardService.updateTaskStatus(taskId, newStatus);
    setTasks(tasks.map((t) => (t.id === taskId ? updated : t)));
  };

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Welcome Banner */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden shadow-lg border border-slate-800">
        <div className="absolute right-0 top-0 w-96 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.25),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/20">
            <Sparkles className="h-3.5 w-3.5 text-orange-400" />
            <span>{user?.company || 'Enterprise Partner Portal'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Welcome back, {user?.name?.split(' ')[0] || 'Partner'}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Here is the real-time operational status for your software deliverables, sprint milestones, and IRD tax billing.
          </p>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Active Projects"
          value={activeProjects.length}
          subtitle="2 In Active Development"
          icon={<FolderGit2 className="h-5 w-5" />}
          accentColor="blue"
          trend={{ value: '+100% on schedule', isPositive: true }}
        />
        <MetricCard
          title="Pending Tasks"
          value={pendingTasks.length}
          subtitle="Assigned to Tech Pod"
          icon={<Clock className="h-5 w-5" />}
          accentColor="purple"
        />
        <MetricCard
          title="Completed Tasks"
          value={completedTasks.length}
          subtitle="Sprint Deliverables Done"
          icon={<CheckCircle2 className="h-5 w-5" />}
          accentColor="emerald"
          trend={{ value: '88% completion', isPositive: true }}
        />
        <MetricCard
          title="Outstanding Invoices"
          value={`NPR ${(outstandingInvoices.reduce((sum, i) => sum + i.total, 0) / 1000).toFixed(0)}k`}
          subtitle={`${outstandingInvoices.length} Pending settlement`}
          icon={<CreditCard className="h-5 w-5" />}
          accentColor="orange"
        />
      </div>

      {/* Main Grid: Projects Overview & Tasks Quick-List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Left Column: Active Projects */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FolderGit2 className="h-5 w-5 text-blue-600" />
              <span>Active Projects & Deliverables</span>
            </h2>
            <Link
              to="/dashboard/projects"
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <span>View all projects</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="space-y-4">
            {activeProjects.map((project) => (
              <div
                key={project.id}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800/80 shadow-xs space-y-4 hover:border-blue-500/50 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                      <StatusBadge status={project.status} size="sm" />
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {project.serviceCategory} • Manager: {project.projectManager.name}
                    </p>
                  </div>
                  <Link to={`/dashboard/projects/${project.id}`}>
                    <Button variant="outline" size="sm">
                      <span>View Details</span>
                      <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </Button>
                  </Link>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium text-slate-600 dark:text-slate-300">
                    <span>Sprint Milestone Progress</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">{project.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Footer details */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" />
                    <span>Target Delivery: {project.expectedCompletion}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>Engineering Team:</span>
                    <div className="flex -space-x-1.5">
                      {project.team.map((m) => (
                        <div
                          key={m.id}
                          title={`${m.name} (${m.role})`}
                          className="h-6 w-6 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center border border-white dark:border-slate-900"
                        >
                          {m.name[0]}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Tasks Quick View & Dedicated Support */}
        <div className="lg:col-span-4 space-y-6">
          {/* Tasks Box */}
          <div className="p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckSquare className="h-4 w-4 text-blue-600" />
                <span>Sprint Task Queue</span>
              </h3>
              <Link
                to="/dashboard/tasks"
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                View all
              </Link>
            </div>

            <div className="space-y-2.5">
              {tasks.slice(0, 4).map((task) => (
                <div
                  key={task.id}
                  onClick={() => handleToggleTask(task.id, task.status)}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={task.status === 'completed'}
                    onChange={() => {}}
                    className="mt-0.5 h-4 w-4 rounded-sm border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <div className="flex-1 min-w-0">
                    <div
                      className={`text-xs font-semibold truncate ${
                        task.status === 'completed'
                          ? 'line-through text-slate-400 dark:text-slate-500'
                          : 'text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {task.title}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-slate-400 truncate max-w-[120px]">
                        {task.projectName}
                      </span>
                      <StatusBadge status={task.priority} size="sm" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Manager Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-slate-900 border border-blue-100 dark:border-blue-900/40 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-900 dark:text-blue-300">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span>Dedicated Project Manager</span>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <div className="h-10 w-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                PT
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">Pooja Thapa</div>
                <div className="text-[11px] text-slate-500">Senior Product Manager</div>
              </div>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
              Available 24/7 for sprint coordination, scope updates, and technical inquiries.
            </p>
            <div className="flex gap-2 pt-1">
              <Link to="/dashboard/messages" className="flex-1">
                <Button variant="primary" size="sm" fullWidth>
                  Send Message
                </Button>
              </Link>
              <Link to="/dashboard/support" className="flex-1">
                <Button variant="outline" size="sm" fullWidth>
                  Open Ticket
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
