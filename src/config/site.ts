import { SiteConfig } from '@/src/types';

export const BABAL_HOST_AFFILIATE_URL = 'https://clients.babal.host/aff.php?aff=1490';

export const siteConfig: SiteConfig = {
  name: 'TaskSathi',
  legalName: 'TaskSathi Digital Solutions Pvt. Ltd.',
  tagline: 'Your Partner For Business Success',
  nepaliTagline: 'वेबसाइट | सफ्टवेयर | डिजिटल मार्केटिङ',
  positioning:
    'TaskSathi is your trusted technology partner helping businesses grow and digitally transform through high-performance software, modern websites, custom ERP/CRM, and digital marketing.',
  phone: '9868509934',
  email: 'contact@tasksathi.com',
  location: {
    address: 'Putalisadak',
    area: 'Putalisadak Commercial Hub',
    city: 'Kathmandu',
    country: 'Nepal',
    formatted: 'Putalisadak, Kathmandu, Nepal',
  },
  contact: {
    phone: {
      display: '+977 9868509934',
      raw: '+9779868509934',
      href: 'tel:+9779868509934',
    },
    email: {
      primary: 'contact@tasksathi.com',
      support: 'support@tasksathi.com',
      href: 'mailto:contact@tasksathi.com',
    },
    address: {
      line1: 'Putalisadak Commercial Hub, Ward 28',
      area: 'Putalisadak',
      city: 'Kathmandu',
      country: 'Nepal',
      formatted: 'Putalisadak, Kathmandu, Nepal',
    },
    hours: {
      weekdays: 'Sunday – Friday: 9:00 AM – 6:00 PM NPT',
      weekend: 'Saturday: Closed',
      support: '24/7 Enterprise SLA Monitoring Available',
    },
  },
  social: {
    facebook: 'https://facebook.com/tasksathi',
    linkedin: 'https://linkedin.com/company/tasksathi',
    github: 'https://github.com/tasksathi',
  },
  partners: {
    babalHost: {
      name: 'Babal.Host',
      affiliateUrl: 'https://clients.babal.host/aff.php?aff=1490',
      tagline: 'High-Speed NVMe Cloud & Domain Hosting in Nepal',
      description:
        'Tier-3 datacenter hosting, NVMe SSD storage, cPanel, 99.9% uptime SLA, and local payment integration with eSewa, Khalti, and Fonepay.',
    },
  },
  seo: {
    defaultTitle: 'TASK SATHI — Building Intelligent Software for the Future',
    defaultDescription:
      'TASK SATHI helps businesses build software, automate operations and digitally transform through modern technology solutions.',
    keywords: [
      'TASK SATHI',
      'Software Development Nepal',
      'ERP Solutions Kathmandu',
      'Custom CRM Nepal',
      'POS Software Nepal',
      'Hospital Management System Nepal',
      'School Management Software Nepal',
      'AI Automation Nepal',
      'Putalisadak Tech Company',
    ],
  },
};
