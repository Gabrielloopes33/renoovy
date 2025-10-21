// Organisms - Complex components combining molecules and atoms

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { PackageCard, TestimonialCard, BenefitCard, TrustBadge, NavLink } from '../molecules';
import { CTAButton } from '../atoms';
import { PackageResponseDTO, TestimonialResponseDTO, BenefitResponseDTO, FAQResponseDTO } from '@/application/dtos';
import { cn } from '@/lib/utils';

// Header Organism
export interface HeaderProps {
  brandName: string;
  navigationItems: Array<{ label: string; href: string }>;
  onCtaClick?: () => void;
  className?: string;
}

export function Header({ brandName, navigationItems, onCtaClick, className }: HeaderProps) {
  return (
    <header className={cn(
      'sticky top-0 z-50 bg-white border-b border-purple-100',
      className
    )}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
          {brandName}
        </div>
        
        <nav className="hidden md:flex gap-8">
          {navigationItems.map((item, index) => (
            <NavLink key={index} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        
        <CTAButton onClick={onCtaClick}>
          Comprar Agora
        </CTAButton>
      </div>
    </header>
  );
}

// Hero Section Organism
export interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  features: string[];
  onPrimaryCta?: () => void;
  onSecondaryCta?: () => void;
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  features,
  onPrimaryCta,
  onSecondaryCta,
  className
}: HeroSectionProps) {
  return (
    <section className={cn(
      'relative overflow-hidden py-20 md:py-32',
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {subtitle}
            </p>
            
            <div className="flex gap-4 pt-4">
              <CTAButton size="lg" onClick={onPrimaryCta}>
                {primaryCta}
              </CTAButton>
              <CTAButton size="lg" variant="outline" onClick={onSecondaryCta}>
                {secondaryCta}
              </CTAButton>
            </div>
            
            <div className="flex gap-6 pt-4 text-sm text-gray-600">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-300 rounded-3xl opacity-20"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="w-64 h-80 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center text-6xl shadow-2xl">
                💊
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Trust Badges Section Organism
export interface TrustBadgesSectionProps {
  badges: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  className?: string;
}

export function TrustBadgesSection({ badges, className }: TrustBadgesSectionProps) {
  return (
    <section className={cn(
      'bg-gradient-to-r from-purple-50 to-purple-100 py-12',
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <TrustBadge
              key={index}
              icon={badge.icon}
              title={badge.title}
              description={badge.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Benefits Section Organism
export interface BenefitsSectionProps {
  title: string;
  subtitle: string;
  benefits: BenefitResponseDTO[];
  className?: string;
}

export function BenefitsSection({ title, subtitle, benefits, className }: BenefitsSectionProps) {
  return (
    <section className={cn('py-20 md:py-32', className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Packages Section Organism
export interface PackagesSectionProps {
  title: string;
  subtitle: string;
  packages: PackageResponseDTO[];
  onPackageSelect?: (packageId: string) => void;
  className?: string;
}

export function PackagesSection({ 
  title, 
  subtitle, 
  packages, 
  onPackageSelect, 
  className 
}: PackagesSectionProps) {
  return (
    <section className={cn('py-20 md:py-32', className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            {subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              package={pkg}
              onSelect={onPackageSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section Organism
export interface TestimonialsSectionProps {
  title: string;
  subtitle: string;
  testimonials: TestimonialResponseDTO[];
  className?: string;
}

export function TestimonialsSection({ 
  title, 
  subtitle, 
  testimonials, 
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      'py-20 md:py-32 bg-gradient-to-b from-purple-50 to-white',
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            {subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section Organism
export interface FAQSectionProps {
  title: string;
  subtitle: string;
  faqs: FAQResponseDTO[];
  className?: string;
}

export function FAQSection({ title, subtitle, faqs, className }: FAQSectionProps) {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const toggleFaq = (faqId: string) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  return (
    <section className={cn('py-20 md:py-32', className)}>
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            {subtitle}
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="rounded-lg border border-purple-200 overflow-hidden">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-purple-50 transition text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={cn(
                    'w-5 h-5 text-purple-600 transition transform',
                    expandedFaq === faq.id && 'rotate-180'
                  )} 
                />
              </button>
              
              {expandedFaq === faq.id && (
                <div className="px-6 pb-6 text-gray-700 bg-purple-50 border-t border-purple-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}