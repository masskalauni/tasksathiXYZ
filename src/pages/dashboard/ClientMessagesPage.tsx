import React, { useState, useEffect } from 'react';
import { useAuth } from '@/src/context/AuthContext';
import { dashboardService } from '@/src/services/dashboardService';
import { Conversation, ChatMessage } from '@/src/types/dashboard';
import { DashboardPageHeader } from '@/src/components/dashboard/DashboardPageHeader';
import {
  MessageSquare,
  Send,
  Paperclip,
  Smile,
  ShieldCheck,
  Search,
  CheckCheck,
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const ClientMessagesPage: React.FC = () => {
  const { user } = useAuth();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConvId, setSelectedConvId] = useState<string>('conv-1');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dashboardService.getConversations().then((convData) => {
      setConversations(convData);
      if (convData.length > 0) {
        setSelectedConvId(convData[0].id);
        dashboardService.getChatMessages(convData[0].id).then(setMessages);
      }
      setLoading(false);
    });
  }, []);

  const handleSelectConversation = (convId: string) => {
    setSelectedConvId(convId);
    dashboardService.getChatMessages(convId).then(setMessages);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMsg = await dashboardService.sendChatMessage(
      selectedConvId,
      inputMessage,
      user?.name || 'Aarav Sharma',
      user?.id || 'client-1'
    );

    setMessages([...messages, newMsg]);
    setInputMessage('');
  };

  const activeConv = conversations.find((c) => c.id === selectedConvId);

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="Direct Team Communication"
        description="Collaborate directly with your assigned TaskSathi Technical Lead and Project Manager."
        breadcrumbs={[{ label: 'Messages' }]}
      />

      <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[560px]">
        {/* Left: Conversation List */}
        <div className="lg:col-span-4 border-r border-slate-200 dark:border-slate-800 flex flex-col">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/60">
            {conversations.map((conv) => {
              const isSelected = conv.id === selectedConvId;
              return (
                <div
                  key={conv.id}
                  onClick={() => handleSelectConversation(conv.id)}
                  className={cn(
                    'p-4 flex items-start gap-3 cursor-pointer transition-colors',
                    isSelected
                      ? 'bg-blue-50/70 dark:bg-blue-950/40 border-l-4 border-blue-600'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-900/50'
                  )}
                >
                  <div className="h-10 w-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-xs">
                    TS
                  </div>
                  <div className="flex-1 min-w-0 space-y-0.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                        {conv.projectName || 'TaskSathi Engineering Pod'}
                      </h4>
                      <span className="text-[10px] text-slate-400 shrink-0">{conv.lastMessageTime}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                      {conv.lastMessage}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Message Thread & Composer */}
        <div className="lg:col-span-8 flex flex-col justify-between bg-slate-50/40 dark:bg-slate-900/20">
          {/* Active Thread Header */}
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                TS
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                  {activeConv?.projectName || 'TaskSathi Sprint Team'}
                </h3>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>Pooja Thapa (PM), Sajan Shrestha (Tech Lead)</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span className="hidden sm:inline text-[11px] font-medium">Encrypted Channel</span>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 max-h-[420px]">
            {messages.map((msg) => {
              const isMine = msg.isFromClient;
              return (
                <div
                  key={msg.id}
                  className={cn('flex flex-col', isMine ? 'items-end' : 'items-start')}
                >
                  <div className="flex items-center gap-1.5 mb-1 text-[10px] text-slate-400">
                    <span className="font-semibold text-slate-600 dark:text-slate-300">
                      {msg.senderName}
                    </span>
                    <span>• {msg.timestamp}</span>
                  </div>
                  <div
                    className={cn(
                      'p-3.5 rounded-2xl max-w-md text-xs leading-relaxed shadow-2xs',
                      isMine
                        ? 'bg-blue-600 text-white rounded-br-xs'
                        : 'bg-white dark:bg-[#111827] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-bl-xs'
                    )}
                  >
                    {msg.content}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Message Composer */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 sm:p-4 bg-white dark:bg-[#111827] border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
          >
            <button
              type="button"
              onClick={() => alert('Mock document attachment selector')}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              title="Attach File"
            >
              <Paperclip className="h-4 w-4" />
            </button>

            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Write a message to your engineering pod..."
              className="flex-1 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600 transition-all"
            />

            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2 rounded-xl bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700 transition-colors cursor-pointer"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
