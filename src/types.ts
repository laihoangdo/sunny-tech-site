export interface Solution {
  id: string;
  title: string;
  tagline: string;
  category: 'cloud-data' | 'gis-map' | 'digital-trans' | 'ai-ml' | 'security-devops' | 'web-dev';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
  metrics: string;
  badge?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  duration: string;
  output: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  clientCategory: string;
  clientName?: string;
  projectType?: string;
  title: string;
  summary: string;
  imageUrl: string;
  gallery?: string[];
  year?: string;
  domainPreview?: string;
  deliverables?: string[];
  results: { metric: string; label: string }[];
  techUsed: string[];
  imageAlt: string;
}

export interface TechItem {
  name: string;
  category: string;
  badge: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  avatarInitials: string;
  projectScope: string;
  rating: number;
  highlightMetric: {
    value: string;
    label: string;
  };
  verifiedStatus?: string;
  year?: string;
}

export interface ContactFormState {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  solutionInterest: string;
  budgetRange: string;
  message: string;
}
