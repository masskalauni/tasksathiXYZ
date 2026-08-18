import React, { useState } from 'react';
import { Button } from '@/src/components/ui/Button';
import {
  Settings,
  Building,
  CreditCard,
  ShieldCheck,
  Bell,
  Database,
  Save,
  CheckCircle2,
  Lock,
  Globe,
  Mail,
  Phone,
  Sparkles,
} from 'lucide-react';

export const AdminSettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'payment' | 'ird' | 'notifications'>('general');
  const [isSaved, setIsSaved] = useState(false);

  // Form states
  const [generalSettings, setGeneralSettings] = useState({
    companyName: 'TASK SATHI Pvt. Ltd.',
    tagline: 'Leading Software Development & POS Engineering Agency in Nepal',
    contactEmail: 'contact@tasksathi.com',
    billingEmail: 'accounts@tasksathi.com',
    phone: '+977 9868509934',
    whatsapp: '+977 9868509934',
    address: 'Putalisadak-28, Kathmandu, Bagmati Province, Nepal',
    companyPan: '619827364',
    currency: 'NPR (Nepalese Rupee)',
  });

  const [paymentSettings, setPaymentSettings] = useState({
    esewaMerchantId: 'EPAYTEST_TASKSATHI',
    khaltiPublicKey: 'test_public_key_8492049281a',
    fonepayMerchantCode: 'FONE_TASK_982',
    enableEsewa: true,
    enableKhalti: true,
    enableFonepay: true,
  });

  const [irdSettings, setIrdSettings] = useState({
    cbmsServerUrl: 'https://cbms.ird.gov.np/api/bill',
    fiscalYear: '2081/82',
    sellerPan: '619827364',
    autoSyncOnPaid: true,
    testSandboxMode: true,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            System & Agency Settings
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Configure Nepal IRD CBMS tax gateways, payment integrations, and agency branding.
          </p>
        </div>

        {isSaved && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold animate-in fade-in">
            <CheckCircle2 className="h-4 w-4" /> Changes Saved Successfully
          </div>
        )}
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-200 dark:border-slate-800">
        {[
          { id: 'general', label: 'Agency Profile', icon: Building },
          { id: 'payment', label: 'Nepal Payment Gateways', icon: CreditCard },
          { id: 'ird', label: 'IRD Nepal CBMS Sync', icon: ShieldCheck },
          { id: 'notifications', label: 'Alerts & SLA', icon: Bell },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Main Settings Form */}
      <form onSubmit={handleSave}>
        {activeTab === 'general' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Official Corporate Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Registered Legal Entity Name
                </label>
                <input
                  type="text"
                  value={generalSettings.companyName}
                  onChange={(e) =>
                    setGeneralSettings({ ...generalSettings, companyName: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Company PAN Number (Nepal)
                </label>
                <input
                  type="text"
                  value={generalSettings.companyPan}
                  onChange={(e) =>
                    setGeneralSettings({ ...generalSettings, companyPan: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  General Inquiries Email
                </label>
                <input
                  type="email"
                  value={generalSettings.contactEmail}
                  onChange={(e) =>
                    setGeneralSettings({ ...generalSettings, contactEmail: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Accounts & Tax Invoicing Email
                </label>
                <input
                  type="email"
                  value={generalSettings.billingEmail}
                  onChange={(e) =>
                    setGeneralSettings({ ...generalSettings, billingEmail: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Official Phone / Landline
                </label>
                <input
                  type="text"
                  value={generalSettings.phone}
                  onChange={(e) =>
                    setGeneralSettings({ ...generalSettings, phone: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  WhatsApp Helpline
                </label>
                <input
                  type="text"
                  value={generalSettings.whatsapp}
                  onChange={(e) =>
                    setGeneralSettings({ ...generalSettings, whatsapp: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                HQ Office Address
              </label>
              <input
                type="text"
                value={generalSettings.address}
                onChange={(e) =>
                  setGeneralSettings({ ...generalSettings, address: e.target.value })
                }
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
        )}

        {activeTab === 'payment' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Nepal Payment Gateway Integrations
            </h2>
            <p className="text-xs text-slate-400">
              Configure credentials for eSewa, Khalti, and Fonepay QR merchant checkouts.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">eSewa ePay SDK</span>
                  <input
                    type="checkbox"
                    checked={paymentSettings.enableEsewa}
                    onChange={(e) =>
                      setPaymentSettings({ ...paymentSettings, enableEsewa: e.target.checked })
                    }
                    className="h-4 w-4 rounded text-blue-600"
                  />
                </div>
                <input
                  type="text"
                  value={paymentSettings.esewaMerchantId}
                  onChange={(e) =>
                    setPaymentSettings({ ...paymentSettings, esewaMerchantId: e.target.value })
                  }
                  placeholder="eSewa Merchant Code"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white"
                />
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Khalti Payment Gateway</span>
                  <input
                    type="checkbox"
                    checked={paymentSettings.enableKhalti}
                    onChange={(e) =>
                      setPaymentSettings({ ...paymentSettings, enableKhalti: e.target.checked })
                    }
                    className="h-4 w-4 rounded text-blue-600"
                  />
                </div>
                <input
                  type="text"
                  value={paymentSettings.khaltiPublicKey}
                  onChange={(e) =>
                    setPaymentSettings({ ...paymentSettings, khaltiPublicKey: e.target.value })
                  }
                  placeholder="Khalti Public API Key"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white"
                />
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Fonepay Direct QR</span>
                  <input
                    type="checkbox"
                    checked={paymentSettings.enableFonepay}
                    onChange={(e) =>
                      setPaymentSettings({ ...paymentSettings, enableFonepay: e.target.checked })
                    }
                    className="h-4 w-4 rounded text-blue-600"
                  />
                </div>
                <input
                  type="text"
                  value={paymentSettings.fonepayMerchantCode}
                  onChange={(e) =>
                    setPaymentSettings({ ...paymentSettings, fonepayMerchantCode: e.target.value })
                  }
                  placeholder="Fonepay Merchant QR Code"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ird' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Inland Revenue Department (IRD) CBMS Realtime Sync
            </h2>
            <p className="text-xs text-slate-400">
              Direct telemetry connection with Government of Nepal Central Billing Monitoring System.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  CBMS Server Endpoint
                </label>
                <input
                  type="text"
                  value={irdSettings.cbmsServerUrl}
                  onChange={(e) =>
                    setIrdSettings({ ...irdSettings, cbmsServerUrl: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Fiscal Cycle Year
                </label>
                <input
                  type="text"
                  value={irdSettings.fiscalYear}
                  onChange={(e) =>
                    setIrdSettings({ ...irdSettings, fiscalYear: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white"
                />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-blue-900 dark:text-blue-200">
                  Real-time IRD Automated Telemetry
                </div>
                <div className="text-[11px] text-blue-700 dark:text-blue-300">
                  Transmit tax invoice payload to IRD CBMS upon payment verification
                </div>
              </div>
              <input
                type="checkbox"
                checked={irdSettings.autoSyncOnPaid}
                onChange={(e) =>
                  setIrdSettings({ ...irdSettings, autoSyncOnPaid: e.target.checked })
                }
                className="h-4 w-4 rounded text-blue-600"
              />
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Notification Routing & SLA Alerts
            </h2>

            <div className="space-y-3">
              {[
                { title: 'New Client Inbound Lead Alerts', desc: 'Instant WhatsApp & email ping to sales team' },
                { title: 'Critical Ticket Escalations (Urgent)', desc: 'SMS dispatch to on-call senior technical lead' },
                { title: 'Invoice Payment Settlement', desc: 'Notify finance team when client completes eSewa/Khalti checkout' },
                { title: 'Daily Sprint Standup Digests', desc: 'Summary of completed milestone velocity sent every evening' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">{item.title}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                  </div>
                  <input type="checkbox" defaultChecked className="h-4 w-4 rounded text-blue-600" />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-end pt-4">
          <Button type="submit" variant="primary" size="sm">
            <Save className="h-4 w-4 mr-1.5" /> Save Agency Settings
          </Button>
        </div>
      </form>
    </div>
  );
};
