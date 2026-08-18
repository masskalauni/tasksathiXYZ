import React, { useState } from 'react';
import { productsData } from '@/src/data/products';
import { ProductItem } from '@/src/types';
import { Button } from '@/src/components/ui/Button';
import {
  Sparkles,
  ExternalLink,
  Search,
  CheckCircle2,
  Package,
  Layers,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdminProductsPage: React.FC = () => {
  const [products, setProducts] = useState<ProductItem[]>(productsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(productsData[0] || null);

  const filteredProducts = products.filter((p) => {
    return (
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Proprietary SaaS & Hardware Products
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Manage TaskSathi software suites (SathiPOS, Cloud ERP, Clinic EMR, School LMS, IoT Trackers).
          </p>
        </div>
        <Link to="/products" target="_blank">
          <Button variant="outline" size="sm">
            <ExternalLink className="h-4 w-4 mr-1.5" /> View Public Store
          </Button>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search software products and hardware bundles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white"
          />
        </div>
        <span className="text-xs font-bold text-slate-500 hidden sm:inline">
          {filteredProducts.length} Product Editions
        </span>
      </div>

      {/* Grid: Products List + Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Product Cards */}
        <div className="lg:col-span-6 space-y-3">
          {filteredProducts.map((product) => {
            const isSelected = selectedProduct?.id === product.id;
            return (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer bg-white dark:bg-[#111827] ${
                  isSelected
                    ? 'border-blue-600 shadow-md ring-1 ring-blue-600/30'
                    : 'border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                      {product.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1.5">
                      {product.name}
                    </h3>
                  </div>
                  <span className="text-xs font-extrabold text-blue-600 dark:text-blue-400">
                    {product.pricingStarting}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mt-2 leading-relaxed">
                  {product.tagline}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800">
                  {product.highlights.slice(0, 3).map((h, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Detailed Product Inspector */}
        <div className="lg:col-span-6 sticky top-24 space-y-4">
          {selectedProduct ? (
            <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                    {selectedProduct.name}
                  </h2>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                    {selectedProduct.pricingStarting}
                  </div>
                </div>
                <Link to={`/products/${selectedProduct.slug}`} target="_blank">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-3.5 w-3.5 mr-1" /> View Live
                  </Button>
                </Link>
              </div>

              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Product Overview
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Feature Highlights */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Key Enterprise Modules
                </h4>
                <div className="space-y-1.5 text-xs">
                  {selectedProduct.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800 flex items-center gap-2"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Best Suited For
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProduct.targetAudience.map((aud, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                    >
                      {aud}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-slate-400 text-xs">
              Select a product from the left to view specs.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
