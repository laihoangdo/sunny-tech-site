import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FAQItem } from '../types';
import { FAQS } from '../data';
import {
  ChevronDown,
  HelpCircle,
  Search,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface FaqSectionProps {
  items?: FAQItem[];
  id?: string;
  badge?: string;
  badgeIcon?: React.ReactNode;
  title?: string;
  subtitle?: string;
  showCategories?: boolean;
  showSearch?: boolean;
  showContactCta?: boolean;
  className?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  items = FAQS,
  id = 'hoi-dap',
  badge = 'Giải đáp thắc mắc',
  badgeIcon,
  title = 'Câu Hỏi Thường Gặp Của Doanh Nghiệp',
  subtitle = 'Những thông tin kỹ thuật cốt lõi về quy trình triển khai, bảo mật hạ tầng và quyền sở hữu mã nguồn của Sunny Tech.',
  showCategories = true,
  showSearch = true,
  showContactCta = true,
  className = '',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract unique categories from items
  const categories = useMemo(() => {
    const cats = new Set<string>();
    items.forEach((item) => {
      if (item.category) cats.add(item.category);
    });
    return Array.from(cats);
  }, [items]);

  // Filter items by category and search query
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        (item.category && item.category.toLowerCase().includes(query));
      return matchCategory && matchSearch;
    });
  }, [items, selectedCategory, searchQuery]);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id={id}
      className={`py-20 lg:py-28 bg-white dark:bg-[#071328] border-b border-slate-100 dark:border-slate-800 transition-colors ${className}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b88400] dark:text-[#FFC400] bg-[#FFF7D8] dark:bg-[#102D63] px-3.5 py-1.5 rounded-full border border-[#FFC400]/40 shadow-xs">
            {badgeIcon || <HelpCircle className="w-3.5 h-3.5" />}
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D63] dark:text-white tracking-tight leading-tight">
            {title}
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300">
            {subtitle}
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        {(showCategories || showSearch) && (
          <div className="mt-10 space-y-5">
            {/* Search input */}
            {showSearch && (
              <div className="max-w-md mx-auto relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setOpenIndex(0); // auto open first matched
                  }}
                  placeholder="Tìm câu hỏi, từ khóa (API, bảo mật, SLA, On-premise...)"
                  className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-[#0A172D] border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#FFC400] focus:ring-1 focus:ring-[#FFC400] transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    Xóa
                  </button>
                )}
              </div>
            )}

            {/* Category Filter Pills */}
            {showCategories && categories.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setOpenIndex(0);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer border ${
                    selectedCategory === 'all'
                      ? 'bg-[#102D63] dark:bg-[#FFC400] text-white dark:text-[#102D63] border-transparent shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 border-slate-200/80 dark:border-slate-700 hover:border-[#FFC400]'
                  }`}
                >
                  Tất cả ({items.length})
                </button>
                {categories.map((cat) => {
                  const count = items.filter((i) => i.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setOpenIndex(0);
                      }}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer border ${
                        selectedCategory === cat
                          ? 'bg-[#102D63] dark:bg-[#FFC400] text-white dark:text-[#102D63] border-transparent shadow-xs'
                          : 'bg-slate-100 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 border-slate-200/80 dark:border-slate-700 hover:border-[#FFC400]'
                      }`}
                    >
                      {cat} ({count})
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Accordion List */}
        <div className="mt-8 space-y-3.5">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 p-8 rounded-3xl bg-slate-50 dark:bg-[#0A172D] border border-dashed border-slate-200 dark:border-slate-800 space-y-3">
              <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                Không tìm thấy câu hỏi phù hợp với từ khóa &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-xs font-bold text-[#102D63] dark:text-[#FFC400] underline"
              >
                Hiển thị lại toàn bộ câu hỏi
              </button>
            </div>
          ) : (
            filteredItems.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  id={`faq-item-${idx}`}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-[#FFC400] dark:border-[#FFC400] shadow-md bg-white dark:bg-[#0A172D]'
                      : 'border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/60 dark:bg-[#0A172D]/60'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer group"
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${idx}`}
                  >
                    <div className="space-y-1">
                      {faq.category && (
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#b88400] dark:text-[#FFC400] bg-[#FFF7D8] dark:bg-[#102D63] px-2 py-0.5 rounded-md mb-1">
                          {faq.category}
                        </span>
                      )}
                      <h3
                        className={`font-bold text-base sm:text-lg leading-snug transition-colors ${
                          isOpen
                            ? 'text-[#102D63] dark:text-[#FFC400]'
                            : 'text-slate-800 dark:text-white group-hover:text-[#102D63] dark:group-hover:text-[#FFC400]'
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-[#FFC400] text-[#102D63] shadow-xs'
                          : 'bg-white dark:bg-[#071328] text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 group-hover:border-[#FFC400]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-content-${idx}`}
                      className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 animate-in fade-in duration-200"
                    >
                      <div className="flex items-start gap-3 mt-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFC400] shrink-0 mt-2" />
                        <p className="flex-1">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Quick Contact Prompt if customer has specific questions */}
        {showContactCta && (
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#0A172D] border border-slate-200/90 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-[#FFC400] transition-colors">
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-[#b88400] dark:text-[#FFC400]">
                <MessageSquare className="w-4 h-4" />
                <span>Cần tư vấn kiến trúc chuyên biệt cho doanh nghiệp?</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-[#102D63] dark:text-white">
                Đội ngũ kỹ sư trưởng Sunny Tech sẵn sàng giải đáp trực tiếp 1:1
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Cam kết ký thỏa thuận bảo mật NDA và phản hồi trong vòng 30 phút.
              </p>
            </div>

            <Link
              to="/lien-he"
              id="faq-contact-cta-btn"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#102D63] hover:bg-[#1a4491] dark:bg-[#FFC400] text-white dark:text-[#102D63] dark:hover:bg-[#ffcd2e] font-bold text-xs sm:text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shrink-0"
            >
              <span>Gửi thắc mắc kỹ thuật</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

