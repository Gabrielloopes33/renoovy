// Thank you page after form submission

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Phone } from 'lucide-react';
import { Link, useLocation } from 'wouter';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
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

export default function ThankYouPage() {
  const [location] = useLocation();
  
  // Get phone from URL params or localStorage
  const urlParams = new URLSearchParams(location.split('?')[1] || '');
  const phone = urlParams.get('phone') || localStorage.getItem('formPhone') || '';

  useEffect(() => {
    // Meta Pixel Code - Inicialização
    if (!(window as any).fbq) {
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      script.async = true;
      document.head.appendChild(script);
      
      // Função fbq
      (window as any).fbq = function() {
        ((window as any).fbq.q = (window as any).fbq.q || []).push(arguments);
      };
      (window as any).fbq.q = [];
      
      // Aguardar carregamento do script
      script.onload = () => {
        if ((window as any).fbq) {
          (window as any).fbq('init', '678794644544015');
          (window as any).fbq('track', 'PageView');
        }
      };
      
      // Fallback para caso o script já tenha carregado
      if (document.readyState === 'complete') {
        setTimeout(() => {
          if ((window as any).fbq && typeof (window as any).fbq === 'function') {
            (window as any).fbq('init', '678794644544015');
            (window as any).fbq('track', 'PageView');
          }
        }, 100);
      }
    } else {
      // Se o fbq já existe, apenas inicializar
      (window as any).fbq('init', '678794644544015');
      (window as any).fbq('track', 'PageView');
    }

    // Google Pixel tracking - conversão
    if ((window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL', // Substitua pelos seus IDs
        value: 1.0,
        currency: 'BRL'
      });
    }

    // Facebook Pixel tracking - Lead (evento de conversão)
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }

    // Adicionar noscript fallback para Meta Pixel
    const noscriptImg = document.createElement('img');
    noscriptImg.height = 1;
    noscriptImg.width = 1;
    noscriptImg.style.display = 'none';
    noscriptImg.src = 'https://www.facebook.com/tr?id=678794644544015&ev=PageView&noscript=1';
    document.body.appendChild(noscriptImg);

    // Limpar dados do localStorage após uso
    localStorage.removeItem('formPhone');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Header */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="bg-white border-b border-purple-100"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            RENOOVY +
          </div>
          
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Início
            </motion.button>
          </Link>
        </div>
      </motion.header>

      {/* Success Content */}
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-2xl w-full text-center"
        >
          {/* Success Icon */}
          <motion.div
            variants={scaleIn}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-12 h-12 text-green-600" />
          </motion.div>
          
          {/* Main Message */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Obrigado! 🎉
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto"
          >
            Seu formulário foi enviado com sucesso! Você receberá o PDF gratuito via WhatsApp nos próximos minutos.
          </motion.p>

          {/* Phone Display */}
          {phone && (
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center gap-3 text-lg text-gray-700 bg-white p-4 rounded-lg shadow-md mb-8 max-w-md mx-auto"
            >
              <Phone className="w-5 h-5 text-purple-600" />
              <span className="font-medium">WhatsApp: {phone}</span>
            </motion.div>
          )}

          {/* Instructions */}
          <motion.div
            variants={staggerContainer}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-bold text-gray-900 mb-4"
            >
              Próximos Passos:
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold text-sm">1</span>
                </div>
                <p className="text-gray-700">
                  <strong>Verifique seu WhatsApp</strong> - O PDF será enviado automaticamente nos próximos minutos
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold text-sm">2</span>
                </div>
                <p className="text-gray-700">
                  <strong>Baixe o guia</strong> - Clique no link que será enviado para acessar seu PDF gratuito
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
                <p className="text-gray-700">
                  <strong>Comece a transformação</strong> - Siga as dicas do guia e descubra os segredos para uma pele radiante
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={staggerContainer}
            className="space-y-4"
          >
            <Link href="/">
              <motion.button
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-2 shadow-lg"
              >
                <ArrowLeft className="w-5 h-5" />
                Voltar ao Site
              </motion.button>
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 p-4 bg-purple-50 rounded-lg"
          >
            <p className="text-sm text-purple-700">
              <strong>Não recebeu o PDF?</strong> Verifique se o número do WhatsApp está correto e aguarde alguns minutos. 
              Se ainda não receber, entre em contato conosco.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}