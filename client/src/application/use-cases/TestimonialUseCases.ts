// Testimonial Use Cases

import { TestimonialEntity } from '@/domain/entities/Testimonial';
import { RatingValueObject } from '@/domain/value-objects/Rating';
import { TestimonialService } from '@/domain/services';
import { TestimonialRepository } from '../repositories';
import { 
  CreateTestimonialDTO, 
  GetTestimonialsDTO, 
  TestimonialResponseDTO 
} from '../dtos';

export class GetTestimonialsUseCase {
  constructor(private testimonialRepository: TestimonialRepository) {}

  async execute(params: GetTestimonialsDTO = {}): Promise<TestimonialResponseDTO[]> {
    let testimonials: TestimonialEntity[];

    if (params.minRating) {
      testimonials = await this.testimonialRepository.findByRating(params.minRating);
    } else {
      testimonials = await this.testimonialRepository.findActive();
    }

    if (params.onlyFeatured) {
      testimonials = TestimonialService.getFeaturedTestimonials(testimonials, params.limit);
    } else if (params.limit) {
      testimonials = testimonials.slice(0, params.limit);
    }

    return testimonials.map(this.mapToResponseDTO);
  }

  private mapToResponseDTO(testimonial: TestimonialEntity): TestimonialResponseDTO {
    return {
      id: testimonial.id,
      name: testimonial.name,
      displayName: testimonial.displayName,
      text: testimonial.text,
      truncatedText: testimonial.truncatedText,
      rating: testimonial.rating.value,
      isVerified: testimonial.isVerified,
      isActive: testimonial.isActive,
      createdAt: testimonial.createdAt.toISOString(),
    };
  }
}

export class GetTestimonialStatsUseCase {
  constructor(private testimonialRepository: TestimonialRepository) {}

  async execute(): Promise<{ averageRating: number; totalReviews: number }> {
    const testimonials = await this.testimonialRepository.findActive();
    
    return {
      averageRating: TestimonialService.getAverageRating(testimonials),
      totalReviews: TestimonialService.getTotalReviews(testimonials),
    };
  }
}

export class CreateTestimonialUseCase {
  constructor(private testimonialRepository: TestimonialRepository) {}

  async execute(dto: CreateTestimonialDTO): Promise<TestimonialResponseDTO> {
    const id = this.generateId();
    const rating = new RatingValueObject(dto.rating);
    
    const testimonial = new TestimonialEntity(
      id,
      dto.name,
      dto.text,
      rating,
      dto.isVerified || false
    );

    const savedTestimonial = await this.testimonialRepository.save(testimonial);
    
    return {
      id: savedTestimonial.id,
      name: savedTestimonial.name,
      displayName: savedTestimonial.displayName,
      text: savedTestimonial.text,
      truncatedText: savedTestimonial.truncatedText,
      rating: savedTestimonial.rating.value,
      isVerified: savedTestimonial.isVerified,
      isActive: savedTestimonial.isActive,
      createdAt: savedTestimonial.createdAt.toISOString(),
    };
  }

  private generateId(): string {
    return `test_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}