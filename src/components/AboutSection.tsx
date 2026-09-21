import React from 'react';
import {
  Waypoints,
  BarChart3,
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  Sparkles,
  Users,
  Award,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Waypoints,
      title: 'Kiến Trúc Kết Nối Mạch Lạc',
      desc: 'Xóa bỏ tình trạng phân mảnh thông tin, kết nối dữ liệu từ hiện trường, máy móc thiết bị đến các phòng ban quản trị trong một dòng chảy liền mạch.',
    },
    {
      icon: BarChart3,
      title: 'Dữ Liệu & Bản Đồ Số Trực Quan',
      desc: 'Đưa dữ liệu phức tạp về đúng ngữ cảnh không gian và thời gian thực, giúp mọi cấp quản lý nắm bắt toàn cảnh và ra quyết định dứt khoát.',
    },
    {
      icon: ShieldCheck,
      title: 'Bảo Mật & Độ Tin Cậy Cao',
      desc: 'Thiết kế hạ tầng an toàn theo tiêu chuẩn quốc tế, mã hóa dữ liệu nghiêm ngặt, đảm bảo tính liên tục của hoạt động sản xuất kinh doanh.',
    },
    {
      icon: TrendingUp,
      title: 'Tăng Trưởng Bền Vững & Tối Ưu ROI',
      desc: 'Mỗi dòng mã và giải pháp công nghệ đều gắn liền với bài toán kinh tế thực tế: cắt giảm chi phí lãng phí và tăng tốc độ phục vụ khách hàng.',
    },
  ];

  return (
    <section id="gioi-thieu" className="py-20 lg:py-28 bg-white dark:bg-[#071328] border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Mission & Identity */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f5b000] dark:text-[#FFC400] bg-[#FFF7D8] dark:bg-[#102D63] px-3.5 py-1.5 rounded-full border border-[#FFC400]/40">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Về Sunny Tech</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D63] dark:text-white tracking-tight leading-tight">
              Công nghệ hiệu quả bắt đầu từ việc thấu hiểu bài toán thực tế
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Chúng tôi tin rằng công nghệ tiên tiến không nhất thiết phải cồng kềnh hay xa vời. 
              Tại <strong className="text-slate-900 dark:text-white">Sunny Tech</strong>, chúng tôi đóng vai trò là kiến trúc sư số — đồng hành 
              cùng doanh nghiệp chuyển đổi những bài toán vận hành và dữ liệu phức tạp thành những 
              công cụ trực quan, dễ ứng dụng và mang lại giá trị tức thì.
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0A172D] border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Cam kết của chúng tôi
              </div>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#f5b000] flex-shrink-0 mt-0.5" />
                  <span>Không áp đặt giải pháp chung chung; may đo đúng nhu cầu doanh nghiệp.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#f5b000] flex-shrink-0 mt-0.5" />
                  <span>Bàn giao trọn gói mã nguồn, kiến trúc và toàn quyền làm chủ dữ liệu.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#f5b000] flex-shrink-0 mt-0.5" />
                  <span>Đồng hành bảo trì dài hạn, phản hồi kỹ thuật nhanh trong 30 phút.</span>
                </li>
              </ul>
            </div>

            {/* Credential Badges */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#102D63] dark:text-slate-200">
                <Award className="w-5 h-5 text-[#f5b000]" />
                <span>Quy trình chuẩn ISO &amp; Agile</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#102D63] dark:text-slate-200">
                <Users className="w-5 h-5 text-[#f5b000]" />
                <span>Đội ngũ kỹ sư cấp cao 10+ năm kinh nghiệm</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core Strategic Pillars */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#F8FAFD] dark:bg-[#0A172D] border border-slate-200/80 dark:border-slate-800 hover:border-[#FFC400] hover:bg-white dark:hover:bg-[#0E1F3D] hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#FFF7D8] dark:bg-[#102D63] group-hover:bg-[#FFC400] text-[#102D63] dark:text-[#FFC400] group-hover:text-[#102D63] flex items-center justify-center mb-5 transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-[#102D63] dark:text-white mb-2 group-hover:text-[#091D43] dark:group-hover:text-[#FFC400]">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pillar.desc}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center text-xs font-semibold text-[#102D63] dark:text-[#FFC400] group-hover:text-[#f5b000] transition-colors">
                      <span>Nền tảng tiêu chuẩn &rarr;</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
