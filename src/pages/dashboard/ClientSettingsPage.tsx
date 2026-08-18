import React, { useState } from 'react';
import { DashboardPageHeader } from '@/src/components/dashboard/DashboardPageHeader';
import { Button } from '@/src/components/ui/Button';
import { useTheme } from '@/src/hooks/useTheme';
import { Bell, Shield, Moon, Sun, Lock, CheckCircle2 } from 'lucide-react';

export const ClientSettingsPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  // Notification toggles
  const [emailSprintUpdates, setEmailSprintUpdates] = useState(true);
  const [emailInvoices, setEmailInvoices] = useState(true);
  const [emailSecurity, setEmailSecurity] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 600);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <DashboardPageHeader
        title="Settings & Security"
        description="Configure your portal alerts, two-factor authentication, and account preferences."
        breadcrumbs={[{ label: 'Settings' }]}
      />

      {saved && (
        <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-800 dark:text-emerald-300 font-semibold flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          <span>Settings saved successfully.</span>
        </div>
      )}

      {/* Notifications Preferences */}
      <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <Bell className="h-4 w-4 text-blue-600" />
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Email & Notification Alerts
          </h3>
        </div>

        <div className="space-y-3 text-xs">
          <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 cursor-pointer">
            <div>
              <div className="font-bold text-slate-900 dark:text-white">
                Sprint Milestone Updates
              </div>
              <div className="text-slate-500 text-[11px]">
                Receive instant emails when a sprint milestone is delivered or reviewed.
              </div>
            </div>
            <input
              type="checkbox"
              checked={emailSprintUpdates}
              onChange={(e) => setEmailSprintUpdates(e.target.checked)}
              className="h-4 w-4 rounded-sm border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 cursor-pointer">
            <div>
              <div className="font-bold text-slate-900 dark:text-white">
                Invoices & Tax Billing Notifications
              </div>
              <div className="text-slate-500 text-[11px]">
                Receive copy of Nepal IRD VAT invoices and payment reminders.
              </div>
            </div>
            <input
              type="checkbox"
              checked={emailInvoices}
              onChange={(e) => setEmailInvoices(e.target.checked)}
              className="h-4 w-4 rounded-sm border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 cursor-pointer">
            <div>
              <div className="font-bold text-slate-900 dark:text-white">
                Security & Login Alerts
              </div>
              <div className="text-slate-500 text-[11px]">
                Get notified when logins occur from unrecognized devices.
              </div>
            </div>
            <input
              type="checkbox"
              checked={emailSecurity}
              onChange={(e) => setEmailSecurity(e.target.checked)}
              className="h-4 w-4 rounded-sm border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
          </label>
        </div>
      </div>

      {/* Security & Authentication */}
      <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <Shield className="h-4 w-4 text-blue-600" />
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Security & Authentication
          </h3>
        </div>

        <div className="space-y-3 text-xs">
          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
            <div>
              <div className="font-bold text-slate-900 dark:text-white">
                Two-Factor Authentication (2FA)
              </div>
              <div className="text-slate-500 text-[11px]">
                Protect your corporate portal account with OTP verification.
              </div>
            </div>
            <button
              type="button"
              onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                twoFactorEnabled
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400'
                  : 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              {twoFactorEnabled ? 'Enabled' : 'Disabled'}
            </button>
          </div>
        </div>
      </div>

      {/* Interface Theme */}
      <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Interface Appearance</h3>
            <p className="text-xs text-slate-500">Switch between light and dark theme mode.</p>
          </div>
          <Button variant="outline" size="sm" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun className="h-4 w-4 mr-1.5" /> : <Moon className="h-4 w-4 mr-1.5" />}
            <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          </Button>
        </div>
      </div>

      <div className="flex justify-end">
        <Button variant="primary" size="md" onClick={handleSave} loading={saving}>
          Save Preferences
        </Button>
      </div>
    </div>
  );
};
