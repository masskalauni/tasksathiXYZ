import React, { useState, useEffect } from 'react';
import { adminService } from '@/src/services/adminService';
import { servicesData } from '@/src/data/services';
import { ServiceItem } from '@/src/types';
import { Button } from '@/src/components/ui/Button';
import {
  Layers,
  Plus,
  Search,
  CheckCircle2,
  Edit,
  ExternalLink,
  ChevronRight,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdminServicesPage: React.FC = () => {
  const [services, setServices] = useState<ServiceItem[]>(servicesData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(servicesData[0] || null);

  const filteredServices = services.filter((s) => {
    return (
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Services & Solutions Catalog
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Manage public engineering capabilities, tech stack offerings, pricing packages, and SLAs.
          </p>
        </div>
        <Link to="/services" target="_blank">
          <Button variant="outline" size="sm">
            <ExternalLink className="h-4 w-4 mr-1.5" /> View Public Directory
          </Button>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search services, tech stacks, or features..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white"
          />
        </div>
        <span className="text-xs font-bold text-slate-500 hidden sm:inline">
          {filteredServices.length} Published Offerings
        </span>
      </div>

      {/* 2-Column Split: Services List + Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Services Grid */}
        <div className="lg:col-span-6 space-y-3">
          {filteredServices.map((service) => {
            const isSelected = selectedService?.id === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer bg-white dark:bg-[#111827] ${
                  isSelected
                    ? 'border-blue-600 shadow-md ring-1 ring-blue-600/30'
                    : 'border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {service.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1.5">
                      {service.title}
                    </h3>
                  </div>
                  <span className="text-xs font-extrabold text-blue-600 dark:text-blue-400">
                    {service.startingPrice}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mt-2 leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800">
                  {service.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 4 && (
                    <span className="text-[10px] text-slate-400 font-semibold">
                      +{service.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Service Inspector & Editor */}
        <div className="lg:col-span-6 sticky top-24 space-y-4">
          {selectedService ? (
            <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                    {selectedService.category}
                  </span>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                    {selectedService.title}
                  </h2>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                    Starting from {selectedService.startingPrice}
                  </div>
                </div>
                <Link to={`/services/${selectedService.slug}`} target="_blank">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-3.5 w-3.5 mr-1" /> View Live
                  </Button>
                </Link>
              </div>

              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Comprehensive Overview
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedService.fullDescription}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Engineering Deliverables & Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedService.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800 flex items-center gap-2"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Active Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedService.technologies.map((t) => (
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
              Select a service from the left to view details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
