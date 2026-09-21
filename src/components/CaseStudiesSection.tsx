import React, { useState } from 'react';
import { CASE_STUDIES } from '../data';
import { CaseStudy } from '../types';
import {
  Award,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Globe,
  Lock,
  ExternalLink,
  Maximize2,
  X,
  Layers,
  Calendar,
  Building2,
  ArrowRight,
} from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenConsultation: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onOpenConsultation,
}) => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  return (
    <section
      id="du-an"
      className="py-20 lg:py-28 bg-white dark:bg-[#071328] border-b border-slate-100 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b88400] dark:text-[#FFC400] bg-[#FFF7D8] dark:bg-[#102D63] px-3.5 py-1.5 rounded-full border border-[#FFC400]/40">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dự Án Triển Khai Thực Tế Cho Khách Hàng</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102D63] dark:text-white tracking-tight leading-tight">
              Hình Ảnh Website &amp; Nền Tảng Đã Bàn Giao
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Mỗi sản phẩm web do Sunny Tech triển khai đều được thiết kế giao diện độc quyền (Figma UI/UX), tối ưu hiệu năng Core Web Vitals và bàn giao 100% mã nguồn sạch cho doanh nghiệp.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#102D63] dark:text-[#FFC400] bg-slate-100 dark:bg-[#0A172D] hover:bg-[#FFF7D8] dark:hover:bg-[#102D63] border border-slate-200 dark:border-slate-700 hover:border-[#FFC400] transition-all"
            >
              <span>Đăng Ký Tư Vấn Triển Khai</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.id}
              className="group rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-[#F8FAFD] dark:bg-[#0A172D] overflow-hidden shadow-xs hover:shadow-2xl hover:border-[#FFC400] hover:-translate-y-2 hover:scale-[1.015] transition-all duration-300 ease-out flex flex-col justify-between"
            >
              <div>
                {/* Browser Window Header Mockup */}
                <div className="bg-slate-200/80 dark:bg-slate-800/90 px-4 py-2.5 flex items-center gap-3 border-b border-slate-200 dark:border-slate-700 group-hover:bg-slate-300/70 dark:group-hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400 group-hover:scale-110 transition-transform" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 group-hover:scale-110 transition-transform" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Browser URL bar */}
                  <div className="flex-1 max-w-[200px] sm:max-w-xs mx-auto bg-white/90 dark:bg-[#060F1E]/80 px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5 truncate border border-slate-200/60 dark:border-slate-700/60 group-hover:border-[#FFC400]/50 transition-colors">
                    <Lock className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="truncate">{study.domainPreview || 'https://sunnytech.vn'}</span>
                  </div>

                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 hidden sm:inline">
                    {study.year || '2024'}
                  </span>
                </div>

                {/* Project Image Preview with Click-to-Zoom */}
                <div
                  className="relative overflow-hidden aspect-[16/10] bg-slate-900 cursor-pointer group/img"
                  onClick={() => setSelectedStudy(study)}
                >
                  <img
                    src={study.imageUrl}
                    alt={study.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102D63]/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 text-white">
                    <div className="text-xs font-semibold">
                      <span>Click để phóng to giao diện</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/20 backdrop-blur-xs text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Category Pill Over Image */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#102D63]/90 text-[#FFC400] backdrop-blur-xs border border-[#FFC400]/40 shadow-xs group-hover:scale-105 transition-transform duration-300">
                      {study.clientCategory}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  {study.clientName && (
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <Building2 className="w-3.5 h-3.5 text-[#b88400] dark:text-[#FFC400]" />
                      <span className="truncate">{study.clientName}</span>
                    </div>
                  )}

                  <h3 className="text-lg sm:text-xl font-black text-[#102D63] dark:text-white leading-snug group-hover:text-[#b88400] dark:group-hover:text-[#FFC400] transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {study.summary}
                  </p>

                  {/* Key Metrics grid */}
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {study.results.map((res, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-white dark:bg-[#071328] border border-slate-200/70 dark:border-slate-800 text-center flex flex-col justify-center hover:scale-105 hover:border-[#FFC400]/50 transition-all duration-200"
                      >
                        <div className="text-sm sm:text-base font-black font-mono text-[#102D63] dark:text-[#FFC400] leading-none mb-1">
                          {res.metric}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables snippet */}
                  {study.deliverables && study.deliverables.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Bàn giao chính
                      </div>
                      {study.deliverables.slice(0, 2).map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="truncate">{del}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Footer Tech Tags & Action */}
              <div className="p-6 pt-0 border-t border-slate-200/80 dark:border-slate-800/80 mt-4">
                <div className="flex flex-wrap gap-1.5 my-3">
                  {study.techUsed.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold text-slate-600 dark:text-slate-300 bg-white dark:bg-[#071328] px-2 py-1 rounded-md border border-slate-200/80 dark:border-slate-800 hover:border-[#FFC400] hover:scale-105 transition-all duration-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedStudy(study)}
                    className="flex-1 py-2.5 px-3 text-xs font-bold text-[#102D63] dark:text-slate-200 bg-white dark:bg-[#071328] hover:bg-[#FFF7D8] dark:hover:bg-[#102D63] hover:text-[#102D63] dark:hover:text-[#FFC400] border border-slate-200 dark:border-slate-700 hover:border-[#FFC400] rounded-xl transition-all cursor-pointer text-center hover:shadow-xs active:scale-95"
                  >
                    Xem Chi Tiết &amp; Ảnh Toàn Màn Hình
                  </button>

                  <button
                    onClick={onOpenConsultation}
                    aria-label="Tư vấn bài toán này"
                    className="p-2.5 rounded-xl bg-[#FFC400] text-[#102D63] hover:bg-[#ffcd2e] hover:scale-110 active:scale-95 transition-all shadow-xs"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Fullscreen Interactive Image & Specs Lightbox Modal */}
      {selectedStudy && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedStudy(null)}
        >
          <div
            className="bg-white dark:bg-[#0A172D] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Browser Bar */}
            <div className="sticky top-0 z-20 bg-slate-100 dark:bg-slate-900 px-6 py-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="bg-white dark:bg-[#060F1E] px-3 py-1 rounded-md text-xs font-mono text-slate-600 dark:text-slate-300 flex items-center gap-1.5 border border-slate-200 dark:border-slate-700">
                  <Lock className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{selectedStudy.domainPreview || 'https://sunnytech.vn'}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedStudy(null)}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Đóng cửa sổ"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="p-6 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg bg-slate-950">
                <img
                  src={selectedStudy.imageUrl}
                  alt={selectedStudy.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[460px] object-cover object-top"
                />
              </div>

              {/* Information & Metrics */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFF7D8] dark:bg-[#102D63] text-[#102D63] dark:text-[#FFC400] border border-[#FFC400]/40">
                    {selectedStudy.clientCategory}
                  </span>
                  {selectedStudy.clientName && (
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Khách hàng: <strong>{selectedStudy.clientName}</strong>
                    </span>
                  )}
                  {selectedStudy.year && (
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Thời gian: {selectedStudy.year}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#102D63] dark:text-white">
                  {selectedStudy.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedStudy.summary}
                </p>

                {/* Metrics Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {selectedStudy.results.map((res, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-[#071328] border border-slate-200 dark:border-slate-800"
                    >
                      <div className="text-2xl font-black font-mono text-[#102D63] dark:text-[#FFC400]">
                        {res.metric}
                      </div>
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Deliverables List */}
                {selectedStudy.deliverables && (
                  <div className="p-5 rounded-2xl bg-[#FFF7D8]/60 dark:bg-[#102D63]/40 border border-[#FFC400]/30 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#102D63] dark:text-[#FFC400]">
                      Tài Liệu &amp; Hạng Mục Bàn Giao Thực Tế
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedStudy.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons in Modal */}
                <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <button
                    onClick={() => setSelectedStudy(null)}
                    className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Đóng
                  </button>

                  <button
                    onClick={() => {
                      setSelectedStudy(null);
                      onOpenConsultation();
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#102D63] dark:bg-[#FFC400] dark:text-[#102D63] hover:bg-[#1a4491] dark:hover:bg-[#ffcd2e] transition-all shadow-md"
                  >
                    Tư Vấn Triển Khai Bài Toán Tương Tự
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

