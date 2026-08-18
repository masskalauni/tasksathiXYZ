import React, { useState, useEffect } from 'react';
import { dashboardService } from '@/src/services/dashboardService';
import { Task, TaskStatus, TaskPriority } from '@/src/types/dashboard';
import { DashboardPageHeader } from '@/src/components/dashboard/DashboardPageHeader';
import { StatusBadge } from '@/src/components/dashboard/StatusBadge';
import { DataTable, Column } from '@/src/components/dashboard/DataTable';
import { CheckSquare, Calendar, User, Clock, CheckCircle2 } from 'lucide-react';

export const ClientTasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dashboardService.getTasks().then((data) => {
      setTasks(data);
      setLoading(false);
    });
  }, []);

  const handleStatusChange = async (taskId: string, newStatus: TaskStatus) => {
    const updated = await dashboardService.updateTaskStatus(taskId, newStatus);
    setTasks(tasks.map((t) => (t.id === taskId ? updated : t)));
  };

  const columns: Column<Task>[] = [
    {
      key: 'title',
      header: 'Task & Deliverable',
      sortable: true,
      render: (task) => (
        <div className="flex items-start gap-2.5 max-w-md">
          <input
            type="checkbox"
            checked={task.status === 'completed'}
            onChange={(e) =>
              handleStatusChange(task.id, e.target.checked ? 'completed' : 'in_progress')
            }
            className="mt-1 h-4 w-4 rounded-sm border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
          />
          <div>
            <div
              className={`font-bold ${
                task.status === 'completed'
                  ? 'line-through text-slate-400 dark:text-slate-500'
                  : 'text-slate-900 dark:text-white'
              }`}
            >
              {task.title}
            </div>
            {task.description && (
              <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{task.description}</p>
            )}
          </div>
        </div>
      ),
    },
    {
      key: 'projectName',
      header: 'Project',
      sortable: true,
      render: (task) => (
        <span className="text-slate-700 dark:text-slate-300 font-medium">{task.projectName}</span>
      ),
    },
    {
      key: 'priority',
      header: 'Priority',
      sortable: true,
      render: (task) => <StatusBadge status={task.priority} size="sm" />,
    },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (task) => (
        <select
          value={task.status}
          onChange={(e) => handleStatusChange(task.id, e.target.value as TaskStatus)}
          className="py-1 px-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 cursor-pointer focus:outline-hidden"
        >
          <option value="todo">Todo</option>
          <option value="in_progress">In Progress</option>
          <option value="review">Review</option>
          <option value="completed">Completed</option>
        </select>
      ),
    },
    {
      key: 'assignedTo',
      header: 'Engineer',
      render: (task) => (
        <div className="flex items-center gap-1.5">
          <div className="h-5 w-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
            {task.assignedTo.name[0]}
          </div>
          <span className="text-slate-600 dark:text-slate-300">{task.assignedTo.name}</span>
        </div>
      ),
    },
    {
      key: 'dueDate',
      header: 'Due Date',
      sortable: true,
      render: (task) => (
        <div className="flex items-center gap-1 text-slate-500 font-mono text-[11px]">
          <Calendar className="h-3.5 w-3.5 text-slate-400" />
          <span>{task.dueDate}</span>
        </div>
      ),
    },
  ];

  const renderMobileCard = (task: Task) => (
    <div className="space-y-2.5">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={task.status === 'completed'}
            onChange={(e) =>
              handleStatusChange(task.id, e.target.checked ? 'completed' : 'in_progress')
            }
            className="mt-0.5 h-4 w-4 rounded-sm border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <span
            className={`font-bold text-xs ${
              task.status === 'completed'
                ? 'line-through text-slate-400'
                : 'text-slate-900 dark:text-white'
            }`}
          >
            {task.title}
          </span>
        </div>
        <StatusBadge status={task.priority} size="sm" />
      </div>

      <div className="text-[11px] text-slate-500">{task.projectName}</div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px]">
        <span className="text-slate-400">Due: {task.dueDate}</span>
        <select
          value={task.status}
          onChange={(e) => handleStatusChange(task.id, e.target.value as TaskStatus)}
          className="py-1 px-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300"
        >
          <option value="todo">Todo</option>
          <option value="in_progress">In Progress</option>
          <option value="review">Review</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="Sprint Tasks & Deliverables"
        description="Track active engineering tasks, code reviews, and milestone handovers in real time."
        breadcrumbs={[{ label: 'Tasks' }]}
      />

      <DataTable
        data={tasks}
        columns={columns}
        searchPlaceholder="Search tasks or projects..."
        searchKeys={['title', 'projectName', 'description']}
        filterKey="status"
        filterOptions={[
          { label: 'Todo', value: 'todo' },
          { label: 'In Progress', value: 'in_progress' },
          { label: 'Review', value: 'review' },
          { label: 'Completed', value: 'completed' },
        ]}
        renderMobileCard={renderMobileCard}
      />
    </div>
  );
};
