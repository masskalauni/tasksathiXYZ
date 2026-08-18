import React from 'react';
import { Hero } from '@/src/components/marketing/Hero';
import { StatsSection } from '@/src/components/marketing/StatsSection';
import { TrustedByCarousel } from '@/src/components/marketing/TrustedByCarousel';
import { ServicesSection } from '@/src/components/marketing/ServicesSection';
import { IndustriesSection } from '@/src/components/marketing/IndustriesSection';
import { CapabilitiesSection } from '@/src/components/marketing/CapabilitiesSection';
import { ClientSuccessStoriesSection } from '@/src/components/marketing/ClientSuccessStoriesSection';
import { CTASection } from '@/src/components/marketing/CTASection';
import { ServiceItem } from '@/src/types';
import { SEO } from '@/src/components/seo/SEO';
import { Section, SectionHeader } from '@/src/components/ui/Section';
import { caseStudiesData } from '@/src/data/portfolio';
import { blogPosts } from '@/src/data/blog';
import { Link } from 'react-router-dom';
import { Button } from '@/src/components/ui/Button';
import { Badge } from '@/src/components/ui/Badge';
import { ArrowRight, FileText, BookOpen, Sparkles } from 'lucide-react';
import { BabalHostPartnerCard } from '@/src/components/marketing/BabalHostPartnerCard';

export interface HomePageProps {
  onOpenInquiry: (service?: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenInquiry }) => {
  const featuredCaseStudies = caseStudiesData.slice(0, 2);
  const recentArticles = blogPosts.slice(0, 3);

  return (
    <>
      <SEO
        title="Building Intelligent Software for the Future"
        description="TASK SATHI is a Kathmandu-based software engineering partner for custom ERP, POS, web/mobile apps, and AI workflow automation."
        canonicalPath="/"
      />

      {/* Hero Section */}
      <Hero onOpenInquiry={() => onOpenInquiry()} />

      {/* Stats & Trust Section */}
      <StatsSection />

      {/* Trusted By Client Logo Carousel Section */}
      <TrustedByCarousel />

      {/* Services Grid Section */}
      <ServicesSection onSelectService={(service) => onOpenInquiry(service)} />

      {/* Industry Verticals Section */}
      <IndustriesSection onOpenInquiry={() => onOpenInquiry()} />

      {/* Capabilities & Technology Section */}
      <CapabilitiesSection />

      {/* Client Success Stories Infinite Scrolling Carousel */}
      <ClientSuccessStoriesSection onOpenInquiry={() => onOpenInquiry()} />

      {/* Featured Case Studies Spotlight Section */}
      <Section spacing="lg" background="subtle">
        <SectionHeader
          tagline="Proven Results"
          title="Engineered solutions in action."
          description="Detailed architectural breakdowns and measurable business outcomes from our client deployments."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {featuredCaseStudies.map((cs) => (
            <div
              key={cs.id}
              className="p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] shadow-sm flex flex-col justify-between space-y-6 group hover:border-blue-500/60 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="outline" size="sm">
                    {cs.industry}
                  </Badge>
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {cs.impactMetric}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cs.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {cs.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">
                  {cs.technologies.slice(0, 3).join(' • ')}
                </span>
                <Link
                  to={`/case-studies/${cs.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/case-studies">
            <Button variant="outline" size="md" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
              View All Case Studies & Work
            </Button>
          </Link>
        </div>
      </Section>

      {/* Latest Technical Articles & Guides */}
      <Section spacing="lg">
        <SectionHeader
          tagline="Engineering Journal"
          title="Insights on software, tax rules & systems in Nepal."
          description="Technical deep-dives written by our engineering and architecture group in Putalisadak."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {recentArticles.map((art) => (
            <article
              key={art.id}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] shadow-xs flex flex-col justify-between space-y-4 hover:border-blue-500/60 transition-colors group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    {art.category}
                  </span>
                  <span>{art.readTime}</span>
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {art.title}
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 dark:border-slate-800/80">
                <span>{art.publishedAt}</span>
                <Link
                  to={`/blog/${art.slug}`}
                  className="font-bold text-blue-600 dark:text-blue-400 inline-flex items-center gap-1"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/blog">
            <Button variant="outline" size="md" rightIcon={<BookOpen className="h-3.5 w-3.5" />}>
              Explore Engineering Blog
            </Button>
          </Link>
        </div>
      </Section>

      {/* Cloud & Web Hosting Partner Banner */}
      <Section spacing="md">
        <div className="max-w-6xl mx-auto">
          <BabalHostPartnerCard variant="banner" />
        </div>
      </Section>

      {/* Final Call to Action Section */}
      <CTASection onOpenInquiry={() => onOpenInquiry()} />
    </>
  );
};
