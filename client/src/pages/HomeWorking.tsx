// Gradual implementation of Clean Architecture Home

import React from 'react';

// Simple version first - let's build up gradually
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-purple-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            RENOOVY +
          </div>
          
          <nav className="hidden md:flex gap-8">
            <a href="#beneficios" className="text-gray-700 hover:text-purple-600 transition">
              Benefícios
            </a>
            <a href="#ofertas" className="text-gray-700 hover:text-purple-600 transition">
              Ofertas
            </a>
            <a href="#depoimentos" className="text-gray-700 hover:text-purple-600 transition">
              Depoimentos
            </a>
            <a href="#faq" className="text-gray-700 hover:text-purple-600 transition">
              FAQ
            </a>
          </nav>
          
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition">
            Comprar Agora
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Desperte Sua Melhor Versão
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Rejuvenesça até 10 anos com a fórmula exclusiva Renoovy+. Pele radiante, cabelos fortes e unhas saudáveis em um único suplemento.
              </p>
              
              <div className="flex gap-4 pt-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
                  Comprar Agora
                </button>
                <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg text-lg font-semibold transition">
                  Saiba Mais
                </button>
              </div>
              
              <div className="flex gap-6 pt-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>Aprovado ANVISA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>100% Natural</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-300 rounded-3xl opacity-20"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="w-64 h-80 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center text-6xl shadow-2xl">
                  💊
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gradient-to-r from-purple-50 to-purple-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '12x', title: 'Parcelamento sem juros' },
              { icon: '+5%', title: 'Desconto no PIX' },
              { icon: '🚚', title: 'Frete grátis acima de R$ 299' },
              { icon: '⚡', title: 'Envio rápido para todo Brasil' },
            ].map((badge, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-600 mb-2">{badge.icon}</div>
                <p className="text-sm text-gray-700 font-medium">{badge.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Descubra o Poder de Renoovy+
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uma fórmula completa que age em múltiplas frentes para sua beleza e bem-estar
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Pele Radiante',
                description: 'Colágeno e vitaminas que nutrem a pele de dentro para fora',
                icon: '✨',
              },
              {
                title: 'Cabelos Fortes',
                description: 'Biotina e minerais essenciais para cabelos saudáveis',
                icon: '💇‍♀️',
              },
              {
                title: 'Unhas Saudáveis',
                description: 'Fortalece e acelera o crescimento das unhas',
                icon: '💅',
              },
              {
                title: 'Energia e Vitalidade',
                description: 'Complexo vitamínico que aumenta disposição e bem-estar',
                icon: '⚡',
              },
            ].map((benefit, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-white to-purple-50 border border-purple-100">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Por Que Renoovy+ é a Escolha Inteligente?
            </h2>
            <p className="text-xl text-purple-100">
              Superioridade comprovada em cada detalhe
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-purple-700">
                  <th className="text-left py-4 px-4 font-bold text-purple-100">Característica</th>
                  <th className="text-center py-4 px-4 font-bold text-purple-100">Outras Marcas</th>
                  <th className="text-center py-4 px-4 font-bold text-white bg-purple-700 rounded-t-lg">Renoovy+</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-purple-700">
                  <td className="py-4 px-4">Ativos Potentes</td>
                  <td className="text-center py-4 px-4 text-purple-200">Até 6 ativos</td>
                  <td className="text-center py-4 px-4 bg-purple-700 font-bold">22 ativos poderosos</td>
                </tr>
                <tr className="border-b border-purple-700">
                  <td className="py-4 px-4">Vitaminas Essenciais</td>
                  <td className="text-center py-4 px-4 text-purple-200">Até 3 vitaminas</td>
                  <td className="text-center py-4 px-4 bg-purple-700 font-bold">8 vitaminas essenciais</td>
                </tr>
                <tr className="border-b border-purple-700">
                  <td className="py-4 px-4">Ação Abrangente</td>
                  <td className="text-center py-4 px-4 text-purple-200">Foco em uma frente</td>
                  <td className="text-center py-4 px-4 bg-purple-700 font-bold">Ação multifacetada</td>
                </tr>
                <tr className="border-b border-purple-700">
                  <td className="py-4 px-4">Fórmula</td>
                  <td className="text-center py-4 px-4 text-purple-200">Genérica</td>
                  <td className="text-center py-4 px-4 bg-purple-700 font-bold">Fórmula exclusiva</td>
                </tr>
                <tr className="border-b border-purple-700">
                  <td className="py-4 px-4">Ácido Hialurônico</td>
                  <td className="text-center py-4 px-4 text-purple-200">Comum</td>
                  <td className="text-center py-4 px-4 bg-purple-700 font-bold">Ácido Hialurônico original</td>
                </tr>
                <tr>
                  <td className="py-4 px-4">Composição</td>
                  <td className="text-center py-4 px-4 text-purple-200">Variável</td>
                  <td className="text-center py-4 px-4 bg-purple-700 font-bold rounded-b-lg">100% Natural</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Zero Ingredients Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pura Ciência, Pura Natureza
            </h2>
            <p className="text-xl text-gray-600">
              Renoovy+ é formulado com os mais altos padrões de qualidade
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {['ZERO GLÚTEN', 'ZERO LACTOSE', 'ZERO SÓDIO', 'ZERO GORDURA', 'ZERO AÇÚCAR', 'ANVISA APROVADO'].map((badge, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border-2 border-purple-200 text-center hover:border-purple-400 transition">
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  {badge.split(' ')[0]}
                </div>
                <p className="text-sm text-gray-700 font-medium">
                  {badge.split(' ').slice(1).join(' ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section - PREÇOS */}
      <section id="ofertas" className="py-20 md:py-32 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Escolha Seu Plano de Beleza
            </h2>
            <p className="text-xl text-gray-600">
              Quanto mais você investe em si mesma, mais economiza
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: '1',
                name: '1 Pote',
                originalPrice: 197.00,
                price: 147.00,
                discount: 25,
                unitCount: 1,
                popular: false,
                features: [
                  'Tratamento de 1 mês',
                  'Frete grátis',
                  '12x sem juros',
                ],
                description: 'Perfeito para começar sua jornada'
              },
              {
                id: '2',
                name: '3 Potes',
                originalPrice: 591.00,
                price: 297.00,
                discount: 50,
                unitCount: 3,
                popular: true,
                features: [
                  'Tratamento de 3 meses',
                  'Frete grátis',
                  '12x sem juros',
                  'Desconto progressivo',
                ],
                description: 'A escolha mais popular'
              },
              {
                id: '3',
                name: '5 Potes',
                originalPrice: 985.00,
                price: 397.00,
                discount: 60,
                unitCount: 5,
                popular: false,
                features: [
                  'Tratamento de 5 meses',
                  'Frete grátis',
                  '12x sem juros',
                  'Máximo desconto',
                  'Suporte premium',
                ],
                description: 'Melhor custo-benefício'
              },
            ].map((pkg) => (
              <div key={pkg.id} className={`relative rounded-2xl p-8 transition transform hover:scale-105 ${
                pkg.popular
                  ? 'bg-gradient-to-br from-purple-600 to-purple-800 text-white shadow-2xl ring-2 ring-purple-400'
                  : 'bg-white border-2 border-purple-100 text-gray-900'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      MAIS POPULAR
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">
                  {pkg.unitCount}x Frasco{pkg.unitCount > 1 ? 's' : ''}
                </h3>
                
                <p className={`text-sm mb-6 ${pkg.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className={`text-sm line-through ${pkg.popular ? 'text-purple-200' : 'text-gray-400'}`}>
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pkg.originalPrice)}
                    </span>
                    <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">
                      -{pkg.discount}%
                    </span>
                  </div>
                  <div className="text-4xl font-bold mb-1">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pkg.price)}
                  </div>
                  <p className={`text-sm ${pkg.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                    ou 12x de {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pkg.price / 12)}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="text-purple-400">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-lg font-bold transition ${
                  pkg.popular
                    ? 'bg-white text-purple-600 hover:bg-purple-50'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}>
                  Escolher Este Plano
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - DEPOIMENTOS */}
      <section id="depoimentos" className="py-20 md:py-32 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Quem Já Usa, Recomenda!
            </h2>
            <p className="text-xl text-gray-600">
              Veja os resultados reais de nossas clientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                id: '1',
                name: 'Maria Silva',
                rating: 5,
                comment: 'Incrível! Em 30 dias já notei diferença na pele e cabelo. Minha autoestima aumentou muito!',
                location: 'São Paulo, SP',
                verified: true
              },
              {
                id: '2',
                name: 'Ana Costa',
                rating: 5,
                comment: 'Recomendo para todas as minhas amigas. Produto excelente, resultados visíveis!',
                location: 'Rio de Janeiro, RJ',
                verified: true
              },
              {
                id: '3',
                name: 'Juliana Santos',
                rating: 5,
                comment: 'Minha pele nunca esteve tão radiante. Vale cada centavo investido!',
                location: 'Belo Horizonte, MG',
                verified: true
              },
              {
                id: '4',
                name: 'Carla Oliveira',
                rating: 5,
                comment: 'Uso há 3 meses e os resultados são impressionantes. Adorei!',
                location: 'Brasília, DF',
                verified: true
              }
            ].map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center text-xl font-bold text-purple-600">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                      {testimonial.name}
                      {testimonial.verified && (
                        <span className="text-green-500 text-sm">✓ Verificado</span>
                      )}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Suas Dúvidas, Nossas Respostas
            </h2>
            <p className="text-xl text-gray-600">
              Tudo que você precisa saber sobre Renoovy+
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: 'Como tomar Renoovy+?',
                answer: 'Tome 2 cápsulas ao dia, preferencialmente após as refeições principais (almoço e jantar) com um copo de água.'
              },
              {
                question: 'Em quanto tempo vejo resultados?',
                answer: 'Os primeiros resultados aparecem em 15-30 dias de uso contínuo. Para resultados completos, recomendamos o uso por pelo menos 3 meses.'
              },
              {
                question: 'O produto tem efeitos colaterais?',
                answer: 'Renoovy+ é 100% natural e não apresenta efeitos colaterais quando usado conforme as instruções. É aprovado pela ANVISA.'
              },
              {
                question: 'Posso usar durante a gravidez?',
                answer: 'Consulte seu médico antes de usar qualquer suplemento durante a gravidez ou amamentação.'
              },
              {
                question: 'Como é feita a entrega?',
                answer: 'Entregamos para todo o Brasil via Correios. Frete grátis para compras acima de R$ 299. Prazo de 5-15 dias úteis.'
              },
              {
                question: 'Posso parcelar a compra?',
                answer: 'Sim! Você pode parcelar em até 12x sem juros no cartão de crédito ou ter 5% de desconto no PIX.'
              }
            ].map((faq, index) => (
              <div key={index} className="rounded-lg border border-purple-200 overflow-hidden">
                <details className="group">
                  <summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-purple-50 transition list-none">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <span className="text-purple-600 transform transition group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 bg-purple-50 border-t border-purple-200">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Transformar Sua Beleza?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de mulheres que já estão desfrutando dos benefícios de Renoovy+
          </p>
          <button className="bg-white text-purple-600 hover:bg-purple-50 px-10 py-6 text-lg font-bold rounded-lg transition">
            Comprar Agora com Desconto
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Renoovy+</h4>
              <p className="text-sm">A fórmula exclusiva que desafia o tempo.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contato</h4>
              <p className="text-sm">contato@renoovy.com.br</p>
              <p className="text-sm">Seg-Sex: 9h às 18h</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Informações</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Termos & Condições</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Segurança</h4>
              <p className="text-sm">Monitorado por empresas de segurança digital</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>Renoovy+ © 2024 | Todos os direitos reservados. CNPJ 18.015.785/0001-31</p>
            <p className="mt-4 text-xs">
              Este produto não deve ser utilizado por menores de 18 anos. Consulte um médico antes de usar se tiver condições médicas sérias.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}