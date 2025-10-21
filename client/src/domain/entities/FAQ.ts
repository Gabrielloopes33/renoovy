export class FAQEntity {
  constructor(
    public readonly id: string,
    public readonly question: string,
    public readonly answer: string,
    public readonly order: number,
    public readonly category: string | null = null,
    public readonly isActive: boolean = true,
    public readonly createdAt: Date = new Date(),
    public readonly updatedAt: Date = new Date()
  ) {
    this.validateQuestion(question);
    this.validateAnswer(answer);
    this.validateOrder(order);
  }

  private validateQuestion(question: string): void {
    if (!question || question.trim().length < 5) {
      throw new Error('Question must have at least 5 characters');
    }
    if (question.length > 200) {
      throw new Error('Question cannot exceed 200 characters');
    }
  }

  private validateAnswer(answer: string): void {
    if (!answer || answer.trim().length < 10) {
      throw new Error('Answer must have at least 10 characters');
    }
    if (answer.length > 1000) {
      throw new Error('Answer cannot exceed 1000 characters');
    }
  }

  private validateOrder(order: number): void {
    if (!Number.isInteger(order) || order < 0) {
      throw new Error('Order must be a non-negative integer');
    }
  }

  updateQuestion(newQuestion: string): FAQEntity {
    return new FAQEntity(
      this.id,
      newQuestion,
      this.answer,
      this.order,
      this.category,
      this.isActive,
      this.createdAt,
      new Date()
    );
  }

  updateAnswer(newAnswer: string): FAQEntity {
    return new FAQEntity(
      this.id,
      this.question,
      newAnswer,
      this.order,
      this.category,
      this.isActive,
      this.createdAt,
      new Date()
    );
  }

  changeOrder(newOrder: number): FAQEntity {
    return new FAQEntity(
      this.id,
      this.question,
      this.answer,
      newOrder,
      this.category,
      this.isActive,
      this.createdAt,
      new Date()
    );
  }

  activate(): FAQEntity {
    return new FAQEntity(
      this.id,
      this.question,
      this.answer,
      this.order,
      this.category,
      true,
      this.createdAt,
      new Date()
    );
  }

  deactivate(): FAQEntity {
    return new FAQEntity(
      this.id,
      this.question,
      this.answer,
      this.order,
      this.category,
      false,
      this.createdAt,
      new Date()
    );
  }
}