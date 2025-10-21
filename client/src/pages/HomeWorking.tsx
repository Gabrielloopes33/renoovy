// Gradual implementation of Clean Architecture Home with Animations - FIXED

import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: { 
    opacity: 1, 
    x: 0
  }
};

const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: { 
    opacity: 1, 
    x: 0
  }
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
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1
  }
};

export default function HomeWorking() {
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
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"
          >
            RENOOVY +
          </motion.div>
          
          <motion.nav 
            variants={staggerContainer}
            className="hidden md:flex gap-8"
          >
            {['beneficios', 'ofertas', 'depoimentos', 'faq'].map((section) => (
              <motion.a
                key={section}
                variants={fadeInUp}
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
                transition={{ delay: 0.6 }}
                className="flex gap-4 pt-4"
              >
                <motion.button 
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
                >
                  Comprar Agora
                </motion.button>
                <motion.button 
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
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
                  className="w-64 h-80 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center text-6xl shadow-2xl cursor-pointer"
                >
                  💊
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
                <motion.div 
                  variants={fadeInUp}
                  className="text-2xl font-bold text-purple-600 mb-2"
                >
                  {badge.icon}
                </motion.div>
                <motion.p 
                  variants={fadeInUp}
                  className="text-sm text-gray-700 font-medium"
                >
                  {badge.title}
                </motion.p>
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
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    transition: { duration: 0.2 }
                  }}
                  className="text-4xl mb-4 inline-block"
                >
                  {benefit.icon}
                </motion.div>
                <motion.h3 
                  variants={fadeInUp}
                  className="text-2xl font-bold text-gray-900 mb-3"
                >
                  {benefit.title}
                </motion.h3>
                <motion.p 
                  variants={fadeInUp}
                  className="text-gray-600 leading-relaxed"
                >
                  {benefit.description}
                </motion.p>
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