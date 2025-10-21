// FAQ Use Cases

import { FAQEntity } from '@/domain/entities/FAQ';
import { FAQRepository } from '../repositories';
import { 
  CreateFAQDTO, 
  UpdateFAQDTO, 
  GetFAQsDTO, 
  FAQResponseDTO 
} from '../dtos';

export class GetFAQsUseCase {
  constructor(private faqRepository: FAQRepository) {}

  async execute(params: GetFAQsDTO = {}): Promise<FAQResponseDTO[]> {
    let faqs: FAQEntity[];

    if (params.category) {
      faqs = await this.faqRepository.findByCategory(params.category);
    } else if (params.includeInactive) {
      faqs = await this.faqRepository.findAll();
    } else {
      faqs = await this.faqRepository.findActive();
    }

    return faqs
      .sort((a, b) => a.order - b.order)
      .map(this.mapToResponseDTO);
  }

  private mapToResponseDTO(faq: FAQEntity): FAQResponseDTO {
    return {
      id: faq.id,
      question: faq.question,
      answer: faq.answer,
      order: faq.order,
      category: faq.category,
      isActive: faq.isActive,
    };
  }
}

export class CreateFAQUseCase {
  constructor(private faqRepository: FAQRepository) {}

  async execute(dto: CreateFAQDTO): Promise<FAQResponseDTO> {
    const id = this.generateId();
    
    const faq = new FAQEntity(
      id,
      dto.question,
      dto.answer,
      dto.order,
      dto.category || null
    );

    const savedFAQ = await this.faqRepository.save(faq);
    
    return {
      id: savedFAQ.id,
      question: savedFAQ.question,
      answer: savedFAQ.answer,
      order: savedFAQ.order,
      category: savedFAQ.category,
      isActive: savedFAQ.isActive,
    };
  }

  private generateId(): string {
    return `faq_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}

export class UpdateFAQUseCase {
  constructor(private faqRepository: FAQRepository) {}

  async execute(dto: UpdateFAQDTO): Promise<FAQResponseDTO | null> {
    const existingFAQ = await this.faqRepository.findById(dto.id);
    
    if (!existingFAQ) {
      throw new Error('FAQ not found');
    }

    let updatedFAQ = existingFAQ;

    if (dto.question) {
      updatedFAQ = updatedFAQ.updateQuestion(dto.question);
    }

    if (dto.answer) {
      updatedFAQ = updatedFAQ.updateAnswer(dto.answer);
    }

    if (dto.order !== undefined) {
      updatedFAQ = updatedFAQ.changeOrder(dto.order);
    }

    const savedFAQ = await this.faqRepository.update(updatedFAQ);
    
    return {
      id: savedFAQ.id,
      question: savedFAQ.question,
      answer: savedFAQ.answer,
      order: savedFAQ.order,
      category: savedFAQ.category,
      isActive: savedFAQ.isActive,
    };
  }
}