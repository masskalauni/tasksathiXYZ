import { PortfolioItem, CaseStudyItem } from '@/src/types';

export const caseStudiesData: CaseStudyItem[] = [
  // 1. Business Management Platform
  {
    id: 'cs-business-mgmt',
    slug: 'business-management-platform',
    title: 'Integrated Business Management Platform',
    clientType: 'Multi-Branch Commercial Distributor (Demo Prototype)',
    industry: 'Commercial Distribution & Logistics',
    category: 'Software',
    impactMetric: '42% Operational Overhead Reduction',
    summary:
      'A consolidated enterprise operations platform uniting multi-warehouse inventory, double-entry accounting ledgers, purchase order approvals, and real-time revenue telemetry.',
    challenge:
      'The company operated 4 distinct distribution hubs using disconnected desktop software packages and Excel spreadsheets. Stock counts differed wildly between physical warehouses and central accounting, purchase approvals took 4–6 days due to physical paper routing, and end-of-month financial reconciliation required over 40 hours of manual labor.',
    discovery:
      'Through a 2-week architectural audit, our team mapped all information flows across sales, procurement, warehousing, and accounting. We identified that 72% of operational delays stemmed from duplicate manual data entry and lack of real-time stock reservations.',
    strategy:
      'We designed a single cloud-native PostgreSQL architecture with strict relational integrity, eliminating separate databases. We established a phased rollout strategy: Phase 1 focused on central master data and inventory, Phase 2 deployed purchase order workflows, and Phase 3 integrated real-time double-entry ledgers.',
    designApproach:
      'We engineered a dense, low-latency web dashboard interface optimized for high data density. Key performance metrics, pending authorization queues, and warehouse discrepancy alerts were prioritized on the primary executive view.',
    developmentDetails:
      'Built using React 19, TypeScript, Node.js, and PostgreSQL with Redis caching for real-time inventory queries. Implemented row-level security policies to guarantee strict data isolation between branch managers while granting executive consolidation access to directors.',
    solution:
      'A bespoke web-based business management platform featuring automated purchase requisition workflows, barcode-driven stock inward/outward verification, sequential VAT tax invoicing, and automated daily cash reconciliation.',
    results: [
      { metric: '42%', label: 'Overhead Reduction', detail: 'Eliminated duplicate data entry and manual spreadsheet reconciliation.' },
      { metric: '4 Days → 20 Mins', label: 'Approval Speed', detail: 'Digital requisition trees replaced physical paper signature routing.' },
      { metric: '99.8%', label: 'Stock Accuracy', detail: 'Real-time barcode scanning eliminated discrepancies between physical inventory and ledgers.' },
      { metric: '100%', label: 'Tax Compliance', detail: 'Instant export of IRD-compliant VAT sales and purchase books.' },
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind CSS'],
    lessonsLearned: [
      'Early staff onboarding during the wireframing phase drastically reduced operational resistance during final cutover.',
      'Automated data validation pipelines prevented dirty legacy spreadsheet data from polluting the new relational database.',
    ],
    featured: true,
  },

  // 2. Modern Service Website & Lead Engine
  {
    id: 'cs-service-website',
    slug: 'modern-service-website',
    title: 'High-Converting Corporate Website & Lead Engine',
    clientType: 'Commercial Consulting & Advisory Firm (Demo Showcase)',
    industry: 'Professional Services',
    category: 'Web',
    impactMetric: '3.4x Inbound Lead Conversion',
    summary:
      'A lightning-fast, accessible corporate web application engineered with Next.js, custom design tokens, semantic schema markup, and an integrated consultation qualification funnel.',
    challenge:
      'The client’s legacy website took 6.4 seconds to load on mobile devices, had zero organic search ranking on Google for key advisory terms in Nepal, and suffered from a 92% bounce rate on their generic contact form.',
    discovery:
      'Competitor analysis revealed that all local consulting firms used slow, templated WordPress sites with cluttered navigation. User testing indicated that potential corporate clients could not quickly determine the firm’s core competencies within the first 5 seconds of visiting.',
    strategy:
      'We designed an uncompromising minimalist aesthetic using high-contrast typography, clear value proposition hierarchy, and a multi-step interactive project scoping questionnaire that qualifies leads before booking consultations.',
    designApproach:
      'We crafted a bespoke design system with dark/light mode parity, deliberate whitespace, mathematically scaled typography, and interactive case study spotlights without stock imagery clichés.',
    developmentDetails:
      'Engineered with React, TypeScript, and Tailwind CSS. Implemented sub-second asset bundling, automated OpenGraph metadata generation, and Schema.org JSON-LD markup for Organization and Service entities.',
    solution:
      'A modern corporate digital headquarters featuring sub-second page loads (98/100 Core Web Vitals), automated lead routing to the sales CRM, and responsive layout across all device viewports.',
    results: [
      { metric: '98/100', label: 'Google PageSpeed', detail: 'Sub-second mobile loading speed with optimized asset payloads.' },
      { metric: '3.4x', label: 'Lead Inbound Rate', detail: 'Interactive scoping questionnaire doubled the number of qualified inquiries.' },
      { metric: '1st Page', label: 'Google Search Ranking', detail: 'Ranked for 8 key commercial advisory search queries within 90 days.' },
    ],
    technologies: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Motion', 'Vercel Edge Network'],
    lessonsLearned: [
      'Multi-step guided scoping forms consistently outperform intimidating monolithic contact forms in conversion rate.',
      'Bespoke visual layouts built around real business capabilities build significantly higher trust than stock imagery.',
    ],
    featured: true,
  },

  // 3. Restaurant Management System & Floor Ops
  {
    id: 'cs-restaurant-system',
    slug: 'restaurant-management-system',
    title: 'Real-Time Restaurant & Floor Operations System',
    clientType: 'Multi-Floor Casual Dining & Bar (Demo Showcase)',
    industry: 'Food & Beverage',
    category: 'Software',
    impactMetric: '22-Minute Faster Dinner Service',
    summary:
      'A high-speed dining operations platform featuring tablet waiter ordering, Kitchen Display Systems (KDS), split billing, and automated ingredient recipe inventory depletion.',
    challenge:
      'During Friday evening rush hours, handwritten kitchen order tickets (KOTs) were constantly misplaced or delayed. Waiters spent 30% of their shift walking to the central cash desk, food preparation times averaged 38 minutes, and monthly food cost margins were declining due to untracked raw ingredient wastage.',
    discovery:
      'We observed restaurant floor operations over a weekend. We found that communication lag between floor staff and kitchen chefs created a 12-minute delay before food preparation even began, while complex bill splits delayed table turnover by an additional 10 minutes.',
    strategy:
      'We architected a local WebSocket-powered mesh network linking handheld waiter tablets, kitchen display touchscreens, bar thermal printers, and the central cashier terminal.',
    designApproach:
      'High-contrast, touch-optimized visual floor map with color-coded table occupancy indicators (Green = Vacant, Yellow = Dining, Blue = Billed, Red = Kitchen Delayed).',
    developmentDetails:
      'Engineered with React, WebSockets, Node.js, and local SQLite caching for offline resilience. Orders route automatically based on item category: food items appear on kitchen displays, while beverages route to the bar thermal printer.',
    solution:
      'A complete restaurant management suite featuring instant tablet order punching, digital kitchen timers, recipe-level stock depletion, and split-tender payment options (Cash, Fonepay QR, Card).',
    results: [
      { metric: '-22 Mins', label: 'Table Turnaround', detail: 'Immediate digital order transmission cut average meal completion time.' },
      { metric: 'Zero', label: 'Lost KOT Tickets', detail: 'Eliminated order mix-ups with digital Kitchen Display Systems.' },
      { metric: '18%', label: 'Food Cost Savings', detail: 'Recipe ingredient tracking stopped kitchen over-portioning and ingredient loss.' },
    ],
    technologies: ['React', 'Node.js', 'WebSockets', 'SQLite', 'Tailwind CSS', 'ESC/POS Protocol'],
    lessonsLearned: [
      'Touch targets on waiter tablets must be at least 48px to enable error-free order entry in dimly lit restaurant environments.',
      'Offline network caching is vital in commercial kitchens where thick concrete walls occasionally weaken WiFi signals.',
    ],
    featured: true,
  },

  // 4. Healthcare Appointment & Patient Portal
  {
    id: 'cs-healthcare-platform',
    slug: 'healthcare-appointment-platform',
    title: 'Clinical Appointment & Electronic Health Record Platform',
    clientType: 'Polyclinic & Diagnostic Center (Demo Showcase)',
    industry: 'Healthcare',
    category: 'Software',
    impactMetric: '65% Reduction in Patient Waiting Time',
    summary:
      'A HIPAA-conscious clinical platform linking digital OPD registration, automated token queue displays, electronic doctor prescriptions, and direct laboratory result delivery.',
    challenge:
      'Patients waited up to 90 minutes in crowded waiting bays with no visibility into doctor availability. Paper diagnostic test reports were frequently lost between the lab and consulting rooms, and doctors had to re-interview patients because previous medical records were unavailable.',
    discovery:
      'We mapped the end-to-end patient journey and determined that manual paper routing between reception, consultation chambers, blood collection labs, and the pharmacy created cascading bottlenecks.',
    strategy:
      'We designed an integrated clinical architecture that issues digital queue tokens at reception, streams live queue updates to waiting bay screens, and lets doctors enter electronic prescriptions that sync directly with the hospital pharmacy.',
    designApproach:
      'A clean, high-contrast clinical interface with large typography and accessible color palettes, prioritizing patient vital trends and past diagnostic history for rapid medical review.',
    developmentDetails:
      'Built using React, Node.js, PostgreSQL with encrypted patient record storage, and WebSocket push connections for real-time queue telemetry.',
    solution:
      'A synchronized healthcare management platform featuring digital token kiosks, electronic prescription templates, HL7 laboratory report integration, and SMS appointment alerts for patients.',
    results: [
      { metric: '65%', label: 'Wait Time Reduction', detail: 'Automated token queues cut patient waiting time from 90 mins to under 30 mins.' },
      { metric: '100%', label: 'Record Availability', detail: 'Physicians instantly access complete diagnostic histories and previous prescriptions.' },
      { metric: '400+ Daily', label: 'Consultations Handled', detail: 'System effortlessly manages high daily patient throughput across 8 specialties.' },
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets', 'Docker'],
    lessonsLearned: [
      'Doctor prescription templates must support rapid keyboard shortcuts to prevent software from slowing down busy clinical consultations.',
    ],
    featured: true,
  },

  // 5. Inventory Management & Warehouse Dashboard
  {
    id: 'cs-inventory-dashboard',
    slug: 'inventory-management-dashboard',
    title: 'Multi-Warehouse Inventory & Batch Tracking System',
    clientType: 'Pharmaceutical & Consumer Goods Wholesaler (Demo Showcase)',
    industry: 'Supply Chain & Logistics',
    category: 'Software',
    impactMetric: 'Zero Expiry Stock Loss',
    summary:
      'A high-precision warehouse management platform providing multi-location stock visibility, batch/expiry tracking, automated purchase reorders, and inter-branch dispatch verification.',
    challenge:
      'Managing over 4,000 SKUs across 3 warehouses led to frequent stockouts of fast-moving items, while slow-moving pharmaceutical goods expired on shelves unnoticed, costing over NPR 800,000 annually in discarded stock.',
    discovery:
      'The company relied on manual end-of-month stock counts. By the time warehouse managers realized a product was nearing its expiration date, it was already too late to return or discount the batch.',
    strategy:
      'We implemented a First-In, First-Out (FIFO) stock dispatch engine with automated 90-day, 60-day, and 30-day expiry threshold alerts, coupled with dynamic safety stock reorder formulas based on historical sales velocity.',
    designApproach:
      'We developed an interactive telemetry dashboard with visual stock heatmaps, SKU movement velocity meters, and color-coded batch warning badges.',
    developmentDetails:
      'Engineered with React, TypeScript, PostgreSQL, and Redis. Features integrated thermal barcode sticker printing and handheld barcode scanner compatibility.',
    solution:
      'A comprehensive warehouse suite featuring automated Purchase Orders (PO), Goods Received Notes (GRN) matching, inter-branch transfer tracking, and batch-level traceability.',
    results: [
      { metric: 'NPR 0', label: 'Expired Product Loss', detail: 'Automated FIFO dispatch algorithms eliminated batch expiration wastage.' },
      { metric: '99.4%', label: 'Order Fulfillment Rate', detail: 'Predictive safety stock reorder triggers prevented warehouse stockouts.' },
      { metric: '15 Mins', label: 'Inter-Branch Dispatch', detail: 'Digital dispatch notes streamlined stock transfers between city hubs.' },
    ],
    technologies: ['React', 'TypeScript', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'Docker'],
    lessonsLearned: [
      'Batch tracking must be enforced at the initial Goods Received Note (GRN) stage to ensure flawless downstream data integrity.',
    ],
    featured: false,
  },

  // 6. AI Workflow Automation & Document Parser
  {
    id: 'cs-ai-automation',
    slug: 'ai-workflow-automation',
    title: 'AI Document Parser & Bilingual Support Engine',
    clientType: 'Logistics & Trade Enterprise (Demo Showcase)',
    industry: 'Enterprise Operations & AI',
    category: 'Automation',
    impactMetric: '85% Reduction in Data Entry Time',
    summary:
      'An intelligent document extraction and workflow automation pipeline that parses scanned invoices, customs bills, and receipts, alongside a bilingual Nepali/English customer query assistant.',
    challenge:
      'A commercial trade firm processed over 250 vendor invoices and customs transit documents daily. Three full-time data entry clerks spent their entire day manually keying line items, tax numbers, and dates into accounting software, resulting in frequent typographical errors.',
    discovery:
      'Document layouts varied widely across 40+ suppliers. Traditional template-based OCR failed because vendor invoice tables used inconsistent columns, multi-currency values, and handwritten tax stamps.',
    strategy:
      'We architected a modern multimodal LLM extraction pipeline with structured JSON schema enforcement, coupled with an anomaly validation layer that verifies invoice arithmetic before database ingestion.',
    designApproach:
      'We designed a side-by-side verification interface where operators can inspect the original document scan on the left and the extracted structured data fields on the right with color-coded confidence scores.',
    developmentDetails:
      'Built using Python FastAPI, Gemini Multimodal API, PostgreSQL (pgvector), Node.js, and React. Includes automated validation scripts that cross-check tax amounts and total line items.',
    solution:
      'An enterprise AI automation platform that ingests scanned PDFs and images, extracts structured invoice line items, and posts verified vouchers directly to the ERP ledger.',
    results: [
      { metric: '85%', label: 'Time Saved', detail: 'Invoice processing time dropped from 8 minutes per document to under 45 seconds.' },
      { metric: '99.7%', label: 'Extraction Accuracy', detail: 'Dual validation algorithms flagged discrepancies before ledger posting.' },
      { metric: '24/7', label: 'Customer Triage', detail: 'Bilingual support assistant resolved 70% of common shipment status inquiries instantly.' },
    ],
    technologies: ['Python / FastAPI', 'Gemini API / LLM', 'PostgreSQL', 'React', 'Docker', 'TypeScript'],
    lessonsLearned: [
      'Combining AI extraction with deterministic arithmetic validation rules creates an infallible document ingestion pipeline.',
    ],
    featured: true,
  },
];

export const portfolioProjects: PortfolioItem[] = caseStudiesData.map((cs) => ({
  id: cs.id,
  slug: cs.slug,
  title: cs.title,
  clientIndustry: cs.industry,
  category: cs.category,
  description: cs.summary,
  impactMetric: cs.impactMetric,
  technologies: cs.technologies,
  featured: cs.featured,
  caseStudySlug: cs.slug,
}));

export const portfolioData = caseStudiesData;
