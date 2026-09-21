import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data';
import { TestimonialItem } from '../types';
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Award,
  Sparkles,
  Pause,
  Play,
  Building2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface TestimonialSectionProps {
  onOpenConsultation?: () => void;
  onViewProjects?: () => void;
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  onOpenConsultation,
  onViewProjects,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const testimonialsCount = TESTIMONIALS_DATA.length;
  const currentTestimonial: TestimonialItem = TESTIMONIALS_DATA[currentIndex];

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsCount);
  }, [testimonialsCount]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialsCount) % testimonialsCount);
  }, [testimonialsCount]);

  const handleSelect = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay management: advances every 7 seconds when not paused or hovered
  useEffect(() => {
    if (isAutoPlaying && !isHovered) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 7000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isAutoPlaying, isHovered, handleNext]);

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      id="khach-hang"
      aria-roledescription="carousel"
      aria-label="Đánh giá từ khách hàng doanh nghiệp"
      className="py-20 lg:py-28 bg-[#F8FAFD] dark:bg-[#071328] border-b border-slate-200/80 dark:border-slate-800 transition-colors relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Background Decorative Glow */}
      <div
        className="absolute top-1/2 -left-48 w-96 h-96 bg-[#FFC400]/5 dark:bg-[#FFC400]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -right-48 w-96 h-96 bg-[#102D63]/5 dark:bg-[#102D63]/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b88400] dark:text-[#FFC400] bg-[#FFF7D8] dark:bg-[#102D63] px-3.5 py-1.5 rounded-full border border-[#FFC400]/40">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Niềm Tin &amp; Trải Nghiệm Khách Hàng</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102D63] dark:text-white tracking-tight leading-tight">
              Được Tin Tưởng Bởi Các Nhà Lãnh Đạo Tiên Phong
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Mỗi sản phẩm công nghệ của Sunny Tech là một cam kết về giá trị kinh tế thực tế, bảo mật dữ liệu tuyệt đối và hiệu quả vận hành bền vững cho doanh nghiệp.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => setIsAutoPlaying((prev) => !prev)}
              aria-label={isAutoPlaying ? 'Tạm dừng tự động chuyển' : 'Bật tự động chuyển'}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A172D] text-slate-600 dark:text-slate-300 hover:text-[#102D63] dark:hover:text-[#FFC400] hover:border-[#FFC400] transition-colors shadow-xs"
              title={isAutoPlaying ? 'Tạm dừng' : 'Tự động chạy'}
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1" aria-hidden="true" />

            <button
              onClick={handlePrev}
              aria-label="Đánh giá trước"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A172D] text-slate-700 dark:text-slate-200 hover:bg-[#FFF7D8] dark:hover:bg-[#102D63] hover:text-[#102D63] dark:hover:text-[#FFC400] hover:border-[#FFC400] transition-all shadow-xs active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="text-xs font-bold text-slate-500 dark:text-slate-400 px-2 select-none">
              <span className="text-[#102D63] dark:text-[#FFC400] font-black">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>{' '}
              / {String(testimonialsCount).padStart(2, '0')}
            </div>

            <button
              onClick={handleNext}
              aria-label="Đánh giá tiếp theo"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A172D] text-slate-700 dark:text-slate-200 hover:bg-[#FFF7D8] dark:hover:bg-[#102D63] hover:text-[#102D63] dark:hover:text-[#FFC400] hover:border-[#FFC400] transition-all shadow-xs active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Testimonial Card with Carousel Animation */}
        <div className="relative min-h-[440px] sm:min-h-[380px] lg:min-h-[340px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentTestimonial.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0A172D] p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden"
            >
              {/* Giant Decorative Quote Icon */}
              <Quote
                className="absolute top-6 right-6 sm:top-10 sm:right-10 w-20 h-20 sm:w-28 sm:h-28 text-slate-100 dark:text-slate-800/60 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Content: Rating, Quote, Scope */}
                <div className="lg:col-span-8 space-y-6">
                  {/* Top Meta: Stars, Scope & Year */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-1 text-[#f5b000] bg-amber-50 dark:bg-amber-950/40 px-3 py-1 rounded-full border border-amber-200 dark:border-amber-800/40">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#f5b000]" />
                      ))}
                      <span className="text-xs font-bold text-amber-900 dark:text-amber-300 ml-1">
                        5.0
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/90 px-3 py-1 rounded-full border border-slate-200/60 dark:border-slate-700">
                      <Building2 className="w-3.5 h-3.5 text-[#102D63] dark:text-[#FFC400]" />
                      <span>{currentTestimonial.industry}</span>
                    </span>

                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      Triển khai: {currentTestimonial.year || '2024 - 2025'}
                    </span>
                  </div>

                  {/* Main Quote */}
                  <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-800 dark:text-slate-100 leading-relaxed tracking-tight">
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author Bio & Company */}
                  <div className="flex items-center gap-4 pt-2">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#102D63] to-[#1E3A8A] text-white flex items-center justify-center font-black text-lg shadow-md border-2 border-[#FFC400] shrink-0">
                      {currentTestimonial.avatarInitials}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-[#102D63] dark:text-white">
                          {currentTestimonial.author}
                        </h3>
                        <span
                          title={currentTestimonial.verifiedStatus}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/40"
                        >
                          <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          <span className="hidden sm:inline">Xác thực</span>
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                        {currentTestimonial.role} •{' '}
                        <span className="text-[#102D63] dark:text-[#FFC400] font-semibold">
                          {currentTestimonial.company}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Content: Measurable Impact Metric Card */}
                <div className="lg:col-span-4 flex flex-col justify-center">
                  <div className="p-6 rounded-2xl bg-[#FFF7D8]/80 dark:bg-[#102D63]/70 border border-[#FFC400]/50 space-y-4 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102D63] dark:text-[#FFC400]">
                      <TrendingUp className="w-4 h-4" />
                      <span>Kết Quả Đo Lường Được</span>
                    </div>

                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-[#102D63] dark:text-white tracking-tight">
                        {currentTestimonial.highlightMetric.value}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-1 font-medium">
                        {currentTestimonial.highlightMetric.label}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#FFC400]/30 flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <span className="text-slate-500 dark:text-slate-400">Dự án triển khai:</span>
                      <span className="text-right text-[#102D63] dark:text-[#FFC400] font-bold">
                        {currentTestimonial.projectScope}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail Navigator: Click to jump directly to any client review */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {TESTIMONIALS_DATA.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(idx)}
                aria-label={`Xem nhận xét của ${item.author}`}
                className={`p-3.5 rounded-2xl text-left border transition-all duration-200 relative group cursor-pointer ${
                  isActive
                    ? 'bg-white dark:bg-[#0A172D] border-[#FFC400] shadow-md ring-2 ring-[#FFC400]/30'
                    : 'bg-slate-100/70 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-[#0A172D] hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                      isActive
                        ? 'bg-[#102D63] dark:bg-[#FFC400] text-white dark:text-[#102D63]'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-[#FFF7D8] dark:group-hover:bg-[#102D63]'
                    }`}
                  >
                    {item.avatarInitials}
                  </div>
                  <span
                    className={`text-xs font-bold truncate ${
                      isActive
                        ? 'text-[#102D63] dark:text-[#FFC400]'
                        : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {item.company.split(' ')[0]} {item.company.split(' ')[1] || ''}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                  {item.industry}
                </p>

                {/* Progress highlight when active */}
                {isActive && (
                  <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#FFC400] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Social Proof Trust Pillars Banner */}
        <div className="mt-14 pt-10 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-[#102D63] dark:text-[#FFC400]">
              100%
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
              Bàn Giao Trọn Gói Mã Nguồn
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Khách hàng làm chủ công nghệ hoàn toàn
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-[#102D63] dark:text-[#FFC400]">
              99.98%
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
              SLA Vận Hành Ổn Định
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Giám sát an ninh tự động 24/7/365
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-[#102D63] dark:text-[#FFC400]">
              30 Phút
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
              Phản Hồi Kỹ Thuật Cam Kết
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Đội ngũ kỹ sư trực tiếp hỗ trợ
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-[#102D63] dark:text-[#FFC400]">
              ISO 27001
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
              Bảo Mật Zero-Trust &amp; NDA
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              An toàn tuyệt đối cho dữ liệu doanh nghiệp
            </p>
          </div>
        </div>

        {/* Bottom Actions */}
        {(onOpenConsultation || onViewProjects) && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {onOpenConsultation && (
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-[#102D63] bg-[#FFC400] hover:bg-[#ffcd2e] transition-all shadow-md hover:shadow-lg active:scale-98"
              >
                <span>Nhận Tư Vấn Giải Pháp Miễn Phí</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {onViewProjects && (
              <button
                onClick={onViewProjects}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-[#0A172D] border border-slate-200 dark:border-slate-800 hover:border-[#FFC400] transition-all shadow-xs"
              >
                <span>Xem Thêm Các Dự Án Tiêu Biểu</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
