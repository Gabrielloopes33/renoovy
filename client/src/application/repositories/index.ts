// Repository Interfaces for Dependency Inversion

import { PackageEntity } from '@/domain/entities/Package';
import { TestimonialEntity } from '@/domain/entities/Testimonial';
import { FAQEntity } from '@/domain/entities/FAQ';
import { BenefitEntity } from '@/domain/entities/Benefit';

export interface PackageRepository {
  findAll(): Promise<PackageEntity[]>;
  findById(id: string): Promise<PackageEntity | null>;
  findActive(): Promise<PackageEntity[]>;
  save(packageEntity: PackageEntity): Promise<PackageEntity>;
  update(packageEntity: PackageEntity): Promise<PackageEntity>;
  delete(id: string): Promise<void>;
}

export interface TestimonialRepository {
  findAll(): Promise<TestimonialEntity[]>;
  findById(id: string): Promise<TestimonialEntity | null>;
  findActive(): Promise<TestimonialEntity[]>;
  findByRating(minRating: number): Promise<TestimonialEntity[]>;
  save(testimonial: TestimonialEntity): Promise<TestimonialEntity>;
  update(testimonial: TestimonialEntity): Promise<TestimonialEntity>;
  delete(id: string): Promise<void>;
}

export interface FAQRepository {
  findAll(): Promise<FAQEntity[]>;
  findById(id: string): Promise<FAQEntity | null>;
  findActive(): Promise<FAQEntity[]>;
  findByCategory(category: string): Promise<FAQEntity[]>;
  save(faq: FAQEntity): Promise<FAQEntity>;
  update(faq: FAQEntity): Promise<FAQEntity>;
  delete(id: string): Promise<void>;
}

export interface BenefitRepository {
  findAll(): Promise<BenefitEntity[]>;
  findById(id: string): Promise<BenefitEntity | null>;
  findActive(): Promise<BenefitEntity[]>;
  save(benefit: BenefitEntity): Promise<BenefitEntity>;
  update(benefit: BenefitEntity): Promise<BenefitEntity>;
  delete(id: string): Promise<void>;
}