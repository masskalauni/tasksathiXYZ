import React, { useState, useEffect } from 'react';
import { dashboardService } from '@/src/services/dashboardService';
import { DocumentItem } from '@/src/types/dashboard';
import { DashboardPageHeader } from '@/src/components/dashboard/DashboardPageHeader';
import { DataTable, Column } from '@/src/components/dashboard/DataTable';
import { Button } from '@/src/components/ui/Button';
import { FileText, Download, Upload, ShieldCheck, FileSpreadsheet, FileCode, CheckCircle2 } from 'lucide-react';

export const ClientDocumentsPage: React.FC = () => {
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  useEffect(() => {
    dashboardService.getDocuments().then((data) => {
      setDocuments(data);
      setLoading(false);
    });
  }, []);

  const handleSimulatedUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    const file = e.target.files[0];
    setIsUploading(true);

    setTimeout(() => {
      const newDoc: DocumentItem = {
        id: `doc-${Date.now()}`,
        name: file.name,
        category: 'Client Uploads',
        fileSize: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        uploadedDate: new Date().toISOString().split('T')[0],
        downloadUrl: '#',
      };
      setDocuments([newDoc, ...documents]);
      setIsUploading(false);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    }, 1200);
  };

  const getDocIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'contracts':
        return <ShieldCheck className="h-4 w-4 text-emerald-600" />;
      case 'specifications':
      case 'architecture':
        return <FileCode className="h-4 w-4 text-blue-600" />;
      case 'invoices':
        return <FileSpreadsheet className="h-4 w-4 text-orange-600" />;
      default:
        return <FileText className="h-4 w-4 text-purple-600" />;
    }
  };

  const columns: Column<DocumentItem>[] = [
    {
      key: 'name',
      header: 'Document Name',
      sortable: true,
      render: (doc) => (
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            {getDocIcon(doc.category)}
          </div>
          <div>
            <div className="font-bold text-slate-900 dark:text-white">{doc.name}</div>
            <div className="text-[10px] text-slate-400">{doc.category}</div>
          </div>
        </div>
      ),
    },
    {
      key: 'category',
      header: 'Category',
      sortable: true,
      render: (doc) => (
        <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
          {doc.category}
        </span>
      ),
    },
    {
      key: 'fileSize',
      header: 'File Size',
      render: (doc) => <span className="text-slate-500 font-mono text-[11px]">{doc.fileSize}</span>,
    },
    {
      key: 'uploadedDate',
      header: 'Uploaded Date',
      sortable: true,
      render: (doc) => <span className="text-slate-500 font-mono text-[11px]">{doc.uploadedDate}</span>,
    },
    {
      key: 'actions',
      header: 'Action',
      render: (doc) => (
        <button
          type="button"
          onClick={() => alert(`Downloading document: ${doc.name}`)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white text-xs font-semibold transition-all cursor-pointer"
        >
          <Download className="h-3.5 w-3.5" />
          <span>Download</span>
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="Project Documents & Legal Artifacts"
        description="Secure archive of technical blueprints, master services agreements (MSA), statements of work (SOW), and IRD tax invoices."
        breadcrumbs={[{ label: 'Documents' }]}
        actions={
          <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer">
            <Upload className="h-4 w-4" />
            <span>{isUploading ? 'Uploading...' : 'Upload Document'}</span>
            <input
              type="file"
              onChange={handleSimulatedUpload}
              disabled={isUploading}
              className="hidden"
            />
          </label>
        }
      />

      {uploadSuccess && (
        <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-800 dark:text-emerald-300 font-semibold flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          <span>Document uploaded and encrypted successfully!</span>
        </div>
      )}

      <DataTable
        data={documents}
        columns={columns}
        searchPlaceholder="Search document names or categories..."
        searchKeys={['name', 'category']}
        filterKey="category"
        filterOptions={[
          { label: 'Contracts', value: 'Contracts' },
          { label: 'Specifications', value: 'Specifications' },
          { label: 'Security & Compliance', value: 'Security & Compliance' },
          { label: 'Billing', value: 'Billing' },
        ]}
      />
    </div>
  );
};
