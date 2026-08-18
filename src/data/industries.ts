import { IndustryItem } from '@/src/types';

export const industriesData: IndustryItem[] = [
  // 1. Healthcare
  {
    id: 'healthcare',
    slug: 'healthcare',
    title: 'Healthcare & Clinical Diagnostics',
    subtitle: 'Connecting patient care, OPD queues, and clinical reporting',
    description:
      'Hospitals, polyclinics, and diagnostic laboratories require zero-error record keeping. We build integrated clinical management systems linking OPD registration, electronic medical records, pharmacy inventory, and lab machine interfacing.',
    iconName: 'Stethoscope',
    featured: true,
    challenges: [
      { title: 'Chaotic OPD Queues', description: 'Long waiting times at counters cause patient frustration and overwhelm reception staff.' },
      { title: 'Scattered Medical Records', description: 'Paper patient files get misplaced, preventing doctors from reviewing past diagnostic history during emergencies.' },
      { title: 'Disconnected Pharmacy & Lab Billing', description: 'Patients must make multiple trips to separate payment counters for diagnostics, medicines, and consultation.' },
    ],
    solutions: [
      { title: 'Digital Token Queues', description: 'Automated token display screens organize patient consultations by doctor specialty and schedule.' },
      { title: 'Secure Electronic Health Records (EHR)', description: 'Centralized diagnostic histories, previous prescriptions, and lab results accessible instantly to authorized doctors.' },
      { title: 'Unified Hospital Folio', description: 'Every OPD charge, laboratory test, and pharmacy item posts automatically to a single consolidated patient invoice.' },
    ],
    workflow: [
      { step: 1, title: 'Token & Triage', description: 'Patient registers at digital kiosk; queue display updates doctor waiting list.' },
      { step: 2, title: 'EHR Consultation', description: 'Physician reviews clinical history, issues digital prescription, and orders lab tests.' },
      { step: 3, title: 'Diagnostic Sync', description: 'Laboratory analyzers transmit test parameters straight to patient electronic report.' },
      { step: 4, title: 'Settlement & Discharge', description: 'Patient clears consolidated invoice at single discharge counter.' },
    ],
    benefits: [
      { title: '50% Faster OPD Turnaround', description: 'Automated token routing prevents counter congestion and minimizes patient wait times.' },
      { title: 'Zero Transcription Errors', description: 'Direct analyzer interfacing eliminates manual typing errors in blood and biochemistry reports.' },
      { title: 'Complete Revenue Traceability', description: 'Hospital directors gain instant visibility over department revenues and pharmacy margins.' },
    ],
    exampleUseCases: [
      { title: 'Multi-Specialty Hospital Transformation', clientType: '50-Bed Community Hospital', outcome: 'Reduced OPD patient wait times from 45 mins to 12 mins with digital EHR and token displays.' },
      { title: 'Pathology Lab Automation', clientType: 'Regional Diagnostic Center', outcome: 'Automated test report generation for 400+ daily blood samples with direct SMS result links.' },
    ],
    keySolutions: [
      'OPD/IPD Registration & Doctor Queue System',
      'Electronic Health Records (EHR) Archives',
      'Pathology Lab Machine Interfacing (HL7/ASTM)',
      'Hospital Pharmacy POS & Drug Expiry Alerts',
      'Bed Allocation & Ward Nursing Charts',
      'Government Swasthya Bima Insurance Module',
    ],
    metrics: { label: 'Average OPD Wait Reduction', value: '62%' },
    faqs: [
      { question: 'Is the healthcare system compliant with patient data privacy standards?', answer: 'Yes. All patient records, prescriptions, and lab reports are encrypted with granular role-based access control ensuring only authorized medical personnel can inspect records.' },
    ],
    relatedServices: ['hospital-management', 'custom-software', 'cloud-solutions'],
    relatedProducts: ['sathi-med', 'sathi-pos'],
  },

  // 2. Education
  {
    id: 'education',
    slug: 'education',
    title: 'Education & Academic Campuses',
    subtitle: 'Streamlining admissions, fee collections, and examination marksheets',
    description:
      'Schools, colleges, and training institutes need modern digital administration. We engineer academic management platforms that automate monthly fee billing with SMS alerts, compute GPA exam results, and provide parent mobile portals.',
    iconName: 'GraduationCap',
    featured: true,
    challenges: [
      { title: 'Manual Fee Recovery', description: 'Chasing unpaid monthly student tuition using paper registers causes significant cash flow delays.' },
      { title: 'Time-Consuming Exam Grading', description: 'Teachers spend weeks manually computing GPAs, class ranks, and handwriting report cards.' },
      { title: 'Communication Gaps', description: 'Parents remain uninformed about student attendance, discipline notices, and upcoming exams.' },
    ],
    solutions: [
      { title: 'Automated Fee Management', description: 'Generate monthly fee invoices with automated SMS alerts and online digital wallet integration.' },
      { title: 'Instant GPA Grading Engine', description: 'Teachers input raw subject scores; the engine computes GPAs, ranks, and prints standardized report cards in minutes.' },
      { title: 'Parent Mobile Communications', description: 'Real-time notifications about daily attendance, homework tasks, bus routes, and school events.' },
    ],
    workflow: [
      { step: 1, title: 'Admissions & Setup', description: 'Student profile created and mapped to class section, bus route, and fee structure.' },
      { step: 2, title: 'Daily Attendance', description: 'Teachers record attendance; absent students trigger automated SMS notices to parents.' },
      { step: 3, title: 'Fee Recovery', description: 'Monthly fee invoices generated with instant SMS payment links for eSewa and Khalti.' },
      { step: 4, title: 'Exam Processing', description: 'Marks entered online; standardized terminal mark sheets generated with a single click.' },
    ],
    benefits: [
      { title: '40% Faster Tuition Recovery', description: 'Automated SMS reminders ensure parents settle monthly school dues promptly.' },
      { title: '90% Time Saved on Report Cards', description: 'Automate complex mark calculations and produce print-ready mark sheets effortlessly.' },
      { title: 'High Parent Satisfaction', description: 'Transparent daily attendance logs and academic updates build deep trust with families.' },
    ],
    exampleUseCases: [
      { title: 'K-12 Campus Modernization', clientType: '1,200 Student Private School', outcome: 'Transitioned from paper ledgers to cloud billing, recovering 94% of monthly fees on time.' },
    ],
    keySolutions: [
      'Student Admissions & Digital Profile Vault',
      'Automated Monthly Fee Billing & SMS Gateway',
      'Exam Gradebook & Printable SEE Marksheets',
      'Biometric & App-based Attendance Tracking',
      'Parent Communication & Mobile Portal',
      'School Bus GPS Fleet Telemetry',
    ],
    metrics: { label: 'Fee Collection Velocity', value: '+45%' },
    faqs: [
      { question: 'Does the marksheet generator support Nepal curriculum grading standards?', answer: 'Yes. The engine is pre-configured to support NEB, SEE, and custom school grading scales with automated GPA and letter grade conversions.' },
    ],
    relatedServices: ['school-management', 'custom-software', 'mobile-app-development'],
    relatedProducts: ['sathi-edu'],
  },

  // 3. Retail
  {
    id: 'retail',
    slug: 'retail',
    title: 'Retail, Supermarkets & Wholesale',
    subtitle: 'High-velocity counter checkout, barcode scanning, and multi-branch stock sync',
    description:
      'Retailers cannot afford slow checkout queues or inventory blind spots. We deploy fast offline-tolerant POS systems, multi-location warehouse sync, barcode printing, and loyalty point systems.',
    iconName: 'ShoppingBag',
    featured: true,
    challenges: [
      { title: 'Long Counter Queues', description: 'Slow checkout software frustrates shoppers and leads to abandoned carts during peak hours.' },
      { title: 'Stock Discrepancies', description: 'Discrepancies between physical shelves and computer records cause stockouts and product loss.' },
      { title: 'Internet Outage Downtime', description: 'Cloud-only billing terminals stop working during broadband dropouts, halting sales.' },
    ],
    solutions: [
      { title: 'Offline-First POS Terminal', description: 'Keep billing customers smoothly during internet blackouts with sub-second barcode scans.' },
      { title: 'Real-Time Inventory Sync', description: 'Every counter sale instantly decrements central stock, maintaining accurate warehouse balances.' },
      { title: 'Split Tender & QR Payments', description: 'Accept Fonepay QR, Card, Cash, and customer store credit with instant thermal receipt printing.' },
    ],
    workflow: [
      { step: 1, title: 'Inward Barcoding', description: 'New shipments scanned and tagged with barcode stickers matching purchase orders.' },
      { step: 2, title: 'Sub-Second Checkout', description: 'Cashier scans items; promotional discounts apply automatically.' },
      { step: 3, title: 'Multi-Tender Settlement', description: 'Customer pays via QR or Cash; invoice prints on 80mm thermal receipt printer.' },
      { step: 4, title: 'Central Reconciliation', description: 'Shift totals upload to headquarters; warehouse stock numbers update in real time.' },
    ],
    benefits: [
      { title: 'Sub-Second Invoicing', description: 'Keep checkout lines moving rapidly even during peak festive shopping seasons.' },
      { title: '100% Billing Uptime', description: 'Offline data caching ensures cashiers continue ringing up sales without interruption.' },
      { title: 'Zero Inventory Leakage', description: 'Shift-based cashier settlements and audit trails account for every rupee and SKU.' },
    ],
    exampleUseCases: [
      { title: 'Department Store Counter Speedup', clientType: '3-Branch Supermarket Chain', outcome: 'Cut average checkout time from 42 seconds to 16 seconds per shopper across 8 counters.' },
    ],
    keySolutions: [
      'Sub-second Barcode POS with Offline Tolerance',
      'Multi-Branch Inventory & Stock Transfer Sync',
      'Fonepay QR, Card & Cash Split Tender',
      'Automated Low Stock & Expiry Date Alerts',
      'Customer Loyalty Points & Digital Ledgers',
      'Thermal Receipt & Cash Drawer Hardware Integration',
    ],
    metrics: { label: 'Checkout Speed Increase', value: '3.2x' },
    faqs: [
      { question: 'Can the POS connect to digital electronic weighing scales?', answer: 'Yes. We support direct RS232/USB serial interfacing with electronic weighing scales for bulk fruits, vegetables, and grain billing.' },
    ],
    relatedServices: ['pos-software', 'inventory-management', 'accounting-software'],
    relatedProducts: ['sathi-pos', 'sathi-inventory'],
  },

  // 4. Hospitality
  {
    id: 'hospitality',
    slug: 'hospitality',
    title: 'Hotels, Resorts & Lodges',
    subtitle: 'Interactive room reservation grids, housekeeping status, and guest billing',
    description:
      'Deliver seamless guest hospitality. We engineer hotel property management systems (PMS) featuring visual room calendars, instant ID check-ins, restaurant folio synchronization, and banquet scheduling.',
    iconName: 'Building2',
    challenges: [
      { title: 'Double-Booking Headaches', description: 'Managing reservations across walk-ins and phone calls leads to conflicting room bookings.' },
      { title: 'Scattered Guest Charges', description: 'Restaurant bills and room service orders fail to post to the final checkout folio.' },
      { title: 'Slow Room Turnaround', description: 'Front desk remains unaware when housekeeping finishes preparing dirty rooms for arriving guests.' },
    ],
    solutions: [
      { title: 'Visual Room Calendar Matrix', description: 'Interactive drag-and-drop room reservation calendar with real-time occupancy status.' },
      { title: 'Unified Guest Folio', description: 'Restaurant dining, bar orders, and laundry charges flow automatically into a single checkout invoice.' },
      { title: 'Mobile Housekeeping Dashboard', description: 'Housekeeping staff update room cleanliness from their mobile phones, alerting front desk instantly.' },
    ],
    workflow: [
      { step: 1, title: 'Reservation & Check-In', description: 'Front desk reserves room on grid and scans guest ID at check-in.' },
      { step: 2, title: 'In-Stay Folio Sync', description: 'Guest room charges from dining and spa post automatically to room account.' },
      { step: 3, title: 'Housekeeping Sync', description: 'Maids update room status from dirty to inspected via mobile interface.' },
      { step: 4, title: 'Consolidated Checkout', description: 'Single itemized tax bill generated with split payment options.' },
    ],
    benefits: [
      { title: 'Zero Reservation Overlaps', description: 'Visual room matrix provides absolute clarity over room availability.' },
      { title: 'Zero Unbilled Food Orders', description: 'Eliminate revenue loss from restaurant orders forgotten at room checkout.' },
      { title: 'Faster Check-In & Check-Out', description: 'Digital guest profiles and fast folio printing shorten lobby wait times.' },
    ],
    exampleUseCases: [
      { title: 'Boutique Resort PMS Integration', clientType: '28-Room Heritage Resort', outcome: 'Unified restaurant, bar, and room billing into a single touch screen console with automated IRD tax billing.' },
    ],
    keySolutions: [
      'Visual Room Grid & Reservation Scheduler',
      'Fast Guest Check-In & Passport/ID Scan Vault',
      'Restaurant POS & Room Folio Synchronization',
      'Housekeeping Real-Time Mobile Dashboard',
      'Banquet Hall & Event Space Booking',
      'Daily RevPAR & Occupancy Rate Analytics',
    ],
    metrics: { label: 'Front Desk Turnaround', value: '45% Faster' },
    faqs: [
      { question: 'Can the hotel software handle banquet hall bookings and advance deposits?', answer: 'Yes. The system includes an event calendar module to manage banquet hall schedules, menu pricing packages, and advance deposit receipts.' },
    ],
    relatedServices: ['hotel-management', 'pos-software', 'custom-software'],
    relatedProducts: ['sathi-pos', 'sathi-erp'],
  },

  // 5. Restaurants
  {
    id: 'restaurants',
    slug: 'restaurants',
    title: 'Restaurants, Cafés & Bars',
    subtitle: 'Handheld waiter ordering, Kitchen Display Systems (KDS), and recipe costing',
    description:
      'Fast-paced dining operations require speed and precision. We build restaurant systems featuring tablet waiter ordering, visual table status, kitchen display screens, and automated recipe ingredient depletion.',
    iconName: 'Utensils',
    challenges: [
      { title: 'Lost or Misread KOTs', description: 'Handwritten paper tickets get misplaced or misinterpreted by kitchen staff, causing wrong food deliveries.' },
      { title: 'Slow Table Turnover', description: 'Waiters walking back and forth to punch orders waste valuable minutes during peak lunch and dinner hours.' },
      { title: 'Unmonitored Food Margins', description: 'Raw ingredient price inflation erodes profitability when dish recipe costs are not tracked.' },
    ],
    solutions: [
      { title: 'Tablet Waiter Ordering', description: 'Waiters take orders at the table; digital KOTs print in the kitchen and bar instantly.' },
      { title: 'Kitchen Display Screen (KDS)', description: 'Chefs view real-time preparation timers, special guest modifiers, and mark dishes ready.' },
      { title: 'Recipe Ingredient Depletion', description: 'Every menu item sold automatically deducts exact quantities of raw ingredients from inventory.' },
    ],
    workflow: [
      { step: 1, title: 'Table Assignment', description: 'Host marks table occupied on interactive floor plan.' },
      { step: 2, title: 'Digital KOT Punch', description: 'Waiter punches order on tablet; kitchen printer fires in seconds.' },
      { step: 3, title: 'Kitchen Prep', description: 'Chef views orders on KDS touchscreen and flags when food is ready to serve.' },
      { step: 4, title: 'Split Bill Settlement', description: 'Cashier splits bill across multiple guests and prints tax invoice.' },
    ],
    benefits: [
      { title: '25% Faster Table Turns', description: 'Instant order transmission eliminates waiter transit delays and speeds up food delivery.' },
      { title: 'Eliminated Food Waste', description: 'Digital order notes prevent incorrect dishes from being prepared in the kitchen.' },
      { title: 'Exact Food Costing', description: 'Know the true gross margin of every item on your menu based on live raw material costs.' },
    ],
    exampleUseCases: [
      { title: 'Multi-Floor Restaurant Speedup', clientType: '120-Seat Casual Dining Restaurant', outcome: 'Deployed tablet waiter ordering and dual kitchen/bar printers, reducing average ticket-to-table time by 8 minutes.' },
    ],
    keySolutions: [
      'Interactive Floor Plan & Table Matrix',
      'Tablet / Mobile Waiter Ordering App',
      'Kitchen Display System (KDS) & KOT Routing',
      'Recipe-Level Inventory & Food Cost Tracking',
      'Split Bill & Group Payment Engine',
      'Daily Revenue & Best-Seller Analytics',
    ],
    metrics: { label: 'Order-to-Table Velocity', value: '-8 Mins' },
    faqs: [
      { question: 'Does the system handle takeaway and delivery orders alongside dine-in?', answer: 'Yes. You can manage dine-in, counter takeaway, and phone delivery orders with distinct order queues and rider dispatch notes.' },
    ],
    relatedServices: ['restaurant-management', 'pos-software', 'inventory-management'],
    relatedProducts: ['sathi-resto', 'sathi-pos'],
  },

  // 6. Professional Services
  {
    id: 'professional-services',
    slug: 'professional-services',
    title: 'Professional Services & Consultancies',
    subtitle: 'Client project tracking, contract billing, and automated client portals',
    description:
      'Law firms, audit consultancies, architecture studios, and creative agencies require streamlined client project tracking, milestone billing, time tracking, and secure document exchange portals.',
    iconName: 'Briefcase',
    challenges: [
      { title: 'Untracked Billable Hours', description: 'Consultants lose track of client hours and out-of-pocket project expenses.' },
      { title: 'Milestone Billing Delays', description: 'Invoices are sent late because project deliverable completions are not tracked systematically.' },
      { title: 'Insecure Document Sharing', description: 'Exchanging sensitive legal contracts and audit files over unencrypted email chains creates compliance risks.' },
    ],
    solutions: [
      { title: 'Project & Milestone Engine', description: 'Track deliverables, assign tasks, and trigger invoices automatically when milestones are achieved.' },
      { title: 'Timesheet & Expense Tracking', description: 'Consultants log billable hours against specific client contracts from web or mobile.' },
      { title: 'Encrypted Client Portal', description: 'Provide clients with a secure portal to review project status, approve deliverables, and download invoices.' },
    ],
    workflow: [
      { step: 1, title: 'Engagement Onboarding', description: 'Client contract created with defined scope milestones and payment schedule.' },
      { step: 2, title: 'Task Execution', description: 'Consultants collaborate, log billable hours, and upload work drafts.' },
      { step: 3, title: 'Milestone Verification', description: 'Client reviews and approves deliverable via dedicated client portal.' },
      { step: 4, title: 'Automated Invoicing', description: 'Tax invoice generated and emailed with online payment link.' },
    ],
    benefits: [
      { title: '100% Billable Capture', description: 'Stop revenue leakage by capturing every hour of consultant advisory work.' },
      { title: 'Faster Invoice Clearance', description: 'Clear milestone tracking prevents client disputes over invoice timing.' },
      { title: 'Professional Brand Credibility', description: 'Branded client portals deliver a modern, premium experience to corporate clients.' },
    ],
    exampleUseCases: [
      { title: 'Audit Firm Client Management', clientType: '15-Partner Chartered Accounting Firm', outcome: 'Centralized client tax filing workflows, automated milestone billing, and reduced unbilled hours by 22%.' },
    ],
    keySolutions: [
      'Client Engagement & Milestone Tracker',
      'Consultant Timesheet & Expense Logging',
      'Branded Client Portal & Secure Document Vault',
      'Contract Billing & Automated Retainer Invoicing',
      'CRM Sales Pipeline for New Client Pitches',
      'Executive Profitability & Utilization Dashboards',
    ],
    metrics: { label: 'Billing Cycle Efficiency', value: '+35%' },
    faqs: [
      { question: 'Can clients upload large confidential PDF files directly to their client portal?', answer: 'Yes. Portals feature encrypted file vaults with access permissions and download audit logs.' },
    ],
    relatedServices: ['crm-solutions', 'custom-software', 'website-development'],
    relatedProducts: ['sathi-crm'],
  },

  // 7. Startups
  {
    id: 'startups',
    slug: 'startups',
    title: 'Technology Startups & Fast-Moving Ventures',
    subtitle: 'Rapid MVP development, high-throughput APIs, and scalable cloud foundations',
    description:
      'Early-stage ventures need to ship fast without accumulating technical debt. We partner with founders to architect lean Minimum Viable Products (MVPs), scalable web/mobile platforms, and automated CI/CD pipelines.',
    iconName: 'Rocket',
    challenges: [
      { title: 'Slow Development Timelines', description: 'Hiring and coordinating inexperienced freelance developers delays product launch by months.' },
      { title: 'Unscalable Architecture', description: 'Quickly built MVPs crash as soon as user traffic spikes, requiring complete rewrites.' },
      { title: 'Capital Inefficiency', description: 'Over-engineering unnecessary complex features drains precious seed runway before finding product-market fit.' },
    ],
    solutions: [
      { title: 'Rapid 6-Week MVP Sprints', description: 'Scoping and building focused, production-grade products designed to validate core hypotheses quickly.' },
      { title: 'Clean Scalable Codebases', description: 'TypeScript, Next.js, and PostgreSQL architectures that handle growth without needing to be discarded.' },
      { title: 'Automated CI/CD DevOps', description: 'Continuous deployment pipelines that let your team push updates safely multiple times a day.' },
    ],
    workflow: [
      { step: 1, title: 'Product Scoping', description: 'Prune scope to core value proposition; define data models and user journeys.' },
      { step: 2, title: 'Rapid UI Prototyping', description: 'Design clean responsive interface with established component library.' },
      { step: 3, title: 'Full-Stack Engineering', description: 'Agile sprints with weekly functional demos and automated testing.' },
      { step: 4, title: 'Cloud Launch & Telemetry', description: 'Deploy to auto-scaling cloud cluster with live error tracking and user analytics.' },
    ],
    benefits: [
      { title: 'Launch in Weeks, Not Months', description: 'Get your product into the hands of real paying users before your competitors do.' },
      { title: 'Investor-Ready Code Quality', description: 'Clean architecture and comprehensive API documentation pass technical due diligence.' },
      { title: 'Modular Growth Path', description: 'Easily add new modules and integrations as your customer base expands.' },
    ],
    exampleUseCases: [
      { title: 'Fintech Onboarding Platform', clientType: 'Seed-Stage Fintech Startup', outcome: 'Architected and shipped customer onboarding engine with KYC verification in 7 weeks.' },
    ],
    keySolutions: [
      'Agile MVP Architecture & Full-Stack Sprints',
      'High-Concurrency REST & GraphQL APIs',
      'Cross-Platform Mobile Apps (iOS & Android)',
      'Docker & Serverless Cloud Infrastructure',
      'Automated CI/CD & Testing Pipelines',
      'Product Telemetry & Conversion Analytics',
    ],
    metrics: { label: 'Average Time to MVP Launch', value: '6 Weeks' },
    faqs: [
      { question: 'Do you help with product roadmap scoping and technical architecture selection?', answer: 'Yes. We work directly with founders as fractional CTOs to define lean architectures that balance fast release speed with rock-solid scalability.' },
    ],
    relatedServices: ['custom-software', 'mobile-app-development', 'cloud-solutions'],
    relatedProducts: ['sathi-crm', 'sathi-erp'],
  },

  // 8. Enterprises
  {
    id: 'enterprises',
    slug: 'enterprises',
    title: 'Enterprises & Large Corporations',
    subtitle: 'Mission-critical systems, legacy migration, and corporate governance',
    description:
      'Established corporations require high-availability architectures, strict data governance, and seamless legacy system modernization. We engineer enterprise software that integrates with existing ERPs, databases, and compliance frameworks.',
    iconName: 'ShieldCheck',
    challenges: [
      { title: 'Rigid Legacy Software', description: 'Decades-old legacy software cannot integrate with modern web APIs or mobile applications.' },
      { title: 'Fragmented Department Data', description: 'Subsidiaries and business units operate isolated databases with no consolidated reporting.' },
      { title: 'Security & Compliance Risks', description: 'Outdated infrastructure leaves corporate intellectual property vulnerable to modern cyber threats.' },
    ],
    solutions: [
      { title: 'Modern Microservices & APIs', description: 'Wrap legacy databases with secure, high-speed API layers to enable modern web and mobile apps.' },
      { title: 'Enterprise Data Unification', description: 'Automated data pipelines that consolidate branch ledgers into a single executive dashboard.' },
      { title: 'Hardened Security & SLA', description: 'Role-based access matrices, continuous encryption, automated disaster recovery, and 24/7 technical SLAs.' },
    ],
    workflow: [
      { step: 1, title: 'Enterprise Audit', description: 'Evaluate existing legacy systems, network topology, and compliance requirements.' },
      { step: 2, title: 'Architectural Blueprint', description: 'Design microservice boundary contracts and data migration sanitation scripts.' },
      { step: 3, title: 'Phased Migration', description: 'Incremental module rollouts ensuring zero business interruption during transition.' },
      { step: 4, title: 'Enterprise SLA Support', description: 'Dedicated enterprise engineering team providing continuous monitoring and support.' },
    ],
    benefits: [
      { title: 'Zero Business Interruption', description: 'Phased cutover strategies ensure daily corporate operations continue without downtime.' },
      { title: 'Consolidated Executive Insights', description: 'Board members and directors review real-time KPI metrics across all subsidiaries.' },
      { title: 'Strict Corporate Compliance', description: 'Enforce enterprise security policies, dual-authorization approvals, and audit trails.' },
    ],
    exampleUseCases: [
      { title: 'Conglomerate ERP Modernization', clientType: 'Multi-Sector Corporate Group', outcome: 'Unified 4 subsidiary business units into a consolidated financial reporting and inventory platform.' },
    ],
    keySolutions: [
      'Custom Enterprise ERP & Resource Engines',
      'Legacy Database Modernization & API Wrappers',
      'Role-Based Security Matrix & Audit Logging',
      'Automated Disaster Recovery & Cloud Backups',
      'Bespoke Business Intelligence Dashboards',
      'Dedicated 24/7 Enterprise SLA Support',
    ],
    metrics: { label: 'Report Consolidation Time', value: '-85%' },
    faqs: [
      { question: 'How do you guarantee data security during enterprise system migration?', answer: 'We use encrypted transit tunnels, sanitized sandbox staging environments, and verify data parity with automated hash checksum audits before live cutover.' },
    ],
    relatedServices: ['erp-systems', 'custom-software', 'cloud-solutions', 'it-consulting'],
    relatedProducts: ['sathi-erp', 'sathi-accounting'],
  },
];
