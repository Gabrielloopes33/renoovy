// Domain Services - Business logic that doesn't belong to any specific entity

import { PackageEntity } from '../entities/Package';
import { TestimonialEntity } from '../entities/Testimonial';

export class PackagePricingService {
  static calculateBestOffer(packages: PackageEntity[]): PackageEntity | null {
    if (packages.length === 0) return null;

    return packages
      .filter(pkg => pkg.isActive)
      .reduce((best, current) => {
        const bestSavingsPerUnit = best.originalPrice.amount / best.quantity - best.perUnit.amount;
        const currentSavingsPerUnit = current.originalPrice.amount / current.quantity - current.perUnit.amount;
        
        return currentSavingsPerUnit > bestSavingsPerUnit ? current : best;
      });
  }

  static getRecommendedPackage(packages: PackageEntity[]): PackageEntity | null {
    const activePackages = packages.filter(pkg => pkg.isActive);
    
    // First, try to find the popular package
    const popularPackage = activePackages.find(pkg => pkg.popular);
    if (popularPackage) return popularPackage;

    // If no popular package, recommend the most economical (3+ units)
    const economicPackages = activePackages.filter(pkg => pkg.isEconomic());
    if (economicPackages.length > 0) {
      return economicPackages.sort((a, b) => b.discount - a.discount)[0];
    }

    // Fallback to any active package
    return activePackages[0] || null;
  }
}

export class TestimonialService {
  static getFeaturedTestimonials(testimonials: TestimonialEntity[], limit: number = 4): TestimonialEntity[] {
    return testimonials
      .filter(testimonial => testimonial.isActive && testimonial.isHighRating())
      .sort((a, b) => {
        // Prioritize verified testimonials
        if (a.isVerified && !b.isVerified) return -1;
        if (!a.isVerified && b.isVerified) return 1;
        
        // Then by rating
        if (a.rating.value !== b.rating.value) {
          return b.rating.value - a.rating.value;
        }
        
        // Finally by creation date (newest first)
        return b.createdAt.getTime() - a.createdAt.getTime();
      })
      .slice(0, limit);
  }

  static getAverageRating(testimonials: TestimonialEntity[]): number {
    const activeTestimonials = testimonials.filter(t => t.isActive);
    
    if (activeTestimonials.length === 0) return 0;

    const sum = activeTestimonials.reduce((acc, testimonial) => acc + testimonial.rating.value, 0);
    return Math.round((sum / activeTestimonials.length) * 10) / 10; // Round to 1 decimal place
  }

  static getTotalReviews(testimonials: TestimonialEntity[]): number {
    return testimonials.filter(t => t.isActive).length;
  }
}

export class ContentValidationService {
  static sanitizeHtml(content: string): string {
    // Basic HTML sanitization - in a real app, use a proper library like DOMPurify
    return content
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+="[^"]*"/gi, '');
  }

  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static validatePhoneNumber(phone: string): boolean {
    // Brazilian phone number format
    const phoneRegex = /^(\+55\s?)?\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    return phoneRegex.test(phone);
  }
}