// Benefit Use Cases

import { BenefitEntity } from '@/domain/entities/Benefit';
import { BenefitRepository } from '../repositories';
import { 
  CreateBenefitDTO, 
  UpdateBenefitDTO, 
  GetBenefitsDTO, 
  BenefitResponseDTO 
} from '../dtos';

export class GetBenefitsUseCase {
  constructor(private benefitRepository: BenefitRepository) {}

  async execute(params: GetBenefitsDTO = {}): Promise<BenefitResponseDTO[]> {
    const benefits = params.includeInactive 
      ? await this.benefitRepository.findAll()
      : await this.benefitRepository.findActive();

    return benefits
      .sort((a, b) => a.order - b.order)
      .map(this.mapToResponseDTO);
  }

  private mapToResponseDTO(benefit: BenefitEntity): BenefitResponseDTO {
    return {
      id: benefit.id,
      title: benefit.title,
      description: benefit.description,
      shortDescription: benefit.shortDescription,
      icon: benefit.icon,
      order: benefit.order,
      isActive: benefit.isActive,
    };
  }
}

export class CreateBenefitUseCase {
  constructor(private benefitRepository: BenefitRepository) {}

  async execute(dto: CreateBenefitDTO): Promise<BenefitResponseDTO> {
    const id = this.generateId();
    
    const benefit = new BenefitEntity(
      id,
      dto.title,
      dto.description,
      dto.icon,
      dto.order
    );

    const savedBenefit = await this.benefitRepository.save(benefit);
    
    return {
      id: savedBenefit.id,
      title: savedBenefit.title,
      description: savedBenefit.description,
      shortDescription: savedBenefit.shortDescription,
      icon: savedBenefit.icon,
      order: savedBenefit.order,
      isActive: savedBenefit.isActive,
    };
  }

  private generateId(): string {
    return `benefit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}

export class UpdateBenefitUseCase {
  constructor(private benefitRepository: BenefitRepository) {}

  async execute(dto: UpdateBenefitDTO): Promise<BenefitResponseDTO | null> {
    const existingBenefit = await this.benefitRepository.findById(dto.id);
    
    if (!existingBenefit) {
      throw new Error('Benefit not found');
    }

    let updatedBenefit = existingBenefit;

    if (dto.title && dto.description) {
      updatedBenefit = updatedBenefit.updateContent(dto.title, dto.description);
    } else if (dto.title) {
      updatedBenefit = updatedBenefit.updateContent(dto.title, existingBenefit.description);
    } else if (dto.description) {
      updatedBenefit = updatedBenefit.updateContent(existingBenefit.title, dto.description);
    }

    if (dto.icon) {
      updatedBenefit = updatedBenefit.changeIcon(dto.icon);
    }

    if (dto.order !== undefined) {
      updatedBenefit = updatedBenefit.changeOrder(dto.order);
    }

    const savedBenefit = await this.benefitRepository.update(updatedBenefit);
    
    return {
      id: savedBenefit.id,
      title: savedBenefit.title,
      description: savedBenefit.description,
      shortDescription: savedBenefit.shortDescription,
      icon: savedBenefit.icon,
      order: savedBenefit.order,
      isActive: savedBenefit.isActive,
    };
  }
}