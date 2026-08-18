import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { dashboardService } from '@/src/services/dashboardService';
import { Project, ProjectStatus } from '@/src/types/dashboard';
import { DashboardPageHeader } from '@/src/components/dashboard/DashboardPageHeader';
import { StatusBadge } from '@/src/components/dashboard/StatusBadge';
import { SkeletonScreenWrapper } from '@/src/components/layout/SkeletonScreenWrapper';
import { Button } from '@/src/components/ui/Button';
import {
  FolderGit2,
  Calendar,
  Layers,
  ArrowRight,
  Clock,
  CheckCircle2,
  Search,
} from 'lucide-react';

export const ClientProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed' | 'on_hold'>('all');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dashboardService.getProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  const filteredProjects = projects.filter((p) => {
    if (filter === 'active' && (p.status === 'completed' || p.status === 'on_hold')) return false;
    if (filter === 'completed' && p.status !== 'completed') return false;
    if (filter === 'on_hold' && p.status !== 'on_hold') return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.serviceCategory.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="My Projects & Engagements"
        description="Comprehensive repository of your software builds, technical milestones, and active deliveries."
        breadcrumbs={[{ label: 'Projects' }]}
      />

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        {/* Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xs">
          {(['all', 'active', 'completed', 'on_hold'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer ${
                filter === tab
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab === 'all' ? 'All Projects' : tab.replace('_', ' ')}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative max-w-xs w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
            className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600 transition-all shadow-2xs"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <SkeletonScreenWrapper isLoading={loading} type="cards">
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800">
            <FolderGit2 className="h-10 w-10 text-slate-400 mx-auto mb-2" />
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">No projects found</h3>
            <p className="text-xs text-slate-500 mt-1">Try adjusting your search query or status filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800/80 shadow-xs flex flex-col justify-between space-y-5 hover:border-blue-500/50 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        {project.serviceCategory}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                    <StatusBadge status={project.status} />
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <span>Milestone Progress</span>
                      <span className="text-blue-600 dark:text-blue-400">{project.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Milestones count */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                      <span>
                        {project.milestones.filter((m) => m.status === 'completed').length} of {project.milestones.length} Milestones Done
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      <span>Target: {project.expectedCompletion}</span>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  {project.techStack && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <span>Manager:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {project.projectManager.name}
                    </span>
                  </div>
                  <Link to={`/dashboard/projects/${project.id}`}>
                    <Button variant="primary" size="sm">
                      <span>View Project</span>
                      <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </SkeletonScreenWrapper>
    </div>
  );
};
