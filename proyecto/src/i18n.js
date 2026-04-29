import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      navbar: {
        home: "Inicio",
        about: "Sobre mí",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
        switch: "EN",
      },
      hero: {
      title: "Portafolio Web",
      subtitle:
        "Bienvenido a mi portafolio. Aquí encontrarás información sobre mí, mis habilidades y mis proyectos desarrollados de forma individual y grupal.",
      roleLine1: "Desarrollador",
      roleLine2: "de Software",
      phrase: "¡Convierto tus sueños en productos!",
      projectsButton: "Ver proyectos",
      cvButton: "Descargar CV",
    },

     work: {
      title: "¿Cómo trabajo?",
      description:
        "Sigo un proceso claro y estructurado para transformar una idea en",
      description2:
        "una solución funcional, cuidando tanto la lógica del desarrollo como",
      description3:
        "la experiencia del usuario.",
      },
      about: {
      title: "Perfil Profesional",
      text:
        "Desarrollador Full Stack con enfoque en Back-End. Apasionado por crear interfaces intuitivas, accesibles y atractivas que mejoran la experiencia del usuario. Domino .NET, C# y bases de datos relacionales.",
      },
      skills: {
        title: "Habilidades",
      },
      projects: {
      title: "Galería de proyectos",
      subtitle:
        "Explora algunos de mis trabajos desarrollados a nivel individual y grupal, junto con las tecnologías aplicadas en cada solución.",
      technologies: "Tecnologías:",
      projectLabel: "Proyecto",
      items: {
        infinity: {
          desc: "Plataforma enfocada en inversión bursátil con interfaz y gestión de datos.",
        },
        dream: {
          desc: "Asistente de voz con IA orientado a adultos mayores.",
        },
        patrones: {
          desc: "Juego procedural aplicando patrones de diseño para una mejor arquitectura.",
        },
        pokemon: {
          desc: "Juego de batalla con lógica de combate y persistencia de datos.",
        },
      },
    },
      contact: {
        title: "Contacto",
        name: "Tu nombre",
        email: "Tu correo",
        message: "Escribe tu mensaje",
        send: "Enviar mensaje",
        sending: "Enviando mensaje...",
        success: "Mensaje enviado correctamente.",
        error: "No se pudo enviar. Revisa la configuración de EmailJS.",
      },

      curriculum: {
      title: "Currículum Profesional",
      description:
        "Mi experiencia se especializa en desarrollo de software, creación de soluciones tecnológicas enfocadas en resultados y experiencia del usuario. Aquí podrás visualizar mi trayectoria profesional, habilidades y proyectos que respaldan mi crecimiento en el área tecnológica.",
      summaryTitle: "Resumen Profesional",
      item1: "Desarrollador Full Stack con enfoque Back-End",
      item2: "Experiencia en .NET, C#, SQL Server y Angular",
      item3: "Integración de procesos y automatización operativa",
      item4: "Desarrollo de soluciones empresariales escalables",
      download: "Descargar CV",
      open: "Ver en nueva pestaña",
     },

     workSteps: {
      step1Title: "Descubrimiento y planificación",
      step1Text:
        "Analizo las necesidades, objetivos y alcance del proyecto para definir una ruta clara antes de iniciar el desarrollo.",
      step2Title: "Diseño y desarrollo",
      step2Text:
        "Creo soluciones atractivas y funcionales, manteniendo una comunicación constante para asegurar que el diseño refleje la visión del proyecto.",
      step3Title: "Pruebas y mejoras",
      step3Text:
        "Reviso la funcionalidad, experiencia de usuario y rendimiento para corregir detalles, validar resultados y optimizar la solución.",
      step4Title: "Entrega y seguimiento",
      step4Text:
        "Presento el resultado final, documento el funcionamiento y brindo recomendaciones para mantener o escalar el proyecto.",
    },
      footer: {
        text: "© 2026 Samuel Solano. Todos los derechos reservados.",
      },
    },
  },
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About Me",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        switch: "ES",
      },
      hero: {
      title: "Web Portfolio",
      subtitle:
        "Welcome to my portfolio. Here you will find information about me, my skills, and my individual and group projects.",
      roleLine1: "Software",
      roleLine2: "Developer",
      phrase: "I turn your dreams into products!",
      projectsButton: "View projects",
      cvButton: "Download CV",
      },
      work: {
      title: "How do I work?",
      description: "I follow a clear and structured process to transform an idea into",
      description2: "a functional solution, taking care of both development logic and user experience.",
      },

      about: {
      title: "Professional Profile",
      text:
        "Full Stack Developer with a Back-End focus. Passionate about creating intuitive, accessible, and attractive interfaces that improve the user experience. Skilled in .NET, C#, and relational databases.",
      },
      skills: {
        title: "Skills",
      },
      projects: {
      title: "Project Gallery",
      subtitle:
        "Explore some of my individual and group projects, along with the technologies applied in each solution.",
      technologies: "Technologies:",
      projectLabel: "Project",
      items: {
        infinity: {
          desc: "Platform focused on stock market investment with interface and data management.",
        },
        dream: {
          desc: "AI voice assistant designed for older adults.",
        },
        patrones: {
          desc: "Procedural game applying design patterns for better architecture.",
        },
        pokemon: {
          desc: "Battle game with combat logic and data persistence.",
        },
      },
    },

      contact: {
        title: "Contact",
        name: "Your name",
        email: "Your email",
        message: "Write your message",
        send: "Send message",
        sending: "Sending message...",
        success: "Message sent successfully.",
        error: "Could not send the message. Check your EmailJS configuration.",
      },
      curriculum: {
      title: "Professional Resume",
      description:
        "My experience focuses on software development, creating technology solutions focused on results and user experience. Here you can view my professional background, skills, and projects that support my growth in the technology field.",
      summaryTitle: "Professional Summary",
      item1: "Full Stack Developer with a Back-End focus",
      item2: "Experience in .NET, C#, SQL Server, and Angular",
      item3: "Process integration and operational automation",
      item4: "Development of scalable business solutions",
      download: "Download CV",
      open: "Open in new tab",
     },

     workSteps: {
      step1Title: "Discovery and planning",
      step1Text:
        "I analyze the needs, goals, and scope of the project to define a clear path before starting development.",
      step2Title: "Design and development",
      step2Text:
        "I create attractive and functional solutions while maintaining constant communication to ensure the design reflects the project vision.",
      step3Title: "Testing and improvements",
      step3Text:
        "I review functionality, user experience, and performance to fix details, validate results, and optimize the solution.",
      step4Title: "Delivery and follow-up",
      step4Text:
        "I present the final result, document how it works, and provide recommendations to maintain or scale the project.",
    },
      footer: {
        text: "© 2026 Samuel Solano. All rights reserved.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;