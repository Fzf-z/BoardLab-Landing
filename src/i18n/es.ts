export const es = {
  nav: {
    features: 'Características',
    pricing: 'Precios',
    faq: 'FAQ',
    download: 'Descargar',
    switchLang: 'EN',
  },

  hero: {
    badge: '✨ v3.0 — Nueva UI y Flujo Mejorado',
    title: 'Registra, Mide y Documenta Reparaciones de PCB',
    titleHighlight: 'Documenta',
    subtitle:
      'Mapea puntos de medición, conecta instrumentos SCPI, anota reparaciones y carga archivos boardview — todo en una app de escritorio. Más diagnóstico asistido por IA opcional.',
    ctaPrimary: '⬇ Descargar Gratis',
    ctaSecondary: 'Ver Precios →',
    tab1: 'Mapeo de Puntos',
    tab2: 'Boardview',
  },

  features: {
    label: 'CARACTERÍSTICAS',
    title: 'Todo lo que necesitas para registrar reparaciones de PCB',
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
        title: 'Archivos Boardview',
        description:
          'Carga archivos en formato BRD. Busca redes y componentes, visualiza conexiones',
        isPro: false,
      },
      {
        title: 'Secuenciador de Pruebas',
        description:
          'Flujos de prueba secuenciales automatizados con autoconfiguración de instrumentos',
        isPro: true,
      },
      {
        title: 'Sincronización Cloud',
        description:
          'Primero offline con respaldo automático en la nube. Funciona sin internet',
        isPro: true,
      },
      {
        title: 'Diagnóstico con IA',
        description:
          'Detección de anomalías con Gemini, análisis contextual y chat interactivo',
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
        'Comparación con placa dorada',
        'Secuenciador de pruebas',
        'Sincronización y respaldo cloud',
        'Exportación PDF/imagen',
        'Diagnóstico asistido por IA',
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
        answer: 'Actualmente se soporta el formato BRD, con más formatos planificados para futuras versiones.',
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
    changelog: 'Changelog',
    terms: 'Términos de Servicio',
    privacy: 'Política de Privacidad',
    refund: 'Política de Reembolso',
  },

  seo: {
    title: 'BoardLab Pro — Registra, Mide y Documenta Reparaciones de PCB',
    description:
      'Mapea puntos de medición, conecta instrumentos SCPI, anota reparaciones y carga archivos boardview — todo en una app de escritorio.',
  },

  notFound: {
    title: 'Página no encontrada',
    message: 'La página que buscas no existe.',
    cta: 'Ir al inicio',
  },
} as const;
