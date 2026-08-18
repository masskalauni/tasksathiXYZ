import React, { useState } from 'react';
import { blogPosts } from '@/src/data/blog';
import { BlogPost } from '@/src/types';
import { Button } from '@/src/components/ui/Button';
import {
  FileText,
  Plus,
  Search,
  ExternalLink,
  Calendar,
  User,
  Clock,
  Tag,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdminBlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(blogPosts[0] || null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Post Form
  const [newPost, setNewPost] = useState({
    title: '',
    category: 'Engineering & Architecture',
    excerpt: '',
    authorName: 'Sajan Shrestha',
    readTime: '6 min read',
  });

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title) return;
    const post: BlogPost = {
      id: `post-${Date.now()}`,
      slug: newPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title: newPost.title,
      excerpt: newPost.excerpt,
      content: `## Introduction\n\n${newPost.excerpt}\n\n## Deep Dive\n\nEngineering details on system implementation and compliance in Nepal.`,
      category: newPost.category,
      author: {
        name: newPost.authorName,
        role: 'Author',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      },
      publishedDate: new Date().toISOString().split('T')[0],
      readTime: newPost.readTime,
      tags: ['Engineering', 'Architecture', 'Nepal Tech'],
      featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    };
    setPosts([post, ...posts]);
    setSelectedPost(post);
    setIsAddModalOpen(false);
    setNewPost({
      title: '',
      category: 'Engineering & Architecture',
      excerpt: '',
      authorName: 'Sajan Shrestha',
      readTime: '6 min read',
    });
  };

  const filteredPosts = posts.filter((p) => {
    return (
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.author.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Editorial & Technical Blog Desk
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Publish engineering whitepapers, IRD compliance deep dives, and system architecture articles.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/blog" target="_blank">
            <Button variant="outline" size="sm">
              <ExternalLink className="h-4 w-4 mr-1.5" /> View Public Blog
            </Button>
          </Link>
          <Button variant="primary" size="sm" onClick={() => setIsAddModalOpen(true)}>
            <Plus className="h-4 w-4 mr-1.5" /> New Article
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles by title, topic, author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white"
          />
        </div>
        <span className="text-xs font-bold text-slate-500 hidden sm:inline">
          {filteredPosts.length} Articles Published
        </span>
      </div>

      {/* Grid: Articles List + Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Articles List */}
        <div className="lg:col-span-6 space-y-3">
          {filteredPosts.map((post) => {
            const isSelected = selectedPost?.id === post.id;
            return (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer bg-white dark:bg-[#111827] ${
                  isSelected
                    ? 'border-blue-600 shadow-md ring-1 ring-blue-600/30'
                    : 'border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {post.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1.5">
                      {post.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mt-2 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400 mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800">
                  <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                    <User className="h-3 w-3 text-blue-600" />
                    {post.author.name}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-1 ml-auto">
                    <Calendar className="h-3 w-3" />
                    {post.publishedDate}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Detailed Post Inspector */}
        <div className="lg:col-span-6 sticky top-24 space-y-4">
          {selectedPost ? (
            <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                    {selectedPost.title}
                  </h2>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-0.5">
                    By {selectedPost.author.name} • {selectedPost.publishedDate}
                  </div>
                </div>
                <Link to={`/blog/${selectedPost.slug}`} target="_blank">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-3.5 w-3.5 mr-1" /> View Live
                  </Button>
                </Link>
              </div>

              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Article Summary / Excerpt
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedPost.excerpt}
                </p>
              </div>

              {/* Tags */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Topic Tags
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-400 text-xs">
              Select an article to view details.
            </div>
          )}
        </div>
      </div>

      {/* Add Post Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Draft Technical Article
              </h2>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Article Title *
                </label>
                <input
                  type="text"
                  required
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  placeholder="e.g. Scaling Multi-Branch IRD CBMS Billing in Distributed Networks"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Category
                  </label>
                  <select
                    value={newPost.category}
                    onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="Engineering & Architecture">Engineering & Architecture</option>
                    <option value="POS & Retail Technology">POS & Retail Technology</option>
                    <option value="Enterprise Compliance & IRD">Enterprise Compliance & IRD</option>
                    <option value="AI & Automation">AI & Automation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Author
                  </label>
                  <input
                    type="text"
                    value={newPost.authorName}
                    onChange={(e) => setNewPost({ ...newPost, authorName: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Article Abstract / Excerpt *
                </label>
                <textarea
                  rows={3}
                  required
                  value={newPost.excerpt}
                  onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                  placeholder="Key takeaway, architectural summary..."
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 dark:text-white focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <Button type="button" variant="outline" size="sm" onClick={() => setIsAddModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="sm">
                  Publish Article
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
