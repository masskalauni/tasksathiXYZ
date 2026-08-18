import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { caseStudiesData } from '@/src/data/portfolio';
import { CaseStudyPageTemplate } from '@/src/components/templates/CaseStudyPageTemplate';
import { Container } from '@/src/components/ui/Container';
import { Button } from '@/src/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = caseStudiesData.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return (
      <div className="pt-36 pb-24 min-h-[60vh] flex items-center justify-center">
        <Container>
          <div className="max-w-md mx-auto text-center space-y-4">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Case Study Not Found
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The case study breakdown you requested does not exist or may have been moved.
            </p>
            <Link to="/case-studies">
              <Button variant="secondary" size="md" leftIcon={<ArrowLeft className="h-4 w-4" />}>
                View All Case Studies
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return <CaseStudyPageTemplate caseStudy={caseStudy} />;
};
