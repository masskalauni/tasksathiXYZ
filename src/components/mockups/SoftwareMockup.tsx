import React from 'react';
import { ProductMockupData } from '@/src/types';
import {
  BarChart3,
  Activity,
  Layers,
  Users,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  Search,
  Filter,
  Download,
  Building2,
  Receipt,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

export interface SoftwareMockupProps {
  data: ProductMockupData;
  className?: string;
}

export const SoftwareMockup: React.FC<SoftwareMockupProps> = ({ data, className = '' }) => {
  return (
    <div className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F172A] shadow-xl overflow-hidden ${className}`}>
      {/* Window Title Bar */}
      <div className="bg-slate-100 dark:bg-[#1E293B] px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-amber-400/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
          </div>
          <span className="text-xs font-mono font-semibold text-slate-600 dark:text-slate-300 ml-2">
            {data.title} • Live Preview
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Simulated Environment
          </span>
        </div>
      </div>

      {/* Internal App Canvas */}
      <div className="p-4 sm:p-6 space-y-6">
        {/* Top Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {data.metrics.map((metric, i) => (
            <div
              key={i}
              className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-[#131F37] border border-slate-200/80 dark:border-slate-800/80"
            >
              <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                {metric.label}
              </div>
              <div className="text-lg sm:text-xl font-bold font-mono text-slate-900 dark:text-white mt-1">
                {metric.value}
              </div>
              {metric.change && (
                <div
                  className={`text-[10px] font-mono font-semibold mt-1 flex items-center gap-0.5 ${
                    metric.isPositive
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-amber-600 dark:text-amber-400'
                  }`}
                >
                  <TrendingUp className="h-2.5 w-2.5" />
                  <span>{metric.change}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Middle Section: Table View on Left, Activity on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Operational Table */}
          <div className="lg:col-span-8 rounded-xl border border-slate-200 dark:border-slate-800/90 overflow-hidden bg-white dark:bg-[#111C30]">
            <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between bg-slate-50/50 dark:bg-[#16233B]">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Operational Ledger / Records
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  {data.tableRows.length} Active Records
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 bg-slate-50/30 dark:bg-[#131F37]">
                    {data.tableHeaders.map((head, i) => (
                      <th key={i} className="py-2.5 px-3 font-semibold text-[11px]">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-mono">
                  {data.tableRows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="py-2 px-3 text-slate-800 dark:text-slate-200 text-xs">
                          {cIdx === row.length - 1 ? (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                              {cell}
                            </span>
                          ) : (
                            String(cell)
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Activity / Event Feed */}
          <div className="lg:col-span-4 rounded-xl border border-slate-200 dark:border-slate-800/90 p-4 bg-slate-50/40 dark:bg-[#111C30] space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Live Event Feed
              </span>
              <Activity className="h-3.5 w-3.5 text-blue-500 animate-pulse" />
            </div>

            <div className="space-y-2.5">
              {data.recentActivities.map((act) => (
                <div key={act.id} className="text-xs space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900 dark:text-slate-200 text-[11px]">
                      {act.user}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                      <Clock className="h-2.5 w-2.5" />
                      {act.time}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                    {act.action}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
