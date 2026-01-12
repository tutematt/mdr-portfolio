"use client"

export const languages = {
  es: "Español",
  en: "English",
}

export const defaultLang = "es"

export const translations = {
  es: {
    // Navigation
    "nav.about": "about",
    "nav.experience": "experience",
    "nav.projects": "projects",
    "nav.skills": "skills",
    "nav.contact": "contact",
    "nav.quickAccess": "Accesos rápidos:",

    // Header
    "header.name": "Tu Nombre Completo",
    "header.role": "Ingeniero Informático | Full Stack Developer + PM",
    "header.tagline": "7 años construyendo soluciones digitales",

    // Terminal
    "terminal.welcome": "Bienvenido al Portfolio Terminal",
    "terminal.helpHint": 'Escribe "help" para ver los comandos disponibles',
    "terminal.prompt": "usuario@portfolio:~$",
    "terminal.placeholder": "Escribe un comando...",
    "terminal.commandNotFound": 'Comando no reconocido: "{cmd}". Escribe "help" para ver los comandos disponibles.',

    // Commands
    "cmd.help": `Comandos disponibles:
  about       - Información sobre mí
  experience  - Experiencia profesional
  projects    - Proyectos destacados
  skills      - Habilidades técnicas
  contact     - Información de contacto
  clear       - Limpiar terminal
  help        - Mostrar esta ayuda`,

    "cmd.about": `> Ingeniero Informático | Full Stack Developer + PM
> 7 años combinando desarrollo de software y gestión de proyectos
> Arquitecturas escalables + Liderazgo de equipos técnicos
> Scroll abajo para ver más detalles...`,

    "cmd.experience": `> Experiencia Profesional (Resumen)
─────────────────────────────────────
[2021-Hoy] Tech Lead / PM → React, Node.js, AWS
[2019-2021] Sr Full Stack Dev → Vue.js, Python, Docker  
[2017-2019] Full Stack Dev → Angular, Java, MySQL
  
📜 Scroll para ver detalles completos...`,

    "cmd.projects": `> Proyectos Destacados (Resumen)
─────────────────────────────────────
🚀 E-commerce Platform → +100k usuarios
📋 Task Management System → Equipos distribuidos
💼 Más proyectos en la sección de abajo...`,

    "cmd.skills": `> Stack Tecnológico
─────────────────────────────────────
Frontend: React, Vue, TypeScript, Astro
Backend: Node.js, Python, Java, GraphQL
DevOps: Docker, AWS, CI/CD, Kubernetes
PM: Scrum, Agile, Jira, Leadership`,

    "cmd.contact": `> Información de Contacto
─────────────────────────────────────
📧 tu@email.com
🐙 github.com/tuusuario
💼 linkedin.com/in/tuusuario
🐦 twitter.com/tuusuario`,

    // About Section
    "about.title": "about",
    "about.whoAmI": "¿Quién soy?",
    "about.intro":
      "Soy un Ingeniero Informático con 7 años de experiencia en la industria del software, donde he combinado mi pasión por el desarrollo con la gestión de proyectos y liderazgo de equipos.",
    "about.journey":
      "Mi trayectoria me ha permitido trabajar en todos los aspectos del ciclo de vida del desarrollo de software, desde la concepción de ideas hasta la implementación y mantenimiento de soluciones en producción.",
    "about.approach": "Mi Enfoque",
    "about.approachText":
      "Me especializo en crear arquitecturas escalables y mantenibles, siempre pensando en el largo plazo. Creo firmemente en escribir código limpio, documentado y probado.",
    "about.asDeveloper": "Como Desarrollador",
    "about.developerText":
      "Busco soluciones elegantes y eficientes, priorizando la experiencia del usuario y el rendimiento.",
    "about.asPM": "Como PM",
    "about.pmText": "Facilito la comunicación entre equipos, removiendo obstáculos y asegurando entregas de valor.",
    "about.values": "Valores",
    "about.value1": "Aprendizaje continuo: La tecnología evoluciona constantemente, y yo también.",
    "about.value2": "Colaboración: Los mejores productos se construyen en equipo.",
    "about.value3": "Calidad sobre cantidad: Prefiero entregar menos funcionalidades pero bien hechas.",

    // Contact Section
    "contact.intro": "¿Tienes un proyecto en mente o simplemente quieres conectar? Estaré encantado de escucharte.",

    // Footer
    "footer.madeWith": "Made with",
    "footer.and": "and",
    "footer.rights": "© 2026 - Todos los derechos reservados",
  },
  en: {
    // Navigation
    "nav.about": "about",
    "nav.experience": "experience",
    "nav.projects": "projects",
    "nav.skills": "skills",
    "nav.contact": "contact",
    "nav.quickAccess": "Quick access:",

    // Header
    "header.name": "Your Full Name",
    "header.role": "Computer Engineer | Full Stack Developer + PM",
    "header.tagline": "7 years building digital solutions",

    // Terminal
    "terminal.welcome": "Welcome to Portfolio Terminal",
    "terminal.helpHint": 'Type "help" to see available commands',
    "terminal.prompt": "user@portfolio:~$",
    "terminal.placeholder": "Type a command...",
    "terminal.commandNotFound": 'Command not recognized: "{cmd}". Type "help" to see available commands.',

    // Commands
    "cmd.help": `Available commands:
  about       - Information about me
  experience  - Professional experience
  projects    - Featured projects
  skills      - Technical skills
  contact     - Contact information
  clear       - Clear terminal
  help        - Show this help`,

    "cmd.about": `> Computer Engineer | Full Stack Developer + PM
> 7 years combining software development and project management
> Scalable architectures + Technical team leadership
> Scroll down for more details...`,

    "cmd.experience": `> Professional Experience (Summary)
─────────────────────────────────────
[2021-Now] Tech Lead / PM → React, Node.js, AWS
[2019-2021] Sr Full Stack Dev → Vue.js, Python, Docker  
[2017-2019] Full Stack Dev → Angular, Java, MySQL
  
📜 Scroll for full details...`,

    "cmd.projects": `> Featured Projects (Summary)
─────────────────────────────────────
🚀 E-commerce Platform → +100k users
📋 Task Management System → Distributed teams
💼 More projects in section below...`,

    "cmd.skills": `> Technology Stack
─────────────────────────────────────
Frontend: React, Vue, TypeScript, Astro
Backend: Node.js, Python, Java, GraphQL
DevOps: Docker, AWS, CI/CD, Kubernetes
PM: Scrum, Agile, Jira, Leadership`,

    "cmd.contact": `> Contact Information
─────────────────────────────────────
📧 your@email.com
🐙 github.com/yourusername
💼 linkedin.com/in/yourusername
🐦 twitter.com/yourusername`,

    // About Section
    "about.title": "about",
    "about.whoAmI": "Who am I?",
    "about.intro":
      "I'm a Computer Engineer with 7 years of experience in the software industry, where I've combined my passion for development with project management and team leadership.",
    "about.journey":
      "My journey has allowed me to work on all aspects of the software development lifecycle, from idea conception to implementation and maintenance of production solutions.",
    "about.approach": "My Approach",
    "about.approachText":
      "I specialize in creating scalable and maintainable architectures, always thinking long-term. I firmly believe in writing clean, documented, and tested code.",
    "about.asDeveloper": "As a Developer",
    "about.developerText": "I seek elegant and efficient solutions, prioritizing user experience and performance.",
    "about.asPM": "As PM",
    "about.pmText": "I facilitate communication between teams, removing obstacles and ensuring value delivery.",
    "about.values": "Values",
    "about.value1": "Continuous learning: Technology constantly evolves, and so do I.",
    "about.value2": "Collaboration: The best products are built as a team.",
    "about.value3": "Quality over quantity: I prefer to deliver fewer features but done well.",

    // Contact Section
    "contact.intro": "Do you have a project in mind or simply want to connect? I'd be happy to hear from you.",

    // Footer
    "footer.madeWith": "Made with",
    "footer.and": "and",
    "footer.rights": "© 2026 - All rights reserved",
  },
}

export function useTranslations(lang: keyof typeof translations) {
  return function t(key: keyof (typeof translations)["es"]) {
    return translations[lang][key] || key
  }
}
