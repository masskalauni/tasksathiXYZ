import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { industriesData } from '@/src/data/industries';
import { IndustryPageTemplate } from '@/src/components/templates/IndustryPageTemplate';
import { Container } from '@/src/components/ui/Container';
import { Button } from '@/src/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export const IndustryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = industriesData.find((ind) => ind.slug === slug);

  if (!industry) {
    return (
      <div className="pt-36 pb-24 min-h-[60vh] flex items-center justify-center">
        <Container>
          <div className="max-w-md mx-auto text-center space-y-4">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Industry Vertical Not Found
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The industry sector you requested does not exist or may have been renamed.
            </p>
            <Link to="/industries">
              <Button variant="secondary" size="md" leftIcon={<ArrowLeft className="h-4 w-4" />}>
                View All Industries
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return <IndustryPageTemplate industry={industry} />;
};
