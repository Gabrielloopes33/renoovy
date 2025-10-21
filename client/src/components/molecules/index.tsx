// Molecules - Combinations of atoms

import { PriceDisplay, RatingDisplay, Badge, IconDisplay, CTAButton } from '../atoms';
import { PackageResponseDTO, TestimonialResponseDTO, BenefitResponseDTO } from '@/application/dtos';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

// Package Card Molecule
export interface PackageCardProps {
  package: PackageResponseDTO;
  onSelect?: (packageId: string) => void;
  className?: string;
}

export function PackageCard({ package: pkg, onSelect, className }: PackageCardProps) {
  const handleSelect = () => {
    onSelect?.(pkg.id);
  };

  return (
    <div 
      className={cn(
        'relative rounded-2xl p-8 transition transform hover:scale-105',
        pkg.popular
          ? 'bg-gradient-to-br from-purple-600 to-purple-800 text-white shadow-2xl ring-2 ring-purple-400'
          : 'bg-white border-2 border-purple-100 text-gray-900',
        className
      )}
    >
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge variant="warning" size="sm" className="bg-gradient-to-r from-purple-400 to-purple-600 text-white border-none">
            MAIS POPULAR
          </Badge>
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-2">
        {pkg.quantity}x Frasco{pkg.quantity > 1 ? 's' : ''}
      </h3>
      
      <p className={cn(
        'text-sm mb-6',
        pkg.popular ? 'text-purple-100' : 'text-gray-600'
      )}>
        {pkg.title}
      </p>
      
      <div className="mb-6">
        <div className="flex items-baseline gap-2 mb-2">
          <PriceDisplay 
            amount={pkg.finalPrice} 
            size="xl"
            className={pkg.popular ? 'text-white' : 'text-gray-900'}
          />
          <PriceDisplay 
            amount={pkg.originalPrice} 
            size="sm"
            strikethrough
            className={pkg.popular ? 'text-purple-200' : 'text-gray-500'}
          />
        </div>
        
        <div className={cn(
          'text-sm font-semibold',
          pkg.popular ? 'text-purple-200' : 'text-purple-600'
        )}>
          {pkg.discount}% de desconto
        </div>
      </div>
      
      <div className={cn(
        'mb-6 p-4 rounded-lg',
        pkg.popular ? 'bg-purple-700 bg-opacity-50' : 'bg-purple-50'
      )}>
        <p className={cn(
          'text-sm',
          pkg.popular ? 'text-purple-100' : 'text-gray-600'
        )}>
          Até 12x de
        </p>
        <PriceDisplay 
          amount={pkg.installmentValue} 
          size="lg"
          className={pkg.popular ? 'text-white' : 'text-gray-900'}
        />
      </div>
      
      <div className={cn(
        'mb-6 text-sm',
        pkg.popular ? 'text-purple-100' : 'text-gray-600'
      )}>
        <PriceDisplay amount={pkg.perUnit} size="sm" /> por frasco
      </div>
      
      <CTAButton
        onClick={handleSelect}
        variant={pkg.popular ? 'secondary' : 'primary'}
        size="lg"
        fullWidth
      >
        <ShoppingCart className="w-5 h-5 mr-2" />
        Comprar Agora
      </CTAButton>
    </div>
  );
}

// Testimonial Card Molecule
export interface TestimonialCardProps {
  testimonial: TestimonialResponseDTO;
  showFullText?: boolean;
  className?: string;
}

export function TestimonialCard({ 
  testimonial, 
  showFullText = false, 
  className 
}: TestimonialCardProps) {
  const displayText = showFullText ? testimonial.text : testimonial.truncatedText;

  return (
    <div className={cn(
      'p-8 rounded-2xl bg-white border border-purple-100 shadow-sm hover:shadow-lg transition',
      className
    )}>
      <div className="flex items-center gap-2 mb-4">
        <RatingDisplay rating={testimonial.rating} />
        {testimonial.isVerified && (
          <Badge variant="success" size="sm">Verificado</Badge>
        )}
      </div>
      
      <blockquote className="text-gray-700 mb-4 text-lg italic">
        "{displayText}"
      </blockquote>
      
      <cite className="text-gray-900 font-bold not-italic">
        {testimonial.displayName}
      </cite>
    </div>
  );
}

// Benefit Card Molecule
export interface BenefitCardProps {
  benefit: BenefitResponseDTO;
  showShortDescription?: boolean;
  className?: string;
}

export function BenefitCard({ 
  benefit, 
  showShortDescription = false, 
  className 
}: BenefitCardProps) {
  const description = showShortDescription ? benefit.shortDescription : benefit.description;

  return (
    <div className={cn(
      'p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:shadow-lg transition',
      className
    )}>
      <IconDisplay icon={benefit.icon} size="lg" className="mb-4" />
      
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        {benefit.title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// Trust Badge Molecule
export interface TrustBadgeProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export function TrustBadge({ icon, title, description, className }: TrustBadgeProps) {
  return (
    <div className={cn('text-center', className)}>
      <div className="text-3xl font-bold text-purple-600 mb-2">
        {icon}
      </div>
      <p className="text-sm text-gray-700 font-medium">
        {title}
      </p>
      <p className="text-xs text-gray-600 mt-1">
        {description}
      </p>
    </div>
  );
}

// Navigation Link Molecule
export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ href, children, active = false, onClick, className }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'text-sm font-medium transition',
        active 
          ? 'text-purple-600' 
          : 'text-gray-700 hover:text-purple-600',
        className
      )}
    >
      {children}
    </a>
  );
}