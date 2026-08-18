import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@/src/hooks/useTheme';
import { AuthProvider } from '@/src/context/AuthContext';
import { ProtectedRoute } from '@/src/components/auth/ProtectedRoute';
import { DashboardLayout } from '@/src/components/dashboard/DashboardLayout';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { ScrollToTop } from '@/src/components/layout/ScrollToTop';
import { ProjectInquiryModal } from '@/src/components/marketing/ProjectInquiryModal';
import { WhatsAppFloatingWidget } from '@/src/components/layout/WhatsAppFloatingWidget';
import { RouteLoadingProvider } from '@/src/context/RouteLoadingContext';
import { RouteTransitionWrapper } from '@/src/components/layout/RouteTransitionWrapper';
import { SkeletonScreenWrapper } from '@/src/components/layout/SkeletonScreenWrapper';
import { ServiceItem } from '@/src/types';

// Public Marketing Pages
import { HomePage } from '@/src/pages/HomePage';
import { AboutPage } from '@/src/pages/AboutPage';
import { ServicesIndexPage } from '@/src/pages/ServicesIndexPage';
import { ServiceDetailPage } from '@/src/pages/ServiceDetailPage';
import { ProductsIndexPage } from '@/src/pages/ProductsIndexPage';
import { ProductDetailPage } from '@/src/pages/ProductDetailPage';
import { IndustriesIndexPage } from '@/src/pages/IndustriesIndexPage';
import { IndustryDetailPage } from '@/src/pages/IndustryDetailPage';
import { PortfolioIndexPage } from '@/src/pages/PortfolioIndexPage';
import { CaseStudyDetailPage } from '@/src/pages/CaseStudyDetailPage';
import { PricingPage } from '@/src/pages/PricingPage';
import { ContactPage } from '@/src/pages/ContactPage';
import { RequestQuotePage } from '@/src/pages/RequestQuotePage';
import { BlogIndexPage } from '@/src/pages/BlogIndexPage';
import { BlogPostPage } from '@/src/pages/BlogPostPage';
import { CareersPage } from '@/src/pages/CareersPage';
import { NotFoundPage } from '@/src/pages/NotFoundPage';
import { Forbidden403Page } from '@/src/pages/Forbidden403Page';

// Auth Pages
import { LoginPage } from '@/src/pages/auth/LoginPage';
import { RegisterPage } from '@/src/pages/auth/RegisterPage';
import { ForgotPasswordPage } from '@/src/pages/auth/ForgotPasswordPage';
import { ResetPasswordPage } from '@/src/pages/auth/ResetPasswordPage';
import { VerifyEmailPage } from '@/src/pages/auth/VerifyEmailPage';

// Client Portal Pages
import { ClientOverviewPage } from '@/src/pages/dashboard/ClientOverviewPage';
import { ClientProjectsPage } from '@/src/pages/dashboard/ClientProjectsPage';
import { ClientProjectDetailPage } from '@/src/pages/dashboard/ClientProjectDetailPage';
import { ClientTasksPage } from '@/src/pages/dashboard/ClientTasksPage';
import { ClientMessagesPage } from '@/src/pages/dashboard/ClientMessagesPage';
import { ClientDocumentsPage } from '@/src/pages/dashboard/ClientDocumentsPage';
import { ClientInvoicesPage } from '@/src/pages/dashboard/ClientInvoicesPage';
import { ClientInvoiceDetailPage } from '@/src/pages/dashboard/ClientInvoiceDetailPage';
import { ClientSupportPage } from '@/src/pages/dashboard/ClientSupportPage';
import { ClientProfilePage } from '@/src/pages/dashboard/ClientProfilePage';
import { ClientSettingsPage } from '@/src/pages/dashboard/ClientSettingsPage';

// Admin Console Pages
import { AdminOverviewPage } from '@/src/pages/admin/AdminOverviewPage';
import { AdminLeadsPage } from '@/src/pages/admin/AdminLeadsPage';
import { AdminClientsPage } from '@/src/pages/admin/AdminClientsPage';
import { AdminProjectsPage } from '@/src/pages/admin/AdminProjectsPage';
import { AdminTasksPage } from '@/src/pages/admin/AdminTasksPage';
import { AdminServicesPage } from '@/src/pages/admin/AdminServicesPage';
import { AdminProductsPage } from '@/src/pages/admin/AdminProductsPage';
import { AdminPortfolioPage } from '@/src/pages/admin/AdminPortfolioPage';
import { AdminBlogPage } from '@/src/pages/admin/AdminBlogPage';
import { AdminInvoicesPage } from '@/src/pages/admin/AdminInvoicesPage';
import { AdminMessagesPage } from '@/src/pages/admin/AdminMessagesPage';
import { AdminSupportPage } from '@/src/pages/admin/AdminSupportPage';
import { AdminAnalyticsPage } from '@/src/pages/admin/AdminAnalyticsPage';
import { AdminUsersPage } from '@/src/pages/admin/AdminUsersPage';
import { AdminSettingsPage } from '@/src/pages/admin/AdminSettingsPage';

// Public Layout Wrapper with Header, Footer, and Inquiry Modal
const PublicLayout: React.FC<{
  children: React.ReactNode;
  onOpenInquiry: (service?: ServiceItem) => void;
}> = ({ children, onOpenInquiry }) => (
  <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#0B0F19] text-[#111827] dark:text-[#F8FAFC] transition-colors duration-200 selection:bg-blue-600 selection:text-white">
    <Navbar onOpenInquiry={() => onOpenInquiry()} />
    <main className="flex-1">{children}</main>
    <Footer onOpenInquiry={() => onOpenInquiry()} />
    <WhatsAppFloatingWidget />
  </div>
);

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenInquiry = (service?: ServiceItem) => {
    if (service) {
      setSelectedService(service);
    } else {
      setSelectedService(null);
    }
    setIsInquiryOpen(true);
  };

  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter basename="/tasksathiXYZ">
          <RouteLoadingProvider>
            <ScrollToTop />

            <RouteTransitionWrapper>
              <Routes>
                {/* ========================================================================= */}
                {/* AUTHENTICATION ROUTES (Standalone clean view) */}
                {/* ========================================================================= */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/verify-email" element={<VerifyEmailPage />} />
            <Route path="/403" element={<Forbidden403Page />} />

            {/* ========================================================================= */}
            {/* CLIENT DASHBOARD PORTAL (Protected, Client / Admin / Staff / Manager) */}
            {/* ========================================================================= */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute allowedRoles={['client', 'admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={false}>
                    <ClientOverviewPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/projects"
              element={
                <ProtectedRoute allowedRoles={['client', 'admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={false}>
                    <ClientProjectsPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/projects/:id"
              element={
                <ProtectedRoute allowedRoles={['client', 'admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={false}>
                    <ClientProjectDetailPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/tasks"
              element={
                <ProtectedRoute allowedRoles={['client', 'admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={false}>
                    <ClientTasksPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/messages"
              element={
                <ProtectedRoute allowedRoles={['client', 'admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={false}>
                    <ClientMessagesPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/documents"
              element={
                <ProtectedRoute allowedRoles={['client', 'admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={false}>
                    <ClientDocumentsPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/invoices"
              element={
                <ProtectedRoute allowedRoles={['client', 'admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={false}>
                    <ClientInvoicesPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/invoices/:id"
              element={
                <ProtectedRoute allowedRoles={['client', 'admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={false}>
                    <ClientInvoiceDetailPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/support"
              element={
                <ProtectedRoute allowedRoles={['client', 'admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={false}>
                    <ClientSupportPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/profile"
              element={
                <ProtectedRoute allowedRoles={['client', 'admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={false}>
                    <ClientProfilePage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/settings"
              element={
                <ProtectedRoute allowedRoles={['client', 'admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={false}>
                    <ClientSettingsPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            {/* ========================================================================= */}
            {/* TASK SATHI ADMIN CONSOLE (Protected, Admin / Manager / Staff Only) */}
            {/* ========================================================================= */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={['admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={true}>
                    <AdminOverviewPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/leads"
              element={
                <ProtectedRoute allowedRoles={['admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={true}>
                    <AdminLeadsPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/clients"
              element={
                <ProtectedRoute allowedRoles={['admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={true}>
                    <AdminClientsPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/projects"
              element={
                <ProtectedRoute allowedRoles={['admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={true}>
                    <AdminProjectsPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/tasks"
              element={
                <ProtectedRoute allowedRoles={['admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={true}>
                    <AdminTasksPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/services"
              element={
                <ProtectedRoute allowedRoles={['admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={true}>
                    <AdminServicesPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/products"
              element={
                <ProtectedRoute allowedRoles={['admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={true}>
                    <AdminProductsPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/portfolio"
              element={
                <ProtectedRoute allowedRoles={['admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={true}>
                    <AdminPortfolioPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/blog"
              element={
                <ProtectedRoute allowedRoles={['admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={true}>
                    <AdminBlogPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/invoices"
              element={
                <ProtectedRoute allowedRoles={['admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={true}>
                    <AdminInvoicesPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/messages"
              element={
                <ProtectedRoute allowedRoles={['admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={true}>
                    <AdminMessagesPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/support"
              element={
                <ProtectedRoute allowedRoles={['admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={true}>
                    <AdminSupportPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/analytics"
              element={
                <ProtectedRoute allowedRoles={['admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={true}>
                    <AdminAnalyticsPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute allowedRoles={['admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={true}>
                    <AdminUsersPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/settings"
              element={
                <ProtectedRoute allowedRoles={['admin', 'manager', 'staff']}>
                  <DashboardLayout isAdminMode={true}>
                    <AdminSettingsPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />

            {/* ========================================================================= */}
            {/* PUBLIC MARKETING & AGENCY ROUTES */}
            {/* ========================================================================= */}
            <Route
              path="/"
              element={
                <PublicLayout onOpenInquiry={handleOpenInquiry}>
                  <HomePage onOpenInquiry={handleOpenInquiry} />
                </PublicLayout>
              }
            />
            <Route
              path="/about"
              element={
                <PublicLayout onOpenInquiry={handleOpenInquiry}>
                  <AboutPage />
                </PublicLayout>
              }
            />
            <Route
              path="/services"
              element={
                <PublicLayout onOpenInquiry={handleOpenInquiry}>
                  <ServicesIndexPage />
                </PublicLayout>
              }
            />
            <Route
              path="/services/:slug"
              element={
                <PublicLayout onOpenInquiry={handleOpenInquiry}>
                  <ServiceDetailPage />
                </PublicLayout>
              }
            />
            <Route
              path="/products"
              element={
                <PublicLayout onOpenInquiry={handleOpenInquiry}>
                  <ProductsIndexPage />
                </PublicLayout>
              }
            />
            <Route
              path="/products/:slug"
              element={
                <PublicLayout onOpenInquiry={handleOpenInquiry}>
                  <ProductDetailPage />
                </PublicLayout>
              }
            />
            <Route
              path="/industries"
              element={
                <PublicLayout onOpenInquiry={handleOpenInquiry}>
                  <IndustriesIndexPage />
                </PublicLayout>
              }
            />
            <Route
              path="/industries/:slug"
              element={
                <PublicLayout onOpenInquiry={handleOpenInquiry}>
                  <IndustryDetailPage />
                </PublicLayout>
              }
            />
            <Route
              path="/portfolio"
              element={
                <PublicLayout onOpenInquiry={handleOpenInquiry}>
                  <PortfolioIndexPage />
                </PublicLayout>
              }
            />
            <Route
              path="/portfolio/:slug"
              element={
                <PublicLayout onOpenInquiry={handleOpenInquiry}>
                  <CaseStudyDetailPage />
                </PublicLayout>
              }
            />
            <Route
              path="/case-studies"
              element={
                <PublicLayout onOpenInquiry={handleOpenInquiry}>
                  <PortfolioIndexPage />
                </PublicLayout>
              }
            />
            <Route
              path="/case-studies/:slug"
              element={
                <PublicLayout onOpenInquiry={handleOpenInquiry}>
                  <CaseStudyDetailPage />
                </PublicLayout>
              }
            />
            <Route
              path="/pricing"
              element={
                <PublicLayout onOpenInquiry={handleOpenInquiry}>
                  <PricingPage />
                </PublicLayout>
              }
            />
            <Route
              path="/contact"
              element={
                <PublicLayout onOpenInquiry={handleOpenInquiry}>
                  <ContactPage />
                </PublicLayout>
              }
            />
            <Route
              path="/request-quote"
              element={
                <PublicLayout onOpenInquiry={handleOpenInquiry}>
                  <RequestQuotePage />
                </PublicLayout>
              }
            />
            <Route
              path="/quote"
              element={
                <PublicLayout onOpenInquiry={handleOpenInquiry}>
                  <RequestQuotePage />
                </PublicLayout>
              }
            />
            <Route
              path="/blog"
              element={
                <PublicLayout onOpenInquiry={handleOpenInquiry}>
                  <BlogIndexPage />
                </PublicLayout>
              }
            />
            <Route
              path="/blog/:slug"
              element={
                <PublicLayout onOpenInquiry={handleOpenInquiry}>
                  <BlogPostPage />
                </PublicLayout>
              }
            />
            <Route
              path="/careers"
              element={
                <PublicLayout onOpenInquiry={handleOpenInquiry}>
                  <CareersPage />
                </PublicLayout>
              }
            />

            {/* 404 Catch-All */}
            <Route
              path="*"
              element={
                <PublicLayout onOpenInquiry={handleOpenInquiry}>
                  <NotFoundPage />
                </PublicLayout>
              }
            />
          </Routes>
        </RouteTransitionWrapper>

        {/* Global Quick Project Inquiry Modal */}
        <ProjectInquiryModal
          isOpen={isInquiryOpen}
          onClose={() => setIsInquiryOpen(false)}
          initialService={selectedService}
        />
      </RouteLoadingProvider>
    </BrowserRouter>
  </AuthProvider>
</ThemeProvider>
  );
}
