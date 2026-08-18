import React, { useState, useEffect } from 'react';
import { adminService } from '@/src/services/adminService';
import { Ticket, TicketStatus, TicketPriority } from '@/src/types/dashboard';
import { StatusBadge } from '@/src/components/dashboard/StatusBadge';
import { Button } from '@/src/components/ui/Button';
import {
  LifeBuoy,
  Plus,
  Search,
  MessageSquare,
  Clock,
  User,
  CheckCircle2,
  AlertCircle,
  FolderGit2,
  X,
  Send,
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const AdminSupportPage: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [replyText, setReplyText] = useState('');

  useEffect(() => {
    loadTickets();
  }, []);

  const loadTickets = async () => {
    setLoading(true);
    const data = await adminService.getTickets();
    setTickets(data);
    if (data.length > 0 && !selectedTicket) {
      setSelectedTicket(data[0]);
    }
    setLoading(false);
  };

  const handleUpdateStatus = async (ticketId: string, status: TicketStatus) => {
    const updated = await adminService.updateTicketStatus(ticketId, status);
    setTickets((prev) => prev.map((t) => (t.id === ticketId ? updated : t)));
    if (selectedTicket?.id === ticketId) {
      setSelectedTicket(updated);
    }
  };

  const handleSendReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedTicket) return;

    const updated = await adminService.replyTicket(
      selectedTicket.id,
      replyText.trim(),
      'Sajan Shrestha (Staff Lead)'
    );

    setTickets((prev) => prev.map((t) => (t.id === selectedTicket.id ? updated : t)));
    setSelectedTicket(updated);
    setReplyText('');
  };

  const filteredTickets = tickets.filter((t) => {
    const matchesSearch =
      t.ticketNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.clientName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || t.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getPriorityBadgeClass = (p: TicketPriority) => {
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
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Support Escalation & Helpdesk Triage
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Monitor SLA tickets, thermal printer integration bugs, and CBMS sync issues.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search ticket number, subject, client..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {['all', 'open', 'in_progress', 'resolved', 'closed'].map((st) => (
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
              {st === 'all' ? 'All Tickets' : st.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Split: Ticket List + Resolution Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Tickets */}
        <div className="lg:col-span-5 space-y-3">
          {filteredTickets.map((ticket) => {
            const isSelected = selectedTicket?.id === ticket.id;
            return (
              <div
                key={ticket.id}
                onClick={() => setSelectedTicket(ticket)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer bg-white dark:bg-[#111827] ${
                  isSelected
                    ? 'border-blue-600 shadow-md ring-1 ring-blue-600/30'
                    : 'border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold text-blue-600 dark:text-blue-400">
                        {ticket.ticketNumber}
                      </span>
                      <span
                        className={cn(
                          'px-2 py-0.5 rounded-full text-[10px] font-bold uppercase border',
                          getPriorityBadgeClass(ticket.priority)
                        )}
                      >
                        {ticket.priority}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                      {ticket.subject}
                    </h3>
                  </div>
                  <StatusBadge status={ticket.status} size="sm" />
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800">
                  <span>{ticket.clientName}</span>
                  <span>{ticket.category}</span>
                  <span>{ticket.createdAt}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Ticket Detail & Reply Thread */}
        <div className="lg:col-span-7 sticky top-24 space-y-4">
          {selectedTicket ? (
            <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-blue-600 dark:text-blue-400">
                      {selectedTicket.ticketNumber}
                    </span>
                    <span
                      className={cn(
                        'px-2 py-0.5 rounded-full text-[10px] font-bold uppercase border',
                        getPriorityBadgeClass(selectedTicket.priority)
                      )}
                    >
                      {selectedTicket.priority} Priority
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                    {selectedTicket.subject}
                  </h2>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Client: {selectedTicket.clientName} • Category: {selectedTicket.category} • Created {selectedTicket.createdAt}
                  </div>
                </div>

                <select
                  value={selectedTicket.status}
                  onChange={(e) =>
                    handleUpdateStatus(selectedTicket.id, e.target.value as TicketStatus)
                  }
                  className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white"
                >
                  <option value="open">Open</option>
                  <option value="in_progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                  <option value="closed">Closed</option>
                </select>
              </div>

              {/* Original Description */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Issue Description
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedTicket.description}
                </p>
              </div>

              {/* Replies Thread */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                  Audit & Response Timeline ({selectedTicket.replies?.length || 0})
                </h3>

                <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                  {selectedTicket.replies?.map((rep) => (
                    <div
                      key={rep.id}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 text-xs space-y-1"
                    >
                      <div className="flex items-center justify-between text-slate-500 text-[11px]">
                        <strong className="text-slate-800 dark:text-slate-200">{rep.author}</strong>
                        <span>{rep.timestamp}</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {rep.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Send Resolution Reply Form */}
              <form onSubmit={handleSendReply} className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                  Post Technical Resolution / Response
                </label>
                <textarea
                  rows={3}
                  required
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Explain steps taken, patch deployed, or follow-up instructions for client..."
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                />
                <div className="flex justify-end">
                  <Button type="submit" variant="primary" size="sm" disabled={!replyText.trim()}>
                    <Send className="h-4 w-4 mr-1.5" /> Post Resolution
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="p-8 text-center rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-400 text-xs">
              Select a ticket from the left to view triage thread.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
