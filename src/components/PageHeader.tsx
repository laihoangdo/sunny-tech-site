import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  badgeIcon?: React.ReactNode;
  title: string;
  subtitle: string;
  currentPageTitle: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  badgeIcon,
  title,
  subtitle,
  currentPageTitle,
}) => {
  return (
    <div className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-[#FFFDF0] via-white to-slate-50 dark:from-[#060F1E] dark:via-[#09172E] dark:to-[#060F1E] border-b border-slate-200/70 dark:border-slate-800 transition-colors">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FFC400]/10 dark:bg-[#FFC400]/5 blur-3xl rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <li>
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 hover:text-[#102D63] dark:hover:text-[#FFC400] transition-colors"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Trang chủ</span>
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
            </li>
            <li className="font-semibold text-[#102D63] dark:text-white" aria-current="page">
              {currentPageTitle}
            </li>
          </ol>
        </nav>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF7D8] dark:bg-[#102D63] border border-[#FFC400]/40 text-xs font-bold text-[#b88400] dark:text-[#FFC400] mb-4 shadow-2xs">
          {badgeIcon}
          <span>{badge}</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102D63] dark:text-white tracking-tight leading-tight max-w-4xl">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
