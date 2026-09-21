import React, { useState } from 'react';
import { ContactFormState } from '../types';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Headphones,
} from 'lucide-react';

interface ContactSectionProps {
  initialSolution?: string;
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialSolution = '',
  initialMessage = '',
}) => {
  const [formData, setFormData] = useState<ContactFormState>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    solutionInterest: initialSolution || 'Tư vấn kiến trúc tổng thể',
    budgetRange: 'Từ 200 - 500 triệu',
    message: initialMessage || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if initial props change
  React.useEffect(() => {
    if (initialSolution) {
      setFormData((prev) => ({ ...prev, solutionInterest: initialSolution }));
    }
  }, [initialSolution]);

  React.useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    setIsSubmitting(true);
    // Simulate instantaneous enterprise dispatch
    setTimeout(() => {
      const randomCode = 'ST-' + Math.floor(100000 + Math.random() * 900000);
      setTicketId(randomCode);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      solutionInterest: 'Tư vấn kiến trúc tổng thể',
      budgetRange: 'Từ 200 - 500 triệu',
      message: '',
    });
  };

  return (
    <section id="lien-he" className="py-20 lg:py-28 bg-[#102D63] text-white relative overflow-hidden">
      {/* Background Solar Network lines */}
      <div className="absolute inset-0 bg-tech-dots-dark opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC400]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Channels & Commitments */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFC400] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                <Headphones className="w-3.5 h-3.5" />
                <span>Kết nối trực tiếp chuyên gia</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Sẵn Sàng Bắt Đầu Hành Trình Chuyển Đổi Số?
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                Hãy chia sẻ với chúng tôi về bài toán của doanh nghiệp. Đội ngũ kiến trúc sư giải pháp 
                của Sunny Tech sẽ phân tích và phản hồi phương án kỹ thuật khả thi nhất.
              </p>
            </div>

            {/* Direct Contact List */}
            <div className="space-y-4 pt-2">
              <a
                href="tel:0972268792"
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFC400]/80 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFC400] text-[#102D63] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Hotline tư vấn giải pháp 24/7</div>
                  <div className="text-lg font-extrabold text-white group-hover:text-[#FFC400] transition-colors">
                    0972 268 792
                  </div>
                  <div className="text-[11px] text-amber-300">Phản hồi trong vòng 30 phút</div>
                </div>
              </a>

              <a
                href="mailto:contact@sunnytech.vn"
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFC400]/80 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF7D8] text-[#102D63] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Email trao đổi nghiệp vụ &amp; kỹ thuật</div>
                  <div className="text-base font-bold text-white group-hover:text-[#FFC400] transition-colors">
                    contact@sunnytech.vn
                  </div>
                  <div className="text-[11px] text-slate-400">Tiếp nhận đề bài RFP/TOR 24/7</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-white/10 text-[#FFC400] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-slate-400 font-medium">Hệ thống văn phòng</div>
                  <div className="text-xs text-slate-200 leading-snug">
                    <strong className="text-white">Trụ sở Hà Nội:</strong> Tầng 12, Tòa nhà Công nghệ, Q. Cầu Giấy, Hà Nội
                  </div>
                  <div className="text-xs text-slate-200 leading-snug">
                    <strong className="text-white">Văn phòng TP.HCM:</strong> Tầng 8, Tòa nhà Innovation, Quận 1, TP. Hồ Chí Minh
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Badge */}
            <div className="p-4 rounded-2xl bg-[#091D43] border border-white/15 flex items-center gap-3 text-xs text-slate-300">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>
                Cam kết bảo mật thông tin kinh doanh (NDA) chuẩn quốc tế trước khi khảo sát thực địa.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#0A172D] text-slate-900 dark:text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100 dark:border-slate-800 relative transition-colors">
              {submitted ? (
                <div className="text-center py-8 space-y-6 animate-in fade-in duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                      Mã phiếu yêu cầu: {ticketId}
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#102D63] dark:text-white mt-3">
                      Đã Tiếp Nhận Yêu Cầu Tư Vấn!
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 max-w-md mx-auto leading-relaxed">
                      Cảm ơn <strong>{formData.fullName}</strong> ({formData.company || 'Quý doanh nghiệp'}). 
                      Chuyên gia giải pháp phụ trách mảng <strong>{formData.solutionInterest}</strong> sẽ gọi điện thoại 
                      qua số <strong>{formData.phone}</strong> trong vòng 30 phút làm việc.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#071328] border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto text-left space-y-1">
                    <div>&bull; <strong>Giải pháp:</strong> {formData.solutionInterest}</div>
                    <div>&bull; <strong>Email nhận tài liệu:</strong> {formData.email || 'Theo số điện thoại'}</div>
                    <div>&bull; <strong>Thời gian tiếp nhận:</strong> {new Date().toLocaleTimeString('vi-VN')} - Hôm nay</div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-[#102D63] bg-[#FFC400] hover:bg-[#f5b000] transition-colors cursor-pointer"
                  >
                    <span>Gửi thêm yêu cầu giải pháp khác</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#102D63] dark:text-white">
                      Đăng Ký Khảo Sát &amp; Tư Vấn Giải Pháp
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Hoàn toàn miễn phí &middot; Nhận bản phân tích sơ bộ trong 24 giờ
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Họ và tên của quý vị <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ví dụ: Nguyễn Hoàng Long"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#071328] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Số điện thoại liên hệ <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ví dụ: 0912 345 678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#071328] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Email doanh nghiệp
                      </label>
                      <input
                        type="email"
                        placeholder="ten.ban@congty.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#071328] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Tên doanh nghiệp / Đơn vị
                      </label>
                      <input
                        type="text"
                        placeholder="Tập đoàn / Công ty..."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#071328] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Giải pháp quan tâm chính
                      </label>
                      <select
                        value={formData.solutionInterest}
                        onChange={(e) => setFormData({ ...formData, solutionInterest: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#071328] text-slate-900 dark:text-white focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 text-sm outline-none transition-all cursor-pointer"
                      >
                        <option value="Tư vấn kiến trúc tổng thể">Tư vấn kiến trúc tổng thể</option>
                        <option value="Thiết Kế Website Chuyên Nghiệp (Cá Nhân, Tổ Chức & Doanh Nghiệp)">Thiết Kế Website Chuyên Nghiệp</option>
                        <option value="Nền Tảng Dữ Liệu & Điện Toán Đám Mây">Nền Tảng Dữ Liệu &amp; Lakehouse</option>
                        <option value="Hệ Thống Bản Đồ Số & GIS Doanh Nghiệp">Hệ Thống Bản Đồ Số &amp; GIS</option>
                        <option value="Tư Vấn & Triển Khai Chuyển Đổi Số">Chuyển Đổi Số &amp; Tự Động Hóa</option>
                        <option value="Ứng Dụng Trí Tuệ Nhân Tạo & AI">Trí Tuệ Nhân Tạo &amp; Trợ Lý Ảo</option>
                        <option value="Hạ Tầng Điện Toán Đám Mây & Bảo Mật">Hạ Tầng Cloud &amp; Bảo Mật ISO</option>
                        <option value="Tích Hợp IoT & Giám Sát Thiết Bị">Tích Hợp IoT &amp; Cảm Biến</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Ngân sách dự kiến
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#071328] text-slate-900 dark:text-white focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 text-sm outline-none transition-all cursor-pointer"
                      >
                        <option value="Dưới 200 triệu">Dưới 200 triệu VNĐ</option>
                        <option value="Từ 200 - 500 triệu">Từ 200 - 500 triệu VNĐ</option>
                        <option value="Từ 500 triệu - 1 tỷ">Từ 500 triệu - 1 tỷ VNĐ</option>
                        <option value="Trên 1 tỷ (Quy mô lớn)">Trên 1 tỷ VNĐ (Enterprise)</option>
                        <option value="Chưa xác định, cần tư vấn">Chưa xác định, cần tư vấn</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Mô tả bài toán hoặc yêu cầu cụ thể
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mô tả ngắn gọn về tình trạng hiện tại, số lượng người dùng hoặc mục tiêu cần đạt được..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#071328] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-full text-base font-bold text-[#102D63] bg-[#FFC400] hover:bg-[#f5b000] active:scale-95 shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Đang kết nối chuyên gia...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Gửi yêu cầu khảo sát &amp; tư vấn ngay</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-slate-500 dark:text-slate-400 mt-2.5">
                      Sunny Tech cam kết bảo mật tuyệt đối mọi thông tin dự án theo thỏa thuận NDA.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
