const translations = {
  es: {
    nav: { home: "Inicio", skills: "Skills", projects: "Proyectos", experience: "Experiencia", contact: "Contacto" },
    hero: {
      greeting: "Hola, soy",
      name: "Jesus Torres",
      title: "Backend Java + Spring Boot",
      description:
        "Construyo sistemas backend robustos, escalables y seguros con Java y el ecosistema Spring, desde APIs REST hasta arquitectura de microservicios.",
      viewWork: "Ver proyectos",
      contactMe: "Contactar",
      panelTitle: "Stack principal",
      statYears: "Anos en desarrollo backend",
      statApis: "APIs y servicios entregados",
      statUptime: "Objetivo de disponibilidad",
      stack: [
        "Java 21",
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "Microservices",
        "PostgreSQL",
        "Docker",
        "Kubernetes"
      ]
    },
    skills: {
      title: "Habilidades tecnicas",
      items: [
        { title: "Arquitectura Backend", description: "Diseno de servicios desacoplados, APIs REST y sistemas orientados a dominio." },
        { title: "Spring Ecosystem", description: "Spring Boot, Security, Data, Validation, Batch y Cloud en entornos productivos." },
        { title: "Datos y Persistencia", description: "Modelado SQL, optimizacion de consultas, migraciones y transaccionalidad." },
        { title: "Calidad y Testing", description: "JUnit, Mockito, tests de integracion y practicas para mantener sistemas confiables." },
        { title: "DevOps para Backend", description: "Docker, CI/CD y despliegues estables con observabilidad y control de errores." },
        { title: "Seguridad", description: "JWT, OAuth2, RBAC, hardening y buenas practicas para proteger APIs." }
      ]
    },
    projects: {
      title: "Proyectos destacados",
      items: [
        {
          title: "E-commerce API",
          description:
            "Plataforma de comercio con catalogo, inventario, ordenes y pagos; arquitectura lista para escalar por modulos.",
          tech: ["Java", "Spring Boot", "MySQL", "Stripe", "Redis"]
        },
        {
          title: "Identity & Access Service",
          description:
            "Servicio de autenticacion/autorizacion con JWT, refresh tokens, roles y auditoria para ecosistemas multi-app.",
          tech: ["Spring Security", "JWT", "PostgreSQL", "OAuth2"]
        },
        {
          title: "Microservices Platform",
          description:
            "Servicios independientes con discovery, API gateway, configuracion centralizada y resiliencia en fallos.",
          tech: ["Spring Cloud", "Eureka", "Docker", "Kubernetes", "RabbitMQ"]
        },
        {
          title: "Batch Processing Engine",
          description:
            "Pipeline nocturno para procesamiento masivo de datos con validacion, trazabilidad y alertas operativas.",
          tech: ["Spring Batch", "Java 17", "Oracle", "Scheduler"]
        }
      ]
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          role: "Software Engineer",
          company: "EPAM Anywhere",
          period: "Mayo 2022 - Actualidad",
          description:
            "Soporte y actualizacion de aplicaciones Dropwizard, migracion de Java 6 a Java 17, DevOps con Jenkins y Spinnaker, Docker y AWS RDS."
        },
        {
          role: "Senior Back-End Developer",
          company: "Global66",
          period: "Julio 2021 - Mayo 2022",
          description:
            "Desarrollo del core bancario con funcionalidades transaccionales, migracion de monolito a microservicios, reportes con Jasper Reports y AWS Lambda."
        },
        {
          role: "Software Developer Senior",
          company: "Imagemaker",
          period: "Enero 2021 - Mayo 2021",
          description:
            "Soporte de microservicios distribuidos para banca chilena con Spring Boot, APIs REST, Docker y DevOps con Jenkins."
        },
        {
          role: "Application Development Analyst",
          company: "Accenture",
          period: "Octubre 2019 - Enero 2021",
          description:
            "Desarrollo de middleware con Message Broker en tecnologias IBM, implementacion de DevOps y CI/CD, refactorizacion de codigo de Java 6 a Java 8."
        },
        {
          role: "Application Development Associate",
          company: "Accenture",
          period: "Octubre 2018 - Octubre 2019",
          description:
            "Desarrollo de APIs RESTful con TDD, AWS y Docker, implementacion de DevOps y Web Services SOAP."
        },
        {
          role: "Java Developer Junior",
          company: "ADA SA",
          period: "Diciembre 2017 - Octubre 2018",
          description:
            "Desarrollo Full Stack con JSP (Java EE), Primefaces y Oracle Database, introduccion de CI/CD y TDD al equipo."
        }
      ]
    },
    contact: {
      title: "Hablemos",
      subtitle:
        "Estoy abierto a oportunidades remotas o hibridas para backend Java/Spring Boot y proyectos de arquitectura de APIs.",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo",
      emailPlaceholder: "tu-correo@dominio.com",
      subjectLabel: "Asunto",
      subjectPlaceholder: "Necesito soporte backend",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuentame sobre tu proyecto...",
      sendButton: "Enviar mensaje",
      successTitle: "Mensaje enviado. Te respondere pronto.",
      errorTitle: "No se pudo enviar el mensaje. Intenta de nuevo."
    },
    footer: {
      designedBy: "Disenado y construido por Jesus Torres",
      rights: "Todos los derechos reservados."
    }
  },
  en: {
    nav: { home: "Home", skills: "Skills", projects: "Projects", experience: "Experience", contact: "Contact" },
    hero: {
      greeting: "Hi, I am",
      name: "Jesus Torres",
      title: "Java + Spring Boot Backend Developer",
      description:
        "I build robust, scalable and secure backend systems using Java and the Spring ecosystem, from REST APIs to microservices architecture.",
      viewWork: "View projects",
      contactMe: "Contact me",
      panelTitle: "Core stack",
      statYears: "Years in backend development",
      statApis: "APIs and services delivered",
      statUptime: "Availability target",
      stack: [
        "Java 21",
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "Microservices",
        "PostgreSQL",
        "Docker",
        "Kubernetes"
      ]
    },
    skills: {
      title: "Technical skills",
      items: [
        { title: "Backend Architecture", description: "Design of decoupled services, REST APIs and domain-oriented systems." },
        { title: "Spring Ecosystem", description: "Spring Boot, Security, Data, Validation, Batch and Cloud in production." },
        { title: "Data & Persistence", description: "SQL modeling, query optimization, migrations and transaction design." },
        { title: "Quality & Testing", description: "JUnit, Mockito, integration testing and reliability-focused practices." },
        { title: "DevOps for Backend", description: "Docker, CI/CD and stable deployments with observability in mind." },
        { title: "Security", description: "JWT, OAuth2, RBAC, API hardening and security-first engineering patterns." }
      ]
    },
    projects: {
      title: "Featured projects",
      items: [
        {
          title: "E-commerce API",
          description:
            "Commerce platform with catalog, inventory, orders and payments; architecture ready to scale by modules.",
          tech: ["Java", "Spring Boot", "MySQL", "Stripe", "Redis"]
        },
        {
          title: "Identity & Access Service",
          description:
            "Authentication/authorization service with JWT, refresh tokens, roles and auditing for multi-app ecosystems.",
          tech: ["Spring Security", "JWT", "PostgreSQL", "OAuth2"]
        },
        {
          title: "Microservices Platform",
          description:
            "Independent services with discovery, API gateway, centralized configuration and fault resilience.",
          tech: ["Spring Cloud", "Eureka", "Docker", "Kubernetes", "RabbitMQ"]
        },
        {
          title: "Batch Processing Engine",
          description:
            "Nightly high-volume data pipeline with validation, traceability and operational alerting.",
          tech: ["Spring Batch", "Java 17", "Oracle", "Scheduler"]
        }
      ]
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Software Engineer",
          company: "EPAM Anywhere",
          period: "May 2022 - Present",
          description:
            "Support and update Dropwizard applications, migration from Java 6 to Java 17, DevOps with Jenkins and Spinnaker, Docker and AWS RDS."
        },
        {
          role: "Senior Back-End Developer",
          company: "Global66",
          period: "Jul 2021 - May 2022",
          description:
            "Developed banking core with transactional features, migrated monolith to microservices, built reports with Jasper Reports and AWS Lambda."
        },
        {
          role: "Software Developer Senior",
          company: "Imagemaker",
          period: "Jan 2021 - May 2021",
          description:
            "Supported distributed microservices for Chilean banking with Spring Boot, REST APIs, Docker and DevOps with Jenkins."
        },
        {
          role: "Application Development Analyst",
          company: "Accenture",
          period: "Oct 2019 - Jan 2021",
          description:
            "Developed middleware with Message Broker on IBM technologies, implemented DevOps and CI/CD, refactored code from Java 6 to Java 8."
        },
        {
          role: "Application Development Associate",
          company: "Accenture",
          period: "Oct 2018 - Oct 2019",
          description:
            "Built RESTful APIs with TDD, AWS and Docker, implemented DevOps and SOAP Web Services."
        },
        {
          role: "Java Developer Junior",
          company: "ADA SA",
          period: "Dec 2017 - Oct 2018",
          description:
            "Full Stack development with JSP (Java EE), Primefaces and Oracle Database, introduced CI/CD and TDD to the team."
        }
      ]
    },
    contact: {
      title: "Let's talk",
      subtitle:
        "Open to remote or hybrid opportunities focused on Java/Spring Boot backend and API architecture projects.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your-email@domain.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Need backend support",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project...",
      sendButton: "Send message",
      successTitle: "Message sent. I will reply soon.",
      errorTitle: "Message failed. Please try again."
    },
    footer: {
      designedBy: "Designed and built by Jesus Torres",
      rights: "All rights reserved."
    }
  }
};

const languageKey = "jt_lang";
let language = localStorage.getItem(languageKey) || "es";

const langToggle = document.getElementById("lang-toggle");
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const stackContainer = document.getElementById("stack-chips");
const skillsGrid = document.getElementById("skills-grid");
const projectsGrid = document.getElementById("projects-grid");
const experienceList = document.getElementById("experience-list");

function readKey(obj, path) {
  return path.split(".").reduce((cursor, key) => (cursor ? cursor[key] : undefined), obj);
}

function renderCollections(copy) {
  stackContainer.innerHTML = copy.hero.stack.map((item) => `<li>${item}</li>`).join("");

  skillsGrid.innerHTML = copy.skills.items
    .map(
      (item) => `
      <article class="skills-card">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `
    )
    .join("");

  projectsGrid.innerHTML = copy.projects.items
    .map(
      (project) => `
      <article class="project-card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">${project.tech.map((tech) => `<span>${tech}</span>`).join("")}</div>
      </article>
    `
    )
    .join("");

  experienceList.innerHTML = copy.experience.items
    .map(
      (item) => `
      <li class="timeline-item">
        <h3>${item.role}</h3>
        <p class="timeline-meta">${item.company} | ${item.period}</p>
        <p>${item.description}</p>
      </li>
    `
    )
    .join("");
}

function applyTranslations() {
  const copy = translations[language];
  document.documentElement.lang = language;
  langToggle.textContent = language === "es" ? "EN" : "ES";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = readKey(copy, el.dataset.i18n);
    if (value) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const value = readKey(copy, el.dataset.i18nPlaceholder);
    if (value) el.setAttribute("placeholder", value);
  });

  renderCollections(copy);
}

langToggle.addEventListener("click", () => {
  language = language === "es" ? "en" : "es";
  localStorage.setItem(languageKey, language);
  applyTranslations();
});

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const copy = translations[language];
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  if (!payload.name || !payload.email || !payload.subject || !payload.message) {
    formStatus.textContent = copy.contact.errorTitle;
    formStatus.className = "form-status error";
    return;
  }

  try {
    const records = JSON.parse(localStorage.getItem("jt_contact_requests") || "[]");
    records.push({ ...payload, sentAt: new Date().toISOString() });
    localStorage.setItem("jt_contact_requests", JSON.stringify(records));
    form.reset();
    formStatus.textContent = copy.contact.successTitle;
    formStatus.className = "form-status success";
  } catch (error) {
    console.error("Contact form submission failed:", error);
    formStatus.textContent = copy.contact.errorTitle;
    formStatus.className = "form-status error";
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 60, 420)}ms`;
  observer.observe(el);
});

applyTranslations();
