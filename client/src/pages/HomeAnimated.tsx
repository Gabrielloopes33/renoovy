// Complete Animated Home page

import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export default function Home() {
  // Function to scroll to offers section
  const scrollToOffers = () => {
    document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to handle package selection with different URLs
  const handlePackageSelect = (packageId: string) => {
    const packageUrls: Record<string, string> = {
      '1': 'https://app.monetizze.com.br/checkout/KRA254164', // 1 frasco
      '2': 'https://app.monetizze.com.br/checkout/KWS254165', // 3 frascos
      '3': 'https://app.monetizze.com.br/checkout/KWS254166', // 5 frascos
    };
    
    const url = packageUrls[packageId];
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white border-b border-purple-100"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            variants={fadeInLeft}
            transition={{ duration: 0.8 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"
          >
            RENOOVY +
          </motion.div>
          
          <motion.nav 
            variants={staggerContainer}
            className="hidden md:flex gap-8"
          >
            {['beneficios', 'ofertas', 'depoimentos', 'faq'].map((section, idx) => (
              <motion.a
                key={section}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, color: "#9333ea" }}
                href={`#${section}`}
                className="text-gray-700 hover:text-purple-600 transition"
              >
                {section === 'beneficios' ? 'Benefícios' : 
                 section === 'ofertas' ? 'Ofertas' : 
                 section === 'depoimentos' ? 'Depoimentos' : 'FAQ'}
              </motion.a>
            ))}
          </motion.nav>
          
          <motion.button 
            variants={fadeInRight}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.8 }}
            onClick={scrollToOffers}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Comprar Agora
          </motion.button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative overflow-hidden py-20 md:py-32"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={fadeInLeft}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.h1 
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
              >
                Desperte Sua Melhor Versão
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Rejuvenesça até 10 anos com a fórmula exclusiva Renoovy+. Pele radiante, cabelos fortes e unhas saudáveis em um único suplemento.
              </motion.p>
              
              <motion.div 
                variants={staggerContainer}
                className="flex gap-4 pt-4"
              >
                <motion.button 
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToOffers}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
                >
                  Comprar Agora
                </motion.button>
                <motion.button 
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg text-lg font-semibold transition"
                >
                  Saiba Mais
                </motion.button>
              </motion.div>
              
              <motion.div 
                variants={staggerContainer}
                className="flex gap-6 pt-4 text-sm text-gray-600"
              >
                {['Aprovado ANVISA', '100% Natural'].map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-center gap-2"
                  >
                    <span className="text-purple-600">✓</span>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={fadeInRight}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="relative h-96 md:h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-300 rounded-3xl opacity-20"></div>
              <div className="relative h-full flex items-center justify-center">
                <motion.div 
                  variants={scaleIn}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative z-10 cursor-pointer"
                >
                  <img 
                    src="/frasco.png" 
                    alt="Renoovy+ - Suplemento de Beleza" 
                    className="w-80 h-auto drop-shadow-2xl"
                    style={{ maxWidth: '320px', height: 'auto' }}
                    loading="eager"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Trust Badges */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="bg-gradient-to-r from-purple-50 to-purple-100 py-12"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: '12x', title: 'Parcelamento sem juros' },
              { icon: '+5%', title: 'Desconto no PIX' },
              { icon: '🚚', title: 'Frete grátis acima de R$ 299' },
              { icon: '⚡', title: 'Envio rápido para todo Brasil' },
            ].map((badge, index) => (
              <motion.div 
                key={index} 
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-4 bg-white rounded-lg shadow-sm cursor-pointer"
              >
                <div className="text-2xl font-bold text-purple-600 mb-2">{badge.icon}</div>
                <p className="text-sm text-gray-700 font-medium">{badge.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        id="beneficios" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 md:py-32"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Descubra o Poder de Renoovy+
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Uma fórmula completa que age em múltiplas frentes para sua beleza e bem-estar
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
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
              <motion.div 
                key={index} 
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-white to-purple-50 border border-purple-100 cursor-pointer"
              >
                <motion.div 
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    transition: { duration: 0.2 }
                  }}
                  className="text-4xl mb-4 inline-block"
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Comparison Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-purple-900 to-purple-800 text-white py-20 md:py-32"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Por Que Renoovy+ é a Escolha Inteligente?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-purple-100"
            >
              Superioridade comprovada em cada detalhe
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="overflow-x-auto"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-purple-700">
                  <th className="text-left py-4 px-4 font-bold text-purple-100">Característica</th>
                  <th className="text-center py-4 px-4 font-bold text-purple-100">Outras Marcas</th>
                  <th className="text-center py-4 px-4 font-bold text-white bg-purple-700 rounded-t-lg">Renoovy+</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Ativos Potentes', others: 'Até 6 ativos', renoovy: '22 ativos poderosos' },
                  { feature: 'Vitaminas Essenciais', others: 'Até 3 vitaminas', renoovy: '8 vitaminas essenciais' },
                  { feature: 'Ação Abrangente', others: 'Foco em uma frente', renoovy: 'Ação multifacetada' },
                  { feature: 'Fórmula', others: 'Genérica', renoovy: 'Fórmula exclusiva' },
                  { feature: 'Ácido Hialurônico', others: 'Comum', renoovy: 'Ácido Hialurônico original' },
                  { feature: 'Composição', others: 'Variável', renoovy: '100% Natural' },
                ].map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="border-b border-purple-700"
                  >
                    <td className="py-4 px-4">{row.feature}</td>
                    <td className="text-center py-4 px-4 text-purple-200">{row.others}</td>
                    <td className={`text-center py-4 px-4 bg-purple-700 font-bold ${index === 5 ? 'rounded-b-lg' : ''}`}>
                      {row.renoovy}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </motion.section>

      {/* Zero Ingredients Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 md:py-32 bg-gradient-to-b from-white to-purple-50"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Pura Ciência, Pura Natureza
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600"
            >
              Renoovy+ é formulado com os mais altos padrões de qualidade
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-6 gap-4"
          >
            {['ZERO GLÚTEN', 'ZERO LACTOSE', 'ZERO SÓDIO', 'ZERO GORDURA', 'ZERO AÇÚCAR', 'ANVISA APROVADO'].map((badge, idx) => (
              <motion.div 
                key={idx} 
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#9333ea",
                  transition: { duration: 0.2 }
                }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white border-2 border-purple-200 text-center hover:border-purple-400 transition cursor-pointer"
              >
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  {badge.split(' ')[0]}
                </div>
                <p className="text-sm text-gray-700 font-medium">
                  {badge.split(' ').slice(1).join(' ')}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Packages Section - PREÇOS */}
      <motion.section 
        id="ofertas" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 md:py-32 bg-gradient-to-b from-purple-50 to-white"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Escolha Seu Plano de Beleza
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600"
            >
              Quanto mais você investe em si mesma, mais economiza
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
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
            ].map((pkg, index) => (
              <motion.div 
                key={pkg.id} 
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.02, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 transition transform cursor-pointer ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-purple-600 to-purple-800 text-white shadow-2xl ring-2 ring-purple-400'
                    : 'bg-white border-2 border-purple-100 text-gray-900'
                }`}
              >
                {pkg.popular && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  >
                    <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      MAIS POPULAR
                    </span>
                  </motion.div>
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
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handlePackageSelect(pkg.id)}
                  className={`w-full py-4 rounded-lg font-bold transition ${
                    pkg.popular
                      ? 'bg-white text-purple-600 hover:bg-purple-50'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  Escolher Este Plano
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section - DEPOIMENTOS */}
      <motion.section 
        id="depoimentos" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 md:py-32 bg-gradient-to-b from-purple-50 to-white"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Quem Já Usa, Recomenda!
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600"
            >
              Veja os resultados reais de nossas clientes
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
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
            ].map((testimonial, index) => (
              <motion.div 
                key={testimonial.id} 
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center text-xl font-bold text-purple-600"
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>
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
                
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-1 mb-4"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.span 
                      key={i} 
                      initial={{ opacity: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, rotate: 0 }}
                      transition={{ delay: i * 0.1 + 0.5 }}
                      className="text-yellow-400 text-lg"
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>
                
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        id="faq" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 md:py-32"
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Suas Dúvidas, Nossas Respostas
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600"
            >
              Tudo que você precisa saber sobre Renoovy+
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="space-y-4"
          >
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
              <motion.div 
                key={index} 
                variants={scaleIn}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-lg border border-purple-200 overflow-hidden"
              >
                <details className="group">
                  <motion.summary 
                    whileHover={{ backgroundColor: "#faf5ff" }}
                    className="cursor-pointer p-6 flex items-center justify-between transition list-none"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <motion.span 
                      whileHover={{ scale: 1.2 }}
                      className="text-purple-600 transform transition group-open:rotate-180"
                    >
                      ▼
                    </motion.span>
                  </motion.summary>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="px-6 pb-6 text-gray-700 bg-purple-50 border-t border-purple-200"
                  >
                    {faq.answer}
                  </motion.div>
                </details>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16 md:py-24"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Pronto para Transformar Sua Beleza?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto"
          >
            Junte-se a milhares de mulheres que já estão desfrutando dos benefícios de Renoovy+
          </motion.p>
          <motion.button 
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={scrollToOffers}
            className="bg-white text-purple-600 hover:bg-purple-50 px-10 py-6 text-lg font-bold rounded-lg transition"
          >
            Comprar Agora com Desconto
          </motion.button>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="bg-gray-900 text-gray-400 py-12"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8 mb-8"
          >
            <motion.div variants={fadeInUp}>
              <h4 className="text-white font-bold mb-4">Renoovy+</h4>
              <p className="text-sm">A fórmula exclusiva que desafia o tempo.</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h4 className="text-white font-bold mb-4">Contato</h4>
              <p className="text-sm">contato@renoovy.com.br</p>
              <p className="text-sm">Seg-Sex: 9h às 18h</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h4 className="text-white font-bold mb-4">Informações</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Termos & Condições</a></li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h4 className="text-white font-bold mb-4">Segurança</h4>
              <p className="text-sm">Monitorado por empresas de segurança digital</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="border-t border-gray-800 pt-8 text-center text-sm"
          >
            <p>Renoovy+ © 2024 | Todos os direitos reservados. CNPJ 18.015.785/0001-31</p>
            <p className="mt-4 text-xs">
              Este produto não deve ser utilizado por menores de 18 anos. Consulte um médico antes de usar se tiver condições médicas sérias.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}