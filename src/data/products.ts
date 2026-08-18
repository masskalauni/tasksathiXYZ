import { ProductItem } from '@/src/types';

export const productsData: ProductItem[] = [
  // 1. TaskSathi ERP
  {
    id: 'sathi-erp',
    slug: 'tasksathi-erp',
    title: 'TaskSathi ERP Core',
    tagline: 'All-in-one business resource engine for growing enterprises',
    description:
      'A unified web-based enterprise suite linking finance, multi-warehouse inventory, procurement, and staff payroll into one fast operational control center.',
    category: 'Enterprise Software',
    iconName: 'Building2',
    badge: 'Enterprise Ready',
    status: 'Available on Request',
    features: [
      'Multi-currency & Nepal Fiscal Year support with IRD-compliant tax ledgers',
      'Inter-branch and multi-warehouse real-time inventory balances',
      'Automated purchase requisition, RFQ, and multi-tier vendor approval trees',
      'Automated payroll calculation with PF/CIT deductions and attendance integration',
      'Real-time cash flow, balance sheet, and P&L financial reports',
      'Role-based access security matrix with complete transaction audit logs',
    ],
    problemsSolved: [
      'Eliminates fragmented spreadsheets and duplicate data entry across departments',
      'Prevents inventory stockouts and discrepancies between warehouse and billing',
      'Automates multi-tier purchase approvals to prevent unauthorized expenses',
      'Ensures continuous compliance with national tax and IRD auditing rules',
    ],
    workflowSteps: [
      { step: 1, title: 'Procurement & Stock Inward', description: 'Vendor PO created, approved, and matched with incoming Goods Received Note (GRN).' },
      { step: 2, title: 'Central Inventory Sync', description: 'Stock balances update instantly across central warehouse and retail branches.' },
      { step: 3, title: 'Sales & Invoicing', description: 'Sequential VAT tax invoices generated with instant ledger entry and credit tracking.' },
      { step: 4, title: 'Financial Intelligence', description: 'Executive dashboard reflects live revenue, profit margins, and pending receivables.' },
    ],
    benefits: [
      { title: 'Unified Data Source', description: 'All departments operate from a single, synchronized master database.' },
      { title: '30% Faster Approvals', description: 'Digital requisition trees eliminate physical paper routing delays.' },
      { title: 'Audit Confidence', description: 'Every modification and ledger entry is permanently logged with timestamps.' },
    ],
    mockupData: {
      title: 'TaskSathi ERP Executive Dashboard',
      type: 'erp',
      metrics: [
        { label: 'Monthly Revenue', value: 'NPR 4.82M', change: '+14.2%', isPositive: true },
        { label: 'Pending PO Approvals', value: '6 Orders', change: '2 Urgent', isPositive: false },
        { label: 'Active Warehouses', value: '4 Branches', change: '100% Synced', isPositive: true },
        { label: 'Net Cash Flow', value: 'NPR 1.45M', change: '+8.6%', isPositive: true },
      ],
      recentActivities: [
        { id: 'ACT-1', user: 'Sunita Sharma (Finance)', action: 'Approved PO #PO-8842 (NPR 450,000)', time: '12m ago', status: 'Approved' },
        { id: 'ACT-2', user: 'Biratnagar Hub', action: 'Received Stock Transfer #ST-109 (480 units)', time: '34m ago', status: 'Completed' },
        { id: 'ACT-3', user: 'System Bot', action: 'Generated Monthly VAT Sales Register', time: '2h ago', status: 'Generated' },
      ],
      tableHeaders: ['Voucher ID', 'Account / Entity', 'Category', 'Debit / Credit', 'Status'],
      tableRows: [
        ['#TX-9021', 'Himalayan Distributors', 'Raw Materials PO', 'NPR 185,000', 'Settled'],
        ['#TX-9020', 'Everest Retail Outlet', 'Branch Sales Inward', 'NPR 64,200', 'Cleared'],
        ['#TX-9019', 'Prabhu Bank Ltd.', 'Vendor Wire Settlement', 'NPR 310,000', 'Reconciled'],
        ['#TX-9018', 'Nepal Electricity Auth.', 'Utility Payment', 'NPR 42,800', 'Posted'],
      ],
    },
    pricingPlaceholder: {
      model: 'Custom Enterprise Deployment',
      note: 'Pricing depends on the number of active operational branches, custom integration modules, and data migration scope.',
      featuresIncluded: [
        'Full deployment on dedicated secure cloud server',
        'Custom Chart of Accounts & Nepali VAT configuration',
        'Data migration from legacy systems / spreadsheets',
        'On-site staff onboarding & training sessions in Kathmandu',
        '12 months dedicated technical SLA support & maintenance',
      ],
    },
    faqs: [
      { question: 'Is TaskSathi ERP hosted on cloud or on-premise?', answer: 'We offer both options: high-security cloud hosting (AWS/GCP/DigitalOcean) or deployment to your local on-premise server with automated offsite backups.' },
      { question: 'Can we customize approval workflows for our specific company hierarchy?', answer: 'Yes. You can configure multi-level authorization thresholds (e.g., manager approval up to NPR 100k, Director approval above NPR 100k).' },
    ],
    relatedServices: ['erp-systems', 'custom-software', 'accounting-software'],
  },

  // 2. TaskSathi CRM
  {
    id: 'sathi-crm',
    slug: 'tasksathi-crm',
    title: 'TaskSathi CRM',
    tagline: 'Modern pipeline management and customer engagement engine',
    description:
      'Track every lead, quotation, customer conversation, and support ticket in a visual collaborative workspace built for high-velocity sales teams.',
    category: 'Sales & Marketing',
    iconName: 'Users',
    badge: 'Available',
    status: 'Available on Request',
    features: [
      'Visual drag-and-drop Kanban deal pipeline with probability scoring',
      'Automated SMS, WhatsApp, and email follow-up reminders',
      'Centralized customer interaction timeline and phone call notes',
      'Instant quotation builder with custom discount approval rules',
      'Customer support ticketing desk with SLA escalation timers',
      'Sales representative quota tracking and conversion leaderboards',
    ],
    problemsSolved: [
      'Stops sales leads from slipping away in untracked WhatsApp chats',
      'Provides sales managers with complete visibility into rep activities',
      'Standardizes quotation generation and tracks customer viewing status',
      'Centralizes customer support tickets to prevent duplicate answers',
    ],
    workflowSteps: [
      { step: 1, title: 'Lead Ingestion', description: 'Inbound inquiries from website, social media, or phone auto-populate the CRM.' },
      { step: 2, title: 'Qualification & Scoping', description: 'Assigned sales rep logs requirements, schedules meetings, and tracks deal stage.' },
      { step: 3, title: 'Quotation Dispatch', description: 'Generate professional branded proposals in seconds with real-time open alerts.' },
      { step: 4, title: 'Conversion & Onboarding', description: 'Won deals convert directly into active customer accounts with handoff notes.' },
    ],
    benefits: [
      { title: '40% Higher Win Rates', description: 'Timely automated follow-up reminders keep leads active and engaged.' },
      { title: 'Full Activity Visibility', description: 'Managers inspect call logs, meetings held, and revenue pipelines at a glance.' },
      { title: 'Consolidated History', description: 'Every interaction from day one is preserved on the customer profile.' },
    ],
    mockupData: {
      title: 'TaskSathi CRM Sales Workspace',
      type: 'crm',
      metrics: [
        { label: 'Pipeline Value', value: 'NPR 12.4M', change: '+22.5%', isPositive: true },
        { label: 'Active Opportunities', value: '38 Deals', change: '8 Closing this week', isPositive: true },
        { label: 'Average Win Rate', value: '34.2%', change: '+4.1%', isPositive: true },
        { label: 'Pending Support Tickets', value: '3 Open', change: '100% SLA Met', isPositive: true },
      ],
      recentActivities: [
        { id: 'CRM-1', user: 'Rohan Thapa', action: 'Moved deal "Kathmandu Heights Hotel" to Proposal Sent', time: '18m ago', status: 'In Progress' },
        { id: 'CRM-2', user: 'Pooja KC', action: 'Logged discovery call with Apex Medical Lab', time: '45m ago', status: 'Completed' },
        { id: 'CRM-3', user: 'Automation Bot', action: 'Sent SMS follow-up for Quote #Q-402', time: '1h ago', status: 'Sent' },
      ],
      tableHeaders: ['Deal Name', 'Contact Person', 'Stage', 'Value', 'Closing Date'],
      tableRows: [
        ['Apex Healthcare System', 'Dr. S. Shakya', 'Negotiation', 'NPR 850,000', 'Aug 28, 2026'],
        ['Himalayan Logistics ERP', 'Bikash Adhikari', 'Proposal Sent', 'NPR 1,200,000', 'Sep 05, 2026'],
        ['Valley Retail Chain POS', 'Anita Gurung', 'Qualified Lead', 'NPR 450,000', 'Sep 12, 2026'],
        ['Summit Academy Cloud', 'Principal Karki', 'Contract Signed', 'NPR 620,000', 'Aug 22, 2026'],
      ],
    },
    pricingPlaceholder: {
      model: 'Modular Deployment / User Tiers',
      note: 'Available with perpetual server licensing or flexible monthly cloud hosting.',
      featuresIncluded: [
        'Unlimited contact records and customer interaction histories',
        'Custom sales pipeline stage configuration',
        'Nepal SMS gateway integration setup',
        'Staff training and onboarding documentation',
      ],
    },
    faqs: [
      { question: 'Can sales reps use the CRM on their smartphones?', answer: 'Yes. TaskSathi CRM features a fully responsive progressive web app interface with fast mobile access for logging calls on the go.' },
    ],
    relatedServices: ['crm-solutions', 'custom-software', 'digital-marketing'],
  },

  // 3. TaskSathi POS
  {
    id: 'sathi-pos',
    slug: 'tasksathi-pos',
    title: 'TaskSathi POS Smart',
    tagline: 'Lightning-fast retail, counter, and supermarket checkout system',
    description:
      'Engineered for retail stores, marts, and boutiques. Provides sub-second barcode checkout, offline durability, Fonepay QR integration, and thermal receipt printing.',
    category: 'Retail Technology',
    iconName: 'Receipt',
    badge: 'Popular',
    status: 'Available on Request',
    features: [
      'Sub-second barcode scanning and keyboard quick-search shortcuts',
      '100% offline-tolerant billing with automatic background cloud sync',
      'Thermal receipt printing (58mm/80mm) and electronic cash drawer triggers',
      'Split payment options: Cash, Card, Fonepay QR, and Customer Credit ledgers',
      'Cashier shift opening, float counting, and end-of-day Z-report summaries',
      'Real-time central inventory depletion and minimum stock alerts',
    ],
    problemsSolved: [
      'Eliminates long counter queues during rush hours with rapid keystrokes',
      'Allows uninterrupted billing during internet or power network outages',
      'Prevents cash drawer discrepancies with shift reconciliation logs',
      'Stops accidental sales of out-of-stock or expired goods',
    ],
    workflowSteps: [
      { step: 1, title: 'Shift Open', description: 'Cashier logs in and enters opening cash drawer float.' },
      { step: 2, title: 'Item Scan & Add', description: 'Barcode scanner adds items with automated discounts applied instantly.' },
      { step: 3, title: 'Tender Settlement', description: 'Payment collected via QR, Cash, or Card with instant thermal printout.' },
      { step: 4, title: 'Shift Z-Report', description: 'Cashier reconciles cash drawer; summary uploads to management cloud.' },
    ],
    benefits: [
      { title: 'Sub-Second Invoicing', description: 'Keep customer lines moving fast even during peak festival shopping rushes.' },
      { title: 'Offline Protection', description: 'Never lose a sale when the internet connection goes down.' },
      { title: 'Zero Cash Discrepancies', description: 'Shift-based cashier accounting pinpoints exact overages or shortages.' },
    ],
    mockupData: {
      title: 'TaskSathi POS Counter Terminal',
      type: 'pos',
      metrics: [
        { label: "Today's Counter Sales", value: 'NPR 184,250', change: '142 Bills', isPositive: true },
        { label: 'Avg Checkout Time', value: '18 Seconds', change: '-4s vs last month', isPositive: true },
        { label: 'Cash Drawer Float', value: 'NPR 52,100', change: 'Balanced', isPositive: true },
        { label: 'Low Stock Alerts', value: '4 SKUs', change: 'Reorder sent', isPositive: false },
      ],
      recentActivities: [
        { id: 'POS-1', user: 'Counter #1 (Kiran)', action: 'Completed Bill #B-1094 (NPR 3,420 - Fonepay)', time: '1m ago', status: 'Paid' },
        { id: 'POS-2', user: 'Counter #2 (Asha)', action: 'Completed Bill #B-1093 (NPR 1,180 - Cash)', time: '3m ago', status: 'Paid' },
        { id: 'POS-3', user: 'Counter #1 (Kiran)', action: 'Voided Item SKU-402 (Supervisor Approval)', time: '14m ago', status: 'Approved' },
      ],
      tableHeaders: ['Bill #', 'Cashier', 'Items', 'Payment Method', 'Amount'],
      tableRows: [
        ['#B-1094', 'Counter 1 (Kiran)', '5 Items', 'Fonepay QR', 'NPR 3,420'],
        ['#B-1093', 'Counter 2 (Asha)', '2 Items', 'Cash (Exact)', 'NPR 1,180'],
        ['#B-1092', 'Counter 1 (Kiran)', '12 Items', 'Nabil Card POS', 'NPR 8,650'],
        ['#B-1091', 'Counter 2 (Asha)', '1 Item', 'Cash Drawer', 'NPR 450'],
      ],
    },
    pricingPlaceholder: {
      model: 'Per-Counter / Terminal License',
      note: 'One-time setup fee including hardware testing and cashier staff training.',
      featuresIncluded: [
        'Offline desktop billing application for Windows / Mac / Linux',
        'Hardware driver integration for thermal printers & barcode scanners',
        'Cloud back-office manager for centralized price updates & reporting',
        'Unlimited product catalog and SKU barcodes',
      ],
    },
    faqs: [
      { question: 'Will TaskSathi POS work with our existing thermal printer and barcode scanner?', answer: 'Yes. We support all industry-standard ESC/POS USB, LAN, and Bluetooth thermal printers as well as standard USB/wireless 1D/2D barcode scanners.' },
    ],
    relatedServices: ['pos-software', 'inventory-management', 'custom-software'],
  },

  // 4. TaskSathi Accounting
  {
    id: 'sathi-accounting',
    slug: 'tasksathi-accounting',
    title: 'TaskSathi Accounting',
    tagline: 'Nepal IRD-compliant financial accounting and automated ledgers',
    description:
      'Double-entry accounting built specifically for Nepal regulatory standards with automatic VAT sales/purchase books, bank reconciliation, and balance sheet generation.',
    category: 'Finance & Tax',
    iconName: 'FileSpreadsheet',
    badge: 'Compliant',
    status: 'Available on Request',
    features: [
      'Multi-level customizable Chart of Accounts and Cost Centers',
      'Automated journal entries from invoicing, inventory, and expense vouchers',
      'Nepal IRD compliant sequential tax invoicing & VAT registers',
      'Automated bank reconciliation statements and uncleared cheque tracking',
      'Instant Trial Balance, Profit & Loss, and Balance Sheet reports',
      'Fiscal year closing routines and historical ledger archives',
    ],
    problemsSolved: [
      'Eliminates arithmetic errors in manual journal and ledger entries',
      'Cuts days of manual work when preparing monthly VAT returns for the IRD',
      'Provides accurate real-time cash flow and outstanding debtor/creditor balances',
      'Maintains complete audit trails with user and timestamp logging',
    ],
    workflowSteps: [
      { step: 1, title: 'Voucher Entry', description: 'Record Payment, Receipt, Journal, or Contra vouchers with auto debit-credit checks.' },
      { step: 2, title: 'Ledger Posting', description: 'General ledgers, sub-ledgers, and customer accounts update instantaneously.' },
      { step: 3, title: 'Bank Reconciliation', description: 'Match bank statements against posted cheques and electronic transactions.' },
      { step: 4, title: 'Tax & Audit Export', description: 'Export IRD-formatted VAT sales/purchase books and annual balance sheets.' },
    ],
    benefits: [
      { title: 'Tax Audit Ready', description: 'All ledgers and tax books are structured to meet strict local accounting standards.' },
      { title: 'Zero Arithmetic Mismatches', description: 'Transactions must balance to zero before posting is permitted.' },
      { title: 'Instant Executive Reports', description: 'Generate comprehensive P&L statements with one click anytime.' },
    ],
    mockupData: {
      title: 'TaskSathi Financial Ledger Console',
      type: 'erp',
      metrics: [
        { label: 'Total Current Assets', value: 'NPR 18.2M', change: '+5.4%', isPositive: true },
        { label: 'Accounts Receivable', value: 'NPR 2.14M', change: '8 Pending', isPositive: false },
        { label: 'Accounts Payable', value: 'NPR 1.08M', change: 'Due in 15d', isPositive: true },
        { label: 'Fiscal YTD Profit', value: 'NPR 4.32M', change: '+18.1%', isPositive: true },
      ],
      recentActivities: [
        { id: 'ACC-1', user: 'Accountant (Mahesh)', action: 'Posted Bank Voucher #BP-409 (NPR 120,000)', time: '20m ago', status: 'Posted' },
        { id: 'ACC-2', user: 'Accountant (Mahesh)', action: 'Exported VAT Sales Book for Shrawan 2083', time: '1h ago', status: 'Exported' },
        { id: 'ACC-3', user: 'Audit System', action: 'Trial Balance Verified (Zero Difference)', time: '3h ago', status: 'Verified' },
      ],
      tableHeaders: ['Voucher #', 'Date', 'Particulars', 'Debit (NPR)', 'Credit (NPR)'],
      tableRows: [
        ['#JV-2083-042', '2083-04-15', 'Rent Expense A/C', '85,000.00', '-'],
        ['#JV-2083-042', '2083-04-15', 'TDS Payable (10%) A/C', '-', '8,500.00'],
        ['#JV-2083-042', '2083-04-15', 'Bank of Kathmandu A/C', '-', '76,500.00'],
        ['#RV-2083-118', '2083-04-14', 'Customer Inward Settlement', '210,000.00', '210,000.00'],
      ],
    },
    pricingPlaceholder: {
      model: 'Perpetual or Annual Subscription',
      note: 'Includes initial Chart of Accounts setup and historical ledger migration assistance.',
      featuresIncluded: [
        'Complete double-entry accounting software suite',
        'Nepali calendar (Bikram Sambat) and Gregorian date support',
        'Export to Excel, PDF, and print-ready formats',
        'Dedicated accountant onboarding and tax ledger guidance',
      ],
    },
    faqs: [
      { question: 'Does it support Bikram Sambat (B.S.) calendar dates for financial years?', answer: 'Yes. The system natively operates in both Bikram Sambat (e.g. 2083/84) and Gregorian (A.D.) date systems with seamless automatic conversions.' },
    ],
    relatedServices: ['accounting-software', 'erp-systems'],
  },

  // 5. TaskSathi Inventory
  {
    id: 'sathi-inventory',
    slug: 'tasksathi-inventory',
    title: 'TaskSathi Inventory',
    tagline: 'Multi-warehouse stock control, batch tracking, and replenishment',
    description:
      'Maintain exact inventory visibility across central warehouses and retail stores. Track stock from purchase orders to point-of-sale depletion with batch-level expiry control.',
    category: 'Supply Chain',
    iconName: 'Boxes',
    badge: 'Available',
    status: 'Available on Request',
    features: [
      'Multi-warehouse and inter-branch stock transfer management',
      'Batch numbers, serial tracking, and automated expiry date alerts',
      'Automated safety stock calculations and low-inventory triggers',
      'Purchase Order (PO) to Goods Received Note (GRN) matching',
      'Physical stock audit reconciliation and variance reporting',
      'Dead stock and fast-moving inventory turnover velocity reports',
    ],
    problemsSolved: [
      'Prevents loss from expired goods through First-In, First-Out (FIFO) warnings',
      'Stops stockouts by automatically alerting procurement when reorder levels are reached',
      'Tracks inter-branch transfers with digital dispatch and receipt confirmations',
      'Identifies discrepancies between physical stock and digital counts during audits',
    ],
    workflowSteps: [
      { step: 1, title: 'Purchase Requisition', description: 'System auto-generates stock replenishment orders based on sales velocity.' },
      { step: 2, title: 'Inward Inspection', description: 'Warehouse scans received items, assigns batch numbers, and verifies against PO.' },
      { step: 3, title: 'Branch Distribution', description: 'Stock transfer requests routed and verified with digital dispatch notes.' },
      { step: 4, title: 'Continuous Depletion', description: 'Sales at counters instantly deduct stock from respective branch registers.' },
    ],
    benefits: [
      { title: 'Zero Spoilage', description: 'Batch alerts prevent expired items from sitting unnoticed on warehouse shelves.' },
      { title: 'Optimized Capital', description: 'Avoid over-ordering slow-moving goods with automated stock analytics.' },
      { title: 'Multi-Location Sync', description: 'Know exact inventory in every branch without making phone calls.' },
    ],
    mockupData: {
      title: 'TaskSathi Warehouse & Batch Inventory',
      type: 'erp',
      metrics: [
        { label: 'Total Tracked SKUs', value: '3,840 Items', change: 'Across 4 hubs', isPositive: true },
        { label: 'Low Stock Alerts', value: '7 Products', change: 'PO Generated', isPositive: false },
        { label: 'Pending Transfers', value: '3 Dispatches', change: 'In Transit', isPositive: true },
        { label: 'Inventory Turnover', value: '4.8x / Year', change: '+0.4x', isPositive: true },
      ],
      recentActivities: [
        { id: 'INV-1', user: 'Central Store (Nabin)', action: 'Dispatched 200 units to Pokhara Branch', time: '25m ago', status: 'In Transit' },
        { id: 'INV-2', user: 'System Alert', action: 'Low stock warning: SKU-8812 (Only 14 left)', time: '50m ago', status: 'Alert' },
        { id: 'INV-3', user: 'Quality Lead', action: 'Inspected Batch #B-994 (Pharma Grade)', time: '2h ago', status: 'Passed' },
      ],
      tableHeaders: ['SKU / Item Name', 'Warehouse', 'Current Stock', 'Reorder Level', 'Batch Expiry'],
      tableRows: [
        ['Basmati Rice Premium 25kg', 'Central Hub (Kathmandu)', '420 Bags', '100 Bags', '2028-02-15'],
        ['Sunflower Oil 5L Jar', 'Biratnagar Depot', '180 Jars', '50 Jars', '2027-10-30'],
        ['Organic Green Tea 100g', 'Pokhara Branch', '38 Packets', '40 Packets', '2027-06-12'],
        ['Wheat Flour 10kg', 'Central Hub (Kathmandu)', '85 Bags', '80 Bags', '2027-01-20'],
      ],
    },
    pricingPlaceholder: {
      model: 'Scale-based Deployment',
      note: 'Includes multi-warehouse configuration and barcode label printer templates.',
      featuresIncluded: [
        'Unlimited SKU catalog and barcode generation',
        'Batch & expiry tracking module',
        'Stock transfer and GRN verification flows',
        'Integration with TaskSathi POS and ERP',
      ],
    },
    faqs: [
      { question: 'Can we print custom barcode sticker labels directly from the inventory system?', answer: 'Yes. The system includes a built-in barcode label designer compatible with standard thermal barcode sticker printers.' },
    ],
    relatedServices: ['inventory-management', 'pos-software', 'erp-systems'],
  },

  // 6. TaskSathi HR
  {
    id: 'sathi-hr',
    slug: 'tasksathi-hr',
    title: 'TaskSathi HR & Payroll',
    tagline: 'Staff attendance, leave management, and automated salary computation',
    description:
      'Simplify human resource operations with biometric machine integration, employee self-service leave requests, PF/CIT tax deductions, and automated salary slip generation.',
    category: 'Human Resources',
    iconName: 'Briefcase',
    badge: 'Coming Soon',
    status: 'Coming Soon',
    features: [
      'Biometric fingerprint/facial recognition attendance sync',
      'Employee self-service portal for leave applications and approval workflows',
      'Automated Nepal Social Security Fund (SSF), PF, CIT, and tax bracket calculations',
      'Single-click bulk salary bank transfer file generation',
      'Employee document vault (contracts, citizenship scans, performance reviews)',
      'Departmental staffing analytics and overtime hour tracking',
    ],
    problemsSolved: [
      'Eliminates manual calculation of attendance hours, late penalties, and overtime',
      'Automates complex statutory deductions (SSF, CIT, PF, Income Tax)',
      'Provides employees with direct mobile access to their salary slips and leave balances',
      'Replaces paper leave application forms with instant manager approval notifications',
    ],
    workflowSteps: [
      { step: 1, title: 'Attendance Capture', description: 'Biometric terminals or mobile geo-punch capture employee check-in times.' },
      { step: 2, title: 'Leave & Shift Review', description: 'Approved leaves and shifts automatically reconcile against monthly timesheets.' },
      { step: 3, title: 'Payroll Calculation', description: 'Engine computes gross pay, deductions (SSF/Tax), allowances, and net salaries.' },
      { step: 4, title: 'Salary Slip & Payout', description: 'Employees receive digital salary slips; export bank transfer file for payroll disbursement.' },
    ],
    benefits: [
      { title: '1-Click Monthly Payroll', description: 'Reduce payroll computation time from 3 days to under 15 minutes.' },
      { title: 'Statutory Compliance', description: 'Always adhere to local labor regulations and tax withholding brackets.' },
      { title: 'Transparent Records', description: 'Employees view their real-time leave balances and attendance histories directly.' },
    ],
    mockupData: {
      title: 'TaskSathi HR & Payroll Operations',
      type: 'hr',
      metrics: [
        { label: 'Active Employees', value: '84 Staff', change: 'Across 3 offices', isPositive: true },
        { label: "Today's Attendance", value: '96.4%', change: '3 on Approved Leave', isPositive: true },
        { label: 'Pending Leave Requests', value: '2 Requests', change: 'Awaiting Manager', isPositive: false },
        { label: 'Monthly Payroll Total', value: 'NPR 3.42M', change: 'Ready for Approval', isPositive: true },
      ],
      recentActivities: [
        { id: 'HR-1', user: 'Sunil Bajracharya', action: 'Requested 2 days Casual Leave (Medical)', time: '30m ago', status: 'Pending' },
        { id: 'HR-2', user: 'System Job', action: 'Synced Biometric Machine #BM-01 (Kathmandu HQ)', time: '1h ago', status: 'Synced' },
        { id: 'HR-3', user: 'HR Manager', action: 'Approved Timesheet for Shrawan 2083', time: '3h ago', status: 'Approved' },
      ],
      tableHeaders: ['Employee Name', 'Department', 'Designation', 'Attendance', 'Status'],
      tableRows: [
        ['Rajesh K. Shrestha', 'Engineering', 'Senior Developer', '26 / 26 Days', 'Active'],
        ['Anju Tamang', 'Customer Support', 'Support Specialist', '25 / 26 Days', 'Active'],
        ['Dipendra Karki', 'Operations', 'Warehouse Lead', '24 / 26 Days', 'On Leave'],
        ['Manita Maharjan', 'Finance', 'Junior Accountant', '26 / 26 Days', 'Active'],
      ],
    },
    pricingPlaceholder: {
      model: 'Per-Employee / Monthly or Annual Plan',
      note: 'Includes biometric device integration and custom salary structure setup.',
      featuresIncluded: [
        'Employee database and document management',
        'Biometric attendance sync integration',
        'Nepal tax and SSF deduction algorithms',
        'Digital PDF salary slip generator',
      ],
    },
    faqs: [
      { question: 'Can the HR system connect with ZKTeco or Realtime biometric attendance machines?', answer: 'Yes. We support automated real-time data pulling from all standard ZKTeco and network biometric attendance devices.' },
    ],
    relatedServices: ['erp-systems', 'custom-software'],
  },

  // 7. TaskSathi Hospital
  {
    id: 'sathi-med',
    slug: 'tasksathi-hospital',
    title: 'TaskSathi Hospital (HMS)',
    tagline: 'Comprehensive clinical operations, OPD queues, and lab management',
    description:
      'A connected clinical platform linking patient OPD registration, electronic doctor prescriptions, pathology laboratory reporting, inpatient ward billing, and pharmacy stock.',
    category: 'Healthcare Technology',
    iconName: 'Stethoscope',
    badge: 'Enterprise Ready',
    status: 'Available on Request',
    features: [
      'Digital OPD token queue and doctor consultation schedule management',
      'Electronic Health Records (EHR) with patient medical history archives',
      'Pathology lab machine interfacing and automated test result reporting',
      'IPD ward bed allocation, nursing daily charts, and vitals logging',
      'Hospital pharmacy POS with drug interaction and expiry alerts',
      'Insurance and social health security (Swasthya Bima) billing support',
    ],
    problemsSolved: [
      'Cuts long patient queues at reception through automated token screens',
      'Prevents loss of previous diagnostic records and handwritten prescription misreads',
      'Consolidates doctor charges, lab tests, and pharmacy bills into a single invoice',
      'Eliminates duplicate manual typing of blood analyzer test results',
    ],
    workflowSteps: [
      { step: 1, title: 'Patient Registration', description: 'Reception issues patient card and digital OPD token for designated specialist.' },
      { step: 2, title: 'Doctor Consultation', description: 'Doctor enters electronic prescription, notes diagnosis, and orders lab tests.' },
      { step: 3, title: 'Lab & Diagnostic Sync', description: 'Lab processes samples and enters results; doctor sees report instantly on screen.' },
      { step: 4, title: 'Unified Billing', description: 'Patient settles single consolidated bill at pharmacy or discharge counter.' },
    ],
    benefits: [
      { title: 'Zero Lost Medical Records', description: 'Complete diagnostic histories accessible in seconds during emergencies.' },
      { title: 'Faster Patient Care', description: 'Digital queues and instant lab syncing cut patient waiting times significantly.' },
      { title: 'Consolidated Cash Flow', description: 'Total revenue transparency across OPD, IPD, Lab, and Pharmacy counters.' },
    ],
    mockupData: {
      title: 'TaskSathi Clinical Command Center',
      type: 'hms',
      metrics: [
        { label: "Today's OPD Patients", value: '248 Registered', change: '6 Specialists Active', isPositive: true },
        { label: 'IPD Bed Occupancy', value: '42 / 50 Beds', change: '84% Capacity', isPositive: true },
        { label: 'Pending Lab Reports', value: '14 Tests', change: '4 Critical flagged', isPositive: false },
        { label: 'Pharmacy Daily Billing', value: 'NPR 312,400', change: '+11.2%', isPositive: true },
      ],
      recentActivities: [
        { id: 'HMS-1', user: 'Lab Tech (Suman)', action: 'Uploaded CBC & Lipid Profile for Patient #P-9021', time: '8m ago', status: 'Completed' },
        { id: 'HMS-2', user: 'Dr. A. Sharma', action: 'Completed consultation for Token #OPD-42', time: '15m ago', status: 'Completed' },
        { id: 'HMS-3', user: 'Ward Nurse (Rina)', action: 'Updated Vitals Chart for Bed #IPD-12', time: '40m ago', status: 'Updated' },
      ],
      tableHeaders: ['Patient ID / Name', 'Department', 'Assigned Doctor', 'Status', 'Room / Bed'],
      tableRows: [
        ['#P-9021 (Ram B. Thapa)', 'Cardiology', 'Dr. S. K. Joshi', 'In Consultation', 'Room 104'],
        ['#P-9020 (Sita Gurung)', 'Gynecology', 'Dr. P. Gautam', 'Lab Pending', 'Waiting Bay'],
        ['#P-9019 (Bishal KC)', 'Orthopedics', 'Dr. R. Shrestha', 'Admitted', 'Bed #IPD-08'],
        ['#P-9018 (Kabita Rai)', 'General Medicine', 'Dr. A. Sharma', 'Billed & Cleared', 'Discharged'],
      ],
    },
    pricingPlaceholder: {
      model: 'Custom Hospital Tier Deployment',
      note: 'Engineered based on bed count, department modules (OPD, IPD, Lab, Pharmacy), and lab equipment interfacing.',
      featuresIncluded: [
        'Complete hospital management software deployment',
        'Laboratory test parameter customization & normal ranges',
        'Staff role configuration (Doctors, Nurses, Reception, Lab, Billing)',
        '24/7 dedicated hospital emergency technical support',
      ],
    },
    faqs: [
      { question: 'Does the hospital software support government health insurance (Swasthya Bima)?', answer: 'Yes. Our billing module includes dedicated claim submission tracking and item categorization compliant with Nepal Health Insurance Board requirements.' },
    ],
    relatedServices: ['hospital-management', 'custom-software'],
  },

  // 8. TaskSathi School
  {
    id: 'sathi-edu',
    slug: 'tasksathi-school',
    title: 'TaskSathi School Cloud',
    tagline: 'Modern school, college, and academic administration platform',
    description:
      'Unify student admissions, monthly fee billing with SMS alerts, exam marksheet generation, teacher attendance, and parent mobile communications.',
    category: 'Education Technology',
    iconName: 'GraduationCap',
    badge: 'Available',
    status: 'Available on Request',
    features: [
      'Student admissions, digital enrollment files, and alumni records',
      'Automated monthly fee generation, scholarship quotas, and online wallet payments',
      'Automated SMS notices for fee dues, student attendance, and emergency notices',
      'Exam grading engine supporting custom GPA formats and printable report cards',
      'Teacher lesson plan manager, homework assignments, and gradebook portal',
      'School bus fleet GPS tracking and parent arrival notifications',
    ],
    problemsSolved: [
      'Eliminates manual fee collection registers and overdue payment follow-up friction',
      'Saves weeks of teacher overtime during term exam report card preparation',
      'Replaces paper notice diaries with direct SMS and mobile app broadcasts to parents',
      'Provides the principal with live academic, attendance, and financial statistics',
    ],
    workflowSteps: [
      { step: 1, title: 'Admissions & Enrollment', description: 'Student profile created, class section assigned, and fee structure mapped.' },
      { step: 2, title: 'Daily Attendance', description: 'Teachers mark attendance via app or biometric; absent alerts auto-SMS parents.' },
      { step: 3, title: 'Fee Recovery', description: 'Monthly fee invoices generated; parents receive SMS reminders and pay via Khalti/eSewa.' },
      { step: 4, title: 'Exam Grade Computation', description: 'Teachers enter marks; system calculates GPAs and formats printable marksheet cards.' },
    ],
    benefits: [
      { title: '40% Faster Fee Recovery', description: 'Timely digital reminders ensure parents pay monthly school fees without delay.' },
      { title: 'Instant Report Cards', description: 'Print standardized terminal mark sheets for the entire school in minutes.' },
      { title: 'Strong Parent Engagement', description: 'Keep parents informed about homework, exams, and bus schedules seamlessly.' },
    ],
    mockupData: {
      title: 'TaskSathi Campus Administration Suite',
      type: 'school',
      metrics: [
        { label: 'Total Enrolled Students', value: '1,240 Students', change: 'Nursery to Grade XII', isPositive: true },
        { label: "Today's Attendance", value: '94.2%', change: '72 Absent (SMS Sent)', isPositive: true },
        { label: 'Monthly Fee Collection', value: '86.5%', change: 'NPR 4.8M Recovered', isPositive: true },
        { label: 'Upcoming Term Exams', value: 'Terminal II', change: 'Starts in 12 Days', isPositive: true },
      ],
      recentActivities: [
        { id: 'EDU-1', user: 'Account Section', action: 'Issued 120 Fee Receipts (eSewa & Cash)', time: '14m ago', status: 'Collected' },
        { id: 'EDU-2', user: 'Grade X Class Teacher', action: 'Finalized Terminal Exam Marksheets', time: '1h ago', status: 'Submitted' },
        { id: 'EDU-3', user: 'Principal Office', action: 'Broadcasted SMS Notice: Parents Meeting', time: '3h ago', status: 'Sent' },
      ],
      tableHeaders: ['Class & Section', 'Class Teacher', 'Strength', 'Attendance', 'Fee Clearance'],
      tableRows: [
        ['Grade X - Section A', 'Mr. B. K. Sharma', '42 Students', '97.6%', '92.4%'],
        ['Grade IX - Section B', 'Ms. P. Devkota', '38 Students', '94.7%', '88.0%'],
        ['Grade VIII - Section A', 'Mr. S. Adhikari', '40 Students', '92.5%', '85.2%'],
        ['Grade XII - Science', 'Dr. N. Regmi', '45 Students', '95.5%', '94.1%'],
      ],
    },
    pricingPlaceholder: {
      model: 'Annual Student Tier Pricing',
      note: 'Includes parent mobile portal, marksheet customizer, and SMS gateway configuration.',
      featuresIncluded: [
        'Complete academic management software suite',
        'Printable report card designer conforming to SEE / NEB guidelines',
        'Parent SMS notification gateway integration',
        'Teacher and administrative staff training sessions',
      ],
    },
    faqs: [
      { question: 'Can parents pay school fees online using eSewa or Khalti?', answer: 'Yes. Our student billing portal integrates with eSewa, Khalti, and ConnectIPS for direct, instant fee settlements with automatic digital receipt generation.' },
    ],
    relatedServices: ['school-management', 'custom-software'],
  },

  // 9. TaskSathi Restaurant
  {
    id: 'sathi-resto',
    slug: 'tasksathi-restaurant',
    title: 'TaskSathi Restaurant',
    tagline: 'Handheld waiter ordering, Kitchen Display Systems (KDS), and recipe costing',
    description:
      'Fast-paced food service software built for restaurants, cafés, bakeries, and bars. Includes tablet waiter ordering, visual table status, kitchen displays, and recipe ingredient tracking.',
    category: 'Hospitality & Dining',
    iconName: 'Utensils',
    badge: 'Popular',
    status: 'Available on Request',
    features: [
      'Visual floor layout with color-coded table occupancy (Occupied, Billed, Vacant)',
      'Mobile/Tablet waiter ordering sending instant digital KOTs to the kitchen',
      'Kitchen Display System (KDS) with order preparation timers and allergy notes',
      'Recipe ingredient inventory deduction on every plate served',
      'Split billing by item, equal split, or custom amounts in seconds',
      'Daily food cost percentage reports and high-margin dish insights',
    ],
    problemsSolved: [
      'Eliminates lost handwritten KOT paper tickets and miscommunicated order notes',
      'Reduces waiter walking distance and speeds up table turnover during busy dinner rushes',
      'Prevents food cost margin shrinkage through accurate raw ingredient depletion',
      'Handles complex group bill splits quickly without cashier confusion',
    ],
    workflowSteps: [
      { step: 1, title: 'Table Seating', description: 'Host marks table occupied and assigns waiter on visual floor layout.' },
      { step: 2, title: 'Handheld Order Entry', description: 'Waiter enters guest items on mobile tablet; KOT prints in kitchen instantly.' },
      { step: 3, title: 'Kitchen Prep', description: 'Chef views order queue on touchscreen display and marks dishes ready.' },
      { step: 4, title: 'Settlement & Feedback', description: 'Cashier prints tax bill, splits payment if requested, and clears table.' },
    ],
    benefits: [
      { title: '25% Faster Table Turnover', description: 'Immediate digital order transmission cuts food wait times noticeably.' },
      { title: 'Zero Order Mistakes', description: 'Chefs receive legible digital tickets with exact preparation modifiers.' },
      { title: 'Controlled Food Costs', description: 'Know the exact profit margin of every item on your menu.' },
    ],
    mockupData: {
      title: 'TaskSathi Dining & Floor Operations',
      type: 'pos',
      metrics: [
        { label: "Today's Restaurant Sales", value: 'NPR 142,600', change: '88 Tables Served', isPositive: true },
        { label: 'Active Floor Tables', value: '14 / 20 Occupied', change: '70% Capacity', isPositive: true },
        { label: 'Avg Food Prep Time', value: '14 Minutes', change: '-3m vs target', isPositive: true },
        { label: 'Top Selling Item', value: 'Himalayan Momo (94 Plates)', change: 'High Margin', isPositive: true },
      ],
      recentActivities: [
        { id: 'REST-1', user: 'Waiter (Ramesh)', action: 'Punched KOT #K-218 for Table #08 (4 Items)', time: '3m ago', status: 'Sent' },
        { id: 'REST-2', user: 'Kitchen Display', action: 'Chef marked Table #04 order READY for pickup', time: '6m ago', status: 'Ready' },
        { id: 'REST-3', user: 'Cashier (Prakash)', action: 'Settled Bill #RB-482 (NPR 4,120 - Fonepay QR)', time: '12m ago', status: 'Paid' },
      ],
      tableHeaders: ['Table #', 'Waiter', 'Guests', 'Active Order Value', 'Elapsed Time'],
      tableRows: [
        ['Table 04 (Indoor)', 'Ramesh Thapa', '4 Guests', 'NPR 3,450', '28 Mins'],
        ['Table 08 (Terrace)', 'Bikash GC', '2 Guests', 'NPR 1,820', '14 Mins'],
        ['Table 12 (Garden)', 'Anita KC', '6 Guests', 'NPR 7,900', '42 Mins'],
        ['Table 02 (Bar)', 'Ramesh Thapa', '2 Guests', 'NPR 1,200', '8 Mins'],
      ],
    },
    pricingPlaceholder: {
      model: 'Outlet / Station Deployment',
      note: 'Includes floor map setup, menu digital upload, and waiter tablet training.',
      featuresIncluded: [
        'Visual floor plan and table management system',
        'Waiter mobile ordering application',
        'Kitchen Display System (KDS) & KOT thermal printer routing',
        'Recipe costing and ingredient inventory tracking',
      ],
    },
    faqs: [
      { question: 'Can the kitchen have multiple separate ticket printers for the kitchen and the bar?', answer: 'Yes. Food items automatically route to the kitchen printer while drinks and cocktails route exclusively to the bar printer.' },
    ],
    relatedServices: ['restaurant-management', 'pos-software', 'inventory-management'],
  },
];
