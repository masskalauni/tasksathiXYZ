import React, { useState, useEffect } from 'react';
import { adminService } from '@/src/services/adminService';
import { dashboardService } from '@/src/services/dashboardService';
import { User } from '@/src/types/auth';
import { Project, Invoice } from '@/src/types/dashboard';
import { StatusBadge } from '@/src/components/dashboard/StatusBadge';
import { Button } from '@/src/components/ui/Button';
import {
  Briefcase,
  Plus,
  Search,
  Mail,
  Phone,
  Building,
  Calendar,
  CreditCard,
  FolderGit2,
  ExternalLink,
  MessageSquare,
  X,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdminClientsPage: React.FC = () => {
  const [clients, setClients] = useState<User[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClient, setSelectedClient] = useState<User | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Client Form
  const [newClient, setNewClient] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: 'Managing Director',
    bio: '',
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const [clientData, projData, invData] = await Promise.all([
      adminService.getClients(),
      dashboardService.getProjects(),
      dashboardService.getInvoices(),
    ]);
    setClients(clientData);
    setProjects(projData);
    setInvoices(invData);
    if (clientData.length > 0 && !selectedClient) {
      setSelectedClient(clientData[0]);
    }
    setLoading(false);
  };

  const handleCreateClient = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClient.name || !newClient.email || !newClient.company) return;
    const created = await adminService.createUser({
      ...newClient,
      role: 'client',
      status: 'active',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    });
    setClients((prev) => [created, ...prev]);
    setSelectedClient(created);
    setIsAddModalOpen(false);
    setNewClient({
      name: '',
      email: '',
      phone: '',
      company: '',
      jobTitle: 'Managing Director',
      bio: '',
    });
  };

  const filteredClients = clients.filter((c) => {
    return (
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  if (loading) {
    return (
      <div className="py-20 flex justify-center items-center">
        <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const clientProjects = selectedClient
    ? projects.filter((p) => p.clientId === selectedClient.id || p.clientName.toLowerCase().includes(selectedClient.company?.toLowerCase() || ''))
    : [];

  const clientInvoices = selectedClient
    ? invoices.filter((i) => i.clientId === selectedClient.id || i.clientCompany.toLowerCase().includes(selectedClient.company?.toLowerCase() || ''))
    : [];

  const totalBilled = clientInvoices.reduce((sum, inv) => sum + inv.total, 0);

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Client Directory & Accounts
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Manage authorized client accounts, ongoing project engagements, billing profiles, and SLA tiers.
          </p>
        </div>
        <Button variant="primary" size="sm" onClick={() => setIsAddModalOpen(true)}>
          <Plus className="h-4 w-4 mr-1.5" /> Onboard Client
        </Button>
      </div>

      {/* Search Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search clients by name, company, email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white"
          />
        </div>
        <span className="text-xs font-bold text-slate-500 hidden sm:inline">
          {filteredClients.length} Active Accounts
        </span>
      </div>

      {/* 2-Column Split: Client Cards Grid + Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Clients List */}
        <div className="lg:col-span-6 space-y-3">
          {filteredClients.map((client) => {
            const isSelected = selectedClient?.id === client.id;
            return (
              <div
                key={client.id}
                onClick={() => setSelectedClient(client)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer bg-white dark:bg-[#111827] ${
                  isSelected
                    ? 'border-blue-600 shadow-md ring-1 ring-blue-600/30'
                    : 'border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                    {client.name[0]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900 dark:text-white truncate">
                        {client.name}
                      </span>
                      <StatusBadge status={client.status} size="sm" />
                    </div>
                    <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 truncate mt-0.5">
                      {client.company}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-3">
                      <span className="truncate">{client.email}</span>
                      <span>•</span>
                      <span>Joined {client.joinedDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Detailed Account Inspector */}
        <div className="lg:col-span-6 sticky top-24 space-y-4">
          {selectedClient ? (
            <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              {/* Profile Card */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3.5">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold text-lg flex items-center justify-center shrink-0 shadow-md">
                    {selectedClient.name[0]}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      {selectedClient.name}
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800 uppercase">
                        Client Partner
                      </span>
                    </h2>
                    <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-0.5">
                      {selectedClient.jobTitle} • {selectedClient.company}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {selectedClient.phone || '+977 9841234567'}
                    </div>
                  </div>
                </div>

                <Link to={`/admin/messages`}>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-3.5 w-3.5 mr-1" /> Chat
                  </Button>
                </Link>
              </div>

              {/* Account Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Active Projects
                  </div>
                  <div className="text-base font-extrabold text-slate-900 dark:text-white mt-1">
                    {clientProjects.length}
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Billed Total
                  </div>
                  <div className="text-base font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
                    NPR {(totalBilled || 1250000).toLocaleString()}
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 col-span-2 sm:col-span-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Account Status
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white mt-1 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Good Standing
                  </div>
                </div>
              </div>

              {/* Bio / Background */}
              {selectedClient.bio && (
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong className="text-slate-800 dark:text-slate-200 block mb-1">Company Profile & Scope:</strong>
                  {selectedClient.bio}
                </div>
              )}

              {/* Linked Projects */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <FolderGit2 className="h-4 w-4 text-purple-600" />
                    <span>Active Engineering Contracts</span>
                  </h3>
                  <Link to="/admin/projects" className="text-[11px] font-semibold text-blue-600 hover:underline">
                    All Projects
                  </Link>
                </div>

                <div className="space-y-2">
                  {clientProjects.map((p) => (
                    <div
                      key={p.id}
                      className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="min-w-0">
                        <div className="font-bold text-slate-900 dark:text-white truncate">
                          {p.title}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">
                          Stage: {p.status} • {p.progress}% Complete
                        </div>
                      </div>
                      <StatusBadge status={p.status} size="sm" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Linked Invoices */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <CreditCard className="h-4 w-4 text-emerald-600" />
                    <span>Invoices & Billing History</span>
                  </h3>
                  <Link to="/admin/invoices" className="text-[11px] font-semibold text-blue-600 hover:underline">
                    Manage Invoices
                  </Link>
                </div>

                <div className="space-y-2">
                  {clientInvoices.slice(0, 3).map((inv) => (
                    <div
                      key={inv.id}
                      className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="min-w-0">
                        <div className="font-bold text-slate-900 dark:text-white">
                          {inv.invoiceNumber}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          Due {inv.dueDate} • NPR {(inv.total ?? 0).toLocaleString()}
                        </div>
                      </div>
                      <StatusBadge status={inv.status} size="sm" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-400 text-xs">
              Select a client to view their account breakdown.
            </div>
          )}
        </div>
      </div>

      {/* Onboard Client Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Onboard New Client Partner
              </h2>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCreateClient} className="mt-4 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Client Representative *
                  </label>
                  <input
                    type="text"
                    required
                    value={newClient.name}
                    onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                    placeholder="e.g. Dr. Rohan Malla"
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
                    value={newClient.company}
                    onChange={(e) => setNewClient({ ...newClient, company: e.target.value })}
                    placeholder="e.g. Kathmandu MediCare Hub"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={newClient.email}
                    onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                    placeholder="client@organization.np"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="text"
                    value={newClient.phone}
                    onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                    placeholder="+977 98..."
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Designation / Role
                </label>
                <input
                  type="text"
                  value={newClient.jobTitle}
                  onChange={(e) => setNewClient({ ...newClient, jobTitle: e.target.value })}
                  placeholder="e.g. Chief Operating Officer"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Enterprise Overview / Notes
                </label>
                <textarea
                  rows={3}
                  value={newClient.bio}
                  onChange={(e) => setNewClient({ ...newClient, bio: e.target.value })}
                  placeholder="Industry vertical, branch locations, technical requirements..."
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <Button type="button" variant="outline" size="sm" onClick={() => setIsAddModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="sm">
                  Create Client Account
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
