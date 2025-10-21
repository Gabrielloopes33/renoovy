// Dependency Injection Container

import { 
  PackageRepository, 
  TestimonialRepository, 
  FAQRepository, 
  BenefitRepository 
} from '@/application/repositories';

import {
  InMemoryPackageRepository,
  InMemoryTestimonialRepository,
  InMemoryFAQRepository,
  InMemoryBenefitRepository,
} from '../repositories/InMemoryRepositories';

import {
  GetPackagesUseCase,
  GetRecommendedPackageUseCase,
  CreatePackageUseCase,
  UpdatePackageUseCase,
} from '@/application/use-cases/PackageUseCases';

import {
  GetTestimonialsUseCase,
  GetTestimonialStatsUseCase,
  CreateTestimonialUseCase,
} from '@/application/use-cases/TestimonialUseCases';

import {
  GetFAQsUseCase,
  CreateFAQUseCase,
  UpdateFAQUseCase,
} from '@/application/use-cases/FAQUseCases';

import {
  GetBenefitsUseCase,
  CreateBenefitUseCase,
  UpdateBenefitUseCase,
} from '@/application/use-cases/BenefitUseCases';

// Singleton pattern for DI container
class DIContainer {
  private static instance: DIContainer;
  
  // Repositories
  private _packageRepository: PackageRepository;
  private _testimonialRepository: TestimonialRepository;
  private _faqRepository: FAQRepository;
  private _benefitRepository: BenefitRepository;

  // Use Cases
  private _getPackagesUseCase: GetPackagesUseCase;
  private _getRecommendedPackageUseCase: GetRecommendedPackageUseCase;
  private _createPackageUseCase: CreatePackageUseCase;
  private _updatePackageUseCase: UpdatePackageUseCase;
  
  private _getTestimonialsUseCase: GetTestimonialsUseCase;
  private _getTestimonialStatsUseCase: GetTestimonialStatsUseCase;
  private _createTestimonialUseCase: CreateTestimonialUseCase;
  
  private _getFAQsUseCase: GetFAQsUseCase;
  private _createFAQUseCase: CreateFAQUseCase;
  private _updateFAQUseCase: UpdateFAQUseCase;
  
  private _getBenefitsUseCase: GetBenefitsUseCase;
  private _createBenefitUseCase: CreateBenefitUseCase;
  private _updateBenefitUseCase: UpdateBenefitUseCase;

  private constructor() {
    // Initialize repositories
    this._packageRepository = new InMemoryPackageRepository();
    this._testimonialRepository = new InMemoryTestimonialRepository();
    this._faqRepository = new InMemoryFAQRepository();
    this._benefitRepository = new InMemoryBenefitRepository();

    // Initialize use cases with dependencies
    this._getPackagesUseCase = new GetPackagesUseCase(this._packageRepository);
    this._getRecommendedPackageUseCase = new GetRecommendedPackageUseCase(this._packageRepository);
    this._createPackageUseCase = new CreatePackageUseCase(this._packageRepository);
    this._updatePackageUseCase = new UpdatePackageUseCase(this._packageRepository);
    
    this._getTestimonialsUseCase = new GetTestimonialsUseCase(this._testimonialRepository);
    this._getTestimonialStatsUseCase = new GetTestimonialStatsUseCase(this._testimonialRepository);
    this._createTestimonialUseCase = new CreateTestimonialUseCase(this._testimonialRepository);
    
    this._getFAQsUseCase = new GetFAQsUseCase(this._faqRepository);
    this._createFAQUseCase = new CreateFAQUseCase(this._faqRepository);
    this._updateFAQUseCase = new UpdateFAQUseCase(this._faqRepository);
    
    this._getBenefitsUseCase = new GetBenefitsUseCase(this._benefitRepository);
    this._createBenefitUseCase = new CreateBenefitUseCase(this._benefitRepository);
    this._updateBenefitUseCase = new UpdateBenefitUseCase(this._benefitRepository);
  }

  public static getInstance(): DIContainer {
    if (!DIContainer.instance) {
      DIContainer.instance = new DIContainer();
    }
    return DIContainer.instance;
  }

  // Repository getters
  public get packageRepository(): PackageRepository {
    return this._packageRepository;
  }

  public get testimonialRepository(): TestimonialRepository {
    return this._testimonialRepository;
  }

  public get faqRepository(): FAQRepository {
    return this._faqRepository;
  }

  public get benefitRepository(): BenefitRepository {
    return this._benefitRepository;
  }

  // Use case getters
  public get getPackagesUseCase(): GetPackagesUseCase {
    return this._getPackagesUseCase;
  }

  public get getRecommendedPackageUseCase(): GetRecommendedPackageUseCase {
    return this._getRecommendedPackageUseCase;
  }

  public get createPackageUseCase(): CreatePackageUseCase {
    return this._createPackageUseCase;
  }

  public get updatePackageUseCase(): UpdatePackageUseCase {
    return this._updatePackageUseCase;
  }

  public get getTestimonialsUseCase(): GetTestimonialsUseCase {
    return this._getTestimonialsUseCase;
  }

  public get getTestimonialStatsUseCase(): GetTestimonialStatsUseCase {
    return this._getTestimonialStatsUseCase;
  }

  public get createTestimonialUseCase(): CreateTestimonialUseCase {
    return this._createTestimonialUseCase;
  }

  public get getFAQsUseCase(): GetFAQsUseCase {
    return this._getFAQsUseCase;
  }

  public get createFAQUseCase(): CreateFAQUseCase {
    return this._createFAQUseCase;
  }

  public get updateFAQUseCase(): UpdateFAQUseCase {
    return this._updateFAQUseCase;
  }

  public get getBenefitsUseCase(): GetBenefitsUseCase {
    return this._getBenefitsUseCase;
  }

  public get createBenefitUseCase(): CreateBenefitUseCase {
    return this._createBenefitUseCase;
  }

  public get updateBenefitUseCase(): UpdateBenefitUseCase {
    return this._updateBenefitUseCase;
  }
}

// Export singleton instance
export const container = DIContainer.getInstance();