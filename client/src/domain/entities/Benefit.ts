export class BenefitEntity {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly icon: string,
    public readonly order: number,
    public readonly isActive: boolean = true,
    public readonly createdAt: Date = new Date(),
    public readonly updatedAt: Date = new Date()
  ) {
    this.validateTitle(title);
    this.validateDescription(description);
    this.validateIcon(icon);
    this.validateOrder(order);
  }

  private validateTitle(title: string): void {
    if (!title || title.trim().length < 3) {
      throw new Error('Title must have at least 3 characters');
    }
    if (title.length > 100) {
      throw new Error('Title cannot exceed 100 characters');
    }
  }

  private validateDescription(description: string): void {
    if (!description || description.trim().length < 10) {
      throw new Error('Description must have at least 10 characters');
    }
    if (description.length > 300) {
      throw new Error('Description cannot exceed 300 characters');
    }
  }

  private validateIcon(icon: string): void {
    if (!icon || icon.trim().length === 0) {
      throw new Error('Icon is required');
    }
  }

  private validateOrder(order: number): void {
    if (!Number.isInteger(order) || order < 0) {
      throw new Error('Order must be a non-negative integer');
    }
  }

  get shortDescription(): string {
    const maxLength = 80;
    return this.description.length > maxLength
      ? `${this.description.substring(0, maxLength)}...`
      : this.description;
  }

  updateContent(title: string, description: string): BenefitEntity {
    return new BenefitEntity(
      this.id,
      title,
      description,
      this.icon,
      this.order,
      this.isActive,
      this.createdAt,
      new Date()
    );
  }

  changeIcon(newIcon: string): BenefitEntity {
    return new BenefitEntity(
      this.id,
      this.title,
      this.description,
      newIcon,
      this.order,
      this.isActive,
      this.createdAt,
      new Date()
    );
  }

  changeOrder(newOrder: number): BenefitEntity {
    return new BenefitEntity(
      this.id,
      this.title,
      this.description,
      this.icon,
      newOrder,
      this.isActive,
      this.createdAt,
      new Date()
    );
  }

  activate(): BenefitEntity {
    return new BenefitEntity(
      this.id,
      this.title,
      this.description,
      this.icon,
      this.order,
      true,
      this.createdAt,
      new Date()
    );
  }

  deactivate(): BenefitEntity {
    return new BenefitEntity(
      this.id,
      this.title,
      this.description,
      this.icon,
      this.order,
      false,
      this.createdAt,
      new Date()
    );
  }
}