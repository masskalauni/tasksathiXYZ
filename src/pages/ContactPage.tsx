import React, { useState } from 'react';
import { Container } from '@/src/components/ui/Container';
import { Section, SectionHeader } from '@/src/components/ui/Section';
import { Button } from '@/src/components/ui/Button';
import { SEO } from '@/src/components/seo/SEO';
import { PageHero } from '@/src/components/layout/PageHero';
import { siteConfig } from '@/src/config/site';
import { contactService } from '@/src/services/contactService';
import { ContactSubmission } from '@/src/types';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import {
  WHATSAPP_DISPLAY,
  WHATSAPP_RAW,
  createWhatsAppUrl,
  openWhatsAppChat,
  formatContactMessageWhatsApp,
} from '@/src/lib/whatsapp';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactSubmission>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    serviceInterest: 'Custom Software Development',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      setError('Please fill in all required fields (Name, Email, Phone, and Message).');
      return;
    }

    setLoading(true);
    setError(null);

    const waText = formatContactMessageWhatsApp(formData);
    const generatedUrl = createWhatsAppUrl(waText);
    setWhatsappUrl(generatedUrl);

    try {
      const res = await contactService.submitContact(formData);
      if (res.success) {
        setSubmitted(true);
        // Open WhatsApp directly
        openWhatsAppChat(waText);
      } else {
        setError(res.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError(`Unable to send message automatically. Please reach us directly on WhatsApp at ${WHATSAPP_DISPLAY}.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description={`Get in touch with TASK SATHI in Putalisadak, Kathmandu. Call or WhatsApp ${WHATSAPP_DISPLAY} for custom software, ERP, or web development.`}
        canonicalPath="/contact"
      />

      {/* Hero Section */}
      <PageHero
        badge="Putalisadak, Kathmandu Desk"
        badgeIcon={Building2}
        title="Get in Touch with Our Engineering Team."
        highlightText="Engineering Team"
        description={`Have a question about a project, need a technical feasibility review, or want an on-site demonstration? Connect directly via WhatsApp at ${WHATSAPP_DISPLAY} or send us a message below.`}
        breadcrumbs={[{ label: 'Contact' }]}
        highlights={[
          { icon: Phone, label: 'Direct WhatsApp & Phone Access' },
          { icon: Clock, label: 'Same-Business-Day Response' },
          { icon: MapPin, label: 'Putalisadak Office, Kathmandu' },
        ]}
      />

      {/* Contact Grid: Details on Left, Form on Right */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                {/* Telephone & WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Telephone & WhatsApp Direct
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a
                        href={`tel:${WHATSAPP_RAW}`}
                        className="text-base font-bold font-mono text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
                      >
                        {WHATSAPP_DISPLAY}
                      </a>
                    </div>
                    <div className="mt-1.5 flex items-center gap-2">
                      <a
                        href={createWhatsAppUrl('Hello TASK SATHI! I would like to enquire about your software development services.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 transition-colors"
                      >
                        <span>Chat on WhatsApp</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Sunday – Friday, 9:00 AM – 6:00 PM NPT
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Direct Email Inquiries
                    </div>
                    <a
                      href={siteConfig.contact.email.href}
                      className="text-sm font-semibold font-mono text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      {siteConfig.contact.email.primary}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Guaranteed response within 1 business day
                    </p>
                  </div>
                </div>

                {/* Physical Office */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Engineering Office
                    </div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {siteConfig.contact.address.formatted}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {siteConfig.contact.address.country}
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Working Hours
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {siteConfig.contact.hours.weekdays}
                    </p>
                    <p className="text-xs text-slate-500">
                      {siteConfig.contact.hours.weekend} (24/7 SLA for active enterprise clients)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Consultation Card */}
            <div className="rounded-2xl border border-blue-200/70 dark:border-blue-900/40 bg-blue-50/40 dark:bg-blue-950/20 p-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                <ShieldCheck className="h-4 w-4" />
                <span>NDA & Confidentiality</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                All client project ideas, proprietary workflows, and data models shared during discovery consultations are protected under strict non-disclosure terms.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] p-6 sm:p-8 shadow-xs">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Message Sent & Prepared for WhatsApp!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, <span className="font-semibold text-slate-900 dark:text-white">{formData.fullName}</span>. Your message has been prepared for instant WhatsApp transmission to our Kathmandu engineering desk (<span className="font-semibold text-emerald-600 dark:text-emerald-400">{WHATSAPP_DISPLAY}</span>).
                  </p>

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-sm shadow-md transition-transform hover:scale-105"
                    >
                      <span>Continue on WhatsApp ({WHATSAPP_DISPLAY})</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <Button
                      variant="outline"
                      size="md"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          companyName: '',
                          serviceInterest: 'Custom Software Development',
                          message: '',
                        });
                      }}
                    >
                      Send Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Send an Inquiry
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Directly connect with our engineering team in Putalisadak via web and WhatsApp ({WHATSAPP_DISPLAY}).
                    </p>
                  </div>

                  {error && (
                    <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 flex items-center gap-2 text-xs text-red-600 dark:text-red-400">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

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
                        placeholder="e.g. Ramesh Shrestha"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ramesh@company.com.np"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Phone Number *
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
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Acme Enterprises Nepal"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Service / Product of Interest
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="ERP Systems">ERP Systems</option>
                      <option value="Point of Sale (POS) Systems">Point of Sale (POS) Systems</option>
                      <option value="Hospital Management System">Hospital Management System</option>
                      <option value="School Management Cloud">School Management Cloud</option>
                      <option value="Hotel & Property Management">Hotel & Property Management</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="AI & Workflow Automation">AI & Workflow Automation</option>
                      <option value="General Consultation">General Inquiry / Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Project Details & Requirements *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you are looking to build, any current bottlenecks, and your desired timeline..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    fullWidth
                    loading={loading}
                    rightIcon={<Send className="h-4 w-4" />}
                  >
                    {loading ? 'Submitting Inquiry...' : 'Submit & Send on WhatsApp'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
