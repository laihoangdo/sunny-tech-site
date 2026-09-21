import { Solution, ProcessStep, CaseStudy, FAQItem, TestimonialItem } from './types';

export const SOLUTIONS_DATA: Solution[] = [
  {
    id: 'cloud-data',
    title: 'Nền Tảng Dữ Liệu & Điện Toán Đám Mây',
    tagline: 'Chuyển hóa dữ liệu phân mảnh thành tài sản sinh lời thực tế',
    category: 'cloud-data',
    categoryLabel: 'Dữ liệu & Cloud',
    shortDesc: 'Xây dựng kho dữ liệu tập trung (Data Lakehouse), thiết kế pipeline ETL/ELT tự động và hệ thống báo cáo BI trực quan thời gian thực.',
    fullDesc: 'Giải pháp toàn diện giúp doanh nghiệp thống nhất mọi luồng dữ liệu từ ERP, CRM, POS và hệ thống bán lẻ. Chúng tôi xây dựng kiến trúc Data Warehouse và Lakehouse thế hệ mới trên nền tảng đám mây, giúp ban lãnh đạo ra quyết định chính xác dựa trên số liệu thực tế thay vì cảm tính.',
    iconName: 'Database',
    features: [
      'Xây dựng Data Warehouse & Lakehouse tập trung hóa',
      'Đường ống dữ liệu (Data Pipeline) tự động với Apache Kafka/Spark',
      'Bảng điều khiển quản trị (Executive BI Dashboard) đa chiều',
      'Chuẩn hóa và làm sạch dữ liệu tự động, tuân thủ quản trị Data Chính phủ'
    ],
    technologies: ['PostgreSQL', 'ClickHouse', 'Apache Spark', 'Kafka', 'Google BigQuery', 'AWS Redshift'],
    deliverables: [
      'Kiến trúc dữ liệu tổng thể (Data Blueprint)',
      'Hệ thống Data Warehouse sẵn sàng khai thác',
      'Bộ chỉ số KPI Dashboard động theo thời gian thực',
      'Tài liệu chuyển giao quy trình vận hành và kiểm soát chất lượng dữ liệu'
    ],
    metrics: 'Tiết kiệm 75% thời gian tổng hợp báo cáo & dự báo chính xác 94%',
    badge: 'Giải pháp mũi nhọn'
  },
  {
    id: 'gis-map',
    title: 'Hệ Thống Bản Đồ Số & GIS Doanh Nghiệp',
    tagline: 'Trực quan hóa không gian, tối ưu hóa nguồn lực và hiện trường',
    category: 'gis-map',
    categoryLabel: 'Bản đồ số & GIS',
    shortDesc: 'Quản lý tài sản không gian, mạng lưới hạ tầng kỹ thuật, lộ trình logistics và giám sát lực lượng lưu động trên bản đồ số độ phân giải cao.',
    fullDesc: 'Sunny Tech tiên phong tích hợp công nghệ GIS vào vận hành kinh doanh và quản lý hạ tầng công nghiệp. Cho phép hiển thị hàng triệu điểm tài sản, đường dây, trạm thu phát sóng hoặc chuỗi phân phối trực tiếp trên bản đồ số với tốc độ phản hồi tính bằng mili-giây.',
    iconName: 'Map',
    features: [
      'Bản đồ số vector độ phân giải cao, hỗ trợ đa tầng lớp dữ liệu (Multi-layer GIS)',
      'Phân tích vùng phục vụ, mật độ khách hàng và bản đồ nhiệt (Heatmap)',
      'Tối ưu hóa hành trình di chuyển và phân bổ tuyến giao vận tự động',
      'Ứng dụng di động giám sát công việc hiện trường có khả năng hoạt động offline'
    ],
    technologies: ['PostGIS', 'MapLibre GL', 'GeoServer', 'QGIS', 'Leaflet', 'Turf.js'],
    deliverables: [
      'Cổng thông tin địa lý GIS Web & Mobile cho nội bộ',
      'Bộ công cụ quản lý tài sản theo tọa độ địa lý chuẩn quốc gia',
      'Hệ thống phân tích không gian hỗ trợ quyết định mở rộng mạng lưới',
      'Module tích hợp dữ liệu camera và cảm biến IoT theo vị trí'
    ],
    metrics: 'Giảm 38% chi phí điều phối di chuyển và rút ngắn 45% thời gian ứng cứu sự cố',
    badge: 'Thế mạnh độc quyền'
  },
  {
    id: 'digital-trans',
    title: 'Tư Vấn & Triển Khai Chuyển Đổi Số',
    tagline: 'Số hóa quy trình tác nghiệp, xóa bỏ điểm nghẽn vận hành',
    category: 'digital-trans',
    categoryLabel: 'Chuyển đổi số',
    shortDesc: 'Khảo sát hiện trạng, thiết kế lộ trình chuyển đổi số phù hợp nguồn lực, triển khai tự động hóa quy trình nghiệp vụ (BPM/RPA) và tích hợp hệ thống.',
    fullDesc: 'Không áp đặt các phần mềm cồng kềnh, Sunny Tech may đo giải pháp theo đúng đặc thù và văn hóa vận hành của từng doanh nghiệp. Chúng tôi tập trung chuyển đổi từng quy trình then chốt để tạo ra hiệu quả ngay trong từng giai đoạn ngắn hạn trước khi mở rộng toàn diện.',
    iconName: 'Layers',
    features: [
      'Đánh giá mức độ trưởng thành số và xác định danh mục ưu tiên đầu tư',
      'Số hóa biểu mẫu, quy trình phê duyệt đa cấp và ký số không cần giấy tờ',
      'Tích hợp liên thông giữa các phần mềm độc lập qua hệ thống API Gateway',
      'Đào tạo và quản trị thay đổi (Change Management) giúp nhân sự dễ dàng thích ứng'
    ],
    technologies: ['Microservices', 'Node.js', 'Go', 'Docker', 'OAuth2/SSO', 'RESTful API/gRPC'],
    deliverables: [
      'Bản kế hoạch chiến lược chuyển đổi số 3-5 năm',
      'Cổng thông tin tác nghiệp số hợp nhất (Internal Portal)',
      'Hệ thống API Gateway đồng bộ dữ liệu giữa các phòng ban',
      'Chính sách và tài liệu chuẩn hóa quy trình số doanh nghiệp'
    ],
    metrics: 'Giảm 90% thời gian xử lý thủ tục giấy tờ và tăng 65% năng suất phối hợp nội bộ',
  },
  {
    id: 'ai-ml',
    title: 'Ứng Dụng Trí Tuệ Nhân Tạo & AI Tự Động',
    tagline: 'Đưa trí tuệ thông minh vào từng khâu ra quyết định tự động',
    category: 'ai-ml',
    categoryLabel: 'AI & Tự động hóa',
    shortDesc: 'Mô hình AI dự báo nhu cầu thị trường, trợ lý ảo thông minh cho nội bộ, nhận diện văn bản tự động (OCR) và camera AI thị giác máy tính.',
    fullDesc: 'Chúng tôi giúp doanh nghiệp biến các công nghệ AI tiên tiến nhất thành công cụ sản sinh doanh thu cụ thể. Từ việc tự động trích xuất chứng từ hóa đơn, phân loại phản hồi khách hàng đến dự báo sản lượng tồn kho tối ưu.',
    iconName: 'Cpu',
    features: [
      'Hệ thống trợ lý ảo thông minh trả lời tài liệu nội bộ (Enterprise RAG AI)',
      'OCR tự động trích xuất thông tin hợp đồng, hóa đơn với độ chính xác >98%',
      'Mô hình dự báo nhu cầu cung ứng theo chuỗi thời gian (Time-series Forecasting)',
      'Computer Vision giám sát an toàn lao động và nhận diện lỗi sản phẩm'
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'FastAPI', 'LangChain', 'Vector Database'],
    deliverables: [
      'Mô hình AI đã được tinh chỉnh (Fine-tuned) theo dữ liệu của doanh nghiệp',
      'Giao diện Web/App tương tác thân thiện cho nhân viên và khách hàng',
      'Quy trình MLOps tự động đánh giá và tái huấn luyện mô hình',
      'Báo cáo cam kết độ chính xác và kiểm thử an toàn dữ liệu'
    ],
    metrics: 'Xử lý tự động 85% thắc mắc khách hàng & rút ngắn thời gian nhập liệu 80%',
    badge: 'Công nghệ mới'
  },
  {
    id: 'security-devops',
    title: 'Hạ Tầng Điện Toán Đám Mây & An Toàn Bảo Mật',
    tagline: 'Vận hành tin cậy, bảo vệ tài nguyên số 24/7 chuẩn quốc tế',
    category: 'security-devops',
    categoryLabel: 'Cloud & Bảo mật',
    shortDesc: 'Tư vấn di chuyển hệ thống lên Cloud, thiết kế kiến trúc High-Availability (HA), tự động hóa CI/CD và rà quét bảo mật định kỳ.',
    fullDesc: 'Bảo vệ hoạt động kinh doanh liên tục với hạ tầng đám mây co giãn linh hoạt và bảo mật đa tầng. Đội ngũ kỹ sư chuyên sâu của Sunny Tech giúp doanh nghiệp tiết kiệm đến 40% chi phí điện toán đám mây hàng tháng nhờ tối ưu FinOps.',
    iconName: 'ShieldCheck',
    features: [
      'Di chuyển hệ thống (Cloud Migration) không gián đoạn dịch vụ',
      'Thiết kế hạ tầng dự phòng thảm họa (Disaster Recovery) RPO/RTO chuẩn cao',
      'Đánh giá an toàn thông tin (Penetration Testing) và rà soát lỗ hổng',
      'Tự động hóa triển khai phần mềm (CI/CD Pipeline) với kiểm thử tự động'
    ],
    technologies: ['Kubernetes', 'Docker', 'AWS', 'Google Cloud', 'Terraform', 'Vault'],
    deliverables: [
      'Kiến trúc hạ tầng đám mây dạng mã nguồn (Infrastructure as Code)',
      'Hệ thống giám sát vận hành APM và cảnh báo sự cố tức thì qua Telegram/Slack',
      'Báo cáo đánh giá rủi ro an ninh mạng và phương án khắc phục',
      'Thỏa thuận cấp độ dịch vụ (SLA) hỗ trợ kỹ thuật chuyên gia 24/7'
    ],
    metrics: '99.98% Uptime cam kết và tối ưu 35% chi phí hạ tầng Cloud hàng tháng',
  },
  {
    id: 'iot-monitoring',
    title: 'Tích Hợp IoT & Giám Sát Vận Hành Thiết Bị',
    tagline: 'Kết nối thiết bị thực với hệ thống số hóa thời gian thực',
    category: 'cloud-data',
    categoryLabel: 'IoT & Giám sát',
    shortDesc: 'Thu thập dữ liệu từ cảm biến công nghiệp, đồng hồ đo từ xa, thiết bị GPS và thiết bị đo môi trường vào nền tảng quản lý tập trung.',
    fullDesc: 'Thu hẹp khoảng cách giữa môi trường vật lý và thế giới số. Sunny Tech xây dựng các giải pháp IoT End-to-End từ phần cứng kết nối mạng (LoraWAN, 4G/5G, MQTT) tới hệ thống phân tích trạng thái máy móc và bảo trì dự đoán.',
    iconName: 'Radio',
    features: [
      'Giao thức kết nối chuẩn công nghiệp MQTT, CoAP, Modbus, LoRaWAN',
      'Bảng điều khiển trạng thái thiết bị thời gian thực theo sơ đồ hình ảnh',
      'Cảnh báo sớm sự cố quá nhiệt, quá tải hoặc mất kết nối thiết bị',
      'Phân tích dữ liệu lịch sử để khuyến nghị lịch bảo trì phòng ngừa (Predictive)'
    ],
    technologies: ['MQTT', 'EMQX', 'TimescaleDB', 'Grafana', 'Node-RED', 'WebSockets'],
    deliverables: [
      'Nền tảng IoT Platform quản lý danh mục hàng vạn thiết bị',
      'Bộ điều khiển Logic cảnh báo tự động qua SMS/Email/App',
      'API mở để kết nối vào hệ thống ERP/Bảo trì hiện hành',
      'Thiết kế kiến trúc Edge Computing xử lý ngay tại hiện trường'
    ],
    metrics: 'Giảm 50% thời gian chết máy (Downtime) và cảnh báo sự cố trước 48 giờ',
  },
  {
    id: 'web-dev',
    title: 'Thiết Kế Website Chuyên Nghiệp (Cá Nhân, Tổ Chức & Doanh Nghiệp)',
    tagline: 'Giao diện độc bản, chuẩn SEO và tối ưu trải nghiệm chuyển đổi số',
    category: 'web-dev',
    categoryLabel: 'Thiết kế Website',
    shortDesc: 'Xây dựng website chuẩn quốc tế cho cá nhân xây dựng thương hiệu, tổ chức - hiệp hội và doanh nghiệp kinh doanh, tối ưu tốc độ tải và chuyển đổi khách hàng.',
    fullDesc: 'Sunny Tech thiết kế và phát triển website theo phương pháp may đo chuyên sâu (Customized Design), đảm bảo nhận diện thương hiệu độc bản, không dùng mẫu đại trà (template rác). Website đạt điểm tuyệt đối trên Google Lighthouse về hiệu năng, chuẩn bảo mật SSL, tích hợp cổng thanh toán, biểu mẫu thu thập Lead và hệ quản trị nội dung (CMS) thân thiện.',
    iconName: 'Globe',
    features: [
      'Thiết kế giao diện UI/UX độc bản theo bộ nhận diện thương hiệu riêng',
      'Tối ưu tốc độ tải trang siêu nhanh (Core Web Vitals < 1.2s, 95+ Google PageSpeed)',
      'Cấu trúc chuẩn SEO On-Page toàn diện, dễ dàng lên top tìm kiếm Google',
      'Tương thích hoàn hảo mọi thiết bị (Responsive Mobile, Tablet, Desktop, Laptop)',
      'Hệ thống quản trị nội dung (CMS) trực quan, tự cập nhật bài viết & sản phẩm dễ dàng',
      'Tích hợp đa kênh: Chatbot AI, Cổng thanh toán trực tuyến, Form CRM tự động'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'WordPress Headless', 'Cloudflare'],
    deliverables: [
      'Bản thiết kế mẫu Figma UI/UX hoàn chỉnh trước khi lập trình',
      'Bộ mã nguồn website hoàn chỉnh và bàn giao quyền sở hữu 100%',
      'Cài đặt tên miền, Hosting tốc độ cao và chứng chỉ bảo mật SSL',
      'Tài liệu & Video hướng dẫn quản trị nội dung kèm bảo hành kỹ thuật 12 tháng'
    ],
    metrics: 'Tăng 2.8x tỷ lệ chuyển đổi khách hàng tiềm năng & tải trang dưới 1.2s',
    badge: 'Dịch vụ nổi bật'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Khảo Sát & Đánh Giá Hiện Trạng',
    subtitle: 'Lắng nghe sâu, định lượng bài toán cốt lõi',
    description: 'Chuyên gia giải pháp của Sunny Tech làm việc trực tiếp với các phòng ban liên quan để thấu hiểu tường tận quy trình thực tế, các nút thắt cổ chai và xác định bài toán ưu tiên giải quyết trước.',
    activities: [
      'Phỏng vấn nghiệp vụ các trưởng bộ phận và người dùng trực tiếp',
      'Đánh giá kiến trúc CNTT hiện tại và tính toàn vẹn của dữ liệu',
      'Đo lường các điểm nghẽn vận hành và ước tính chi phí lãng phí',
      'Xác định rõ ràng mục tiêu kinh doanh (KPI) cần đạt được sau dự án'
    ],
    duration: '1 - 2 tuần',
    output: 'Báo cáo Khảo sát Hiện trạng & Tài liệu Yêu cầu Nghiệp vụ (BRD)',
    iconName: 'Search'
  },
  {
    step: '02',
    title: 'Thiết Kế Kiến Trúc & Xây Lộ Trình',
    subtitle: 'Bản vẽ chi tiết, tối ưu hiệu năng & chi phí',
    description: 'Chúng tôi xây dựng bản thiết kế kỹ thuật hoàn chỉnh: từ mô hình dữ liệu, sơ đồ kiến trúc vi dịch vụ, hạ tầng bảo mật đến giao diện người dùng (UI/UX) trực quan, có thể thử nghiệm được.',
    activities: [
      'Thiết kế sơ đồ kiến trúc hệ thống (System Architecture Blueprint)',
      'Lựa chọn công nghệ phù hợp ngân sách và khả năng mở rộng 5 năm tới',
      'Phát triển nguyên mẫu tương tác (Interactive Clickable Prototype UI)',
      'Lập kế hoạch phân kỳ triển khai chi tiết theo từng Sprint 2 tuần'
    ],
    duration: '2 - 3 tuần',
    output: 'Bản thiết kế Kiến trúc Giải pháp & Lộ trình phân kỳ đầu tư (Roadmap)',
    iconName: 'Compass'
  },
  {
    step: '03',
    title: 'Phát Triển Agile & Kiểm Thử Khắt Khe',
    subtitle: 'Bàn giao liên tục, minh bạch từng giai đoạn',
    description: 'Ứng dụng phương pháp Agile/Scrum với các chu kỳ phát triển linh hoạt. Khách hàng có thể trải nghiệm và đóng góp ý kiến trên phiên bản thử nghiệm sau mỗi 2 tuần làm việc.',
    activities: [
      'Lập trình mã nguồn sạch, tài liệu hóa chuẩn Enterprise',
      'Tích hợp và kiểm thử tự động (Unit Test, Integration Test, Load Test)',
      'Kiểm thử bảo mật đa lớp và đánh giá an toàn thông tin (Penetration Test)',
      'Demo tiến độ định kỳ và nhận phản hồi trực tiếp từ người dùng cuối'
    ],
    duration: '4 - 12 tuần',
    output: 'Hệ thống hoàn chỉnh trên môi trường Staging & Báo cáo kiểm định QA/QC',
    iconName: 'Code2'
  },
  {
    step: '04',
    title: 'Triển Khai, Đào Tạo & Chuyển Giao',
    subtitle: 'Chuyển dịch êm ái, người dùng làm chủ công nghệ',
    description: 'Thực hiện chuyển đổi dữ liệu lịch sử sang hệ thống mới một cách an toàn tuyệt đối. Tổ chức các buổi đào tạo thực chiến và bàn giao trọn gói tài liệu kỹ thuật cũng như mã nguồn.',
    activities: [
      'Chuyển đổi dữ liệu sạch từ hệ thống cũ sang môi trường Production',
      'Tổ chức khóa đào tạo phân quyền cho Quản trị viên và Nhân viên',
      'Thiết lập môi trường giám sát hiệu năng APM và sao lưu dự phòng tự động',
      'Ký biên bản nghiệm thu và bàn giao đầy đủ mã nguồn, quyền quản trị'
    ],
    duration: '1 - 3 tuần',
    output: 'Hệ thống chính thức vận hành (Go-Live) & Bộ tài liệu đào tạo người dùng',
    iconName: 'Rocket'
  },
  {
    step: '05',
    title: 'Bảo Trì 24/7 & Cải Tiến Liên Tục',
    subtitle: 'Đồng hành dài lâu như một bộ phận công nghệ nội bộ',
    description: 'Sunny Tech không dừng lại sau khi bàn giao. Chúng tôi cung cấp dịch vụ quản trị hạ tầng, giám sát an ninh mạng 24/7 và liên tục đề xuất các cải tiến theo sự phát triển mở rộng của doanh nghiệp.',
    activities: [
      'Đường dây nóng kỹ thuật hỗ trợ phản hồi trong vòng 30 phút (SLA cam kết)',
      'Giám sát tự động 24/7/365 phát hiện nguy cơ bất thường trước khi xảy ra sự cố',
      'Bảo trì định kỳ, cập nhật các bản vá bảo mật mới nhất',
      'Đánh giá hiệu quả kinh doanh định kỳ và tư vấn nâng cấp tính năng mới'
    ],
    duration: 'Đồng hành dài hạn',
    output: 'Báo cáo vận hành hàng tháng & Cam kết chất lượng dịch vụ SLA',
    iconName: 'Headphones'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'energy-gis',
    clientName: 'Tổng Công Ty Năng Lượng & Điện Lực',
    clientCategory: 'Năng Lượng & Hạ Tầng Kỹ Thuật',
    projectType: 'GIS Web Platform & IoT Monitoring',
    title: 'Hệ Thống Bản Đồ Số Quản Lý 45.000+ Trạm & Tuyến Hạ Tầng Lưới',
    summary: 'Số hóa toàn bộ sơ đồ mạng lưới hạ tầng phân tán trên 12 tỉnh thành lên bản đồ số tập trung. Cho phép kỹ sư hiện trường định vị sự cố, đo đạc khoảng cách và truy cập lịch sử bảo dưỡng thiết bị theo thời gian thực.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    domainPreview: 'gis.energycorp.vn',
    year: '2024 - 2025',
    deliverables: [
      'Bản đồ số không gian vector GIS tương tác mượt mà',
      'Hệ thống giám sát tải trạm biến áp thời gian thực',
      'Ứng dụng Web PWA hỗ trợ ngoại nghiệp không cần mạng',
      'Bàn giao 100% mã nguồn và cơ sở dữ liệu địa lý PostGIS'
    ],
    results: [
      { metric: '38%', label: 'Rút ngắn thời gian khắc phục sự cố' },
      { metric: '100%', label: 'Số hóa toàn bộ hồ sơ trạm vật lý' },
      { metric: '4.2x', label: 'Tốc độ cập nhật trạng thái hạ tầng' }
    ],
    techUsed: ['Enterprise GIS', 'PostGIS', 'MapLibre GL', 'IoT Telemetry', 'Docker'],
    imageAlt: 'Giao diện website bản đồ số GIS quản lý hạ tầng năng lượng'
  },
  {
    id: 'retail-data',
    clientName: 'Tập Đoàn Bán Lẻ & Chuỗi Cung Ứng MegaLogistics',
    clientCategory: 'Chuỗi Bán Lẻ & Phân Phối',
    projectType: 'Data Lakehouse & Executive BI Portal',
    title: 'Nền Tảng Data Lakehouse & Dashboard Báo Cáo Thời Gian Thực Cho 350+ Điểm Bán',
    summary: 'Tập trung hóa dữ liệu bán lẻ từ máy POS, hệ thống kho bãi WMS và các sàn thương mại điện tử vào một kho dữ liệu duy nhất. Cung cấp bảng điều hành phân tích dòng tiền và cảnh báo tồn kho cập nhật mỗi 5 phút.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    domainPreview: 'bi.megalogistics.vn',
    year: '2024',
    deliverables: [
      'Pipeline ETL streaming xử lý 10 triệu bản ghi/ngày',
      'Executive BI Dashboard tùy biến đa thiết bị',
      'Cảnh báo sớm thiếu hàng theo mô hình dự báo AI',
      'Tích hợp 4 sàn TMĐT và hệ thống ERP SAP'
    ],
    results: [
      { metric: '75%', label: 'Giảm thời gian đối soát kho' },
      { metric: '5 Phút', label: 'Tần suất đồng bộ số liệu tự động' },
      { metric: '18%', label: 'Tối ưu chi phí hàng lưu kho' }
    ],
    techUsed: ['Data Lakehouse', 'Apache Kafka', 'ClickHouse', 'React BI', 'Tailwind'],
    imageAlt: 'Giao diện nền tảng web báo cáo phân tích dữ liệu bán lẻ và logistics'
  },
  {
    id: 'smart-city-portal',
    clientName: 'Tập Đoàn Phát Triển Đô Thị SmartEco',
    clientCategory: 'Bất Động Sản & Đô Thị Thông Minh',
    projectType: 'Portal Cư Dân & Sa Bàn Quy Hoạch 3D',
    title: 'Cổng Thông Tin Dịch Vụ Cư Dân & Sa Bàn Tương Tác Bất Động Sản 3D',
    summary: 'Phát triển website cổng thông tin đô thị và dịch vụ cư dân kết nối hơn 40.000 cư dân với ban quản lý, tích hợp sa bàn số 3D trực quan giúp khách mua nhà trải nghiệm dự án từ xa.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    domainPreview: 'portal.smarteco.vn',
    year: '2025',
    deliverables: [
      'Cổng số hóa phản ánh và thanh toán phí chung cư',
      'Sa bàn số 3D WebGL khám phá căn hộ ảo',
      'Hệ thống thông báo đẩy PWA tức thì đến cư dân',
      'Đạt SLA tải trang 99.98% trong các đợt cao điểm'
    ],
    results: [
      { metric: '40.000+', label: 'Cư dân và người mua tương tác thường xuyên' },
      { metric: '< 1.1s', label: 'Tốc độ tải trang đạt chuẩn Google CWV' },
      { metric: '92%', label: 'Thanh toán trực tuyến không dùng tiền mặt' }
    ],
    techUsed: ['React 18', 'TypeScript', 'Three.js / WebGL', 'Node.js', 'PostgreSQL'],
    imageAlt: 'Giao diện website cổng cư dân và sa bàn 3D đô thị thông minh'
  },
  {
    id: 'telecom-portal',
    clientName: 'Tổng Công Ty Viễn Thông & Dịch Vụ Số V-Tel',
    clientCategory: 'Viễn Thông & Dịch Vụ Số',
    projectType: 'Enterprise BPM & Số Hóa Quy Trình',
    title: 'Cổng Quản Trị Tác Nghiệp Tự Động & Ký Số Điện Tử Toàn Diện',
    summary: 'Chuyển đổi số toàn diện hơn 80 quy trình nghiệp vụ nội bộ cho tổ chức 3.000 nhân sự. Tự động hóa luồng phê duyệt ngân sách, hợp đồng đối tác và quản lý hồ sơ nhân sự tập trung.',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    domainPreview: 'bpm.v-tel.vn',
    year: '2024',
    deliverables: [
      'Engine tự động hóa luồng phê duyệt đa cấp',
      'Tích hợp ký số điện tử SmartCA chuẩn pháp lý',
      'Kiểm soát phân quyền chi tiết Role-Based Access Control',
      'Hệ thống lưu trữ tài liệu bảo mật mã hóa AES-256'
    ],
    results: [
      { metric: '90%', label: 'Cắt giảm giấy tờ in ấn văn phòng' },
      { metric: '4 Giờ', label: 'Thời gian phê duyệt trung bình (trước đây 3 ngày)' },
      { metric: '99.9%', label: 'Tuân thủ bảo mật và ký số điện tử' }
    ],
    techUsed: ['Microservices', 'E-Signature', 'BPM Automation', 'Redis', 'OAuth 2.0'],
    imageAlt: 'Giao diện cổng website số hóa quy trình tác nghiệp nội bộ'
  },
  {
    id: 'b2b-ecommerce',
    clientName: 'Tập Đoàn Thương Mại & Phân Phối Tân Á',
    clientCategory: 'Thương Mại Điện Tử & B2B',
    projectType: 'B2B Portal & Phân Phối Đa Chi Nhánh',
    title: 'Website Thương Mại Điện Tử B2B Đặt Hàng & Quản Trị Đại Lý Toàn Quốc',
    summary: 'Xây dựng website đặt hàng phân phối tự động cho mạng lưới 1.200 đại lý cấp 1 và cấp 2. Hỗ trợ áp dụng bảng giá động theo hạn mức tín dụng và tự động điều phối lệnh giao hàng từ 6 trung tâm phân phối.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
    domainPreview: 'b2b.tana-group.vn',
    year: '2024 - 2025',
    deliverables: [
      'Giao diện web chuẩn UX tối ưu cho nghiệp vụ đặt hàng sỉ',
      'Cơ chế chiết khấu và công nợ đại lý tự động',
      'Đồng bộ tồn kho real-time với hệ thống ERP',
      'Hạ tầng chịu tải phục vụ các đợt ưu đãi mùa vụ lớn'
    ],
    results: [
      { metric: '2.8x', label: 'Tốc độ xử lý đơn hàng sỉ mỗi ngày' },
      { metric: '100%', label: 'Đơn hàng đặt tự động qua website' },
      { metric: '0 Sai Sót', label: 'Lỗi đối soát công nợ đại lý' }
    ],
    techUsed: ['Next.js / React', 'TypeScript', 'GraphQL', 'Tailwind CSS', 'PostgreSQL'],
    imageAlt: 'Giao diện website thương mại điện tử B2B đặt hàng phân phối'
  },
  {
    id: 'fintech-security',
    clientName: 'Tổ Hợp Tài Chính & Công Nghệ Số V-Shield',
    clientCategory: 'FinTech & Tài Chính Số',
    projectType: 'Cổng Thẩm Định Hồ Sơ & An Toàn Zero-Trust',
    title: 'Cổng Thẩm Định Trực Tuyến & Ứng Dụng AI Bóc Tách Hồ Sơ Khách Hàng',
    summary: 'Nền tảng thẩm định hồ sơ bồi thường và đăng ký bảo hiểm trực tuyến tích hợp AI OCR. Đạt tiêu chuẩn an toàn thông tin khắt khe nhất, bảo mật tuyệt đối dữ liệu định danh khách hàng.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    domainPreview: 'app.v-shield.vn',
    year: '2025',
    deliverables: [
      'Module AI OCR bóc tách hóa đơn, bệnh án tự động',
      'Quy trình xác thực danh tính eKYC chống giả mạo',
      'Kiến trúc Zero-Trust vượt qua Pen-test độc lập',
      'Tích hợp cổng thanh toán trực tuyến bảo hiểm'
    ],
    results: [
      { metric: '98.6%', label: 'Độ chính xác bóc tách tài liệu tự động' },
      { metric: '5 Phút', label: 'Thời gian xét duyệt hồ sơ trực tuyến' },
      { metric: 'ISO 27001', label: 'Đạt chứng nhận an toàn thông tin quốc tế' }
    ],
    techUsed: ['AI OCR PyTorch', 'FastAPI', 'React', 'Zero-Trust Security', 'AWS Vault'],
    imageAlt: 'Giao diện cổng web tài chính và thẩm định hồ sơ bảo mật cao'
  }
];

export const TECH_STACK_ITEMS = [
  { name: 'PostgreSQL / PostGIS', category: 'Dữ liệu & GIS', badge: 'Database lõi' },
  { name: 'Apache Kafka & Spark', category: 'Dữ liệu & Big Data', badge: 'Realtime Pipeline' },
  { name: 'React & TypeScript', category: 'Frontend', badge: 'Enterprise Web' },
  { name: 'MapLibre & GeoServer', category: 'Bản đồ số', badge: 'High-speed GIS' },
  { name: 'Docker & Kubernetes', category: 'Hạ tầng & Cloud', badge: 'Scalable Container' },
  { name: 'Python & PyTorch', category: 'AI & Học máy', badge: 'Machine Learning' },
  { name: 'AWS / Google Cloud', category: 'Cloud Infrastructure', badge: 'Cloud Native' },
  { name: 'Node.js & Golang', category: 'Backend Engine', badge: 'High Concurrency' },
  { name: 'Redis Cache & ClickHouse', category: 'Hiệu năng cao', badge: 'In-Memory & OLAP' },
  { name: 'OAuth 2.0 & OIDC', category: 'Bảo mật', badge: 'Enterprise Auth' },
  { name: 'Terraform & CI/CD', category: 'DevOps & GitOps', badge: 'Automated Infra' },
  { name: 'Tailwind CSS', category: 'UI & Styling', badge: 'Modern Design' }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Thời gian triển khai một dự án giải pháp công nghệ tại Sunny Tech thường mất bao lâu?',
    answer: 'Tùy thuộc vào quy mô và độ phức tạp: Với các giải pháp chuẩn hóa hoặc module số hóa quy trình, thời gian triển khai từ 2 đến 4 tuần. Với các hệ thống lớn như Data Lakehouse toàn diện hoặc Nền tảng GIS doanh nghiệp, thời gian từ 8 đến 16 tuần. Tuy nhiên, chúng tôi áp dụng phương pháp Agile nên quý doanh nghiệp sẽ nhận được các phiên bản chạy thử nghiệm có giá trị thực tế sau mỗi 2 tuần (Sprint).',
    category: 'Tiến độ & Quy trình'
  },
  {
    question: 'Sunny Tech có thể tích hợp với các hệ thống phần mềm cũ (Legacy Systems) của chúng tôi không?',
    answer: 'Hoàn toàn được. Hơn 80% dự án của Sunny Tech là tích hợp với các hệ thống sẵn có (như SAP, Oracle, Bravo, Fast, các phần mềm tự phát triển nội bộ). Chúng tôi xây dựng các tầng trung gian (API Gateway, CDC Data Pipeline) để đồng bộ dữ liệu hai chiều mượt mà mà không làm gián đoạn các nghiệp vụ đang chạy hàng ngày.',
    category: 'Tích hợp & API'
  },
  {
    question: 'Chính sách bảo mật dữ liệu và quyền sở hữu mã nguồn được quy định như thế nào?',
    answer: 'Bảo mật là nguyên tắc cốt tử tại Sunny Tech. Chúng tôi ký thỏa thuận bảo mật thông tin (NDA) chặt chẽ ngay từ trước buổi khảo sát đầu tiên. Toàn bộ cơ sở dữ liệu, quyền truy cập hệ thống và mã nguồn được thiết kế riêng (Customized) sẽ được bàn giao 100% cho doanh nghiệp sở hữu sau khi nghiệm thu.',
    category: 'Bảo mật & Bản quyền'
  },
  {
    question: 'Sau khi dự án hoàn thành (Go-Live), Sunny Tech hỗ trợ bảo trì và đào tạo như thế nào?',
    answer: 'Mọi hợp đồng đều đi kèm chính sách bảo hành kỹ thuật tiêu chuẩn từ 12 đến 24 tháng. Chúng tôi có đội ngũ trực giám sát 24/7 cam kết phản hồi sự cố trong vòng 30 phút. Đồng thời, Sunny Tech tổ chức các khóa đào tạo trực tiếp kèm bộ video/tài liệu hướng dẫn chi tiết cho đội ngũ CNTT và người dùng của quý công ty.',
    category: 'Bảo trì & Đào tạo'
  },
  {
    question: 'Doanh nghiệp của chúng tôi là quy mô vừa (SME), có giải pháp nào phù hợp với ngân sách không?',
    answer: 'Có. Sunny Tech cung cấp lộ trình phân kỳ đầu tư thông minh (Modular Roadmap). Thay vì đầu tư một khoản lớn ngay từ đầu, doanh nghiệp có thể bắt đầu với những phân hệ mang lại ROI ngay lập tức (ví dụ: Số hóa quy trình cốt lõi hoặc Xây dựng Dashboard báo cáo tài chính). Khi có hiệu quả thực tế, chúng ta sẽ mở rộng tiếp các phân hệ cao cấp hơn.',
    category: 'Ngân sách & Đầu tư'
  }
];

export const SOLUTIONS_FAQS: FAQItem[] = [
  {
    question: 'Hệ thống giải pháp của Sunny Tech có thể triển khai trên máy chủ On-Premise nội bộ không?',
    answer: 'Hoàn toàn có thể. Chúng tôi hỗ trợ 100% các mô hình hạ tầng: On-Premise (máy chủ vật lý / Private Cloud đặt tại trung tâm dữ liệu riêng của doanh nghiệp nhằm tuân thủ quy định an ninh thông tin), Hybrid Cloud, hoặc Public Cloud (AWS, Google Cloud, Microsoft Azure, Viettel IDC, VNPT). Toàn bộ kiến trúc được container hóa bằng Docker & Kubernetes giúp chuyển dịch linh hoạt giữa các môi trường.',
    category: 'Hạ tầng & Triển khai'
  },
  {
    question: 'Sunny Tech có hỗ trợ kết nối API với các hệ thống ERP, CRM hoặc phần mềm kế toán hiện hữu không?',
    answer: 'Có. Chúng tôi sở hữu kinh nghiệm dày dặn trong việc tích hợp hai chiều với các hệ thống ERP lớn (SAP, Oracle NetSuite, Microsoft Dynamics, Bravo, Fast, MISA) cũng như các cổng thanh toán và nền tảng CRM. Sunny Tech xây dựng các API Gateway bảo mật, cơ chế đồng bộ dữ liệu thời gian thực (CDC - Change Data Capture) mà không gây gián đoạn quy trình nghiệp vụ đang vận hành.',
    category: 'Tích hợp & API'
  },
  {
    question: 'Doanh nghiệp có được bàn giao toàn bộ mã nguồn và quyền tác giả sở hữu không?',
    answer: 'Có, bàn giao 100% mã nguồn sạch (Clean Code), tài liệu thiết kế kiến trúc hệ thống (System Architecture ADR), tài liệu API chuẩn OpenAPI/Swagger và quy trình triển khai CI/CD. Doanh nghiệp nắm giữ quyền sở hữu trí tuệ tuyệt đối, hoàn toàn không bị trói buộc nhà cung cấp (Zero Vendor Lock-in) và đội ngũ kỹ sư nội bộ có thể tiếp quản dễ dàng.',
    category: 'Bản quyền & Mã nguồn'
  },
  {
    question: 'Hệ thống đáp ứng các tiêu chuẩn bảo mật và chống tấn công an ninh mạng nào?',
    answer: 'Mọi giải pháp của Sunny Tech được xây dựng theo triết lý Zero-Trust Security, mã hóa dữ liệu đa tầng (AES-256 at-rest và TLS 1.3 in-transit), xác thực chuẩn OAuth 2.0 / OIDC với phân quyền RBAC đa cấp độ. Hệ thống tuân thủ tiêu chuẩn an toàn thông tin ISO 27001 và được kiểm thử thâm nhập (Pen-test) theo khuyến nghị OWASP Top 10 trước khi bàn giao.',
    category: 'Bảo mật & An toàn'
  },
  {
    question: 'Khả năng chịu tải và mở rộng quy mô khi lượng người dùng hoặc dữ liệu tăng đột biến?',
    answer: 'Các giải pháp ứng dụng kiến trúc Microservices / Modular Monolith kết hợp cơ chế caching đa tầng (Redis In-Memory, Cloudflare CDN) và tự động mở rộng tài nguyên (Horizontal Pod Autoscaling). Đã được kiểm chứng thực tế tại các dự án GIS và Data Lakehouse với hơn 45.000 trạm thiết bị và hàng triệu bản ghi với độ trễ phản hồi dưới 0.8 giây.',
    category: 'Hiệu năng & Chịu tải'
  },
  {
    question: 'Chính sách bảo hành, bảo trì và cam kết chất lượng dịch vụ (SLA) sau nghiệm thu?',
    answer: 'Chúng tôi áp dụng chính sách bảo hành mặc định từ 12 đến 24 tháng cho toàn bộ mã nguồn và tính năng bàn giao. Đội ngũ kỹ sư trực kỹ thuật 24/7/365, cam kết phản hồi sự cố khẩn cấp trong vòng 30 phút và khắc phục theo các mức độ ưu tiên quy định cụ thể trong thỏa thuận chất lượng dịch vụ (SLA).',
    category: 'Bảo hành & SLA'
  }
];

export const TRUST_METRICS = [
  { value: '150+', label: 'Dự án đã triển khai', subtext: 'Trên toàn quốc' },
  { value: '99.98%', label: 'Cam kết SLA hệ thống', subtext: 'Vận hành liên tục' },
  { value: '45%', label: 'Tối ưu chi phí bình quân', subtext: 'So với vận hành thủ công' },
  { value: '24/7', label: 'Hỗ trợ kỹ thuật chuyên sâu', subtext: 'Phản hồi trong 30 phút' }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    quote:
      'Hệ thống bản đồ số GIS do Sunny Tech triển khai đã giúp chúng tôi số hóa toàn diện hơn 12.000km lưới điện và 180 trạm biến áp. Đội ngũ kỹ sư hiện trường giảm 75% thời gian tra cứu vị trí sự cố, và toàn bộ mã nguồn được bàn giao 100% giúp chúng tôi hoàn toàn tự chủ công nghệ.',
    author: 'Ông Trần Minh Tuấn',
    role: 'Giám Đốc Ban CNTT & Tự Động Hóa',
    company: 'Tổng Công Ty Năng Lượng & Điện Lực',
    industry: 'Năng Lượng & Hạ Tầng Kỹ Thuật',
    avatarInitials: 'TM',
    projectScope: 'Bản Đồ Số GIS Lưới Điện Không Gian',
    rating: 5,
    highlightMetric: {
      value: 'Tiết kiệm 450+ giờ/tháng',
      label: 'Thời gian xử lý sự cố giảm 60%',
    },
    verifiedStatus: 'Khách hàng Doanh nghiệp Xác thực',
    year: '2024 - 2025',
  },
  {
    id: 'testimonial-2',
    quote:
      'Data Lakehouse và Dashboard BI thời gian thực của Sunny Tech giải quyết triệt để bài toán dữ liệu phân mảnh từ 85 kho vận. Báo cáo doanh thu và tồn kho trước đây mất 3 ngày tổng hợp, nay cập nhật tự động từng phút với độ chuẩn xác tuyệt đối.',
    author: 'Bà Nguyễn Hoàng Yến',
    role: 'Giám Đốc Vận Hành (COO)',
    company: 'Tập Đoàn Bán Lẻ & Chuỗi Cung Ứng MegaLogistics',
    industry: 'Logistics & Phân Phối Toàn Quốc',
    avatarInitials: 'HY',
    projectScope: 'Data Lakehouse & Executive BI Dashboard',
    rating: 5,
    highlightMetric: {
      value: 'ROI đạt 320%',
      label: 'Báo cáo cập nhật tự động thời gian thực',
    },
    verifiedStatus: 'Khách hàng Doanh nghiệp Xác thực',
    year: '2024',
  },
  {
    id: 'testimonial-3',
    quote:
      'Trải nghiệm làm việc theo phương pháp Sprint 2 tuần cực kỳ minh bạch và chuyên nghiệp. Bản mẫu tương tác Figma và các bản thử nghiệm Staging được bàn giao đúng hạn. Cổng thông tin cư dân và bản đồ quy hoạch 3D đạt độ ổn định 99.98% ngay trong các đợt mở bán cao điểm.',
    author: 'Ông Lê Khắc Cường',
    role: 'Trưởng Ban Chuyển Đổi Số',
    company: 'Tập Đoàn Phát Triển Đô Thị SmartEco',
    industry: 'Bất Động Sản & Đô Thị Thông Minh',
    avatarInitials: 'KC',
    projectScope: 'Portal Cư Dân & Bản Đồ Quy Hoạch 3D',
    rating: 5,
    highlightMetric: {
      value: '40.000+ người dùng',
      label: 'Tải trang < 1.1s, SLA 99.98%',
    },
    verifiedStatus: 'Khách hàng Doanh nghiệp Xác thực',
    year: '2025',
  },
  {
    id: 'testimonial-4',
    quote:
      'Sunny Tech tư vấn rất có tâm, không vẽ vời tính năng thừa mà tập trung đúng vào điểm nghẽn quy trình phê duyệt nội bộ và tích hợp ERP. Thời gian xử lý thủ tục giảm từ 48 giờ xuống còn 4 giờ làm việc. Rất ấn tượng với tinh thần trách nhiệm của đội ngũ kỹ sư.',
    author: 'Ông Phạm Văn Đạt',
    role: 'Tổng Giám Đốc Điều Hành (CEO)',
    company: 'Tổng Công Ty Chế Tạo Cơ Khí Minh Phát',
    industry: 'Sản Xuất & Công Nghiệp Nặng',
    avatarInitials: 'VĐ',
    projectScope: 'Số Hóa Quy Trình Tác Nghiệp BPM & API Gateway',
    rating: 5,
    highlightMetric: {
      value: 'Cắt giảm 90% giấy tờ',
      label: 'Tốc độ xử lý hồ sơ tăng gấp 4 lần',
    },
    verifiedStatus: 'Khách hàng Doanh nghiệp Xác thực',
    year: '2024',
  },
  {
    id: 'testimonial-5',
    quote:
      'Hệ thống AI OCR bóc tách tài liệu và kiến trúc bảo mật Zero-Trust của Sunny Tech đạt chuẩn an toàn thông tin khắt khe nhất, vượt qua mọi kỳ kiểm thử thâm nhập (Pen-test) từ đối tác kiểm toán độc lập. Tốc độ duyệt hồ sơ bồi thường nhanh hơn 5 lần.',
    author: 'Bà Vũ Thùy Trang',
    role: 'Phó Giám Đốc An Ninh Thông Tin (CISO)',
    company: 'Tổ Hợp Tài Chính & Công Nghệ Số V-Shield',
    industry: 'FinTech & Bảo Hiểm Số',
    avatarInitials: 'TT',
    projectScope: 'AI OCR Tự Động & An Toàn Zero-Trust',
    rating: 5,
    highlightMetric: {
      value: 'Chuẩn ISO 27001',
      label: 'Độ chính xác bóc tách OCR > 98.6%',
    },
    verifiedStatus: 'Khách hàng Doanh nghiệp Xác thực',
    year: '2025',
  },
];

