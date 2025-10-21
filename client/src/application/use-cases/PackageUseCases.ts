// Use Cases - Business Logic Operations

import { PackageEntity } from '@/domain/entities/Package';
import { MoneyValueObject } from '@/domain/value-objects/Money';
import { PackagePricingService } from '@/domain/services';
import { Currency } from '@/types';
import { PackageRepository } from '../repositories';
import { 
  CreatePackageDTO, 
  UpdatePackageDTO, 
  GetPackagesDTO, 
  PackageResponseDTO 
} from '../dtos';

export class GetPackagesUseCase {
  constructor(private packageRepository: PackageRepository) {}

  async execute(params: GetPackagesDTO = {}): Promise<PackageResponseDTO[]> {
    const packages = params.includeInactive 
      ? await this.packageRepository.findAll()
      : await this.packageRepository.findActive();

    return packages
      .sort((a, b) => a.quantity - b.quantity)
      .map(this.mapToResponseDTO);
  }

  private mapToResponseDTO(packageEntity: PackageEntity): PackageResponseDTO {
    return {
      id: packageEntity.id,
      quantity: packageEntity.quantity,
      title: packageEntity.title,
      originalPrice: packageEntity.originalPrice.amount,
      finalPrice: packageEntity.finalPrice.amount,
      discount: packageEntity.discount,
      installmentValue: packageEntity.installmentValue.amount,
      perUnit: packageEntity.perUnit.amount,
      popular: packageEntity.popular,
      isActive: packageEntity.isActive,
    };
  }
}

export class GetRecommendedPackageUseCase {
  constructor(private packageRepository: PackageRepository) {}

  async execute(): Promise<PackageResponseDTO | null> {
    const packages = await this.packageRepository.findActive();
    const recommended = PackagePricingService.getRecommendedPackage(packages);
    
    if (!recommended) return null;

    return {
      id: recommended.id,
      quantity: recommended.quantity,
      title: recommended.title,
      originalPrice: recommended.originalPrice.amount,
      finalPrice: recommended.finalPrice.amount,
      discount: recommended.discount,
      installmentValue: recommended.installmentValue.amount,
      perUnit: recommended.perUnit.amount,
      popular: recommended.popular,
      isActive: recommended.isActive,
    };
  }
}

export class CreatePackageUseCase {
  constructor(private packageRepository: PackageRepository) {}

  async execute(dto: CreatePackageDTO): Promise<PackageResponseDTO> {
    const id = this.generateId();
    const originalPrice = new MoneyValueObject(dto.originalPrice, Currency.BRL);
    
    const packageEntity = new PackageEntity(
      id,
      dto.quantity,
      dto.title,
      originalPrice,
      dto.discount,
      dto.installmentQuantity || 12,
      dto.popular || false
    );

    const savedPackage = await this.packageRepository.save(packageEntity);
    
    return {
      id: savedPackage.id,
      quantity: savedPackage.quantity,
      title: savedPackage.title,
      originalPrice: savedPackage.originalPrice.amount,
      finalPrice: savedPackage.finalPrice.amount,
      discount: savedPackage.discount,
      installmentValue: savedPackage.installmentValue.amount,
      perUnit: savedPackage.perUnit.amount,
      popular: savedPackage.popular,
      isActive: savedPackage.isActive,
    };
  }

  private generateId(): string {
    return `pkg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}

export class UpdatePackageUseCase {
  constructor(private packageRepository: PackageRepository) {}

  async execute(dto: UpdatePackageDTO): Promise<PackageResponseDTO | null> {
    const existingPackage = await this.packageRepository.findById(dto.id);
    
    if (!existingPackage) {
      throw new Error('Package not found');
    }

    const originalPrice = dto.originalPrice 
      ? new MoneyValueObject(dto.originalPrice, Currency.BRL)
      : existingPackage.originalPrice;

    const updatedPackage = new PackageEntity(
      existingPackage.id,
      existingPackage.quantity,
      dto.title || existingPackage.title,
      originalPrice,
      dto.discount ?? existingPackage.discount,
      dto.installmentQuantity || existingPackage.installmentQuantity,
      dto.popular ?? existingPackage.popular,
      existingPackage.isActive,
      existingPackage.createdAt,
      new Date()
    );

    const savedPackage = await this.packageRepository.update(updatedPackage);
    
    return {
      id: savedPackage.id,
      quantity: savedPackage.quantity,
      title: savedPackage.title,
      originalPrice: savedPackage.originalPrice.amount,
      finalPrice: savedPackage.finalPrice.amount,
      discount: savedPackage.discount,
      installmentValue: savedPackage.installmentValue.amount,
      perUnit: savedPackage.perUnit.amount,
      popular: savedPackage.popular,
      isActive: savedPackage.isActive,
    };
  }
}