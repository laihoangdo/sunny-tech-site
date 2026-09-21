import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Home, ArrowLeft, Layers, Phone } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center pt-32 pb-20 px-4">
      <SEOHead
        title="404 – Không Tìm Thấy Trang | Sunny Tech"
        description="Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển. Quay lại trang chủ Sunny Tech."
        noIndex={true}
      />
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-[#FFF7D8] dark:bg-[#102D63] border border-[#FFC400]/50 text-[#102D63] dark:text-[#FFC400] text-4xl font-black shadow-lg">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#102D63] dark:text-white">
            Không tìm thấy trang yêu cầu
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Địa chỉ liên kết bạn vừa truy cập có thể đã thay đổi hoặc không tồn tại trên hệ thống.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FFC400] text-[#102D63] font-bold text-sm hover:bg-[#f5b000] shadow transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Về trang chủ</span>
          </Link>

          <Link
            to="/giai-phap"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-sm hover:border-[#FFC400] transition-all"
          >
            <Layers className="w-4 h-4" />
            <span>Xem các giải pháp</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5">
          <Phone className="w-3.5 h-3.5 text-[#FFC400]" />
          <span>Hotline hỗ trợ kỹ thuật: <strong>0972 268 792</strong></span>
        </div>
      </div>
    </div>
  );
};
