export type Certification = {
  slug: string
  title: string
  company: string
  description: string
  duration: string
  technologies: string[]
  id?: string
  image: string
}

export const certifications: Certification[] = [
  {
    slug: 'desarrollo-web-1',
    title: 'Desarrollo web 1',
    company: 'Ministerio de educación de Buenos Aires',
    description:
      'Fundamentos de HTML y CSS aplicados al desarrollo de una landing page estilo e-commerce con diseño visual.',
    duration: '40 horas',
    technologies: ['HTML', 'CSS'],
    image: '/assets/images/certificados/Diploma Alejo Guerra - Desarrollo web.jpg',
  },
  {
    slug: 'desarrollo-web-2',
    title: 'Desarrollo web 2',
    company: 'Ministerio de educación de Buenos Aires',
    description:
      'Implementación de una interfaz de e-commerce utilizando HTML, CSS y JavaScript, incorporando estructura semántica, estilos responsive y funcionalidades dinámicas del lado del cliente.',
    duration: '40 horas',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    image: '/assets/images/certificados/Diploma Alejo Guerra - Desarrollo web 2.jpg',
  },
  {
    slug: 'videojuegos-unity-3d',
    title: 'Desarrollo de videojuegos 3D con Unity',
    company: 'Ministerio de educación de Buenos Aires',
    description:
      'Desarrollo de videojuegos básicos en Unity 3D utilizando C#, trabajando con scripting, físicas, prefabs, colisiones, cámaras, interfaces y construcción de escenas interactivas.',
    duration: '40 horas',
    technologies: ['Unity'],
    image: '/assets/images/certificados/Diploma Alejo Guerra - Unity 3D.jpg',
  },
  {
    slug: 'videojuegos-unity-2d',
    title: 'Desarrollo de videojuegos 2D con Unity',
    company: 'Ministerio de educación de Buenos Aires',
    description:
      'Curso de desarrollo de videojuegos 2D con Unity y C#, enfocado en la creación de un clon de Flappy Bird utilizando físicas, GameObjects, scripts y sistemas básicos de juego.',
    duration: '24 horas',
    technologies: ['Unity'],
    image: '/assets/images/certificados/Diploma Alejo Guerra - Unity 2D.jpg',
  },
  {
    slug: 'ia-python',
    title: 'Inteligencia Artificial con Python',
    company: 'Ministerio de educación de Buenos Aires',
    description:
      'Desarrollo de un chatbot de Inteligencia Artificial con Python, Streamlit y APIs de modelos de lenguaje, aplicando lógica de programación, gestión de memoria y diseño de interfaces interactivas.',
    duration: '40 horas',
    technologies: ['Python', 'Streamlit', 'Git', 'GitHub'],
    image: '/assets/images/certificados/Diploma Alejo Guerra - Python con IA.jpg',
  },
  {
    slug: 'ux-ui',
    title: 'Diseño UX/UI',
    company: 'Ministerio de educación de Buenos Aires',
    description:
      'Diseño de interfaces y experiencia de usuario con Figma y Canva, trabajando en prototipado, organización visual y diseño centrado en el usuario.',
    duration: '40 horas',
    technologies: ['Figma', 'Canva'],
    image: '/assets/images/certificados/Diploma Alejo Guerra - UX-UI.jpg',
  },
  {
    slug: 'master-ai-gemini',
    title: 'Master AI with Gemini',
    company: 'Santander Open Academy',
    description:
      'Introducción práctica a Inteligencia Artificial generativa, prompt engineering y uso de asistentes IA, aplicando técnicas de interacción eficiente, automatización y principios de IA responsable.',
    duration: '2 horas',
    technologies: ['Gemini'],
    id: 'OA-2026-0408002454340',
    image: '/assets/images/certificados/Diploma Alejo Guerra - Gemini.jpg',
  },
  {
    slug: 'computacion-cuantica',
    title: 'La sexta revolución - Computación cuántica',
    company: 'Polis XXI',
    description:
      'Certificación de participación en una charla sobre computación cuántica presentada por Oscar Mezzano, explorando fundamentos teóricos, potencial tecnológico y aplicaciones futuras de la computación cuántica.',
    duration: '2 horas',
    technologies: [],
    image: '/assets/images/certificados/Diploma Alejo Guerra - Computación Cuántica.jpg',
  },
]
