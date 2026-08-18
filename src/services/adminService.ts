import {
  Lead,
  LeadStatus,
  Project,
  Task,
  Invoice,
  SupportTicket,
} from '@/src/types/dashboard';
import { User } from '@/src/types/auth';
import {
  MOCK_LEADS,
  MOCK_PROJECTS,
  MOCK_TASKS,
  MOCK_INVOICES,
  MOCK_USERS,
  MOCK_TICKETS,
} from '@/src/data/mockDashboardData';
import { servicesData } from '@/src/data/services';
import { productsData } from '@/src/data/products';
import { portfolioData } from '@/src/data/portfolio';
import { blogPosts } from '@/src/data/blog';

export interface AdminStats {
  totalRevenue: number;
  activeLeads: number;
  leadsPipelineValue: number;
  activeProjects: number;
  totalClients: number;
  openTickets: number;
}

export interface AdminAnalytics {
  totalLeads: number;
  newLeads: number;
  activeClients: number;
  activeProjects: number;
  pendingTasks: number;
  pendingInvoicesAmount: number;
  paidInvoicesAmount: number;
  leadsByStatus: Record<LeadStatus, number>;
  projectsByStatus: Record<string, number>;
  monthlyInquiries: { month: string; inquiries: number; conversions: number }[];
  serviceDemand: { service: string; percentage: number; count: number }[];
}

export interface AdminService {
  getAdminStats(): Promise<AdminStats>;
  getLeads(): Promise<Lead[]>;
  getLeadById(id: string): Promise<Lead | undefined>;
  createLead(leadData: Partial<Lead>): Promise<Lead>;
  updateLead(id: string, updates: Partial<Lead>): Promise<Lead>;
  updateLeadStatus(id: string, status: LeadStatus): Promise<Lead>;
  addLeadNote(id: string, author: string, text: string): Promise<Lead>;
  deleteLead(id: string): Promise<void>;
  getClients(): Promise<User[]>;
  getClientById(id: string): Promise<User | undefined>;
  getProjects(): Promise<Project[]>;
  getProjectById(id: string): Promise<Project | undefined>;
  createProject(projectData: Partial<Project>): Promise<Project>;
  updateProject(id: string, updates: Partial<Project>): Promise<Project>;
  deleteProject(id: string): Promise<void>;
  getTasks(): Promise<Task[]>;
  createTask(taskData: Partial<Task>): Promise<Task>;
  updateTask(id: string, updates: Partial<Task>): Promise<Task>;
  deleteTask(id: string): Promise<void>;
  getInvoices(): Promise<Invoice[]>;
  getInvoiceById(id: string): Promise<Invoice | undefined>;
  createInvoice(invoiceData: Partial<Invoice>): Promise<Invoice>;
  updateInvoiceStatus(id: string, status: Invoice['status']): Promise<Invoice>;
  getServices(): Promise<typeof servicesData>;
  getProducts(): Promise<typeof productsData>;
  getPortfolio(): Promise<typeof portfolioData>;
  getBlogPosts(): Promise<typeof blogPosts>;
  getTickets(): Promise<SupportTicket[]>;
  updateTicketStatus(id: string, status: SupportTicket['status']): Promise<SupportTicket>;
  replyTicket(id: string, message: string, senderName: string): Promise<SupportTicket>;
  getUsers(): Promise<User[]>;
  createUser(userData: Partial<User>): Promise<User>;
  updateUser(userId: string, updates: Partial<User>): Promise<User>;
  updateUserRole(userId: string, role: User['role']): Promise<User>;
  deleteUser(userId: string): Promise<void>;
  getAnalytics(): Promise<AdminAnalytics>;
}

class MockAdminServiceImpl implements AdminService {
  private leads = [...MOCK_LEADS];
  private projects = [...MOCK_PROJECTS];
  private tasks = [...MOCK_TASKS];
  private invoices = [...MOCK_INVOICES];
  private users = [...MOCK_USERS];
  private tickets = [...MOCK_TICKETS];

  async getAdminStats(): Promise<AdminStats> {
    await new Promise((res) => setTimeout(res, 100));
    const totalRevenue = this.invoices
      .filter((i) => i.status === 'paid')
      .reduce((sum, i) => sum + i.total, 0);

    const activeLeads = this.leads.filter((l) => l.status !== 'lost').length;
    const leadsPipelineValue = 8500000;
    const activeProjects = this.projects.filter((p) => p.status !== 'completed' && p.status !== 'on_hold').length;
    const totalClients = this.users.filter((u) => u.role === 'client').length;
    const openTickets = this.tickets.filter((t) => t.status === 'open' || t.status === 'in_progress').length;

    return {
      totalRevenue: totalRevenue || 3450000,
      activeLeads,
      leadsPipelineValue,
      activeProjects,
      totalClients: totalClients || 4,
      openTickets: openTickets || 2,
    };
  }

  async getLeads(): Promise<Lead[]> {
    await new Promise((res) => setTimeout(res, 100));
    return [...this.leads];
  }

  async getLeadById(id: string): Promise<Lead | undefined> {
    await new Promise((res) => setTimeout(res, 100));
    return this.leads.find((l) => l.id === id);
  }

  async createLead(leadData: Partial<Lead>): Promise<Lead> {
    await new Promise((res) => setTimeout(res, 150));
    const newLead: Lead = {
      id: `lead-${Date.now()}`,
      name: leadData.name || 'New Inquirer',
      email: leadData.email || 'lead@example.com',
      phone: leadData.phone || '+977 9800000000',
      company: leadData.company || 'Enterprise Corp',
      serviceRequested: leadData.serviceRequested || 'Custom Software Development',
      budgetRange: leadData.budgetRange || 'NPR 500,000 - 1,000,000',
      timeline: leadData.timeline || 'Within 1 Month',
      status: leadData.status || 'new',
      source: leadData.source || 'Admin Direct Entry',
      message: leadData.message || 'Direct lead logged by admin.',
      createdAt: new Date().toISOString().split('T')[0],
      assignedTo: leadData.assignedTo || {
        id: 'team-1',
        name: 'Sajan Shrestha',
        role: 'Technical Lead',
        email: 'admin@tasksathi.com',
      },
      internalNotes: [],
    };
    this.leads.unshift(newLead);
    return newLead;
  }

  async updateLead(id: string, updates: Partial<Lead>): Promise<Lead> {
    await new Promise((res) => setTimeout(res, 150));
    const index = this.leads.findIndex((l) => l.id === id);
    if (index === -1) throw new Error('Lead not found');
    this.leads[index] = { ...this.leads[index], ...updates };
    return this.leads[index];
  }

  async updateLeadStatus(id: string, status: LeadStatus): Promise<Lead> {
    await new Promise((res) => setTimeout(res, 150));
    const lead = this.leads.find((l) => l.id === id);
    if (!lead) throw new Error('Lead not found');
    lead.status = status;
    return lead;
  }

  async addLeadNote(id: string, author: string, text: string): Promise<Lead> {
    await new Promise((res) => setTimeout(res, 150));
    const lead = this.leads.find((l) => l.id === id);
    if (!lead) throw new Error('Lead not found');
    if (!lead.internalNotes) lead.internalNotes = [];
    lead.internalNotes.push({
      id: `note-${Date.now()}`,
      author,
      text,
      date: new Date().toISOString().split('T')[0],
    });
    return lead;
  }

  async deleteLead(id: string): Promise<void> {
    await new Promise((res) => setTimeout(res, 100));
    this.leads = this.leads.filter((l) => l.id !== id);
  }

  async getClients(): Promise<User[]> {
    await new Promise((res) => setTimeout(res, 100));
    return this.users.filter((u) => u.role === 'client');
  }

  async getClientById(id: string): Promise<User | undefined> {
    await new Promise((res) => setTimeout(res, 100));
    return this.users.find((u) => u.id === id);
  }

  async getProjects(): Promise<Project[]> {
    await new Promise((res) => setTimeout(res, 100));
    return [...this.projects];
  }

  async getProjectById(id: string): Promise<Project | undefined> {
    await new Promise((res) => setTimeout(res, 100));
    return this.projects.find((p) => p.id === id || p.slug === id);
  }

  async createProject(projectData: Partial<Project>): Promise<Project> {
    await new Promise((res) => setTimeout(res, 250));
    const newProject: Project = {
      id: `proj-${Date.now()}`,
      title: projectData.title || 'Untitled Project',
      slug: (projectData.title || 'project').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      clientName: projectData.clientName || 'Partner Client',
      clientId: projectData.clientId || 'user-client-1',
      serviceCategory: projectData.serviceCategory || 'Custom Software',
      status: projectData.status || 'planning',
      progress: projectData.progress || 0,
      startDate: projectData.startDate || new Date().toISOString().split('T')[0],
      expectedCompletion: projectData.expectedCompletion || '2024-12-31',
      description: projectData.description || '',
      budget: projectData.budget || 'NPR 500,000',
      projectManager: projectData.projectManager || {
        id: 'team-2',
        name: 'Pooja Thapa',
        role: 'Project Manager',
        email: 'pooja.t@tasksathi.com',
      },
      team: projectData.team || [],
      milestones: projectData.milestones || [],
      currentStage: 'planning',
    };
    this.projects.unshift(newProject);
    return newProject;
  }

  async updateProject(id: string, updates: Partial<Project>): Promise<Project> {
    await new Promise((res) => setTimeout(res, 150));
    const index = this.projects.findIndex((p) => p.id === id);
    if (index === -1) throw new Error('Project not found');
    this.projects[index] = { ...this.projects[index], ...updates };
    return this.projects[index];
  }

  async deleteProject(id: string): Promise<void> {
    await new Promise((res) => setTimeout(res, 100));
    this.projects = this.projects.filter((p) => p.id !== id);
  }

  async getTasks(): Promise<Task[]> {
    await new Promise((res) => setTimeout(res, 100));
    return [...this.tasks];
  }

  async createTask(taskData: Partial<Task>): Promise<Task> {
    await new Promise((res) => setTimeout(res, 150));
    const newTask: Task = {
      id: `task-${Date.now()}`,
      title: taskData.title || 'Untitled Task',
      description: taskData.description || '',
      projectId: taskData.projectId || 'proj-1',
      projectName: taskData.projectName || 'Active Project',
      assignedTo: taskData.assignedTo || {
        id: 'team-3',
        name: 'Bikash Karki',
        role: 'Engineer',
        email: 'bikash.k@tasksathi.com',
      },
      priority: taskData.priority || 'medium',
      status: taskData.status || 'todo',
      dueDate: taskData.dueDate || new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString().split('T')[0],
    };
    this.tasks.unshift(newTask);
    return newTask;
  }

  async updateTask(id: string, updates: Partial<Task>): Promise<Task> {
    await new Promise((res) => setTimeout(res, 100));
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index === -1) throw new Error('Task not found');
    this.tasks[index] = { ...this.tasks[index], ...updates };
    return this.tasks[index];
  }

  async deleteTask(id: string): Promise<void> {
    await new Promise((res) => setTimeout(res, 100));
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }

  async getInvoices(): Promise<Invoice[]> {
    await new Promise((res) => setTimeout(res, 100));
    return [...this.invoices];
  }

  async getInvoiceById(id: string): Promise<Invoice | undefined> {
    await new Promise((res) => setTimeout(res, 100));
    return this.invoices.find((i) => i.id === id || i.invoiceNumber === id);
  }

  async createInvoice(invoiceData: Partial<Invoice>): Promise<Invoice> {
    await new Promise((res) => setTimeout(res, 200));
    const subtotal = (invoiceData.items || []).reduce((sum, item) => sum + item.total, 0);
    const vatRate = 0.13;
    const vatAmount = subtotal * vatRate;
    const discount = invoiceData.discountAmount || 0;
    const total = subtotal + vatAmount - discount;

    const newInv: Invoice = {
      id: `inv-${Date.now()}`,
      invoiceNumber: `TS-2081-${Math.floor(1000 + Math.random() * 9000)}`,
      clientId: invoiceData.clientId || 'client-1',
      clientName: invoiceData.clientName || 'Partner Client',
      clientCompany: invoiceData.clientCompany || 'Client Enterprise',
      clientEmail: invoiceData.clientEmail || 'client@example.com',
      issueDate: invoiceData.issueDate || new Date().toISOString().split('T')[0],
      dueDate: invoiceData.dueDate || new Date(Date.now() + 20 * 86400000).toISOString().split('T')[0],
      status: invoiceData.status || 'sent',
      items: invoiceData.items || [],
      subtotal,
      vatRate,
      vatAmount,
      discountAmount: discount,
      total,
      currency: 'NPR',
      notes: invoiceData.notes,
    };
    this.invoices.unshift(newInv);
    return newInv;
  }

  async updateInvoiceStatus(id: string, status: Invoice['status']): Promise<Invoice> {
    await new Promise((res) => setTimeout(res, 100));
    const index = this.invoices.findIndex((i) => i.id === id);
    if (index === -1) throw new Error('Invoice not found');
    this.invoices[index] = { ...this.invoices[index], status };
    return this.invoices[index];
  }

  async getServices() {
    return servicesData;
  }

  async getProducts() {
    return productsData;
  }

  async getPortfolio() {
    return portfolioData;
  }

  async getBlogPosts() {
    return blogPosts;
  }

  async getTickets(): Promise<SupportTicket[]> {
    await new Promise((res) => setTimeout(res, 100));
    return [...this.tickets];
  }

  async updateTicketStatus(id: string, status: SupportTicket['status']): Promise<SupportTicket> {
    await new Promise((res) => setTimeout(res, 100));
    const index = this.tickets.findIndex((t) => t.id === id);
    if (index === -1) throw new Error('Ticket not found');
    this.tickets[index] = { ...this.tickets[index], status, lastUpdated: 'Just now' };
    return this.tickets[index];
  }

  async replyTicket(id: string, message: string, senderName: string): Promise<SupportTicket> {
    await new Promise((res) => setTimeout(res, 150));
    const index = this.tickets.findIndex((t) => t.id === id);
    if (index === -1) throw new Error('Ticket not found');
    this.tickets[index].messages.push({
      id: `msg-${Date.now()}`,
      senderId: 'team-admin',
      senderName,
      senderRole: 'admin',
      content: message,
      createdAt: 'Just now',
    });
    this.tickets[index].lastUpdated = 'Just now';
    return this.tickets[index];
  }

  async getUsers(): Promise<User[]> {
    await new Promise((res) => setTimeout(res, 100));
    return [...this.users];
  }

  async createUser(userData: Partial<User>): Promise<User> {
    await new Promise((res) => setTimeout(res, 150));
    const newUser: User = {
      id: `user-${Date.now()}`,
      name: userData.name || 'New Staff',
      email: userData.email || 'staff@tasksathi.com',
      phone: userData.phone || '+977 9800000000',
      company: userData.company || 'TASK SATHI Pvt. Ltd.',
      role: userData.role || 'staff',
      status: 'active',
      joinedDate: new Date().toISOString().split('T')[0],
      lastActive: 'Just now',
      jobTitle: userData.jobTitle || 'Team Member',
      avatar: userData.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    };
    this.users.unshift(newUser);
    return newUser;
  }

  async updateUser(userId: string, updates: Partial<User>): Promise<User> {
    await new Promise((res) => setTimeout(res, 100));
    const index = this.users.findIndex((u) => u.id === userId);
    if (index === -1) throw new Error('User not found');
    this.users[index] = { ...this.users[index], ...updates };
    return this.users[index];
  }

  async updateUserRole(userId: string, role: User['role']): Promise<User> {
    const user = this.users.find((u) => u.id === userId);
    if (!user) throw new Error('User not found');
    user.role = role;
    return user;
  }

  async deleteUser(userId: string): Promise<void> {
    await new Promise((res) => setTimeout(res, 100));
    this.users = this.users.filter((u) => u.id !== userId);
  }

  async getAnalytics(): Promise<AdminAnalytics> {
    await new Promise((res) => setTimeout(res, 150));

    const totalLeads = this.leads.length;
    const newLeads = this.leads.filter((l) => l.status === 'new').length;
    const activeClients = this.users.filter((u) => u.role === 'client').length;
    const activeProjects = this.projects.filter((p) => p.status !== 'completed' && p.status !== 'on_hold').length;
    const pendingTasks = this.tasks.filter((t) => t.status !== 'completed').length;

    const pendingInvoicesAmount = this.invoices
      .filter((i) => i.status === 'sent' || i.status === 'overdue')
      .reduce((sum, i) => sum + i.total, 0);

    const paidInvoicesAmount = this.invoices
      .filter((i) => i.status === 'paid')
      .reduce((sum, i) => sum + i.total, 0);

    const leadsByStatus: Record<LeadStatus, number> = {
      new: 0,
      contacted: 0,
      qualified: 0,
      proposal: 0,
      won: 0,
      lost: 0,
    };
    this.leads.forEach((l) => {
      leadsByStatus[l.status] = (leadsByStatus[l.status] || 0) + 1;
    });

    const projectsByStatus: Record<string, number> = {
      planning: 0,
      design: 0,
      development: 0,
      testing: 0,
      review: 0,
      completed: 0,
      on_hold: 0,
    };
    this.projects.forEach((p) => {
      projectsByStatus[p.status] = (projectsByStatus[p.status] || 0) + 1;
    });

    return {
      totalLeads,
      newLeads,
      activeClients,
      activeProjects,
      pendingTasks,
      pendingInvoicesAmount,
      paidInvoicesAmount,
      leadsByStatus,
      projectsByStatus,
      monthlyInquiries: [
        { month: 'Jan', inquiries: 24, conversions: 8 },
        { month: 'Feb', inquiries: 31, conversions: 11 },
        { month: 'Mar', inquiries: 42, conversions: 15 },
        { month: 'Apr', inquiries: 38, conversions: 14 },
        { month: 'May', inquiries: 49, conversions: 19 },
        { month: 'Jun', inquiries: 56, conversions: 22 },
        { month: 'Jul', inquiries: 64, conversions: 27 },
      ],
      serviceDemand: [
        { service: 'Enterprise POS & IRD Cloud ERP', percentage: 38, count: 48 },
        { service: 'Custom Web & Mobile Software', percentage: 28, count: 35 },
        { service: 'AI Automation & WhatsApp Bots', percentage: 20, count: 25 },
        { service: 'Healthcare EMR & Telematics', percentage: 14, count: 18 },
      ],
    };
  }
}

export const adminService: AdminService = new MockAdminServiceImpl();
