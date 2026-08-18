import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '@/src/data/services';
import { Container } from '@/src/components/ui/Container';
import { Section, SectionHeader } from '@/src/components/ui/Section';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { SEO } from '@/src/components/seo/SEO';
import { PageHero } from '@/src/components/layout/PageHero';
import { SoftwareTierComparison } from '@/src/components/marketing/SoftwareTierComparison';
import { ServicesIndexSkeleton } from '@/src/components/ui/Skeletons';
import {
  Code2,
  Layers,
  Users,
  Receipt,
  FileSpreadsheet,
  Boxes,
  Stethoscope,
  GraduationCap,
  Building2,
  Utensils,
  Globe,
  Smartphone,
  Bot,
  Cloud,
  Compass,
  TrendingUp,
  Search,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const ServicesIndexPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Initial fetch/mount state for perceived performance & smooth hydration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 280);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    'All',
    'Core Enterprise Systems',
    'Industry-Specific Platforms',
    'Digital Channels & Apps',
    'Automation & Cloud',
  ];

  const getIcon = (name: string) => {
    const props = { className: 'h-6 w-6 text-blue-600 dark:text-blue-400' };
    switch (name) {
      case 'Code2': return <Code2 {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Receipt': return <Receipt {...props} />;
      case 'FileSpreadsheet': return <FileSpreadsheet {...props} />;
      case 'Boxes': return <Boxes {...props} />;
      case 'Stethoscope': return <Stethoscope {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'Building2': return <Building2 {...props} />;
      case 'Utensils': return <Utensils {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'Bot': return <Bot {...props} />;
      case 'Cloud': return <Cloud {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      default: return <Code2 {...props} />;
    }
  };

  const filteredServices = servicesData.filter((svc) => {
    const matchesCat =
      selectedCategory === 'All' || svc.categoryLabel === selectedCategory;
    const matchesSearch =
      svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  if (isLoading) {
    return (
      <>
        <SEO
          title="Services & Technology Capabilities"
          description="Explore TASK SATHI's 16 core technology engineering services: Custom software, ERP, POS, Hospital systems, Web, Mobile apps, and AI automation."
          canonicalPath="/services"
        />
        <ServicesIndexSkeleton />
      </>
    );
  }

  return (
    <>
      <SEO
        title="Services & Technology Capabilities"
        description="Explore TASK SATHI's 16 core technology engineering services: Custom software, ERP, POS, Hospital systems, Web, Mobile apps, and AI automation."
        canonicalPath="/services"
      />

      {/* Hero */}
      <PageHero
        badge="Full-Stack Engineering & Consulting"
        badgeIcon={Sparkles}
        title="Software & Technology Services Engineered to Perform."
        highlightText="Engineered to Perform"
        description="We help businesses replace fragile spreadsheets and disconnected legacy tools with robust, modern software tailored to their exact workflows and Nepal tax requirements."
        breadcrumbs={[{ label: 'Services' }]}
        highlights={[
          { icon: Code2, label: '16 Specialized Engineering Domains' },
          { icon: ShieldCheck, label: 'Bilingual (Nepali/English) UX' },
          { icon: Zap, label: 'High Availability & Offline Sync' },
        ]}
        actions={
          <>
            <Link to="/request-quote">
              <Button variant="primary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Request Scoping Estimate
              </Button>
            </Link>
            <a href="#tiers-comparison">
              <Button variant="outline" size="md">
                Compare Software Tiers
              </Button>
            </a>
          </>
        }
      />

      {/* Filter and Search Bar */}
      <Section spacing="sm" background="subtle">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="h-4 w-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((svc) => (
            <Link
              key={svc.id}
              to={`/services/${svc.slug}`}
              className="group p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] hover:border-blue-500/80 dark:hover:border-blue-500/80 transition-all hover:shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(svc.iconName)}
                  </div>
                  {svc.badge && (
                    <Badge variant="accent" size="sm">
                      {svc.badge}
                    </Badge>
                  )}
                </div>

                <div>
                  <span className="text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {svc.categoryLabel}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors mt-0.5">
                    {svc.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {svc.shortDescription}
                </p>

                <div className="space-y-1.5 pt-2">
                  {svc.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 mt-6 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                <span>View Full Architecture</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 space-y-3">
            <p className="text-base text-slate-500">
              No services matched your search "{searchQuery}".
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </Section>

      {/* Software Tier Comparison Matrix */}
      <Section spacing="xl" background="subtle">
        <SoftwareTierComparison id="tiers-comparison" />
      </Section>
    </>
  );
};
