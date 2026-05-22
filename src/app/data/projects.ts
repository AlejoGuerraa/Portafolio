export interface Participant {
  name: string
  github: string
}

export interface Project {
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  technologies: string[]
  participants: Participant[]
  duration: string
  github: string
  deploy?: string
  download?: string
  images: string[]
}

export const projects: Project[] = [
  {
    slug: 'aquanova',
    title: 'Aquanova',
    shortDescription: 'Página web para catálogo de domotización y construcción de piletas.',
    longDescription:
      'Página web hecha con React que muestra el servicio y catálogo de Aquanova, una marca que realiza presupuestos y construcciones de piletas, así como su refaccionamiento y domotización.',
    technologies: ['TypeScript', 'React', 'Figma', 'CSS'],
    participants: [
      { name: 'Alejo Guerra', github: 'https://github.com/AlejoGuerraa' },
      { name: 'Santino Martinez', github: 'https://github.com/Santino7537' },
    ],
    duration: 'Mayo - Junio (2026)',
    github: 'https://github.com/AlejoGuerraa/Aquanova',
    deploy: 'https://aquanova-three.vercel.app',
    images: ['/assets/images/Proyectos/Aquanova/Portada.jpeg'],
  },
  {
    slug: 'campuscore',
    title: 'CampuScore',
    shortDescription: 'Gestión académica con un sistema de conejos como recompensas.',
    longDescription:
      'CampuScore es una plataforma académica que permite administrar alumnos, materias y calificaciones, incluyendo rankings, estadísticas y alertas automáticas. Como elemento distintivo, el proyecto añade un sistema experimental de conejos virtuales y logros basado en el desempeño de cada estudiante.',
    technologies: ['React', 'CSS', 'MySQL', 'Express', 'Sequelize', 'JavaScript'],
    participants: [{ name: 'Alejo Guerra', github: 'https://github.com/AlejoGuerraa' }],
    duration: 'Octubre - Diciembre (2025)',
    github: 'https://github.com/AlejoGuerraa/CampuScore',
    deploy: 'https://campuscore-gilt.vercel.app/',
    images: ['/assets/images/Proyectos/CampuScore/Portada.png'],
  },
  {
    slug: 'chatbot',
    title: 'Chatbot',
    shortDescription:
      'Asistente virtual interactivo para explorar interfaces conversacionales de aprendizaje.',
    longDescription:
      'Chatbot web diseñado para responder de manera interactiva a distintos mensajes del usuario. Fue desarrollado con fines educativos dentro de Talento Tech, priorizando una estructura simple, clara y fácil de desplegar para explorar el funcionamiento de asistentes virtuales.',
    technologies: ['Python'],
    participants: [{ name: 'Alejo Guerra', github: 'https://github.com/AlejoGuerraa' }],
    duration: 'Marzo - Julio (2025)',
    github: 'https://github.com/AlejoGuerraa/Chat-bot',
    images: ['/assets/images/Proyectos/Chatbot/Portada.png'],
  },
  {
    slug: 'ipvision',
    title: 'IPVision',
    shortDescription:
      'Scanner de IPs y análisis de conexiones para monitoreo de redes y exportación de resultados.',
    longDescription:
      'Proyecto orientado al monitoreo y análisis de redes, combinando un scanner de IPs con un módulo similar a Netstat para visualizar conexiones activas, puertos, protocolos y procesos asociados. Incluye filtros, estadísticas y exportación de resultados.',
    technologies: ['Java'],
    participants: [{ name: 'Alejo Guerra', github: 'https://github.com/AlejoGuerraa' }],
    duration: 'Julio - Agosto (2025)',
    github: 'https://github.com/AlejoGuerraa/IPVision',
    download: '/assets/ejecutables/IPVision.jar',
    images: [
      '/assets/images/Proyectos/IPVision/Portada.png',
      '/assets/images/Proyectos/IPVision/Inicio 1.JPG',
      '/assets/images/Proyectos/IPVision/Resultados 1.JPG',
    ],
  },
  {
    slug: 'knowbeat',
    title: 'KnowBeat',
    shortDescription:
      'Plataforma social musical con clases, ejercicios y comunidad de aprendizaje.',
    longDescription:
      'Sitio web educativo y social enfocado en la enseñanza musical, permitiendo a los usuarios aprender teoría y práctica mediante clases guiadas, ejercicios personalizados y seguimiento de progreso. Además, incorpora funciones de red social como publicaciones, mensajería, grupos y sistema de interacción entre usuarios para fomentar el aprendizaje colaborativo.',
    technologies: ['React', 'MongoDB', 'MySQL', 'JavaScript', 'Express', 'Figma'],
    participants: [
      { name: 'Alejo Guerra', github: 'https://github.com/AlejoGuerraa' },
      { name: 'Renata Gallucci', github: 'https://github.com/Renaaa189' },
      { name: 'Santino Martinez', github: 'https://github.com/Santino7537' },
      { name: 'Esteban Gonzalez', github: 'https://github.com/EstebanGonzalez20' },
    ],
    duration: 'Abril - En proceso (2026)',
    github: 'https://github.com/Santino7537/Knowbeat',
    images: ['/assets/images/Proyectos/KnowBeat/Portada.png'],
  },
  {
    slug: 'nextread',
    title: 'NextRead',
    shortDescription:
      'Red social para lectores con recomendaciones, reseñas y comunidad activa.',
    longDescription:
      'Red social enfocada en la lectura, donde los usuarios pueden explorar libros, crear reseñas, organizar listas personalizadas y seguir a otros lectores. La plataforma incorpora notificaciones en tiempo real, perfiles personalizables y elementos de gamificación para generar una experiencia más dinámica e interactiva alrededor de los libros.',
    technologies: ['CSS', 'React', 'JavaScript', 'MySQL', 'Node.js', 'Express'],
    participants: [
      { name: 'Alejo Guerra', github: 'https://github.com/AlejoGuerraa' },
      { name: 'Renata Gallucci', github: 'https://github.com/Renaaa189' },
      { name: 'Carolina Mendez', github: 'https://github.com/caroMendezz' },
      { name: 'Sofia Power', github: 'https://github.com/Sofipow-007' },
      { name: 'Agustin Rivera', github: 'https://github.com/AgustinR55' },
    ],
    duration: 'Julio - Noviembre (2026)',
    github: 'https://github.com/AlejoGuerraa/nextRead',
    images: ['/assets/images/Proyectos/NextRead/Portada.png'],
  },
  {
    slug: 'tubuffet',
    title: 'TuBuffet',
    shortDescription:
      'Aplicación escolar para pedidos anticipados, reduciendo filas y mejorando la gestión.',
    longDescription:
      'Esta propuesta busca mejorar la organización de los comercios gastronómicos escolares mediante una plataforma de pedidos digitales. El sistema permite a los usuarios realizar compras desde el celular, mientras que padres y administradores pueden controlar gastos, pedidos, stock y ventas en tiempo real.',
    technologies: ['React', 'React Native', 'SQL', 'JavaScript', 'Figma', 'Express'],
    participants: [
      { name: 'Alejo Guerra', github: 'https://github.com/AlejoGuerraa' },
      { name: 'Renata Gallucci', github: 'https://github.com/Renaaa189' },
    ],
    duration: 'Abril - En proceso (2026)',
    github: 'https://github.com/Renaaa189/TuBuffet',
    images: ['/assets/images/Proyectos/TuBuffet/Portada.png'],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
