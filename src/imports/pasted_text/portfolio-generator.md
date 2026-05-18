Quiero que desarrolles un portafolio personal completo, moderno y profesional, basado en el diseño adjunto de Whimsical/Figma.
El sitio será completamente estático y se alojará en GitHub Pages (alejoguerraa.github.io), por lo tanto:

NO usar React, Next.js, Vue ni frameworks que necesiten compilación o servidor.
Usar únicamente:
HTML
CSS
JavaScript vanilla
Todo debe funcionar directamente abriendo index.html.
La estructura del código debe estar muy bien organizada, comentada y preparada para edición futura.
Todas las imágenes, textos, proyectos y certificados deben quedar fácilmente reemplazables/editables.
Crear carpetas organizadas:
/assets
/assets/images
/assets/icons
/styles
/scripts
ESTILO GENERAL
Diseño visual
Estética moderna, minimalista y tecnológica.
Color principal: negro profundo (#050505 o similar).
Todo lo demás en blanco/grises:
bordes
textos
botones
iconos
marcos
Evitar colores fuertes excepto pequeños detalles suaves.
Diseño elegante, limpio y profesional.
Mucho espacio visual y buena jerarquía.
Fondo animado

Quiero un fondo interactivo tipo “circuitos” o “conexiones de buses”.

Características:

Líneas finas gris claro distribuidas por el fondo.
Simulan conexiones electrónicas o rutas de datos.
Cuando el mouse pasa cerca:
las líneas se iluminan
pasan de gris a blanco
generan un efecto suave y tecnológico.
Movimiento extremadamente sutil.
No debe distraer ni afectar la legibilidad.
Responsive

TODO el sitio debe funcionar perfectamente en:

desktop
notebook
tablet
celular

Usar:

Flexbox
CSS Grid
media queries modernas

En móviles:

reorganizar layouts correctamente
evitar overflow
menú adaptable
Animaciones

Agregar:

transiciones suaves
hover effects modernos
fade-in al aparecer secciones
movimiento sutil
blur elegante
sombras suaves blancas/grises

NO hacer animaciones exageradas.

Tipografías

Usar fuentes modernas tipo:

Inter
Poppins
Outfit
Space Grotesk

Elegir la más elegante y profesional.

HEADER
Características

Header sticky/fixed:

queda pegado arriba al hacer scroll
fondo semi-transparente oscuro
blur suave tipo glassmorphism oscuro
borde inferior blanco/gris muy sutil
Navegación

Secciones:

Inicio
Acerca de mí
Tecnologías
Proyectos
Certificaciones
Contacto
Comportamiento
Al hacer scroll:
detectar sección activa
remarcar automáticamente el item actual del navbar
Scroll suave entre secciones.
Hover elegante.
Responsive:
en móvil usar menú hamburguesa animado.
SECCIÓN INICIO / HERO
Layout

Dos columnas.

IZQUIERDA

Texto:

Alejo Guerra (muy grande)
“Estudiante de computación & desarrollador full-stack”

Debajo:

icono GitHub → github.com/AlejoGuerraa
icono LinkedIn → linkedin.com/in/alejo-guerra-inf
icono Email → guerra.alejoet36@gmail.com

Agregar botón:

“Descargar CV”

IMPORTANTE:

dejar preparado el archivo descargable
usar placeholder temporal fácilmente reemplazable.
DERECHA

Crear un frame circular grande que contenga una imagen personal.

Características:

la imagen sobresale levemente del círculo por arriba
iluminación blanca suave alrededor
borde blanco fino
efecto flotación extremadamente sutil
dejar claramente marcado dónde reemplazar la imagen.
SECCIÓN “ACERCA DE MÍ”

Esta sección debe simular una ventana real de un IDE/editor de código.

Diseño

Crear:

barra superior estilo editor
botones tipo macOS/windows
fondo oscuro
sintaxis coloreada realista de HTML

Debe parecer un editor real.

Contenido

Mostrar este código EXACTAMENTE:

<section class="about-me">
    <h2>Sobre mí</h2>
    <p>
        Hola, soy <span class="highlight">Alejo Guerra</span>.
        Tengo 18 años y actualmente estudio Informática.
    </p>
    <ul>
        <li>
            Me gusta crear cosas, resolver problemas y entender cómo funcionan los sistemas.
        </li>
        <li>
            Me interesa trabajar en proyectos que tengan una utilidad real
            y que representen un desafío.
        </li>
        <li>
            Me gusta perfeccionar todos los aspectos,
            ya sean visuales o lógicos.
        </li>
        <li>
            Actualmente sigo formándome como desarrollador,
            buscando ganar experiencia, aprender de otras personas
            y participar en proyectos cada vez más grandes e interesantes.
        </li>
    </ul>
</section>
Animación

Agregar efecto:

typing animation
el código se escribe progresivamente
cursor parpadeante
velocidad elegante y profesional

Debe seguir funcionando bien en móviles.

SECCIÓN TECNOLOGÍAS
Concepto

Esta sección es una simulación de un sistema solar tecnológico.

Diseño
Núcleo central con símbolo:
</>
Alrededor:
órbitas concéntricas.

Cada órbita representa una categoría:

Lenguajes
Frontend
Backend

Los iconos flotan alrededor del núcleo.

Efectos

Los iconos:

orbitan lentamente
tienen movimiento suave tipo gravedad
flotación elegante
glow blanco/gris al hover
Hover

Cuando el usuario pasa el mouse sobre una tecnología:

se ilumina
aparece una mini tarjeta elegante con:
nombre
nivel de dominio
proyecto donde fue usada
Tecnologías
Backend
Express → 80% → usado en NextRead
MySQL → 80% → usado en TuBuffet
Node.js → 40% → usado en KnowBeat
Frontend
HTML → 85% → usado en NextRead
CSS → 60% → usado en NextRead
Figma → 70% → usado en KnowBeat
React → 80% → usado en TuBuffet
Lenguajes
C → 50% → no implementado
Java → 70% → usado en IPVision
JavaScript → 75% → usado en NextRead
Python → 75% → usado en Chat-bot
C# → 40% → no implementado
Otras tecnologías

Agregar una sección inferior:

Unity
Git
Canva
Paquete Office

Sin porcentaje ni tooltip.

SECCIÓN PROYECTOS
Diseño general

Grid responsive de cards grandes y modernas.

Cada card debe contener:

imagen portada
descripción resumida
botón “Display”
botón GitHub
iconos de tecnologías

IMPORTANTE:

dejar placeholders claros para reemplazar contenido.
Hover

Al pasar el mouse:

la card se ilumina
glow blanco/gris
pequeña elevación
transición suave
Modal al clickear

Cuando se clickea una card:

abrir modal grande centrado
fondo desenfocado
transición elegante
El modal debe contener:
carrusel automático/manual de imágenes
título
descripción completa
tecnologías utilizadas
participantes
duración
botón “Display”
botón GitHub

Todo editable fácilmente.

SECCIÓN CERTIFICACIONES
Diseño

Carrusel infinito horizontal.

Cards grandes que contienen:

imagen del certificado
nombre del certificado
Hover
glow blanco suave
iluminación elegante
Click

Abrir modal centrado con fondo blur.

Contenido del modal
título certificado
empresa emisora
duración
resumen del curso
tecnologías aprendidas
ID certificado (si existe)

Dejar placeholders editables.

SECCIÓN CONTACTO
Texto

Mostrar:

“Si te gustó mi trabajo y tenés alguna propuesta en mente, no dudes en escribirme.
La consulta no molesta y trato de responder lo antes posible.”

Formulario

Campos:

Nombre y apellido
Email
Mensaje grande

Diseño:

bordes blancos
fondo oscuro
focus elegante
animaciones suaves

IMPORTANTE:
El formulario NO necesita backend.
Prepararlo visualmente únicamente.

Redes

Debajo:

GitHub
LinkedIn
Email

Iconos grandes y modernos.

FOOTER
Diseño

Minimalista y elegante.

IZQUIERDA

Texto:
© 2026 Alejo Guerra.
Hecho con HTML, CSS y JavaScript.

DERECHA

Logo minimalista:
AG

IMPORTANTE
No agregar frases fantasmas/motivacionales.
No llenar con texto innecesario.
Sí podés agregar detalles visuales tecnológicos sutiles para equilibrar el espacio.
REQUISITOS TÉCNICOS IMPORTANTES
Código
Código limpio
Bien comentado
Semántico
Fácil de editar
Fácil de mantener
Archivos

Separar correctamente:

HTML
CSS
JS
Performance
Optimizar animaciones
Evitar consumo excesivo
Mantener buena fluidez
Accesibilidad
buen contraste
hover states
focus states
navegación clara
SEO básico

Agregar:

meta tags
title
description
favicon placeholder
IMPORTANTE
El resultado final debe verse premium y profesional.
Debe sentirse como el portfolio de un desarrollador moderno.
Priorizar muchísimo:
estética
suavidad
detalles
experiencia visual
orden
profesionalismo
NO generar contenido inventado innecesario.
NO usar librerías pesadas.
Si usás librerías visuales, que sean CDN simples y livianos.
Todo debe quedar listo para subir directamente a GitHub Pages.