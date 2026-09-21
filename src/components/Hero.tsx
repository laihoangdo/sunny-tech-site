import React, { useState } from 'react';
import { TRUST_METRICS } from '../data';
import {
  ArrowRight,
  Database,
  MapPin,
  Cpu,
  Server,
  Activity,
  CheckCircle2,
  Sparkles,
  Layers,
  ShieldCheck,
} from 'lucide-react';

interface HeroProps {
  onExploreSolutions: () => void;
  onOpenEstimator: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreSolutions,
  onOpenEstimator,
  onOpenConsultation,
}) => {
  const [activeArchTab, setActiveArchTab] = useState<'gis' | 'data' | 'cloud' | 'ai'>('gis');

  const archTabs = [
    { id: 'gis', label: 'Bản đồ số & GIS', icon: MapPin },
    { id: 'data', label: 'Data Lakehouse', icon: Database },
    { id: 'cloud', label: 'Cloud & DevOps', icon: Server },
    { id: 'ai', label: 'AI Tự động hóa', icon: Cpu },
  ];

  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-slate-100/50 dark:from-[#071328] dark:via-[#060F1E] dark:to-[#081528] bg-tech-grid"
    >
      {/* Ambient solar tech glow effects */}
      <div className="absolute top-12 -right-28 w-96 h-96 rounded-full bg-[#FFC400]/15 dark:bg-[#FFC400]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-[#102D63]/8 dark:bg-[#102D63]/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF7D8] dark:bg-[#102D63] border border-[#FFC400]/50 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FFC400] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#f5b000] -ml-3" />
              <span className="text-xs font-extrabold tracking-wide uppercase text-[#102D63] dark:text-[#FFC400]">
                Sunny Tech &middot; Giải Pháp Công Nghệ &amp; Chuyển Đổi Số
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl font-extrabold text-[#102D63] dark:text-white tracking-tight leading-[1.18]">
              Kiến Tạo Giải Pháp Công Nghệ Toàn Diện Cho{' '}
              <span className="relative inline-block text-[#102D63] dark:text-[#FFC400]">
                Tăng Trưởng Bền Vững
                <span className="absolute left-0 bottom-1 w-full h-2.5 bg-[#FFC400]/35 dark:bg-[#FFC400]/25 -z-10 rounded-full"></span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Sunny Tech kết nối <strong className="text-slate-900 dark:text-white font-semibold">nền tảng dữ liệu lớn</strong>,{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">bản đồ số GIS doanh nghiệp</strong> và{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">trí tuệ nhân tạo</strong> thành những hệ thống
              vận hành linh hoạt, chuẩn hóa và tối ưu chi phí thực tế.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#f5b000] flex-shrink-0" />
                <span>Kiến trúc mở, tương thích hệ thống cũ</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#f5b000] flex-shrink-0" />
                <span>Bảo mật đa tầng chuẩn ISO 27001</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#f5b000] flex-shrink-0" />
                <span>Trực quan hóa thời gian thực (Realtime)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#f5b000] flex-shrink-0" />
                <span>Đồng hành chuyển giao &amp; bảo trì 24/7</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <button
                id="hero-explore-btn"
                onClick={onExploreSolutions}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-base font-bold text-white bg-[#102D63] hover:bg-[#091D43] dark:bg-[#FFC400] dark:text-[#102D63] dark:hover:bg-[#f5b000] shadow-md hover:shadow-lg transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Khám phá 6 hệ giải pháp</span>
                <ArrowRight className="w-4 h-4 text-[#FFC400] dark:text-[#102D63]" />
              </button>

              <button
                id="hero-estimator-btn"
                onClick={onOpenEstimator}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-bold text-[#102D63] dark:text-amber-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-[#FFC400] hover:bg-[#FFF7D8]/60 dark:hover:bg-slate-750 shadow-xs hover:shadow transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#f5b000]" />
                <span>Dự toán lộ trình giải pháp</span>
              </button>
            </div>

            {/* Quick Consultation Line */}
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Ký cam kết bảo mật thông tin (NDA)
              </span>
              <span>&bull;</span>
              <span>Tư vấn kỹ thuật miễn phí trong 30 phút</span>
            </div>
          </div>

          {/* Right Column: Interactive Solution Hub Simulation */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div
              id="hero-architecture-card"
              className="relative bg-white dark:bg-[#0A172D] rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xl shadow-slate-300/40 dark:shadow-black/50 p-5 md:p-6 overflow-hidden"
            >
              {/* Header of the simulated command center */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FFC400]" />
                  <span className="text-xs font-bold text-[#102D63] dark:text-white uppercase tracking-wider">
                    Sunny Tech Enterprise Core
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>SLA 99.98% Active</span>
                </div>
              </div>

              {/* Architecture Selector Tabs */}
              <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl mb-4 text-xs font-semibold">
                {archTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeArchTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveArchTab(tab.id as any)}
                      className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#102D63] dark:bg-[#193F87] text-white shadow-xs font-bold'
                          : 'text-slate-600 dark:text-slate-300 hover:text-[#102D63] dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 mb-1 ${isActive ? 'text-[#FFC400]' : 'text-slate-500 dark:text-slate-400'}`} />
                      <span className="text-[10px] leading-tight text-center truncate w-full">
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Interactive Visual Panel */}
              <div className="relative rounded-xl bg-slate-950 p-4 text-white overflow-hidden min-h-[260px] flex flex-col justify-between">
                {/* Background Tech Network Effect */}
                <div className="absolute inset-0 bg-tech-dots-dark opacity-35" />
                <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-[#FFC400]/20 blur-2xl pointer-events-none" />

                {/* Top Status Bar */}
                <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-300 border-b border-white/10 pb-2.5">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#FFC400]" />
                    <span className="text-white font-mono font-medium">
                      {activeArchTab === 'gis' && 'Hạ tầng GIS không gian · 45,210 nodes'}
                      {activeArchTab === 'data' && 'Data Pipeline Ingestion · 1.4M msg/s'}
                      {activeArchTab === 'cloud' && 'Cluster Kubernetes · High-Availability'}
                      {activeArchTab === 'ai' && 'AI Neural Engine · Inference latency 14ms'}
                    </span>
                  </span>
                  <span className="font-mono text-[#FFC400] text-[10px] bg-white/10 px-2 py-0.5 rounded">
                    Production
                  </span>
                </div>

                {/* Central Visual Representation per tab */}
                <div className="relative z-10 py-4">
                  {activeArchTab === 'gis' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300">Mạng lưới định vị hạ tầng thời gian thực</span>
                        <span className="text-amber-400 font-mono text-[11px]">Độ chính xác: &lt; 0.5m</span>
                      </div>
                      {/* Grid Nodes Simulation */}
                      <div className="relative h-24 bg-navy-900/80 rounded-lg border border-white/15 p-2 flex items-center justify-around overflow-hidden">
                        <div className="text-center">
                          <div className="w-8 h-8 mx-auto rounded-full bg-[#FFC400]/20 border border-[#FFC400] flex items-center justify-center text-[#FFC400] text-xs font-bold shadow-sm">
                            HQ
                          </div>
                          <span className="text-[10px] text-slate-400 mt-1 block">Trung tâm</span>
                        </div>
                        <div className="flex-1 h-[2px] bg-gradient-to-r from-[#FFC400] via-amber-200 to-sky-400 mx-2 relative">
                          <span className="absolute -top-1 left-1/2 w-2.5 h-2.5 rounded-full bg-[#FFC400] animate-ping" />
                        </div>
                        <div className="text-center">
                          <div className="w-8 h-8 mx-auto rounded-full bg-sky-500/20 border border-sky-400 flex items-center justify-center text-sky-400 text-xs font-bold">
                            GIS
                          </div>
                          <span className="text-[10px] text-slate-400 mt-1 block">Bản đồ số</span>
                        </div>
                        <div className="flex-1 h-[2px] bg-gradient-to-r from-sky-400 to-emerald-400 mx-2 relative"></div>
                        <div className="text-center">
                          <div className="w-8 h-8 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 text-xs font-bold">
                            IoT
                          </div>
                          <span className="text-[10px] text-slate-400 mt-1 block">Hiện trường</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="bg-white/5 rounded p-2 border border-white/10">
                          <span className="text-slate-400 block text-[10px]">Tài sản số hóa</span>
                          <span className="text-white font-bold font-mono">100% Đồng bộ</span>
                        </div>
                        <div className="bg-white/5 rounded p-2 border border-white/10">
                          <span className="text-slate-400 block text-[10px]">Tối ưu lộ trình</span>
                          <span className="text-[#FFC400] font-bold font-mono">-38% Chi phí di chuyển</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeArchTab === 'data' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300">Kho dữ liệu tập trung (Lakehouse)</span>
                        <span className="text-amber-400 font-mono text-[11px]">Tự động hóa ETL</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[11px] bg-white/5 p-2 rounded border border-white/10">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span>ERP / CRM / POS Sources</span>
                          </span>
                          <span className="text-emerald-400 font-mono">Đã kết nối</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] bg-white/5 p-2 rounded border border-white/10">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
                            <span>ClickHouse &amp; Apache Kafka Pipeline</span>
                          </span>
                          <span className="text-[#FFC400] font-mono">Xử lý thời gian thực</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] bg-white/5 p-2 rounded border border-white/10">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-sky-400" />
                            <span>Executive BI Reporting Dashboard</span>
                          </span>
                          <span className="text-sky-400 font-mono">Độ trễ 0s</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeArchTab === 'cloud' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300">Hạ tầng Cloud Auto-scaling</span>
                        <span className="text-emerald-400 font-mono text-[11px]">Zero-Downtime CI/CD</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                        <div className="bg-white/5 p-2.5 rounded-lg border border-white/10">
                          <span className="text-slate-400 text-[10px] block">CPU Load</span>
                          <span className="text-emerald-400 font-mono font-bold text-sm">24.6%</span>
                        </div>
                        <div className="bg-white/5 p-2.5 rounded-lg border border-white/10">
                          <span className="text-slate-400 text-[10px] block">Nodes Cluster</span>
                          <span className="text-[#FFC400] font-mono font-bold text-sm">12 Active</span>
                        </div>
                        <div className="bg-white/5 p-2.5 rounded-lg border border-white/10">
                          <span className="text-slate-400 text-[10px] block">FinOps Tiết kiệm</span>
                          <span className="text-sky-400 font-mono font-bold text-sm">35%</span>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded p-2 text-[11px] text-slate-300 flex items-center justify-between border border-white/10">
                        <span>Hệ thống dự phòng thảm họa (Multi-Region DR)</span>
                        <span className="text-emerald-400 font-semibold">Sẵn sàng 100%</span>
                      </div>
                    </div>
                  )}

                  {activeArchTab === 'ai' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300">Trí tuệ nhân tạo &amp; Trợ lý ảo RAG</span>
                        <span className="text-[#FFC400] font-mono text-[11px]">Độ chính xác 98.4%</span>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2.5 border border-white/10 space-y-2">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-300">OCR Tự động trích xuất hợp đồng/hóa đơn</span>
                          <span className="text-emerald-400 font-mono font-semibold">Hoàn tất</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-300">Dự báo sản lượng &amp; tồn kho chuỗi thời gian</span>
                          <span className="text-[#FFC400] font-mono font-semibold">Khớp 94.2%</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-300">Trợ lý nghiệp vụ giải đáp tài liệu nội bộ</span>
                          <span className="text-sky-400 font-mono font-semibold">24/7 tức thì</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Card Action */}
                <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    Sunny Tech Enterprise Framework 2026
                  </span>
                  <button
                    onClick={onOpenConsultation}
                    className="text-[11px] font-bold text-[#FFC400] hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Chi tiết kiến trúc</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Lower badge below display */}
              <div className="mt-3 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 px-1">
                <span className="flex items-center gap-1.5 font-medium">
                  <Layers className="w-3.5 h-3.5 text-[#102D63] dark:text-[#FFC400]" />
                  May đo theo từng bài toán doanh nghiệp
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Bàn giao 100% mã nguồn</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Trust Metrics Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200/80 dark:border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {TRUST_METRICS.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0A172D] rounded-xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-[#FFC400]/80 hover:shadow-md transition-all group"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#102D63] dark:text-white font-mono tracking-tight group-hover:text-[#091D43] dark:group-hover:text-[#FFC400] flex items-center">
                  <span>{metric.value}</span>
                  <span className="text-[#FFC400] ml-0.5 text-xl font-bold">&bull;</span>
                </div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">{metric.label}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{metric.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
