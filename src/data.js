// ─────────────────────────────────────────────────
//  data.js  —  Toda la info del portafolio aquí.
//  Edita este archivo para actualizar el contenido
//  sin tocar los componentes.
// ─────────────────────────────────────────────────

export const personal = {
  name: 'Daniel Orlando',
  lastName: 'Rodriguez Ramirez',
  role: 'Desarrollador Backend',
  tagline: 'Disponible para proyectos',
  bio: `Desarrollador Full Stack con experiencia en Python FastApi, Java Spring Boot, JavaScript, React, HTML5, CSS3, Bulma CSS, Tailwind CSS, MySQL, PostgreSQL, SQL Server , Selenium, PyTest, Trello, AzureDevOps, Jira.
Especializado en soluciones web escalables con enfoque en calidad,
trabajo en equipo y metodologías ágiles como Scrum y Kanban.`,
  stats: [
    { num: '6+', label: 'Proyectos' },
    { num: '9',  label: 'Tecnologías' },
    { num: '2+', label: 'Años formación' },
  ],
  social: {
    github:   'https://github.com/Danro19',
    linkedin: 'https://www.linkedin.com/in/daniel-rodriguez-895437320/',
    whatsapp: 'https://api.whatsapp.com/send?phone=573022945334',
    phone:    '+57 302 294 5334',
  },
}

export const skills = [
  { icon: '🐍', name: 'Python',      level: 'Intermedio',      pct: 80 },
  { icon: '🧪', name: 'Pytest',       level: 'Intermedio', pct: 65 },
  { icon: '⚡', name: 'FastAPI',      level: 'Intermedio', pct: 70 },
  { icon: '⚡', name: 'JavaScript',  level: 'Básico',      pct: 65 },
  { icon: '⚛️', name: 'React',        level: 'Básico',     pct: 65 },
  { icon: '☕', name: 'Java',        level: 'Intermedio',  pct: 70 },
  { icon: '🍃', name: 'Spring Boot',  level: 'Básico',     pct: 60 },
  { icon: '🤖', name: 'Selenium',     level: 'Básico',     pct: 60 },
  { icon: '🗄️', name: 'MySQL',       level: 'Intermedio',  pct: 75 },
  { icon: '🗄️', name: 'SQL Server',   level: 'Intermedio', pct: 70 },
  { icon: '🐘', name: 'PostgreSQL', level: 'Básico', pct: 60 },
  { icon: '🌐', name: 'HTML',        level: 'Intermedio',  pct: 85 },
  { icon: '🎨', name: 'CSS',         level: 'Intermedio',  pct: 85 },
  { icon: '💨', name: 'Tailwind CSS',level: 'Intermedio',  pct: 60 },
  { icon: '🔧', name: 'Git',         level: 'Intermedio',  pct: 65 },
  { icon: '🐙', name: 'GitHub',      level: 'Intermedio',  pct: 65 },
]

export const softSkills = [
  'Liderazgo',
  'Adaptabilidad',
  'Resiliencia',
  'Pensamiento Creativo',
  'Comunicación Asertiva',
  'Empatía',
  'Trabajo bajo presión',
  'Trabajo en equipo',
  'Gestión del tiempo',
  'Aprendizaje continuo',
]

export const projects = [
  {
    id: 1,
    emoji: '🏨',
    title: 'Hotel Carmen',
    description:
      'Sitio web completo para un hotel de lujo en Islas del Rosario. Diseño y backend funcional con experiencia de usuario refinada.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    tagColor: 'blue',
    url: 'https://github.com/Danro19/HOTEL-CARMEN',
  },
  {
    id: 2,
    emoji: '🎓',
    title: 'SISGESA',
    description:
      'Sistema de gestión de asistencia académica para ACME Education. Formación técnica y profesional automatizada.',
    tags: ['Python'],
    tagColor: 'purple',
    url: 'https://github.com/Danro19/Sistema-gestion-asistencia-academica',
  },
  {
    id: 3,
    emoji: '🌿',
    title: 'Los Ambientalistas',
    description:
      'Sistema de administración de parques naturales, especies, personal y visitantes para seguimiento de biodiversidad.',
    tags: ['MySQL'],
    tagColor: 'green',
    url: 'https://github.com/Danro19/Los_Ambientalistas',
  },
  {
    id: 4,
    emoji: '💍',
    title: 'Captura Emociones',
    description:
      'Landing page elegante para planificación de bodas con enfoque en la experiencia emocional del usuario.',
    tags: ['HTML', 'CSS'],
    tagColor: 'blue',
    url: 'https://github.com/Danro19/Captura-Emociones-PlanificadordeBodas',
  },
  {
  id: 5,
  emoji: '📦',
  title: 'Gestión de Productos',
  description:
    'Aplicación fullstack para gestión de productos y categorías. Backend con FastAPI y SQL Server, frontend en React. Desplegada en Azure App Service y Vercel con CI/CD vía GitHub Actions.',
  tags: ['FastAPI', 'React', 'SQL Server'],
  tagColor: 'purple',
  url: 'https://github.com/Danro19/Prueba_Tecnica',
},
]
