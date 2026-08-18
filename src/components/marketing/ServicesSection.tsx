import React, { useState } from 'react';
import { servicesData, serviceCategoryLabels } from '@/src/data/services';
import { ServiceItem, ServiceCategory } from '@/src/types';
import { Section, SectionHeader } from '@/src/components/ui/Section';
import { ServiceCard } from './ServiceCard';
import { Badge } from '@/src/components/ui/Badge';
import { Sparkles } from 'lucide-react';

export interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices =
    selectedCategory === 'all'
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  const categories = ['all', 'software', 'business', 'digital', 'ai'];

  return (
    <Section id="services" spacing="lg" background="subtle">
      <SectionHeader
        badge={
          <Badge variant="brand" size="md">
            <Sparkles className="h-3 w-3 text-blue-600" />
            <span>Full-Spectrum Capabilities</span>
          </Badge>
        }
        tagline="Our Solutions"
        nepaliTagline="तपाईंको व्यवसायलाई आवश्यक पर्ने सम्पूर्ण डिजिटल सेवाहरू"
        title="Everything you need to build, automate and grow."
        description="From enterprise resource planning and point-of-sale systems to AI automation and mobile applications, we engineer secure and reliable software for Nepali and international businesses."
      />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
              selectedCategory === cat
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {serviceCategoryLabels[cat] || cat}
          </button>
        ))}
      </div>

      {/* Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onSelectService={onSelectService}
          />
        ))}
      </div>
    </Section>
  );
};
