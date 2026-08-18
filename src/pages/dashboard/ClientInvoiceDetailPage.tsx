import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { dashboardService } from '@/src/services/dashboardService';
import { Invoice } from '@/src/types/dashboard';
import { DashboardPageHeader } from '@/src/components/dashboard/DashboardPageHeader';
import { StatusBadge } from '@/src/components/dashboard/StatusBadge';
import { TaskSathiLogo } from '@/src/components/ui/TaskSathiLogo';
import { Button } from '@/src/components/ui/Button';
import {
  Printer,
  Download,
  CreditCard,
  Building2,
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
  QrCode,
} from 'lucide-react';

export const ClientInvoiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [loading, setLoading] = useState(true);
  const [paying, setPaying] = useState(false);
  const [paySuccess, setPaySuccess] = useState(false);

  useEffect(() => {
    if (!id) return;
    dashboardService.getInvoiceById(id).then((data) => {
      setInvoice(data || null);
      setLoading(false);
    });
  }, [id]);

  const handleSimulatePayment = async () => {
    if (!invoice) return;
    setPaying(true);
    await new Promise((r) => setTimeout(r, 1200));
    setInvoice({ ...invoice, status: 'paid', paidDate: new Date().toISOString().split('T')[0] });
    setPaying(false);
    setPaySuccess(true);
    setTimeout(() => setPaySuccess(false), 4000);
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="py-20 flex justify-center items-center">
        <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!invoice) {
    return (
      <div className="text-center py-20 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Invoice Not Found</h2>
        <Link to="/dashboard/invoices">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-1.5" /> Back to Invoices
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <DashboardPageHeader
        title={`Tax Invoice ${invoice.invoiceNumber}`}
        description="Government of Nepal Inland Revenue Department (IRD) Compliant VAT Invoice"
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          { label: invoice.invoiceNumber },
        ]}
        actions={
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handlePrint}>
              <Printer className="h-4 w-4 mr-1.5" />
              <span>Print</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => alert(`Downloading PDF for invoice ${invoice.invoiceNumber}`)}
            >
              <Download className="h-4 w-4 mr-1.5" />
              <span>PDF</span>
            </Button>
            {invoice.status !== 'paid' && (
              <Button
                variant="primary"
                size="sm"
                onClick={handleSimulatePayment}
                loading={paying}
              >
                <CreditCard className="h-4 w-4 mr-1.5" />
                <span>Pay Online</span>
              </Button>
            )}
          </div>
        }
      />

      {paySuccess && (
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-800 dark:text-emerald-300 font-semibold flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-emerald-600" />
          <span>Payment settled successfully! IRD tax receipt has been generated.</span>
        </div>
      )}

      {/* Invoice Sheet */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xl space-y-8 text-xs text-slate-700 dark:text-slate-300">
        {/* Invoice Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="space-y-3">
            <TaskSathiLogo size="md" />
            <div className="space-y-1 text-slate-500 text-[11px]">
              <p className="font-bold text-slate-900 dark:text-white text-xs">
                TASK SATHI TECHNOLOGIES PVT. LTD.
              </p>
              <p>Maitighar, Kathmandu 44600, Bagmati, Nepal</p>
              <p>
                <strong>PAN / VAT No:</strong> 610394821 • <strong>Reg No:</strong> 294812/080/081
              </p>
              <p>contact@tasksathi.com • +977 1 4259876</p>
            </div>
          </div>

          <div className="sm:text-right space-y-1">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 font-mono text-[11px] font-bold text-slate-800 dark:text-slate-200">
              TAX INVOICE
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white font-mono">
              {invoice.invoiceNumber}
            </h2>
            <div className="pt-1">
              <StatusBadge status={invoice.status} />
            </div>
            <div className="pt-2 text-[11px] text-slate-500 space-y-0.5">
              <div>
                <strong>Issue Date:</strong> {invoice.issueDate}
              </div>
              <div>
                <strong>Due Date:</strong> {invoice.dueDate}
              </div>
              {invoice.paidDate && (
                <div className="text-emerald-600 font-semibold">
                  <strong>Paid On:</strong> {invoice.paidDate}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bill To Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Billed To (Client / Buyer)
            </span>
            <div className="font-bold text-slate-900 dark:text-white text-xs">
              {invoice.clientName}
            </div>
            <div className="text-[11px] text-slate-500">
              <p>Kathmandu Corporate Office, Nepal</p>
              <p>
                <strong>Client PAN/VAT:</strong> 609823145
              </p>
            </div>
          </div>

          <div className="space-y-1 sm:text-right">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Engagement Context
            </span>
            <div className="font-bold text-slate-900 dark:text-white text-xs">
              {invoice.projectName}
            </div>
            <div className="text-[11px] text-slate-500">
              <span>Payment Terms: Net 15 Days</span>
            </div>
          </div>
        </div>

        {/* Line Items Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                <th className="py-3 px-2 font-semibold">#</th>
                <th className="py-3 px-2 font-semibold">Description</th>
                <th className="py-3 px-2 font-semibold text-right">Qty</th>
                <th className="py-3 px-2 font-semibold text-right">Rate (NPR)</th>
                <th className="py-3 px-2 font-semibold text-right">Amount (NPR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {invoice.items.map((item, idx) => (
                <tr key={idx}>
                  <td className="py-3 px-2 text-slate-400">{idx + 1}</td>
                  <td className="py-3 px-2 font-semibold text-slate-800 dark:text-slate-200">
                    {item.description}
                  </td>
                  <td className="py-3 px-2 text-right font-mono">{item.quantity}</td>
                  <td className="py-3 px-2 text-right font-mono">
                    NPR {(item.unitPrice ?? 0).toLocaleString()}
                  </td>
                  <td className="py-3 px-2 text-right font-mono font-bold text-slate-900 dark:text-white">
                    NPR {(item.total ?? (item.unitPrice || 0) * (item.quantity || 1)).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals Summary */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
          {/* Payment Instructions */}
          <div className="max-w-xs space-y-2 text-[11px] text-slate-500">
            <span className="font-bold text-slate-800 dark:text-slate-200 block text-xs">
              Direct Banking & Settlement:
            </span>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-[10px] space-y-1">
              <p>Bank: Nabil Bank Limited</p>
              <p>A/C Name: TASK SATHI TECHNOLOGIES</p>
              <p>A/C Number: 01000175029481</p>
              <p>Branch: Maitighar, Kathmandu</p>
            </div>
          </div>

          {/* Calculations */}
          <div className="w-full sm:w-72 space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
              <span className="text-slate-500">Taxable Subtotal:</span>
              <span className="font-mono font-semibold">NPR {(invoice.subtotal ?? 0).toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
              <span className="text-slate-500">13% Value Added Tax (VAT):</span>
              <span className="font-mono font-semibold">NPR {(invoice.vatAmount ?? (invoice as any).vat ?? 0).toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-2 text-base font-extrabold text-slate-900 dark:text-white border-t-2 border-slate-900 dark:border-slate-100">
              <span>Grand Total:</span>
              <span className="font-mono text-blue-600 dark:text-blue-400">
                NPR {(invoice.total ?? 0).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
