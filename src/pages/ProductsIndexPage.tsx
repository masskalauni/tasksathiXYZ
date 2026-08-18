import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '@/src/data/products';
import { Container } from '@/src/components/ui/Container';
import { Section, SectionHeader } from '@/src/components/ui/Section';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { SEO } from '@/src/components/seo/SEO';
import { PageHero } from '@/src/components/layout/PageHero';
import { ProductsIndexSkeleton } from '@/src/components/ui/Skeletons';
import {
  Layers,
  Users,
  Receipt,
  FileSpreadsheet,
  Boxes,
  Stethoscope,
  GraduationCap,
  Building2,
  Utensils,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Activity,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const ProductsIndexPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
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
    'Operations & Retail',
    'Vertical Solutions',
    'Business Platforms',
  ];

  const getIcon = (name: string) => {
    const props = { className: 'h-6 w-6 text-blue-600 dark:text-blue-400' };
    switch (name) {
      case 'Layers': return <Layers {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Receipt': return <Receipt {...props} />;
      case 'FileSpreadsheet': return <FileSpreadsheet {...props} />;
      case 'Boxes': return <Boxes {...props} />;
      case 'Stethoscope': return <Stethoscope {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'Building2': return <Building2 {...props} />;
      case 'Utensils': return <Utensils {...props} />;
      default: return <Layers {...props} />;
    }
  };

  const filteredProducts = productsData.filter((prod) => {
    return selectedCategory === 'All' || prod.category === selectedCategory;
  });

  if (isLoading) {
    return (
      <>
        <SEO
          title="Software Products"
          description="Explore TASK SATHI's ready-to-deploy software products: Sathi ERP, Sathi POS, Sathi Med, Sathi Edu, Sathi Resto, and Sathi CRM."
          canonicalPath="/products"
        />
        <ProductsIndexSkeleton />
      </>
    );
  }

  return (
    <>
      <SEO
        title="Software Products"
        description="Explore TASK SATHI's ready-to-deploy software products: Sathi ERP, Sathi POS, Sathi Med, Sathi Edu, Sathi Resto, and Sathi CRM."
        canonicalPath="/products"
      />

      {/* Hero */}
      <PageHero
        badge="Pre-Engineered Software Platforms"
        badgeIcon={Sparkles}
        title="Specialized Software Suites Built for Rapid Deployment."
        highlightText="Rapid Deployment"
        description="Pre-built business architectures customized for your organization's exact workflows. Faster time to launch, full data sovereignty, and zero perpetual per-seat licenses."
        breadcrumbs={[{ label: 'Products' }]}
        highlights={[
          { icon: ShieldCheck, label: 'Nepal IRD Tax Integrated' },
          { icon: Zap, label: 'Instant Cloud or On-Premise' },
          { icon: Layers, label: 'Full Source Code Ownership' },
        ]}
      />

      {/* Category Filter */}
      <Section spacing="sm" background="subtle">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Section>

      {/* Product Cards */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] p-6 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center">
                    {getIcon(prod.iconName)}
                  </div>
                  <Badge variant="outline" size="sm">
                    {prod.category}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {prod.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                    {prod.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {prod.description}
                </p>

                {/* Problems Solved Badges */}
                <div className="space-y-1 pt-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Solves:
                  </div>
                  <div className="space-y-1">
                    {prod.problemsSolved.slice(0, 2).map((p, i) => (
                      <div key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="truncate">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6 flex items-center gap-3">
                <Link to={`/products/${prod.slug}`} className="flex-1">
                  <Button variant="secondary" size="sm" fullWidth rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
                    View Product
                  </Button>
                </Link>
                <Link to="/request-quote">
                  <Button variant="outline" size="sm">
                    Quote
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};
