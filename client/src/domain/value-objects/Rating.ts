export class RatingValueObject {
  private static readonly MIN_RATING = 1;
  private static readonly MAX_RATING = 5;

  constructor(private readonly _value: number) {
    if (!this.isValidRating(_value)) {
      throw new Error(`Rating must be between ${RatingValueObject.MIN_RATING} and ${RatingValueObject.MAX_RATING}`);
    }
  }

  get value(): number {
    return this._value;
  }

  get maxValue(): number {
    return RatingValueObject.MAX_RATING;
  }

  private isValidRating(value: number): boolean {
    return (
      Number.isInteger(value) &&
      value >= RatingValueObject.MIN_RATING &&
      value <= RatingValueObject.MAX_RATING
    );
  }

  isMaxRating(): boolean {
    return this._value === RatingValueObject.MAX_RATING;
  }

  toStars(): string {
    return '★'.repeat(this._value) + '☆'.repeat(RatingValueObject.MAX_RATING - this._value);
  }

  equals(other: RatingValueObject): boolean {
    return this._value === other._value;
  }
}