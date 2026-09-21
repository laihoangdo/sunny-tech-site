import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SOLUTIONS_DATA } from '../data';
import { Solution } from '../types';
import {
  Globe,
  Database,
  Map,
  Layers,
  Cpu,
  ShieldCheck,
  Radio,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  TrendingUp,
  Layers3,
} from 'lucide-react';

interface HomeSolutionsSlideProps {
  onSelectSolutionForContact: (solutionTitle: string) => void;
}

export const HomeSolutionsSlide: React.FC<HomeSolutionsSlideProps> = ({
  onSelectSolutionForContact,
}) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const solutions = SOLUTIONS_DATA;
  const total = solutions.length;
  const current: Solution = solutions[currentIndex];

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleSelect = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  useEffect(() => {
    if (isAutoPlaying && !isHovered) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 6500);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isAutoPlaying, isHovered, handleNext]);

  const renderIcon = (iconName: string) => {
    const props = { className: 'w-7 h-7 text-[#102D63] dark:text-[#FFC400]' };
    switch (iconName) {
      case 'Globe':
        return <Globe {...props} />;
      case 'Database':
        return <Database {...props} />;
      case 'Map':
        return <Map {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Radio':
        return <Radio {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      id="giai-phap-slide"
      aria-label="Slide các giải pháp công nghệ mũi nhọn"
      className="py-20 lg:py-24 bg-white dark:bg-[#060F1E] border-b border-slate-200/80 dark:border-slate-800 transition-colors relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b88400] dark:text-[#FFC400] bg-[#FFF7D8] dark:bg-[#102D63] px-3.5 py-1.5 rounded-full border border-[#FFC400]/40">
              <Layers3 className="w-3.5 h-3.5" />
              <span>Hệ Thống Giải Pháp Mũi Nhọn</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102D63] dark:text-white tracking-tight leading-tight">
              Công Nghệ May Đo Theo Nhu Cầu Tăng Trưởng
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Khám phá các trụ cột giải pháp công nghệ cốt lõi giúp các doanh nghiệp bứt phá năng suất và tối ưu hiệu quả đầu tư.
            </p>
          </div>

          {/* Slide Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => setIsAutoPlaying((prev) => !prev)}
              aria-label={isAutoPlaying ? 'Tạm dừng tự động chuyển' : 'Bật tự động chuyển'}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0A172D] text-slate-600 dark:text-slate-300 hover:text-[#102D63] dark:hover:text-[#FFC400] hover:border-[#FFC400] transition-colors"
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              onClick={handlePrev}
              aria-label="Giải pháp trước"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0A172D] text-slate-700 dark:text-slate-200 hover:bg-[#FFF7D8] dark:hover:bg-[#102D63] hover:text-[#102D63] dark:hover:text-[#FFC400] hover:border-[#FFC400] transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="text-xs font-bold text-slate-500 dark:text-slate-400 px-2 select-none">
              <span className="text-[#102D63] dark:text-[#FFC400] font-black">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>{' '}
              / {String(total).padStart(2, '0')}
            </div>

            <button
              onClick={handleNext}
              aria-label="Giải pháp tiếp theo"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0A172D] text-slate-700 dark:text-slate-200 hover:bg-[#FFF7D8] dark:hover:bg-[#102D63] hover:text-[#102D63] dark:hover:text-[#FFC400] hover:border-[#FFC400] transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {solutions.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer border ${
                  isActive
                    ? 'bg-[#102D63] dark:bg-[#FFC400] text-white dark:text-[#102D63] border-transparent shadow-md'
                    : 'bg-slate-100/80 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-800 hover:bg-slate-200/70 dark:hover:bg-slate-800 hover:border-[#FFC400]'
                }`}
              >
                <span>{item.categoryLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Active Solution Slide Card */}
        <div className="relative min-h-[460px] sm:min-h-[420px] lg:min-h-[380px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-[#FFC400] bg-gradient-to-br from-slate-50/90 to-white dark:from-[#0A172D] dark:to-[#071328] p-6 sm:p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Information */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF7D8] dark:bg-[#102D63] border border-[#FFC400]/50 flex items-center justify-center shrink-0 hover:scale-110 transition-transform duration-300 shadow-xs">
                      {renderIcon(current.iconName)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#b88400] dark:text-[#FFC400] uppercase tracking-wider">
                        {current.categoryLabel}
                      </span>
                      {current.badge && (
                        <span className="ml-2 inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FFC400]/20 text-[#102D63] dark:text-[#FFC400] border border-[#FFC400]/40">
                          {current.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#102D63] dark:text-white tracking-tight">
                      {current.title}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-[#b88400] dark:text-[#FFC400] mt-1.5">
                      {current.tagline}
                    </p>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {current.shortDesc}
                  </p>

                  {/* Key Features (Top 3) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.features.slice(0, 4).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => navigate('/giai-phap')}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#102D63] hover:bg-[#1a4491] dark:bg-[#FFC400] dark:text-[#102D63] dark:hover:bg-[#ffcd2e] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
                    >
                      <span>Xem Chi Tiết Kiến Trúc &amp; Báo Giá</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => {
                        onSelectSolutionForContact(current.title);
                        navigate('/lien-he');
                      }}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-[#071328] border border-slate-200 dark:border-slate-700 hover:border-[#FFC400] hover:bg-[#FFF7D8] dark:hover:bg-[#102D63] hover:text-[#102D63] dark:hover:text-[#FFC400] hover:scale-105 active:scale-95 transition-all duration-200"
                    >
                      <span>Tư Vấn Giải Pháp Này</span>
                    </button>
                  </div>
                </div>

                {/* Right Highlight Box: Metric & Tech Stack */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  {/* Metric Card */}
                  <div className="p-6 rounded-2xl bg-[#FFF7D8]/80 dark:bg-[#102D63]/60 border border-[#FFC400]/40 space-y-3 shadow-xs hover:shadow-md hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102D63] dark:text-[#FFC400]">
                      <TrendingUp className="w-4 h-4" />
                      <span>Hiệu Quả Doanh Nghiệp Cam Kết</span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#102D63] dark:text-white leading-snug">
                      {current.metrics}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="p-6 rounded-2xl bg-white dark:bg-[#071328] border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs hover:shadow-md hover:scale-[1.02] hover:border-[#FFC400]/60 transition-all duration-300">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Công Nghệ Cốt Lõi Ứng Dụng
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {current.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700 hover:border-[#FFC400] hover:scale-105 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Discovery Portal Banner to Child Page */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-slate-100/90 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 hover:border-[#FFC400] hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-[#102D63] dark:text-white">
              Cần tìm hiểu chi tiết bảng tính năng, tài liệu bàn giao và kiến trúc tổng thể?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Trang Giải Pháp cung cấp đầy đủ thông số kỹ thuật, quy mô phù hợp và quy trình đóng gói hoàn chỉnh.
            </p>
          </div>

          <button
            onClick={() => navigate('/giai-phap')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-[#102D63] dark:text-[#FFC400] bg-white dark:bg-[#0A172D] border border-slate-200 dark:border-slate-700 hover:border-[#FFC400] transition-colors shrink-0 shadow-xs"
          >
            <span>Đến Trang Giải Pháp Đầy Đủ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSolutionsSlide;
