import React, { useState, useEffect } from 'react';
import { adminService } from '@/src/services/adminService';
import { Task, TaskStatus, TaskPriority, Project } from '@/src/types/dashboard';
import { StatusBadge } from '@/src/components/dashboard/StatusBadge';
import { Button } from '@/src/components/ui/Button';
import {
  CheckSquare,
  Plus,
  Search,
  Calendar,
  User,
  AlertCircle,
  Clock,
  FolderGit2,
  X,
  CheckCircle2,
  Filter,
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const AdminTasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Task Form
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    projectId: 'proj-1',
    priority: 'medium' as TaskPriority,
    assignedName: 'Bikash Karki',
    dueDate: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const [tasksData, projectsData] = await Promise.all([
      adminService.getTasks(),
      adminService.getProjects(),
    ]);
    setTasks(tasksData);
    setProjects(projectsData);
    setLoading(false);
  };

  const handleUpdateStatus = async (taskId: string, status: TaskStatus) => {
    const updated = await adminService.updateTask(taskId, {
      status,
      completedAt: status === 'completed' ? new Date().toISOString().split('T')[0] : undefined,
    });
    setTasks((prev) => prev.map((t) => (t.id === taskId ? updated : t)));
  };

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.title) return;
    const proj = projects.find((p) => p.id === newTask.projectId);
    const created = await adminService.createTask({
      title: newTask.title,
      description: newTask.description,
      projectId: newTask.projectId,
      projectName: proj?.title || 'Active Project',
      priority: newTask.priority,
      status: 'todo',
      dueDate: newTask.dueDate,
      assignedTo: {
        id: 'team-3',
        name: newTask.assignedName,
        role: 'Software Engineer',
        email: 'staff@tasksathi.com',
      },
    });
    setTasks((prev) => [created, ...prev]);
    setIsAddModalOpen(false);
    setNewTask({
      title: '',
      description: '',
      projectId: 'proj-1',
      priority: 'medium',
      assignedName: 'Bikash Karki',
      dueDate: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
    });
  };

  const filteredTasks = tasks.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.assignedTo.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || t.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || t.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getPriorityBadgeClass = (p: TaskPriority) => {
    switch (p) {
      case 'urgent':
        return 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800';
      case 'high':
        return 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      case 'medium':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      default:
        return 'bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

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
            Engineering Task Dispatch
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Dispatch, prioritize, and verify engineering tasks across active sprint pods.
          </p>
        </div>
        <Button variant="primary" size="sm" onClick={() => setIsAddModalOpen(true)}>
          <Plus className="h-4 w-4 mr-1.5" /> Dispatch New Task
        </Button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-3 items-center justify-between p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search task, project, engineer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
          {/* Status Tabs */}
          {['all', 'todo', 'in_progress', 'review', 'completed'].map((st) => (
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
              {st === 'all' ? 'All Tasks' : st.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Tasks Table / Card List */}
      <div className="space-y-3">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
          >
            <div className="flex items-start gap-3 min-w-0 flex-1">
              <button
                type="button"
                onClick={() =>
                  handleUpdateStatus(task.id, task.status === 'completed' ? 'todo' : 'completed')
                }
                className={cn(
                  'mt-0.5 h-5 w-5 rounded-lg border flex items-center justify-center transition-colors cursor-pointer shrink-0',
                  task.status === 'completed'
                    ? 'bg-emerald-600 border-emerald-600 text-white'
                    : 'border-slate-300 dark:border-slate-700 hover:border-blue-600'
                )}
              >
                {task.status === 'completed' && <CheckCircle2 className="h-3.5 w-3.5" />}
              </button>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={cn(
                      'text-sm font-bold text-slate-900 dark:text-white',
                      task.status === 'completed' && 'line-through text-slate-400 dark:text-slate-500'
                    )}
                  >
                    {task.title}
                  </span>
                  <span
                    className={cn(
                      'px-2 py-0.5 rounded-full text-[10px] font-bold uppercase border',
                      getPriorityBadgeClass(task.priority)
                    )}
                  >
                    {task.priority}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400 mt-1">
                  <span className="flex items-center gap-1 font-semibold text-slate-600 dark:text-slate-400">
                    <FolderGit2 className="h-3 w-3 text-purple-600" />
                    {task.projectName}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3 text-blue-600" />
                    {task.assignedTo.name}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Due {task.dueDate}
                  </span>
                </div>

                {task.description && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-1">
                    {task.description}
                  </p>
                )}
              </div>
            </div>

            {/* Status Quick Changer */}
            <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
              <select
                value={task.status}
                onChange={(e) => handleUpdateStatus(task.id, e.target.value as TaskStatus)}
                className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
              >
                <option value="todo">To Do</option>
                <option value="in_progress">In Progress</option>
                <option value="review">In Code Review</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        ))}
      </div>

      {/* Dispatch Task Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Dispatch Sprint Task
              </h2>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCreateTask} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Task Title *
                </label>
                <input
                  type="text"
                  required
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  placeholder="e.g. Integrate Epson TM-T82 Thermal Printer Web Driver"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Target Project Pod *
                  </label>
                  <select
                    value={newTask.projectId}
                    onChange={(e) => setNewTask({ ...newTask, projectId: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  >
                    {projects.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Priority Level
                  </label>
                  <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value as TaskPriority })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent (Hotfix)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Assignee Engineer
                  </label>
                  <select
                    value={newTask.assignedName}
                    onChange={(e) => setNewTask({ ...newTask, assignedName: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="Bikash Karki">Bikash Karki (Full-Stack Engineer)</option>
                    <option value="Sajan Shrestha">Sajan Shrestha (Technical Lead)</option>
                    <option value="Alina Adhikari">Alina Adhikari (UI/UX Specialist)</option>
                    <option value="Pooja Thapa">Pooja Thapa (Product Manager)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Due Date
                  </label>
                  <input
                    type="date"
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Task Specifications / Acceptance Criteria
                </label>
                <textarea
                  rows={3}
                  value={newTask.description}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                  placeholder="Expected behavior, test cases, or API endpoint guidelines..."
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <Button type="button" variant="outline" size="sm" onClick={() => setIsAddModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="sm">
                  Dispatch Task
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
