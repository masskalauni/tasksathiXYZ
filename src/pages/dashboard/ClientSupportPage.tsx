import React, { useState, useEffect } from 'react';
import { dashboardService } from '@/src/services/dashboardService';
import { SupportTicket } from '@/src/types/dashboard';
import { DashboardPageHeader } from '@/src/components/dashboard/DashboardPageHeader';
import { StatusBadge } from '@/src/components/dashboard/StatusBadge';
import { DataTable, Column } from '@/src/components/dashboard/DataTable';
import { Button } from '@/src/components/ui/Button';
import {
  LifeBuoy,
  Plus,
  PhoneCall,
  MessageSquare,
  Clock,
  CheckCircle2,
  AlertCircle,
  X,
} from 'lucide-react';

export const ClientSupportPage: React.FC = () => {
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('Bug Fix');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high' | 'urgent'>('medium');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    dashboardService.getSupportTickets().then((data) => {
      setTickets(data);
      setLoading(false);
    });
  }, []);

  const handleCreateTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject || !message) return;

    setSubmitting(true);
    const newTicket = await dashboardService.createSupportTicket({
      subject,
      category,
      priority,
      message,
    });

    setTickets([newTicket, ...tickets]);
    setSubmitting(false);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setIsModalOpen(false);
      setSubject('');
      setMessage('');
    }, 1500);
  };

  const columns: Column<SupportTicket>[] = [
    {
      key: 'ticketNumber',
      header: 'Ticket #',
      sortable: true,
      render: (t) => <span className="font-mono font-bold text-blue-600">{t.ticketNumber}</span>,
    },
    {
      key: 'subject',
      header: 'Subject / Issue',
      sortable: true,
      render: (t) => (
        <div>
          <div className="font-bold text-slate-900 dark:text-white">{t.subject}</div>
          <div className="text-[10px] text-slate-400">{t.category}</div>
        </div>
      ),
    },
    {
      key: 'priority',
      header: 'Priority',
      sortable: true,
      render: (t) => <StatusBadge status={t.priority} size="sm" />,
    },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (t) => <StatusBadge status={t.status} size="sm" />,
    },
    {
      key: 'createdAt',
      header: 'Created Date',
      sortable: true,
      render: (t) => <span className="text-slate-500 font-mono text-[11px]">{t.createdAt}</span>,
    },
    {
      key: 'lastUpdated',
      header: 'Last Response',
      render: (t) => <span className="text-slate-500 font-mono text-[11px]">{t.lastUpdated}</span>,
    },
  ];

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="Technical Support & Service Desk"
        description="Submit tickets, report production incidents, or request scope adjustments with our 24/7 on-call engineering staff."
        breadcrumbs={[{ label: 'Support' }]}
        actions={
          <Button variant="primary" size="sm" onClick={() => setIsModalOpen(true)}>
            <Plus className="h-4 w-4 mr-1.5" />
            <span>Open New Ticket</span>
          </Button>
        }
      />

      {/* 24/7 Hotline Banner */}
      <div className="p-5 rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-white/10 text-white">
            <PhoneCall className="h-6 w-6 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-sm font-bold">24/7 Enterprise Emergency Escalation</h3>
            <p className="text-xs text-blue-200">
              Direct hotline for Sev-1 critical server outages & security alerts.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="tel:+97714259876"
            className="px-4 py-2 rounded-xl bg-white text-blue-950 font-bold text-xs hover:bg-blue-50 transition-colors"
          >
            +977 1 4259876
          </a>
        </div>
      </div>

      <DataTable
        data={tickets}
        columns={columns}
        searchPlaceholder="Search ticket # or subject..."
        searchKeys={['ticketNumber', 'subject', 'category']}
        filterKey="status"
        filterOptions={[
          { label: 'Open', value: 'open' },
          { label: 'In Progress', value: 'in_progress' },
          { label: 'Waiting for Client', value: 'waiting_for_client' },
          { label: 'Resolved', value: 'resolved' },
          { label: 'Closed', value: 'closed' },
        ]}
      />

      {/* New Ticket Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 space-y-5 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <LifeBuoy className="h-5 w-5 text-blue-600" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Open Support Ticket
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {success ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="h-10 w-10 text-emerald-500 mx-auto" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Ticket Submitted!</h4>
                <p className="text-xs text-slate-500">Your assigned technical lead has been notified.</p>
              </div>
            ) : (
              <form onSubmit={handleCreateTicket} className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="block font-semibold text-slate-700 dark:text-slate-300">
                    Subject / Title
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Payment gateway timeout on mobile checkout"
                    className="w-full py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="block font-semibold text-slate-700 dark:text-slate-300">
                      Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="Bug Fix">Bug Fix / Error</option>
                      <option value="Feature Request">Feature Request</option>
                      <option value="Infrastructure">Cloud & Server</option>
                      <option value="Billing Inquiry">Billing Inquiry</option>
                      <option value="General Support">General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block font-semibold text-slate-700 dark:text-slate-300">
                      Severity Priority
                    </label>
                    <select
                      value={priority}
                      onChange={(e) => setPriority(e.target.value as any)}
                      className="w-full py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="low">Low (Standard)</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent (Production down)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block font-semibold text-slate-700 dark:text-slate-300">
                    Detailed Message & Error Logs
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the issue, steps to reproduce, or affected device/endpoint..."
                    className="w-full py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary" size="sm" loading={submitting}>
                    Dispatch Ticket
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
