import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Hero } from '../components/Hero';
import { HomeSolutionsSlide } from '../components/HomeSolutionsSlide';
import { HomeChildPagesHub } from '../components/HomeChildPagesHub';
import { TestimonialSection } from '../components/TestimonialSection';
import { HomeCtaBanner } from '../components/HomeCtaBanner';

interface HomePageProps {
  onSelectSolutionForContact: (solutionTitle: string) => void;
  onApplyEstimateToContact: (data: { modules: string[]; scale: string; time: string }) => void;
  initialSolution?: string;
  initialMessage?: string;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectSolutionForContact,
}) => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Dynamic SEO Meta & Social Cards */}
      <SEOHead />

      {/* Slide 1: Hero Section with Live Architecture Simulation & Trust Metrics */}
      <Hero
        onExploreSolutions={() => navigate('/giai-phap')}
        onOpenEstimator={() => navigate('/du-toan')}
        onOpenConsultation={() => navigate('/lien-he')}
      />

      {/* Slide 2: Essential Core Solutions Slide & Feature Highlights */}
      <HomeSolutionsSlide
        onSelectSolutionForContact={(solutionTitle) => {
          onSelectSolutionForContact(solutionTitle);
          navigate('/lien-he');
        }}
      />

      {/* Slide 3: Child Pages Ecosystem Hub (Điều hướng các trang con chuyên sâu) */}
      <HomeChildPagesHub />

      {/* Slide 4: Customer Testimonial Carousel & Enterprise Social Proof */}
      <TestimonialSection
        onOpenConsultation={() => navigate('/lien-he')}
        onViewProjects={() => navigate('/du-an')}
      />

      {/* Slide 5: Streamlined Action & Consultation Banner */}
      <HomeCtaBanner />
    </div>
  );
};
