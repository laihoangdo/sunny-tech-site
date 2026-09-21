import React, { useState } from 'react';
import { TECH_STACK_ITEMS } from '../data';
import { Cpu, Server, Shield, Database, Cloud, Terminal, Sparkles } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const stackCategories = [
    { id: 'all', label: 'Toàn bộ công nghệ' },
    { id: 'Dữ liệu & GIS', label: 'Dữ liệu & GIS' },
    { id: 'Hạ tầng & Cloud', label: 'Cloud & DevOps' },
    { id: 'AI & Học máy', label: 'AI & Machine Learning' },
    { id: 'Bảo mật', label: 'An toàn & Bảo mật' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? TECH_STACK_ITEMS
      : TECH_STACK_ITEMS.filter((item) => item.category.includes(selectedCategory));

  return (
    <section id="nang-luc" className="py-20 lg:py-28 bg-[#F5F7FB] dark:bg-[#060F1E] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f5b000] dark:text-[#FFC400] bg-[#FFF7D8] dark:bg-[#102D63] px-3.5 py-1.5 rounded-full border border-[#FFC400]/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Năng lực công nghệ &amp; Hạ tầng</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D63] dark:text-white tracking-tight leading-tight">
            Hệ Sinh Thái Công Nghệ Chuẩn Enterprise Hiện Đại
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Sunny Tech làm chủ các công nghệ mã nguồn mở hàng đầu kết hợp hạ tầng đám mây tiên tiến, 
            đảm bảo tính độc lập về công nghệ, không bị phụ thuộc nhà cung cấp (Vendor Lock-in) và 
            dễ dàng chuyển giao mã nguồn.
          </p>
        </div>

        {/* Filter */}
        <div className="mt-10 flex flex-wrap items-center gap-2 pb-2">
          {stackCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#102D63] dark:bg-[#FFC400] text-white dark:text-[#102D63] shadow-sm'
                  : 'bg-white dark:bg-[#0A172D] text-slate-700 dark:text-slate-300 hover:text-[#102D63] dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((tech, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-[#0A172D] border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-[#FFC400] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFC400]" />
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                  {tech.category}
                </span>
              </div>

              <div className="font-bold text-[#102D63] dark:text-white text-base mb-1">
                {tech.name}
              </div>

              <div className="text-xs text-[#f5b000] font-semibold">
                {tech.badge}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Strengths Bar */}
        <div className="mt-12 bg-[#102D63] dark:bg-[#0A172D] rounded-3xl p-8 text-white grid grid-cols-1 md:grid-cols-3 gap-8 border border-transparent dark:border-slate-800 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 dark:bg-white/5 flex items-center justify-center text-[#FFC400] flex-shrink-0">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">Kiến Trúc Microservices</h4>
              <p className="text-xs text-slate-300 dark:text-slate-400 mt-1 leading-relaxed">
                Tách biệt các dịch vụ nghiệp vụ, giúp hệ thống không bao giờ bị nghẽn toàn phần và dễ dàng mở rộng theo chiều ngang.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 dark:bg-white/5 flex items-center justify-center text-[#FFC400] flex-shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">Bảo Mật Zero-Trust</h4>
              <p className="text-xs text-slate-300 dark:text-slate-400 mt-1 leading-relaxed">
                Xác thực định danh đa yếu tố ở từng giao dịch API, kiểm soát quyền hạn phân cấp và mã hóa đường truyền SSL/TLS.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 dark:bg-white/5 flex items-center justify-center text-[#FFC400] flex-shrink-0">
              <Cloud className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">Multi-Cloud / Hybrid</h4>
              <p className="text-xs text-slate-300 dark:text-slate-400 mt-1 leading-relaxed">
                Linh hoạt triển khai trên hạ tầng máy chủ riêng (On-Premise) hoặc các nền tảng đám mây lớn (AWS, GCP, Viettel Cloud).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
