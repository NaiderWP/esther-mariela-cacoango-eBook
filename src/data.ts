import { Unit, GlossaryTerm, ReferenceItem } from "./types";

export const UNEMI_UNITS: Unit[] = [
  {
    id: "unit-1",
    number: 1,
    title: "Entornos Virtuales de Aprendizaje y Herramientas Tecnológicas",
    topics: [
      {
        id: "u1t1",
        number: 1,
        title: "Las TICs y el Rol de la Tecnología en la Educación Superior",
        bullets: [
          "Definición y Evolución: Las Tecnologías de la Información y Comunicación (TIC) han redefinido el paradigma educativo, pasando de un modelo transmisivo a uno constructivista.",
          "Democratización del Conocimiento: Las TICs permiten eliminar barreras socio-geográficas, garantizando un acceso equitativo a materiales didácticos de calidad y de alcance global.",
          "Interactividad y Personalización: Facilitan metodologías activas donde el estudiante es el centro de su propio aprendizaje, adaptando el ritmo pedagógico.",
          "Competencia Digital: El manejo de estas herramientas no es opcional en la educación moderna; constituye una habilidad profesional fundamental codiseñada para el mercado contemporáneo."
        ],
        reflection: "La tecnología por sí misma no educa; es la mediación pedagógica la que transforma un recurso digital en una experiencia de aprendizaje significativo y trascendente."
      },
      {
        id: "u1t2",
        number: 2,
        title: "Entornos Virtuales de Aprendizaje (EVA) y Plataformas LMS",
        bullets: [
          "Concepto de EVA: Espacios educativos alojados en la web, conformados por un conjunto de herramientas de software que posibilitan la interacción académica síncrona y asíncrona.",
          "Estructura LMS (Learning Management System): Plataformas que permiten administrar, distribuir, evaluar y hacer seguimiento a las actividades de aprendizaje (por ejemplo, el Aula Virtual UNEMI basada en Moodle).",
          "Componentes Clave: Foros de debate, sistemas de entrega de tareas, cuestionarios interactivos síncronos, y módulos de retroalimentación detallada.",
          "Flexibilidad Espacio-Temporal: El estudiante accede a sus contenidos sin limitaciones de localización o de un horario rígido, favoreciendo la autodisciplina académica."
        ],
        reflection: "Los entornos virtuales promueven la autonomía y responsabilidad. Organizar un calendario semanal de estudio es la clave del éxito para evitar la procrastinación en aulas virtuales."
      },
      {
        id: "u1t3",
        number: 3,
        title: "Herramientas Colaborativas de la Web 2.0 y Trabajo Cooperativo",
        bullets: [
          "Evolución Web 2.0: Transición de una web de lectura estática a una web de lectura y escritura participativa, donde los usuarios crean y comparten su propio contenido interactivo.",
          "Sistemas Co-creativos: Herramientas en la nube como documentos compartidos en tiempo real (Google Docs, Slides, Sheets), permitiendo el trabajo dinámico y la retroalimentación inmediata.",
          "Muros y Carteleras Digitales: Espacios como Padlet o Miro que permiten la lluvia de ideas visual, facilitando el desarrollo de proyectos y mapas colaborativos en equipo.",
          "Almacenamiento y Sincronización: Uso de repositorios de información (Google Drive, OneDrive) para salvaguardar y organizar el portafolio de evidencias de aprendizaje."
        ],
        reflection: "El trabajo colaborativo potencia la inteligencia colectiva. El uso ordenado de herramientas compartidas enseña el respeto por los aportes y la diversidad de pensamiento del grupo."
      }
    ],
    mindMapData: {
      root: "Unidad 1: Entornos Virtuales y TICs",
      branches: [
        {
          title: "Rol de las TICs",
          subtopics: ["Constructivismo digital", "Rol activo del alumno", "Socio-democratización"]
        },
        {
          title: "Plataformas EVA",
          subtopics: ["Administración LMS", "Moodle institucional", "Aula Virtual UNEMI"]
        },
        {
          title: "Web 2.0 Colaborativa",
          subtopics: ["Co-creación interactiva", "Nube estructurada", "Inteligencia colectiva"]
        }
      ]
    }
  },
  {
    id: "unit-2",
    number: 2,
    title: "Ciudadanía Digital, Ciberseguridad y Ética en Entornos Virtuales",
    topics: [
      {
        id: "u2t1",
        number: 1,
        title: "Identidad Digital, Reputación Online y la Huella Digital",
        bullets: [
          "Definición de Huella Digital: El rastro permanente de datos, comentarios, búsquedas y publicaciones que dejamos grabado de forma indeleble al navegar por internet.",
          "Identidad Digital frente a Identidad Real: La proyección de nuestra personalidad y valores en internet, construida activamente a través de interacciones públicas y privadas.",
          "Reputación Académica y Profesional: Los empleadores e instituciones constatan la idoneidad analizando el comportamiento cívico y ético del candidato en redes sociales.",
          "Privacidad de la Identidad: Configurar de forma correcta los parámetros de privacidad e intimidad para evitar que datos sensibles queden expuestos al dominio público."
        ],
        reflection: "Toda interacción digital deja un eco que te acompañará en tu futuro profesional. Comparte contenido ético, constructivo y verificado que enorgullezca tu perfil."
      },
      {
        id: "u2t2",
        number: 2,
        title: "Ciberseguridad Práctica y Protección de Datos Personales",
        bullets: [
          "Contraseñas Fuertes y MFA: Uso de combinaciones complejas (letras, números y caracteres especiales) y autenticación de doble factor para mitigar accesos no autorizados.",
          "Ingeniería Social y Phishing: Métodos fraudulentos que buscan duplicar identidades o suplantar e-mails institucionales para sustraer información confidencial.",
          "Seguridad en Redes Públicas: Evitar transacciones bancarias o inicios de sesión académicos comprometidos al usar Wi-Fi públicos sin el soporte de cifrado o VPNs.",
          "Respaldo de Datos (Backup): Práctica constante de subida de archivos clave a la nube universitaria para no perder información ante fallos inesperados de hardware."
        ],
        reflection: "La seguridad digital no es un producto, es un hábito diario. Desconfía de ofertas sospechosas y protege tu contraseña institucional como si fuera la llave de tu hogar."
      },
      {
        id: "u2t3",
        number: 3,
        title: "Netiqueta y Protocolos de Comunicación Eficiente en Red",
        bullets: [
          "Normas de Netiqueta: Reglas básicas de cortesía, empatía, respeto mutuo y corrección gramatical adaptadas meticulosamente a la comunicación en línea.",
          "El Uso de Mayúsculas: Escribir enteramente en mayúsculas equivale a gritar en el entorno virtual, por lo que debe evitarse rigurosamente en foros y chats.",
          "Estructura del Correo Institucional: Incluir siempre un asunto descriptivo breve, saludo formal del remitente, cuerpo claro estructurado, despedida cordial y firma con datos.",
          "Resolución de Conflictos: Dirimirse de manera pacífica, evitando discusiones reactivas en foros públicos y priorizando el diálogo respetuoso o canales de soporte."
        ],
        reflection: "Detrás de cada pantalla hay un ser humano digno de admiración y respeto. La amabilidad en la comunicación escrita facilita la resolución de dudas y genera un clima de paz académica."
      }
    ],
    mindMapData: {
      root: "Unidad 2: Ciudadanía y Ciberseguridad",
      branches: [
        {
          title: "Huella Digital",
          subtopics: ["Rastro persistente", "Identidad académica", "Privacidad proactiva"]
        },
        {
          title: "Ciberseguridad",
          subtopics: ["MFA y contraseñas", "Ingeniería social", "Respaldo y backups"]
        },
        {
          title: "Normas Netiqueta",
          subtopics: ["Cortesía sin gritar", "Formatos del correo", "Resolución pacífica"]
        }
      ]
    }
  }
];

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: "LMS (Learning Management System)",
    definition: "Sistema de gestión del aprendizaje; software interactivo que automatiza e integra la administración y evaluación de contenidos académicos."
  },
  {
    term: "Moodle",
    definition: "Plataforma de código abierto y entorno de aprendizaje virtual de excelencia, ampliamente utilizada mundialmente y que sustenta el Campus Virtual de UNEMI."
  },
  {
    term: "Netiqueta",
    definition: "Conjunto de convenciones sociales que facilitan el comportamiento respetuoso, ético y constructivo en internet y redes sociales."
  },
  {
    term: "Huella Digital",
    definition: "Conjunto de rastros invisibles e imborrables que se acumulan progresivamente tras las acciones cibernéticas de un usuario."
  },
  {
    term: "Autenticación de Dos Factores (MFA)",
    definition: "Protocolo de ciberseguridad que requiere dos formas independientes de identificación antes de conceder acceso a una cuenta personal."
  },
  {
    term: "Phishing",
    definition: "Práctica fraudulenta consistente en el envío de correos electrónicos simulados para inducir a los usuarios a revelar credenciales de acceso."
  },
  {
    term: "Web 2.0",
    definition: "Generación de la web enfocada en la co-creación social, la interactividad de contenidos, y el intercambio colaborativo de conocimientos."
  }
];

export const REFERENCES: ReferenceItem[] = [
  {
    author: "Universidad Estatal de Milagro (UNEMI)",
    year: "2026",
    title: "Modelo Educativo de la UNEMI: Innovación, Calidad y Pertinencia Social",
    source: "Dirección de Planificación Académica. UNEMI."
  },
  {
    author: "Garrison, D. R., & Anderson, T.",
    year: "2019",
    title: "El aprendizaje en el siglo XXI: Teoría y práctica de la enseñanza en línea",
    source: "Ediciones Morata."
  },
  {
    author: "UNESCO",
    year: "2023",
    title: "Directrices para la ciberseguridad y ética ciudadana en ámbitos de educación digital superior",
    source: "Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura."
  },
  {
    author: "Area Moreira, M.",
    year: "2021",
    title: "La escuela y la sociedad digital: Análisis de la transferencia del conocimiento en plataformas virtuales",
    source: "Revista Fuentes, 23(1), 45-59."
  }
];
