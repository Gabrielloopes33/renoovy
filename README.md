# 🌟 Renoovy+ Landing Page

![Renoovy+ Logo](client/public/favicon.svg)

Uma landing page moderna e responsiva para o suplemento de beleza **Renoovy+**, desenvolvida com as melhores práticas de programação e Clean Architecture.

## 📋 Índice

- [✨ Sobre o Projeto](#-sobre-o-projeto)
- [🎯 Funcionalidades](#-funcionalidades)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🏗️ Arquitetura](#️-arquitetura)
- [⚙️ Instalação e Configuração](#️-instalação-e-configuração)
- [📱 Como Usar](#-como-usar)
- [🎨 Design System](#-design-system)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🛠️ Desenvolvimento](#️-desenvolvimento)
- [📈 Performance](#-performance)
- [🧪 Testes](#-testes)
- [🚀 Deploy](#-deploy)
- [🤝 Contribuição](#-contribuição)
- [📄 Licença](#-licença)

## ✨ Sobre o Projeto

**Renoovy+** é uma landing page profissional desenvolvida para promover um suplemento de beleza que promete rejuvenescer até 10 anos. O projeto foi construído seguindo os princípios da **Clean Architecture** e **Atomic Design**, garantindo código limpo, escalável e facilmente mantível.

### 🎯 Objetivo

Criar uma experiência de usuário excepcional que converta visitantes em clientes, apresentando o produto de forma atrativa e profissional, com foco em:

- **Conversão**: Interface otimizada para vendas
- **Performance**: Carregamento rápido e eficiente
- **Responsividade**: Funciona perfeitamente em todos os dispositivos
- **Acessibilidade**: Seguindo as melhores práticas de UX/UI

## 🎯 Funcionalidades

### 🏠 **Landing Page Completa**
- ✅ **Hero Section** - Apresentação impactante do produto
- ✅ **Trust Badges** - Selos de confiança (12x sem juros, frete grátis, etc.)
- ✅ **Benefits Section** - Benefícios detalhados do produto
- ✅ **Comparison Table** - Comparativo com concorrentes
- ✅ **Pricing Section** - Planos e preços com descontos
- ✅ **Testimonials** - Depoimentos reais de clientes
- ✅ **FAQ** - Perguntas frequentes com respostas
- ✅ **Footer** - Informações da empresa e links úteis

### 🛒 **Sistema de Compras**
- ✅ **Múltiplos Planos** - 1, 3 ou 5 frascos com descontos progressivos
- ✅ **Parcelamento** - Até 12x sem juros no cartão
- ✅ **Desconto PIX** - 5% de desconto adicional
- ✅ **Frete Grátis** - Para compras acima de R$ 299
- ✅ **Carrinho de Compras** - Funcionalidade completa (em desenvolvimento)

### 📱 **Experiência do Usuário**
- ✅ **Design Responsivo** - Otimizado para mobile, tablet e desktop
- ✅ **Navegação Suave** - Scroll suave entre seções
- ✅ **Loading States** - Estados de carregamento para melhor UX
- ✅ **Error Boundaries** - Tratamento de erros gracioso
- ✅ **Tema Personalizável** - Sistema de temas com Tailwind CSS

## 🚀 Tecnologias Utilizadas

### **Frontend Core**
- ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react) - Biblioteca para interfaces
- ![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=flat&logo=typescript) - Tipagem estática
- ![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=flat&logo=vite) - Build tool e dev server

### **Styling & UI**
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.14-38B2AC?style=flat&logo=tailwind-css) - Framework CSS utility-first
- ![Radix UI](https://img.shields.io/badge/Radix_UI-Latest-1A1A1A?style=flat&logo=radix-ui) - Componentes acessíveis
- ![Lucide React](https://img.shields.io/badge/Lucide-0.453.0-F56565?style=flat&logo=lucide) - Ícones SVG
- ![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.22-0055FF?style=flat&logo=framer) - Animações

### **State Management**
- ![Zustand](https://img.shields.io/badge/Zustand-5.0.8-FF6B6B?style=flat&logo=zustand) - Gerenciamento de estado
- ![React Query](https://img.shields.io/badge/React_Query-4.41.0-FF4154?style=flat&logo=react-query) - Cache e sincronização

### **Routing & Navigation**
- ![Wouter](https://img.shields.io/badge/Wouter-3.3.5-FF6B35?style=flat&logo=react-router) - Roteamento leve para React

### **Form Handling**
- ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.64.0-EC5990?style=flat&logo=reacthookform) - Formulários performáticos
- ![Zod](https://img.shields.io/badge/Zod-4.1.12-3E67B1?style=flat&logo=zod) - Validação de schemas

### **Development Tools**
- ![ESBuild](https://img.shields.io/badge/ESBuild-0.25.0-FFCF00?style=flat&logo=esbuild) - Bundler super rápido
- ![Prettier](https://img.shields.io/badge/Prettier-3.6.2-F7B93E?style=flat&logo=prettier) - Code formatter
- ![PNPM](https://img.shields.io/badge/PNPM-10.4.1-F69220?style=flat&logo=pnpm) - Package manager

### **Backend (Opcional)**
- ![Express.js](https://img.shields.io/badge/Express.js-4.21.2-000000?style=flat&logo=express) - Servidor web
- ![Axios](https://img.shields.io/badge/Axios-1.12.0-5A29E4?style=flat&logo=axios) - Cliente HTTP

## 🏗️ Arquitetura

O projeto segue os princípios da **Clean Architecture** e **SOLID**, garantindo:

### **📁 Camadas da Arquitetura**

```
src/
├── 🎯 domain/          # Regras de negócio e entidades
├── ⚙️ application/     # Casos de uso e interfaces
├── 🔧 infrastructure/  # Implementações e integrações
├── 🎨 components/      # UI Components (Atomic Design)
├── 🎣 hooks/          # Custom hooks
├── 🗄️ store/          # Estado global
├── ⚙️ config/         # Configurações
└── 📄 pages/          # Páginas da aplicação
```

### **🧱 Atomic Design Pattern**

- **⚛️ Atoms**: Componentes básicos (Button, Input, Badge)
- **🧪 Molecules**: Combinações de atoms (Card, Form Field)
- **🧬 Organisms**: Seções completas (Header, Hero, Footer)
- **📄 Templates**: Layouts de página
- **🌐 Pages**: Páginas finais

### **🔄 Dependency Injection**

- Container DI para gerenciamento de dependências
- Inversão de controle entre camadas
- Facilita testes unitários e integração

## ⚙️ Instalação e Configuração

### **📋 Pré-requisitos**

- **Node.js** 22.21.0 ou superior
- **PNPM** 10.4.1 (recomendado) ou npm/yarn

### **🚀 Instalação**

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/renoovy_redesign.git
cd renoovy_redesign

# Instale as dependências
pnpm install
# ou
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Inicie o servidor de desenvolvimento
pnpm dev
# ou
npm run dev
```

### **⚙️ Variáveis de Ambiente**

Crie um arquivo `.env` na raiz do projeto:

```env
# App Configuration
VITE_APP_TITLE=Renoovy+ | Desperte Sua Melhor Versão
VITE_APP_LOGO=/favicon.svg

# Analytics Configuration (opcional)
VITE_ANALYTICS_ENDPOINT=
VITE_ANALYTICS_WEBSITE_ID=

# API Configuration
VITE_API_URL=http://localhost:3001

# Environment
VITE_NODE_ENV=development
```

## 📱 Como Usar

### **🌐 Acessar a Aplicação**

Após iniciar o servidor de desenvolvimento:

- **Local**: http://localhost:3000
- **Rede**: http://192.168.x.x:3000

### **📄 Scripts Disponíveis**

```bash
# Desenvolvimento
pnpm dev          # Inicia servidor de desenvolvimento

# Build
pnpm build        # Build para produção
pnpm preview      # Preview do build

# Qualidade de Código
pnpm check        # Verificação de tipos TypeScript
pnpm format       # Formatação com Prettier

# Produção
pnpm start        # Inicia servidor em produção
```

## 🎨 Design System

### **🎨 Paleta de Cores**

```css
/* Purple Theme */
--purple-50: #faf5ff
--purple-100: #f3e8ff
--purple-600: #9333ea
--purple-700: #7c3aed
--purple-800: #6b21a8
--purple-900: #581c87

/* Gradients */
.gradient-primary: from-purple-600 to-purple-800
.gradient-hero: from-purple-50 via-white to-purple-50
```

### **📏 Typography**

- **Headings**: Inter, system fonts
- **Body**: System fonts stack
- **Sizes**: text-4xl, text-5xl para títulos principais

### **🧩 Componentes Base**

- **Buttons**: CTAButton, Button variants
- **Cards**: PackageCard, TestimonialCard, BenefitCard
- **Displays**: PriceDisplay, RatingDisplay
- **Navigation**: Header, NavLink, Footer

## 📁 Estrutura do Projeto

```
renoovy_redesign/
├── 📁 client/                    # Frontend React
│   ├── 📁 public/               # Arquivos estáticos
│   │   ├── favicon.svg         # Ícone do site
│   │   └── ...
│   └── 📁 src/
│       ├── 📁 components/       # Componentes UI
│       │   ├── atoms/          # Componentes básicos
│       │   ├── molecules/      # Combinações de atoms
│       │   ├── organisms/      # Seções completas
│       │   └── ui/            # Componentes do shadcn/ui
│       ├── 📁 hooks/           # Custom hooks
│       ├── 📁 store/           # Estado global (Zustand)
│       ├── 📁 pages/           # Páginas da aplicação
│       ├── 📁 lib/             # Utilitários
│       ├── 📁 types/           # Definições TypeScript
│       ├── 📁 config/          # Configurações
│       ├── 📁 domain/          # Entidades de negócio
│       ├── 📁 application/     # Casos de uso
│       ├── 📁 infrastructure/  # Implementações
│       ├── App.tsx             # Componente raiz
│       ├── main.tsx            # Entry point
│       └── index.css           # Estilos globais
├── 📁 server/                   # Backend Express (opcional)
├── 📁 shared/                   # Código compartilhado
├── 📁 patches/                  # Patches de dependências
├── package.json                # Configuração do projeto
├── vite.config.ts              # Configuração do Vite
├── tailwind.config.js          # Configuração do Tailwind
├── tsconfig.json               # Configuração do TypeScript
└── README.md                   # Documentação
```

## 🛠️ Desenvolvimento

### **🔧 Adicionando Novas Funcionalidades**

1. **Entidades**: Crie em `src/domain/entities/`
2. **Use Cases**: Implemente em `src/application/use-cases/`
3. **Componentes**: Siga o padrão Atomic Design
4. **Hooks**: Adicione lógica reusável em `src/hooks/`
5. **Estado**: Gerencie com Zustand em `src/store/`

### **🎨 Customizando Estilos**

```bash
# Adicionar nova cor ao tema
# tailwind.config.js
colors: {
  primary: {
    50: '#faf5ff',
    // ...
  }
}
```

### **🔌 Integrações**

- **Analytics**: Configure no `.env`
- **Payments**: Integre com gateway de pagamento
- **CRM**: Conecte com sistema de vendas
- **Email**: Configure envio de emails

## 📈 Performance

### **⚡ Otimizações Implementadas**

- ✅ **Code Splitting** - Divisão automática do código
- ✅ **Lazy Loading** - Carregamento sob demanda
- ✅ **Tree Shaking** - Eliminação de código morto
- ✅ **Asset Optimization** - Compressão de imagens e SVGs
- ✅ **CSS Purging** - Remoção de CSS não utilizado
- ✅ **Bundle Analysis** - Análise do tamanho dos pacotes

### **📊 Métricas Target**

- **First Paint**: < 1s
- **Time to Interactive**: < 2s
- **Bundle Size**: < 500KB (gzipped)
- **Lighthouse Score**: > 90

## 🧪 Testes

### **🔬 Estratégia de Testes**

```bash
# Executar testes
pnpm test

# Coverage
pnpm test:coverage

# E2E Tests
pnpm test:e2e
```

### **📋 Tipos de Testes**

- **Unit Tests**: Componentes isolados
- **Integration Tests**: Fluxos completos
- **E2E Tests**: Testes de ponta a ponta
- **Visual Tests**: Regressão visual

## 🚀 Deploy

### **☁️ Opções de Deploy**

#### **Vercel (Recomendado)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### **Netlify**
```bash
# Build
pnpm build

# Deploy pasta client/dist
```

#### **AWS S3 + CloudFront**
```bash
# Build
pnpm build

# Upload para S3
aws s3 sync client/dist s3://seu-bucket
```

### **🔧 Configuração de Produção**

```bash
# Build otimizado
pnpm build

# Preview local
pnpm preview

# Análise do bundle
npx vite-bundle-analyzer
```

## 🤝 Contribuição

### **📋 Como Contribuir**

1. **Fork** o projeto
2. **Clone** seu fork
3. **Crie** uma branch: `git checkout -b feature/nova-funcionalidade`
4. **Commit** suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`
5. **Push** para a branch: `git push origin feature/nova-funcionalidade`
6. **Abra** um Pull Request

### **📏 Padrões de Código**

- **ESLint** - Linting de código
- **Prettier** - Formatação automática
- **Conventional Commits** - Padrão de commits
- **TypeScript** - Tipagem obrigatória

### **🔍 Code Review**

- ✅ Testes passando
- ✅ Cobertura adequada
- ✅ Performance mantida
- ✅ Acessibilidade verificada
- ✅ Responsividade testada

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 👨‍💻 Autor

**Desenvolvido com 💜 por [Seu Nome]**

- 🌐 **Website**: [seu-site.com]
- 💼 **LinkedIn**: [seu-linkedin]
- 📧 **Email**: [seu-email@domain.com]
- 🐱 **GitHub**: [@seu-usuario]

---

## 🙏 Agradecimentos

- **React Team** - Por uma biblioteca incrível
- **Tailwind CSS** - Por facilitar o desenvolvimento de interfaces
- **Radix UI** - Por componentes acessíveis e de qualidade
- **Vite Team** - Por uma ferramenta de build excepcional
- **Open Source Community** - Por todas as bibliotecas utilizadas

---

<div align="center">
  <strong>⭐ Se este projeto te ajudou, deixe uma estrela! ⭐</strong>
</div>