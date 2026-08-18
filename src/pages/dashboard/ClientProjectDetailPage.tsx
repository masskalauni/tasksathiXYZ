import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { dashboardService } from '@/src/services/dashboardService';
import { Project, Task, DocumentItem } from '@/src/types/dashboard';
import { DashboardPageHeader } from '@/src/components/dashboard/DashboardPageHeader';
import { StatusBadge } from '@/src/components/dashboard/StatusBadge';
import { Button } from '@/src/components/ui/Button';
import {
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  CheckSquare,
  Users,
  Download,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const ClientProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    Promise.all([
      dashboardService.getProjectById(id),
      dashboardService.getTasks(id),
      dashboardService.getDocuments(id),
    ]).then(([projData, taskData, docData]) => {
      setProject(projData || null);
      setTasks(taskData);
      setDocuments(docData);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="py-20 flex justify-center items-center">
        <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="text-center py-20 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Project Not Found</h2>
        <p className="text-xs text-slate-500">The requested project could not be located in your client repository.</p>
        <Link to="/dashboard/projects">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-1.5" /> Back to Projects
          </Button>
        </Link>
      </div>
    );
  }

  const stages = [
    { key: 'discovery', label: '1. Discovery' },
    { key: 'planning', label: '2. Planning' },
    { key: 'design', label: '3. Design' },
    { key: 'development', label: '4. Development' },
    { key: 'testing', label: '5. Testing' },
    { key: 'launch', label: '6. Launch' },
  ];

  const stageOrder = ['discovery', 'planning', 'design', 'development', 'testing', 'launch'];
  const currentStageIndex = stageOrder.indexOf(project.currentStage || 'development');

  return (
    <div className="space-y-8">
      <DashboardPageHeader
        title={project.title}
        description={project.serviceCategory}
        breadcrumbs={[
          { label: 'Projects', href: '/dashboard/projects' },
          { label: project.title },
        ]}
        actions={
          <div className="flex items-center gap-2">
            <StatusBadge status={project.status} size="md" />
            <Link to="/dashboard/messages">
              <Button variant="primary" size="sm">
                Message Team
              </Button>
            </Link>
          </div>
        }
      />

      {/* 6-Stage Visual Timeline */}
      <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span>Engineering Lifecycle Timeline</span>
          </h3>
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
            {project.progress}% Complete
          </span>
        </div>

        {/* Responsive Steps Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-2">
          {stages.map((stage, idx) => {
            const isDone = idx < currentStageIndex;
            const isCurrent = idx === currentStageIndex;
            return (
              <div
                key={stage.key}
                className={cn(
                  'p-3 rounded-2xl border text-center transition-all',
                  isDone
                    ? 'bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300'
                    : isCurrent
                    ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-400 dark:border-blue-700 text-blue-900 dark:text-blue-200 ring-2 ring-blue-500/20'
                    : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-400'
                )}
              >
                <div className="flex items-center justify-center gap-1 text-[11px] font-bold">
                  {isDone ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> : null}
                  <span>{stage.label}</span>
                </div>
                <div className="text-[10px] mt-0.5 opacity-80">
                  {isDone ? 'Completed' : isCurrent ? 'In Active Sprint' : 'Upcoming'}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Overview & Milestones */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Scope & Milestones */}
        <div className="lg:col-span-8 space-y-6">
          {/* Description & Scope */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Project Scope & Objectives</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.description}
            </p>
            {project.deliverables && (
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <span className="text-xs font-bold text-slate-900 dark:text-white">Core Deliverables:</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400">
                  {project.deliverables.map((del, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Milestones Roadmap */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <CheckSquare className="h-4 w-4 text-blue-600" />
              <span>Milestone Breakdown & Sign-offs</span>
            </h3>

            <div className="space-y-3">
              {project.milestones.map((m, idx) => (
                <div
                  key={m.id}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="h-5 w-5 rounded-full bg-slate-200 dark:bg-slate-800 text-[10px] font-bold flex items-center justify-center text-slate-700 dark:text-slate-300">
                        {idx + 1}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">{m.title}</h4>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed pl-7">
                      {m.description}
                    </p>
                    <div className="text-[10px] text-slate-400 pl-7 flex items-center gap-2 pt-1">
                      <span>Target: {m.dueDate}</span>
                      {m.completedDate && <span className="text-emerald-600">✓ Delivered {m.completedDate}</span>}
                    </div>
                  </div>
                  <StatusBadge status={m.status} size="sm" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Team, Metadata, Documents */}
        <div className="lg:col-span-4 space-y-6">
          {/* Metadata Card */}
          <div className="p-5 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 text-xs">
            <h3 className="font-bold text-slate-900 dark:text-white">Project Information</h3>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              <div className="py-2 flex justify-between">
                <span className="text-slate-500">Kickoff Date:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{project.startDate}</span>
              </div>
              <div className="py-2 flex justify-between">
                <span className="text-slate-500">Target Delivery:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{project.expectedCompletion}</span>
              </div>
              <div className="py-2 flex justify-between">
                <span className="text-slate-500">Client:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{project.clientName}</span>
              </div>
              <div className="py-2 flex justify-between">
                <span className="text-slate-500">Project Manager:</span>
                <span className="font-semibold text-blue-600">{project.projectManager.name}</span>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="p-5 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Users className="h-4 w-4 text-blue-600" />
              <span>Assigned Engineering Pod</span>
            </h3>
            <div className="space-y-2">
              {project.team.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-3 p-2 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800"
                >
                  <div className="h-8 w-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                    {member.name[0]}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">{member.name}</div>
                    <div className="text-[10px] text-slate-500">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents Quick Links */}
          <div className="p-5 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <FileText className="h-4 w-4 text-blue-600" />
                <span>Project Files & Specs</span>
              </h3>
              <Link to="/dashboard/documents" className="text-[11px] text-blue-600 hover:underline">
                View all
              </Link>
            </div>
            <div className="space-y-2">
              {documents.slice(0, 3).map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-xs"
                >
                  <div className="flex items-center gap-2 truncate">
                    <FileText className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    <span className="truncate text-slate-700 dark:text-slate-300 font-medium">{doc.name}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => alert(`Downloading mock file: ${doc.name}`)}
                    className="p-1 text-slate-400 hover:text-blue-600 cursor-pointer"
                  >
                    <Download className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
