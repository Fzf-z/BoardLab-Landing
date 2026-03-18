export const es = {
  nav: {
    features: 'Características',
    pricing: 'Precios',
    faq: 'FAQ',
    download: 'Descargar',
    switchLang: 'EN',
  },

  hero: {
    badge: '✨ v3.0 — Ahora con Diagnóstico con IA',
    title: 'Diagnóstico Inteligente de Placas Electrónicas',
    titleHighlight: 'Inteligente',
    subtitle:
      'Mapea mediciones de PCB, conecta instrumentos SCPI, carga archivos boardview, y obtén diagnóstico con IA — todo en una app de escritorio.',
    ctaPrimary: '⬇ Descargar Gratis',
    ctaSecondary: 'Ver Precios →',
    tab1: 'Mapeo de Puntos',
    tab2: 'Boardview',
  },

  features: {
    label: 'CARACTERÍSTICAS',
    title: 'Todo lo que necesitas para diagnosticar PCBs',
    items: [
      {
        title: 'Mapeo de Puntos PCB',
        description:
          'Placas de doble cara con clic para medir, zoom, pan y minimapa',
        isPro: false,
      },
      {
        title: 'Instrumentos SCPI',
        description:
          'Multímetro y osciloscopio en tiempo real vía TCP/Serial. Keysight, Rigol, Siglent y más',
        isPro: false,
      },
      {
        title: 'Diagnóstico con IA \u1D18\u1D3F\u1D3C',
        description:
          'Detección de anomalías con Gemini, análisis contextual y chat interactivo',
        isPro: true,
      },
      {
        title: 'Archivos Boardview',
        description:
          'Carga formatos BRD, BVR3, ASC. Busca redes y componentes, visualiza conexiones',
        isPro: false,
      },
      {
        title: 'Secuenciador de Pruebas \u1D18\u1D3F\u1D3C',
        description:
          'Flujos de prueba secuenciales automatizados con autoconfiguración de instrumentos',
        isPro: true,
      },
      {
        title: 'Sincronización Cloud \u1D18\u1D3F\u1D3C',
        description:
          'Primero offline con respaldo automático en la nube. Funciona sin internet',
        isPro: true,
      },
    ],
  },

  pricing: {
    label: 'PRECIOS',
    title: 'Empieza gratis, mejora cuando quieras',
    monthly: 'Mensual',
    annual: 'Anual',
    free: {
      name: 'Gratis',
      price: '$0',
      subtitle: 'Perfecto para empezar',
      limits: '3 proyectos · 50 puntos · 1 dispositivo',
      features: [
        'Mapeo básico de PCB',
        'Una conexión de instrumento',
        'Almacenamiento local',
      ],
      cta: 'Descargar Gratis',
    },
    pro: {
      badge: 'POPULAR',
      name: 'Pro',
      priceMonthly: '$15/mes',
      priceAnnual: '$13.75/mes',
      annualNote: 'facturado $165/año — ahorrás $15',
      subtitle: 'Para técnicos profesionales',
      features: [
        'Proyectos y puntos ilimitados',
        'Diagnóstico con IA',
        'Comparación con placa dorada',
        'Sincronización y respaldo cloud',
        'Exportación PDF/imagen',
        'Secuenciador de pruebas',
        '2 activaciones de dispositivo',
        'Soporte prioritario',
      ],
      cta: 'Obtener Pro →',
    },
  },

  faq: {
    title: 'Preguntas Frecuentes',
    items: [
      {
        question: '¿Funciona sin internet?',
        answer:
          '¡Sí! Todos los datos se guardan localmente en SQLite. La sincronización cloud es opcional y ocurre automáticamente cuando te conectas.',
      },
      {
        question: '¿Qué instrumentos son compatibles?',
        answer:
          'Cualquier instrumento SCPI via TCP/IP o Serial. Presets para Keysight, Rigol, Siglent, Owon, Fluke y Tektronix.',
      },
      {
        question: '¿Qué sistemas operativos soporta?',
        answer:
          'Windows está completamente soportado. Soporte para macOS y Linux está planificado.',
      },
      {
        question: '¿Qué formatos de boardview puedo cargar?',
        answer: 'Formatos BRD, BVR3, ASC, GenCAD, BDV, FZ y TVW.',
      },
      {
        question: '¿Puedo cancelar mi suscripción Pro?',
        answer:
          'Sí, en cualquier momento desde tu portal de cliente. Mantienes acceso Pro hasta el final de tu periodo de facturación.',
      },
      {
        question: '¿Mis datos están seguros?',
        answer:
          'Las claves API están encriptadas localmente. La sincronización cloud usa Supabase con Row Level Security — solo tú puedes acceder a tus proyectos.',
      },
    ],
  },

  footer: {
    copyright: '© 2026 Z Electrónica UY. Todos los derechos reservados.',
    support: 'Soporte',
  },

  seo: {
    title: 'BoardLab Pro — Diagnóstico Inteligente de Placas Electrónicas',
    description:
      'Mapea mediciones de PCB, conecta instrumentos SCPI, carga archivos boardview, y obtén diagnóstico con IA — todo en una app de escritorio.',
  },

  notFound: {
    title: 'Página no encontrada',
    message: 'La página que buscas no existe.',
    cta: 'Ir al inicio',
  },
} as const;
