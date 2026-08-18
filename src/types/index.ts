export type ServiceCategory = 'software' | 'business' | 'digital' | 'ai';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  category: ServiceCategory;
  categoryLabel: string;
  features: string[];
  problem: string;
  solution: string;
  benefits: { title: string; description: string }[];
  processSteps?: { step: number; title: string; description: string }[];
  technologies: string[];
  faqs: FAQItem[];
  badge?: string;
  popular?: boolean;
  relatedProducts?: string[]; // product slugs
  relatedIndustries?: string[]; // industry slugs
}

export interface ProductMockupData {
  title: string;
  type: 'erp' | 'pos' | 'crm' | 'hms' | 'school' | 'ai' | 'analytics' | 'hr';
  metrics: { label: string; value: string; change?: string; isPositive?: boolean }[];
  recentActivities: { id: string; user: string; action: string; time: string; status?: string }[];
  tableHeaders: string[];
  tableRows: (string | number)[][];
}

export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  iconName: string;
  badge?: string;
  status: 'Available on Request' | 'Enterprise Ready' | 'Coming Soon' | 'In Development';
  features: string[];
  problemsSolved: string[];
  workflowSteps: { step: number; title: string; description: string }[];
  benefits: { title: string; description: string }[];
  mockupData: ProductMockupData;
  pricingPlaceholder: {
    model: string;
    note: string;
    featuresIncluded: string[];
  };
  faqs: FAQItem[];
  relatedServices?: string[];
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  challenges: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  workflow: { step: number; title: string; description: string }[];
  benefits: { title: string; description: string }[];
  exampleUseCases: { title: string; clientType: string; outcome: string }[];
  keySolutions: string[];
  metrics?: { label: string; value: string };
  faqs: FAQItem[];
  relatedServices: string[];
  relatedProducts: string[];
  featured?: boolean;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  clientType: string;
  industry: string;
  category: 'Web' | 'Software' | 'Mobile' | 'Automation' | 'UI/UX';
  summary: string;
  challenge: string;
  discovery: string;
  strategy: string;
  designApproach: string;
  developmentDetails: string;
  solution: string;
  results: { metric: string; label: string; detail: string }[];
  technologies: string[];
  lessonsLearned: string[];
  impactMetric: string;
  featured?: boolean;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  clientIndustry: string;
  category: 'Web' | 'Software' | 'Mobile' | 'Automation' | 'UI/UX';
  description: string;
  impactMetric: string;
  technologies: string[];
  featured?: boolean;
  caseStudySlug?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Structured HTML/Markdown content
  category: 'Technology' | 'AI' | 'Software' | 'Business' | 'Digital Transformation' | 'Web Development' | 'Automation' | 'Nepal Business' | string;
  readTime: string;
  publishedAt?: string;
  publishedDate?: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  tags: string[];
  featuredImage?: string;
  relatedServices?: string[];
  relatedArticles?: string[];
}

export interface PricingCategory {
  id: string;
  title: string;
  subtitle: string;
  startingRange: string;
  pricingType: 'Fixed Scope / Milestones' | 'Custom Scope & Deployment' | 'Sprint / Dedicated Team';
  description: string;
  bestFor: string;
  deliverables: string[];
  typicalTimeline: string;
  factors: string[];
}

export interface CareerPosition {
  id: string;
  title: string;
  department: 'Engineering' | 'Design' | 'Product' | 'Operations';
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Contract';
  location: 'Putalisadak, Kathmandu (Hybrid / On-site)';
  description: string;
  requirements: string[];
  isOpen: boolean;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  nepaliLabel?: string;
  description: string;
}

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  iconName?: string;
  badge?: string;
  children?: NavItem[];
}

export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  inquiryId?: string;
}

export interface QuoteRequest {
  // Step 1: Contact
  name: string;
  email: string;
  phone: string;
  company?: string;
  
  // Step 2: Service
  serviceType: string;
  targetPlatforms?: string[];
  
  // Step 3: Budget
  budgetRange: 'Under NPR 50,000' | 'NPR 50,000–100,000' | 'NPR 100,000–300,000' | 'NPR 300,000–500,000' | 'NPR 500,000+' | 'Not sure / Need consultation';
  
  // Step 4: Project Details
  timeline: 'Urgent (< 1 month)' | '1–2 Months' | '3–6 Months' | 'Flexible / Planning Stage';
  description: string;
  currentSolution?: string;
  mainProblem: string;
}

export interface QuoteResponse {
  success: boolean;
  quoteId: string;
  message: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  nepaliTagline: string;
  positioning: string;
  phone: string;
  email: string;
  location: {
    address: string;
    area: string;
    city: string;
    country: string;
    formatted: string;
  };
  contact: {
    phone: {
      display: string;
      raw: string;
      href: string;
    };
    email: {
      primary: string;
      support: string;
      href: string;
    };
    address: {
      line1: string;
      area: string;
      city: string;
      country: string;
      formatted: string;
    };
    hours: {
      weekdays: string;
      weekend: string;
      support: string;
    };
  };
  social: {
    facebook: string;
    linkedin: string;
    github: string;
  };
  partners?: {
    babalHost: {
      name: string;
      affiliateUrl: string;
      tagline: string;
      description: string;
    };
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    keywords: string[];
  };
}

export interface ContactSubmission {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  serviceInterest?: string;
  message: string;
}

export interface QuoteRequestSubmission {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  projectType: string;
  selectedServices: string[];
  timeline: string;
  budgetEstimate: string;
  description: string;
}

export type Theme = 'light' | 'dark' | 'system';
