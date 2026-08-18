import { NavItem, StatItem } from '@/src/types';

export const navigationItems: NavItem[] = [
  {
    title: 'Solutions',
    href: '/services',
    children: [
      {
        title: 'All Services',
        href: '/services',
        description: 'Explore our 16 core technology engineering and business services',
        iconName: 'Sparkles',
      },
      {
        title: 'Software Products',
        href: '/products',
        description: 'Pre-engineered business software suites ready for rapid deployment',
        iconName: 'Box',
      },
      {
        title: 'Industry Verticals',
        href: '/industries',
        description: 'Domain-tailored technology built around specific industry dynamics',
        iconName: 'Building2',
      },
      {
        title: 'Custom Software Development',
        href: '/services/custom-software-development',
        description: 'Bespoke web and cloud architectures for complex operational workflows',
        iconName: 'Code2',
      },
      {
        title: 'Enterprise ERP Systems',
        href: '/services/erp-systems',
        description: 'Integrated finance, inventory, and procurement control center',
        iconName: 'Layers',
      },
      {
        title: 'Point of Sale (POS) Systems',
        href: '/services/pos-systems',
        description: 'Sub-second counter checkout with offline tolerance and thermal printing',
        iconName: 'Receipt',
      },
      {
        title: 'AI & Workflow Automation',
        href: '/services/ai-automation',
        description: 'Intelligent document extraction and bilingual business assistants',
        iconName: 'Bot',
      },
      {
        title: 'Modern Website Development',
        href: '/services/website-development',
        description: 'Sub-second page speeds with high-converting information architecture',
        iconName: 'Globe',
      },
    ],
  },
  {
    title: 'Products',
    href: '/products',
  },
  {
    title: 'Industries',
    href: '/industries',
  },
  {
    title: 'Work',
    href: '/portfolio',
    children: [
      {
        title: 'Portfolio Directory',
        href: '/portfolio',
        description: 'Explore our showcase of engineered systems and digital platforms',
        iconName: 'Briefcase',
      },
      {
        title: 'In-Depth Case Studies',
        href: '/case-studies',
        description: 'Detailed architectural breakdowns, challenges, and measurable results',
        iconName: 'FileText',
      },
    ],
  },
  {
    title: 'Pricing',
    href: '/pricing',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Company',
    href: '/about',
    children: [
      {
        title: 'About TASK SATHI',
        href: '/about',
        description: 'Our mission, engineering culture, and technology philosophy in Putalisadak',
        iconName: 'Building2',
      },
      {
        title: 'Careers',
        href: '/careers',
        description: 'Join our technical engineering and design team in Kathmandu',
        iconName: 'Users',
      },
      {
        title: 'Contact Us',
        href: '/contact',
        description: 'Direct telephone line, office location in Putalisadak, and message desk',
        iconName: 'Phone',
      },
    ],
  },
];

export const heroStats: StatItem[] = [
  {
    id: 'stat-projects',
    value: '50+',
    label: 'Systems Engineered',
    nepaliLabel: 'सफल परियोजनाहरू',
    description: 'Custom web, mobile & enterprise software architectures delivered across Nepal',
  },
  {
    id: 'stat-businesses',
    value: '20+',
    label: 'Commercial Partners',
    nepaliLabel: 'व्यवसायिक साझेदारहरू',
    description: 'Hospitals, schools, retailers, and enterprises running on our platforms',
  },
  {
    id: 'stat-solutions',
    value: '10+',
    label: 'Domain Solutions',
    nepaliLabel: 'विशिष्ट समाधानहरू',
    description: 'Modular systems from offline POS to IRD-compliant ERP engines',
  },
  {
    id: 'stat-support',
    value: '24/7',
    label: 'Mission-Critical SLA',
    nepaliLabel: 'निरन्तर प्राविधिक सेवा',
    description: 'Dedicated Kathmandu-based technical support and infrastructure monitoring',
  },
];

export const navigationData = navigationItems;
export const statsData = heroStats;
