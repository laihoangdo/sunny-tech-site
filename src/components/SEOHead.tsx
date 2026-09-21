import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export interface SEOHeadProps {
  /** Page title override (will automatically be formatted if needed) */
  title?: string;
  /** Meta description override (120-160 chars recommended) */
  description?: string;
  /** Meta keywords override */
  keywords?: string[];
  /** OpenGraph type (default: 'website') */
  ogType?: 'website' | 'article' | 'profile' | 'business.business';
  /** OpenGraph / Twitter social preview image URL */
  ogImage?: string;
  /** Explicit canonical URL (defaults to window.location.href / origin + pathname) */
  canonicalUrl?: string;
  /** Set to true to instruct search engines not to index this page (e.g. 404 or private) */
  noIndex?: boolean;
  /** Optional custom Schema.org JSON-LD structured data object */
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

interface RouteMetaConfig {
  title: string;
  description: string;
  keywords: string[];
  breadcrumbName: string;
}

const DEFAULT_SITE_NAME = 'Sunny Tech';
const DEFAULT_LOCALE = 'vi_VN';
const DEFAULT_OG_IMAGE = '/og-image.svg';

export const ROUTE_SEO_REGISTRY: Record<string, RouteMetaConfig> = {
  home: {
    title: 'Sunny Tech – Giải Pháp Công Nghệ & Chuyển Đổi Số Doanh Nghiệp',
    description:
      'Sunny Tech cung cấp các giải pháp công nghệ cao cấp: Thiết kế website chuyên nghiệp, Nền tảng Dữ liệu Lakehouse, Bản đồ số GIS và Ứng dụng AI thông minh chuẩn Enterprise.',
    keywords: [
      'Sunny Tech',
      'giải pháp công nghệ',
      'chuyển đổi số',
      'thiết kế website doanh nghiệp',
      'bản đồ số GIS',
      'data lakehouse',
      'trí tuệ nhân tạo AI',
    ],
    breadcrumbName: 'Trang chủ',
  },
  'gioi-thieu': {
    title: 'Về Sunny Tech – Đối Tác Công Nghệ & Chuyển Đổi Số Toàn Diện',
    description:
      'Tìm hiểu về năng lực, 4 trụ cột chiến lược và cam kết chất lượng chuẩn Enterprise của Sunny Tech dành cho các tổ chức, doanh nghiệp trên toàn quốc.',
    keywords: [
      'về sunny tech',
      'đối tác công nghệ',
      'năng lực số',
      'kiến trúc mở',
      'bảo mật ISO 27001',
      'bàn giao mã nguồn',
    ],
    breadcrumbName: 'Giới thiệu',
  },
  'giai-phap': {
    title: 'Hệ Thống Giải Pháp Công Nghệ & Thiết Kế Website – Sunny Tech',
    description:
      'Danh mục giải pháp số toàn diện: Thiết kế website độc bản, Nền tảng Dữ liệu & Lakehouse, Bản đồ số GIS không gian, Chuyển đổi số ERP/CRM và AI tự động hóa.',
    keywords: [
      'thiết kế website chuyên nghiệp',
      'nền tảng dữ liệu',
      'lakehouse',
      'bản đồ số GIS',
      'tự động hóa quy trình',
      'trí tuệ nhân tạo',
    ],
    breadcrumbName: 'Giải pháp',
  },
  'quy-trinh': {
    title: 'Quy Trình Triển Khai 5 Bước Chuẩn Agile Enterprise – Sunny Tech',
    description:
      'Quy trình làm việc minh bạch 5 bước: Khảo sát thực địa, Thiết kế kiến trúc, Phát triển Sprint 2 tuần, Chuyển giao mã nguồn 100% và Bảo trì kỹ thuật 24/7.',
    keywords: [
      'quy trình triển khai phần mềm',
      'phương pháp agile',
      'bàn giao mã nguồn',
      'bảo hành phần mềm',
      'kiểm thử tự động',
    ],
    breadcrumbName: 'Quy trình',
  },
  'nang-luc': {
    title: 'Năng Lực Công Nghệ & Hạ Tầng Chuẩn Enterprise – Sunny Tech',
    description:
      'Hệ sinh thái công nghệ vững chắc: Microservices, Clean Architecture, Bảo mật Zero-Trust OWASP Top 10, Multi-Cloud và hệ thống giám sát thời gian thực 24/7.',
    keywords: [
      'năng lực kỹ thuật',
      'hạ tầng đám mây',
      'microservices',
      'an toàn thông tin',
      'kubernetes',
      'react nodejs postgresql',
    ],
    breadcrumbName: 'Năng lực',
  },
  'du-an': {
    title: 'Dự Án Tiêu Biểu & Hiệu Quả Đo Lường Được (ROI) – Sunny Tech',
    description:
      'Các câu chuyện thành công từ các doanh nghiệp năng lượng, bán lẻ chuỗi và hạ tầng kỹ thuật đã tối ưu năng suất và đạt tỷ lệ hoàn vốn đầu tư (ROI) vượt trội.',
    keywords: [
      'dự án chuyển đổi số',
      'case study công nghệ',
      'bản đồ số năng lượng',
      'hiệu quả đầu tư ROI',
      'khách hàng sunny tech',
    ],
    breadcrumbName: 'Dự án',
  },
  'du-toan': {
    title: 'Công Cụ Dự Toán Quy Mô & Lộ Trình Giải Pháp – Sunny Tech',
    description:
      'Ước tính ngay thời gian hoàn thành Go-Live, lộ trình phân kỳ và quy mô nhân sự kỹ thuật phù hợp với mô hình doanh nghiệp của bạn chỉ trong 60 giây.',
    keywords: [
      'dự toán chi phí phần mềm',
      'ước tính thời gian triển khai',
      'lộ trình chuyển đổi số',
      'báo giá website doanh nghiệp',
    ],
    breadcrumbName: 'Dự toán',
  },
  'lien-he': {
    title: 'Liên Hệ Sunny Tech – Đăng Ký Khảo Sát & Tư Vấn Kỹ Thuật Miễn Phí',
    description:
      'Đăng ký khảo sát và nhận tư vấn giải pháp kỹ thuật miễn phí từ đội ngũ chuyên gia Sunny Tech trong vòng 30 phút làm việc. Hotline: 0972 268 792.',
    keywords: [
      'liên hệ sunny tech',
      'tư vấn giải pháp công nghệ',
      'khảo sát doanh nghiệp',
      'hotline 0972268792',
    ],
    breadcrumbName: 'Liên hệ',
  },
  '404': {
    title: '404 – Không Tìm Thấy Trang | Sunny Tech',
    description:
      'Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển. Khám phá các giải pháp công nghệ số chuẩn Enterprise tại Sunny Tech.',
    keywords: ['404', 'sunny tech'],
    breadcrumbName: 'Không tìm thấy trang',
  },
};

/**
 * Normalizes pathname to a lookup key matching ROUTE_SEO_REGISTRY
 */
function resolveRouteKey(pathname: string): string {
  // Strip query strings or trailing slashes
  const clean = pathname.split('?')[0].replace(/\/+$/, '') || '/';

  // Handle repository path prefixes (e.g. /sunny-tech-site)
  const segments = clean.split('/').filter(Boolean);
  const routeSegment =
    segments[0] === 'sunny-tech-site' ? segments[1] || '' : segments[0] || '';

  if (!routeSegment) return 'home';

  // Map English aliases
  const aliasMap: Record<string, string> = {
    about: 'gioi-thieu',
    'gioi-thieu': 'gioi-thieu',
    solutions: 'giai-phap',
    'giai-phap': 'giai-phap',
    process: 'quy-trinh',
    'quy-trinh': 'quy-trinh',
    'tech-stack': 'nang-luc',
    'nang-luc': 'nang-luc',
    'case-studies': 'du-an',
    'du-an': 'du-an',
    estimator: 'du-toan',
    'du-toan': 'du-toan',
    contact: 'lien-he',
    'lien-he': 'lien-he',
  };

  return aliasMap[routeSegment] || (ROUTE_SEO_REGISTRY[routeSegment] ? routeSegment : '404');
}

/**
 * Reusable SEO Head component that uses `react-helmet-async` to dynamically inject
 * unique meta titles, descriptions, and OpenGraph tags for each page route based on the current URL.
 */
export const SEOHead: React.FC<SEOHeadProps> = ({
  title: propTitle,
  description: propDescription,
  keywords: propKeywords,
  ogType = 'website',
  ogImage: propOgImage,
  canonicalUrl: propCanonicalUrl,
  noIndex: propNoIndex,
  structuredData,
}) => {
  const location = useLocation();

  // 1. Resolve route defaults
  const routeKey = resolveRouteKey(location.pathname);
  const defaultMeta = ROUTE_SEO_REGISTRY[routeKey] || ROUTE_SEO_REGISTRY.home;

  const is404 = routeKey === '404';
  const shouldNoIndex = propNoIndex !== undefined ? propNoIndex : is404;

  // 2. Resolve values with priority to explicit props
  const resolvedTitle = propTitle || defaultMeta.title;
  const resolvedDescription = propDescription || defaultMeta.description;
  const resolvedKeywords = propKeywords || defaultMeta.keywords;

  // 3. Resolve canonical URL
  const resolvedCanonical = React.useMemo(() => {
    if (propCanonicalUrl) return propCanonicalUrl;
    if (typeof window !== 'undefined') {
      return `${window.location.origin}${window.location.pathname}`;
    }
    return '';
  }, [propCanonicalUrl, location.pathname]);

  // 4. Resolve OG Image absolute URL
  const resolvedImage = React.useMemo(() => {
    const rawImage = propOgImage || DEFAULT_OG_IMAGE;
    if (rawImage.startsWith('http://') || rawImage.startsWith('https://')) {
      return rawImage;
    }
    if (typeof window !== 'undefined') {
      return `${window.location.origin}${rawImage.startsWith('/') ? rawImage : `/${rawImage}`}`;
    }
    return rawImage;
  }, [propOgImage]);

  // 5. Default structured data (Schema.org)
  const defaultStructuredData = React.useMemo(() => {
    const schemas: Array<Record<string, unknown>> = [];

    // Organization Schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: DEFAULT_SITE_NAME,
      url: resolvedCanonical || 'https://sunnytech.vn',
      logo: resolvedImage,
      telephone: '+84972268792',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+84972268792',
          contactType: 'technical support',
          areaServed: 'VN',
          availableLanguage: ['Vietnamese', 'English'],
        },
      ],
      sameAs: [
        'https://github.com/laihoangdo/sunny-tech-site',
      ],
    });

    // WebSite / WebPage Schema
    if (routeKey === 'home') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: DEFAULT_SITE_NAME,
        url: resolvedCanonical,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${resolvedCanonical}?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      });
    } else {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: resolvedTitle,
        description: resolvedDescription,
        url: resolvedCanonical,
      });

      // BreadcrumbList Schema
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Trang chủ',
            item: typeof window !== 'undefined' ? window.location.origin : '',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: defaultMeta.breadcrumbName,
            item: resolvedCanonical,
          },
        ],
      });
    }

    return schemas;
  }, [routeKey, resolvedCanonical, resolvedImage, resolvedTitle, resolvedDescription, defaultMeta.breadcrumbName]);

  const activeStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{resolvedTitle}</title>
      <meta name="title" content={resolvedTitle} />
      <meta name="description" content={resolvedDescription} />
      {resolvedKeywords && resolvedKeywords.length > 0 && (
        <meta name="keywords" content={resolvedKeywords.join(', ')} />
      )}

      {/* Robots Directive */}
      <meta
        name="robots"
        content={shouldNoIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}
      />

      {/* Canonical Link */}
      {resolvedCanonical && <link rel="canonical" href={resolvedCanonical} />}

      {/* OpenGraph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={DEFAULT_SITE_NAME} />
      <meta property="og:locale" content={DEFAULT_LOCALE} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      {resolvedCanonical && <meta property="og:url" content={resolvedCanonical} />}
      {resolvedImage && <meta property="og:image" content={resolvedImage} />}
      {resolvedImage && <meta property="og:image:alt" content={resolvedTitle} />}
      {resolvedImage && <meta property="og:image:width" content="1200" />}
      {resolvedImage && <meta property="og:image:height" content="630" />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      {resolvedImage && <meta name="twitter:image" content={resolvedImage} />}
      {resolvedImage && <meta name="twitter:image:alt" content={resolvedTitle} />}

      {/* Schema.org Structured Data */}
      {Array.isArray(activeStructuredData) ? (
        activeStructuredData.map((schemaObj, index) => (
          <script key={`ld-json-${index}`} type="application/ld+json">
            {JSON.stringify(schemaObj)}
          </script>
        ))
      ) : (
        <script type="application/ld+json">
          {JSON.stringify(activeStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
