const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
const techDots = document.querySelectorAll('.tech-dot');
const techTooltip = document.getElementById('tech-tooltip');
const projectButtons = document.querySelectorAll('[data-open]');
const modalOverlay = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const codeTyping = document.getElementById('code-typing');
const canvas = document.getElementById('background-canvas');

const sections = document.querySelectorAll('main section');

const aboutText = `<section class="about-me">\n    <h2>Sobre mí</h2>\n    <p>\n        Hola, soy <span class="highlight">Alejo Guerra</span>.\n        Tengo 18 años y actualmente estudio Informática.\n    </p>\n    <ul>\n        <li>\n            Me gusta crear cosas, resolver problemas y entender cómo funcionan los sistemas.\n        </li>\n        <li>\n            Me interesa trabajar en proyectos que tengan una utilidad real\n            y que representen un desafío.\n        </li>\n        <li>\n            Me gusta perfeccionar todos los aspectos,\n            ya sean visuales o lógicos.\n        </li>\n        <li>\n            Actualmente sigo formándome como desarrollador,\n            buscando ganar experiencia, aprender de otras personas\n            y participar en proyectos cada vez más grandes e interesantes.\n        </li>\n    </ul>\n</section>`;

const projectData = {
  'project-1': {
    title: 'NextRead',
    description: 'Plataforma de lectura con analítica y diseño dark moderno.',
    technologies: 'HTML, CSS, JavaScript',
    duration: '3 semanas',
    link: '#'
  },
  'project-2': {
    title: 'TuBuffet',
    description: 'Dashboard responsive para control de pedidos con estadísticas visuales.',
    technologies: 'React, CSS, Node.js',
    duration: '4 semanas',
    link: '#'
  },
  'project-3': {
    title: 'IPVision',
    description: 'Aplicación de supervisión y datos para redes con experiencia visual clara.',
    technologies: 'Java, SQL, UI',
    duration: '5 semanas',
    link: '#'
  }
};

function toggleMobileNav() {
  mobileNav.classList.toggle('active');
  menuToggle.classList.toggle('active');
  const isExpanded = mobileNav.classList.contains('active');
  menuToggle.setAttribute('aria-expanded', String(isExpanded));
}

function closeMobileNav() {
  mobileNav.classList.remove('active');
  menuToggle.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false');
}

function updateNavHighlight() {
  const scrollPosition = window.scrollY + window.innerHeight * 0.33;
  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.id;
    const links = document.querySelectorAll(`.nav-links a[href="#${id}"], .mobile-nav a[href="#${id}"]`);
    links.forEach((link) => {
      if (scrollPosition >= top && scrollPosition < bottom) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
}

function initSectionObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.fade-in-up').forEach((element) => observer.observe(element));
}

function generateHighlightedCode() {
  const codeLines = document.getElementById('code-lines');
  
  const htmlContent = [
    { indent: 0, html: '<span class=\"tag-bracket\">&lt;</span><span class=\"tag\">section</span> <span class=\"attr-name\">className</span><span class=\"tag-bracket\">=\"</span><span class=\"attr-value\">about-me</span><span class=\"tag-bracket\">\"&gt;</span>' },
    { indent: 1, html: '<span class=\"tag-bracket\">&lt;</span><span class=\"tag\">h2</span><span class=\"tag-bracket\">&gt;</span><span class=\"text-content\">Sobre mí</span><span class=\"tag-bracket\">&lt;/</span><span class=\"tag\">h2</span><span class=\"tag-bracket\">&gt;</span>' },
    { indent: 1, html: '<span class=\"tag-bracket\">&lt;</span><span class=\"tag\">p</span><span class=\"tag-bracket\">&gt;</span>' },
    { indent: 2, html: '<span class=\"text-content\">Hola, soy </span><span class=\"tag-bracket\">&lt;</span><span class=\"tag\">span</span> <span class=\"attr-name\">className</span><span class=\"tag-bracket\">=\"</span><span class=\"attr-value\">highlight</span><span class=\"tag-bracket\">\"&gt;</span><span class=\"highlight\">Alejo Guerra</span><span class=\"tag-bracket\">&lt;/</span><span class=\"tag\">span</span><span class=\"tag-bracket\">&gt;</span><span class=\"text-content\">.</span>' },
    { indent: 2, html: '<span class=\"text-content\">Tengo 18 años y actualmente estudio Informática.</span>' },
    { indent: 1, html: '<span class=\"tag-bracket\">&lt;/</span><span class=\"tag\">p</span><span class=\"tag-bracket\">&gt;</span>' },
    { indent: 1, html: '<span class=\"tag-bracket\">&lt;</span><span class=\"tag\">ul</span><span class=\"tag-bracket\">&gt;</span>' },
    { indent: 2, html: '<span class=\"tag-bracket\">&lt;</span><span class=\"tag\">li</span><span class=\"tag-bracket\">&gt;</span><span class=\"text-content\">Me gusta crear cosas, resolver problemas y</span>' },
    { indent: 3, html: '<span class=\"text-content\">entender cómo funcionan los sistemas.</span><span class=\"tag-bracket\">&lt;/</span><span class=\"tag\">li</span><span class=\"tag-bracket\">&gt;</span>' },
    { indent: 2, html: '<span class=\"tag-bracket\">&lt;</span><span class=\"tag\">li</span><span class=\"tag-bracket\">&gt;</span><span class=\"text-content\">Tengo interés en trabajar en proyectos que tengan</span>' },
    { indent: 3, html: '<span class=\"text-content\">utilidad real y que representen un desafío.</span><span class=\"tag-bracket\">&lt;/</span><span class=\"tag\">li</span><span class=\"tag-bracket\">&gt;</span>' },
    { indent: 1, html: '<span class=\"tag-bracket\">&lt;/</span><span class=\"tag\">ul</span><span class=\"tag-bracket\">&gt;</span>' },
    { indent: 0, html: '<span class=\"tag-bracket\">&lt;/</span><span class=\"tag\">section</span><span class=\"tag-bracket\">&gt;</span>' }
  ];

  const indentStr = '&nbsp;&nbsp;&nbsp;&nbsp;';
  
  const codeHTML = htmlContent.map((line, idx) => {
    const lineNum = idx + 1;
    const indent = indentStr.repeat(line.indent);
    return `<div class=\"code-line\"><span class=\"line-number\">${lineNum}</span><span class=\"line-content\">${indent}${line.html}</span></div>`;
  }).join('');

  codeLines.innerHTML = codeHTML;
}

function typeAboutCode() {
  generateHighlightedCode();
}

function showTechTooltip(event) {
  const dot = event.currentTarget;
  const title = dot.dataset.title;
  const level = dot.dataset.level;
  const project = dot.dataset.project;
  techTooltip.textContent = `${title} · Nivel ${level} · Usado en ${project}`;
  techTooltip.hidden = false;
  techTooltip.style.left = `${event.pageX + 16}px`;
  techTooltip.style.top = `${event.pageY + 16}px`;
}

function updateTechTooltip(event) {
  techTooltip.style.left = `${event.pageX + 16}px`;
  techTooltip.style.top = `${event.pageY + 16}px`;
}

function hideTechTooltip() {
  techTooltip.hidden = true;
}

function openProjectModal(projectKey) {
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.querySelector('.modal-description');
  const techText = document.querySelector('.modal-meta div:first-child');
  const durationText = document.querySelector('.modal-meta div:last-child');
  const project = projectData[projectKey];

  if (project) {
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    techText.textContent = `Tecnologías: ${project.technologies}`;
    durationText.textContent = `Duración: ${project.duration}`;
    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
  }
}

function closeModal() {
  modalOverlay.classList.remove('active');
  modalOverlay.setAttribute('aria-hidden', 'true');
}

function initProjectModals() {
  projectButtons.forEach((button) => {
    button.addEventListener('click', () => openProjectModal(button.dataset.open));
  });

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      closeModal();
    }
  });
}

const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactMessage = document.getElementById('contact-message');
const contactStatus = document.querySelector('.contact-status');

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function updateContactStatus(message, status = '') {
  if (!contactStatus) return;
  contactStatus.textContent = message;
  contactStatus.classList.toggle('success', status === 'success');
  contactStatus.classList.toggle('error', status === 'error');
}

async function handleContactSubmit(event) {
  event.preventDefault();
  if (!contactForm || !contactName || !contactEmail || !contactMessage) return;

  const name = contactName.value.trim();
  const email = contactEmail.value.trim();
  const message = contactMessage.value.trim();
  const submitButton = contactForm.querySelector('.contact-submit');

  if (!name || !email || !message) {
    updateContactStatus('Completa todos los campos para enviar el mensaje.', 'error');
    return;
  }

  if (!validateEmail(email)) {
    updateContactStatus('Por favor ingresa un email válido.', 'error');
    return;
  }

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
  }
  updateContactStatus('Enviando mensaje...', '');

  try {
    const response = await fetch('https://formsubmit.co/ajax/guerra.alejoet36@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      updateContactStatus('No se pudo enviar el mensaje. Intenta nuevamente.', 'error');
      return;
    }

    updateContactStatus('Mensaje enviado correctamente.', 'success');
    contactForm.reset();
  } catch (error) {
    updateContactStatus('No se pudo enviar el mensaje. Intenta nuevamente.', 'error');
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = 'Enviar mensaje';
    }
  }
}

function initContactForm() {
  if (!contactForm) return;
  contactForm.addEventListener('submit', handleContactSubmit);
}

function initCanvasBackground() {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const lines = [];
  const lineCount = 24;
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  const createLines = () => {
    lines.length = 0;
    for (let i = 0; i < lineCount; i += 1) {
      lines.push({
        x1: Math.random() * width,
        y1: Math.random() * height,
        x2: Math.random() * width,
        y2: Math.random() * height,
        baseAlpha: 0.08 + Math.random() * 0.15,
        phase: Math.random() * Math.PI * 2
      });
    }
  };

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    createLines();
  };

  window.addEventListener('resize', resize);

  let cursor = { x: width / 2, y: height / 2 };
  window.addEventListener('mousemove', (event) => {
    cursor = { x: event.clientX, y: event.clientY };
  });

  const draw = (time) => {
    ctx.clearRect(0, 0, width, height);
    lines.forEach((line) => {
      const distance = Math.min(
        Math.hypot((line.x1 + line.x2) / 2 - cursor.x, (line.y1 + line.y2) / 2 - cursor.y),
        260
      );
      const glow = 1 - distance / 260;
      const alpha = line.baseAlpha + glow * 0.18;
      ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(line.x1, line.y1);
      ctx.lineTo(line.x2, line.y2);
      ctx.stroke();

      const midX = (line.x1 + line.x2) / 2;
      const midY = (line.y1 + line.y2) / 2;
      ctx.fillStyle = `rgba(255,255,255,${alpha * 0.4})`;
      ctx.beginPath();
      ctx.arc(midX, midY, 1.4 + glow * 1.5, 0, Math.PI * 2);
      ctx.fill();
    });
    window.requestAnimationFrame(draw);
  };

  createLines();
  draw();
}

function initNavLinks() {
  navLinks.forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });
}

function init() {
  menuToggle?.addEventListener('click', toggleMobileNav);
  window.addEventListener('scroll', updateNavHighlight);
  updateNavHighlight();
  initSectionObserver();
  typeAboutCode();
  initNavLinks();
  initProjectModals();
  initContactForm();
  initCanvasBackground();

  techDots.forEach((dot) => {
    dot.addEventListener('mouseenter', showTechTooltip);
    dot.addEventListener('mousemove', updateTechTooltip);
    dot.addEventListener('mouseleave', hideTechTooltip);
  });
}

init();
