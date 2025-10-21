// Custom hooks for business logic and state management

import { useState, useEffect, useCallback } from 'react';
import { container } from '@/infrastructure/di/Container';
import { 
  PackageResponseDTO, 
  TestimonialResponseDTO, 
  FAQResponseDTO, 
  BenefitResponseDTO 
} from '@/application/dtos';

// Hook for managing packages
export function usePackages() {
  const [packages, setPackages] = useState<PackageResponseDTO[]>([]);
  const [recommendedPackage, setRecommendedPackage] = useState<PackageResponseDTO | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPackages = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const [packagesResult, recommendedResult] = await Promise.all([
        container.getPackagesUseCase.execute(),
        container.getRecommendedPackageUseCase.execute()
      ]);
      
      setPackages(packagesResult);
      setRecommendedPackage(recommendedResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar pacotes');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPackages();
  }, [fetchPackages]);

  const selectPackage = useCallback((packageId: string) => {
    const selectedPackage = packages.find(pkg => pkg.id === packageId);
    if (selectedPackage) {
      // Here you would typically handle the package selection
      // For now, we'll just log it
      console.log('Package selected:', selectedPackage);
      
      // You could dispatch to a cart context or handle checkout logic
      // Example: addToCart(selectedPackage);
    }
  }, [packages]);

  return {
    packages,
    recommendedPackage,
    loading,
    error,
    selectPackage,
    refetch: fetchPackages,
  };
}

// Hook for managing testimonials
export function useTestimonials(params?: { limit?: number; onlyFeatured?: boolean }) {
  const [testimonials, setTestimonials] = useState<TestimonialResponseDTO[]>([]);
  const [stats, setStats] = useState<{ averageRating: number; totalReviews: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTestimonials = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const [testimonialsResult, statsResult] = await Promise.all([
        container.getTestimonialsUseCase.execute(params),
        container.getTestimonialStatsUseCase.execute()
      ]);
      
      setTestimonials(testimonialsResult);
      setStats(statsResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar depoimentos');
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  return {
    testimonials,
    stats,
    loading,
    error,
    refetch: fetchTestimonials,
  };
}

// Hook for managing FAQs
export function useFAQs(params?: { category?: string }) {
  const [faqs, setFaqs] = useState<FAQResponseDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFAQs = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const result = await container.getFAQsUseCase.execute(params);
      setFaqs(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar perguntas frequentes');
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    fetchFAQs();
  }, [fetchFAQs]);

  return {
    faqs,
    loading,
    error,
    refetch: fetchFAQs,
  };
}

// Hook for managing benefits
export function useBenefits() {
  const [benefits, setBenefits] = useState<BenefitResponseDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBenefits = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const result = await container.getBenefitsUseCase.execute();
      setBenefits(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar benefícios');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBenefits();
  }, [fetchBenefits]);

  return {
    benefits,
    loading,
    error,
    refetch: fetchBenefits,
  };
}

// Hook for managing local storage
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  const removeValue = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue] as const;
}

// Hook for handling async operations with loading states
export function useAsync<T, P extends any[]>(
  asyncFunction: (...params: P) => Promise<T>
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const execute = useCallback(async (...params: P) => {
    try {
      setLoading(true);
      setError(null);
      
      const result = await asyncFunction(...params);
      setData(result);
      
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [asyncFunction]);

  const reset = useCallback(() => {
    setLoading(false);
    setError(null);
    setData(null);
  }, []);

  return {
    execute,
    loading,
    error,
    data,
    reset,
  };
}

// Hook for debouncing values (useful for search inputs)
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Hook for managing scroll position
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = useCallback((position: number, behavior: ScrollBehavior = 'smooth') => {
    window.scrollTo({ top: position, behavior });
  }, []);

  const scrollToTop = useCallback(() => {
    scrollTo(0);
  }, [scrollTo]);

  return {
    scrollY,
    isScrolled,
    scrollTo,
    scrollToTop,
  };
}