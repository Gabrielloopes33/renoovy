// In-Memory Repository Implementations (Mock data for demonstration)

import { PackageEntity } from '@/domain/entities/Package';
import { TestimonialEntity } from '@/domain/entities/Testimonial';
import { FAQEntity } from '@/domain/entities/FAQ';
import { BenefitEntity } from '@/domain/entities/Benefit';
import { MoneyValueObject } from '@/domain/value-objects/Money';
import { RatingValueObject } from '@/domain/value-objects/Rating';
import { Currency } from '@/types';
import { 
  PackageRepository, 
  TestimonialRepository, 
  FAQRepository, 
  BenefitRepository 
} from '@/application/repositories';

export class InMemoryPackageRepository implements PackageRepository {
  private packages: PackageEntity[] = [
    new PackageEntity(
      'pkg_1',
      1,
      'Experimente e Apaixone-se',
      new MoneyValueObject(297, Currency.BRL),
      34,
      12,
      false
    ),
    new PackageEntity(
      'pkg_3',
      3,
      'Seu Tratamento Completo',
      new MoneyValueObject(594, Currency.BRL),
      50,
      12,
      true
    ),
    new PackageEntity(
      'pkg_5',
      5,
      'Melhor Custo-Benefício',
      new MoneyValueObject(999, Currency.BRL),
      60,
      12,
      false
    ),
  ];

  async findAll(): Promise<PackageEntity[]> {
    return [...this.packages];
  }

  async findById(id: string): Promise<PackageEntity | null> {
    return this.packages.find(pkg => pkg.id === id) || null;
  }

  async findActive(): Promise<PackageEntity[]> {
    return this.packages.filter(pkg => pkg.isActive);
  }

  async save(packageEntity: PackageEntity): Promise<PackageEntity> {
    this.packages.push(packageEntity);
    return packageEntity;
  }

  async update(packageEntity: PackageEntity): Promise<PackageEntity> {
    const index = this.packages.findIndex(pkg => pkg.id === packageEntity.id);
    if (index === -1) {
      throw new Error('Package not found');
    }
    this.packages[index] = packageEntity;
    return packageEntity;
  }

  async delete(id: string): Promise<void> {
    const index = this.packages.findIndex(pkg => pkg.id === id);
    if (index === -1) {
      throw new Error('Package not found');
    }
    this.packages.splice(index, 1);
  }
}

export class InMemoryTestimonialRepository implements TestimonialRepository {
  private testimonials: TestimonialEntity[] = [
    new TestimonialEntity(
      'test_1',
      'Fernanda Silva',
      'Minha pele está mais firme e radiante! Amo os resultados!',
      new RatingValueObject(5),
      true
    ),
    new TestimonialEntity(
      'test_2',
      'Marília Moreira',
      'Chegou rápido e está fazendo diferença, as pessoas estão comentando!',
      new RatingValueObject(5),
      true
    ),
    new TestimonialEntity(
      'test_3',
      'Paula Martins',
      'Já é a minha 3ª compra, ótimo produto e de boa absorção.',
      new RatingValueObject(5),
      false
    ),
    new TestimonialEntity(
      'test_4',
      'Beatriz Santos',
      'Muito bom, comprei a opção com 3 potes, na próxima já compro o de 5!',
      new RatingValueObject(5),
      false
    ),
  ];

  async findAll(): Promise<TestimonialEntity[]> {
    return [...this.testimonials];
  }

  async findById(id: string): Promise<TestimonialEntity | null> {
    return this.testimonials.find(testimonial => testimonial.id === id) || null;
  }

  async findActive(): Promise<TestimonialEntity[]> {
    return this.testimonials.filter(testimonial => testimonial.isActive);
  }

  async findByRating(minRating: number): Promise<TestimonialEntity[]> {
    return this.testimonials.filter(
      testimonial => testimonial.isActive && testimonial.rating.value >= minRating
    );
  }

  async save(testimonial: TestimonialEntity): Promise<TestimonialEntity> {
    this.testimonials.push(testimonial);
    return testimonial;
  }

  async update(testimonial: TestimonialEntity): Promise<TestimonialEntity> {
    const index = this.testimonials.findIndex(t => t.id === testimonial.id);
    if (index === -1) {
      throw new Error('Testimonial not found');
    }
    this.testimonials[index] = testimonial;
    return testimonial;
  }

  async delete(id: string): Promise<void> {
    const index = this.testimonials.findIndex(t => t.id === id);
    if (index === -1) {
      throw new Error('Testimonial not found');
    }
    this.testimonials.splice(index, 1);
  }
}

export class InMemoryFAQRepository implements FAQRepository {
  private faqs: FAQEntity[] = [
    new FAQEntity(
      'faq_1',
      'Em quanto tempo vejo os resultados?',
      'A maioria dos clientes relata primeiros resultados entre 2-4 semanas de uso contínuo. Para resultados mais significativos, recomendamos 3 meses de tratamento.',
      1,
      'uso'
    ),
    new FAQEntity(
      'faq_2',
      'Renoovy+ funciona para mim?',
      'Renoovy+ foi formulado para atender a diversos tipos de pele e necessidades. Com 22 ativos poderosos e 8 vitaminas essenciais, é altamente eficaz para a maioria das pessoas.',
      2,
      'produto'
    ),
    new FAQEntity(
      'faq_3',
      'Os resultados são comprovados cientificamente?',
      'Sim! Todos os ingredientes de Renoovy+ possuem comprovação científica e estudos clínicos que atestam sua eficácia.',
      3,
      'produto'
    ),
    new FAQEntity(
      'faq_4',
      'Quem pode usar Renoovy+?',
      'Renoovy+ é indicado para maiores de 18 anos. Gestantes e lactantes devem consultar um médico antes de usar.',
      4,
      'uso'
    ),
    new FAQEntity(
      'faq_5',
      'Renoovy+ tem efeitos colaterais?',
      'Renoovy+ é feito com ingredientes naturais e é geralmente bem tolerado. Consulte um médico se tiver alergias a algum componente.',
      5,
      'segurança'
    ),
    new FAQEntity(
      'faq_6',
      'É aprovado pela ANVISA?',
      'Sim! Renoovy+ é um produto registrado e aprovado pela Agência Nacional de Vigilância Sanitária (ANVISA).',
      6,
      'segurança'
    ),
  ];

  async findAll(): Promise<FAQEntity[]> {
    return [...this.faqs];
  }

  async findById(id: string): Promise<FAQEntity | null> {
    return this.faqs.find(faq => faq.id === id) || null;
  }

  async findActive(): Promise<FAQEntity[]> {
    return this.faqs.filter(faq => faq.isActive);
  }

  async findByCategory(category: string): Promise<FAQEntity[]> {
    return this.faqs.filter(faq => faq.category === category && faq.isActive);
  }

  async save(faq: FAQEntity): Promise<FAQEntity> {
    this.faqs.push(faq);
    return faq;
  }

  async update(faq: FAQEntity): Promise<FAQEntity> {
    const index = this.faqs.findIndex(f => f.id === faq.id);
    if (index === -1) {
      throw new Error('FAQ not found');
    }
    this.faqs[index] = faq;
    return faq;
  }

  async delete(id: string): Promise<void> {
    const index = this.faqs.findIndex(f => f.id === id);
    if (index === -1) {
      throw new Error('FAQ not found');
    }
    this.faqs.splice(index, 1);
  }
}

export class InMemoryBenefitRepository implements BenefitRepository {
  private benefits: BenefitEntity[] = [
    new BenefitEntity(
      'benefit_1',
      'Pele Radiante e Rejuvenescida',
      'Reduz visivelmente rugas e linhas de expressão, promovendo uma pele mais jovem e luminosa.',
      '✨',
      1
    ),
    new BenefitEntity(
      'benefit_2',
      'Firmeza e Elasticidade Aprimoradas',
      'Ativos poderosos que estimulam a produção de colágeno e elastina para uma pele mais firme.',
      '💪',
      2
    ),
    new BenefitEntity(
      'benefit_3',
      'Cabelos Fortes e Volumosos',
      'Nutrição profunda para combater a queda capilar e estimular o crescimento de fios saudáveis.',
      '💇',
      3
    ),
    new BenefitEntity(
      'benefit_4',
      'Unhas Saudáveis e Resistentes',
      'Fortalece suas unhas, deixando-as menos quebradiças e com um aspecto impecável.',
      '💅',
      4
    ),
  ];

  async findAll(): Promise<BenefitEntity[]> {
    return [...this.benefits];
  }

  async findById(id: string): Promise<BenefitEntity | null> {
    return this.benefits.find(benefit => benefit.id === id) || null;
  }

  async findActive(): Promise<BenefitEntity[]> {
    return this.benefits.filter(benefit => benefit.isActive);
  }

  async save(benefit: BenefitEntity): Promise<BenefitEntity> {
    this.benefits.push(benefit);
    return benefit;
  }

  async update(benefit: BenefitEntity): Promise<BenefitEntity> {
    const index = this.benefits.findIndex(b => b.id === benefit.id);
    if (index === -1) {
      throw new Error('Benefit not found');
    }
    this.benefits[index] = benefit;
    return benefit;
  }

  async delete(id: string): Promise<void> {
    const index = this.benefits.findIndex(b => b.id === id);
    if (index === -1) {
      throw new Error('Benefit not found');
    }
    this.benefits.splice(index, 1);
  }
}