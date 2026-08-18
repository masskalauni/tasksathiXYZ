import { Role, User } from './auth';

export type ProjectStatus =
  | 'planning'
  | 'design'
  | 'development'
  | 'testing'
  | 'review'
  | 'completed'
  | 'on_hold';

export interface Milestone {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in_progress' | 'pending';
  dueDate: string;
  completedDate?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  email: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  clientName: string;
  clientId: string;
  serviceCategory: string;
  status: ProjectStatus;
  progress: number; // 0 - 100
  startDate: string;
  expectedCompletion: string;
  description: string;
  budget?: string;
  projectManager: TeamMember;
  team: TeamMember[];
  milestones: Milestone[];
  deliverables?: string[];
  techStack?: string[];
  currentStage: 'discovery' | 'planning' | 'design' | 'development' | 'testing' | 'launch';
}

export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';
export type TaskStatus = 'todo' | 'in_progress' | 'review' | 'completed';

export interface Task {
  id: string;
  title: string;
  description?: string;
  projectId: string;
  projectName: string;
  assignedTo: TeamMember;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: string;
  createdAt: string;
  completedAt?: string;
}

export interface DocumentItem {
  id: string;
  name: string;
  projectId?: string;
  projectName?: string;
  fileType?: 'pdf' | 'figma' | 'doc' | 'sheet' | 'zip' | 'image' | string;
  fileSize: string;
  uploadedDate: string;
  status?: 'approved' | 'in_review' | 'draft' | 'archived' | string;
  downloadUrl?: string;
  category: 'contracts' | 'specifications' | 'design' | 'invoices' | 'reports' | 'Client Uploads' | 'Security & Compliance' | 'Billing' | string;
}

export type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'overdue';

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientId: string;
  clientName: string;
  clientCompany: string;
  clientEmail: string;
  clientPhone?: string;
  clientPanVat?: string;
  projectId?: string;
  projectName?: string;
  issueDate: string;
  dueDate: string;
  status: InvoiceStatus;
  items: InvoiceItem[];
  subtotal: number;
  vatRate: number; // e.g., 0.13 for Nepal 13% VAT
  vatAmount: number;
  discountAmount?: number;
  total: number;
  currency: string;
  notes?: string;
  paymentMethod?: string;
  paidDate?: string;
}

export type TicketCategory = 'technical' | 'billing' | 'project' | 'account' | 'other';
export type TicketPriority = 'low' | 'medium' | 'high' | 'urgent';
export type TicketStatus = 'open' | 'in_progress' | 'waiting_for_client' | 'resolved' | 'closed';

export interface TicketMessage {
  id: string;
  senderId: string;
  senderName: string;
  senderRole: 'client' | 'staff' | 'admin';
  content: string;
  createdAt: string;
  attachments?: string[];
}

export interface SupportTicket {
  id: string;
  ticketNumber: string;
  subject: string;
  category: TicketCategory;
  priority: TicketPriority;
  status: TicketStatus;
  clientId: string;
  clientName: string;
  clientCompany: string;
  assignedStaff?: TeamMember;
  createdAt: string;
  lastUpdated: string;
  messages: TicketMessage[];
}

export type Ticket = SupportTicket;

export interface ChatMessage {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  isFromClient: boolean;
  content: string;
  timestamp: string;
  attachments?: { name: string; size: string; type: string }[];
}

export interface Conversation {
  id: string;
  clientId: string;
  clientName: string;
  clientCompany: string;
  clientAvatar?: string;
  projectId?: string;
  projectName?: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  participants: TeamMember[];
}

export type NotificationType =
  | 'project_update'
  | 'task_update'
  | 'invoice'
  | 'message'
  | 'support'
  | 'system';

export interface NotificationItem {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionUrl?: string;
}

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'proposal' | 'won' | 'lost';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceRequested: string;
  budgetRange: string;
  timeline: string;
  status: LeadStatus;
  source: string;
  message: string;
  createdAt: string;
  assignedTo?: TeamMember;
  internalNotes?: { id: string; author: string; text: string; date: string }[];
}
