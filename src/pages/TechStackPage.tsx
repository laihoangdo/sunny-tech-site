import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { TechStackSection } from '../components/TechStackSection';
import { SEOHead } from '../components/SEOHead';
import { Cpu, Terminal, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

export const TechStackPage: React.FC = () => {
  const engineeringStandards = [
    {
      title: 'Kiến Trúc Clean Architecture & Tách Biệt Nghiệp Vụ',
      desc: 'Mã nguồn được phân tầng rõ ràng theo Domain-Driven Design (DDD). Dễ dàng bảo trì, thêm phân hệ mới hoặc nâng cấp giao diện mà không ảnh hưởng cơ sở dữ liệu.',
    },
    {
      title: 'Tự Động Hóa Đường Ống CI/CD & Kiểm Thử Tải',
      desc: 'Mọi commit đều được kiểm tra cú pháp, quét mã độc bảo mật (SAST) và chạy bộ kiểm thử tự động (Unit Tests) trước khi tiến hành đóng gói Docker image.',
    },
    {
      title: 'Bảo Mật Đa Tầng Chuẩn OWASP Top 10 & ISO 27001',
      desc: 'Chống tấn công SQL Injection, XSS, CSRF, cấu hình phân quyền người dùng theo vai trò (RBAC), kiểm soát token JWT có thời hạn và bảo vệ API Rate Limiting.',
    },
    {
      title: 'Hệ Thống Giám Sát Realtime & Cảnh Báo Sự Cố 24/7',
      desc: 'Tích hợp công cụ giám sát hiệu năng (APM), lưu vết lỗi chi tiết (Distributed Tracing) và tự động gửi cảnh báo về Telegram/Slack của đội ngũ trực chiến khi phát sinh bất thường.',
    },
  ];

  return (
    <div>
      <SEOHead />
      {/* Page Header */}
      <PageHeader
        badge="Năng Lực Kỹ Thuật"
        badgeIcon={<Cpu className="w-3.5 h-3.5" />}
        title="Hệ Sinh Thái Công Nghệ & Hạ Tầng Chuẩn Enterprise"
        subtitle="Làm chủ các công nghệ nền tảng hàng đầu thế giới từ Frontend, Backend, Cơ sở dữ liệu đến Hạ tầng đám mây và Trí tuệ nhân tạo."
        currentPageTitle="Năng lực"
      />

      {/* Core Tech Stack Section */}
      <TechStackSection />

      {/* Engineering Standards */}
      <section className="py-20 bg-slate-50 dark:bg-[#060F1E] border-b border-slate-200/80 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b88400] dark:text-[#FFC400] bg-[#FFF7D8] dark:bg-[#102D63] px-3.5 py-1.5 rounded-full border border-[#FFC400]/40">
              <Terminal className="w-3.5 h-3.5" />
              <span>Tiêu Chuẩn Kỹ Thuật</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D63] dark:text-white tracking-tight">
              Quy Trình Quản Lý Chất Lượng Mã Nguồn Nghiêm Ngặt
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Mỗi dòng mã bàn giao cho doanh nghiệp đều được viết sạch, có chú thích đầy đủ và tuân thủ các quy chuẩn kỹ thuật quốc tế.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engineeringStandards.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white dark:bg-[#0A172D] border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#102D63] dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-12">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/lien-he"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFC400] text-[#102D63] font-bold text-sm hover:bg-[#f5b000] shadow-md transition-all"
            >
              <span>Yêu cầu tư vấn thiết kế kiến trúc hệ thống</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
