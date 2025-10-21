import { RatingValueObject } from '../value-objects/Rating';

export class TestimonialEntity {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly text: string,
    public readonly rating: RatingValueObject,
    public readonly isVerified: boolean = false,
    public readonly isActive: boolean = true,
    public readonly createdAt: Date = new Date()
  ) {
    this.validateName(name);
    this.validateText(text);
  }

  private validateName(name: string): void {
    if (!name || name.trim().length < 2) {
      throw new Error('Name must have at least 2 characters');
    }
  }

  private validateText(text: string): void {
    if (!text || text.trim().length < 10) {
      throw new Error('Testimonial text must have at least 10 characters');
    }
    if (text.length > 500) {
      throw new Error('Testimonial text cannot exceed 500 characters');
    }
  }

  get truncatedText(): string {
    const maxLength = 150;
    return this.text.length > maxLength
      ? `${this.text.substring(0, maxLength)}...`
      : this.text;
  }

  get displayName(): string {
    // Show only first name and initial of last name for privacy
    const nameParts = this.name.trim().split(' ');
    if (nameParts.length === 1) {
      return nameParts[0];
    }
    return `${nameParts[0]} ${nameParts[nameParts.length - 1].charAt(0)}.`;
  }

  isHighRating(): boolean {
    return this.rating.value >= 4;
  }

  verify(): TestimonialEntity {
    return new TestimonialEntity(
      this.id,
      this.name,
      this.text,
      this.rating,
      true,
      this.isActive,
      this.createdAt
    );
  }

  activate(): TestimonialEntity {
    return new TestimonialEntity(
      this.id,
      this.name,
      this.text,
      this.rating,
      this.isVerified,
      true,
      this.createdAt
    );
  }

  deactivate(): TestimonialEntity {
    return new TestimonialEntity(
      this.id,
      this.name,
      this.text,
      this.rating,
      this.isVerified,
      false,
      this.createdAt
    );
  }
}