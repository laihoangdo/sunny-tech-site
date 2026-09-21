import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { SEOHead } from '../components/SEOHead';
import { CASE_STUDIES } from '../data';
import {
  Briefcase,
  TrendingUp,
  Quote,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Code2,
  Layers,
  Sparkles,
  Zap,
  Globe,
  Building2,
  Lock,
  Maximize2,
  X,
} from 'lucide-react';
import { CaseStudy } from '../types';

export const CaseStudiesPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [previewStudy, setPreviewStudy] = useState<CaseStudy | null>(null);

  const categories = [
    { id: 'all', label: 'Tất Cả Dự Án' },
    { id: 'web', label: 'Website & Cổng Dịch Vụ B2B' },
    { id: 'gis', label: 'Bản Đồ Số GIS' },
    { id: 'data', label: 'Data Lakehouse & BI' },
    { id: 'fintech', label: 'FinTech & Bảo Mật' },
  ];

  const filteredStudies = CASE_STUDIES.filter((study) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'web') {
      return (
        study.id === 'b2b-ecommerce' ||
        study.id === 'smart-city-portal' ||
        study.id === 'telecom-portal'
      );
    }
    if (activeCategory === 'gis') return study.id === 'energy-gis';
    if (activeCategory === 'data') return study.id === 'retail-data';
    if (activeCategory === 'fintech') return study.id === 'fintech-security';
    return true;
  });

  const standards = [
    {
      icon: Code2,
      title: 'Bàn Giao 100% Bản Quyền Mã Nguồn',
      desc: 'Doanh nghiệp toàn quyền sở hữu kiến trúc mã nguồn sạch, CSDL và tài liệu kỹ thuật sau nghiệm thu.',
    },
    {
      icon: Zap,
      title: 'Tốc Độ Core Web Vitals < 1.2s',
      desc: 'Tối ưu hóa hình ảnh WebP, nén bundle, caching đa tầng và CDN đảm bảo phản hồi tức thì.',
    },
    {
      icon: ShieldCheck,
      title: 'Bảo Mật Zero-Trust & OWASP Top 10',
      desc: 'Kiểm thử thâm nhập (Pen-test), mã hóa dữ liệu lưu trữ AES-256 và phân quyền kiểm soát chi tiết.',
    },
    {
      icon: Sparkles,
      title: 'Thiết Kế Độc Bản Chuẩn Figma',
      desc: 'Không sử dụng giao diện mẫu sẵn. Thiết kế may đo theo bộ nhận diện thương hiệu độc quyền của quý khách.',
    },
  ];

  const testimonials = [
    {
      quote:
        'Hệ thống bản đồ số GIS do Sunny Tech xây dựng đã giúp chúng tôi rút ngắn 75% thời gian tra cứu vị trí tài sản lưới điện ngoài thực địa, giảm tải đáng kể cho đội ngũ kỹ sư hiện trường.',
      author: 'Ban Quản Lý Dự Án Năng Lượng',
      industry: 'Năng lượng & Hạ tầng kỹ thuật',
      metric: 'Tiết kiệm ~450 giờ làm việc/tháng',
    },
    {
      quote:
        'Nền tảng thương mại điện tử B2B xử lý mượt mà hơn 30.000 đơn hàng đồng thời trong các đợt cao điểm mà không hề bị chậm hay nghẽn dữ liệu. Kiến trúc Microservices thật sự rất mạnh mẽ.',
      author: 'Giám Đốc Công Nghệ (CTO)',
      industry: 'Bán lẻ & Phân phối toàn quốc',
      metric: 'Tăng 240% throughput đơn hàng',
    },
  ];

  return (
    <div>
      <SEOHead />
      {/* Page Header */}
      <PageHeader
        badge="Thực Tế Triển Khai"
        badgeIcon={<Briefcase className="w-3.5 h-3.5" />}
        title="Dự Án Website &amp; Nền Tảng Đã Triển Khai Cho Khách Hàng"
        subtitle="Khám phá các sản phẩm website doanh nghiệp, cổng thông tin điều hành và hệ thống dữ liệu lớn do đội ngũ Sunny Tech may đo và chuyển giao trọn gói."
        currentPageTitle="Dự án"
      />

      {/* 4 Standards Bar */}
      <section className="py-12 bg-white dark:bg-[#060F1E] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0A172D] border border-slate-200/70 dark:border-slate-800 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FFF7D8] dark:bg-[#102D63] text-[#102D63] dark:text-[#FFC400] flex items-center justify-center shrink-0 border border-[#FFC400]/40">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-[#102D63] dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Filterable Showcase Section */}
      <section className="py-16 sm:py-20 bg-slate-50/70 dark:bg-[#071328] border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-[#102D63] dark:bg-[#FFC400] text-white dark:text-[#102D63] border-transparent shadow-md'
                      : 'bg-white dark:bg-[#0A172D] text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[#FFC400]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Filtered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <article
                key={study.id}
                className="group rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0A172D] overflow-hidden shadow-xs hover:shadow-2xl hover:border-[#FFC400] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Browser Mockup Top Bar */}
                  <div className="bg-slate-100 dark:bg-slate-900/90 px-4 py-2.5 flex items-center gap-3 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>

                    <div className="flex-1 max-w-[200px] sm:max-w-xs mx-auto bg-white/90 dark:bg-[#060F1E]/80 px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5 truncate border border-slate-200/60 dark:border-slate-700/60">
                      <Lock className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="truncate">{study.domainPreview || 'https://sunnytech.vn'}</span>
                    </div>

                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 hidden sm:inline">
                      {study.year || '2024'}
                    </span>
                  </div>

                  {/* Project Screenshot with Zoom Trigger */}
                  <div
                    className="relative overflow-hidden aspect-[16/10] bg-slate-950 cursor-pointer group/img"
                    onClick={() => setPreviewStudy(study)}
                  >
                    <img
                      src={study.imageUrl}
                      alt={study.imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#102D63]/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 text-white">
                      <div className="text-xs font-semibold">
                        <span>Click để phóng to ảnh</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/20 backdrop-blur-xs text-white">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#102D63]/90 text-[#FFC400] backdrop-blur-xs border border-[#FFC400]/40 shadow-xs">
                        {study.clientCategory}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
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

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {study.results.map((res, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#071328] border border-slate-200/70 dark:border-slate-800 text-center flex flex-col justify-center"
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
                          Hạng mục bàn giao
                        </div>
                        {study.deliverables.slice(0, 2).map((del, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span className="truncate">{del}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-4">
                  <div className="flex flex-wrap gap-1.5 my-3">
                    {study.techUsed.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-[#071328] px-2 py-1 rounded-md border border-slate-200/80 dark:border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPreviewStudy(study)}
                      className="flex-1 py-2.5 px-3 text-xs font-bold text-[#102D63] dark:text-slate-200 bg-slate-50 dark:bg-[#071328] hover:bg-[#FFF7D8] dark:hover:bg-[#102D63] hover:text-[#102D63] dark:hover:text-[#FFC400] border border-slate-200 dark:border-slate-700 hover:border-[#FFC400] rounded-xl transition-all cursor-pointer text-center"
                    >
                      Xem Toàn Bộ Ảnh &amp; Hồ Sơ
                    </button>

                    <button
                      onClick={() => navigate('/lien-he')}
                      aria-label="Tư vấn bài toán này"
                      className="p-2.5 rounded-xl bg-[#FFC400] text-[#102D63] hover:bg-[#ffcd2e] transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & ROI Section */}
      <section className="py-20 bg-white dark:bg-[#060F1E] border-b border-slate-200/80 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b88400] dark:text-[#FFC400] bg-[#FFF7D8] dark:bg-[#102D63] px-3.5 py-1.5 rounded-full border border-[#FFC400]/40">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Phản Hồi Từ Khách Hàng</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D63] dark:text-white tracking-tight">
              Được Tin Tưởng Bởi Các Nhà Lãnh Đạo Tiên Phong
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Giá trị lớn nhất chúng tôi mang lại là sự ổn định bền vững của hệ thống và sự an tâm tuyệt đối của quý đối tác.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#0A172D] border border-slate-200/80 dark:border-slate-800 shadow-sm relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <Quote className="w-10 h-10 text-[#FFC400]/50" />
                  <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 italic leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-[#102D63] dark:text-white text-base">
                      {item.author}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {item.industry}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {item.metric}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/lien-he"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#FFC400] text-[#102D63] font-bold text-sm hover:bg-[#ffcd2e] shadow-md hover:shadow-lg transition-all"
            >
              <span>Bạn có bài toán tương tự? Nhận tư vấn giải pháp</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Fullscreen Interactive Modal for CaseStudiesPage */}
      {previewStudy && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setPreviewStudy(null)}
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
                  <span>{previewStudy.domainPreview || 'https://sunnytech.vn'}</span>
                </div>
              </div>

              <button
                onClick={() => setPreviewStudy(null)}
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
                  src={previewStudy.imageUrl}
                  alt={previewStudy.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[460px] object-cover object-top"
                />
              </div>

              {/* Information & Metrics */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFF7D8] dark:bg-[#102D63] text-[#102D63] dark:text-[#FFC400] border border-[#FFC400]/40">
                    {previewStudy.clientCategory}
                  </span>
                  {previewStudy.clientName && (
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Khách hàng: <strong>{previewStudy.clientName}</strong>
                    </span>
                  )}
                  {previewStudy.year && (
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Thời gian: {previewStudy.year}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#102D63] dark:text-white">
                  {previewStudy.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {previewStudy.summary}
                </p>

                {/* Metrics Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {previewStudy.results.map((res, idx) => (
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
                {previewStudy.deliverables && (
                  <div className="p-5 rounded-2xl bg-[#FFF7D8]/60 dark:bg-[#102D63]/40 border border-[#FFC400]/30 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#102D63] dark:text-[#FFC400]">
                      Tài Liệu &amp; Hạng Mục Bàn Giao Thực Tế
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {previewStudy.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200"
                        >
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
                    onClick={() => setPreviewStudy(null)}
                    className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Đóng
                  </button>

                  <button
                    onClick={() => {
                      setPreviewStudy(null);
                      navigate('/lien-he');
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
    </div>
  );
};

