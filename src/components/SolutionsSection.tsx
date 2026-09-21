import React, { useState } from 'react';
import { Solution } from '../types';
import { SOLUTIONS_DATA } from '../data';
import { SolutionModal } from './SolutionModal';
import {
  Database,
  Map,
  Layers,
  Cpu,
  ShieldCheck,
  Radio,
  Globe,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface SolutionsSectionProps {
  onSelectSolutionForContact: (solutionTitle: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onSelectSolutionForContact,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  const categories = [
    { id: 'all', label: 'Tất cả giải pháp' },
    { id: 'web-dev', label: 'Thiết kế Website' },
    { id: 'cloud-data', label: 'Dữ liệu & Cloud' },
    { id: 'gis-map', label: 'Bản đồ số & GIS' },
    { id: 'digital-trans', label: 'Chuyển đổi số' },
    { id: 'ai-ml', label: 'AI & Tự động hóa' },
    { id: 'security-devops', label: 'Hạ tầng & Bảo mật' },
  ];

  const filteredSolutions =
    activeCategory === 'all'
      ? SOLUTIONS_DATA
      : SOLUTIONS_DATA.filter((item) => item.category === activeCategory);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-[#102D63]" />;
      case 'Database':
        return <Database className="w-6 h-6 text-[#102D63]" />;
      case 'Map':
        return <Map className="w-6 h-6 text-[#102D63]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#102D63]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#102D63]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#102D63]" />;
      case 'Radio':
        return <Radio className="w-6 h-6 text-[#102D63]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#102D63]" />;
    }
  };

  return (
    <section id="giai-phap" className="py-20 lg:py-28 bg-[#F5F7FB] dark:bg-[#060F1E] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f5b000] dark:text-[#FFC400] bg-[#FFF7D8] dark:bg-[#102D63] px-3.5 py-1.5 rounded-full border border-[#FFC400]/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hệ thống giải pháp trọng tâm</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D63] dark:text-white tracking-tight leading-tight">
            Danh Mục Giải Pháp Công Nghệ Toàn Diện Cho Doanh Nghiệp
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Từ hạ tầng dữ liệu, không gian số đến quy trình tác nghiệp nội bộ — mỗi giải pháp được
            thiết kế theo module linh hoạt, sẵn sàng tích hợp và mở rộng theo từng giai đoạn phát triển.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#102D63] dark:bg-[#FFC400] text-white dark:text-[#102D63] shadow-md'
                  : 'bg-white dark:bg-[#0A172D] text-slate-700 dark:text-slate-300 hover:text-[#102D63] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-[#FFC400]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Solution Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredSolutions.map((solution) => (
            <article
              key={solution.id}
              onClick={() => setSelectedSolution(solution)}
              className="bg-white dark:bg-[#0A172D] rounded-3xl border border-slate-200/90 dark:border-slate-800 p-7 shadow-sm hover:shadow-2xl hover:border-[#FFC400] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Top bar with Icon and Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF7D8] dark:bg-[#102D63] group-hover:bg-[#FFC400] dark:group-hover:bg-[#FFC400] group-hover:scale-110 group-hover:rotate-1 group-hover:shadow-md transition-all duration-300 flex items-center justify-center shadow-xs">
                    {renderIcon(solution.iconName)}
                  </div>

                  {solution.badge ? (
                    <span className="text-[11px] font-extrabold uppercase tracking-wide px-3 py-1 rounded-full bg-[#102D63] text-white group-hover:bg-[#FFC400] group-hover:text-[#102D63] transition-colors shadow-xs">
                      {solution.badge}
                    </span>
                  ) : (
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full group-hover:bg-[#FFF7D8] dark:group-hover:bg-[#102D63] group-hover:text-[#102D63] dark:group-hover:text-[#FFC400] transition-colors">
                      {solution.categoryLabel}
                    </span>
                  )}
                </div>

                {/* Title and Tagline */}
                <h3 className="text-xl font-bold text-[#102D63] dark:text-white group-hover:text-[#b88400] dark:group-hover:text-[#FFC400] transition-colors leading-snug">
                  {solution.title}
                </h3>
                <p className="text-xs font-semibold text-[#b88400] dark:text-[#FFC400] mt-1 mb-3">
                  {solution.tagline}
                </p>

                {/* Short Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 line-clamp-3">
                  {solution.shortDesc}
                </p>

                {/* Feature highlights */}
                <div className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-4 mb-5">
                  {solution.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {solution.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Impact Callout & Action */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="p-3 rounded-xl bg-[#FFF7D8]/80 dark:bg-[#FFC400]/10 border border-[#FFC400]/30 text-[11px] font-bold text-[#102D63] dark:text-[#FFC400] group-hover:bg-[#FFC400]/20 transition-colors">
                  &bull; {solution.metrics}
                </div>

                <div className="grid grid-cols-2 gap-2" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => setSelectedSolution(solution)}
                    className="py-2.5 px-3 text-xs font-bold text-[#102D63] dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-[#FFF7D8] dark:hover:bg-[#102D63] hover:text-[#102D63] dark:hover:text-[#FFC400] rounded-xl transition-all cursor-pointer text-center active:scale-95"
                  >
                    Xem chi tiết
                  </button>
                  <button
                    onClick={() => onSelectSolutionForContact(solution.title)}
                    className="py-2.5 px-3 text-xs font-bold text-[#102D63] bg-[#FFC400] hover:bg-[#ffcd2e] hover:shadow-md rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1 active:scale-95"
                  >
                    <span>Tư vấn</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Deep-dive Solution Modal */}
      <SolutionModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
        onSelectForConsultation={onSelectSolutionForContact}
      />
    </section>
  );
};
