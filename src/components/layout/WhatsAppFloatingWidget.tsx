import React, { useState } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Phone,
  Check,
  Building2,
  ExternalLink,
} from 'lucide-react';
import {
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  createWhatsAppUrl,
  openWhatsAppChat,
  formatGeneralInquiryWhatsApp,
} from '@/src/lib/whatsapp';
import { TaskSathiEmblem } from '@/src/components/ui/TaskSathiLogo';

export const WhatsAppFloatingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedQuickChip, setSelectedQuickChip] = useState<string | null>(null);

  const quickPrompts = [
    {
      label: 'Software Quote',
      text: 'Hello TASK SATHI! I would like to get a quote for a custom software project.',
    },
    {
      label: 'ERP & POS Demo',
      text: 'Hello! We need an ERP & POS system for our business in Nepal. Can we schedule a demo?',
    },
    {
      label: 'Website & App',
      text: 'Hi TASK SATHI team! I want to discuss building a modern website and mobile application.',
    },
    {
      label: 'Consultation Call',
      text: 'Hello! I would like to schedule a 15-minute technical discovery call with your Kathmandu team.',
    },
  ];

  const handleSelectChip = (item: { label: string; text: string }) => {
    setSelectedQuickChip(item.label);
    setMessage(item.text);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMsg = message.trim() || formatGeneralInquiryWhatsApp();
    openWhatsAppChat(finalMsg);
    setIsOpen(false);
    setMessage('');
    setSelectedQuickChip(null);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded WhatsApp Modal / Popover */}
      {isOpen && (
        <div className="mb-3 w-[92vw] sm:w-96 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#128C7E] dark:bg-[#075E54] p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center p-1 shadow-sm">
                    <TaskSathiEmblem size={32} idSuffix="wa-widget" />
                  </div>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-[#128C7E] animate-pulse" />
                </div>
                <div>
                  <div className="font-bold text-sm leading-tight flex items-center gap-1.5">
                    <span>TASK SATHI Support Desk</span>
                  </div>
                  <div className="text-[11px] text-white/85 flex items-center gap-1">
                    <span>Direct: {WHATSAPP_DISPLAY}</span>
                    <span>•</span>
                    <span className="text-emerald-200 font-medium">Online</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Close WhatsApp chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-[11px] text-white/80 mt-2">
              Putalisadak, Kathmandu. We usually respond within a few minutes on WhatsApp.
            </p>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50/70 dark:bg-[#0B0F19]/60 space-y-3.5">
            {/* Quick Inquiry Options */}
            <div>
              <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">
                Quick Inquiries:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {quickPrompts.map((q) => (
                  <button
                    key={q.label}
                    type="button"
                    onClick={() => handleSelectChip(q)}
                    className={`text-xs px-2.5 py-1 rounded-full border transition-all ${
                      selectedQuickChip === q.label
                        ? 'bg-[#128C7E] text-white border-[#128C7E] shadow-2xs font-semibold'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input Form */}
            <form onSubmit={handleSend} className="space-y-3">
              <div>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message or project inquiry here..."
                  className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#128C7E] resize-none"
                />
              </div>

              <div className="flex items-center justify-between gap-2">
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="text-[11px] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white inline-flex items-center gap-1 font-medium transition-colors"
                >
                  <Phone className="h-3 w-3" />
                  <span>Call Us</span>
                </a>

                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs shadow-md transition-all duration-150 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Chat on WhatsApp</span>
                  <Send className="h-3 w-3" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        {/* Tooltip on hover */}
        {!isOpen && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:flex items-center bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
            <span className="ml-1.5 h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open WhatsApp live chat"
          className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/40"
        >
          {isOpen ? (
            <X className="h-7 w-7 text-slate-950" />
          ) : (
            <div className="relative flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-slate-950"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.301-.15-1.781-.879-2.057-.979-.276-.1-.476-.15-.676.15-.2.3-.776.979-.951 1.179-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.489-.893-.796-1.496-1.779-1.671-2.079-.175-.3-.019-.462.131-.611.136-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.631-.926-2.234-.243-.588-.49-.508-.675-.518-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.026-1.05 2.501 0 1.476 1.075 2.899 1.225 3.099.15.2 2.115 3.23 5.124 4.53 2.11.91 2.935.973 3.99.818.895-.133 1.781-.728 2.032-1.433.25-.705.25-1.309.175-1.434-.075-.125-.275-.2-.576-.35z" />
                <path d="M12 2a9.93 9.93 0 0 0-8.583 14.97L2 22l5.176-1.358A9.932 9.932 0 1 0 12 2zm0 18.2a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.07.8.82-2.99-.2-.32A8.24 8.24 0 1 1 12 20.2z" />
              </svg>
              <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-red-500 border-2 border-white dark:border-slate-900" />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
