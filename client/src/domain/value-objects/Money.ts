import { Currency, Money } from '@/types';

export class MoneyValueObject {
  constructor(
    private readonly _amount: number,
    private readonly _currency: Currency = Currency.BRL
  ) {
    if (_amount < 0) {
      throw new Error('Amount cannot be negative');
    }
  }

  get amount(): number {
    return this._amount;
  }

  get currency(): Currency {
    return this._currency;
  }

  add(other: MoneyValueObject): MoneyValueObject {
    if (this._currency !== other._currency) {
      throw new Error('Cannot add different currencies');
    }
    return new MoneyValueObject(this._amount + other._amount, this._currency);
  }

  multiply(factor: number): MoneyValueObject {
    if (factor < 0) {
      throw new Error('Factor cannot be negative');
    }
    return new MoneyValueObject(this._amount * factor, this._currency);
  }

  applyDiscount(percentage: number): MoneyValueObject {
    if (percentage < 0 || percentage > 100) {
      throw new Error('Discount percentage must be between 0 and 100');
    }
    const discountAmount = this._amount * (percentage / 100);
    return new MoneyValueObject(this._amount - discountAmount, this._currency);
  }

  format(): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: this._currency,
    }).format(this._amount);
  }

  toJSON(): Money {
    return {
      amount: this._amount,
      currency: this._currency,
    };
  }

  equals(other: MoneyValueObject): boolean {
    return this._amount === other._amount && this._currency === other._currency;
  }
}