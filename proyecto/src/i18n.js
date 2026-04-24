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
        projectsButton: "Ver proyectos",
        cvButton: "Descargar CV",
      },
      about: {
      title: "Sobre mí",
      text:
        "Desarrollador Full Stack con enfoque en Back-End. Apasionado por crear interfaces intuitivas, accesibles y atractivas que mejoran la experiencia del usuario. Domino .NET, C# y bases de datos relacionales.",
      },
      skills: {
        title: "Habilidades",
      },
      projects: {
      title: "Galería de proyectos",
      subtitle:
        "Trabajos individuales y grupales con descripción y tecnologías aplicadas.",
      all: "Todos",
      individual: "Individual",
      group: "Grupal",
      technologies: "Tecnologías:",
      items: {
        infinity: {
          desc: "Plataforma enfocada en inversión bursátil con interfaz y gestión de datos.",
          category: "Individual",
        },
        dream: {
          desc: "Asistente de voz con IA orientado a adultos mayores.",
          category: "Grupal",
        },
        patrones: {
          desc: "Juego procedural aplicando patrones de diseño para una mejor arquitectura.",
          category: "Grupal",
        },
        pokemon: {
          desc: "Juego de batalla con lógica de combate y persistencia de datos.",
          category: "Individual",
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
        projectsButton: "View projects",
        cvButton: "Download CV",
      },
      about: {
      title: "About Me",
      text:
        "Full Stack Developer with a Back-End focus. Passionate about creating intuitive, accessible, and attractive interfaces that improve the user experience. Skilled in .NET, C#, and relational databases.",
      },
      skills: {
        title: "Skills",
      },
      projects: {
      title: "Project Gallery",
      subtitle:
        "Individual and group projects with descriptions and applied technologies.",
      all: "All",
      individual: "Individual",
      group: "Group",
      technologies: "Technologies:",
      items: {
        infinity: {
          desc: "Platform focused on stock market investment with interface and data management.",
          category: "Individual",
        },
        dream: {
          desc: "AI voice assistant focused on older adults.",
          category: "Group",
        },
        patrones: {
          desc: "Procedural game applying design patterns for better architecture.",
          category: "Group",
        },
        pokemon: {
          desc: "Battle game with combat logic and data persistence.",
          category: "Individual",
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