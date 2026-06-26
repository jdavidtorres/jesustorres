export const profile = {
  name: 'Jesus Torres',
  role: 'Java + Spring Boot Backend Developer',
  headline: 'Java 21 · Spring Boot · APIs REST · Microservices · Cloud',
  summary:
    'Construyo sistemas backend robustos, escalables y seguros con Java y el ecosistema Spring, desde APIs REST hasta arquitectura de microservicios.',
  location: 'Medellín, Colombia',
  email: 'jesu_ti91@hotmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/jdavidtorres' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jesustorresti' },
    { label: 'X / Twitter', href: 'https://twitter.com/ing_jesusdavid' }
  ],
  stats: [
    { value: '8+', label: 'Años en desarrollo backend' },
    { value: '20+', label: 'APIs y servicios entregados' },
    { value: '99.9%', label: 'Objetivo de disponibilidad' }
  ],
  coreStack: [
    'Java 21',
    'Spring Boot',
    'Spring Security',
    'Spring Data JPA',
    'Microservices',
    'PostgreSQL',
    'Docker',
    'Kubernetes'
  ]
};

export const experience = [
  {
    company: 'EPAM Anywhere',
    role: 'Software Engineer',
    period: 'Mayo 2022 — Actualidad',
    location: 'Remote',
    summary:
      'Soporte y actualización de aplicaciones Dropwizard, migración de Java 6 a Java 17 e implementación de pipelines de datos con Kafka Connect.',
    highlights: [
      'Sincronización y migración de bases de datos entre sistemas con Kafka Connect.',
      'DevOps con Jenkins y Spinnaker, Docker y AWS RDS.',
      'Soporte productivo, actualización de dependencias, análisis de incidentes y remediación de CVEs.'
    ],
    stack: ['Java', 'Dropwizard', 'Kafka Connect', 'Confluent', 'Jenkins', 'Spinnaker', 'Docker', 'AWS RDS']
  },
  {
    company: 'Global66',
    role: 'Senior Back-End Developer',
    period: 'Jul 2021 — May 2022',
    location: 'Remote',
    summary:
      'Desarrollo del core bancario con funcionalidades transaccionales y migración de monolito a microservicios.',
    highlights: [
      'Construcción de capacidades backend para flujos transaccionales y operaciones financieras.',
      'Desacoplamiento de servicios y prácticas cloud sobre AWS.',
      'Reportes con Jasper Reports y automatizaciones con AWS Lambda.'
    ],
    stack: ['Java', 'Spring', 'MySQL', 'AWS', 'TDD', 'Scrum', 'Jasper Reports', 'Python Lambda']
  },
  {
    company: 'Imagemaker',
    role: 'Software Developer Senior',
    period: 'Jan 2021 — May 2021',
    location: 'Sabaneta, Colombia',
    summary:
      'Soporte de microservicios distribuidos para banca chilena con Spring Boot, REST APIs, Docker y Jenkins.',
    highlights: [
      'Mantenimiento de APIs REST y servicios backend en contexto bancario.',
      'Prácticas DevOps para entrega, soporte y operación.',
      'Soporte a servicios cloud y despliegues containerizados.'
    ],
    stack: ['Java', 'Spring Boot', 'REST APIs', 'AWS', 'Docker', 'Jenkins']
  },
  {
    company: 'Accenture',
    role: 'Application Development Analyst / Associate',
    period: 'Oct 2018 — Jan 2021',
    location: 'Medellín, Colombia',
    summary:
      'Desarrollo de middleware, APIs RESTful, Web Services SOAP, CI/CD y modernización de Java legacy.',
    highlights: [
      'Desarrollo de middleware con Message Broker en tecnologías IBM.',
      'Implementación de DevOps y procesos CI/CD dentro de equipos de desarrollo.',
      'Refactorización y actualización de aplicaciones Java 6 a Java 8.'
    ],
    stack: ['Java', 'IBM MQ', 'IBM Broker', 'REST', 'SOAP', 'AWS', 'Docker', 'CI/CD']
  },
  {
    company: 'ADA S.A.',
    role: 'Java Developer Junior',
    period: 'Dec 2017 — Oct 2018',
    location: 'Colombia',
    summary:
      'Desarrollo Full Stack con Java EE, JSP, PrimeFaces y Oracle Database, introduciendo CI/CD y TDD al equipo.',
    highlights: [
      'Desarrollo de funcionalidades con Java EE, EJB, JSP y PrimeFaces.',
      'Trabajo con Oracle Database y aplicaciones empresariales.',
      'Introducción de testing y prácticas de entrega al flujo de desarrollo.'
    ],
    stack: ['Java EE', 'EJB', 'JSP', 'PrimeFaces', 'Oracle Database', 'TDD', 'DevOps']
  }
];

export const expertise = [
  {
    title: 'Backend Engineering',
    text: 'Diseño de servicios desacoplados, APIs REST y sistemas orientados a dominio.',
    items: ['Java', 'Spring Boot', 'REST APIs', 'SOAP', 'Hibernate']
  },
  {
    title: 'Distributed Systems',
    text: 'Integraciones event-driven, microservicios, pub/sub y sincronización de datos.',
    items: ['Kafka', 'Kafka Connect', 'Microservices', 'Pub/Sub', 'Data Integration']
  },
  {
    title: 'Cloud & DevOps',
    text: 'Pipelines, servicios containerizados, despliegues cloud, automatización y soporte operativo.',
    items: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD']
  },
  {
    title: 'Data Platforms',
    text: 'Persistencia relacional y NoSQL en sistemas empresariales y cargas de integración.',
    items: ['MySQL', 'SQL Server', 'MongoDB', 'Oracle', 'Neo4j', 'Cassandra']
  }
];

export const caseStudies = [
  {
    title: 'Integración de datos event-driven',
    text:
      'Modernización y soporte de servicios Java responsables de publicar y consumir cambios de datos entre múltiples bases usando flujos orientados a Kafka.',
    stack: ['Java', 'Dropwizard', 'Kafka', 'SQL Server', 'MongoDB', 'Neo4j', 'Cassandra']
  },
  {
    title: 'Modernización de core bancario',
    text:
      'Evolución de un core bancario separando capacidades de un monolito hacia servicios backend distribuidos desplegados sobre infraestructura cloud.',
    stack: ['Java', 'Spring', 'MySQL', 'AWS', 'DevOps']
  },
  {
    title: 'Middleware empresarial',
    text:
      'Desarrollo y soporte de middleware empresarial con mensajería, APIs REST, servicios SOAP, CI/CD y modernización de Java legacy.',
    stack: ['Java', 'IBM MQ', 'REST', 'SOAP', 'Docker', 'CI/CD']
  }
];
