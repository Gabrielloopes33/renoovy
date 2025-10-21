// Core entity types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: Money;
  imageUrl?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Package {
  id: string;
  quantity: number;
  title: string;
  originalPrice: number;
  discount: number;
  finalPrice: number;
  installment: number;
  perUnit: number;
  popular?: boolean;
  isActive: boolean;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
  isActive: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: Rating;
  isVerified: boolean;
  createdAt: Date;
  isActive: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  order: number;
  category?: string;
  isActive: boolean;
}

// Value Objects
export interface Money {
  amount: number;
  currency: Currency;
}

export interface Rating {
  value: number;
  maxValue: number;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  workingHours: string;
}

// Enums
export enum Currency {
  BRL = 'BRL',
  USD = 'USD'
}

export enum PaymentMethod {
  CREDIT_CARD = 'CREDIT_CARD',
  PIX = 'PIX',
  BOLETO = 'BOLETO'
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: ApiError[];
}

export interface ApiError {
  code: string;
  message: string;
  field?: string;
}

// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
}

// UI State types
export interface UIState {
  isLoading: boolean;
  error: string | null;
}

// Form types
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// Configuration types
export interface AppConfig {
  api: {
    baseUrl: string;
    timeout: number;
  };
  features: {
    enableAnalytics: boolean;
    enableChat: boolean;
  };
}