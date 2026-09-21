export interface MetaTagOptions {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string[];
  ogType?: string;
}

export interface SectionMetaConfig {
  title: string;
  description: string;
  keywords: string[];
}

export const SECTION_METADATA: Record<string, SectionMetaConfig> = {
  home: {
    title: 'Sunny Tech – Giải Pháp Công Nghệ & Chuyển Đổi Số Doanh Nghiệp',
    description:
      'Sunny Tech cung cấp các giải pháp công nghệ cao cấp: Thiết kế website chuyên nghiệp, Nền tảng Dữ liệu & Lakehouse, Bản đồ số GIS và Ứng dụng AI thông minh.',
    keywords: [
      'giải pháp công nghệ',
      'chuyển đổi số',
      'thiết kế website',
      'bản đồ số GIS',
      'data lakehouse',
      'Sunny Tech',
    ],
  },
  'gioi-thieu': {
    title: 'Về Sunny Tech – Đối Tác Công Nghệ & Chuyển Đổi Số Toàn Diện',
    description:
      'Tìm hiểu về năng lực, 4 trụ cột chiến lược và cam kết chất lượng chuẩn Enterprise của Sunny Tech dành cho các tổ chức và doanh nghiệp.',
    keywords: [
      'về sunny tech',
      'đối tác công nghệ',
      'năng lực số',
      'kiến trúc mở',
      'bảo mật ISO 27001',
    ],
  },
  'giai-phap': {
    title: 'Hệ Thống Giải Pháp Công Nghệ & Thiết Kế Website – Sunny Tech',
    description:
      'Khám phá danh mục giải pháp công nghệ: Thiết kế website độc bản, Nền tảng Dữ liệu Lakehouse, Bản đồ số GIS không gian, Chuyển đổi số ERP/CRM và AI tự động hóa.',
    keywords: [
      'thiết kế website chuyên nghiệp',
      'dịch vụ website doanh nghiệp',
      'bản đồ số GIS',
      'kho dữ liệu lớn',
      'trí tuệ nhân tạo AI',
    ],
  },
  'quy-trinh': {
    title: 'Quy Trình Triển Khai 5 Bước Chuẩn Agile Enterprise – Sunny Tech',
    description:
      'Quy trình làm việc minh bạch 5 bước: Khảo sát thực địa, Thiết kế kiến trúc, Phát triển nước rút, Chuyển giao mã nguồn và Bảo trì kỹ thuật 24/7.',
    keywords: [
      'quy trình triển khai phần mềm',
      'phương pháp agile',
      'bàn giao mã nguồn',
      'bảo hành phần mềm',
    ],
  },
  'nang-luc': {
    title: 'Năng Lực Công Nghệ & Hạ Tầng Chuẩn Enterprise – Sunny Tech',
    description:
      'Hệ sinh thái công nghệ vững chắc: Microservices, Zero-Trust Security, Multi-Cloud và các nền tảng mã nguồn mở hàng đầu thế giới.',
    keywords: [
      'hạ tầng đám mây',
      'microservices',
      'an toàn thông tin',
      'kubernetes',
      'postgres gis',
    ],
  },
  'du-an': {
    title: 'Dự Án Tiêu Biểu & Hiệu Quả Đo Lường Được (ROI) – Sunny Tech',
    description:
      'Các dự án thực tế đã hoàn thành thành công trong ngành năng lượng, bán lẻ chuỗi và hạ tầng số với tỷ lệ hoàn vốn đầu tư (ROI) vượt trội.',
    keywords: [
      'dự án chuyển đổi số',
      'case study công nghệ',
      'bản đồ số năng lượng',
      'hiệu quả đầu tư ROI',
    ],
  },
  'du-toan': {
    title: 'Công Cụ Dự Toán Quy Mô & Lộ Trình Giải Pháp – Sunny Tech',
    description:
      'Ước tính ngay thời gian hoàn thành Go-Live, lộ trình phân kỳ và quy mô nhân sự kỹ thuật phù hợp với mô hình doanh nghiệp của bạn.',
    keywords: [
      'dự toán chi phí phần mềm',
      'ước tính thời gian triển khai',
      'lộ trình chuyển đổi số',
    ],
  },
  'hoi-dap': {
    title: 'Câu Hỏi Thường Gặp (FAQ) Về Dịch Vụ Công Nghệ – Sunny Tech',
    description:
      'Giải đáp chi tiết các thắc mắc về thời gian triển khai, tích hợp hệ thống cũ, bảo mật thông tin NDA và chính sách bảo hành.',
    keywords: [
      'hỏi đáp công nghệ',
      'bảo mật thông tin NDA',
      'tích hợp hệ thống cũ',
    ],
  },
  'lien-he': {
    title: 'Liên Hệ Tư Vấn Giải Pháp & Khảo Sát Doanh Nghiệp – Sunny Tech',
    description:
      'Đăng ký khảo sát và nhận tư vấn phương án kỹ thuật miễn phí từ đội ngũ chuyên gia Sunny Tech trong vòng 30 phút làm việc.',
    keywords: [
      'liên hệ sunny tech',
      'tư vấn giải pháp công nghệ',
      'hotline 0972268792',
      'đăng ký chuyển đổi số',
    ],
  },
};

/**
 * Helper to get or create an HTML meta tag
 */
function setOrCreateMetaTag(
  selector: string,
  attributeName: string,
  attributeValue: string,
  content: string
): void {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

/**
 * Helper to update canonical link
 */
function setOrCreateCanonical(url: string): void {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

/**
 * Dynamically updates document title, meta description, OpenGraph, Twitter, and canonical tags.
 */
export function updateMetaTags(options: MetaTagOptions): void {
  if (typeof document === 'undefined') return;

  // 1. Title tag
  document.title = options.title;

  // 2. Meta description
  setOrCreateMetaTag('meta[name="description"]', 'name', 'description', options.description);

  // 3. Meta keywords (if provided)
  if (options.keywords && options.keywords.length > 0) {
    setOrCreateMetaTag('meta[name="keywords"]', 'name', 'keywords', options.keywords.join(', '));
  }

  // 4. OpenGraph tags
  setOrCreateMetaTag('meta[property="og:title"]', 'property', 'og:title', options.title);
  setOrCreateMetaTag('meta[property="og:description"]', 'property', 'og:description', options.description);
  setOrCreateMetaTag('meta[property="og:type"]', 'property', 'og:type', options.ogType || 'website');

  // 5. Twitter Card tags
  setOrCreateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', options.title);
  setOrCreateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', options.description);

  // 6. Canonical URL & OpenGraph URL
  const currentUrl = options.canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');
  if (currentUrl) {
    setOrCreateCanonical(currentUrl);
    setOrCreateMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
  }
}

/**
 * Updates meta tags specifically for a given page or route ID.
 */
export function updateSectionMeta(routeOrSection: string): void {
  if (typeof window === 'undefined') return;

  const cleanKey = (routeOrSection || 'home').replace(/^\/+/, '');
  const key = cleanKey || 'home';
  const config = SECTION_METADATA[key] || SECTION_METADATA.home;

  const currentUrl = window.location.href;

  updateMetaTags({
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    canonicalUrl: currentUrl,
  });
}
