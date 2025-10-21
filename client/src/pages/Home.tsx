// Refactored Home page using Clean Architecture

import { 
  Header,
  TrustBadgesSection,
  BenefitsSection,
  PackagesSection,
  TestimonialsSection,
  FAQSection,
} from '@/components/organisms';
import { motion } from 'framer-motion';
import { usePackages, useTestimonials, useFAQs, useBenefits } from '@/hooks';
import { useCartStore } from '@/store';
import { CONSTANTS } from '@/config';

export default function Home() {
  // Custom hooks for data fetching
  const { packages: packageList, loading: packagesLoading } = usePackages();
  const { testimonials: testimonialList, loading: testimonialsLoading } = useTestimonials({ 
    limit: 4, 
    onlyFeatured: true 
  });
  const { faqs: faqList, loading: faqsLoading } = useFAQs();
  const { benefits: benefitList, loading: benefitsLoading } = useBenefits();

  // Global state
  const { addItem, openCart } = useCartStore();

  // Event handlers
  const handlePackageSelect = (packageId: string) => {
    const selectedPackage = packageList.find(pkg => pkg.id === packageId);
    if (selectedPackage) {
      addItem(selectedPackage);
      openCart();
    }
  };

  const handleCtaClick = () => {
    // Scroll to packages section or open cart
    document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Navigation items
  const navigationItems = [
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Ofertas', href: '#ofertas' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'FAQ', href: '#faq' },
  ];

  // Trust badges data
  const trustBadges = [
    {
      icon: '12x',
      title: 'Parcelamento sem juros',
      description: ''
    },
    {
      icon: '+5%',
      title: 'Desconto no PIX',
      description: ''
    },
    {
      icon: '🚚',
      title: 'Frete grátis acima de R$ 299',
      description: ''
    },
    {
      icon: '⚡',
      title: 'Envio rápido para todo Brasil',
      description: ''
    },
  ];

  // Loading state
  if (packagesLoading || testimonialsLoading || faqsLoading || benefitsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header
        brandName="RENOOVY +"
        navigationItems={navigationItems}
        onCtaClick={handleCtaClick}
      />

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
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
              >
                Desperte Sua Melhor Versão
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Rejuvenesça até 10 anos com a fórmula exclusiva Renoovy+. Pele radiante, cabelos fortes e unhas saudáveis em um único suplemento.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-4 pt-4"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCtaClick}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
                >
                  Comprar Agora
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg text-lg font-semibold transition"
                >
                  Saiba Mais
                </motion.button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex gap-6 pt-4 text-sm text-gray-600"
              >
                {['Aprovado ANVISA', '100% Natural'].map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + idx * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-purple-600 text-lg">✓</span>
                    <span className="font-medium">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="relative h-96 md:h-[600px] flex items-center justify-center"
            >
              {/* Background decorative elements */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full"
              />
              
              {/* Product Image */}
              <motion.div 
                initial={{ scale: 0.6, opacity: 0, rotate: -10 }}
                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut", 
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 2,
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
                  onLoad={() => console.log('Image loaded successfully!')}
                  onError={(e) => {
                    console.error('Error loading image:', e);
                    console.log('Trying to load image again...');
                  }}
                />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                animate={{ 
                  y: [0, -10, 0],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="absolute top-16 right-16 text-4xl"
              >
                ✨
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                animate={{ 
                  y: [0, -15, 0],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }
                }}
                className="absolute bottom-20 left-8 text-3xl"
              >
                💫
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                animate={{ 
                  y: [0, -8, 0],
                  transition: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }
                }}
                className="absolute top-32 left-12 text-2xl"
              >
                ⭐
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Trust Badges */}
      <TrustBadgesSection badges={trustBadges} />

      {/* Benefits Section */}
      <div id="beneficios">
        <BenefitsSection
          title="Descubra o Poder de Renoovy+"
          subtitle="Uma fórmula completa que age em múltiplas frentes para sua beleza e bem-estar"
          benefits={benefitList}
        />
      </div>

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
                  <th className="text-left py-4 px-4 font-bold text-purple-100">
                    Característica
                  </th>
                  <th className="text-center py-4 px-4 font-bold text-purple-100">
                    Outras Marcas
                  </th>
                  <th className="text-center py-4 px-4 font-bold text-white bg-purple-700 rounded-t-lg">
                    Renoovy+
                  </th>
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

      {/* Packages Section */}
      <div id="ofertas">
        <PackagesSection
          title="Escolha Seu Plano de Beleza"
          subtitle="Quanto mais você investe em si mesma, mais economiza"
          packages={packageList}
          onPackageSelect={handlePackageSelect}
        />
      </div>

      {/* Testimonials Section */}
      <div id="depoimentos">
        <TestimonialsSection
          title="Quem Já Usa, Recomenda!"
          subtitle="Veja os resultados reais de nossas clientes"
          testimonials={testimonialList}
        />
      </div>

      {/* FAQ Section */}
      <div id="faq">
        <FAQSection
          title="Suas Dúvidas, Nossas Respostas"
          subtitle="Tudo que você precisa saber sobre Renoovy+"
          faqs={faqList}
        />
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Transformar Sua Beleza?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de mulheres que já estão desfrutando dos benefícios de Renoovy+
          </p>
          <button
            onClick={handleCtaClick}
            className="bg-white text-purple-600 hover:bg-purple-50 px-10 py-6 text-lg font-bold rounded-lg transition"
          >
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
              <p className="text-sm">{CONSTANTS.CONTACT.SUPPORT_EMAIL}</p>
              <p className="text-sm">{CONSTANTS.CONTACT.BUSINESS_HOURS.WEEKDAYS}</p>
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