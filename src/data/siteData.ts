export interface ServiceItem {
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  forWhom: string[];
  includes: string[];
  duration: string;
  price: string;
  modality: string;
}

export interface MethodStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  detail: string;
}

export interface ReviewItem {
  author: string;
  source: string;
  rating: number;
  date: string;
  quote: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  name: "Lidia Llanelis",
  brandTitle: "Lidia Llanelis | Coach de Salud Integrativa y Nutrición",
  profession: "Coach de Salud Integrativa y Nutricionista",
  phone: "+34 615 89 86 13",
  phoneClean: "+34615898613",
  whatsappUrl: "https://wa.me/34615898613?text=Hola%20Lidia%2C%20he%20visto%20tu%20web%20y%20me%20gustar%C3%ADa%20reservar%20una%20primera%20consulta.",
  whatsappMessage: "Hola Lidia, he visto tu web y me gustaría reservar una primera consulta.",
  email: "[TO_FILL: Correo electrónico profesional, ej. contacto@lidiallanelis.es]",
  address: "[TO_FILL: Dirección del centro o consulta presencial en España]",
  city: "[TO_FILL: Ciudad y provincia en España]",
  hoursSummary: "Apertura a las 10:00 h · Horario completo [TO_FILL: Horario de atención semanal, ej. L-V de 10:00 a 19:30]",
  googleRating: "5,0",
  googleReviewsCount: 3,
  googleRatingText: "5,0 en Google",
  googleReviewsUrl: "[TO_FILL: Enlace directo al perfil verificado de Google My Business]",
  instagramHandle: "[TO_FILL: @lidiallanelis]",
  instagramUrl: "[TO_FILL: https://instagram.com/lidiallanelis]",
  collegiateNumber: "[TO_FILL: Nº de colegiado o registro profesional / certificación]",
  credentials: "[TO_FILL: Título universitario / Certificaciones oficiales en nutrición humana y salud integrativa]",
  onlineConsultAvailable: true,
  leadMagnetTitle: "Guía de Primeros Pasos: Reconectar con tu Alimentación sin Culpa",
  leadMagnetSubtitle: "Un cuaderno breve y práctico para escuchar a tu cuerpo, ordenar tus comidas y dejar atrás las dietas restrictivas.",
  medicalDisclaimer: "Aviso importante: El contenido de este sitio web y el acompañamiento ofrecido tienen fines educativos, nutricionales y de cambio de hábitos saludables. En ningún caso sustituyen el diagnóstico, prescripción médica o tratamiento clínico de un facultativo colegiado.",
  testimonialsNotice: "Nota de transparencia: Las experiencias compartidas corresponden a procesos individuales reales con consentimiento expreso por escrito. Los resultados varían en función de cada organismo, historial clínico y compromiso individual.",
};

export const NAV_LINKS = [
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Método", href: "/metodo" },
  { label: "Servicios", href: "/servicios" },
  { label: "Resultados", href: "/resultados" },
  { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
  { label: "Recursos", href: "/recursos" },
  { label: "Contacto", href: "/contacto" },
];

export const METHOD_STEPS: MethodStep[] = [
  {
    number: "01",
    title: "Primera consulta y escucha profunda",
    subtitle: "Comprender tu punto de partida sin juicios",
    description: "Evaluamos en profundidad tu historial de salud, analíticas recientes [TO_FILL: solicitar analíticas específicas], patrones de descanso, nivel de estrés, digestiones y tu relación emocional con la comida.",
    detail: "Dedicamos el tiempo necesario a entender el contexto completo de tu vida cotidiana: horarios de trabajo, cocina disponible y barreras reales que antes te frenaron.",
  },
  {
    number: "02",
    title: "Plan personalizado integrativo",
    subtitle: "Una pauta adaptada a tu realidad, no un menú genérico",
    description: "Diseño una estrategia nutricional realista, deliciosa y flexible, basada en alimentos frescos de temporada, salud digestiva e indicaciones claras para tu ritmo de vida.",
    detail: "Sin listas interminables de prohibiciones. Trabajamos con recetas sencillas, listas de la compra organizadas y equilibrio metabólico adaptado a ti.",
  },
  {
    number: "03",
    title: "Acompañamiento continuo",
    subtitle: "Soporte entre sesiones para que no camines a solas",
    description: "La verdadera transformación ocurre entre semana. Dispones de seguimiento para resolver dudas prácticas, ajustar recetas y superar imprevistos laborales o sociales.",
    detail: "Sesiones de revisión periódicas para celebrar avances, modular la pauta según tus sensaciones y consolidar cada pequeño paso con serenidad.",
  },
  {
    number: "04",
    title: "Hábitos que duran",
    subtitle: "Autonomía definitiva para toda tu vida",
    description: "El objetivo final no es que dependas de una pauta, sino que adquieras criterio intuitivo, tranquilidad ante la mesa y una energía constante que perdure en los años venideros.",
    detail: "Construyes una relación pacífica con el espejo y con el plato, disfrutando de la comida en familia, viajes o restaurantes sin temor ni efecto rebote.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    slug: "consulta-nutricional",
    number: "01",
    title: "Consulta Nutricional Integrativa",
    shortDesc: "Evaluación clínica integral y reordenación de tu alimentación diaria según tu bioquímica y estilo de vida.",
    fullDesc: "Una sesión individual en profundidad donde analizamos tus síntomas, analíticas, sintomatología digestiva y hábitos de vida. Trazamos un mapa claro para restaurar tus digestiones, recuperar tu vitalidad y alimentarte con criterio sin caer en restricciones imposibles.",
    forWhom: [
      "Personas con hinchazón, digestiones pesadas o problemas intestinales.",
      "Quienes sienten fatiga constante y bajones de energía tras comer.",
      "Personas que buscan aprender a comer de verdad con alimentos reales.",
    ],
    includes: [
      "Historia dietética y clínica completa (60-75 min)",
      "Revisión de analíticas y pautas personalizadas",
      "Plan nutricional individualizado y dossier de recetas prácticas",
      "Resolución de dudas por correo durante las 2 primeras semanas",
    ],
    duration: "[TO_FILL: ej. 75 minutos primera consulta / 45 min revisiones]",
    price: "[TO_FILL: ej. 85 € primera sesión / bonos disponibles]",
    modality: "Presencial y Online",
  },
  {
    slug: "coaching-salud-integrativa",
    number: "02",
    title: "Coaching de Salud Integrativa",
    shortDesc: "Acompañamiento holístico que integra nutrición, gestión del estrés, descanso reparador y relación emocional.",
    fullDesc: "Un proceso continuado de cambio de hábitos diseñado para quienes ya saben la teoría pero no consiguen sostenerla. Trabajamos la mentalidad, los disparadores del hambre emocional, el estrés cotidiano y los biorritmos de descanso.",
    forWhom: [
      "Quienes comen por ansiedad, aburrimiento o cansancio acumulado.",
      "Personas con alta carga de estrés que descuidan su autocuidado.",
      "Quienes han probado múltiples métodos y buscan un cambio sostenible y compasivo.",
    ],
    includes: [
      "Sesiones quincenales de coaching y reajuste de metas",
      "Herramientas de gestión de la ansiedad y hambre emocional",
      "Estrategias para optimizar el sueño y el descanso celular",
      "Contacto directo entre sesiones para afianzar el compromiso",
    ],
    duration: "[TO_FILL: ej. Programa de 3 meses / sesiones de 60 min]",
    price: "[TO_FILL: ej. Consultar tarifa de programa integral]",
    modality: "Presencial y Online",
  },
  {
    slug: "nutricion-online",
    number: "03",
    title: "Nutrición Online Personalizada",
    shortDesc: "La misma cercanía, rigor y calidez que en la consulta privada, desde cualquier rincón de España o el extranjero.",
    fullDesc: "Si vives fuera o tu agenda te complica desplazarte, las consultas online por videollamada te ofrecen el mismo rigor y cercanía humana. Incluye acceso a tu documentación digital, pautas semanales y soporte cercano en tu ordenador o móvil.",
    forWhom: [
      "Personas con horarios laborales exigentes o que viajan con frecuencia.",
      "Residentes en cualquier punto de España o hispanohablantes en el extranjero.",
      "Quienes prefieren la comodidad y privacidad de su propio hogar.",
    ],
    includes: [
      "Videollamada en alta definición en plataforma segura y privada",
      "Envío inmediato de material didáctico y pauta personalizada en PDF",
      "Soporte continuado por WhatsApp y correo electrónico",
      "Flexibilidad horaria adaptada a tu zona",
    ],
    duration: "[TO_FILL: ej. 60 minutos por sesión]",
    price: "[TO_FILL: ej. 75 € por sesión / pack de seguimiento]",
    modality: "100% Online (Videollamada)",
  },
  {
    slug: "perdida-de-peso-saludable",
    number: "04",
    title: "Pérdida de Peso Saludable y Consciente",
    shortDesc: "Mi método propio nacido de mi experiencia personal de 30 kg menos y la ciencia de la nutrición integrativa.",
    fullDesc: "Perder peso no va de pasar hambre, contar gramos ni castigarse en el gimnasio. Va de desinflamar el cuerpo, sanar el metabolismo y transformar los pensamientos que te boicotean. Un enfoque empático nacido tanto del rigor técnico como de haber recorrido el mismo camino en primera persona.",
    forWhom: [
      "Quienes han vivido el efecto rebote de dietas milagro restrictivas.",
      "Personas con sobrepeso que desean recuperar agilidad, ligereza y salud.",
      "Quienes buscan una guía cercana que entienda exactamente por lo que están pasando.",
    ],
    includes: [
      "Diagnóstico metabólico y valoración corporal no pesocentrista",
      "Estrategia de comidas saciantes, equilibradas y deliciosas",
      "Acompañamiento paso a paso sin culpa ni castigos",
      "Educación nutricional para mantener el peso de por vida",
    ],
    duration: "[TO_FILL: ej. Acompañamiento continuado mensual / trimestral]",
    price: "[TO_FILL: ej. Consultar planes personalizados]",
    modality: "Presencial y Online",
  },
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    author: "María G.",
    source: "Google Reseñas",
    rating: 5,
    date: "14/03/2024",
    quote: "Lidia me ha cambiado la forma de ver la comida. Después de años encadenando dietas que me amargaban la vida, con ella aprendí a comer sin miedo, con platos ricos y respetando mis horarios de trabajo. Por primera vez siento calma.",
    verified: true,
  },
  {
    author: "Carlos M.",
    source: "Google Reseñas",
    rating: 5,
    date: "28/05/2024",
    quote: "La cercanía de Lidia marca la diferencia. Se nota que sabe de verdad de lo que habla y que entiende lo que cuesta romper con viejos vicios. Sus pautas son claras, sensatas y cero restrictivas. Muy agradecido por su dedicación.",
    verified: true,
  },
  {
    author: "Elena R.",
    source: "Google Reseñas",
    rating: 5,
    date: "19/08/2024",
    quote: "Increíble profesional. Acudí por problemas digestivos y desgana generalizada, y en pocas semanas recuperé la energía que creía perdida. El trato es impecable, cercano y profundamente humano. La recomiendo al cien por cien.",
    verified: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "primera-consulta",
    question: "¿Cómo es y qué incluye la primera consulta?",
    answer: "Es un encuentro de entre 60 y 75 minutos donde te escucho con detenimiento. Revisamos tu historia de salud, analíticas recientes [TO_FILL], digestiones, descanso y objetivos. Al finalizar, trazamos una primera pauta realista y acordamos los pasos iniciales.",
  },
  {
    id: "online-vs-presencial",
    question: "¿Es igual de eficaz la consulta online que la presencial?",
    answer: "Absolutamente sí. Las consultas online se realizan por videollamada segura con la misma dedicación y cercanía. Todo el material, recetas y hojas de seguimiento se te envían en formato digital, y mantenemos el contacto entre sesiones exactamente igual.",
  },
  {
    id: "necesidades-dieteticas",
    question: "¿Te adaptas a intolerancias, alergias o dietas vegetales?",
    answer: "Por supuesto. Cada plan es 100% individualizado. Ya seas vegetariana, celíaca, tengas intolerancia a la lactosa, SIBO, resistencia a la insulina o simplemente gustos específicos, la pauta se construye en torno a ti y a tus necesidades reales.",
  },
  {
    id: "precios-y-tarifas",
    question: "¿Cuáles son las tarifas y formas de pago?",
    answer: "Las tarifas varían según si eliges una sesión individual o un programa de acompañamiento trimestral [TO_FILL: Consultar apartado de precios detallados o solicitar dossier por WhatsApp]. El abono se realiza de forma cómoda mediante transferencia bancaria o Bizum [TO_FILL].",
  },
  {
    id: "politica-cancelacion",
    question: "¿Cuál es la política de cancelación o cambio de cita?",
    answer: "Para respetar el tiempo de todos los pacientes, rogamos avisar con un mínimo de 24 horas de antelación si necesitas modificar o anular tu cita. De este modo, otra persona en lista de espera podrá aprovechar ese hueco.",
  },
  {
    id: "confidencialidad",
    question: "¿Se garantiza la confidencialidad de mis datos y salud?",
    answer: "Totalmente. Cumplimos rigurosamente con la normativa española de protección de datos (RGPD y LOPDGDD). Tu historial clínico y conversaciones son estrictamente confidenciales y están protegidos con los máximos estándares de seguridad.",
  },
  {
    id: "duracion-proceso",
    question: "¿Cuánto suele durar un proceso completo de acompañamiento?",
    answer: "No existen fórmulas mágicas iguales para todos. La mayoría de personas experimentan cambios notables en su energía y digestiones en las primeras 3-4 semanas, mientras que la consolidación de nuevos hábitos sostenibles suele requerir entre 3 y 6 meses.",
  },
  {
    id: "como-prepararse",
    question: "¿Qué debo tener preparado antes de la primera cita?",
    answer: "Si dispones de analíticas sanguíneas realizadas en los últimos 6-12 meses [TO_FILL], es recomendable tenerlas a mano. También te enviaré un breve cuestionario previo por correo electrónico para que lo rellenes con calma antes de vernos.",
  },
];
