// Environment configuration and constants

export const APP_CONFIG = {
  // Application Info
  app: {
    name: 'Renoovy+',
    version: '1.0.0',
    description: 'A fórmula exclusiva que desafia o tempo',
    url: process.env.VITE_APP_URL || 'https://renoovy.com',
  },

  // API Configuration
  api: {
    baseUrl: process.env.VITE_API_BASE_URL || '/api',
    timeout: parseInt(process.env.VITE_API_TIMEOUT || '10000'),
    retryAttempts: parseInt(process.env.VITE_API_RETRY_ATTEMPTS || '3'),
  },

  // Feature Flags
  features: {
    enableAnalytics: process.env.VITE_ENABLE_ANALYTICS === 'true',
    enableChat: process.env.VITE_ENABLE_CHAT === 'true',
    enableA11y: process.env.VITE_ENABLE_A11Y !== 'false', // Default to true
    enableDevTools: process.env.NODE_ENV === 'development',
  },

  // Analytics
  analytics: {
    googleAnalyticsId: process.env.VITE_GA_ID,
    umamiWebsiteId: process.env.VITE_UMAMI_WEBSITE_ID,
    umamiScriptUrl: process.env.VITE_UMAMI_SCRIPT_URL,
  },

  // Third-party Services
  services: {
    supportEmail: process.env.VITE_SUPPORT_EMAIL || 'suporte@renoovy.com',
    whatsapp: process.env.VITE_WHATSAPP_NUMBER,
    sentry: {
      dsn: process.env.VITE_SENTRY_DSN,
      environment: process.env.NODE_ENV || 'development',
    },
  },

  // UI Configuration
  ui: {
    theme: {
      defaultTheme: 'light' as const,
      allowThemeToggle: process.env.VITE_ALLOW_THEME_TOGGLE === 'true',
    },
    animations: {
      enabled: process.env.VITE_DISABLE_ANIMATIONS !== 'true',
      reducedMotion: false, // Will be set by user preference
    },
  },

  // Business Configuration
  business: {
    maxCartItems: parseInt(process.env.VITE_MAX_CART_ITEMS || '10'),
    defaultCurrency: 'BRL' as const,
    supportedCurrencies: ['BRL', 'USD'] as const,
    defaultLanguage: 'pt-BR' as const,
    supportedLanguages: ['pt-BR', 'en-US'] as const,
  },

  // Storage Configuration
  storage: {
    prefix: 'renoovy_',
    version: '1.0',
  },
} as const;

// Application Constants
export const CONSTANTS = {
  // Route Constants
  ROUTES: {
    HOME: '/',
    ABOUT: '/sobre',
    CONTACT: '/contato',
    FAQ: '/faq',
    PRIVACY: '/privacidade',
    TERMS: '/termos',
    NOT_FOUND: '/404',
  },

  // UI Constants
  BREAKPOINTS: {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },

  // Animation Durations
  ANIMATIONS: {
    FAST: 150,
    NORMAL: 250,
    SLOW: 350,
    EXTRA_SLOW: 500,
  },

  // Z-Index Layers
  Z_INDEX: {
    DROPDOWN: 1000,
    STICKY: 1010,
    FIXED: 1020,
    MODAL_BACKDROP: 1030,
    MODAL: 1040,
    POPOVER: 1050,
    TOOLTIP: 1060,
    TOAST: 1070,
  },

  // Form Validation
  VALIDATION: {
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE_REGEX: /^(\+55\s?)?\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
    MIN_PASSWORD_LENGTH: 8,
    MAX_TEXT_LENGTH: 500,
    MAX_TESTIMONIAL_LENGTH: 300,
  },

  // Business Rules
  BUSINESS: {
    MIN_AGE: 18,
    MAX_PACKAGE_QUANTITY: 10,
    DEFAULT_INSTALLMENTS: 12,
    FREE_SHIPPING_THRESHOLD: 299,
    PIX_DISCOUNT_PERCENTAGE: 5,
  },

  // API Endpoints
  ENDPOINTS: {
    PACKAGES: '/packages',
    TESTIMONIALS: '/testimonials',
    FAQS: '/faqs',
    BENEFITS: '/benefits',
    CONTACT: '/contact',
    NEWSLETTER: '/newsletter',
    ORDER: '/orders',
  },

  // Local Storage Keys
  STORAGE_KEYS: {
    CART: 'cart',
    USER_PREFERENCES: 'user-preferences',
    THEME: 'theme',
    LANGUAGE: 'language',
    CURRENCY: 'currency',
    RECENTLY_VIEWED: 'recently-viewed',
    CONSENT: 'consent',
  },

  // Error Messages
  ERROR_MESSAGES: {
    NETWORK_ERROR: 'Erro de conexão. Verifique sua internet e tente novamente.',
    VALIDATION_ERROR: 'Por favor, verifique os dados informados.',
    UNKNOWN_ERROR: 'Ocorreu um erro inesperado. Tente novamente mais tarde.',
    TIMEOUT_ERROR: 'A solicitação demorou muito para responder. Tente novamente.',
    NOT_FOUND_ERROR: 'Recurso não encontrado.',
    PERMISSION_ERROR: 'Você não tem permissão para realizar esta ação.',
  },

  // Success Messages
  SUCCESS_MESSAGES: {
    ITEM_ADDED_TO_CART: 'Item adicionado ao carrinho com sucesso!',
    CONTACT_FORM_SENT: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    NEWSLETTER_SUBSCRIBED: 'Inscrição realizada com sucesso!',
    PREFERENCES_SAVED: 'Preferências salvas com sucesso!',
  },

  // Feature Flags
  FEATURES: {
    DARK_MODE: false,
    MULTI_LANGUAGE: false,
    LIVE_CHAT: true,
    PRODUCT_REVIEWS: true,
    WISHLIST: false,
    COMPARISON: false,
  },

  // External URLs
  EXTERNAL_URLS: {
    ANVISA: 'https://www.gov.br/anvisa/pt-br',
    FACEBOOK: process.env.VITE_FACEBOOK_URL,
    INSTAGRAM: process.env.VITE_INSTAGRAM_URL,
    YOUTUBE: process.env.VITE_YOUTUBE_URL,
    LINKEDIN: process.env.VITE_LINKEDIN_URL,
  },

  // Meta Tags
  META: {
    DEFAULT_TITLE: 'Renoovy+ | Desperte Sua Melhor Versão',
    DEFAULT_DESCRIPTION: 'Rejuvenesça até 10 anos com a fórmula exclusiva Renoovy+. Pele radiante, cabelos fortes e unhas saudáveis em um único suplemento.',
    DEFAULT_IMAGE: '/images/og-image.jpg',
    KEYWORDS: [
      'suplemento',
      'beleza',
      'colágeno',
      'rejuvenescimento',
      'pele',
      'cabelo',
      'unhas',
      'anti-aging',
      'vitaminas',
      'saúde',
    ],
  },

  // Contact Information
  CONTACT: {
    EMAIL: 'contato@renoovy.com',
    SUPPORT_EMAIL: 'suporte@renoovy.com',
    PHONE: '+55 (11) 99999-9999',
    WHATSAPP: '+5511999999999',
    ADDRESS: {
      STREET: 'Rua das Flores, 123',
      NEIGHBORHOOD: 'Vila Mariana',
      CITY: 'São Paulo',
      STATE: 'SP',
      ZIP: '04123-456',
      COUNTRY: 'Brasil',
    },
    BUSINESS_HOURS: {
      WEEKDAYS: '08:00 - 18:00',
      SATURDAY: '09:00 - 14:00',
      SUNDAY: 'Fechado',
    },
  },
} as const;

// Type exports for better TypeScript support
export type Currency = typeof APP_CONFIG.business.defaultCurrency;
export type Language = typeof APP_CONFIG.business.defaultLanguage;
export type Theme = typeof APP_CONFIG.ui.theme.defaultTheme;

// Helper functions
export const isProduction = process.env.NODE_ENV === 'production';
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isTest = process.env.NODE_ENV === 'test';

// Environment check function
export function checkEnvironment() {
  const requiredEnvVars: string[] = [
    // Add required environment variables here
    // 'VITE_API_BASE_URL',
    // 'VITE_GA_ID',
  ];

  const missingEnvVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  );

  if (missingEnvVars.length > 0 && isProduction) {
    console.warn(
      `Missing required environment variables: ${missingEnvVars.join(', ')}`
    );
  }

  return {
    isValid: missingEnvVars.length === 0,
    missingVars: missingEnvVars,
  };
}