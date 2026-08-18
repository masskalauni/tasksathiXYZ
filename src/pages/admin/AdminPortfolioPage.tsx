import React, { useState } from 'react';
import { portfolioData } from '@/src/data/portfolio';
import { PortfolioItem } from '@/src/types';
import { Button } from '@/src/components/ui/Button';
import {
  Briefcase,
  ExternalLink,
  Search,
  CheckCircle2,
  TrendingUp,
  Award,
  Layers,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdminPortfolioPage: React.FC = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(portfolioData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCase, setSelectedCase] = useState<PortfolioItem | null>(portfolioData[0] || null);

  const filteredPortfolio = portfolio.filter((p) => {
    return (
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Portfolio & Case Studies Manager
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Showcase delivered client projects, enterprise metrics, architecture case studies, and impact.
          </p>
        </div>
        <Link to="/portfolio" target="_blank">
          <Button variant="outline" size="sm">
            <ExternalLink className="h-4 w-4 mr-1.5" /> View Public Showcase
          </Button>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search case studies, client names, technologies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white"
          />
        </div>
        <span className="text-xs font-bold text-slate-500 hidden sm:inline">
          {filteredPortfolio.length} Case Studies Published
        </span>
      </div>

      {/* Grid: Case Studies + Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Case Studies List */}
        <div className="lg:col-span-6 space-y-3">
          {filteredPortfolio.map((item) => {
            const isSelected = selectedCase?.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedCase(item)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer bg-white dark:bg-[#111827] ${
                  isSelected
                    ? 'border-blue-600 shadow-md ring-1 ring-blue-600/30'
                    : 'border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1.5">
                      {item.title}
                    </h3>
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                      Client: {item.client} • {item.year}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mt-2 leading-relaxed">
                  {item.challenge}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800">
                  {item.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Detailed Case Inspector */}
        <div className="lg:col-span-6 sticky top-24 space-y-4">
          {selectedCase ? (
            <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                    {selectedCase.category}
                  </span>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                    {selectedCase.title}
                  </h2>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-0.5">
                    Client: {selectedCase.client} ({selectedCase.year})
                  </div>
                </div>
                <Link to={`/portfolio/${selectedCase.slug}`} target="_blank">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-3.5 w-3.5 mr-1" /> View Live
                  </Button>
                </Link>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Business Challenge
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedCase.challenge}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Delivered Engineering Solution
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedCase.solution}
                  </p>
                </div>
              </div>

              {/* Measured Impact Results */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Measured Business Results
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {selectedCase.results.map((res, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-center"
                    >
                      <div className="text-sm font-extrabold text-emerald-700 dark:text-emerald-300">
                        {res.metric}
                      </div>
                      <div className="text-[11px] text-emerald-800 dark:text-emerald-400 mt-0.5">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Technologies Deployed
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCase.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-400 text-xs">
              Select a case study from the left to view details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
