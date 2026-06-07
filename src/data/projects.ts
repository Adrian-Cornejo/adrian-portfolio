export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  isPersonal: boolean;
  company?: string;
}

export const projects: Project[] = [
  {
    id: 'arrienda-facil',
    title: 'ArriendaFacil',
    description: 'Plataforma SaaS completa para gestión integral de propiedades en renta en México.',
    longDescription: `Aplicación SaaS multi-tenant para propietarios en México que centraliza la gestión de propiedades, inquilinos, contratos digitales, pagos y mantenimiento.
    El backend está construido con Spring Boot 3 y Java 17, con autenticación JWT, control de acceso por roles (RBAC), migraciones con Flyway, almacenamiento de imágenes en Cloudinary
    y notificaciones por SMS y WhatsApp vía Twilio y AWS SNS. El frontend en Angular 20 con PrimeNG y Tailwind CSS incluye dashboard analítico con Chart.js,
    flujo de autenticación completo y gestión de contratos y pagos en tiempo real.`,
    technologies: ['Angular 20', 'TypeScript', 'Spring Boot 3', 'Java 17', 'PostgreSQL', 'Supabase', 'PrimeNG', 'Tailwind CSS', 'Chart.js', 'Cloudinary', 'Twilio', 'AWS SNS'],
    image: '/images/arrienda-facil.png',
    liveUrl: 'https://arriendafacilmx.com',
    featured: true,
    isPersonal: true,
  },
  {
    id: 'arrienda-facil-landing',
    title: 'ArriendaFacil Landing',
    description: 'Landing page de alto rendimiento para la plataforma SaaS ArriendaFacil.',
    longDescription: `Landing page profesional con enfoque en conversión para ArriendaFacil, con secciones de hero, características, precios, testimonios, FAQ y formulario de contacto.
    Desarrollada con Astro 6 y React 19 bajo arquitectura de islas para máximo rendimiento estático, animaciones fluidas con Framer Motion,
    soporte de modo oscuro y diseño 100% responsivo. Desplegada en Cloudflare Pages con generación estática optimizada.`,
    technologies: ['Astro 6', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Cloudflare Pages'],
    image: '/images/arriendafacil-landing.png',
    liveUrl: 'https://info.arriendafacilmx.com',
    featured: true,
    isPersonal: true,
  },
  {
    id: 'postal-mx-api',
    title: 'Postal MX API',
    description: 'API REST del catálogo postal mexicano (SEPOMEX) con autenticación por API Key y portal de administración.',
    longDescription: `Servicio backend que expone el catálogo postal de México (SEPOMEX): estados, municipios, colonias y códigos postales.
    Construido con NestJS y PostgreSQL en Supabase, implementa autenticación por API Key con hashing seguro, límites de uso diario,
    rate limiting global y caché de 24 horas para optimizar consultas.
    Incluye documentación interactiva con Swagger en /docs, portal web de administración de API Keys y configuración de seguridad con Helmet y CORS.
    Diseñado como microservicio listo para integrarse con otros sistemas.`,
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Supabase', 'TypeORM', 'Swagger', 'Node.js'],
    image: '/images/postal-mx-api.png',
    liveUrl: 'https://postal.arriendafacilmx.com',
    featured: true,
    isPersonal: true,
  },
  {
    id: 'tracksof',
    title: 'TRACKSOF - Sistema de Telemetría',
    description: 'Rediseño completo de interfaz para sistema de gestión de flotas vehiculares.',
    longDescription: `Modernización completa de la interfaz de usuario para sistema de telemetría empresarial en QRSOF Software Quality & Research LLC. 
    Desarrollé componentes Angular reutilizables y colaboré en el backend con Play Framework. Incluye menú lateral responsivo, 
    panel de dispositivos GPS y sistema de configuración avanzada para mejorar significativamente la experiencia de usuario.`,
    technologies: ['Angular 18', 'TypeScript', 'Play Framework', 'Scala', 'PostgreSQL', 'TimescaleDB'],
    image: '/images/tracksof.png',
    liveUrl: 'https://info.tracksof.com',
    featured: true,
    isPersonal: false,
    company: 'Qrsof | Software web hosting & mail'
  },
  {
    id: 'simulascore',
    title: 'SimulaScore',
    description: 'Simulador educativo para exámenes estandarizados con análisis de datos en tiempo real.',
    longDescription: `Plataforma educativa completa que ayuda a estudiantes a prepararse para exámenes como MEJOREDU y Olimpiada del Conocimiento. 
    Incluye gestión de usuarios, progreso en tiempo real, análisis de datos con Power BI y aplicación móvil. El sistema procesa más de 500 estudiantes potenciales 
    con arquitectura MVC y genera informes automáticos para identificar áreas de mejora académica.`,
    technologies: ['Angular', 'TypeScript', 'Play Framework', 'Scala', 'MySQL', 'TailwindCSS', 'Power BI'],
    image: '/images/simulascore.png',
    featured: true,
    isPersonal: true
  },
  {
    id: 'simulascore-movil',
    title: 'SimulaScore Móvil',
    description: 'Aplicación Android nativa que complementa la versión web con simulaciones offline.',
    longDescription: `Aplicación diseñada para dispositivos Android que permite simulaciones sin conexión a Internet. 
    Desarrollada en Android Studio con Java, ofrece evaluaciones personalizadas, almacenamiento local de datos, 
    sincronización con servidores cuando está en línea y un diseño intuitivo elaborado en Figma. 
    Complementa perfectamente la experiencia web de SimulaScore.`,
    technologies: ['Android Studio', 'Java', 'PHP', 'MySQL', 'Figma', 'XML'],
    image: '/images/simulascore-movil.png',
    featured: true,
    isPersonal: true
  },
  {
    id: 'sistema-reconocimiento-violencia',
    title: 'Sistema de Reconocimiento de Violencia',
    description: 'Sistema de IA para detección automática de comportamientos violentos en tiempo real.',
    longDescription: `Sistema avanzado que utiliza visión por computadora y aprendizaje automático para detectar comportamientos violentos 
    en imágenes y videos en tiempo real. Implementa algoritmos de OpenCV y tecnologías de IA para análisis automático, 
    con sistema de alertas automáticas a usuarios y autoridades. Incluye mejora continua de precisión mediante machine learning.`,
    technologies: ['Python', 'OpenCV', 'OpenAI', 'TensorFlow', 'Machine Learning', 'Computer Vision'],
    image: '/images/sistema-violencia.png',
    featured: true,
    isPersonal: true
  },
  {
    id: 'punto-venta-vb',
    title: 'Sistema Punto de Venta',
    description: 'Sistema completo de ventas e inventarios para pequeños y medianos negocios.',
    longDescription: `Sistema de punto de venta desarrollado en Visual Basic orientado a PyMEs para gestión eficiente de ventas, 
    inventarios y generación de tickets. Permite registrar transacciones, administrar productos, calcular impuestos automáticamente 
    y generar reportes detallados sobre ventas diarias, semanales y mensuales. Solución sencilla y accesible para digitalizar 
    operaciones comerciales sin configuraciones técnicas complejas.`,
    technologies: ['Visual Basic', '.NET Framework', 'SQL Server', 'Crystal Reports'],
    image: '/images/punto-venta.png',
    featured: true,
    isPersonal: true
  },
];