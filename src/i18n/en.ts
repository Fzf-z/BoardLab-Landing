export const en = {
  nav: {
    features: 'Features',
    pricing: 'Pricing',
    faq: 'FAQ',
    download: 'Download',
    switchLang: 'ES',
  },

  hero: {
    badge: '✨ v3.0 — Now with AI-Powered Diagnosis',
    title: 'Intelligent Electronic Board Diagnostics',
    titleHighlight: 'Intelligent',
    subtitle:
      'Map PCB measurements, connect SCPI instruments, load boardview files, and get AI-powered diagnosis — all in one desktop app.',
    ctaPrimary: '⬇ Download Free',
    ctaSecondary: 'View Pricing →',
  },

  features: {
    label: 'FEATURES',
    title: 'Everything you need for PCB diagnostics',
    items: [
      {
        title: 'PCB Point Mapping',
        description:
          'Dual-side boards with click-to-measure, zoom, pan & minimap',
        isPro: false,
      },
      {
        title: 'SCPI Instruments',
        description:
          'Real-time multimeter & oscilloscope via TCP/Serial. Keysight, Rigol, Siglent & more',
        isPro: false,
      },
      {
        title: 'AI Diagnosis \u1D18\u1D3F\u1D3C',
        description:
          'Gemini-powered anomaly detection, contextual analysis & interactive chat',
        isPro: true,
      },
      {
        title: 'Boardview Files',
        description:
          'Load BRD, BVR3, ASC formats. Search nets & components, view connections',
        isPro: false,
      },
      {
        title: 'Test Sequencer \u1D18\u1D3F\u1D3C',
        description:
          'Automated sequential test workflows with instrument auto-configuration',
        isPro: true,
      },
      {
        title: 'Cloud Sync \u1D18\u1D3F\u1D3C',
        description:
          'Offline-first with automatic cloud backup. Works without internet',
        isPro: true,
      },
    ],
  },

  pricing: {
    label: 'PRICING',
    title: 'Start free, upgrade when ready',
    monthly: 'Monthly',
    annual: 'Annual',
    free: {
      name: 'Free',
      price: '$0',
      subtitle: 'Perfect for getting started',
      limits: '3 projects · 50 points · 1 device',
      features: [
        'Basic PCB mapping',
        'Single instrument connection',
        'Local storage',
      ],
      cta: 'Download Free',
    },
    pro: {
      badge: 'POPULAR',
      name: 'Pro',
      priceMonthly: '$15/mo',
      priceAnnual: '$13.75/mo',
      annualNote: 'billed $165/year — save $15',
      subtitle: 'For professional technicians',
      features: [
        'Unlimited projects & points',
        'AI-powered diagnosis',
        'Golden board comparison',
        'Cloud sync & backup',
        'PDF/image export',
        'Test sequencer',
        '2 device activations',
        'Priority support',
      ],
      cta: 'Get Pro →',
    },
  },

  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'Does it work offline?',
        answer:
          'Yes! All data is stored locally in SQLite. Cloud sync is optional and happens automatically when you\'re connected.',
      },
      {
        question: 'Which instruments are supported?',
        answer:
          'Any SCPI-compatible instrument via TCP/IP or Serial. Presets for Keysight, Rigol, Siglent, Owon, Fluke, and Tektronix.',
      },
      {
        question: 'Which operating systems are supported?',
        answer:
          'Windows is fully supported. macOS and Linux support is planned.',
      },
      {
        question: 'What boardview formats can I load?',
        answer: 'BRD, BVR3, ASC, GenCAD, BDV, FZ, and TVW formats.',
      },
      {
        question: 'Can I cancel my Pro subscription?',
        answer:
          'Yes, anytime from your customer portal. You keep Pro access until the end of your billing period.',
      },
      {
        question: 'Is my data secure?',
        answer:
          'API keys are encrypted locally. Cloud sync uses Supabase with Row Level Security — only you can access your projects.',
      },
    ],
  },

  footer: {
    copyright: '© 2026 Z Electrónica UY. All rights reserved.',
    support: 'Support',
  },

  seo: {
    title: 'BoardLab Pro — Intelligent Electronic Board Diagnostics',
    description:
      'Map PCB measurements, connect SCPI instruments, load boardview files, and get AI-powered diagnosis — all in one desktop app.',
  },

  notFound: {
    title: 'Page not found',
    message: "The page you're looking for doesn't exist.",
    cta: 'Go home',
  },
} as const;
