import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Activity,
  Bot,
  CheckCircle2,
  Cpu,
  Database,
  Layers,
  Sparkles,
  Zap,
  ShieldCheck,
  Server,
  ArrowRight,
} from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'ai-pipeline' | 'erp-live'>('architecture');
  const [metricCounter, setMetricCounter] = useState(1480);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetricCounter((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto select-none">
      {/* Ambient background glow */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-500/15 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-500/15 dark:bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Console Frame */}
      <div className="relative rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-[#111827]/95 shadow-2xl backdrop-blur-md overflow-hidden">
        {/* Terminal / App Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/50">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            <span className="ml-2 text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400">
              tasksathi-core-engine // v2.6.4
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>OPERATIONAL (0ms latency)</span>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-slate-200 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/30 px-3 pt-2 gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-t-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? 'bg-white dark:bg-[#111827] text-blue-600 dark:text-blue-400 border-t border-x border-slate-200 dark:border-slate-800'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>Enterprise Mesh</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('ai-pipeline')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-t-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'ai-pipeline'
                ? 'bg-white dark:bg-[#111827] text-purple-600 dark:text-purple-400 border-t border-x border-slate-200 dark:border-slate-800'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'
            }`}
          >
            <Bot className="h-3.5 w-3.5" />
            <span>AI Automation</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('erp-live')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-t-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'erp-live'
                ? 'bg-white dark:bg-[#111827] text-emerald-600 dark:text-emerald-400 border-t border-x border-slate-200 dark:border-slate-800'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'
            }`}
          >
            <Activity className="h-3.5 w-3.5" />
            <span>Real-Time ERP</span>
          </button>
        </div>

        {/* Dynamic Display Body */}
        <div className="p-5 space-y-4">
          {activeTab === 'architecture' && (
            <motion.div
              key="arch"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {/* Architecture Node Grid */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 p-3 text-left">
                  <div className="flex items-center justify-between text-blue-600 dark:text-blue-400 mb-1">
                    <Server className="h-4 w-4" />
                    <span className="text-[10px] font-mono text-emerald-500">99.99%</span>
                  </div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Cloud Cluster</div>
                  <div className="text-[10px] text-slate-500">Auto-scaling Microservices</div>
                </div>

                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 p-3 text-left">
                  <div className="flex items-center justify-between text-purple-600 dark:text-purple-400 mb-1">
                    <Database className="h-4 w-4" />
                    <span className="text-[10px] font-mono text-blue-500">Sync ON</span>
                  </div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Data Vault</div>
                  <div className="text-[10px] text-slate-500">Encrypted IRD Ledgers</div>
                </div>

                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 p-3 text-left">
                  <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400 mb-1">
                    <ShieldCheck className="h-4 w-4" />
                    <span className="text-[10px] font-mono text-emerald-500">Passed</span>
                  </div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Security Guard</div>
                  <div className="text-[10px] text-slate-500">Role ACL & 2FA Tokens</div>
                </div>
              </div>

              {/* Live Flow Diagram / Signal Visual */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-900 dark:bg-black/60 p-4 text-white font-mono text-xs overflow-hidden">
                <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 mb-2 border-b border-slate-800">
                  <span>DISPATCH PIPELINE</span>
                  <span className="text-blue-400">EVENTS: {metricCounter}</span>
                </div>
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    <span className="text-slate-300">POS.ReceiptSynced</span>
                    <span className="text-slate-500 text-[10px] ml-auto">12ms • Kathmandu-01</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-400">
                    <Zap className="h-3.5 w-3.5 shrink-0" />
                    <span className="text-slate-300">ERP.JournalPosted</span>
                    <span className="text-slate-500 text-[10px] ml-auto">VAT 13% Calculated</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400">
                    <Sparkles className="h-3.5 w-3.5 shrink-0" />
                    <span className="text-slate-300">AI.DocumentExtracted</span>
                    <span className="text-slate-500 text-[10px] ml-auto">99.8% Accuracy</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'ai-pipeline' && (
            <motion.div
              key="ai"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              <div className="rounded-xl border border-purple-200 dark:border-purple-900/60 bg-purple-50/50 dark:bg-purple-950/20 p-3.5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Bot className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-xs font-bold text-purple-900 dark:text-purple-200">
                      Sathi Intelligence Bot
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">
                    Active Agent
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  "Parsed 14 vendor invoices into ERP accounting ledgers with zero manual data entry required."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-2.5 bg-slate-50/50 dark:bg-slate-900/40">
                  <span className="text-[10px] text-slate-500 block">OCR Recognition</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">Nepali & English</span>
                </div>
                <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-2.5 bg-slate-50/50 dark:bg-slate-900/40">
                  <span className="text-[10px] text-slate-500 block">Automation Time Saved</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">18.5 hrs / week</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'erp-live' && (
            <motion.div
              key="erp"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              <div className="grid grid-cols-2 gap-2.5">
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 shadow-xs">
                  <span className="text-[10px] font-medium text-slate-500">Active Counters (POS)</span>
                  <div className="text-xl font-extrabold text-blue-600 dark:text-blue-400 mt-0.5">38 Terminals</div>
                  <span className="text-[10px] text-emerald-600 flex items-center gap-1 mt-1">
                    <CheckCircle2 className="h-3 w-3" /> All synced
                  </span>
                </div>
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 shadow-xs">
                  <span className="text-[10px] font-medium text-slate-500">Daily Invoices Issued</span>
                  <div className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">1,420 Bills</div>
                  <span className="text-[10px] text-blue-600">IRD compliant QR codes</span>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-3 bg-slate-50/80 dark:bg-slate-900/50 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Multi-branch Inventory Balance</span>
                </div>
                <span className="font-mono font-semibold text-slate-900 dark:text-slate-100">100% Balanced</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Footer Status Bar */}
        <div className="px-4 py-2.5 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Cpu className="h-3.5 w-3.5 text-blue-500" />
            <span>Built by TASK SATHI Engineering</span>
          </div>
          <span className="font-mono text-[10px] text-slate-400">Kathmandu, NP</span>
        </div>
      </div>
    </div>
  );
};
