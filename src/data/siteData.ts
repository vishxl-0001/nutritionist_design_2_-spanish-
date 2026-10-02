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
  reviewCount: string;
  source: string;
  rating: number;
  timeAgo: string;
  date: string;
  quote: string;
  verified: boolean;
  ownerResponse?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  name: "Lidia Llanelis",
  brandTitle: "Lidia Llanelis | Coach de Salud Integrativa y Nutrición",
  methodBrand: "Método Equilibrio 360º",
  profession: "Coach de Salud Integrativa y Nutricionista",
  phone: "+34 615 89 86 13",
  phoneClean: "+34615898613",
  whatsappUrl: "https://wa.me/34615898613?text=Hola%20Lidia%2C%20he%20visto%20tu%20web%20y%20me%20gustar%C3%ADa%20reservar%20una%20primera%20consulta.",
  whatsappMessage: "Hola Lidia, he visto tu web y me gustaría reservar una primera consulta.",
  email: "[TO_FILL: Correo electrónico profesional, ej. contacto@lidiallanelis.es]",
  address: "[TO_FILL: Dirección del centro o consulta presencial en España]",
  city: "[TO_FILL: Ciudad y provincia en España]",
  hoursSummary: "Apertura a las 10:00 h · Horario semanal completo [TO_FILL: ej. L-V de 10:00 a 19:30]",
  googleRating: "5,0",
  googleReviewsCount: 3,
  googleRatingText: "5,0 en Google",
  googleReviewsUrl: "[TO_FILL: Enlace directo al perfil verificado de Google My Business]",
  instagramHandle: "[TO_FILL: @lidiallanelis]",
  instagramUrl: "[TO_FILL: https://instagram.com/lidiallanelis]",
  collegiateNumber: "[TO_FILL: Nº de colegiado o registro profesional]",
  credentials: "[TO_FILL: Titulación y certificaciones oficiales en nutrición humana y salud integrativa]",
  onlineConsultAvailable: true,
  leadMagnetTitle: "Guía de Primeros Pasos: Reconectar con tu Alimentación sin Culpa",
  leadMagnetSubtitle: "Un cuaderno práctico para escuchar a tu cuerpo, ordenar tus comidas y dejar atrás las dietas restrictivas.",
  medicalDisclaimer: "Aviso importante: El contenido de este sitio web y el acompañamiento ofrecido tienen fines educativos, nutricionales y de cambio de hábitos saludables. En ningún caso sustituyen el diagnóstico, prescripción médica o tratamiento clínico de un facultativo colegiado.",
  testimonialsNotice: "Nota de transparencia: Reseñas reales y verificadas de Google My Business. Los resultados de cada proceso son individuales y dependen del historial clínico y compromiso de cada paciente.",
};

export const NAV_LINKS = [
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Método 360º", href: "/metodo" },
  { label: "Servicios", href: "/servicios" },
  { label: "Resultados", href: "/resultados" },
  { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
  { label: "Recursos", href: "/recursos" },
  { label: "Contacto", href: "/contacto" },
];

export const METHOD_STEPS: MethodStep[] = [
  {
    number: "01",
    title: "Primera consulta y escucha sin juicios",
    subtitle: "Comprender tu punto de partida real",
    description: "Evaluamos en profundidad tu historial de salud, analíticas recientes [TO_FILL], descanso, estrés, digestiones y tu relación emocional con la comida. Desde la empatía de quien ha vivido esa misma lucha.",
    detail: "Dedicamos el tiempo que haga falta para entender tu contexto: horarios de trabajo, familia y barreras reales que antes te frenaron.",
  },
  {
    number: "02",
    title: "Plan personalizado integrativo 360º",
    subtitle: "Una pauta adaptada a tu vida, no un menú de papel",
    description: "Diseño una estrategia nutricional realista, saciante y flexible, basada en alimentos frescos, salud de la microbiota y crononutrición adaptada a tu ritmo.",
    detail: "Sin listas infinitas de prohibiciones. Trabajamos con recetas sencillas, compra consciente y equilibrio metabólico sin pasar hambre.",
  },
  {
    number: "03",
    title: "Acompañamiento cercano y seguimiento continuo",
    subtitle: "Contacto directo entre sesiones para que nunca camines a solas",
    description: "La verdadera transformación sucede en el día a día. Estamos en contacto para resolver dudas, adaptar recetas y superar imprevistos laborales o sociales sin angustia.",
    detail: "Sesiones de revisión periódicas para modular la pauta según tus sensaciones y afianzar la confianza en ti misma con total serenidad.",
  },
  {
    number: "04",
    title: "Hábitos que duran toda la vida",
    subtitle: "Autonomía definitiva y paz con la comida",
    description: "El objetivo final de Equilibrio 360º no es que vivas a dieta, sino que adquieras criterio intuitivo, energía constante y una relación de cariño y respeto hacia tu cuerpo.",
    detail: "Construyes una relación pacífica con el espejo y con el plato, disfrutando de comidas en familia, viajes o restaurantes sin culpa ni efecto rebote.",
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
      "Resolución de dudas por correo y WhatsApp durante las 2 primeras semanas",
    ],
    duration: "[TO_FILL: ej. 75 minutos primera consulta / 45 min revisiones]",
    price: "[TO_FILL: ej. 85 € primera sesión / bonos disponibles]",
    modality: "Presencial y Online",
  },
  {
    slug: "coaching-salud-integrativa",
    number: "02",
    title: "Coaching de Salud Integrativa (Equilibrio 360º)",
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
    shortDesc: "El método propio nacido de mi experiencia real de 30 kg menos y la ciencia de la nutrición integrativa.",
    fullDesc: "Perder peso no va de pasar hambre, contar gramos ni castigarse. Va de desinflamar el cuerpo, sanar el metabolismo y transformar los pensamientos que te boicotean. Un enfoque empático nacido tanto del rigor técnico como de haber recorrido el mismo camino en primera persona.",
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
    author: "Mónica Rios",
    reviewCount: "4 reseñas",
    source: "Google Reseñas",
    rating: 5,
    timeAgo: "Hace un mes",
    date: "Septiembre 2026",
    quote: "Hola Lidia. Quería escribirte estas líneas para darte las gracias de todo corazón. Tu ayuda y tu guía en este proceso han sido fundamentales para mí. Gracias a ti no solo he mejorado mi alimentación, sino que he aprendido a entender mi cuerpo y a relacionarme de una forma mucho más sana con la comida.\n\nTu paciencia, tus conocimientos y tu constante apoyo me han dado la confianza que necesitaba para lograr mis objetivos. Han sido muchos mensajes, en cada momento, y siempre ha habido una respuesta, un seguimiento increíble que recomiendo 100x100 a cualquiera que esté como yo estaba cuando te conocí. Estoy muy agradecida de haberte conocido, para mí ya no eres mi coach, eres mucho más que eso.\n\nMe siento con más energía, más salud y, sobre todo, muy feliz de ver todo lo que he avanzado a tu lado. Eres una profesional increíble y una gran motivación. ¡Muchísimas gracias por todo! La recomiendo a todo el mundo. Con ella todo es muy fácil.",
    verified: true,
    ownerResponse: "Mónica, gracias de corazón por tus palabras. 💚 Para mí ha sido un privilegio acompañarte durante este proceso y, sobre todo, verte avanzar no solo en tus objetivos, sino también en la confianza que has ido construyendo en ti misma. Me hace especialmente feliz que destaques algo que para mí es fundamental: aprender a entender tu cuerpo, mejorar tu relación con la comida y sentir que puedes cuidarte de una forma que puedas mantener en el tiempo. Y sí, han sido muchos mensajes, muchas conversaciones, muchas dudas y muchos momentos compartidos. Pero cada uno de ellos ha formado parte de tu proceso, y el mérito de todo lo que has conseguido es tuyo. Gracias por haber confiado en mí desde el principio, por dejarme acompañarte y por permitirme vivir de cerca una parte tan importante de tu historia. Y esa frase tuya de que ya no soy solo tu coach… me la guardo con muchísimo cariño. Gracias, Mónica, por confiar en mí y por recordarme por qué hago lo que hago. Te deseo que sigas cuidándote, disfrutando de tu energía, de tu salud y, sobre todo, de todo lo que has aprendido sobre ti. 💚",
  },
  {
    author: "Elisabeth López Bermúdez",
    reviewCount: "1 reseña",
    source: "Google Reseñas",
    rating: 5,
    timeAgo: "Hace una semana",
    date: "Septiembre 2026",
    quote: "Totalmente recomendada. Lidia, además de una gran profesional, es una persona maravillosa. Mi vida cambió cuando la conocí. Solo puedo expresar mi gratitud por todo lo que he conseguido en mi vida gracias a su guía. He aprendido muchísimo a cuidarme, a entenderme y a construir un estilo de vida que mantengo en mi día a día.",
    verified: true,
    ownerResponse: "Elisabeth, muchísimas gracias por tus palabras y por compartir tu experiencia. 💚 Me emociona especialmente leerte porque todo lo que cuentas refleja algo en lo que creo profundamente: que el objetivo no es vivir siguiendo una dieta, sino aprender a cuidarte, entenderte y construir una forma de hacerlo que puedas mantener en tu vida real. Pero, sobre todo, quiero que sepas que todo lo que has conseguido es tuyo. Yo he tenido el privilegio de acompañarte, pero has sido tú quien ha hecho el proceso, tomado las decisiones y construido todos esos cambios. Gracias por confiar en mí y en Equilibrio 360º, y por permitirme acompañarte en una parte tan importante de tu vida. Ha sido un verdadero placer verte avanzar y descubrir todo lo que eres capaz de conseguir. 💚",
  },
  {
    author: "Els de Coninck",
    reviewCount: "5 reseñas · 10 fotos",
    source: "Google Reseñas",
    rating: 5,
    timeAgo: "Hace 2 meses",
    date: "Agosto 2026",
    quote: "Si alguien me preguntara a quién recomendaría sin dudarlo, diría a Lidia. Es una persona súper cercana, que te escucha, te entiende y te acompaña sin juzgar. Lo que más admiro de ella es que sabe perfectamente lo que se siente, porque ella misma ha luchado durante años por perder peso. Por eso habla desde la experiencia y no solo desde la teoría.\n\nCon Lidia no solo aprendes a comer mejor, también aprendes a cuidarte, a quererte y a trabajar tu salud mental. Gracias por demostrar que sí se puede y por inspirarnos cada día con tu ejemplo. ¡Eres una gran profesional y una persona aún mejor!",
    verified: true,
    ownerResponse: "Muchísimas gracias por tus palabras. ❤️ Me emociona especialmente que hayas destacado algo que forma parte de la esencia de mi trabajo: acompañar desde la escucha, la comprensión y sin juicios. Mi propia historia me enseñó que perder peso no era solo cuestión de saber qué comer, sino de aprender a cuidarnos desde un lugar mucho más profundo. Por eso decidí convertir esa experiencia en mi propósito y crear un método que ayude a otras personas a construir una salud que puedan sostener en el tiempo. Gracias por confiar en mí, por valorar mi trabajo y por dedicar unos minutos a compartir tu experiencia. Comentarios como el tuyo me recuerdan cada día por qué elegí este camino. Un abrazo enorme.",
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
