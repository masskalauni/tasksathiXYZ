import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Modal } from '@/src/components/ui/Modal';
import { Button } from '@/src/components/ui/Button';
import { Input } from '@/src/components/ui/Input';
import { Textarea } from '@/src/components/ui/Textarea';
import { Select } from '@/src/components/ui/Select';
import { ServiceItem } from '@/src/types';
import {
  Check,
  Send,
  MapPin,
  Sparkles,
  ExternalLink,
  MessageSquare,
  Clock,
  Briefcase,
  UserCheck,
} from 'lucide-react';
import {
  WHATSAPP_DISPLAY,
  createWhatsAppUrl,
  openWhatsAppChat,
  formatQuickInquiryWhatsApp,
} from '@/src/lib/whatsapp';

export interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceItem | null;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organization: '',
    serviceInterest: initialService?.title || 'Custom Software Development',
    timeline: 'Within 1-2 Months',
    projectScope: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState<string>('');

  // Sync initialService if provided
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        serviceInterest: initialService.title,
      }));
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const waText = formatQuickInquiryWhatsApp({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      organization: formData.organization,
      serviceInterest: formData.serviceInterest,
      timeline: formData.timeline,
      projectScope: formData.projectScope,
    });

    const url = createWhatsAppUrl(waText);
    setGeneratedWhatsAppUrl(url);

    // Attempt direct dispatch to WhatsApp with subtle smooth transition
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      openWhatsAppChat(waText);
    }, 450);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title={submitted ? undefined : "Let's Talk About Your Project"}
      description={
        submitted
          ? undefined
          : `Direct technical consultation with our Kathmandu engineering desk (${WHATSAPP_DISPLAY}).`
      }
      maxWidth="lg"
    >
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success-state"
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="py-4 text-center space-y-5"
            id="inquiry-modal-success-screen"
          >
            {/* Animated Success Icon with pulsing aura */}
            <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
              {/* Outer pulsing ring glow */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: [1, 1.28, 1],
                  opacity: [0.5, 0.12, 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.8,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 rounded-full bg-emerald-400/25 dark:bg-emerald-500/20 blur-md pointer-events-none"
              />

              {/* Inner glowing circular badge */}
              <motion.div
                initial={{ scale: 0, rotate: -25 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 20,
                  delay: 0.08,
                }}
                className="relative h-16 w-16 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30"
              >
                {/* SVG Animated Checkmark */}
                <motion.svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <motion.path
                    d="M20 6L9 17l-5-5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      ease: 'easeOut',
                      delay: 0.22,
                    }}
                  />
                </motion.svg>
              </motion.div>
            </div>

            {/* Headline and Description with staggered fade-up */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.3 }}
              className="space-y-2"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                <Sparkles className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Inquiry Prepared Successfully</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Ready on WhatsApp!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                Your inquiry for{' '}
                <strong className="text-slate-900 dark:text-white font-semibold">
                  {formData.serviceInterest}
                </strong>{' '}
                has been formatted and dispatched to our engineering desk at{' '}
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {WHATSAPP_DISPLAY}
                </span>.
              </p>
            </motion.div>

            {/* Inquiry Summary Snapshot Box */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.3 }}
              className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 text-left text-xs max-w-md mx-auto space-y-2"
            >
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400 pb-1.5 border-b border-slate-200/60 dark:border-slate-800">
                <span>Inquiry Snapshot</span>
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live Sync
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-1.5 truncate">
                  <UserCheck className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span className="truncate font-medium">{formData.name}</span>
                </div>
                <div className="flex items-center gap-1.5 truncate font-mono text-[11px]">
                  <MessageSquare className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{formData.phone}</span>
                </div>
                <div className="flex items-center gap-1.5 truncate">
                  <Briefcase className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{formData.serviceInterest}</span>
                </div>
                <div className="flex items-center gap-1.5 truncate">
                  <Clock className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{formData.timeline}</span>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <a
                href={generatedWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-sm shadow-md transition-all hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
              >
                <span>Continue on WhatsApp ({WHATSAPP_DISPLAY})</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <Button variant="outline" onClick={handleReset} size="md" className="w-full sm:w-auto">
                Close Window
              </Button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.form
            key="inquiry-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98, y: -6 }}
            transition={{ duration: 0.22 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 flex items-center justify-between text-xs text-blue-800 dark:text-blue-300">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>
                  Instant Routing to WhatsApp: <strong>{WHATSAPP_DISPLAY}</strong>
                </span>
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">Putalisadak, Kathmandu</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Full Name *"
                placeholder="e.g. Ramesh Shrestha"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                label="Phone Number *"
                placeholder="e.g. 9868509934"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Email Address"
                placeholder="name@company.com"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <Input
                label="Company / Organization"
                placeholder="e.g. Himalayan Retail"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Select
                label="Service Required"
                value={formData.serviceInterest}
                onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                options={[
                  { value: 'Custom Software Development', label: 'Custom Software Development' },
                  { value: 'Enterprise Resource Planning (ERP)', label: 'Enterprise Resource Planning (ERP)' },
                  { value: 'CRM Solutions', label: 'CRM Solutions' },
                  { value: 'Point of Sale (POS) Systems', label: 'Point of Sale (POS) Systems' },
                  { value: 'Hospital Management (HMS)', label: 'Hospital Management (HMS)' },
                  { value: 'School Management Cloud', label: 'School Management Cloud' },
                  { value: 'Hotel & Hospitality Management', label: 'Hotel & Hospitality Management' },
                  { value: 'Restaurant & Café POS', label: 'Restaurant & Café POS' },
                  { value: 'Website Development', label: 'Website Development' },
                  { value: 'Mobile App (iOS & Android)', label: 'Mobile App (iOS & Android)' },
                  { value: 'AI & Workflow Automation', label: 'AI & Workflow Automation' },
                  { value: 'Cloud Solutions & Consulting', label: 'Cloud Solutions & Consulting' },
                ]}
              />

              <Select
                label="Target Launch Timeline"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                options={[
                  { value: 'Immediately (Urgent)', label: 'Immediately (Urgent)' },
                  { value: 'Within 1-2 Months', label: 'Within 1-2 Months' },
                  { value: '3-6 Months', label: '3-6 Months' },
                  { value: 'Planning & Exploration Stage', label: 'Planning & Exploration Stage' },
                ]}
              />
            </div>

            <Textarea
              label="Brief Project Overview"
              placeholder="Describe your current bottlenecks, business size, required integrations, or specific goals..."
              rows={3}
              value={formData.projectScope}
              onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
            />

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <MapPin className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                <span>Putalisadak • Direct WhatsApp: {WHATSAPP_DISPLAY}</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Button variant="ghost" type="button" onClick={onClose} size="sm">
                  Cancel
                </Button>
                <Button
                  variant="secondary"
                  type="submit"
                  size="md"
                  isLoading={isSubmitting}
                  rightIcon={<Send className="h-3.5 w-3.5" />}
                  className="w-full sm:w-auto"
                >
                  Send via WhatsApp
                </Button>
              </div>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </Modal>
  );
};

