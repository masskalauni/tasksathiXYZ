import React, { useState, useEffect } from 'react';
import { adminService } from '@/src/services/adminService';
import { Lead, LeadStatus } from '@/src/types/dashboard';
import { StatusBadge } from '@/src/components/dashboard/StatusBadge';
import { Button } from '@/src/components/ui/Button';
import {
  Users,
  Plus,
  Search,
  Filter,
  Phone,
  Mail,
  Building,
  Calendar,
  MessageSquare,
  DollarSign,
  Clock,
  CheckCircle2,
  X,
  Send,
  MoreVertical,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const AdminLeadsPage: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [newNoteText, setNewNoteText] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Lead Form State
  const [newLead, setNewLead] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceRequested: 'Enterprise ERP & Multi-Warehouse Inventory',
    budgetRange: 'NPR 500,000 - 1,000,000',
    timeline: 'Within 1 Month',
    message: '',
  });

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    setLoading(true);
    const data = await adminService.getLeads();
    setLeads(data);
    if (data.length > 0 && !selectedLead) {
      setSelectedLead(data[0]);
    }
    setLoading(false);
  };

  const handleStatusChange = async (leadId: string, status: LeadStatus) => {
    const updated = await adminService.updateLeadStatus(leadId, status);
    setLeads((prev) => prev.map((l) => (l.id === leadId ? updated : l)));
    if (selectedLead?.id === leadId) {
      setSelectedLead(updated);
    }
  };

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLead || !newNoteText.trim()) return;
    const updated = await adminService.addLeadNote(selectedLead.id, 'Admin (Sajan Shrestha)', newNoteText.trim());
    setLeads((prev) => prev.map((l) => (l.id === selectedLead.id ? updated : l)));
    setSelectedLead(updated);
    setNewNoteText('');
  };

  const handleCreateLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLead.name || !newLead.company) return;
    const created = await adminService.createLead(newLead);
    setLeads((prev) => [created, ...prev]);
    setSelectedLead(created);
    setIsAddModalOpen(false);
    setNewLead({
      name: '',
      email: '',
      phone: '',
      company: '',
      serviceRequested: 'Enterprise ERP & Multi-Warehouse Inventory',
      budgetRange: 'NPR 500,000 - 1,000,000',
      timeline: 'Within 1 Month',
      message: '',
    });
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.serviceRequested.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statuses: { label: string; value: LeadStatus | 'all' }[] = [
    { label: 'All Leads', value: 'all' },
    { label: 'New', value: 'new' },
    { label: 'Contacted', value: 'contacted' },
    { label: 'Qualified', value: 'qualified' },
    { label: 'Proposal Sent', value: 'proposal' },
    { label: 'Won', value: 'won' },
    { label: 'Lost', value: 'lost' },
  ];

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
            Leads & CRM Pipeline
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Capture, qualify, and convert enterprise client inquiries and technical RFPs across Nepal.
          </p>
        </div>
        <Button variant="primary" size="sm" onClick={() => setIsAddModalOpen(true)}>
          <Plus className="h-4 w-4 mr-1.5" /> Log New Lead
        </Button>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row gap-3 items-center justify-between p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search leads by name, company, or tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {statuses.map((st) => (
            <button
              key={st.value}
              onClick={() => setStatusFilter(st.value)}
              className={cn(
                'px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer',
                statusFilter === st.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              )}
            >
              {st.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main 2-Column Split: Leads List + Detail Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Leads List */}
        <div className="lg:col-span-6 space-y-3">
          {filteredLeads.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-500 text-xs">
              No leads match your filter criteria.
            </div>
          ) : (
            filteredLeads.map((lead) => {
              const isSelected = selectedLead?.id === lead.id;
              return (
                <div
                  key={lead.id}
                  onClick={() => setSelectedLead(lead)}
                  className={cn(
                    'p-4 rounded-2xl border transition-all cursor-pointer bg-white dark:bg-[#111827]',
                    isSelected
                      ? 'border-blue-600 shadow-md ring-1 ring-blue-600/30'
                      : 'border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900 dark:text-white truncate">
                          {lead.name}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium truncate">
                          • {lead.company}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1 truncate">
                        {lead.serviceRequested}
                      </div>
                    </div>
                    <StatusBadge status={lead.status} size="sm" />
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mt-2 leading-relaxed">
                    {lead.message}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <span className="flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
                      <DollarSign className="h-3 w-3 text-emerald-500" />
                      {lead.budgetRange}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {lead.timeline}
                    </span>
                    <span className="flex items-center gap-1 ml-auto">
                      <Calendar className="h-3 w-3" />
                      {lead.createdAt}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Column: Lead Inspector & Action Panel */}
        <div className="lg:col-span-6 sticky top-24 space-y-4">
          {selectedLead ? (
            <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              {/* Lead Top Profile */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                      {selectedLead.name}
                    </h2>
                    <StatusBadge status={selectedLead.status} size="sm" />
                  </div>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-0.5">
                    {selectedLead.company}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Source: {selectedLead.source} • Received on {selectedLead.createdAt}
                  </div>
                </div>

                {/* Status Stage Selector */}
                <div className="text-right">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Stage Pipeline
                  </label>
                  <select
                    value={selectedLead.status}
                    onChange={(e) => handleStatusChange(selectedLead.id, e.target.value as LeadStatus)}
                    className="text-xs font-semibold px-2.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="new">New Inquiry</option>
                    <option value="contacted">Contacted</option>
                    <option value="qualified">Qualified</option>
                    <option value="proposal">Proposal Sent</option>
                    <option value="won">Won (Closed)</option>
                    <option value="lost">Lost</option>
                  </select>
                </div>
              </div>

              {/* Contact Fast Actions */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={`tel:${selectedLead.phone}`}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-800/80 hover:opacity-90 transition-opacity"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call {selectedLead.phone}</span>
                </a>
                <a
                  href={`mailto:${selectedLead.email}?subject=Regarding Your Project with TaskSathi`}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 font-semibold border border-blue-200 dark:border-blue-800/80 hover:opacity-90 transition-opacity"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Send Email</span>
                </a>
              </div>

              {/* Requirement Summary */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800/80 space-y-2">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Requirements & Scope
                </div>
                <div className="text-xs font-semibold text-slate-900 dark:text-white">
                  {selectedLead.serviceRequested}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  "{selectedLead.message}"
                </p>
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 pt-2 border-t border-slate-200/60 dark:border-slate-800">
                  <span>Budget: <strong className="text-slate-800 dark:text-slate-200">{selectedLead.budgetRange}</strong></span>
                  <span>Timeline: <strong className="text-slate-800 dark:text-slate-200">{selectedLead.timeline}</strong></span>
                </div>
              </div>

              {/* Internal Notes & Follow-up Log */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <MessageSquare className="h-3.5 w-3.5 text-blue-600" />
                    <span>Internal CRM Audit & Notes</span>
                  </h3>
                  <span className="text-[10px] text-slate-400 font-semibold">
                    {selectedLead.internalNotes?.length || 0} notes
                  </span>
                </div>

                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {selectedLead.internalNotes && selectedLead.internalNotes.length > 0 ? (
                    selectedLead.internalNotes.map((note) => (
                      <div
                        key={note.id}
                        className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-xs space-y-1"
                      >
                        <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                          <span className="font-bold text-slate-700 dark:text-slate-300">{note.author}</span>
                          <span>{note.date}</span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                          {note.text}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="text-[11px] text-slate-400 py-3 text-center bg-slate-50 dark:bg-slate-900/40 rounded-xl">
                      No internal notes yet. Log your first call or meeting below.
                    </div>
                  )}
                </div>

                {/* Add Note Input Form */}
                <form onSubmit={handleAddNote} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add an internal note or meeting summary..."
                    value={newNoteText}
                    onChange={(e) => setNewNoteText(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white"
                  />
                  <Button type="submit" variant="primary" size="sm" disabled={!newNoteText.trim()}>
                    <Send className="h-3.5 w-3.5" />
                  </Button>
                </form>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-400 text-xs">
              Select a lead from the left to view detailed history and notes.
            </div>
          )}
        </div>
      </div>

      {/* Add Lead Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Log New Enterprise Lead
              </h2>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCreateLead} className="mt-4 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newLead.name}
                    onChange={(e) => setNewLead({ ...newLead, name: e.target.value })}
                    placeholder="e.g. Rameshwor Bhattarai"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={newLead.company}
                    onChange={(e) => setNewLead({ ...newLead, company: e.target.value })}
                    placeholder="e.g. Nepal Hardware Mart"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={newLead.phone}
                    onChange={(e) => setNewLead({ ...newLead, phone: e.target.value })}
                    placeholder="+977 98..."
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={newLead.email}
                    onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
                    placeholder="contact@company.com"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Service / Solution Interested
                </label>
                <select
                  value={newLead.serviceRequested}
                  onChange={(e) => setNewLead({ ...newLead, serviceRequested: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                >
                  <option value="Enterprise ERP & Multi-Warehouse Inventory">Enterprise ERP & Multi-Warehouse Inventory</option>
                  <option value="SathiPOS Billing & IRD Realtime Sync">SathiPOS Billing & IRD Realtime Sync</option>
                  <option value="Custom Web & Mobile Application">Custom Web & Mobile Application</option>
                  <option value="Hospital Management EMR & Lab Portal">Hospital Management EMR & Lab Portal</option>
                  <option value="AI WhatsApp Automation & CRM Bots">AI WhatsApp Automation & CRM Bots</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Budget Range
                  </label>
                  <input
                    type="text"
                    value={newLead.budgetRange}
                    onChange={(e) => setNewLead({ ...newLead, budgetRange: e.target.value })}
                    placeholder="e.g. NPR 500,000 - 1,000,000"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Target Timeline
                  </label>
                  <input
                    type="text"
                    value={newLead.timeline}
                    onChange={(e) => setNewLead({ ...newLead, timeline: e.target.value })}
                    placeholder="e.g. Within 1 Month"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Initial Scope & Notes
                </label>
                <textarea
                  rows={3}
                  value={newLead.message}
                  onChange={(e) => setNewLead({ ...newLead, message: e.target.value })}
                  placeholder="Key requirements, branch count, hardware needs, or pain points..."
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <Button type="button" variant="outline" size="sm" onClick={() => setIsAddModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="sm">
                  Save Lead to CRM
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
