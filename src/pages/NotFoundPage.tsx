import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/src/components/ui/Container';
import { Button } from '@/src/components/ui/Button';
import { SEO } from '@/src/components/seo/SEO';
import { Home, ArrowLeft, Search, Layers, Box, Phone } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="404 — Page Not Found"
        description="The page you are looking for does not exist on TASK SATHI."
        canonicalPath="/404"
      />

      <div className="pt-36 pb-24 min-h-[75vh] flex items-center justify-center">
        <Container>
          <div className="max-w-xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-3xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 font-mono text-3xl font-extrabold mx-auto shadow-xs">
              404
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Page Not Found
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto">
                The URL you followed may be incorrect, or the page may have been restructured during recent updates.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <Link to="/">
                <Button variant="secondary" size="md" leftIcon={<Home className="h-4 w-4" />}>
                  Return to Home
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="md" leftIcon={<Layers className="h-4 w-4" />}>
                  Explore Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" size="md" leftIcon={<Phone className="h-4 w-4" />}>
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
