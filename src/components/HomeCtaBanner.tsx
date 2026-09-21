import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calculator, MailCheck, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export const HomeCtaBanner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home-cta-banner"
      aria-label="Khởi động dự án cùng Sunny Tech"
      className="py-16 sm:py-20 bg-gradient-to-br from-[#102D63] via-[#0E2654] to-[#081736] text-white relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 bg-[#FFC400]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC400]/15 border border-[#FFC400]/30 text-[#FFC400] text-xs font-bold uppercase tracking-wider">
          <Clock className="w-3.5 h-3.5" />
          <span>Khởi Đầu Vững Chắc &middot; Cam Kết Đồng Hành Dài Lâu</span>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Sẵn Sàng Nâng Tầm Năng Lực Số Cùng Sunny Tech?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Dù doanh nghiệp cần xây dựng hệ thống phần mềm mới, tối ưu dữ liệu lớn hay số hóa bản đồ GIS chuyên ngành, đội ngũ kỹ sư của chúng tôi luôn sẵn sàng hỗ trợ.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => navigate('/lien-he')}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm text-[#102D63] bg-[#FFC400] hover:bg-[#ffcd2e] transition-all shadow-lg hover:shadow-xl active:scale-98"
          >
            <MailCheck className="w-4 h-4" />
            <span>Đăng Ký Tư Vấn &amp; Khảo Sát Miễn Phí</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => navigate('/du-toan')}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all shadow-md active:scale-98"
          >
            <Calculator className="w-4 h-4 text-[#FFC400]" />
            <span>Ước Tính Dự Toán Trong 60 Giây</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FFC400]" />
            <span>Bàn giao 100% mã nguồn</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FFC400]" />
            <span>Phản hồi kỹ thuật trong 30 phút</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#FFC400]" />
            <span>Ký kết thỏa thuận bảo mật NDA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCtaBanner;
