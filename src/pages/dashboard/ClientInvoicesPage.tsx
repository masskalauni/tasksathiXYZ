import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { dashboardService } from '@/src/services/dashboardService';
import { Invoice } from '@/src/types/dashboard';
import { DashboardPageHeader } from '@/src/components/dashboard/DashboardPageHeader';
import { StatusBadge } from '@/src/components/dashboard/StatusBadge';
import { DataTable, Column } from '@/src/components/dashboard/DataTable';
import { Button } from '@/src/components/ui/Button';
import { MetricCard } from '@/src/components/dashboard/MetricCard';
import { CreditCard, ArrowRight, CheckCircle2, Clock, FileText, Download } from 'lucide-react';

export const ClientInvoicesPage: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dashboardService.getInvoices().then((data) => {
      setInvoices(data);
      setLoading(false);
    });
  }, []);

  const totalBilled = invoices.reduce((sum, i) => sum + i.total, 0);
  const totalPaid = invoices.filter((i) => i.status === 'paid').reduce((sum, i) => sum + i.total, 0);
  const totalDue = invoices.filter((i) => i.status === 'sent' || i.status === 'overdue').reduce((sum, i) => sum + i.total, 0);

  const columns: Column<Invoice>[] = [
    {
      key: 'invoiceNumber',
      header: 'Invoice #',
      sortable: true,
      render: (inv) => (
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-blue-600 shrink-0" />
          <Link
            to={`/dashboard/invoices/${inv.id}`}
            className="font-bold text-blue-600 dark:text-blue-400 hover:underline font-mono"
          >
            {inv.invoiceNumber}
          </Link>
        </div>
      ),
    },
    {
      key: 'projectName',
      header: 'Project / Description',
      render: (inv) => <span className="font-medium text-slate-800 dark:text-slate-200">{inv.projectName}</span>,
    },
    {
      key: 'issueDate',
      header: 'Issue Date',
      sortable: true,
      render: (inv) => <span className="text-slate-500 font-mono text-[11px]">{inv.issueDate}</span>,
    },
    {
      key: 'dueDate',
      header: 'Due Date',
      sortable: true,
      render: (inv) => <span className="text-slate-500 font-mono text-[11px]">{inv.dueDate}</span>,
    },
    {
      key: 'total',
      header: 'Amount (NPR)',
      sortable: true,
      render: (inv) => (
        <div className="font-bold font-mono text-slate-900 dark:text-white">
          NPR {(inv.total ?? 0).toLocaleString()}
          <div className="text-[10px] text-slate-400 font-normal">incl. 13% VAT</div>
        </div>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (inv) => <StatusBadge status={inv.status} size="sm" />,
    },
    {
      key: 'actions',
      header: 'Action',
      render: (inv) => (
        <Link to={`/dashboard/invoices/${inv.id}`}>
          <Button variant="outline" size="sm">
            <span>View</span>
            <ArrowRight className="h-3 w-3 ml-1" />
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="Invoices & IRD Tax Billing"
        description="Review engineering milestone billing, tax deduction at source (TDS), and Nepal IRD-compliant VAT receipts."
        breadcrumbs={[{ label: 'Invoices' }]}
      />

      {/* Financial Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <MetricCard
          title="Total Billed"
          value={`NPR ${(totalBilled / 1000).toFixed(0)}k`}
          subtitle="All contract milestones"
          icon={<CreditCard className="h-5 w-5" />}
          accentColor="blue"
        />
        <MetricCard
          title="Total Settled"
          value={`NPR ${(totalPaid / 1000).toFixed(0)}k`}
          subtitle="Cleared through banking"
          icon={<CheckCircle2 className="h-5 w-5" />}
          accentColor="emerald"
        />
        <MetricCard
          title="Outstanding Balance"
          value={`NPR ${(totalDue / 1000).toFixed(0)}k`}
          subtitle="Pending milestone payout"
          icon={<Clock className="h-5 w-5" />}
          accentColor="orange"
        />
      </div>

      <DataTable
        data={invoices}
        columns={columns}
        searchPlaceholder="Search invoice # or project..."
        searchKeys={['invoiceNumber', 'projectName']}
        filterKey="status"
        filterOptions={[
          { label: 'Draft', value: 'draft' },
          { label: 'Sent', value: 'sent' },
          { label: 'Paid', value: 'paid' },
          { label: 'Overdue', value: 'overdue' },
        ]}
      />
    </div>
  );
};
