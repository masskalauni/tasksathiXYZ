import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/src/components/ui/Container';
import { Section } from '@/src/components/ui/Section';
import { Button } from '@/src/components/ui/Button';
import { SEO } from '@/src/components/seo/SEO';
import { PageHero } from '@/src/components/layout/PageHero';
import { quoteService } from '@/src/services/quoteService';
import { QuoteRequestSubmission } from '@/src/types';
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Phone,
  Clock,
  Send,
  Layers,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import {
  WHATSAPP_DISPLAY,
  WHATSAPP_RAW,
  createWhatsAppUrl,
  openWhatsAppChat,
  formatQuoteRequestWhatsApp,
} from '@/src/lib/whatsapp';

export const RequestQuotePage: React.FC = () => {
  const [formData, setFormData] = useState<QuoteRequestSubmission>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    projectType: 'Custom Software Development',
    selectedServices: ['Custom Software Development'],
    timeline: '1 to 3 months',
    budgetEstimate: 'Standard Commercial Tier',
    description: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedQuoteId, setGeneratedQuoteId] = useState<string>('');
  const [whatsappUrl, setWhatsappUrl] = useState<string>('');

  const availableServices = [
    'Custom Software Development',
    'ERP Systems',
    'Point of Sale (POS) Systems',
    'Hospital Management System',
    'School Management Cloud',
    'Hotel & Property Management',
    'Restaurant & Kitchen System',
    'Modern Website Development',
    'Mobile App (iOS & Android)',
    'AI & Document Automation',
    'Cloud Migration & DevOps',
    'Accounting & Inventory Suite',
  ];

  const handleServiceToggle = (svc: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(svc);
      const next = exists
        ? prev.selectedServices.filter((s) => s !== svc)
        : [...prev.selectedServices, svc];
      return {
        ...prev,
        selectedServices: next.length > 0 ? next : [svc],
        projectType: next[0] || 'Custom Software Development',
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.description) {
      setError('Please provide your Name, Email, Phone number, and Project description.');
      return;
    }

    setLoading(true);
    setError(null);

    const quoteId = `TS-QTE-${Date.now().toString().slice(-6)}`;
    setGeneratedQuoteId(quoteId);

    const waText = formatQuoteRequestWhatsApp(formData, quoteId);
    const url = createWhatsAppUrl(waText);
    setWhatsappUrl(url);

    try {
      const res = await quoteService.submitQuoteRequest(formData);
      if (res.success) {
        setSubmitted(true);
        // Direct WhatsApp trigger
        openWhatsAppChat(waText);
      } else {
        setError(res.message || 'Error submitting request. Please try again.');
      }
    } catch {
      setError(`Submission issue. You can message our engineering lead directly on WhatsApp at ${WHATSAPP_DISPLAY}.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Request a Quote"
        description={`Request a transparent, requirement-driven software quote from TASK SATHI. Direct WhatsApp: ${WHATSAPP_DISPLAY}. Custom software, ERP, POS, and web development in Nepal.`}
        canonicalPath="/request-quote"
      />

      {/* Hero */}
      <PageHero
        badge="Project Scoping & Feasibility Desk"
        badgeIcon={FileText}
        title="Request a Detailed Project Quote."
        highlightText="Project Quote"
        description={`Every business is different. We scope projects based on requirements, architectural complexity, and timeline—with all inquiries dispatched directly to WhatsApp (${WHATSAPP_DISPLAY}).`}
        breadcrumbs={[{ label: 'Request Quote' }]}
        highlights={[
          { icon: Clock, label: 'Fast 24-Hour Scoping Turnaround' },
          { icon: ShieldCheck, label: 'Transparent Milestone Pricing' },
          { icon: Layers, label: 'Tailored to Nepal Operations' },
        ]}
      />

      {/* Main Quote Configurator Form */}
      <Section spacing="lg">
        <div className="max-w-4xl mx-auto">
          {submitted ? (
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-8 sm:p-12 text-center space-y-6 shadow-sm">
              <div className="h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Quote Request Prepared for WhatsApp!
              </h2>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-mono font-semibold text-blue-700 dark:text-blue-300">
                Reference ID: {generatedQuoteId}
              </div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-lg mx-auto">
                Thank you, <span className="font-semibold text-slate-900 dark:text-white">{formData.fullName}</span>. Your project requirements have been structured and forwarded to our senior solutions architect's WhatsApp (<span className="font-semibold text-emerald-600 dark:text-emerald-400">{WHATSAPP_DISPLAY}</span>).
              </p>
              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-sm shadow-md transition-transform hover:scale-105"
                >
                  <span>Open & Send on WhatsApp ({WHATSAPP_DISPLAY})</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <Link to="/">
                  <Button variant="outline" size="md">
                    Return to Homepage
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] p-6 sm:p-10 shadow-sm space-y-8"
            >
              {error && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 flex items-center gap-2 text-xs text-red-600 dark:text-red-400">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Step 1: Services Selection */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-blue-600 text-white text-xs font-mono flex items-center justify-center">
                      1
                    </span>
                    Select Solutions Needed
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Select all technology domains relevant to your project.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {availableServices.map((svc) => {
                    const isSelected = formData.selectedServices.includes(svc);
                    return (
                      <button
                        key={svc}
                        type="button"
                        onClick={() => handleServiceToggle(svc)}
                        className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all flex items-center justify-between ${
                          isSelected
                            ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300'
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span>{svc}</span>
                        {isSelected && <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Desired Timeline & Scope */}
              <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-blue-600 text-white text-xs font-mono flex items-center justify-center">
                      2
                    </span>
                    Estimated Launch Timeline
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {['Urgent (< 1 Month)', '1 to 3 Months', '3 to 6 Months', 'Flexible / Exploratory'].map(
                    (time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: time })}
                        className={`p-3 rounded-xl text-center text-xs font-semibold border transition-all ${
                          formData.timeline === time
                            ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300'
                            : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                        }`}
                      >
                        {time}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Step 3: Project Requirements Description */}
              <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-blue-600 text-white text-xs font-mono flex items-center justify-center">
                      3
                    </span>
                    Project Scope & Bottlenecks *
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Describe what you are trying to automate, current operational issues, or key features needed.
                  </p>
                </div>

                <textarea
                  rows={5}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="e.g. We operate a 3-branch retail store in Kathmandu and need an offline-tolerant POS system with central warehouse stock sync and Nepal VAT tax invoicing..."
                  className="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                />
              </div>

              {/* Step 4: Contact Information */}
              <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-blue-600 text-white text-xs font-mono flex items-center justify-center">
                      4
                    </span>
                    Your Contact Details
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Anish Maharjan"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. anish@company.com.np"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Phone / Mobile (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9868509934"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Maharjan Trading Co."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <span>Direct WhatsApp dispatch ({WHATSAPP_DISPLAY}) • Strict NDA</span>
                </div>

                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  loading={loading}
                  rightIcon={<Send className="h-4 w-4" />}
                >
                  {loading ? 'Submitting Scope...' : 'Submit & Send on WhatsApp'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </Section>
    </>
  );
};
