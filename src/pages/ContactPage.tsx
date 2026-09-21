import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ContactSection } from '../components/ContactSection';
import { FaqSection } from '../components/FaqSection';
import { SEOHead } from '../components/SEOHead';
import { MailCheck, Phone, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  initialSolution?: string;
  initialMessage?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialSolution = '',
  initialMessage = '',
}) => {
  const contactPerks = [
    {
      icon: Clock,
      title: 'Phản Hồi Nhanh Trong 30 Phút',
      desc: 'Chuyên gia phụ trách giải pháp liên hệ trực tiếp thảo luận bài toán của doanh nghiệp.',
    },
    {
      icon: ShieldCheck,
      title: 'Ký Kết Thỏa Thuận Bảo Mật NDA',
      desc: 'Bảo vệ quyền riêng tư và dữ liệu kinh doanh của quý vị ngay từ buổi gặp gỡ đầu tiên.',
    },
    {
      icon: CheckCircle2,
      title: 'Nhận Bản Phân Tích Kỹ Thuật Sơ Bộ',
      desc: 'Được tư vấn sơ đồ kiến trúc và khuyến nghị công nghệ hoàn toàn miễn phí trong 24h.',
    },
  ];

  return (
    <div>
      <SEOHead />
      {/* Page Header */}
      <PageHeader
        badge="Kênh Kết Nối Doanh Nghiệp"
        badgeIcon={<MailCheck className="w-3.5 h-3.5" />}
        title="Liên Hệ Sunny Tech — Đăng Ký Khảo Sát &amp; Tư Vấn Kỹ Thuật"
        subtitle="Chúng tôi luôn sẵn sàng lắng nghe và cùng bạn giải quyết những bài toán hóc búa nhất về công nghệ, dữ liệu và quy trình số."
        currentPageTitle="Liên hệ"
      />

      {/* Perks bar */}
      <section className="bg-white dark:bg-[#071328] py-10 border-b border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactPerks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-[#0A172D] border border-slate-200/70 dark:border-slate-800"
                >
                  <div className="p-2.5 rounded-xl bg-[#FFF7D8] dark:bg-[#102D63] text-[#b88400] dark:text-[#FFC400] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#102D63] dark:text-white">
                      {perk.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Contact Form Section */}
      <ContactSection initialSolution={initialSolution} initialMessage={initialMessage} />

      {/* Frequently Asked Questions */}
      <FaqSection />
    </div>
  );
};
