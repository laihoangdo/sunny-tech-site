import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data';
import {
  Search,
  Compass,
  Code2,
  Rocket,
  Headphones,
  CheckCircle2,
  Clock,
  PackageCheck,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const currentStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="quy-trinh" className="py-20 lg:py-28 bg-white dark:bg-[#071328] border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f5b000] dark:text-[#FFC400] bg-[#FFF7D8] dark:bg-[#102D63] px-3.5 py-1.5 rounded-full border border-[#FFC400]/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Phương pháp luận triển khai</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D63] dark:text-white tracking-tight leading-tight">
            Quy Trình 5 Bước Chuyên Nghiệp — Rõ Ràng &amp; Đo Lường Được
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Chúng tôi ứng dụng mô hình Agile kết hợp kiểm soát chất lượng chuẩn Enterprise, đảm bảo
            mọi dự án hoàn thành đúng tiến độ, tối ưu ngân sách và sớm đưa vào khai thác thực tế.
          </p>
        </div>

        {/* Step Tabs Navigation */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#102D63] dark:bg-[#0E234D] text-white border-[#102D63] dark:border-[#FFC400]/50 shadow-lg scale-[1.02]'
                    : 'bg-slate-50 dark:bg-[#0A172D] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-[#FFC400] hover:bg-white dark:hover:bg-[#0E1F3D]'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFC400]" />
                )}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm ${
                      isActive
                        ? 'bg-[#FFC400] text-[#102D63]'
                        : 'bg-white dark:bg-[#071328] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {step.step}
                  </span>
                  <span className={isActive ? 'text-[#FFC400]' : 'text-slate-400 dark:text-slate-500'}>
                    {getStepIcon(step.iconName)}
                  </span>
                </div>

                <div>
                  <div
                    className={`text-xs font-bold uppercase tracking-wider mb-0.5 ${
                      isActive ? 'text-amber-300 dark:text-[#FFC400]' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    Giai đoạn {step.step}
                  </div>
                  <div className="text-sm font-bold leading-snug line-clamp-2">
                    {step.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase */}
        <div className="mt-8 bg-gradient-to-br from-[#F8FAFD] to-white dark:from-[#0A172D] dark:to-[#081528] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Step Overview & Scope */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-2xl bg-[#FFC400] text-[#102D63] font-extrabold text-xl flex items-center justify-center shadow-xs">
                  {currentStep.step}
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold text-[#102D63] dark:text-white">
                    {currentStep.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#f5b000] dark:text-[#FFC400]">
                    {currentStep.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentStep.description}
              </p>

              <div className="flex items-center gap-3 text-xs font-bold text-[#102D63] dark:text-[#FFC400] bg-[#FFF7D8] dark:bg-[#102D63] px-4 py-2.5 rounded-xl border border-[#FFC400]/40">
                <Clock className="w-4 h-4 text-[#f5b000] dark:text-[#FFC400]" />
                <span>Thời gian thực hiện dự kiến: {currentStep.duration}</span>
              </div>
            </div>

            {/* Right: Key Activities & Output Deliverables */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3">
                  Hoạt động trọng tâm trong giai đoạn này
                </h4>
                <div className="space-y-2.5">
                  {currentStep.activities.map((act, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-[#071328] border border-slate-200/80 dark:border-slate-800 text-sm text-slate-800 dark:text-slate-200 shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#f5b000] flex-shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tangible Output Box */}
              <div className="p-4 rounded-2xl bg-[#102D63] dark:bg-[#050E1D] text-white flex items-start gap-3.5 shadow-sm border border-transparent dark:border-slate-800">
                <PackageCheck className="w-6 h-6 text-[#FFC400] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-amber-300 dark:text-[#FFC400]">
                    Sản phẩm bàn giao giai đoạn (Deliverable)
                  </div>
                  <div className="text-sm font-semibold text-slate-100 mt-1">
                    {currentStep.output}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-bold">
            <button
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeStepIndex === 0}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activeStepIndex === 0
                  ? 'opacity-40 cursor-not-allowed text-slate-400'
                  : 'text-[#102D63] dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              &larr; Giai đoạn trước
            </button>

            <span className="text-slate-500 dark:text-slate-400">
              Bước {activeStepIndex + 1} trên {PROCESS_STEPS.length}
            </span>

            <button
              onClick={() =>
                setActiveStepIndex((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))
              }
              disabled={activeStepIndex === PROCESS_STEPS.length - 1}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1 ${
                activeStepIndex === PROCESS_STEPS.length - 1
                  ? 'opacity-40 cursor-not-allowed text-slate-400'
                  : 'text-[#102D63] bg-[#FFC400] hover:bg-[#f5b000]'
              }`}
            >
              <span>Giai đoạn tiếp theo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
