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
}

export const projects: Project[] = [
  {
    id: 'simulascore',
    title: 'SimulaScore',
    description: 'Simulador educativo para exámenes estandarizados con análisis de datos en tiempo real.',
    longDescription: `Plataforma educativa completa que ayuda a estudiantes a prepararse para exámenes como MEJOREDU y Olimpiada del Conocimiento. 
    Incluye gestión de usuarios, progreso en tiempo real, análisis de datos con Power BI y aplicación móvil.`,
    technologies: ['Angular', 'TypeScript', 'Play Framework', 'Scala', 'MySQL', 'TailwindCSS', 'Power BI'],
    image: '/images/simulascore.png',
    githubUrl: 'https://github.com/adriangarcia',
    liveUrl: 'https://simulascore.com',
    featured: true
  },
  {
    id: 'tracksof',
    title: 'TRACKSOF - Sistema de Telemetría',
    description: 'Rediseño completo de interfaz para sistema de gestión de flotas vehiculares.',
    longDescription: `Modernización completa de la interfaz de usuario para sistema de telemetría empresarial. 
    Desarrollé componentes Angular reutilizables y colaboré en el backend con Play Framework.`,
    technologies: ['Angular 18', 'TypeScript', 'Play Framework', 'Scala', 'PostgreSQL', 'TimescaleDB'],
    image: '/images/tracksof.png',
    liveUrl: 'https://tracksof.com',
    featured: true
  }
];