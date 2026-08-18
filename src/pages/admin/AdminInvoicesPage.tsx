import React, { useState, useEffect } from 'react';
import { adminService } from '@/src/services/adminService';
import { Invoice, InvoiceStatus, InvoiceItem } from '@/src/types/dashboard';
import { StatusBadge } from '@/src/components/dashboard/StatusBadge';
import { Button } from '@/src/components/ui/Button';
import {
  CreditCard,
  Plus,
  Search,
  Calendar,
  DollarSign,
  Download,
  Printer,
  CheckCircle2,
  AlertCircle,
  FileText,
  X,
  Trash2,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const AdminInvoicesPage: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Invoice Form
  const [newInv, setNewInv] = useState({
    clientName: '',
    clientCompany: '',
    clientEmail: '',
    clientPanVat: '601234567',
    dueDate: new Date(Date.now() + 15 * 86400000).toISOString().split('T')[0],
    notes: 'Payment due within 15 days. Subject to 13% Nepal Government VAT.',
    items: [
      { id: '1', description: 'Enterprise Software Engineering Sprint 1', quantity: 1, unitPrice: 350000, total: 350000 },
    ] as InvoiceItem[],
  });

  useEffect(() => {
    loadInvoices();
  }, []);

  const loadInvoices = async () => {
    setLoading(true);
    const data = await adminService.getInvoices();
    setInvoices(data);
    if (data.length > 0 && !selectedInvoice) {
      setSelectedInvoice(data[0]);
    }
    setLoading(false);
  };

  const handleUpdateStatus = async (invoiceId: string, status: InvoiceStatus) => {
    const updated = await adminService.updateInvoiceStatus(invoiceId, status);
    setInvoices((prev) => prev.map((i) => (i.id === invoiceId ? updated : i)));
    if (selectedInvoice?.id === invoiceId) {
      setSelectedInvoice(updated);
    }
  };

  const handleAddItem = () => {
    setNewInv({
      ...newInv,
      items: [
        ...newInv.items,
        { id: String(Date.now()), description: '', quantity: 1, unitPrice: 50000, total: 50000 },
      ],
    });
  };

  const handleItemChange = (index: number, field: string, val: any) => {
    const updated = [...newInv.items];
    const current = { ...updated[index], [field]: val };
    if (field === 'quantity' || field === 'unitPrice') {
      current.total = Number(current.quantity) * Number(current.unitPrice);
    }
    updated[index] = current;
    setNewInv({ ...newInv, items: updated });
  };

  const handleRemoveItem = (index: number) => {
    if (newInv.items.length <= 1) return;
    setNewInv({ ...newInv, items: newInv.items.filter((_, idx) => idx !== index) });
  };

  const handleCreateInvoice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newInv.clientName || !newInv.clientCompany || newInv.items.length === 0) return;

    const created = await adminService.createInvoice({
      clientName: newInv.clientName,
      clientCompany: newInv.clientCompany,
      clientEmail: newInv.clientEmail,
      clientPanVat: newInv.clientPanVat,
      dueDate: newInv.dueDate,
      notes: newInv.notes,
      items: newInv.items,
      status: 'sent',
    });

    setInvoices((prev) => [created, ...prev]);
    setSelectedInvoice(created);
    setIsAddModalOpen(false);
  };

  const filteredInvoices = invoices.filter((i) => {
    const matchesSearch =
      i.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.clientCompany.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || i.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalRevenue = invoices
    .filter((i) => i.status === 'paid')
    .reduce((sum, i) => sum + i.total, 0);

  const totalOutstanding = invoices
    .filter((i) => i.status === 'sent' || i.status === 'overdue')
    .reduce((sum, i) => sum + i.total, 0);

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
            IRD Invoices & Tax Billing
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Certified tax invoicing with 13% VAT, PAN reconciliation, and payment reconciliation.
          </p>
        </div>
        <Button variant="primary" size="sm" onClick={() => setIsAddModalOpen(true)}>
          <Plus className="h-4 w-4 mr-1.5" /> Generate Tax Invoice
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Collected Revenue (Paid)
          </div>
          <div className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
            NPR {totalRevenue.toLocaleString()}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Outstanding Receivables
          </div>
          <div className="text-xl font-extrabold text-amber-600 dark:text-amber-400 mt-1">
            NPR {totalOutstanding.toLocaleString()}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Government VAT (13%)
          </div>
          <div className="text-xl font-extrabold text-blue-600 dark:text-blue-400 mt-1">
            NPR {(totalRevenue * 0.13).toFixed(0)} Collected
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search invoice number, client, company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {['all', 'paid', 'sent', 'overdue', 'draft'].map((st) => (
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
              {st === 'all' ? 'All Invoices' : st}
            </button>
          ))}
        </div>
      </div>

      {/* Grid: Invoices List + Detailed Invoice Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Invoices List */}
        <div className="lg:col-span-5 space-y-3">
          {filteredInvoices.map((inv) => {
            const isSelected = selectedInvoice?.id === inv.id;
            return (
              <div
                key={inv.id}
                onClick={() => setSelectedInvoice(inv)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer bg-white dark:bg-[#111827] ${
                  isSelected
                    ? 'border-blue-600 shadow-md ring-1 ring-blue-600/30'
                    : 'border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {inv.invoiceNumber}
                    </span>
                    <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-0.5">
                      {inv.clientCompany}
                    </div>
                  </div>
                  <StatusBadge status={inv.status} size="sm" />
                </div>

                <div className="flex items-center justify-between text-xs mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-slate-400">Due: {inv.dueDate}</span>
                  <span className="font-extrabold text-slate-900 dark:text-white">
                    NPR {inv.total.toLocaleString()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Invoice Viewer */}
        <div className="lg:col-span-7 sticky top-24 space-y-4">
          {selectedInvoice ? (
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              {/* Header & Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-black text-slate-900 dark:text-white">
                      {selectedInvoice.invoiceNumber}
                    </h2>
                    <StatusBadge status={selectedInvoice.status} size="sm" />
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Issued: {selectedInvoice.issueDate} • Due: {selectedInvoice.dueDate}
                  </div>
                </div>

                {/* Status Toggle & Print */}
                <div className="flex items-center gap-2">
                  <select
                    value={selectedInvoice.status}
                    onChange={(e) =>
                      handleUpdateStatus(selectedInvoice.id, e.target.value as InvoiceStatus)
                    }
                    className="text-xs font-semibold px-2.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white"
                  >
                    <option value="draft">Draft</option>
                    <option value="sent">Sent to Client</option>
                    <option value="paid">Mark Paid</option>
                    <option value="overdue">Overdue</option>
                  </select>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.print()}
                    title="Print Tax Invoice"
                  >
                    <Printer className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Billed To / From */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Billed To (Client Partner)
                  </div>
                  <div className="font-bold text-slate-900 dark:text-white text-sm">
                    {selectedInvoice.clientCompany}
                  </div>
                  <div className="text-slate-600 dark:text-slate-300 mt-0.5">
                    Attn: {selectedInvoice.clientName}
                  </div>
                  <div className="text-slate-400 mt-0.5">{selectedInvoice.clientEmail}</div>
                  <div className="text-blue-600 dark:text-blue-400 font-semibold mt-1">
                    PAN/VAT: {selectedInvoice.clientPanVat || '601234567'}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Issued By (Service Provider)
                  </div>
                  <div className="font-bold text-slate-900 dark:text-white text-sm">
                    TASK SATHI Pvt. Ltd.
                  </div>
                  <div className="text-slate-600 dark:text-slate-300 mt-0.5">
                    Putalisadak-28, Kathmandu, Nepal
                  </div>
                  <div className="text-slate-400 mt-0.5">accounts@tasksathi.com • +977 9868509934</div>
                  <div className="text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                    Company PAN: 619827364
                  </div>
                </div>
              </div>

              {/* Line Items Table */}
              <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-50 dark:bg-slate-900/80 text-slate-500 font-semibold border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="p-3">Description</th>
                      <th className="p-3 text-center">Qty</th>
                      <th className="p-3 text-right">Unit Rate (NPR)</th>
                      <th className="p-3 text-right">Amount (NPR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {selectedInvoice.items.map((item, idx) => (
                      <tr key={idx}>
                        <td className="p-3 font-semibold text-slate-900 dark:text-white">
                          {item.description}
                        </td>
                        <td className="p-3 text-center text-slate-500">{item.quantity}</td>
                        <td className="p-3 text-right text-slate-500">
                          {(item.unitPrice ?? 0).toLocaleString()}
                        </td>
                        <td className="p-3 text-right font-bold text-slate-900 dark:text-white">
                          {(item.total ?? (item.unitPrice || 0) * (item.quantity || 1)).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Totals Breakdown */}
              <div className="flex justify-end text-xs">
                <div className="w-64 space-y-2">
                  <div className="flex justify-between text-slate-500">
                    <span>Taxable Subtotal:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      NPR {(selectedInvoice.subtotal ?? 0).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Govt. 13% VAT:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      NPR {(selectedInvoice.vatAmount ?? (selectedInvoice as any).vat ?? 0).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-extrabold text-slate-900 dark:text-white pt-2 border-t border-slate-200 dark:border-slate-800">
                    <span>Total Payable:</span>
                    <span className="text-blue-600 dark:text-blue-400">
                      NPR {(selectedInvoice.total ?? 0).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Notes */}
              {selectedInvoice.notes && (
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 text-xs text-slate-500 leading-relaxed border border-slate-200/60 dark:border-slate-800">
                  <strong className="text-slate-700 dark:text-slate-300 block mb-0.5">Notes & Terms:</strong>
                  {selectedInvoice.notes}
                </div>
              )}
            </div>
          ) : (
            <div className="p-8 text-center rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-400 text-xs">
              Select an invoice from the left to view.
            </div>
          )}
        </div>
      </div>

      {/* Generate Invoice Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Generate Certified Tax Invoice
              </h2>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCreateInvoice} className="mt-4 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Client Representative *
                  </label>
                  <input
                    type="text"
                    required
                    value={newInv.clientName}
                    onChange={(e) => setNewInv({ ...newInv, clientName: e.target.value })}
                    placeholder="e.g. Aarav Sharma"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Company Name / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={newInv.clientCompany}
                    onChange={(e) => setNewInv({ ...newInv, clientCompany: e.target.value })}
                    placeholder="e.g. Himalayan Retail Group"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Client Email
                  </label>
                  <input
                    type="email"
                    value={newInv.clientEmail}
                    onChange={(e) => setNewInv({ ...newInv, clientEmail: e.target.value })}
                    placeholder="billing@company.com"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Client PAN / VAT
                  </label>
                  <input
                    type="text"
                    value={newInv.clientPanVat}
                    onChange={(e) => setNewInv({ ...newInv, clientPanVat: e.target.value })}
                    placeholder="601234567"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Due Date
                  </label>
                  <input
                    type="date"
                    value={newInv.dueDate}
                    onChange={(e) => setNewInv({ ...newInv, dueDate: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              {/* Line Items */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Invoice Items & Deliverables
                  </label>
                  <button
                    type="button"
                    onClick={handleAddItem}
                    className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="h-3.5 w-3.5" /> Add Item
                  </button>
                </div>

                {newInv.items.map((item, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <input
                      type="text"
                      required
                      placeholder="Item description..."
                      value={item.description}
                      onChange={(e) => handleItemChange(idx, 'description', e.target.value)}
                      className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white"
                    />
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) => handleItemChange(idx, 'quantity', Number(e.target.value))}
                      className="w-16 px-2 py-2 text-xs text-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white"
                    />
                    <input
                      type="number"
                      step={500}
                      value={item.unitPrice}
                      onChange={(e) => handleItemChange(idx, 'unitPrice', Number(e.target.value))}
                      className="w-28 px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white text-right"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(idx)}
                      disabled={newInv.items.length <= 1}
                      className="p-2 text-slate-400 hover:text-rose-600 disabled:opacity-30 cursor-pointer"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Payment Terms / IRD Notes
                </label>
                <textarea
                  rows={2}
                  value={newInv.notes}
                  onChange={(e) => setNewInv({ ...newInv, notes: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <Button type="button" variant="outline" size="sm" onClick={() => setIsAddModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="sm">
                  Issue Invoice
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
