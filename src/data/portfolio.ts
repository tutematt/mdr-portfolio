// src/data/portfolio.ts

export interface Translation {
  es: string;
  en: string;
}

export interface Profile {
  name: string;
  photo: string;
  role: Translation;
  tagline: Translation;
}

export interface Experience {
  title: Translation;
  company: string;
  period: Translation;
  description: Translation;
  achievements?: Translation[];
  technologies: string[];
}

export interface Project {
  name: Translation;
  description: Translation;
  features: Translation[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: Translation;
  icon: string;
  skills: Skill[];
}

export interface Contact {
  label: Translation;
  icon: string;
  value: string;
  url: string;
}

export interface PortfolioData {
  profile: Profile;
  about: Translation;
  experiences: Experience[];
  projects: Project[];
  skillCategories: SkillCategory[];
  contacts: Contact[];
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Matias David Rodoni",
    photo: "/me.jpeg",
    role: {
      es: "Ingeniero en Informatica Full Stack",
      en: "Full Stack Software Engineer "
    },
    tagline: {
      es: "",
      en: ""
    }
  },

  about: {
    es: `Hola! Soy Matias 👋🏻 Ingeniero en Informática con 7 años de trayectoria ascendente en el sector IT, evolucionando desde el desarrollo core hasta roles de Liderazgo Técnico y Consultoría. Especialista en diseñar e implementar soluciones de negocio escalables, con una visión integral que une el desarrollo Full Stack (JavaScript, Bases de Datos) con la estrategia empresarial (ERP/NetSuite).
          Cuento con sólida experiencia liderando la definición técnica de proyectos, transformando requerimientos operativos complejos en arquitecturas robustas. Mi enfoque se centra en la calidad del software, la optimización de procesos críticos y la capacidad de articular soluciones tecnológicas que impulsan el valor del negocio. Me gusta mantenerme actualizado con las últimas tecnologías y metodologías ágiles, siempre buscando la mejora en oportunidades tecnicas y la colaboración efectiva.`,
    en: `Hi! I'm Matias 👋🏻 Computer Engineer with 7 years of progressive experience in the IT sector, evolving from core development to Technical Leadership and Consulting roles. Specialist in designing and implementing scalable business solutions, with a comprehensive vision that combines Full Stack development (JavaScript, Databases) with business strategy (ERP/NetSuite).`
  },

  experiences: [
    {
      title: {
        es: "Ingeniero de Software Full-Stack Senior",
        en: "Full-Stack Software Engineer"
      },
      company: "Laboratorios Andrómaco S.A.",
      period: {
        es: "2022 - Presente",
        en: "2022 - Present"
      },
      description: {
        es: "Desarrollo integral y mantenimiento de aplicaciones web empresariales, gestionando desde el frontend hasta bases de datos relacionales para traducir requerimientos de negocio en soluciones técnicas estables.",
        en: "End-to-end development and maintenance of enterprise web applications, managing from frontend to relational databases to translate business requirements into stable technical solutions."
      },
      achievements: [
        {
          es: "Desarrollo y mantenimiento de aplicaciones web empresariales utilizadas en operaciones diarias del negocio.",
          en: "Develop and maintain enterprise web applications used in day-to-day business operations."
        },
        {
          es: "Colaboración con equipos internos para traducir requerimientos de negocio en soluciones técnicas.",
          en: "Collaborate with internal teams to translate business requirements into technical solutions."
        },
        {
          es: "Trabajo en frontend, backend y bases de datos relacionales, asegurando estabilidad y usabilidad en entornos de producción.",
          en: "Work end-to-end across front-end, back-end, and relational databases, ensuring stability and usability in production environments."
        },
        {
          es: "El stack incluye JavaScript, HTML, CSS, Bootstrap y bases de datos relacionales.",
          en: "Stack includes JavaScript, HTML, CSS, Bootstrap, and relational databases."
        }
      ],
      technologies: ["React", "Node.js", "Scrum", "Mobile Development", "SQL Server", "Java Script", "Java" ]
    },
    {
      title: {
        es: "Desarrollador NetSuite",
        en: "NetSuite Developer"
      },
      company: "Tekiio – Official NetSuite Partner",
      period: {
        es: "2021 - 2022",
        en: "2021 - 2022"
      },
      description: {
        es: "Adaptación del ERP NetSuite para diversos clientes, desarrollando scripts e integraciones personalizadas con JavaScript y que el ecosistema Oracle se ajustara a los flujos de trabajo específicos de cada empresa, incluyendo despliegue y soporte.",
        en: "Customization of the NetSuite ERP for various clients, developing scripts and integrations with JavaScript and ensuring the Oracle ecosystem aligns with specific workflows of each company, including deployment and support."
      },
      achievements: [
        {
          es: "Desarrollo de soluciones personalizadas para clientes de NetSuite.",
          en: "Developed and customized NetSuite ERP solutions for multiple clients."
        },
        {
          es: "Implementación de integraciones con sistemas externos utilizando SuiteTalk y Api REST.",
          en: "Built JavaScript-based scripts and integrations to adapt NetSuite to specific business workflows."
        },
        { es: "Participación en despliegues, pruebas y soporte en producción dentro de ecosistemas basados en Oracle.",
          en: "Participated in deployments, testing, and production support within Oracle-based ecosystems."
        }
      ],
      technologies: ["NetSuite", "JavaScript", "SuiteScript", "SuiteTalk", "REST API" ]
    },
    {
      title: {
        es: "Ingeniero de Software",
        en: "Software Engineer"
      },
      company: "ADV Technology SRL",
      period: {
        es: "2019 - 2021",
        en: "2019 - 2021"
      },
      description: {
        es: "Análisis y la propuesta de mejoras para sistemas existentes basadas en necesidades operativas reales. Diseño de soluciones utilizando tecnologías web y bases de datos, fortaleciendo la capacidad de análisis técnico y comunicación del equipo. Modificación de nuevas funcionalidades y al mantenimiento evolutivo de proyectos a largo plazo.",
        en: "Analysis and proposal of improvements for existing systems based on real operational needs. Solution design using web technologies and databases, strengthening the team's technical analysis and communication skills. Modification of new functionalities and evolutionary maintenance of long-term projects."
      },
      achievements: [
        {
          es: "Análisis de sistemas existentes y propuesta de soluciones técnicas basadas en bases de datos relacionales y tecnologías web.",
          en: "Proposed technical solutions based on relational databases and web technologies."
        },
        {
          es: "Implementación de integraciones con sistemas externos utilizando SuiteTalk y Api REST.",
          en: "Supported system improvements and adaptations based on real operational needs."
        },
        { es: "Participación en despliegues, pruebas y soporte en producción dentro de ecosistemas basados en Oracle.",
          en: "Strengthened skills in analysis, communication, and solution design."
        },
        {
          es: "Contribución al mantenimiento evolutivo de proyectos a largo plazo, asegurando estabilidad y mejoras continuas.",
          en: "Developed features using JavaScript and relational databases (Oracle, MSSQL)."
        },
        {
          es: "Soporte en diseño de bases de datos, consultas y mantenimiento del sistema.",
          en: "Supported database design, queries, and system maintenance."
        },
        { es: "Desarrollo de funcionalidades utilizando JavaScript y bases de datos relacionales (Oracle, MSSQL).",
          en: "Contributed to long-term projects, improving stability and functionality over time."
        },
      ],
      technologies: []
    }
  ],

  projects: [
    {
      name: {
        es: "Sistema experto para el pre-diagnóstico de cáncer de piel de tipo melanoma",
        en: "Expert System for Pre-Diagnosis of Melanoma Skin Cancer"
      },
      description: {
        es: "Se propone desarrollar un sistema experto que pueda brindar un primer diagnóstico (diagnóstico precoz o pre-diagnóstico) con el nivel de riesgo que tiene una persona de contraer un cáncer de piel de tipo melanoma en base a la información provista por el experto al momento de inspeccionar al paciente. Luego, en base al resultado dado, el experto puede confirmar o rechazar el diagnóstico arrojado por el sistema. En caso de que el diagnóstico no sea aceptado, que el experto pueda exponer su explicación de porqué no es concluyente. De esta manera supone una creación de un nuevo dataset volviendo al sistema mantenible en el tiempo.",
        en: "The project aims to develop an expert system that can provide an initial diagnosis (early diagnosis or pre-diagnosis) regarding a person's risk of developing melanoma skin cancer based on information provided by an expert during patient examination. Based on the result, the expert can confirm or reject the diagnosis provided by the system. If the diagnosis is not accepted, the expert can explain why it is inconclusive. This approach allows for the creation of a new dataset, making the system maintainable over time."
      },
      features: [
        {
          es: "Definir los criterios y características de la metodología de verificación ABCDE para los sistemas expertos basados en reglas y evaluar este sistema en casos de cáncer de piel de tipo melanoma con los datos de los pacientes proporcionados.",
          en: "Define the criteria and characteristics of the ABCDE verification methodology for rule-based expert systems and evaluate this system in melanoma skin cancer cases using patient data provided."
        },
        {
          es: "Verificar con el experto el resultado del sistema experto al realizar el diagnóstico preliminar para dar su confirmación o negación del resultado.",
          en: "Verify the expert's confirmation or denial of the expert system's preliminary diagnosis results."
        },
        {
          es: "Incorporar la explicación del experto en caso de que el diagnóstico no sea aceptado, para mejorar la precisión del sistema.",
          en: "Incorporate the expert's explanation in case the diagnosis is not accepted, to improve system accuracy."
        },
        {
          es: "Desarrollar un sistema mantenible que permita la creación de un nuevo dataset basado en las explicaciones del experto.",
          en: "Develop a maintainable system that allows for the creation of a new dataset based on expert explanations."
        }
      ],
      technologies: ["Java", "Data Analysis", "Expert Systems", "Healthcare IT", "Sprint Boot"],
      githubUrl: "https://github.com/tutematt/tesis_de_grado_sistema_experto_mdr"
    },
  ],

skillCategories: [
    {
      title: {
        es: "Desarrollo Frontend & Web",
        en: "Frontend & Web Development"
      },
      icon: "💻",
      skills: [
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "HTML5 / CSS3", level: 95 },
        { name: "Bootstrap", level: 85 },
        { name: "Responsive Design", level: 88 }
      ]
    },
    {
      title: {
        es: "Backend & Bases de Datos",
        en: "Backend & Databases"
      },
      icon: "🗄️",
      skills: [
        { name: "Oracle Database", level: 85 },
        { name: "Microsoft SQL Server", level: 85 },
        { name: "SQL / T-SQL", level: 90 },
        { name: "API Integrations", level: 88 }
      ]
    },
    {
      title: {
        es: "ERP & Ecosistema Enterprise",
        en: "ERP & Enterprise Ecosystem"
      },
      icon: "🏢",
      skills: [
        { name: "Oracle NetSuite", level: 90 },
        { name: "SuiteScript", level: 85 },
        { name: "Enterprise Deployments", level: 80 },
        { name: "System Stability", level: 85 }
      ]
    },
    {
      title: {
        es: "Liderazgo & Consultoría",
        en: "Leadership & Consulting"
      },
      icon: "🤝",
      skills: [
        { name: "Solution Architecture", level: 88 },
        { name: "Business Analysis", level: 90 },   
        { name: "Technical Support", level: 85 },
        { name: "Project Management", level: 80 }
      ]
    }
  ],

  contacts: [
    {
      label: { es: "Email", en: "Email" },
      icon: "📧",
      value: "matiasdavid.rodoni@email.com",
      url: "mailto:matiasdavid.rodoni@email.com"
    },
    {
      label: { es: "GitHub", en: "GitHub" },
      icon: "🧑🏻‍💻",
      value: "@tutematt",
      url: "https://github.com/tutematt"
    },
    {
      label: { es: "LinkedIn", en: "LinkedIn" },
      icon: "💼",
      value: "/in/matiasrodoni",
      url: "https://www.linkedin.com/in/matiasdrodoni"
    },
    {
      label: { es: "Twitter", en: "Twitter" },
      icon: "🐦",
      value: "@tuusuario",
      url: "https://twitter.com/tuusuario"
    }
  ]
};