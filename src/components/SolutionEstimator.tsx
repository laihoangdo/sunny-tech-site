import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Clock, Users, ShieldCheck, Sparkles } from 'lucide-react';

interface SolutionEstimatorProps {
  onApplyEstimateToContact: (data: { modules: string[]; scale: string; time: string }) => void;
}

export const SolutionEstimator: React.FC<SolutionEstimatorProps> = ({
  onApplyEstimateToContact,
}) => {
  const [scale, setScale] = useState<'sme' | 'mid' | 'enterprise'>('sme');
  const [selectedModules, setSelectedModules] = useState<string[]>([
    'data-lakehouse',
    'digital-trans',
  ]);
  const [infraType, setInfraType] = useState<'cloud' | 'onprem' | 'hybrid'>('cloud');

  const moduleOptions = [
    {
      id: 'website-design',
      name: 'Thiết kế Website chuyên nghiệp (Cá nhân / Doanh nghiệp)',
      desc: 'Website độc bản chuẩn SEO, tốc độ cao, CMS quản trị dễ dàng',
      weeks: 2,
    },
    {
      id: 'data-lakehouse',
      name: 'Kho dữ liệu Data Lakehouse & BI',
      desc: 'Tập trung hóa dữ liệu ERP/CRM/POS và báo cáo tự động',
      weeks: 3,
    },
    {
      id: 'gis-mapping',
      name: 'Bản đồ số GIS & Giám sát hiện trường',
      desc: 'Quản lý tài sản không gian, định vị và tối ưu tuyến đường',
      weeks: 4,
    },
    {
      id: 'digital-trans',
      name: 'Số hóa quy trình tác nghiệp & Ký số',
      desc: 'Bãi bỏ giấy tờ, tự động hóa luồng phê duyệt đa cấp',
      weeks: 3,
    },
    {
      id: 'ai-automation',
      name: 'Trí tuệ nhân tạo AI & Trợ lý ảo nội bộ',
      desc: 'OCR bóc tách chứng từ, hỏi đáp tài liệu thông minh',
      weeks: 3,
    },
    {
      id: 'cloud-security',
      name: 'Hạ tầng Cloud & An toàn thông tin chuẩn ISO',
      desc: 'Thiết kế High-Availability, chống tấn công DDoS, rà quét bảo mật',
      weeks: 2,
    },
  ];

  const toggleModule = (id: string) => {
    if (selectedModules.includes(id)) {
      if (selectedModules.length > 1) {
        setSelectedModules(selectedModules.filter((m) => m !== id));
      }
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  // Calculate estimated duration
  const baseWeeks = selectedModules.reduce((acc, curr) => {
    const mod = moduleOptions.find((m) => m.id === curr);
    return acc + (mod ? mod.weeks : 2);
  }, 2);

  const scaleMultiplier = scale === 'sme' ? 0.8 : scale === 'mid' ? 1.0 : 1.35;
  const estimatedWeeks = Math.max(3, Math.round(baseWeeks * scaleMultiplier));
  const estimatedTeam = scale === 'sme' ? '3 - 4 Chuyên gia' : scale === 'mid' ? '5 - 7 Chuyên gia' : '8 - 12 Chuyên gia';

  const handleApply = () => {
    const names = selectedModules.map(
      (m) => moduleOptions.find((opt) => opt.id === m)?.name || m
    );
    const scaleText =
      scale === 'sme' ? 'Doanh nghiệp SME (< 100 nhân sự)' : scale === 'mid' ? 'Doanh nghiệp vừa (100 - 500 nhân sự)' : 'Tập đoàn lớn (> 500 nhân sự)';
    onApplyEstimateToContact({
      modules: names,
      scale: scaleText,
      time: `${estimatedWeeks} tuần`,
    });
  };

  return (
    <section id="du-toan" className="py-20 lg:py-28 bg-[#F5F7FB] dark:bg-[#060F1E] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f5b000] dark:text-[#FFC400] bg-[#FFF7D8] dark:bg-[#102D63] px-3.5 py-1.5 rounded-full border border-[#FFC400]/40">
            <Calculator className="w-3.5 h-3.5" />
            <span>Công cụ tương tác</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D63] dark:text-white tracking-tight leading-tight">
            Ước Tính Lộ Trình &amp; Quy Mô Giải Pháp
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Chọn các phân hệ công nghệ và quy mô doanh nghiệp của quý vị để nhận bảng phác thảo 
            thời gian thực hiện và đề xuất nhân sự triển khai phù hợp nhất.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0A172D] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-8">
            {/* Step 1: Scale */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3">
                1. Quy mô doanh nghiệp của quý vị
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'sme', label: 'Doanh nghiệp SME', sub: '< 100 người' },
                  { id: 'mid', label: 'Doanh nghiệp Vừa', sub: '100 - 500 người' },
                  { id: 'enterprise', label: 'Tập đoàn Lớn', sub: '> 500 người' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setScale(item.id as any)}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                      scale === item.id
                        ? 'bg-[#102D63] dark:bg-[#FFC400] text-white dark:text-[#102D63] border-[#102D63] dark:border-[#FFC400] shadow-sm'
                        : 'bg-slate-50 dark:bg-[#071328] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-bold leading-tight">{item.label}</div>
                    <div className={`text-[10px] mt-0.5 ${scale === item.id ? 'text-amber-300 dark:text-[#102D63] font-semibold' : 'text-slate-500 dark:text-slate-400'}`}>
                      {item.sub}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Modules Selection */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3">
                2. Các khối giải pháp cần triển khai (Chọn nhiều)
              </div>
              <div className="space-y-2.5">
                {moduleOptions.map((mod) => {
                  const isChecked = selectedModules.includes(mod.id);
                  return (
                    <div
                      key={mod.id}
                      onClick={() => toggleModule(mod.id)}
                      className={`p-3.5 rounded-2xl border flex items-start gap-3.5 cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-[#FFF7D8]/60 dark:bg-[#FFC400]/10 border-[#FFC400] dark:border-[#FFC400]/60 shadow-xs'
                          : 'bg-white dark:bg-[#071328] border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 flex-shrink-0 transition-colors ${
                          isChecked
                            ? 'bg-[#102D63] dark:bg-[#FFC400] text-[#FFC400] dark:text-[#102D63]'
                            : 'border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#102D63] dark:text-white">
                          {mod.name}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                          {mod.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Infrastructure Preference */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3">
                3. Định hướng hạ tầng công nghệ
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'cloud', label: 'Public Cloud', sub: 'AWS, GCP, Viettel' },
                  { id: 'hybrid', label: 'Mô hình Hybrid', sub: 'Linh hoạt kết hợp' },
                  { id: 'onprem', label: 'On-Premise', sub: 'Hạ tầng riêng' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setInfraType(item.id as any)}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                      infraType === item.id
                        ? 'bg-[#102D63] dark:bg-[#FFC400] text-white dark:text-[#102D63] border-[#102D63] dark:border-[#FFC400]'
                        : 'bg-slate-50 dark:bg-[#071328] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-bold">{item.label}</div>
                    <div className={`text-[10px] mt-0.5 ${infraType === item.id ? 'text-amber-300 dark:text-[#102D63] font-semibold' : 'text-slate-500 dark:text-slate-400'}`}>
                      {item.sub}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Realtime Output Summary Card */}
          <div className="lg:col-span-5 bg-[#102D63] dark:bg-[#0A172D] text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 relative overflow-hidden border border-transparent dark:border-slate-800">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFC400]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FFC400]">
                Phác Thảo Dự Toán Sơ Bộ
              </span>
              <span className="text-xs text-slate-300 bg-white/10 px-2.5 py-1 rounded-full">
                Phương pháp Agile
              </span>
            </div>

            {/* Metric Displays */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#FFC400]" />
                  <span>Thời gian Go-Live</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#FFC400]">
                  ~{estimatedWeeks} Tuần
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Bàn giao MVP chạy thử sau tuần thứ 3
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                  <Users className="w-3.5 h-3.5 text-[#FFC400]" />
                  <span>Quy mô nhân sự</span>
                </div>
                <div className="text-lg sm:text-xl font-extrabold text-white mt-1">
                  {estimatedTeam}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Kiến trúc sư, Dev &amp; QA chuyên trách
                </div>
              </div>
            </div>

            {/* Selected Modules Review */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Các phân hệ đã chọn ({selectedModules.length}):
              </div>
              <div className="space-y-1.5">
                {selectedModules.map((m) => {
                  const mod = moduleOptions.find((opt) => opt.id === m);
                  return (
                    <div
                      key={m}
                      className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg bg-white/5"
                    >
                      <span className="text-slate-200">{mod?.name}</span>
                      <span className="text-[#FFC400] font-semibold">Đã chọn</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Warranty & SLA statement */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>
                Bao gồm 12 tháng bảo hành kỹ thuật, cam kết SLA 99.98% và bàn giao 100% mã nguồn theo hợp đồng.
              </span>
            </div>

            {/* Action Button */}
            <button
              id="estimator-apply-btn"
              onClick={handleApply}
              className="w-full py-4 px-6 rounded-full text-base font-bold text-[#102D63] bg-[#FFC400] hover:bg-[#f5b000] active:scale-95 shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Chuyển cấu hình này vào Form tư vấn</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
