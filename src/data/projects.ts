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