import React from 'react';
import { Solution } from '../types';
import { X, CheckCircle2, ArrowRight, Layers, Cpu, FileCheck } from 'lucide-react';

interface SolutionModalProps {
  solution: Solution | null;
  onClose: () => void;
  onSelectForConsultation: (solutionTitle: string) => void;
}

export const SolutionModal: React.FC<SolutionModalProps> = ({
  solution,
  onClose,
  onSelectForConsultation,
}) => {
  if (!solution) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0A172D] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8 transition-colors">
        {/* Modal Header */}
        <div className="bg-[#102D63] dark:bg-[#081528] text-white p-6 sm:p-8 relative border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>

          {solution.badge && (
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFC400] text-[#102D63] mb-3">
              {solution.badge}
            </span>
          )}

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {solution.title}
          </h3>
          <p className="text-amber-300 text-sm sm:text-base font-medium mt-1">
            {solution.tagline}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[68vh] overflow-y-auto">
          {/* Full description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-2">
              Tổng quan giải pháp
            </h4>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-base">
              {solution.fullDesc}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#102D63] dark:text-[#FFC400]" />
              <span>Các phân hệ &amp; Tính năng chính</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {solution.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-[#071328] p-2.5 rounded-xl border border-slate-100 dark:border-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#f5b000] flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3 flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-[#102D63] dark:text-[#FFC400]" />
              <span>Sản phẩm bàn giao cụ thể</span>
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {solution.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC400]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-2.5 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-[#102D63] dark:text-[#FFC400]" />
              <span>Công nghệ ứng dụng</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {solution.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#102D63] dark:text-[#FFC400] text-xs font-bold border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Impact Metric Box */}
          <div className="p-4 rounded-2xl bg-[#FFF7D8] dark:bg-[#FFC400]/10 border border-[#FFC400]/40 dark:border-[#FFC400]/20 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFC400] text-[#102D63] font-bold flex items-center justify-center flex-shrink-0">
              %
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#102D63] dark:text-[#FFC400]">
                Hiệu quả thực tế cam kết
              </div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {solution.metrics}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-50 dark:bg-[#071328] border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
          >
            Đóng lại
          </button>
          <button
            onClick={() => {
              onClose();
              onSelectForConsultation(solution.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-[#102D63] bg-[#FFC400] hover:bg-[#f5b000] shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <span>Đăng ký tư vấn giải pháp này</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
