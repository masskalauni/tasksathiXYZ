import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '@/src/data/blog';
import { servicesData } from '@/src/data/services';
import { Container } from '@/src/components/ui/Container';
import { Section } from '@/src/components/ui/Section';
import { Badge } from '@/src/components/ui/Badge';
import { Button } from '@/src/components/ui/Button';
import { SEO } from '@/src/components/seo/SEO';
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Share2,
  Check,
  ArrowRight,
  BookOpen,
  Tag,
  Building2,
} from 'lucide-react';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <div className="pt-36 pb-24 min-h-[60vh] flex items-center justify-center">
        <Container>
          <div className="max-w-md mx-auto text-center space-y-4">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Article Not Found
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The article you requested could not be located or may have been archived.
            </p>
            <Link to="/blog">
              <Button variant="secondary" size="md" leftIcon={<ArrowLeft className="h-4 w-4" />}>
                Back to Blog
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedServices = servicesData.filter((s) =>
    post.relatedServices?.includes(s.id) || post.relatedServices?.includes(s.slug)
  );

  const relatedArticles = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.tags.some(t => post.tags.includes(t))))
    .slice(0, 2);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'TASK SATHI',
      url: 'https://tasksathi.com',
    },
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonicalPath={`/blog/${post.slug}`}
        type="article"
        schema={schema}
      />

      {/* Article Header */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 border-b border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30 dark:from-[#0B0F19] dark:via-[#0E1526] dark:to-[#0B0F19]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to all guides</span>
            </Link>

            <div className="flex items-center gap-2">
              <Badge variant="accent" size="sm">
                {post.category}
              </Badge>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-500">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                  TS
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {post.author.name}
                  </div>
                  <div className="text-[11px] text-slate-500">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.publishedAt}
                </span>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-3.5 w-3.5" />
                      <span>Share</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Content Area */}
      <Section spacing="lg">
        <div className="max-w-3xl mx-auto">
          {/* Main Body */}
          <div className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 space-y-6 leading-relaxed">
            {post.content.split('\n\n').map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith('### ')) {
                return (
                  <h3
                    key={index}
                    className="text-2xl font-bold text-slate-900 dark:text-white pt-4 pb-1 border-b border-slate-100 dark:border-slate-800"
                  >
                    {trimmed.replace('### ', '')}
                  </h3>
                );
              }
              if (trimmed.startsWith('#### ')) {
                return (
                  <h4
                    key={index}
                    className="text-lg font-bold text-slate-900 dark:text-white pt-2"
                  >
                    {trimmed.replace('#### ', '')}
                  </h4>
                );
              }
              if (trimmed.startsWith('```')) {
                const codeContent = trimmed.replace(/```/g, '').trim();
                return (
                  <pre
                    key={index}
                    className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto my-4"
                  >
                    <code>{codeContent}</code>
                  </pre>
                );
              }
              if (trimmed.startsWith('---')) {
                return <hr key={index} className="my-8 border-slate-200 dark:border-slate-800" />;
              }
              return (
                <p key={index} className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="pt-8 mt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 mr-2">
              <Tag className="h-3.5 w-3.5" />
              Tags:
            </span>
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Related Services CTA */}
          {relatedServices.length > 0 && (
            <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-blue-200/80 dark:border-blue-900/40 bg-blue-50/30 dark:bg-blue-950/20 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Related Capabilities
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Looking to implement this in your business?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Explore our engineering services related to this topic:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {relatedServices.map((svc) => (
                  <Link
                    key={svc.id}
                    to={`/services/${svc.slug}`}
                    className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] flex items-center justify-between hover:border-blue-500 transition-colors"
                  >
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {svc.title}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-blue-600 shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* More Articles */}
      {relatedArticles.length > 0 && (
        <Section spacing="lg" background="subtle">
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Related Engineering Guides
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((ra) => (
                <div
                  key={ra.id}
                  className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {ra.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white line-clamp-2">
                      <Link to={`/blog/${ra.slug}`}>{ra.title}</Link>
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                      {ra.excerpt}
                    </p>
                  </div>
                  <Link
                    to={`/blog/${ra.slug}`}
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 inline-flex items-center gap-1 pt-2"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  );
};
