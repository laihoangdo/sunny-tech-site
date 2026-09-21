import React from 'react';
import { Link } from 'react-router-dom';
import { SunnyTechLogo } from './SunnyTechLogo';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#091D43] dark:bg-[#030914] text-white pt-16 pb-12 border-t border-white/10 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <SunnyTechLogo variant="white" size="lg" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              Sunny Tech là đối tác công nghệ và chuyển đổi số tin cậy cho doanh nghiệp. 
              Chúng tôi kết nối dữ liệu lớn, bản đồ số GIS và trí tuệ nhân tạo để tạo ra 
              những giải pháp vận hành thông minh và bền vững.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-amber-300">
              <ShieldCheck className="w-4 h-4 text-[#FFC400]" />
              <span>Tiêu chuẩn bảo mật ISO 27001 &amp; SLA 99.98%</span>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FFC400]">
              Hệ thống giải pháp
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/giai-phap" className="hover:text-[#FFC400] transition-colors">
                  Thiết Kế Website Chuyên Nghiệp
                </Link>
              </li>
              <li>
                <Link to="/giai-phap" className="hover:text-[#FFC400] transition-colors">
                  Nền Tảng Dữ Liệu &amp; Lakehouse
                </Link>
              </li>
              <li>
                <Link to="/giai-phap" className="hover:text-[#FFC400] transition-colors">
                  Bản Đồ Số &amp; GIS Không Gian
                </Link>
              </li>
              <li>
                <Link to="/giai-phap" className="hover:text-[#FFC400] transition-colors">
                  Chuyển Đổi Số &amp; Tự Động Hóa
                </Link>
              </li>
              <li>
                <Link to="/giai-phap" className="hover:text-[#FFC400] transition-colors">
                  Trí Tuệ Nhân Tạo &amp; Trợ Lý Ảo
                </Link>
              </li>
              <li>
                <Link to="/giai-phap" className="hover:text-[#FFC400] transition-colors">
                  Hạ Tầng Cloud &amp; Bảo Mật 24/7
                </Link>
              </li>
              <li>
                <Link to="/giai-phap" className="hover:text-[#FFC400] transition-colors">
                  Tất cả 6+ giải pháp công nghệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Process */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FFC400]">
              Sunny Tech
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/gioi-thieu" className="hover:text-[#FFC400] transition-colors">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link to="/quy-trinh" className="hover:text-[#FFC400] transition-colors">
                  Quy trình 5 bước Agile
                </Link>
              </li>
              <li>
                <Link to="/nang-luc" className="hover:text-[#FFC400] transition-colors">
                  Hệ sinh thái công nghệ
                </Link>
              </li>
              <li>
                <Link to="/du-an" className="hover:text-[#FFC400] transition-colors">
                  Dự án tiêu biểu &amp; ROI
                </Link>
              </li>
              <li>
                <Link to="/du-toan" className="hover:text-[#FFC400] transition-colors">
                  Dự toán giải pháp trực tuyến
                </Link>
              </li>
              <li>
                <Link to="/lien-he" className="hover:text-[#FFC400] transition-colors">
                  Liên hệ &amp; Khảo sát
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FFC400]">
              Kênh liên hệ kỹ thuật
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FFC400]" />
                <a href="tel:0972268792" className="hover:text-[#FFC400] transition-colors font-bold">
                  0972 268 792
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FFC400]" />
                <span>contact@sunnytech.vn</span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#FFC400] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Cầu Giấy, Hà Nội &amp; Quận 1, TP. Hồ Chí Minh
                </span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                to="/lien-he"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#102D63] bg-[#FFC400] hover:bg-[#f5b000] transition-colors shadow-sm"
              >
                Đặt lịch tư vấn trực tiếp
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Sunny Tech. Toàn bộ quyền được bảo lưu. 
            Mọi giải pháp công nghệ được phát triển theo tiêu chuẩn Enterprise.
          </div>

          <div className="flex items-center gap-4">
            <Link to="/gioi-thieu" className="hover:text-white transition-colors">
              Chính sách bảo mật (NDA)
            </Link>
            <span>&bull;</span>
            <Link to="/quy-trinh" className="hover:text-white transition-colors">
              Cam kết dịch vụ (SLA)
            </Link>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-[#FFC400] hover:text-[#102D63] transition-colors cursor-pointer"
              aria-label="Lên đầu trang"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
