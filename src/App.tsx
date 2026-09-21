import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { SEOHead } from './components/SEOHead';
import { getRouterBasename } from './utils/router';

// Modular Page Components
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ProcessPage } from './pages/ProcessPage';
import { TechStackPage } from './pages/TechStackPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { EstimatorPage } from './pages/EstimatorPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { MessageSquare } from 'lucide-react';

function AppContent() {
  const navigate = useNavigate();
  const [selectedSolutionInterest, setSelectedSolutionInterest] = useState<string>('');
  const [estimateMessage, setEstimateMessage] = useState<string>('');

  const handleOpenConsultation = () => {
    navigate('/lien-he');
  };

  const handleSelectSolutionForContact = (solutionTitle: string) => {
    setSelectedSolutionInterest(solutionTitle);
    navigate('/lien-he');
  };

  const handleApplyEstimateToContact = (data: {
    modules: string[];
    scale: string;
    time: string;
  }) => {
    const generatedMsg = `[Yêu cầu dự toán từ công cụ]\n- Quy mô: ${data.scale}\n- Các phân hệ: ${data.modules.join(
      ', '
    )}\n- Dự kiến thời gian: ${data.time}\n\nKính nhờ chuyên gia Sunny Tech tư vấn lộ trình chi tiết và báo giá sơ bộ.`;

    setSelectedSolutionInterest(data.modules[0] || 'Tư vấn kiến trúc tổng thể');
    setEstimateMessage(generatedMsg);
    navigate('/lien-he');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#060F1E] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-[#FFC400] selection:text-[#102D63] transition-colors duration-300">
      {/* Dynamic SEO Head with react-helmet-async based on current URL */}
      <SEOHead />
      <ScrollToTop />

      {/* Global Navigation Bar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Routed Content */}
      <main className="flex-1">
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <HomePage
                onSelectSolutionForContact={handleSelectSolutionForContact}
                onApplyEstimateToContact={handleApplyEstimateToContact}
                initialSolution={selectedSolutionInterest}
                initialMessage={estimateMessage}
              />
            }
          />

          {/* About Route & English alias */}
          <Route path="/gioi-thieu" element={<AboutPage />} />
          <Route path="/about" element={<Navigate to="/gioi-thieu" replace />} />

          {/* Solutions Route & English alias */}
          <Route
            path="/giai-phap"
            element={
              <SolutionsPage
                onSelectSolutionForContact={handleSelectSolutionForContact}
              />
            }
          />
          <Route path="/solutions" element={<Navigate to="/giai-phap" replace />} />

          {/* Process Route & English alias */}
          <Route path="/quy-trinh" element={<ProcessPage />} />
          <Route path="/process" element={<Navigate to="/quy-trinh" replace />} />

          {/* Tech Stack Route & English alias */}
          <Route path="/nang-luc" element={<TechStackPage />} />
          <Route path="/tech-stack" element={<Navigate to="/nang-luc" replace />} />

          {/* Case Studies Route & English alias */}
          <Route path="/du-an" element={<CaseStudiesPage />} />
          <Route path="/case-studies" element={<Navigate to="/du-an" replace />} />

          {/* Estimator Route & English alias */}
          <Route
            path="/du-toan"
            element={
              <EstimatorPage
                onApplyEstimateToContact={handleApplyEstimateToContact}
              />
            }
          />
          <Route path="/estimator" element={<Navigate to="/du-toan" replace />} />

          {/* Contact Route & English alias */}
          <Route
            path="/lien-he"
            element={
              <ContactPage
                initialSolution={selectedSolutionInterest}
                initialMessage={estimateMessage}
              />
            }
          />
          <Route path="/contact" element={<Navigate to="/lien-he" replace />} />

          {/* 404 Fallback Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Quick Action Consultation Widget */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <button
          onClick={handleOpenConsultation}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#102D63] dark:bg-[#FFC400] text-white dark:text-[#102D63] shadow-xl hover:bg-[#091D43] dark:hover:bg-[#f5b000] border border-white/20 dark:border-[#FFC400]/40 transition-all cursor-pointer hover:scale-105 active:scale-95"
          aria-label="Tư vấn nhanh"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFC400] dark:bg-[#102D63] animate-pulse" />
          <MessageSquare className="w-4 h-4 text-[#FFC400] dark:text-[#102D63]" />
          <span className="text-xs font-bold hidden sm:inline">Tư vấn trực tuyến</span>
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter basename={getRouterBasename()}>
          <AppContent />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}
