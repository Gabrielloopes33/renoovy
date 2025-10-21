import { MoneyValueObject } from '../value-objects/Money';

export class PackageEntity {
  constructor(
    public readonly id: string,
    public readonly quantity: number,
    public readonly title: string,
    public readonly originalPrice: MoneyValueObject,
    public readonly discount: number,
    public readonly installmentQuantity: number = 12,
    public readonly popular: boolean = false,
    public readonly isActive: boolean = true,
    public readonly createdAt: Date = new Date(),
    public readonly updatedAt: Date = new Date()
  ) {
    this.validateQuantity(quantity);
    this.validateDiscount(discount);
    this.validateInstallmentQuantity(installmentQuantity);
  }

  get finalPrice(): MoneyValueObject {
    return this.originalPrice.applyDiscount(this.discount);
  }

  get perUnit(): MoneyValueObject {
    return this.finalPrice.multiply(1 / this.quantity);
  }

  get installmentValue(): MoneyValueObject {
    return this.finalPrice.multiply(1 / this.installmentQuantity);
  }

  get discountAmount(): MoneyValueObject {
    return this.originalPrice.multiply(this.discount / 100);
  }

  private validateQuantity(quantity: number): void {
    if (!Number.isInteger(quantity) || quantity < 1) {
      throw new Error('Quantity must be a positive integer');
    }
  }

  private validateDiscount(discount: number): void {
    if (discount < 0 || discount > 100) {
      throw new Error('Discount must be between 0 and 100');
    }
  }

  private validateInstallmentQuantity(installmentQuantity: number): void {
    if (!Number.isInteger(installmentQuantity) || installmentQuantity < 1) {
      throw new Error('Installment quantity must be a positive integer');
    }
  }

  isEconomic(): boolean {
    return this.quantity >= 3;
  }

  isBestValue(): boolean {
    return this.quantity >= 5;
  }

  updatePrice(newPrice: MoneyValueObject): PackageEntity {
    return new PackageEntity(
      this.id,
      this.quantity,
      this.title,
      newPrice,
      this.discount,
      this.installmentQuantity,
      this.popular,
      this.isActive,
      this.createdAt,
      new Date()
    );
  }

  activate(): PackageEntity {
    return new PackageEntity(
      this.id,
      this.quantity,
      this.title,
      this.originalPrice,
      this.discount,
      this.installmentQuantity,
      this.popular,
      true,
      this.createdAt,
      new Date()
    );
  }

  deactivate(): PackageEntity {
    return new PackageEntity(
      this.id,
      this.quantity,
      this.title,
      this.originalPrice,
      this.discount,
      this.installmentQuantity,
      this.popular,
      false,
      this.createdAt,
      new Date()
    );
  }
}