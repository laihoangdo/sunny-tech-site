import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  GitBranch,
  Cpu,
  Briefcase,
  Calculator,
  MailCheck,
} from 'lucide-react';

export const HomeChildPagesHub: React.FC = () => {
  const navigate = useNavigate();

  const childPages = [
    {
      path: '/gioi-thieu',
      badge: 'Về Sunny Tech',
      title: 'Giới Thiệu Doanh Nghiệp',
      desc: 'Tìm hiểu tầm nhìn, sứ mệnh, 4 trụ cột chiến lược và cam kết chất lượng độc bản cho từng khách hàng.',
      icon: ShieldCheck,
      color: 'from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400',
      actionText: 'Khám phá văn hóa & tầm nhìn',
    },
    {
      path: '/quy-trinh',
      badge: 'Phương Pháp Luận',
      title: 'Quy Trình Triển Khai 5 Bước',
      desc: 'Mô hình Agile Sprint 2 tuần minh bạch: từ khảo sát nghiệp vụ, thiết kế Figma đến bàn giao 100% mã nguồn.',
      icon: GitBranch,
      color: 'from-amber-500/10 to-yellow-500/10 text-amber-600 dark:text-amber-400',
      actionText: 'Xem lộ trình & cam kết SLA',
    },
    {
      path: '/nang-luc',
      badge: 'Hạ Tầng Kỹ Thuật',
      title: 'Năng Lực & Kiến Trúc Công Nghệ',
      desc: 'Clean Architecture, Microservices, hệ thống phân tán chịu tải cao, CI/CD tự động và bảo mật đa tầng Zero-Trust.',
      icon: Cpu,
      color: 'from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400',
      actionText: 'Tìm hiểu Tech Stack chuyên sâu',
    },
    {
      path: '/du-an',
      badge: 'Kết Quả Thực Tế',
      title: 'Dự Án & Case Studies Tiêu Biểu',
      desc: 'Chi tiết các bài toán số hóa bản đồ GIS, Data Lakehouse và tối ưu quy trình cho các tập đoàn năng lượng, logistics.',
      icon: Briefcase,
      color: 'from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400',
      actionText: 'Xem các dự án đã bàn giao',
    },
    {
      path: '/du-toan',
      badge: 'Tương Tác Nhanh',
      title: 'Công Cụ Dự Toán Quy Mô 60s',
      desc: 'Tự chọn các module công nghệ, quy mô người dùng và nhận ngay ước tính thời gian hoàn thành cùng lộ trình gợi ý.',
      icon: Calculator,
      color: 'from-orange-500/10 to-amber-500/10 text-orange-600 dark:text-[#FFC400]',
      actionText: 'Ước tính dự toán ngay',
    },
    {
      path: '/lien-he',
      badge: 'Kênh Kết Nối',
      title: 'Tư Vấn & Khảo Sát Kỹ Thuật',
      desc: 'Đặt lịch trao đổi trực tiếp với Kỹ sư Trưởng (Lead Architect), nhận phản hồi chuyên sâu chỉ trong 30 phút.',
      icon: MailCheck,
      color: 'from-sky-500/10 to-blue-500/10 text-sky-600 dark:text-sky-400',
      actionText: 'Gửi yêu cầu hợp tác',
    },
  ];

  return (
    <section
      id="he-sinh-thai-chuyen-sau"
      aria-label="Cổng điều hướng hệ sinh thái các chuyên mục chuyên sâu"
      className="py-20 lg:py-24 bg-slate-50/80 dark:bg-[#071328] border-b border-slate-200/80 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b88400] dark:text-[#FFC400] bg-[#FFF7D8] dark:bg-[#102D63] px-3.5 py-1.5 rounded-full border border-[#FFC400]/40">
            <Compass className="w-3.5 h-3.5" />
            <span>Hệ Sinh Thái Nội Dung Chuyên Sâu</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102D63] dark:text-white tracking-tight leading-tight">
            Khám Phá Toàn Diện Từng Khía Cạnh Công Nghệ
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Mỗi chuyên trang con được thiết kế chuyên biệt để cung cấp thông tin kỹ thuật chuyên sâu, tài liệu bàn giao và công cụ phân tích tương ứng.
          </p>
        </div>

        {/* 6 Child Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {childPages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => navigate(item.path)}
                className="group p-7 rounded-3xl bg-white dark:bg-[#0A172D] border border-slate-200/80 dark:border-slate-800/90 hover:border-[#FFC400] dark:hover:border-[#FFC400] transition-all duration-300 ease-out shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center border border-slate-100 dark:border-slate-800 group-hover:scale-110 group-hover:rotate-1 group-hover:shadow-md transition-all duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 group-hover:bg-[#FFF7D8] dark:group-hover:bg-[#102D63] group-hover:text-[#102D63] dark:group-hover:text-[#FFC400] px-2.5 py-1 rounded-full transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#102D63] dark:text-white group-hover:text-[#b88400] dark:group-hover:text-[#FFC400] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-[#102D63] dark:text-[#FFC400] group-hover:translate-x-1.5 transition-transform duration-200">
                  <span>{item.actionText}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeChildPagesHub;
