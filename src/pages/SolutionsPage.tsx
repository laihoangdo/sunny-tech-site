import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { SolutionsSection } from '../components/SolutionsSection';
import { FaqSection } from '../components/FaqSection';
import { SEOHead } from '../components/SEOHead';
import { SOLUTIONS_FAQS } from '../data';
import { Layers, Server, Cloud, ShieldCheck, ArrowRight, Calculator, HelpCircle } from 'lucide-react';

interface SolutionsPageProps {
  onSelectSolutionForContact: (solutionTitle: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onSelectSolutionForContact }) => {
  const navigate = useNavigate();

  const handleSelectSolution = (solutionTitle: string) => {
    onSelectSolutionForContact(solutionTitle);
    navigate('/lien-he');
  };

  const deploymentModels = [
    {
      icon: Server,
      title: 'Triển Khai On-Premise / Private Cloud',
      desc: 'Phù hợp cho các tổ chức ngân hàng, năng lượng và cơ quan chính phủ cần lưu trữ dữ liệu hoàn toàn trên máy chủ nội bộ hoặc hạ tầng riêng biệt.',
      features: ['Tuân thủ tuyệt đối an ninh nội bộ', 'Tích hợp Active Directory / LDAP', 'Không phụ thuộc mạng Internet công cộng'],
    },
    {
      icon: Cloud,
      title: 'Đám Mây Lai (Hybrid Cloud Architecture)',
      desc: 'Kết hợp linh hoạt giữa cơ sở dữ liệu nội bộ và các dịch vụ đám mây công cộng (AWS, GCP, Azure) để tối ưu chi phí và tăng tốc độ phục vụ.',
      features: ['Khả năng co giãn tải tức thì', 'Sao lưu dữ liệu đa vùng (Multi-region)', 'Tối ưu hóa chi phí vận hành hàng tháng'],
    },
    {
      icon: ShieldCheck,
      title: 'Hạ Tầng Dedicated SaaS / Containerized',
      desc: 'Đóng gói toàn bộ hệ thống bằng Docker & Kubernetes. Tự động hóa giám sát, sao lưu và nâng cấp phiên bản không gây gián đoạn (Zero-Downtime).',
      features: ['Triển khai nhanh chóng', 'CI/CD đường ống tự động', 'Hỗ trợ giám sát tài nguyên 24/7'],
    },
  ];

  return (
    <div>
      <SEOHead />
      {/* Page Header */}
      <PageHeader
        badge="Danh Mục Dịch Vụ"
        badgeIcon={<Layers className="w-3.5 h-3.5" />}
        title="Hệ Thống Giải Pháp Công Nghệ & Chuyển Đổi Số"
        subtitle="Khám phá các giải pháp công nghệ đã được chuẩn hóa từ kiến trúc, giao diện người dùng đến hạ tầng dữ liệu và bảo mật thông tin."
        currentPageTitle="Giải pháp"
      />

      {/* Solutions Matrix with Detail Modal */}
      <SolutionsSection onSelectSolutionForContact={handleSelectSolution} />

      {/* Deployment Models Section */}
      <section className="py-20 bg-slate-50 dark:bg-[#060F1E] border-b border-slate-200/80 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D63] dark:text-white tracking-tight">
              Mô Hình Triển Khai Linh Hoạt Theo Nhu Cầu
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Sunny Tech cung cấp các phương án kiến trúc hạ tầng tương thích với mọi chính sách bảo mật nội bộ của doanh nghiệp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deploymentModels.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group p-8 rounded-3xl bg-white dark:bg-[#0A172D] border border-slate-200/80 dark:border-slate-800 hover:border-[#FFC400] dark:hover:border-[#FFC400] shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF7D8] dark:bg-[#102D63] border border-[#FFC400]/40 flex items-center justify-center text-[#b88400] dark:text-[#FFC400] group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-md transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#102D63] dark:text-white group-hover:text-[#b88400] dark:group-hover:text-[#FFC400] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                      {item.features.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFC400] group-hover:scale-125 transition-transform" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Estimator CTA Card */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#102D63] to-[#091D43] text-white shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700/50">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFC400]">
                <Calculator className="w-4 h-4" />
                <span>Chưa rõ ngân sách hoặc thời gian triển khai?</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Dự toán quy mô &amp; lộ trình chỉ trong 60 giây
              </h3>
              <p className="text-sm text-slate-300 max-w-xl">
                Sử dụng công cụ tương tác của Sunny Tech để tự ước tính thời gian hoàn thiện và tài nguyên cần thiết cho dự án của bạn.
              </p>
            </div>
            <Link
              to="/du-toan"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFC400] text-[#102D63] font-bold text-sm hover:bg-[#f5b000] shadow-md transition-all shrink-0"
            >
              <span>Mở công cụ dự toán</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Technical FAQ Accordion Section */}
      <FaqSection
        id="faq-giai-phap"
        items={SOLUTIONS_FAQS}
        badge="Giải Đáp Về Giải Pháp"
        badgeIcon={<HelpCircle className="w-3.5 h-3.5" />}
        title="Câu Hỏi Thường Gặp Về Dịch Vụ Công Nghệ & Giải Pháp"
        subtitle="Giải đáp mọi băn khoăn của doanh nghiệp về tính tương thích hệ thống cũ, hạ tầng on-premise, quyền sở hữu mã nguồn và cam kết chất lượng SLA."
        showCategories={true}
        showSearch={true}
        showContactCta={true}
      />
    </div>
  );
};
