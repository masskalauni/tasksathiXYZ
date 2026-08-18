import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/src/data/blog';
import { BlogPost } from '@/src/types';
import { Container } from '@/src/components/ui/Container';
import { Section, SectionHeader } from '@/src/components/ui/Section';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { SEO } from '@/src/components/seo/SEO';
import { PageHero } from '@/src/components/layout/PageHero';
import {
  BookOpen,
  ArrowRight,
  Search,
  Tag,
  Clock,
  User,
  Calendar,
  Sparkles,
  ShieldCheck,
  Code2,
} from 'lucide-react';

export const BlogIndexPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Nepal Business',
    'AI',
    'Software',
    'Web Development',
    'Digital Transformation',
    'Business',
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <>
      <SEO
        title="Engineering Journal & Business Technology Guides"
        description="Practical software architecture, tax compliance, offline systems, and AI automation guides for growing businesses in Nepal."
        canonicalPath="/blog"
      />

      {/* Hero Header */}
      <PageHero
        badge="Engineering Journal & Insights"
        badgeIcon={BookOpen}
        title="Software architecture & digital strategy for Nepal."
        highlightText="digital strategy"
        description="Direct insights from our engineering, systems architecture, and tax integration teams in Putalisadak, Kathmandu."
        breadcrumbs={[{ label: 'Blog' }]}
        highlights={[
          { icon: Code2, label: 'Technical Implementation Guides' },
          { icon: ShieldCheck, label: 'Nepal IRD & Tax Playbooks' },
          { icon: Sparkles, label: 'AI & Automation in Practice' },
        ]}
      />

      {/* Featured Editorial Post */}
      {featuredPost && (
        <Section spacing="md">
          <div className="p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] shadow-sm flex flex-col lg:flex-row items-start justify-between gap-8 group">
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-2.5">
                <Badge variant="accent" size="sm">
                  Featured Guide
                </Badge>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                  {featuredPost.category}
                </span>
                <span className="text-slate-400 text-xs">•</span>
                <span className="text-xs text-slate-500">{featuredPost.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {featuredPost.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-500">
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  By {featuredPost.author.name}
                </span>
                <span>•</span>
                <span>{featuredPost.publishedAt}</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col justify-end">
              <Link to={`/blog/${featuredPost.slug}`}>
                <Button variant="secondary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Read Full Article
                </Button>
              </Link>
            </div>
          </div>
        </Section>
      )}

      {/* Filter and Search Bar */}
      <Section spacing="sm">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles & topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </Section>

      {/* Article Grid */}
      <Section spacing="lg">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
              No matching articles found
            </h4>
            <p className="text-xs text-slate-500">
              Try adjusting your category filter or search query.
            </p>
            <Button variant="outline" size="sm" onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}>
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] shadow-xs flex flex-col justify-between space-y-4 hover:border-blue-500/60 transition-colors group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-[10px] font-mono text-slate-600 dark:text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                  <span>{post.publishedAt}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="font-bold text-blue-600 dark:text-blue-400 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </Section>
    </>
  );
};
