import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '@/src/data/products';
import { ProductPageTemplate } from '@/src/components/templates/ProductPageTemplate';
import { Container } from '@/src/components/ui/Container';
import { Button } from '@/src/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="pt-36 pb-24 min-h-[60vh] flex items-center justify-center">
        <Container>
          <div className="max-w-md mx-auto text-center space-y-4">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Product Not Found
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The software product you requested does not exist or may have been updated.
            </p>
            <Link to="/products">
              <Button variant="secondary" size="md" leftIcon={<ArrowLeft className="h-4 w-4" />}>
                View All Products
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return <ProductPageTemplate product={product} />;
};
