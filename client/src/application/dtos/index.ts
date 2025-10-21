// DTOs (Data Transfer Objects) for Application Layer

export interface CreatePackageDTO {
  quantity: number;
  title: string;
  originalPrice: number;
  discount: number;
  installmentQuantity?: number;
  popular?: boolean;
}

export interface UpdatePackageDTO {
  id: string;
  title?: string;
  originalPrice?: number;
  discount?: number;
  installmentQuantity?: number;
  popular?: boolean;
}

export interface CreateTestimonialDTO {
  name: string;
  text: string;
  rating: number;
  isVerified?: boolean;
}

export interface CreateFAQDTO {
  question: string;
  answer: string;
  order: number;
  category?: string;
}

export interface UpdateFAQDTO {
  id: string;
  question?: string;
  answer?: string;
  order?: number;
  category?: string;
}

export interface CreateBenefitDTO {
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface UpdateBenefitDTO {
  id: string;
  title?: string;
  description?: string;
  icon?: string;
  order?: number;
}

export interface GetPackagesDTO {
  includeInactive?: boolean;
}

export interface GetTestimonialsDTO {
  limit?: number;
  onlyFeatured?: boolean;
  minRating?: number;
}

export interface GetFAQsDTO {
  category?: string;
  includeInactive?: boolean;
}

export interface GetBenefitsDTO {
  includeInactive?: boolean;
}

// Response DTOs
export interface PackageResponseDTO {
  id: string;
  quantity: number;
  title: string;
  originalPrice: number;
  finalPrice: number;
  discount: number;
  installmentValue: number;
  perUnit: number;
  popular: boolean;
  isActive: boolean;
}

export interface TestimonialResponseDTO {
  id: string;
  name: string;
  displayName: string;
  text: string;
  truncatedText: string;
  rating: number;
  isVerified: boolean;
  isActive: boolean;
  createdAt: string;
}

export interface FAQResponseDTO {
  id: string;
  question: string;
  answer: string;
  order: number;
  category: string | null;
  isActive: boolean;
}

export interface BenefitResponseDTO {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  order: number;
  isActive: boolean;
}