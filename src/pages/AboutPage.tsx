import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { AboutSection } from '../components/AboutSection';
import { FaqSection } from '../components/FaqSection';
import { SEOHead } from '../components/SEOHead';
import {
  Sparkles,
  ShieldCheck,
  Code2,
  Headphones,
  KeyRound,
  ArrowRight,
  Award,
  Users2,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';

export const AboutPage: React.FC = () => {

  const enterpriseCommitments = [
    {
      icon: Code2,
      title: 'Bàn Giao 100% Mã Nguồn & Bản Quyền',
      desc: 'Toàn bộ mã nguồn, tài liệu thiết kế kiến trúc (Architecture Decision Records - ADR) và quyền sở hữu trí tuệ thuộc về doanh nghiệp quý vị.',
    },
    {
      icon: ShieldCheck,
      title: 'Bảo Mật Tuyệt Đối Theo Thỏa Thuận NDA',
      desc: 'Cam kết ký kết bảo mật thông tin dự án trước khi khảo sát. Hạ tầng mã hóa dữ liệu đa lớp chuẩn an toàn thông tin ISO 27001.',
    },
    {
      icon: Headphones,
      title: 'Cam Kết SLA & Đồng Hành Kỹ Thuật 24/7',
      desc: 'Hỗ trợ kỹ thuật trực tiếp từ các kỹ sư cấp cao. Thời gian phản hồi sự cố khẩn cấp dưới 15 phút, bảo hành bảo trì từ 12-24 tháng.',
    },
    {
      icon: KeyRound,
      title: 'Tuyệt Đối Không Vendor Lock-in',
      desc: 'Ứng dụng các công nghệ tiêu chuẩn toàn cầu (React, Node.js, Go, PostgreSQL, Docker/K8s) giúp đội ngũ nội bộ của quý vị dễ dàng tiếp quản và mở rộng.',
    },
  ];

  const leadershipStats = [
    { label: 'Dự án hoàn thành đúng hạn', value: '100%' },
    { label: 'Tỷ lệ khách hàng tiếp tục hợp tác', value: '94%' },
    { label: 'Thời gian bảo hành mặc định', value: '12-24 Tháng' },
    { label: 'Hỗ trợ hotline kỹ thuật', value: '24/7/365' },
  ];

  return (
    <div>
      <SEOHead />
      {/* Page Banner with Breadcrumb */}
      <PageHeader
        badge="Hồ Sơ Năng Lực"
        badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
        title="Đối Tác Công Nghệ & Chuyển Đổi Số Chuẩn Enterprise"
        subtitle="Sunny Tech đồng hành cùng các tổ chức và doanh nghiệp kiến tạo những nền tảng công nghệ vững chắc, đo lường được hiệu quả kinh tế và sở hữu mã nguồn trọn đời."
        currentPageTitle="Giới thiệu"
      />

      {/* Reusable Core About Section */}
      <AboutSection />

      {/* Enterprise Commitments & Guarantees */}
      <section className="py-20 bg-slate-50 dark:bg-[#060F1E] border-b border-slate-200/80 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b88400] dark:text-[#FFC400] bg-[#FFF7D8] dark:bg-[#102D63] px-3.5 py-1.5 rounded-full border border-[#FFC400]/40">
              <Award className="w-3.5 h-3.5" />
              <span>Cam Kết Vàng Của Sunny Tech</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D63] dark:text-white tracking-tight">
              4 Nguyên Tắc Hợp Tác Bền Vững &amp; Minh Bạch
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Chúng tôi bảo vệ quyền lợi tối cao và tài sản số của khách hàng trong suốt vòng đời dự án.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseCommitments.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white dark:bg-[#0A172D] border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF7D8] dark:bg-[#102D63] border border-[#FFC400]/40 flex items-center justify-center text-[#b88400] dark:text-[#FFC400]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#102D63] dark:text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Đảm bảo bằng hợp đồng pháp lý</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats Bar */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#102D63] to-[#091D43] text-white shadow-xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {leadershipStats.map((stat, idx) => (
                <div key={idx} className={idx > 0 ? 'pt-6 lg:pt-0' : ''}>
                  <div className="text-3xl sm:text-4xl font-black text-[#FFC400]">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise & Partnership FAQ Section */}
      <FaqSection
        id="faq-doanh-nghiep"
        badge="Giải Đáp Về Hợp Tác"
        badgeIcon={<HelpCircle className="w-3.5 h-3.5" />}
        title="Câu Hỏi Thường Gặp Của Khách Hàng Doanh Nghiệp"
        subtitle="Tổng hợp các thắc mắc phổ biến về quy trình làm việc Agile, cam kết bảo mật NDA, chuyển giao mã nguồn và chính sách bảo hành dài hạn."
        showCategories={true}
        showSearch={true}
        showContactCta={false}
      />

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-white dark:bg-[#071328] transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D63] dark:text-white">
            Sẵn sàng nâng cấp hạ tầng số cùng chuyên gia Sunny Tech?
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Đặt lịch trao đổi trực tiếp hoặc gửi yêu cầu để nhận tài liệu phân tích kiến trúc sơ bộ hoàn toàn miễn phí.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/lien-he"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFC400] text-[#102D63] font-bold text-sm hover:bg-[#f5b000] shadow-md hover:shadow transition-all"
            >
              <span>Đăng ký tư vấn giải pháp</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/giai-phap"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm hover:border-[#FFC400] transition-all"
            >
              <span>Khám phá 6+ giải pháp</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
