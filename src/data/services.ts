import { ServiceItem } from '@/src/types';

export const standardProcessSteps = [
  {
    step: 1,
    title: 'Discover & Requirements Scoping',
    description: 'We meet with your team to audit current workflows, identify bottlenecks, define data flows, and establish clear technical specifications.',
  },
  {
    step: 2,
    title: 'Architecture & System Planning',
    description: 'We draft entity-relationship diagrams, API contracts, security matrices, and select the optimal technology stack for long-term scalability.',
  },
  {
    step: 3,
    title: 'UI/UX & Workflow Prototyping',
    description: 'Interactive wireframes and design systems crafted for high operator speed, low training overhead, and clean information hierarchy.',
  },
  {
    step: 4,
    title: 'Agile Engineering & Sprints',
    description: 'Modular development with continuous integration, automated unit testing, and bi-weekly milestone demonstrations.',
  },
  {
    step: 5,
    title: 'Quality Assurance & Load Testing',
    description: 'Rigorous validation across edge cases, offline network resilience, security audits, and peak transaction stress tests.',
  },
  {
    step: 6,
    title: 'Data Migration & Live Launch',
    description: 'Seamless legacy data import, on-premise or cloud provisioning, domain configuration, and staff training sessions.',
  },
  {
    step: 7,
    title: 'Support, SLA & Continuous Improvement',
    description: 'Ongoing telemetry monitoring, 24/7 incident response, security patches, and incremental feature updates.',
  },
];

export const servicesData: ServiceItem[] = [
  // 1. Custom Software Development
  {
    id: 'custom-software',
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    category: 'software',
    categoryLabel: 'Software Engineering',
    iconName: 'Code2',
    popular: true,
    badge: 'Core Service',
    shortDescription:
      'Bespoke, robust web and cloud platforms engineered specifically around your unique business logic and compliance needs.',
    fullDescription:
      'Off-the-shelf software often forces businesses to compromise their workflows. We design and build custom web and cloud applications from scratch, tailored precisely to your operational model, security requirements, and scalability goals.',
    problem:
      'Generic software packages force your business into rigid, foreign workflows, lack local regulatory compliance (like Nepal IRD/VAT rules), require costly per-seat licenses, and cannot integrate smoothly with your existing internal tools.',
    solution:
      'We architect high-performance, modular custom software platforms with bespoke relational databases, customized approval hierarchies, role-based dashboards, and dedicated API integrations built to scale with your organization.',
    features: [
      'Bespoke domain architecture & custom database schema',
      'High-concurrency RESTful and GraphQL API backends',
      'Role-based permissions matrix & audit trail logging',
      'Cloud-native containerized deployment (Docker/Kubernetes)',
      'Offline data caching & progressive web app capabilities',
      'Seamless third-party ERP, CRM, and SMS gateway hooks',
    ],
    benefits: [
      {
        title: 'Zero Workflow Friction',
        description: 'Software adapts to your existing operational habits rather than forcing your staff to relearn everything.',
      },
      {
        title: 'Full Data Ownership',
        description: 'You retain complete ownership of your code, database, and customer information with no vendor lock-in.',
      },
      {
        title: 'Unlimited Scalability',
        description: 'Engineered to handle hundreds of concurrent staff members and high transaction volumes effortlessly.',
      },
      {
        title: 'Competitive Differentiation',
        description: 'Custom features provide capabilities that your competitors using off-the-shelf software cannot match.',
      },
    ],
    technologies: ['TypeScript', 'React / Next.js', 'Node.js / Express', 'PostgreSQL', 'Docker', 'Redis', 'Tailwind CSS'],
    faqs: [
      {
        question: 'Do we own the source code after development?',
        answer: 'Yes. Upon full project handover, you receive complete ownership of all source code, database architectures, and documentation with zero recurring per-user licensing fees.',
      },
      {
        question: 'How long does a typical custom software project take?',
        answer: 'Timelines depend on complexity. Small specialized tools usually take 4–6 weeks, while enterprise multi-module platforms typically take 8–16 weeks with phased sprint releases.',
      },
      {
        question: 'Can you migrate data from our existing legacy software or Excel sheets?',
        answer: 'Yes. We have built robust data transformation pipelines that sanitize, map, and migrate legacy SQL databases, CSVs, and Excel spreadsheets into the new relational system.',
      },
    ],
    relatedProducts: ['sathi-erp', 'sathi-pos'],
    relatedIndustries: ['enterprises', 'startups', 'professional-services'],
    processSteps: standardProcessSteps,
  },

  // 2. Enterprise Resource Planning (ERP)
  {
    id: 'erp-systems',
    slug: 'erp-systems',
    title: 'Enterprise Resource Planning (ERP)',
    category: 'software',
    categoryLabel: 'Enterprise Systems',
    iconName: 'Layers',
    popular: true,
    badge: 'Enterprise',
    shortDescription:
      'Unified enterprise management software unifying finance, multi-warehouse inventory, procurement, and operations.',
    fullDescription:
      'Break down organizational silos. Our custom ERP solutions connect accounting, procurement, multi-branch warehouses, human resources, and executive reporting into a single real-time operational single source of truth.',
    problem:
      'Businesses run on disconnected spreadsheets, independent billing software, and physical registers, causing stock discrepancies, duplicate data entry, inaccurate profit calculations, and audit vulnerabilities.',
    solution:
      'We deploy unified ERP architectures featuring real-time double-entry general ledgers, multi-location inventory synchronization, automated purchase order workflows, and executive business intelligence telemetry.',
    features: [
      'Integrated double-entry ledger with Nepal IRD & VAT compliance',
      'Multi-branch and multi-warehouse inventory balance sync',
      'Automated purchase requisition, RFQ, and vendor approval trees',
      'Automated payroll calculation, PF/CIT deductions, and attendance',
      'Real-time cash flow, balance sheet, and P&L financial reports',
      'Granular department-level access control & audit trails',
    ],
    benefits: [
      {
        title: 'Single Source of Truth',
        description: 'Eliminate duplicate data entry across departments and ensure executive reports reflect real-time numbers.',
      },
      {
        title: 'Inventory Precision',
        description: 'Prevent stockouts and over-purchasing with automated reorder levels and multi-warehouse stock visibility.',
      },
      {
        title: 'Audit-Ready Financials',
        description: 'Maintain strict compliance with local tax guidelines and generate instant audit trails for every transaction.',
      },
      {
        title: 'Operational Efficiency',
        description: 'Cut operational overhead and approval delays through automated digital purchase and requisition workflows.',
      },
    ],
    technologies: ['PostgreSQL', 'Node.js', 'React', 'Redis', 'Docker', 'Metabase / Recharts', 'TypeScript'],
    faqs: [
      {
        question: 'Is your ERP compliant with Nepal VAT and Inland Revenue Department (IRD) billing standards?',
        answer: 'Yes. Our ERP systems are engineered with full support for sequential tax invoicing, sales/purchase books, VAT registers, and exportable formats adhering to Nepal regulatory guidelines.',
      },
      {
        question: 'Can different branches access the ERP simultaneously?',
        answer: 'Yes. The system is web-based and cloud-native, enabling multi-location branches to transact simultaneously while updating central inventory and ledger records in real time.',
      },
    ],
    relatedProducts: ['sathi-erp', 'sathi-inventory', 'sathi-accounting'],
    relatedIndustries: ['enterprises', 'retail', 'healthcare'],
    processSteps: standardProcessSteps,
  },

  // 3. Customer Relationship Management (CRM)
  {
    id: 'crm-solutions',
    slug: 'crm-solutions',
    title: 'Customer Relationship Management (CRM)',
    category: 'business',
    categoryLabel: 'Business Operations',
    iconName: 'Users',
    shortDescription:
      'Data-driven sales pipelines, customer ticketing, omnichannel communications, and automated lead nurturing.',
    fullDescription:
      'Convert more leads and build lasting client relationships. Our custom CRM platforms provide visual sales pipelines, automatic follow-up reminders, omnichannel WhatsApp/SMS integration, and customer lifecycle insights.',
    problem:
      'Sales leads slip through the cracks when tracked on WhatsApp chats and notes. Sales managers lack visibility into representative activity, conversion bottlenecks, and customer lifetime value.',
    solution:
      'A structured, visual sales and customer service pipeline where every lead, quotation, interaction history, support ticket, and deal stage is tracked transparently.',
    features: [
      'Kanban drag-and-drop sales pipeline & deal stage tracking',
      'Automated SMS, WhatsApp, and email follow-up sequences',
      'Customer support ticketing desk with SLA escalation rules',
      'Quotation and proposal generator with electronic approval',
      'Sales rep activity logs, call notes, and task reminders',
      'Revenue forecasting and conversion analytics dashboard',
    ],
    benefits: [
      {
        title: 'Higher Lead Conversion',
        description: 'Automated follow-ups and prompt lead assignment prevent opportunities from going cold.',
      },
      {
        title: 'Transparent Sales Operations',
        description: 'Gain accurate visibility into each sales representative’s pipeline, calls, and closing rates.',
      },
      {
        title: 'Enhanced Customer Retention',
        description: 'Complete conversation histories allow support teams to resolve tickets faster with personalized context.',
      },
      {
        title: 'Accurate Revenue Forecasting',
        description: 'Predict upcoming cash inflows based on historical deal velocities and pipeline values.',
      },
    ],
    technologies: ['React', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'Twilio / Sparrow SMS API', 'TypeScript'],
    faqs: [
      {
        question: 'Can we integrate SMS notifications for lead follow-ups in Nepal?',
        answer: 'Yes. We natively integrate with leading Nepal SMS gateways (such as Sparrow SMS and Akash SMS) for automated customer alerts and internal rep reminders.',
      },
    ],
    relatedProducts: ['sathi-crm'],
    relatedIndustries: ['professional-services', 'startups', 'retail'],
    processSteps: standardProcessSteps,
  },

  // 4. Point of Sale (POS) Systems
  {
    id: 'pos-software',
    slug: 'pos-systems',
    title: 'Point of Sale (POS) Systems',
    category: 'software',
    categoryLabel: 'Retail & Counter Solutions',
    iconName: 'Receipt',
    popular: true,
    badge: 'High Demand',
    shortDescription:
      'Fast, offline-tolerant POS software with barcode scanning, instant billing, receipt printing, and daily cash reconciliation.',
    fullDescription:
      'Counter checkout needs to be lightning fast and completely reliable. Our POS solutions are engineered for retail stores, supermarkets, pharmacies, and restaurants with offline durability, barcode integration, and split payment methods.',
    problem:
      'Slow checkout software causes long counter queues during peak hours. Internet outages freeze billing, and manual reconciliation between cash drawers and digital wallets creates revenue leakage.',
    solution:
      'We build ultra-fast, keyboard-driven POS interfaces that continue billing uninterrupted during internet outages and sync transparently once connectivity resumes.',
    features: [
      'Sub-second barcode scanning and SKU search shortcuts',
      'Offline-first architecture with local SQLite/IndexedDB caching',
      'Direct thermal printer and cash drawer kick integration',
      'Split tender support (Fonepay QR, Cash, Card, Credit)',
      'Counter shift opening, cash counting, and end-of-day z-reports',
      'Real-time central inventory depletion & stock alert triggers',
    ],
    benefits: [
      {
        title: 'Zero Downtime Billing',
        description: 'Never turn a customer away during internet blackouts—the terminal continues billing smoothly.',
      },
      {
        title: 'Faster Queue Processing',
        description: 'Streamlined keyboard shortcuts and instant barcode recognition cut checkout times by over 60%.',
      },
      {
        title: 'Leakage Prevention',
        description: 'Shift-based cashier balances and void approval logs prevent unauthorized discounts or missing cash.',
      },
      {
        title: 'Real-Time Stock Updates',
        description: 'Every sale automatically deducts from warehouse inventory to maintain exact stock counts.',
      },
    ],
    technologies: ['Electron / React', 'SQLite / IndexedDB', 'Node.js', 'ESC/POS Thermal Protocol', 'TypeScript'],
    faqs: [
      {
        question: 'Does the POS work with standard ESC/POS thermal printers and barcode scanners in Nepal?',
        answer: 'Yes. Our POS systems support USB, Network, and Bluetooth 58mm/80mm thermal receipt printers, barcode/QR scanners, and electronic cash drawers.',
      },
      {
        question: 'How does offline billing work when internet drops?',
        answer: 'Invoices are stored securely in local encrypted storage. Once internet is restored, the terminal automatically syncs all records to the central cloud server in the background.',
      },
    ],
    relatedProducts: ['sathi-pos', 'sathi-inventory'],
    relatedIndustries: ['retail', 'restaurants', 'hospitality'],
    processSteps: standardProcessSteps,
  },

  // 5. Accounting Software
  {
    id: 'accounting-software',
    slug: 'accounting-software',
    title: 'Accounting & Ledger Systems',
    category: 'business',
    categoryLabel: 'Financial Operations',
    iconName: 'FileSpreadsheet',
    shortDescription:
      'Double-entry financial accounting conforming to national VAT, IRD compliance, balance sheets, and profit & loss tracking.',
    fullDescription:
      'Accurate financial management tailored to your regulatory framework. Complete chart of accounts, automated journal entries, bank reconciliations, and tax compliance built for transparent auditing.',
    problem:
      'Manual bookkeeping leads to calculation errors, missing debit/credit balances, unrecorded expenses, and stress during annual tax filing and IRD audits.',
    solution:
      'A compliant, multi-branch double-entry financial accounting platform with automated voucher posting, automated VAT registers, and instant financial statements.',
    features: [
      'Configurable Chart of Accounts (Assets, Liabilities, Equity, Income, Expenses)',
      'Automated Payment, Receipt, Journal, and Contra Vouchers',
      'Sequential Tax Invoicing with IRD audit trail compatibility',
      'Automated Bank Reconciliation & digital payment settlement',
      'Instant Balance Sheet, Trial Balance, and Profit & Loss generation',
      'Multi-fiscal year switching & historical ledger archiving',
    ],
    benefits: [
      {
        title: 'Strict Tax Compliance',
        description: 'Pre-formatted VAT sales/purchase books and tax ledgers save days during monthly tax submissions.',
      },
      {
        title: 'Real-Time Financial Clarity',
        description: 'Executives can inspect live cash positions and branch profitability with a single click.',
      },
      {
        title: 'Eliminated Human Errors',
        description: 'Enforced double-entry ledger balancing ensures vouchers cannot be posted with arithmetic discrepancies.',
      },
      {
        title: 'Audit Confidence',
        description: 'Complete user-stamped modification logs provide absolute accountability for financial audits.',
      },
    ],
    technologies: ['PostgreSQL', 'Node.js', 'React', 'TypeScript', 'Tailwind CSS'],
    faqs: [
      {
        question: 'Can we generate Sales Books and Purchase Books formatted for Nepal IRD submission?',
        answer: 'Yes. All sales books, purchase books, and VAT accounts can be exported directly into Excel/PDF matching the exact format required by the Inland Revenue Department.',
      },
    ],
    relatedProducts: ['sathi-accounting', 'sathi-erp'],
    relatedIndustries: ['enterprises', 'professional-services', 'retail'],
    processSteps: standardProcessSteps,
  },

  // 6. Inventory & Warehouse Management
  {
    id: 'inventory-management',
    slug: 'inventory-management',
    title: 'Inventory & Warehouse Management',
    category: 'business',
    categoryLabel: 'Supply Chain Operations',
    iconName: 'Boxes',
    shortDescription:
      'Multi-branch stock monitoring, batch & expiry control, purchase order automation, and low-stock replenishment alerts.',
    fullDescription:
      'Maintain exact inventory counts across multiple locations. Track stock from supplier purchase orders through warehouse transfers to final point-of-sale depletion with batch-level traceability.',
    problem:
      'Expired products, untracked internal stock transfers, overstocked slow-moving goods, and discrepancies between physical shelves and ledger numbers.',
    solution:
      'Real-time inventory intelligence with automated reorder triggers, batch/expiry alerts, barcode bin labeling, and transfer approval workflows.',
    features: [
      'Multi-warehouse and inter-branch stock transfer management',
      'Batch number, serial number, and expiry date tracking',
      'Automated safety stock calculations and low-inventory SMS alerts',
      'Purchase Order (PO) to Goods Received Note (GRN) matching',
      'Physical stock audit reconciliation & variance reporting',
      'Dead stock and fast-moving inventory turnover analytics',
    ],
    benefits: [
      {
        title: 'Reduced Spoilage & Expiry Loss',
        description: 'FIFO (First-In, First-Out) dispatch suggestions prevent products from expiring on shelves.',
      },
      {
        title: 'Optimized Working Capital',
        description: 'Prevent tying up unnecessary cash in slow-moving inventory with predictive reorder analytics.',
      },
      {
        title: 'Seamless Multi-Branch Sync',
        description: 'Know the exact stock availability in every branch or warehouse in real time.',
      },
      {
        title: 'Prevent Pilferage',
        description: 'Audit variance logs identify discrepancy patterns before they become significant losses.',
      },
    ],
    technologies: ['PostgreSQL', 'Redis', 'Node.js', 'React', 'TypeScript'],
    faqs: [
      {
        question: 'Can this system track pharmaceuticals with manufacturing and expiry dates?',
        answer: 'Yes. Our batch-tracking module specifically flags expiring batches and prevents billing expired items at the counter.',
      },
    ],
    relatedProducts: ['sathi-inventory', 'sathi-pos', 'sathi-erp'],
    relatedIndustries: ['retail', 'healthcare', 'enterprises'],
    processSteps: standardProcessSteps,
  },

  // 7. Hospital Management System (HMS)
  {
    id: 'hospital-management',
    slug: 'hospital-management',
    title: 'Hospital Management System (HMS)',
    category: 'software',
    categoryLabel: 'Clinical Healthcare Systems',
    iconName: 'Stethoscope',
    shortDescription:
      'Complete clinical workflows: OPD/IPD, electronic health records (EHR), pharmacy, pathology labs, and bed management.',
    fullDescription:
      'Designed for modern clinics, nursing homes, and multi-specialty hospitals. Unify patient registration, doctor queues, laboratory reports, inpatient wards, and pharmacy billing into a HIPAA-conscious, reliable system.',
    problem:
      'Paper medical files get lost, patient queues at the OPD counter cause frustration, pathology results take hours to deliver, and hospital pharmacy billing is disconnected from doctor prescriptions.',
    solution:
      'A synchronized digital hospital platform linking OPD token queues, digital doctor prescriptions, laboratory diagnostic reports, bed allocations, and discharge billing.',
    features: [
      'Digital OPD token queue & doctor appointment scheduling',
      'Electronic Health Records (EHR) with medical history archives',
      'Pathology lab machine interfacing & automated test report generation',
      'IPD bed management, nursing charts, and daily ward rounds',
      'Hospital pharmacy POS with drug interaction & expiry checks',
      'Discharge summary generator & insurance billing breakdown',
    ],
    benefits: [
      {
        title: 'Faster Patient Processing',
        description: 'Cut OPD waiting times significantly with automated token generation and doctor queue screens.',
      },
      {
        title: 'Zero Lost Medical Records',
        description: 'Doctors can instantly pull up complete patient diagnostic histories, previous prescriptions, and lab tests.',
      },
      {
        title: 'Synchronized Hospital Billing',
        description: 'Lab charges, doctor consultation fees, and pharmacy items flow directly into a single discharge invoice.',
      },
      {
        title: 'Enhanced Clinical Safety',
        description: 'Legible digital prescriptions and allergy flags reduce clinical medication errors.',
      },
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'WebSockets', 'TypeScript'],
    faqs: [
      {
        question: 'Can pathology lab machines connect directly to the software?',
        answer: 'Yes. We support ASTM and HL7 machine interfacing protocols to pull test results directly from hematology and biochemistry analyzers into patient reports.',
      },
    ],
    relatedProducts: ['sathi-med'],
    relatedIndustries: ['healthcare'],
    processSteps: standardProcessSteps,
  },

  // 8. School & College Management System
  {
    id: 'school-management',
    slug: 'school-management',
    title: 'School & College Management System',
    category: 'software',
    categoryLabel: 'Education Technology',
    iconName: 'GraduationCap',
    shortDescription:
      'Student admissions, fee billing with SMS alerts, attendance, grade book & mark sheets, and parent mobile portals.',
    fullDescription:
      'Empower educational institutions with a cloud campus suite. Manage student enrollments, exam grading algorithms, fee payment tracking, bus route telemetry, and parent communication apps.',
    problem:
      'Fee collection involves manual paper receipts, report card preparation consumes weeks of teacher overtime, and parents remain uninformed about attendance and student progress.',
    solution:
      'An automated academic platform that handles online fee generation, automated SMS receipting, exam mark sheet computation, and student attendance tracking.',
    features: [
      'Automated monthly fee generation, discount quotas, and online payment',
      'Automated SMS alerts for fee dues, attendance, and emergency notices',
      'Custom Exam grading engine & printable CBSE / SEE format mark sheets',
      'RFID / Biometric student and teacher attendance logging',
      'Teacher homework portal & student learning resources',
      'School bus GPS routing and driver dispatch coordination',
    ],
    benefits: [
      {
        title: 'Timely Fee Recovery',
        description: 'Automated SMS reminders and online digital wallets increase on-time monthly fee collections by over 40%.',
      },
      {
        title: 'Instant Mark Sheet Generation',
        description: 'Teachers enter raw subject marks; the engine calculates GPAs, class ranks, and generates print-ready report cards.',
      },
      {
        title: 'Transparent Parent Trust',
        description: 'Parents receive real-time notifications about daily attendance, exam results, and school calendar events.',
      },
      {
        title: 'Paperless Administration',
        description: 'Centralize student records, previous certificates, and alumni archives in a secure digital vault.',
      },
    ],
    technologies: ['React', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'Sparrow SMS API', 'TypeScript'],
    faqs: [
      {
        question: 'Can the system generate mark sheets conforming to the Nepal SEE / NEB grading format?',
        answer: 'Yes. The grade book engine fully supports the standard GPA 4.0 grading matrix and printable character certificate formats.',
      },
    ],
    relatedProducts: ['sathi-edu'],
    relatedIndustries: ['education'],
    processSteps: standardProcessSteps,
  },

  // 9. Hotel & Hospitality Management
  {
    id: 'hotel-management',
    slug: 'hotel-management',
    title: 'Hotel & Hospitality Management',
    category: 'business',
    categoryLabel: 'Hospitality Technology',
    iconName: 'Building2',
    shortDescription:
      'Front desk reservation grid, channel management, room service billing, housekeeping status, and guest analytics.',
    fullDescription:
      'Elevate the guest journey from booking to checkout. Our hospitality suite provides a visual room occupancy matrix, fast check-in with ID scanning, restaurant folio sync, and housekeeping operational tracking.',
    problem:
      'Double bookings from offline walking guests and online platforms, delayed room cleaning turnaround, and food bills not being posted to the final room checkout ledger.',
    solution:
      'A consolidated hotel PMS with a live calendar grid, restaurant POS integration, automated housekeeping status updates, and digital guest registration.',
    features: [
      'Interactive visual room calendar with drag-and-drop booking',
      'Fast guest check-in, passport/citizenship scan storage, and keycard sync',
      'Integrated Restaurant / Room Service billing posted straight to room folio',
      'Housekeeping dashboard (Clean, Dirty, Under Maintenance, Inspected)',
      'Banquet hall & conference room reservation scheduler',
      'Daily occupancy rate, RevPAR, and guest demographic analytics',
    ],
    benefits: [
      {
        title: 'Zero Double-Bookings',
        description: 'Synchronized room availability prevents conflicting reservations across channels and walk-ins.',
      },
      {
        title: 'Seamless Guest Folio',
        description: 'All food orders, laundry, and minibar charges aggregate automatically into a single checkout invoice.',
      },
      {
        title: 'Faster Room Turnaround',
        description: 'Housekeeping teams update room cleanliness from their mobile devices, alerting front desk instantly.',
      },
      {
        title: 'Direct Guest Loyalty',
        description: 'Store guest preferences (pillow type, dietary needs) to deliver personalized hospitality on return visits.',
      },
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'Tailwind CSS', 'TypeScript'],
    faqs: [
      {
        question: 'Can we sync room charges from the hotel restaurant into the guest room bill?',
        answer: 'Yes. Restaurant waiters can search the room number on the POS terminal and post the order directly to the guest room folio for settlement at checkout.',
      },
    ],
    relatedProducts: ['sathi-pos', 'sathi-erp'],
    relatedIndustries: ['hospitality', 'restaurants'],
    processSteps: standardProcessSteps,
  },

  // 10. Restaurant & Café Management
  {
    id: 'restaurant-management',
    slug: 'restaurant-management',
    title: 'Restaurant & Café Management',
    category: 'business',
    categoryLabel: 'Food & Beverage Solutions',
    iconName: 'Utensils',
    shortDescription:
      'Interactive floor layout, Kitchen Display System (KDS), tablet ordering, recipe costings, and delivery tracking.',
    fullDescription:
      'Accelerate table turnover and eliminate kitchen communication errors. Includes handheld waiter ordering, visual table status, kitchen display screens, and ingredient recipe tracking.',
    problem:
      'Handwritten KOTs (Kitchen Order Tickets) get lost or misread, waiters take too long running back and forth to the counter, and food cost margins erode due to unmonitored ingredient usage.',
    solution:
      'Mobile waiter tablet ordering that sends orders directly to kitchen displays, calculates exact food recipe ingredient costs, and handles split-bill payments at the table.',
    features: [
      'Visual table layout with color-coded status (Occupied, Billed, Empty)',
      'Mobile / Tablet waiter ordering directly transmitting KOTs to kitchen',
      'Kitchen Display System (KDS) with order preparation timers',
      'Recipe ingredient inventory deduction on every menu item sold',
      'Split billing (split by item, split equally, or custom amounts)',
      'Third-party food delivery order consolidation dashboard',
    ],
    benefits: [
      {
        title: 'Faster Table Turnover',
        description: 'Instant digital KOT transmission cuts food preparation wait times by up to 25%.',
      },
      {
        title: 'Eliminated Order Errors',
        description: 'Kitchen staff receive clear digital orders with specific dietary notes (e.g. less spicy, no onion).',
      },
      {
        title: 'Accurate Food Costing',
        description: 'Know the exact profit margin of every dish on your menu based on real-time ingredient prices.',
      },
      {
        title: 'Effortless Split Payments',
        description: 'Cashiers can split large group bills across multiple payers and payment methods in seconds.',
      },
    ],
    technologies: ['React', 'Node.js', 'WebSockets', 'Tailwind CSS', 'TypeScript'],
    faqs: [
      {
        question: 'Does the system support Kitchen Order Ticket (KOT) printers and Kitchen Display screens simultaneously?',
        answer: 'Yes. You can route orders to kitchen thermal printers, bar printers, and interactive kitchen touchscreens based on item category.',
      },
    ],
    relatedProducts: ['sathi-pos', 'sathi-inventory'],
    relatedIndustries: ['restaurants', 'hospitality'],
    processSteps: standardProcessSteps,
  },

  // 11. Website Development
  {
    id: 'website-development',
    slug: 'website-development',
    title: 'Modern Website Development',
    category: 'digital',
    categoryLabel: 'Web & Digital Presence',
    iconName: 'Globe',
    popular: true,
    badge: 'High Impact',
    shortDescription:
      'High-performance, beautifully engineered websites built with modern frameworks, 100/100 Core Web Vitals, and conversion architecture.',
    fullDescription:
      'Your website is your 24/7 digital headquarters. We engineer bespoke, lightning-fast, and accessible web experiences that establish instant credibility, rank high on search engines, and turn visitors into qualified leads.',
    problem:
      'Bloated WordPress themes with slow loading times, security vulnerabilities, poor mobile rendering, broken layouts, and zero conversion strategy.',
    solution:
      'Clean Next.js and React web architectures with optimized typography, responsive layouts, semantic schema markup, and robust security.',
    features: [
      'Custom UI/UX crafted specifically for your brand (zero generic templates)',
      'Sub-second page loads achieving 95+ Google PageSpeed scores',
      'Search Engine Optimization (SEO) with OpenGraph and JSON-LD markup',
      'Full responsive adaptation across smartphones, tablets, and 4K displays',
      'Accessible semantic HTML5 and WCAG AA contrast compliance',
      'Integrated lead capture forms connected directly to your email or CRM',
    ],
    benefits: [
      {
        title: 'Higher Search Rankings',
        description: 'Clean semantic code and fast load times improve your ranking on Google and local search results.',
      },
      {
        title: 'Higher Lead Conversions',
        description: 'Strategic information hierarchy and frictionless forms guide visitors to take action.',
      },
      {
        title: 'Flawless Mobile Experience',
        description: 'Optimized touch targets and fluid layouts ensure mobile visitors have a smooth experience.',
      },
      {
        title: 'Zero Vulnerability Headaches',
        description: 'Modern static-generated architectures eliminate the plugin vulnerabilities common in older CMS platforms.',
      },
    ],
    technologies: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Motion', 'Babal.Host NVMe Hosting', 'Vercel / Cloudflare'],
    faqs: [
      {
        question: 'Do you provide maintenance and content updates after launching the website?',
        answer: 'Yes. We offer annual maintenance packages covering performance monitoring, security patches, domain/SSL management, and regular content updates.',
      },
      {
        question: 'What domain and web hosting provider do you recommend in Nepal?',
        answer: 'We deploy web portals on global edge CDNs or high-speed NVMe hosting via Babal.Host for businesses wanting local Nepal payment support (eSewa/Khalti) and fast cPanel environments.',
      },
    ],
    relatedProducts: ['sathi-crm'],
    relatedIndustries: ['enterprises', 'startups', 'professional-services', 'healthcare'],
    processSteps: standardProcessSteps,
  },

  // 12. Mobile App Development
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    title: 'Mobile Application Development',
    category: 'digital',
    categoryLabel: 'Mobile Engineering',
    iconName: 'Smartphone',
    shortDescription:
      'Cross-platform iOS and Android apps with smooth animations, offline persistence, push notifications, and hardware integration.',
    fullDescription:
      'Deliver native-grade mobile experiences to your customers and field staff. We build cross-platform mobile apps for iOS and Android with offline caching, camera scanning, biometric login, and push messaging.',
    problem:
      'Developing separate native iOS and Android apps doubles engineering costs, while cheap web-wrapper apps feel laggy, crash offline, and deliver poor user experiences.',
    solution:
      'High-performance React Native and Flutter mobile applications with shared codebases, native device performance, offline databases, and slick gesture interactions.',
    features: [
      'Single codebase delivering native iOS and Android experiences',
      'Offline data synchronization with local SQLite/WatermelonDB',
      'Targeted push notifications via Firebase Cloud Messaging',
      'Hardware integration: Biometric auth, Camera barcode scan, GPS, Bluetooth',
      'Seamless in-app payment gateway integrations (eSewa, Khalti, ConnectIPS)',
      'App Store and Google Play deployment management & compliance',
    ],
    benefits: [
      {
        title: '50% Faster Time to Market',
        description: 'Deploy simultaneously to Apple App Store and Google Play Store from a single unified codebase.',
      },
      {
        title: 'Offline Resilience',
        description: 'Field agents and users can input data without active internet; the app syncs automatically when reconnected.',
      },
      {
        title: 'Direct Customer Engagement',
        description: 'Push notifications provide an immediate, direct communication channel to your active user base.',
      },
      {
        title: 'Native Device Speed',
        description: 'Smooth 60fps animations and instant gesture feedback ensure a top-tier user experience.',
      },
    ],
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Firebase', 'SQLite', 'Node.js API'],
    faqs: [
      {
        question: 'Do you assist with publishing the app to the Google Play Store and Apple App Store?',
        answer: 'Yes. We handle the entire submission, review guideline compliance, screenshot preparation, and certificate signing process for both stores.',
      },
    ],
    relatedProducts: ['sathi-pos', 'sathi-edu', 'sathi-med'],
    relatedIndustries: ['retail', 'healthcare', 'education', 'startups'],
    processSteps: standardProcessSteps,
  },

  // 13. AI & Workflow Automation
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI & Workflow Automation',
    category: 'ai',
    categoryLabel: 'Artificial Intelligence & Automation',
    iconName: 'Bot',
    popular: true,
    badge: 'Innovation',
    shortDescription:
      'Intelligent document parsers, bilingual Nepali/English support bots, and automated business data pipelines.',
    fullDescription:
      'Harness practical artificial intelligence to eliminate repetitive clerical work. We engineer custom LLM pipelines, document OCR data extraction, automated email sorting, and intelligent workflow assistants.',
    problem:
      'Valuable staff spend hours manually typing data from paper invoices, copying numbers between systems, answering repetitive customer questions, and sorting inbound emails.',
    solution:
      'Practical AI agents that extract structured data from scanned invoices, answer customer inquiries with verified company knowledge, and route tasks automatically.',
    features: [
      'Document OCR parsing for receipts, tax invoices, and identity cards',
      'Bilingual (Nepali & English) AI customer support and FAQ agents',
      'Automated invoice data extraction directly into ERP/accounting ledgers',
      'Custom enterprise knowledge base search over private PDF manuals',
      'Automated email classification, ticket creation, and lead tagging',
      'Data cleaning and anomaly detection pipelines',
    ],
    benefits: [
      {
        title: '80% Reduction in Clerical Work',
        description: 'Free your team from tedious manual data entry to focus on high-value business development and customer care.',
      },
      {
        title: '24/7 Instant Customer Support',
        description: 'Provide instant, accurate answers to client queries even outside regular business hours.',
      },
      {
        title: 'Zero Manual Extraction Errors',
        description: 'High-accuracy OCR extracts line items, tax numbers, and dates without typographical mistakes.',
      },
      {
        title: 'Secure Private Data Isolation',
        description: 'Enterprise models run securely without training public models on your proprietary company data.',
      },
    ],
    technologies: ['Python', 'Gemini API / LLMs', 'Node.js', 'FastAPI', 'Vector Databases (pgvector)', 'Docker'],
    faqs: [
      {
        question: 'Does the AI bot understand Nepali language and Devanagari text?',
        answer: 'Yes. Our models are tuned to comprehend both formal Devanagari Nepali, English, and Romanized Nepali (e.g., "Kati baje khulchha?").',
      },
    ],
    relatedProducts: ['sathi-bot', 'sathi-erp'],
    relatedIndustries: ['enterprises', 'healthcare', 'retail', 'professional-services'],
    processSteps: standardProcessSteps,
  },

  // 14. Cloud Solutions & DevOps
  {
    id: 'cloud-solutions',
    slug: 'cloud-solutions',
    title: 'Cloud Infrastructure & DevOps',
    category: 'digital',
    categoryLabel: 'Infrastructure & Cloud',
    iconName: 'Cloud',
    shortDescription:
      'Secure, auto-scaling cloud architectures, automated database backups, CI/CD pipelines, and 99.9% uptime management.',
    fullDescription:
      'Eliminate on-premise server crashes and maintenance headaches. We design and manage resilient cloud infrastructure on AWS, Google Cloud, and DigitalOcean with automated nightly backups and zero-downtime deployments.',
    problem:
      'Local server hardware failures cause catastrophic data loss. Insecure networks leave databases vulnerable to ransomware, and manual server updates cause unexpected downtime.',
    solution:
      'Automated containerized cloud infrastructure with continuous database replication, automated snapshot backups, SSL encryption, and load-balanced high availability.',
    features: [
      'Containerized deployments with Docker and Kubernetes',
      'Continuous Integration & Continuous Deployment (CI/CD) pipelines',
      'Automated encrypted daily offsite database backups & disaster recovery',
      'Enterprise SSL / TLS encryption, DDoS protection, and firewall tuning',
      'Resource monitoring, latency telemetry, and instant server crash alerts',
      'Cost optimization auditing for cloud computing and database instances',
    ],
    benefits: [
      {
        title: '99.9% System Uptime',
        description: 'Redundant cloud servers ensure your business applications remain available around the clock.',
      },
      {
        title: 'Guaranteed Disaster Recovery',
        description: 'Automated offsite backups allow complete database restoration in minutes if an emergency occurs.',
      },
      {
        title: 'Hardened Security Protection',
        description: 'Enterprise firewalls and continuous security patching protect your critical business data.',
      },
      {
        title: 'Predictable Infrastructure Costs',
        description: 'Right-sized cloud resources eliminate expensive over-provisioning and idle compute charges.',
      },
    ],
    technologies: ['Docker', 'AWS', 'Google Cloud', 'Babal.Host NVMe Cloud', 'PostgreSQL Replication', 'Nginx', 'GitHub Actions', 'Linux'],
    faqs: [
      {
        question: 'Can you migrate our existing on-premise server to a secure cloud platform?',
        answer: 'Yes. We handle the entire audit, containerization, database migration, and DNS cutover with zero downtime during off-peak hours.',
      },
      {
        question: 'Which hosting provider do you recommend for Nepal-based businesses?',
        answer: 'For companies in Nepal needing low-latency local routing, cPanel control, and payment via eSewa, Khalti, or Fonepay, we recommend our partner Babal.Host for their high-speed NVMe SSD cloud infrastructure.',
      },
    ],
    relatedProducts: ['sathi-erp'],
    relatedIndustries: ['enterprises', 'startups', 'healthcare'],
    processSteps: standardProcessSteps,
  },

  // 15. IT & Technology Consulting
  {
    id: 'it-consulting',
    slug: 'it-consulting',
    title: 'IT & Technology Consulting',
    category: 'business',
    categoryLabel: 'Strategic Advisory',
    iconName: 'Compass',
    shortDescription:
      'Independent technology audits, digital transformation roadmaps, vendor evaluations, and software architecture consulting.',
    fullDescription:
      'Make informed technology investments. We provide independent technical consulting to help business owners choose the right software stack, audit existing codebases, design security policies, and avoid costly implementation mistakes.',
    problem:
      'Businesses waste substantial capital buying expensive software packages that fail to deliver, or get locked into unmaintainable proprietary vendor platforms.',
    solution:
      'Strategic, vendor-neutral technology roadmapping that evaluates your exact business processes, calculates ROI, and designs an actionable technical blueprint.',
    features: [
      'Comprehensive digital workflow and technical architecture audit',
      'Software vendor RFP preparation and technical capability evaluation',
      'Cybersecurity posture review, permission audits, and vulnerability checks',
      'Phased digital transformation roadmap with clear ROI benchmarks',
      'Legacy system refactoring and modernization advisory',
      'Technical hiring assistance and internal IT team mentoring',
    ],
    benefits: [
      {
        title: 'Avoid Costly Tech Mistakes',
        description: 'Validate architectural choices before committing significant capital to development or licensing.',
      },
      {
        title: 'Vendor-Neutral Advice',
        description: 'Get honest, unbiased recommendations focused purely on what is best for your business operations.',
      },
      {
        title: 'Clear Execution Roadmap',
        description: 'Step-by-step implementation milestones with realistic timelines and cost projections.',
      },
      {
        title: 'Security Assurance',
        description: 'Identify data access vulnerabilities and ensure compliance with digital safety standards.',
      },
    ],
    technologies: ['System Architecture', 'Cloud Audits', 'Security Frameworks', 'Database Benchmarking'],
    faqs: [
      {
        question: 'What does an initial IT consultation involve?',
        answer: 'We conduct a structured interview with your key stakeholders, audit your existing software/hardware setup, and deliver a concise written assessment with prioritized recommendations.',
      },
    ],
    relatedProducts: ['sathi-erp'],
    relatedIndustries: ['enterprises', 'startups', 'professional-services'],
    processSteps: standardProcessSteps,
  },

  // 16. Digital Marketing & SEO
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing & Growth Engine',
    category: 'digital',
    categoryLabel: 'Growth & Acquisition',
    iconName: 'TrendingUp',
    shortDescription:
      'Data-driven search engine optimization (SEO), Google Business profile ranking, and performance acquisition funnels.',
    fullDescription:
      'Ensure your target audience finds your business when they search for your services. We combine technical SEO, Google Business profile optimization, high-converting landing pages, and analytics tracking to drive qualified inbound inquiries.',
    problem:
      'Businesses have websites that nobody visits. Potential customers in Kathmandu and across Nepal search for their exact services daily, but find competitors instead.',
    solution:
      'A technical growth strategy combining on-page SEO, local search ranking, keyword optimization, and conversion-optimized landing pages.',
    features: [
      'Technical SEO audits: Speed, mobile-friendliness, schema markup',
      'Local SEO & Google Business Profile optimization for Nepal cities',
      'Keyword research focused on high-intent commercial search queries',
      'High-converting landing page design with A/B split testing',
      'Google Analytics 4 & Meta Pixel conversion tracking setup',
      'Monthly search ranking, impression, and conversion telemetry reports',
    ],
    benefits: [
      {
        title: 'Predictable Inbound Inquiries',
        description: 'Rank for high-intent keywords that bring ready-to-buy customers directly to your contact form.',
      },
      {
        title: 'Local Market Dominance',
        description: 'Appear in top local Google Maps and search results when nearby clients look for your services.',
      },
      {
        title: 'Measurable Return on Investment',
        description: 'Track exact phone calls, form inquiries, and customer acquisitions originating from search channels.',
      },
      {
        title: 'Long-Term Organic Value',
        description: 'Unlike paid ads that stop the moment you pause spend, strong SEO delivers steady traffic indefinitely.',
      },
    ],
    technologies: ['Google Search Console', 'GA4', 'Schema.org JSON-LD', 'Next.js SEO', 'PageSpeed Insights'],
    faqs: [
      {
        question: 'How long does it take to see results from SEO in Nepal?',
        answer: 'Initial technical improvements and local Google Maps optimizations often show traction in 4–8 weeks. Competitive keyword rankings typically compound significantly over 3–6 months.',
      },
    ],
    relatedProducts: ['sathi-crm'],
    relatedIndustries: ['professional-services', 'retail', 'healthcare', 'hospitality'],
    processSteps: standardProcessSteps,
  },
];

export const serviceCategoryLabels: Record<string, string> = {
  all: 'All Capabilities (16)',
  software: 'Software & Cloud Engineering',
  business: 'Business & Management Systems',
  digital: 'Web & Digital Presence',
  ai: 'AI & Workflow Automation',
};
