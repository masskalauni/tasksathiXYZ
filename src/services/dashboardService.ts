import {
  Project,
  Task,
  TaskStatus,
  DocumentItem,
  Invoice,
  SupportTicket,
  Conversation,
  ChatMessage,
  NotificationItem,
} from '@/src/types/dashboard';
import {
  MOCK_PROJECTS,
  MOCK_TASKS,
  MOCK_DOCUMENTS,
  MOCK_INVOICES,
  MOCK_TICKETS,
  MOCK_CONVERSATIONS,
  MOCK_CHAT_MESSAGES,
  MOCK_NOTIFICATIONS,
} from '@/src/data/mockDashboardData';

export interface DashboardService {
  getProjects(clientId?: string): Promise<Project[]>;
  getProjectById(id: string): Promise<Project | undefined>;
  getTasks(projectId?: string): Promise<Task[]>;
  updateTaskStatus(taskId: string, status: TaskStatus): Promise<Task>;
  getInvoices(clientId?: string): Promise<Invoice[]>;
  getInvoiceById(id: string): Promise<Invoice | undefined>;
  getDocuments(projectId?: string): Promise<DocumentItem[]>;
  getTickets(clientId?: string): Promise<SupportTicket[]>;
  getSupportTickets(clientId?: string): Promise<SupportTicket[]>;
  createTicket(ticket: Omit<SupportTicket, 'id' | 'ticketNumber' | 'createdAt' | 'lastUpdated' | 'messages'>, initialMessage: string): Promise<SupportTicket>;
  createSupportTicket(data: { subject: string; category: string; priority: any; message: string; clientId?: string; clientName?: string }): Promise<SupportTicket>;
  getConversations(clientId?: string): Promise<Conversation[]>;
  getChatMessages(conversationId: string): Promise<ChatMessage[]>;
  sendChatMessage(conversationId: string, content: string, senderName: string, senderId: string): Promise<ChatMessage>;
  getNotifications(): Promise<NotificationItem[]>;
  markNotificationRead(id: string): Promise<void>;
  markAllNotificationsRead(): Promise<void>;
}

class MockDashboardServiceImpl implements DashboardService {
  private projects = [...MOCK_PROJECTS];
  private tasks = [...MOCK_TASKS];
  private documents = [...MOCK_DOCUMENTS];
  private invoices = [...MOCK_INVOICES];
  private tickets = [...MOCK_TICKETS];
  private conversations = [...MOCK_CONVERSATIONS];
  private chatMessages = { ...MOCK_CHAT_MESSAGES };
  private notifications = [...MOCK_NOTIFICATIONS];

  async getProjects(_clientId?: string): Promise<Project[]> {
    await new Promise((res) => setTimeout(res, 150));
    return [...this.projects];
  }

  async getProjectById(id: string): Promise<Project | undefined> {
    await new Promise((res) => setTimeout(res, 100));
    return this.projects.find((p) => p.id === id || p.slug === id);
  }

  async getTasks(projectId?: string): Promise<Task[]> {
    await new Promise((res) => setTimeout(res, 100));
    if (projectId) {
      return this.tasks.filter((t) => t.projectId === projectId);
    }
    return [...this.tasks];
  }

  async updateTaskStatus(taskId: string, status: TaskStatus): Promise<Task> {
    await new Promise((res) => setTimeout(res, 150));
    const index = this.tasks.findIndex((t) => t.id === taskId);
    if (index !== -1) {
      this.tasks[index] = {
        ...this.tasks[index],
        status,
        completedAt: status === 'completed' ? new Date().toISOString().split('T')[0] : undefined,
      };
      return this.tasks[index];
    }
    throw new Error('Task not found');
  }

  async getInvoices(_clientId?: string): Promise<Invoice[]> {
    await new Promise((res) => setTimeout(res, 150));
    return [...this.invoices];
  }

  async getInvoiceById(id: string): Promise<Invoice | undefined> {
    await new Promise((res) => setTimeout(res, 100));
    return this.invoices.find((inv) => inv.id === id || inv.invoiceNumber === id);
  }

  async getDocuments(projectId?: string): Promise<DocumentItem[]> {
    await new Promise((res) => setTimeout(res, 100));
    if (projectId) {
      return this.documents.filter((d) => d.projectId === projectId);
    }
    return [...this.documents];
  }

  async getTickets(_clientId?: string): Promise<SupportTicket[]> {
    await new Promise((res) => setTimeout(res, 150));
    return [...this.tickets];
  }

  async getSupportTickets(clientId?: string): Promise<SupportTicket[]> {
    return this.getTickets(clientId);
  }

  async createSupportTicket(data: {
    subject: string;
    category: string;
    priority: any;
    message: string;
    clientId?: string;
    clientName?: string;
  }): Promise<SupportTicket> {
    const validCategory = (['technical', 'billing', 'project', 'account', 'other'].includes(data.category.toLowerCase())
      ? data.category.toLowerCase()
      : 'technical') as any;

    return this.createTicket(
      {
        subject: data.subject,
        category: validCategory,
        priority: data.priority || 'medium',
        status: 'open',
        clientId: data.clientId || 'client-1',
        clientName: data.clientName || 'Partner Client',
        clientCompany: 'Enterprise Client',
      },
      data.message
    );
  }

  async createTicket(
    ticketData: Omit<SupportTicket, 'id' | 'ticketNumber' | 'createdAt' | 'lastUpdated' | 'messages'>,
    initialMessage: string
  ): Promise<SupportTicket> {
    await new Promise((res) => setTimeout(res, 300));
    const newTicket: SupportTicket = {
      ...ticketData,
      id: `tick-${Date.now()}`,
      ticketNumber: `SUP-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: 'Just now',
      lastUpdated: 'Just now',
      messages: [
        {
          id: `tm-${Date.now()}`,
          senderId: ticketData.clientId,
          senderName: ticketData.clientName,
          senderRole: 'client',
          content: initialMessage,
          createdAt: 'Just now',
        },
      ],
    };
    this.tickets.unshift(newTicket);
    return newTicket;
  }

  async getConversations(_clientId?: string): Promise<Conversation[]> {
    await new Promise((res) => setTimeout(res, 100));
    return [...this.conversations];
  }

  async getChatMessages(conversationId: string): Promise<ChatMessage[]> {
    await new Promise((res) => setTimeout(res, 100));
    return this.chatMessages[conversationId] || [];
  }

  async sendChatMessage(conversationId: string, content: string, senderName: string, senderId: string): Promise<ChatMessage> {
    await new Promise((res) => setTimeout(res, 150));
    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      conversationId,
      senderId,
      senderName,
      isFromClient: true,
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    if (!this.chatMessages[conversationId]) {
      this.chatMessages[conversationId] = [];
    }
    this.chatMessages[conversationId].push(newMsg);

    // Update last message in conversation
    const conv = this.conversations.find((c) => c.id === conversationId);
    if (conv) {
      conv.lastMessage = content;
      conv.lastMessageTime = 'Just now';
    }

    return newMsg;
  }

  async getNotifications(): Promise<NotificationItem[]> {
    return [...this.notifications];
  }

  async markNotificationRead(id: string): Promise<void> {
    const notif = this.notifications.find((n) => n.id === id);
    if (notif) notif.read = true;
  }

  async markAllNotificationsRead(): Promise<void> {
    this.notifications.forEach((n) => (n.read = true));
  }
}

export const dashboardService: DashboardService = new MockDashboardServiceImpl();
