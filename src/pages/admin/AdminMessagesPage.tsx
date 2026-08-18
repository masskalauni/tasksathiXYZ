import React, { useState, useEffect, useRef } from 'react';
import { adminService } from '@/src/services/adminService';
import { dashboardService } from '@/src/services/dashboardService';
import { User } from '@/src/types/auth';
import { ChatMessage } from '@/src/types/dashboard';
import { Button } from '@/src/components/ui/Button';
import {
  MessageSquare,
  Send,
  Paperclip,
  Search,
  User as UserIcon,
  CheckCircle2,
  Clock,
  Sparkles,
  Phone,
  Video,
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const AdminMessagesPage: React.FC = () => {
  const [clients, setClients] = useState<User[]>([]);
  const [selectedClient, setSelectedClient] = useState<User | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessageText, setNewMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    setLoading(true);
    const data = await adminService.getClients();
    setClients(data);
    if (data.length > 0) {
      setSelectedClient(data[0]);
      loadThread(data[0].id);
    }
    setLoading(false);
  };

  const loadThread = async (clientId: string) => {
    const thread = await dashboardService.getChatMessages(`conv-${clientId}`);
    if (thread.length === 0) {
      // Fallback initial messages if empty
      const initial: ChatMessage[] = [
        {
          id: `msg-1`,
          conversationId: `conv-${clientId}`,
          senderId: clientId,
          senderName: selectedClient?.name || 'Client',
          isFromClient: true,
          content: 'Hello TaskSathi Team, could you provide an update on our milestone deliverable?',
          timestamp: '10:30 AM',
        },
      ];
      setMessages(initial);
    } else {
      setMessages(thread);
    }
    scrollToBottom();
  };

  const handleSelectClient = (client: User) => {
    setSelectedClient(client);
    loadThread(client.id);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessageText.trim() || !selectedClient) return;

    const convId = `conv-${selectedClient.id}`;
    const sent = await dashboardService.sendChatMessage(
      convId,
      newMessageText.trim(),
      'TaskSathi Engineering Lead',
      'admin-1'
    );

    setMessages((prev) => [...prev, sent]);
    setNewMessageText('');
    scrollToBottom();
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const filteredClients = clients.filter((c) => {
    return (
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.company?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  if (loading) {
    return (
      <div className="py-20 flex justify-center items-center">
        <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Client Communication Desk
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Direct engineering consultation, sprint standup channels, and project file exchanges.
        </p>
      </div>

      {/* Chat Container */}
      <div className="h-[750px] rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden grid grid-cols-1 md:grid-cols-12">
        {/* Left Sidebar: Client List */}
        <div className="md:col-span-4 lg:col-span-4 border-r border-slate-100 dark:border-slate-800 flex flex-col h-full bg-slate-50/50 dark:bg-slate-900/30">
          <div className="p-4 border-b border-slate-100 dark:border-slate-800">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-blue-600 dark:text-white"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/60 p-2 space-y-1">
            {filteredClients.map((client) => {
              const isSelected = selectedClient?.id === client.id;
              return (
                <button
                  key={client.id}
                  onClick={() => handleSelectClient(client)}
                  className={cn(
                    'w-full p-3 rounded-2xl flex items-center gap-3 text-left transition-all cursor-pointer',
                    isSelected
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300'
                  )}
                >
                  <div
                    className={cn(
                      'h-10 w-10 rounded-xl font-bold flex items-center justify-center text-xs shrink-0',
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-gradient-to-tr from-blue-600 to-indigo-600 text-white'
                    )}
                  >
                    {client.name[0]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold truncate">{client.name}</span>
                      <span
                        className={cn(
                          'text-[10px]',
                          isSelected ? 'text-blue-100' : 'text-slate-400'
                        )}
                      >
                        Active
                      </span>
                    </div>
                    <div
                      className={cn(
                        'text-[11px] truncate',
                        isSelected ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'
                      )}
                    >
                      {client.company}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Area: Active Chat Conversation */}
        <div className="md:col-span-8 lg:col-span-8 flex flex-col h-full bg-white dark:bg-[#111827]">
          {selectedClient ? (
            <>
              {/* Header */}
              <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-xs">
                    {selectedClient.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      {selectedClient.name}
                      <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {selectedClient.company} • {selectedClient.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    SLA: Priority 24/7
                  </span>
                </div>
              </div>

              {/* Message History */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((msg) => {
                  const isMe = msg.senderId === 'admin-1';
                  return (
                    <div
                      key={msg.id}
                      className={cn('flex flex-col max-w-[75%]', isMe ? 'ml-auto items-end' : 'items-start')}
                    >
                      <div className="text-[10px] text-slate-400 mb-1 px-1">
                        {isMe ? 'TaskSathi Engineering Desk' : msg.senderName} • {msg.timestamp}
                      </div>
                      <div
                        className={cn(
                          'p-3.5 rounded-2xl text-xs leading-relaxed',
                          isMe
                            ? 'bg-blue-600 text-white rounded-br-xs shadow-xs'
                            : 'bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-100 rounded-bl-xs'
                        )}
                      >
                        {msg.content}
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>

              {/* Send Form */}
              <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type an engineering response or dispatch update..."
                  value={newMessageText}
                  onChange={(e) => setNewMessageText(e.target.value)}
                  className="flex-1 px-4 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                />
                <Button type="submit" variant="primary" size="sm" disabled={!newMessageText.trim()}>
                  <Send className="h-4 w-4 mr-1.5" /> Send
                </Button>
              </form>
            </>
          ) : (
            <div className="h-full flex items-center justify-center text-slate-400 text-xs">
              Select a client from the left to start conversation.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
