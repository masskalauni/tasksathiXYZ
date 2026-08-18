import React, { useState, useEffect } from 'react';
import { adminService } from '@/src/services/adminService';
import { Project, ProjectStatus } from '@/src/types/dashboard';
import { StatusBadge } from '@/src/components/dashboard/StatusBadge';
import { Button } from '@/src/components/ui/Button';
import {
  FolderGit2,
  Plus,
  Search,
  Calendar,
  DollarSign,
  User,
  Users,
  CheckCircle2,
  Clock,
  ChevronRight,
  MoreVertical,
  X,
  Sparkles,
  Layers,
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

export const AdminProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // New Project Form State
  const [newProject, setNewProject] = useState({
    title: '',
    clientName: '',
    serviceCategory: 'Enterprise Software & POS',
    budget: 'NPR 1,000,000',
    startDate: new Date().toISOString().split('T')[0],
    expectedCompletion: '2024-12-31',
    description: '',
    pmName: 'Pooja Thapa',
  });

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    setLoading(true);
    const data = await adminService.getProjects();
    setProjects(data);
    if (data.length > 0 && !selectedProject) {
      setSelectedProject(data[0]);
    }
    setLoading(false);
  };

  const handleUpdateStatus = async (projectId: string, status: ProjectStatus) => {
    const updated = await adminService.updateProject(projectId, { status });
    setProjects((prev) => prev.map((p) => (p.id === projectId ? updated : p)));
    if (selectedProject?.id === projectId) {
      setSelectedProject(updated);
    }
  };

  const handleUpdateProgress = async (projectId: string, progress: number) => {
    const updated = await adminService.updateProject(projectId, { progress });
    setProjects((prev) => prev.map((p) => (p.id === projectId ? updated : p)));
    if (selectedProject?.id === projectId) {
      setSelectedProject(updated);
    }
  };

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title || !newProject.clientName) return;
    const created = await adminService.createProject({
      title: newProject.title,
      clientName: newProject.clientName,
      serviceCategory: newProject.serviceCategory,
      budget: newProject.budget,
      startDate: newProject.startDate,
      expectedCompletion: newProject.expectedCompletion,
      description: newProject.description,
      status: 'planning',
      progress: 5,
      projectManager: {
        id: 'team-2',
        name: newProject.pmName,
        role: 'Project Manager',
        email: 'pooja.t@tasksathi.com',
      },
      team: [],
      milestones: [
        {
          id: `m-${Date.now()}-1`,
          title: 'Discovery & Architecture Blueprint',
          description: 'Technical scoping and database schema validation.',
          status: 'in_progress',
          dueDate: newProject.startDate,
        },
      ],
    });
    setProjects((prev) => [created, ...prev]);
    setSelectedProject(created);
    setIsAddModalOpen(false);
    setNewProject({
      title: '',
      clientName: '',
      serviceCategory: 'Enterprise Software & POS',
      budget: 'NPR 1,000,000',
      startDate: new Date().toISOString().split('T')[0],
      expectedCompletion: '2024-12-31',
      description: '',
      pmName: 'Pooja Thapa',
    });
  };

  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.serviceCategory.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="py-20 flex justify-center items-center">
        <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Projects & Engineering Delivery
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Monitor client delivery pods, milestone velocity, budgets, and IRD deployment timelines.
          </p>
        </div>
        <Button variant="primary" size="sm" onClick={() => setIsAddModalOpen(true)}>
          <Plus className="h-4 w-4 mr-1.5" /> Initialize Project Pod
        </Button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search projects or client names..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {['all', 'planning', 'design', 'development', 'testing', 'completed'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={cn(
                'px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap capitalize transition-colors cursor-pointer',
                statusFilter === st
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              )}
            >
              {st === 'all' ? 'All Pods' : st}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="p-5 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  {project.serviceCategory}
                </span>
                <StatusBadge status={project.status} size="sm" />
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                  Client: {project.clientName}
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              {/* Progress Slider */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-600 dark:text-slate-400">Milestone Velocity</span>
                  <span className="text-blue-600 dark:text-blue-400">{project.progress}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Meta & Action */}
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 font-semibold text-slate-800 dark:text-slate-200">
                  <DollarSign className="h-3.5 w-3.5 text-emerald-500" />
                  {project.budget || 'NPR 1,250,000'}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  Due {project.expectedCompletion}
                </span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 font-medium">
                  <User className="h-3.5 w-3.5 text-purple-600" />
                  <span>PM: {project.projectManager?.name || 'Pooja Thapa'}</span>
                </div>

                {/* Quick Stage Progression */}
                <select
                  value={project.status}
                  onChange={(e) => handleUpdateStatus(project.id, e.target.value as ProjectStatus)}
                  className="text-[11px] font-bold px-2 py-1 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white"
                >
                  <option value="planning">Planning</option>
                  <option value="design">Design</option>
                  <option value="development">Development</option>
                  <option value="testing">Testing & UAT</option>
                  <option value="completed">Completed</option>
                  <option value="on_hold">On Hold</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Project Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Initialize New Project Pod
              </h2>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCreateProject} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  placeholder="e.g. SathiPOS Multi-Store Cloud ERP"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Client Name / Org *
                  </label>
                  <input
                    type="text"
                    required
                    value={newProject.clientName}
                    onChange={(e) => setNewProject({ ...newProject, clientName: e.target.value })}
                    placeholder="e.g. Himalayan Retail Group"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Contract Budget
                  </label>
                  <input
                    type="text"
                    value={newProject.budget}
                    onChange={(e) => setNewProject({ ...newProject, budget: e.target.value })}
                    placeholder="NPR 1,250,000"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Service Category
                  </label>
                  <select
                    value={newProject.serviceCategory}
                    onChange={(e) => setNewProject({ ...newProject, serviceCategory: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="Enterprise Software & POS">Enterprise Software & POS</option>
                    <option value="Custom Web & Mobile Software">Custom Web & Mobile Software</option>
                    <option value="Hospital Management EMR">Hospital Management EMR</option>
                    <option value="Fleet TMS & Telematics">Fleet TMS & Telematics</option>
                    <option value="AI & Automation">AI & Automation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Lead Project Manager
                  </label>
                  <input
                    type="text"
                    value={newProject.pmName}
                    onChange={(e) => setNewProject({ ...newProject, pmName: e.target.value })}
                    placeholder="e.g. Pooja Thapa"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Kickoff Date
                  </label>
                  <input
                    type="date"
                    value={newProject.startDate}
                    onChange={(e) => setNewProject({ ...newProject, startDate: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Target Completion
                  </label>
                  <input
                    type="date"
                    value={newProject.expectedCompletion}
                    onChange={(e) => setNewProject({ ...newProject, expectedCompletion: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Scope & Architectural Summary
                </label>
                <textarea
                  rows={3}
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  placeholder="Key technical deliverables, integrations, IRD tax requirements..."
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <Button type="button" variant="outline" size="sm" onClick={() => setIsAddModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="sm">
                  Launch Project Pod
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
