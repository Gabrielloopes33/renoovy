// Form page for PDF lead magnet

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, AlertCircle, Phone, Mail, User, FileText } from 'lucide-react';
import { Link, useLocation } from 'wouter';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
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

interface FormData {
  name: string;
  phone: string;
  email: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

export default function FormPage() {
  const [, navigate] = useLocation();
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Nome deve ter pelo menos 2 caracteres';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (!/^\(?[1-9]{2}\)?\s?9?\d{4}-?\d{4}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Formato de telefone inválido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Format phone number
  const formatPhone = (value: string): string => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  // Handle input change
  const handleInputChange = (field: keyof FormData, value: string) => {
    let formattedValue = value;
    
    if (field === 'phone') {
      formattedValue = formatPhone(value);
    }

    setFormData((prev: FormData) => ({
      ...prev,
      [field]: formattedValue
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev: FormErrors) => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  // Submit form to N8n
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // trocar pelo webhook
      const response = await fetch('https://flow.agenciatouch.com.br/webhook/068f42dd-3f61-48e0-97d7-b4130d61e123', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.replace(/\D/g, ''), // Send only numbers
          email: formData.email.trim(),
          timestamp: new Date().toISOString(),
          source: 'isca-digital-receitas'
        })
      });

      if (response.ok) {
        // Salvar telefone no localStorage para a página de obrigado
        localStorage.setItem('formPhone', formData.phone);
        
        // Redirecionar para página de obrigado
        navigate(`/obrigado?phone=${encodeURIComponent(formData.phone)}`);
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Erro ao enviar formulário. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Voltar
            </motion.button>
          </Link>
        </div>
      </motion.header>

      {/* Form Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-8 text-white text-center"
            >
              <motion.div
                variants={scaleIn}
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <FileText className="w-8 h-8" />
              </motion.div>
              
              <h1 className="text-3xl font-bold mb-2">
                Receitas de alimentos Anti-inflamatórios e Antioxidantes
              </h1>
              <p className="text-purple-100 text-lg">
                Receitas que cuidam de você de dentro para fora.
              </p>
            </motion.div>

            {/* Form */}
            <motion.div
              variants={fadeInUp}
              className="p-8"
            >
              <motion.div
                variants={fadeInUp}
                className="mb-8 text-center"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Receba seu PDF gratuito
                </h2>
                <p className="text-gray-600">
                  Preencha os dados abaixo e receba o guia completo via WhatsApp
                </p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={fadeInLeft}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('name', e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Digite seu nome completo"
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={fadeInLeft}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('phone', e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="(11) 99999-9999"
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.phone}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-gray-500">
                    O PDF será enviado via WhatsApp para este número
                  </p>
                </motion.div>

                <motion.div variants={fadeInLeft}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('email', e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="seu@email.com"
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </motion.div>

                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <p className="text-red-600 text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      {submitError}
                    </p>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  variants={scaleIn}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      Receber PDF Gratuito
                    </>
                  )}
                </motion.button>
              </form>

              <motion.div
                variants={fadeInUp}
                className="mt-6 p-4 bg-purple-50 rounded-lg"
              >
                <p className="text-sm text-purple-700 text-center">
                  🔒 Seus dados estão seguros conosco. Não enviamos spam.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: '📋',
                title: 'Guia Completo',
                description: 'Passo a passo detalhado para cuidados com a pele'
              },
              {
                icon: '📱',
                title: 'Via WhatsApp',
                description: 'Receba instantaneamente no seu celular'
              },
              {
                icon: '🎁',
                title: '100% Gratuito',
                description: 'Sem taxas ocultas ou compromissos'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center cursor-pointer"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}