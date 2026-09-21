import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { SunnyTechLogo } from './SunnyTechLogo';
import { Menu, X, Phone, ArrowRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Trang chủ', path: '/' },
    { label: 'Giới thiệu', path: '/gioi-thieu' },
    { label: 'Giải pháp', path: '/giai-phap' },
    { label: 'Quy trình', path: '/quy-trinh' },
    { label: 'Năng lực', path: '/nang-luc' },
    { label: 'Dự án', path: '/du-an' },
    { label: 'Dự toán', path: '/du-toan' },
    { label: 'Liên hệ', path: '/lien-he' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer upon route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleCtaClick = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      navigate('/lien-he');
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#071328]/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800 py-2.5'
          : 'bg-white/90 dark:bg-[#071328]/90 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          id="nav-logo-link"
          className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC400] rounded-lg p-1"
          aria-label="Sunny Tech - Về trang chủ"
        >
          <SunnyTechLogo size={isScrolled ? 'sm' : 'md'} />
        </Link>

        {/* Desktop Navigation Links with Animated Route Pill */}
        <nav
          id="desktop-nav"
          className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-slate-50/90 dark:bg-slate-900/90 p-1 rounded-full border border-slate-200/70 dark:border-slate-800"
          aria-label="Điều hướng chính"
        >
          {navLinks.map((link) => {
            const isActive =
              link.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.path);

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3.5 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-colors cursor-pointer outline-none ${
                  isActive
                    ? 'text-[#102D63] dark:text-[#FFC400] font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#102D63] dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-[#FFF7D8] dark:bg-[#102D63] border border-[#FFC400]/70 rounded-full -z-10 shadow-xs"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f5b000]" />
                  )}
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Action Group */}
        <div className="hidden sm:flex items-center gap-3 xl:gap-4">
          {/* Theme Toggle Button (Desktop) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-amber-300 hover:border-[#FFC400] transition-colors cursor-pointer"
            aria-label={theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
            title={theme === 'dark' ? 'Giao diện sáng' : 'Giao diện tối'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#FFC400]" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <a
            href="tel:0972268792"
            id="nav-hotline-btn"
            className="hidden xl:inline-flex items-center gap-2 text-xs font-bold text-[#102D63] dark:text-[#FFC400] bg-[#FFF7D8] dark:bg-[#102D63] px-3 py-1.5 rounded-full border border-[#FFC400]/40 hover:bg-[#ffecb3] dark:hover:bg-[#193F87] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#f5b000]" />
            <span>Hotline: 0972 268 792</span>
          </a>

          <button
            id="nav-consult-cta"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-[#102D63] bg-[#FFC400] hover:bg-[#f5b000] active:scale-95 shadow-sm hover:shadow transition-all rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFC400]"
          >
            <span>Tư vấn giải pháp</span>
            <ArrowRight className="w-4 h-4 text-[#102D63]" />
          </button>
        </div>

        {/* Mobile Menu & Theme Toggle Button */}
        <div className="flex items-center sm:hidden gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-amber-300"
            aria-label="Đổi giao diện"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#FFC400]" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#102D63] dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer focus:outline-none"
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden bg-white dark:bg-[#071328] border-b border-slate-200 dark:border-slate-800 px-5 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-left px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'text-[#102D63] dark:text-[#FFC400] bg-[#FFF7D8] dark:bg-[#102D63] font-bold border border-[#FFC400]/50'
                      : 'text-slate-800 dark:text-slate-200 hover:text-[#102D63] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#f5b000]" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
            <div className="flex items-center justify-between px-2 py-1 text-xs text-slate-600 dark:text-slate-300">
              <span>Chế độ giao diện:</span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 font-bold text-[#102D63] dark:text-[#FFC400] border border-slate-200 dark:border-slate-700"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5" />
                    <span>Giao diện Tối</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5" />
                    <span>Giao diện Sáng</span>
                  </>
                )}
              </button>
            </div>

            <a
              href="tel:0972268792"
              className="flex items-center justify-center gap-2 py-2 text-sm font-bold text-[#102D63] dark:text-[#FFC400] bg-[#FFF7D8] dark:bg-[#102D63] rounded-xl"
            >
              <Phone className="w-4 h-4 text-[#f5b000]" />
              <span>Hotline kỹ thuật: 0972 268 792</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleCtaClick();
              }}
              className="w-full py-3 text-center text-sm font-bold text-[#102D63] bg-[#FFC400] hover:bg-[#f5b000] rounded-xl shadow cursor-pointer"
            >
              Tư vấn giải pháp ngay
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
