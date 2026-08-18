import React, { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import {
  TrendingUp,
  DollarSign,
  Users,
  Briefcase,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
} from 'lucide-react';
import { Button } from '@/src/components/ui/Button';

const revenueData = [
  { month: 'Jan', revenue: 1850000, expenses: 950000 },
  { month: 'Feb', revenue: 2200000, expenses: 1050000 },
  { month: 'Mar', revenue: 2650000, expenses: 1100000 },
  { month: 'Apr', revenue: 3100000, expenses: 1250000 },
  { month: 'May', revenue: 3800000, expenses: 1400000 },
  { month: 'Jun', revenue: 4500000, expenses: 1600000 },
  { month: 'Jul', revenue: 5200000, expenses: 1750000 },
];

const leadSourceData = [
  { name: 'Direct Inbound / Referral', value: 42, color: '#3B82F6' },
  { name: 'Google Organic / SEO', value: 28, color: '#10B981' },
  { name: 'CAN InfoTech & Expo', value: 18, color: '#8B5CF6' },
  { name: 'Social / LinkedIn Ads', value: 12, color: '#F59E0B' },
];

const productRevenueBreakdown = [
  { product: 'SathiPOS Cloud', revenue: 2150000 },
  { product: 'Custom Web & Mobile', revenue: 1850000 },
  { product: 'Hospital EMR', revenue: 950000 },
  { product: 'Fleet TMS & GPS', revenue: 650000 },
  { product: 'Hardware Bundles', revenue: 450000 },
];

export const AdminAnalyticsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState('6m');

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Executive Analytics & Financial Telemetry
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Real-time MRR, customer acquisition metrics, billable engineering hours, and pipeline velocity.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {['1m', '3m', '6m', '1y'].map((r) => (
            <button
              key={r}
              onClick={() => setTimeRange(r)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition-colors cursor-pointer ${
                timeRange === r
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
            <span>Quarterly Revenue</span>
            <span className="flex items-center text-emerald-500 font-bold text-[11px]">
              <ArrowUpRight className="h-3.5 w-3.5" /> +28.4%
            </span>
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-2">
            NPR 5,200,000
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            Vs. NPR 4,050,000 previous cycle
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
            <span>Lead Conversion Rate</span>
            <span className="flex items-center text-emerald-500 font-bold text-[11px]">
              <ArrowUpRight className="h-3.5 w-3.5" /> +4.2%
            </span>
          </div>
          <div className="text-2xl font-black text-blue-600 dark:text-blue-400 mt-2">
            34.8%
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            Inbound leads to closed software pods
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
            <span>On-Time Milestone Velocity</span>
            <span className="flex items-center text-emerald-500 font-bold text-[11px]">
              <ArrowUpRight className="h-3.5 w-3.5" /> 96.2%
            </span>
          </div>
          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-2">
            96.2%
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            Across 24 active sprint deliverables
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
            <span>Average Ticket SLA TTR</span>
            <span className="flex items-center text-emerald-500 font-bold text-[11px]">
              <ArrowDownRight className="h-3.5 w-3.5" /> 1.8 hrs
            </span>
          </div>
          <div className="text-2xl font-black text-purple-600 dark:text-purple-400 mt-2">
            1.8 Hours
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            Industry benchmark: 8.5 hours
          </div>
        </div>
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Revenue & Margin Area Chart */}
        <div className="lg:col-span-8 p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Revenue vs Engineering Operating Costs (NPR)
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Monthly revenue trajectory across SaaS subscriptions and fixed delivery milestones.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold">
              <span className="flex items-center gap-1.5 text-blue-600">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-600" /> Revenue
              </span>
              <span className="flex items-center gap-1.5 text-slate-400">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-400" /> OpEx
              </span>
            </div>
          </div>

          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#94A3B8" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#94A3B8" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} tickLine={false} />
                <YAxis
                  stroke="#94a3b8"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(val) => `NPR ${(val / 1000000).toFixed(1)}M`}
                />
                <Tooltip
                  formatter={(value: any) => [`NPR ${Number(value || 0).toLocaleString()}`, '']}
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px',
                    border: 'none',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#2563eb"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorRev)"
                />
                <Area
                  type="monotone"
                  dataKey="expenses"
                  stroke="#94a3b8"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorExp)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lead Source Pie Chart */}
        <div className="lg:col-span-4 p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Customer Acquisition Channels
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Breakdown of top converting channels in Nepal.
            </p>
          </div>

          <div className="h-52 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={leadSourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={75}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {leadSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(val: any) => [`${val}%`, 'Share']}
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px',
                    border: 'none',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
            {leadSourceData.map((src) => (
              <div key={src.name} className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: src.color }} />
                  {src.name}
                </span>
                <span className="font-bold text-slate-900 dark:text-white">{src.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Revenue Breakdown Bar Chart */}
      <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Revenue by Product Vertical (FY 2081/82)
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Comparative gross receipts across proprietary software licenses & hardware peripherals.
            </p>
          </div>
        </div>

        <div className="h-64 w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={productRevenueBreakdown} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
              <XAxis
                type="number"
                stroke="#94a3b8"
                fontSize={11}
                tickFormatter={(val) => `NPR ${(val / 100000).toFixed(0)}L`}
              />
              <YAxis
                type="category"
                dataKey="product"
                stroke="#94a3b8"
                fontSize={11}
                tickLine={false}
                width={150}
              />
              <Tooltip
                formatter={(val: any) => [`NPR ${Number(val || 0).toLocaleString()}`, 'Revenue']}
                contentStyle={{
                  backgroundColor: '#1e293b',
                  borderRadius: '12px',
                  color: '#fff',
                  fontSize: '12px',
                  border: 'none',
                }}
              />
              <Bar dataKey="revenue" fill="#3B82F6" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
