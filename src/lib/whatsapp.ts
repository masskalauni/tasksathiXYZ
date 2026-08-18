import { QuoteRequestSubmission, ContactSubmission } from '@/src/types';

export const WHATSAPP_NUMBER = '9779868509934';
export const WHATSAPP_DISPLAY = '+977 9868509934';
export const WHATSAPP_RAW = '9868509934';

/**
 * Creates a direct wa.me link with encoded text message
 */
export function createWhatsAppUrl(message: string): string {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * Directly opens WhatsApp chat in a new tab/window or fallback
 */
export function openWhatsAppChat(message: string): void {
  const url = createWhatsAppUrl(message);
  if (typeof window !== 'undefined') {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // If popup blocker triggered, navigate directly
      window.location.href = url;
    }
  }
}

/**
 * Formats quick project inquiry modal data into a structured WhatsApp message
 */
export function formatQuickInquiryWhatsApp(data: {
  name: string;
  phone: string;
  email?: string;
  organization?: string;
  serviceInterest: string;
  timeline?: string;
  projectScope?: string;
}): string {
  const lines = [
    '🚀 *NEW PROJECT INQUIRY — TASK SATHI*',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    `👤 *Client Name:* ${data.name.trim()}`,
    `📞 *Phone Number:* ${data.phone.trim()}`,
  ];

  if (data.email?.trim()) {
    lines.push(`📧 *Email:* ${data.email.trim()}`);
  }
  if (data.organization?.trim()) {
    lines.push(`🏢 *Organization / Company:* ${data.organization.trim()}`);
  }

  lines.push(`🛠 *Service Required:* ${data.serviceInterest}`);

  if (data.timeline) {
    lines.push(`⏱ *Target Timeline:* ${data.timeline}`);
  }

  if (data.projectScope?.trim()) {
    lines.push(`📝 *Project Scope & Requirements:*\n${data.projectScope.trim()}`);
  }

  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push('📍 *Origin:* Sent via TASK SATHI Website (Kathmandu, Nepal)');

  return lines.join('\n');
}

/**
 * Formats detailed multi-step quote request into a structured WhatsApp message
 */
export function formatQuoteRequestWhatsApp(data: QuoteRequestSubmission, quoteId?: string): string {
  const lines = [
    '📋 *DETAILED SOFTWARE QUOTE REQUEST — TASK SATHI*',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
  ];

  if (quoteId) {
    lines.push(`🔖 *Reference ID:* ${quoteId}`);
  }

  lines.push(
    `👤 *Client Name:* ${data.fullName.trim()}`,
    `📞 *Phone Number:* ${data.phone.trim()}`,
    `📧 *Email:* ${data.email.trim()}`
  );

  if (data.companyName?.trim()) {
    lines.push(`🏢 *Company Name:* ${data.companyName.trim()}`);
  }

  if (data.selectedServices && data.selectedServices.length > 0) {
    lines.push(`🛠 *Selected Modules & Services:*\n• ${data.selectedServices.join('\n• ')}`);
  } else if (data.projectType) {
    lines.push(`🛠 *Project Type:* ${data.projectType}`);
  }

  if (data.timeline) {
    lines.push(`⏱ *Estimated Timeline:* ${data.timeline}`);
  }

  if (data.budgetEstimate) {
    lines.push(`💰 *Budget Tier:* ${data.budgetEstimate}`);
  }

  if (data.description?.trim()) {
    lines.push(`📝 *Detailed Requirements:*\n${data.description.trim()}`);
  }

  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push('📍 *Origin:* TASK SATHI Interactive Quote Portal');

  return lines.join('\n');
}

/**
 * Formats contact page submission into a structured WhatsApp message
 */
export function formatContactMessageWhatsApp(data: ContactSubmission): string {
  const lines = [
    '💬 *NEW CONTACT INQUIRY — TASK SATHI*',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    `👤 *Full Name:* ${data.fullName.trim()}`,
    `📞 *Phone Number:* ${data.phone.trim()}`,
    `📧 *Email:* ${data.email.trim()}`,
  ];

  if (data.companyName?.trim()) {
    lines.push(`🏢 *Company / Business:* ${data.companyName.trim()}`);
  }

  if (data.serviceInterest) {
    lines.push(`🛠 *Service Interest:* ${data.serviceInterest}`);
  }

  if (data.message?.trim()) {
    lines.push(`📝 *Message:*\n${data.message.trim()}`);
  }

  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push('📍 *Origin:* TASK SATHI Contact Desk (Putalisadak)');

  return lines.join('\n');
}

/**
 * Formats direct service inquiry for quick consultation
 */
export function formatServiceInquiryWhatsApp(serviceTitle: string, customNote?: string): string {
  const lines = [
    `👋 *Hello TASK SATHI!*`,
    `I am interested in consulting about *${serviceTitle}* for our business in Nepal.`,
  ];

  if (customNote?.trim()) {
    lines.push(`\n*Additional Details:* ${customNote.trim()}`);
  }

  lines.push('\nPlease share the technical feasibility, pricing, and consultation availability.');
  return lines.join('\n');
}

/**
 * Formats product demo & procurement inquiry
 */
export function formatProductInquiryWhatsApp(productTitle: string, orgName?: string): string {
  const lines = [
    `👋 *Hello TASK SATHI!*`,
    `I would like to request a live demo and proposal for your *${productTitle}* software.`,
  ];

  if (orgName?.trim()) {
    lines.push(`🏢 *Our Organization:* ${orgName.trim()}`);
  }

  lines.push('\nPlease let me know when we can schedule a demonstration.');
  return lines.join('\n');
}

/**
 * Formats pricing plan consultation inquiry
 */
export function formatPricingInquiryWhatsApp(planName: string, priceText?: string): string {
  const lines = [
    `👋 *Hello TASK SATHI Team!*`,
    `I am interested in the *${planName}* package${priceText ? ` (${priceText})` : ''}.`,
    `Could you please share more details regarding implementation timelines and custom integrations?`,
  ];
  return lines.join('\n');
}

/**
 * Formats career & job application inquiry
 */
export function formatCareerInquiryWhatsApp(jobTitle: string, applicantName?: string): string {
  const lines = [
    `👋 *Hello TASK SATHI HR / Engineering Team!*`,
    applicantName
      ? `My name is *${applicantName.trim()}* and I am interested in applying for the *${jobTitle}* role.`
      : `I would like to apply for the open *${jobTitle}* position at your Putalisadak office.`,
    `I would love to share my CV and portfolio for review.`,
  ];
  return lines.join('\n');
}

/**
 * Formats quick general greeting / consultation inquiry
 */
export function formatGeneralInquiryWhatsApp(customMessage?: string): string {
  if (customMessage?.trim()) {
    return `👋 *Hello TASK SATHI!*\n\n${customMessage.trim()}`;
  }
  return `👋 *Hello TASK SATHI!* I am looking for software development & business automation services in Kathmandu. I would like to consult with your engineering team.`;
}
