import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { SolutionEstimator } from '../components/SolutionEstimator';
import { SEOHead } from '../components/SEOHead';
import { Calculator, CheckCircle2, HelpCircle } from 'lucide-react';

interface EstimatorPageProps {
  onApplyEstimateToContact: (data: { modules: string[]; scale: string; time: string }) => void;
}

export const EstimatorPage: React.FC<EstimatorPageProps> = ({ onApplyEstimateToContact }) => {
  const navigate = useNavigate();

  const handleApply = (data: { modules: string[]; scale: string; time: string }) => {
    onApplyEstimateToContact(data);
    navigate('/lien-he');
  };

  const estimationFaqs = [
    {
      q: 'Kết quả dự toán có phải là báo giá chính thức không?',
      a: 'Đây là bản ước tính sơ bộ dựa trên định mức công chuẩn của các dự án tương tự tại Sunny Tech. Sau khi khảo sát thực tế và thống nhất yêu cầu chi tiết (BRD), chúng tôi sẽ gửi bảng báo giá phân kỳ cố định (Fixed-price) kèm mốc bàn giao cụ thể.',
    },
    {
      q: 'Doanh nghiệp có thể bắt đầu với gói MVP nhỏ trước không?',
      a: 'Hoàn toàn được. Sunny Tech khuyến khích tiếp cận theo mô hình Agile: Xây dựng phiên bản MVP lõi nhanh chóng trong 3-4 tuần để người dùng nội bộ trải nghiệm trước, sau đó phát triển mở rộng các phân hệ tiếp theo.',
    },
    {
      q: 'Có chi phí phát sinh bất ngờ nào ngoài hợp đồng không?',
      a: 'Không. Sunny Tech cam kết thực hiện hợp đồng theo phạm vi thỏa thuận minh bạch. Mọi thay đổi phát sinh lớn ngoài phạm vi sẽ được phân tích tác động (Change Request) và phải có sự đồng thuận bằng văn bản của cả hai bên.',
    },
  ];

  return (
    <div>
      <SEOHead />
      {/* Page Header */}
      <PageHeader
        badge="Công Cụ Tương Tác"
        badgeIcon={<Calculator className="w-3.5 h-3.5" />}
        title="Dự Toán Quy Mô, Lộ Trình &amp; Thời Gian Go-Live"
        subtitle="Chọn quy mô doanh nghiệp và các phân hệ mong muốn để hệ thống tự động tính toán thời gian và phân kỳ triển khai tối ưu."
        currentPageTitle="Dự toán"
      />

      {/* Core Solution Estimator */}
      <SolutionEstimator onApplyEstimateToContact={handleApply} />

      {/* Estimator FAQ Section */}
      <section className="py-20 bg-white dark:bg-[#071328] border-b border-slate-200/80 dark:border-slate-800 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b88400] dark:text-[#FFC400] bg-[#FFF7D8] dark:bg-[#102D63] px-3.5 py-1.5 rounded-full border border-[#FFC400]/40">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Giải Đáp Về Ngân Sách &amp; Lộ Trình</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D63] dark:text-white">
              Những Câu Hỏi Thường Gặp Về Dự Toán Dự Án
            </h2>
          </div>

          <div className="space-y-4">
            {estimationFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0A172D] border border-slate-200/80 dark:border-slate-800 space-y-2"
              >
                <div className="flex items-center gap-2 font-bold text-[#102D63] dark:text-white text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC400] shrink-0" />
                  <span>{faq.q}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
