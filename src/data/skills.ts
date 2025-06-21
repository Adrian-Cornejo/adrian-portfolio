export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
  icon: string;
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML5', level: 5, icon: 'html5', color: 'text-orange-600' },
      { name: 'Angular', level: 5, icon: 'angular', color: 'text-red-600' },
      { name: 'Astro', level: 4, icon: 'astro', color: 'text-blue-500' },
      { name: 'TypeScript', level: 5, icon: 'typescript', color: 'text-blue-600' },
      { name: 'JavaScript', level: 4, icon: 'javascript', color: 'text-yellow-500' },
      { name: 'TailwindCSS', level: 4, icon: 'tailwind', color: 'text-cyan-500' },
      { name: 'CSS3', level: 4, icon: 'css3', color: 'text-blue-500' },
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Play Framework', level: 4, icon: 'play', color: 'text-green-600' },
      { name: 'Scala', level: 4, icon: 'scala', color: 'text-red-500' },
      { name: 'Python', level: 3, icon: 'python', color: 'text-blue-500' },
      { name: 'PHP', level: 3, icon: 'php', color: 'text-purple-600' },
      { name: 'Laravel', level: 3, icon: 'laravel', color: 'text-purple-600' }
    ]
  },
  {
    name: 'Bases de Datos',
    skills: [
      { name: 'PostgreSQL', level: 4, icon: 'postgresql', color: 'text-blue-700' },
      { name: 'MySQL', level: 4, icon: 'mysql', color: 'text-orange-500' },
      { name: 'TimescaleDB', level: 3, icon: 'timescale', color: 'text-yellow-600' }
    ]
  },
  {
    name: 'Herramientas',
    skills: [
      { name: 'Docker', level: 4, icon: 'docker', color: 'text-blue-500' },
      { name: 'Git', level: 5, icon: 'git', color: 'text-orange-600' },
      { name: 'Power BI', level: 4, icon: 'powerbi', color: 'text-yellow-500' },
      { name: 'Android Studio', level: 4, icon: 'android', color: 'text-yellow-500' },
      { name: 'VS Code', level: 5, icon: 'vscode', color: 'text-blue-500' },
      { name: 'Postman', level: 4, icon: 'postman', color: 'text-orange-500' },
    ]
  }
];