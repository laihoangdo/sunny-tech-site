import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { ProcessSection } from '../components/ProcessSection';
import { SEOHead } from '../components/SEOHead';
import { GitBranch, Check, X, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';

export const ProcessPage: React.FC = () => {
  const comparisonData = [
    {
      feature: 'Thời gian có bản Demo đầu tiên (MVP)',
      waterfall: 'Từ 3 đến 6 tháng sau ký hợp đồng',
      sunnyAgile: 'Chỉ từ 2 đến 3 tuần làm việc',
    },
    {
      feature: 'Khả năng linh hoạt thay đổi yêu cầu',
      waterfall: 'Rất khó khăn, tốn chi phí phát sinh lớn',
      sunnyAgile: 'Điều chỉnh linh hoạt theo từng Sprint 2 tuần',
    },
    {
      feature: 'Sự tham gia của ban lãnh đạo khách hàng',
      waterfall: 'Chỉ tham gia đầu và cuối dự án',
      sunnyAgile: 'Review sản phẩm thực tế định kỳ 2 tuần/lần',
    },
    {
      feature: 'Rủi ro lệch bài toán thực tế',
      waterfall: 'Cao, dễ thất thoát ngân sách lớn',
      sunnyAgile: 'Gần như triệt tiêu nhờ nghiệm thu liên tục',
    },
    {
      feature: 'Bàn giao mã nguồn & Tài liệu kỹ thuật',
      waterfall: 'Chỉ bàn giao file chạy, giữ mã nguồn',
      sunnyAgile: 'Bàn giao 100% repository & tài liệu ADR chuẩn',
    },
  ];

  return (
    <div>
      <SEOHead />
      {/* Page Header */}
      <PageHeader
        badge="Phương Pháp Luận"
        badgeIcon={<GitBranch className="w-3.5 h-3.5" />}
        title="Quy Trình Triển Khai 5 Bước Chuẩn Agile Enterprise"
        subtitle="Minh bạch từng giai đoạn, kiểm soát rủi ro chặt chẽ và bàn giao sản phẩm chạy được sau từng Sprint làm việc."
        currentPageTitle="Quy trình"
      />

      {/* Core 5-Step Process Section */}
      <ProcessSection />

      {/* Comparison Table Section */}
      <section className="py-20 bg-slate-50 dark:bg-[#060F1E] border-b border-slate-200/80 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b88400] dark:text-[#FFC400] bg-[#FFF7D8] dark:bg-[#102D63] px-3.5 py-1.5 rounded-full border border-[#FFC400]/40">
              <Award className="w-3.5 h-3.5" />
              <span>Hiệu Quả Thực Tiễn</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D63] dark:text-white tracking-tight">
              Sự Khác Biệt Giữa Phương Pháp Truyền Thống &amp; Sunny Tech
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Tại sao phương pháp Agile Enterprise giúp khách hàng tiết kiệm đến 40% chi phí và đảm bảo 100% dự án Go-Live thành công.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0A172D] shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0E1F3D]">
                  <th className="py-5 px-6 text-sm font-bold text-slate-700 dark:text-slate-200">
                    Tiêu chí đánh giá
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-slate-500 dark:text-slate-400">
                    Mô hình Waterfall cũ
                  </th>
                  <th className="py-5 px-6 text-sm font-extrabold text-[#102D63] dark:text-[#FFC400] bg-[#FFF7D8]/60 dark:bg-[#102D63]/50">
                    Mô hình Sunny Tech Agile
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <X className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>{row.waterfall}</span>
                    </td>
                    <td className="py-4 px-6 font-medium text-[#102D63] dark:text-emerald-300 bg-[#FFF7D8]/20 dark:bg-[#102D63]/20">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{row.sunnyAgile}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 text-center">
            <Link
              to="/lien-he"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFC400] text-[#102D63] font-bold text-sm hover:bg-[#f5b000] shadow-md transition-all"
            >
              <span>Đăng ký thảo luận quy trình cho dự án của bạn</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
