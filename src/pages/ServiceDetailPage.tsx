import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '@/src/data/services';
import { ServicePageTemplate } from '@/src/components/templates/ServicePageTemplate';
import { Container } from '@/src/components/ui/Container';
import { Button } from '@/src/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-36 pb-24 min-h-[60vh] flex items-center justify-center">
        <Container>
          <div className="max-w-md mx-auto text-center space-y-4">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Service Not Found
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The service category you requested does not exist or may have been renamed.
            </p>
            <Link to="/services">
              <Button variant="secondary" size="md" leftIcon={<ArrowLeft className="h-4 w-4" />}>
                View All Services
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return <ServicePageTemplate service={service} />;
};
