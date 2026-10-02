import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG, SERVICES, METHOD_STEPS, GOOGLE_REVIEWS, FAQS } from '@/data/siteData';

export default function HomePage() {
  return (
    <div className="space-y-20 sm:space-y-32 pb-24 overflow-x-hidden">
      {/* 01. FULL-BLEED EDITORIAL HERO */}
      <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center pt-4 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
            {/* Rating Pill */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border border-olive/20 bg-sand/35 text-[11px] sm:text-xs text-olive font-medium">
              <span className="text-clay">★</span>
              <span>{SITE_CONFIG.googleRating} en Google</span>
              <span className="text-ink-muted hidden xs:inline">· Reseñas reales verificadas</span>
            </div>

            {/* Campaign Headline */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-mono text-clay font-medium">
                {SITE_CONFIG.methodBrand} &middot; Consulta Privada
              </p>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.08] text-olive font-normal tracking-tight">
                30 kilos menos: <br className="hidden sm:inline" />
                <span className="italic font-light text-clay">el clic que lo cambió todo.</span>
              </h1>
            </div>

            {/* Subtitle / Intro */}
            <p className="text-sm sm:text-base lg:text-lg text-ink-muted leading-relaxed max-w-xl font-normal">
              No decidí formarme solo porque perdí 30 kg. Lo hice porque entendí la frustración de vivir encadenando dietas y la paz inmensa de sanar tu digestión, tu energía y tu relación con la comida sin pasar hambre.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Link
                href="/reservar"
                className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-sm bg-olive text-bone text-xs uppercase tracking-widest font-medium transition-all duration-300 hover:bg-clay hover:shadow-lg focus-visible:ring-2 focus-visible:ring-clay text-center"
              >
                Reserva tu cita
              </Link>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm border border-olive/25 text-olive text-xs uppercase tracking-widest font-medium transition-colors hover:bg-sand/40 text-center"
              >
                <span>Escríbeme por WhatsApp</span>
                <span className="text-clay">&rarr;</span>
              </a>
            </div>

            {/* Micro proof facts */}
            <div className="pt-4 sm:pt-6 hairline-t max-w-lg grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-xs text-ink-muted">
              <div>
                <p className="font-serif text-base sm:text-lg text-olive font-medium">Presencial &amp; Online</p>
                <p className="text-[11px]">En consulta y en tu pantalla</p>
              </div>
              <div>
                <p className="font-serif text-base sm:text-lg text-olive font-medium">Equilibrio 360º</p>
                <p className="text-[11px]">Hábitos que duran toda la vida</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-serif text-base sm:text-lg text-olive font-medium">10:00 h</p>
                <p className="text-[11px]">Apertura de consulta diaria</p>
              </div>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Asymmetrical background accent */}
              <div className="absolute -inset-3 bg-sand/50 rounded-2xl -rotate-1 -z-10" />

              {/* Main portrait image of Lidia on terrace */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-xl overflow-hidden shadow-xl border border-olive/15 bg-sand/30">
                <Image
                  src="/images/lidia-terraza-retrato.jpg"
                  alt="Lidia Llanelis, coach de salud integrativa y nutrición, en su terraza con fondo terracota"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-top img-editorial"
                />
              </div>

              {/* Floating editorial note */}
              <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 bg-bone p-3.5 sm:p-5 rounded-lg shadow-lg border border-olive/15 max-w-[280px] sm:max-w-xs">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-clay font-mono font-semibold">
                  Historia real &middot; España
                </p>
                <p className="font-serif text-xs sm:text-sm italic text-olive mt-1 leading-snug">
                  «La comida no es un castigo ni una recompensa: es la base de tu vitalidad diaria.»
                </p>
                <p className="text-[10px] text-ink-muted mt-1.5">
                  — Lidia Llanelis, Fundadora
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. MARQUEE STRIP: KEYWORD PHILOSOPHY */}
      <section className="py-4 sm:py-6 hairline-t hairline-b bg-sand/20 overflow-hidden">
        <div className="animate-marquee flex gap-8 sm:gap-12 whitespace-nowrap text-xs sm:text-sm uppercase tracking-widest text-olive/80 font-mono">
          <span>Método Equilibrio 360º</span>
          <span>&middot;</span>
          <span>Salud Integrativa</span>
          <span>&middot;</span>
          <span>Nutrición Digestiva</span>
          <span>&middot;</span>
          <span>Hábitos Sostenibles</span>
          <span>&middot;</span>
          <span>Sin Efecto Rebote</span>
          <span>&middot;</span>
          <span>Escucha Activa</span>
          <span>&middot;</span>
          <span>Alimentación Mediterránea</span>
          <span>&middot;</span>
          <span>Salud Metabólica</span>
          <span>&middot;</span>
          <span>Método Equilibrio 360º</span>
          <span>&middot;</span>
          <span>Salud Integrativa</span>
          <span>&middot;</span>
          <span>Nutrición Digestiva</span>
          <span>&middot;</span>
          <span>Hábitos Sostenibles</span>
          <span>&middot;</span>
          <span>Sin Efecto Rebote</span>
        </div>
      </section>

      {/* 03. STORY TEASER WITH REAL PRODUCE PHOTO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden shadow-md border border-olive/15">
            <Image
              src="/images/lidia-llanelis-retrato.png"
              alt="Lidia Llanelis con cesta de hortalizas frescas mediterráneas y aceite virgen"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover img-editorial"
            />
          </div>

          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
              01 &middot; Mi trayectoria
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-olive leading-tight">
              «No decidí formarme solo porque perdí 30 kg. <br />
              <span className="italic font-light text-clay">
                Lo hice porque entendí lo que nadie te cuenta.
              </span>»
            </h2>
            <div className="space-y-3 sm:space-y-4 text-ink-muted text-xs sm:text-sm sm:leading-relaxed">
              <p>
                Durante años viví atrapada en el ciclo habitual: contar calorías, pasar hambre, sentir culpa los fines de semana y recuperar el peso con creces al cabo de unos meses. Mi energía estaba por los suelos y mis digestiones eran una pesadilla continua.
              </p>
              <p>
                Cuando logré perder 30 kilos de manera definitiva y saludable, descubrí que la clave nunca estuvo en la fuerza de voluntad ciega, sino en entender la fisiología, cuidar la microbiota y resolver los disparadores emocionales que nos llevan al descontrol.
              </p>
              <p className="text-olive font-medium">
                Hoy pongo esa experiencia personal unida al estudio formal y continuado en nutrición integrativa al servicio de personas que quieren dejar de pelearse con la báscula y empezar a vivir bien.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/sobre-mi"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-olive font-semibold hover:text-clay transition-colors group"
              >
                <span>Conoce mi historia completa y credenciales</span>
                <span className="transform transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 04. METHOD TEASER (4 STAGES) */}
      <section className="bg-sand/30 py-16 sm:py-24 hairline-t hairline-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div className="space-y-2 sm:space-y-3 max-w-xl">
              <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
                02 &middot; El Método Equilibrio 360º
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-olive font-normal">
                Cómo trabajamos juntas
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Un acompañamiento estructurado en 4 fases para que los cambios se asienten en tu día a día sin fricción ni agobios.
              </p>
            </div>
            <Link
              href="/metodo"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-olive font-semibold hover:text-clay transition-colors"
            >
              <span>Ver el desglose del método</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {METHOD_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-bone p-6 sm:p-7 rounded-lg border border-olive/15 flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div className="space-y-3 sm:space-y-4">
                  <span className="font-serif text-3xl text-clay font-light block">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-olive font-medium leading-snug group-hover:text-clay transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="pt-4 sm:pt-6 hairline-t mt-4 sm:mt-6">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-olive/70">
                    {step.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. SERVICES ROWS (NOT CARDS - EDITORIAL EXPANDING ROWS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-8 sm:space-y-12">
        <div className="space-y-2 sm:space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
            03 &middot; Consultas y Acompañamiento
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-olive font-normal">
            Especialidades de consulta
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted max-w-2xl leading-relaxed">
            Cada proceso es único. Selecciona la modalidad que mejor encaja con tu situación actual, tanto si buscas una valoración puntual como un cambio integral.
          </p>
        </div>

        <div className="divide-y divide-olive/15 hairline-t hairline-b">
          {SERVICES.map((s) => (
            <div
              key={s.slug}
              className="py-6 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start lg:items-center hover:bg-sand/15 p-3 sm:p-4 rounded-md transition-colors group"
            >
              <div className="lg:col-span-1">
                <span className="font-mono text-xs uppercase tracking-wider text-clay font-bold">
                  {s.number}
                </span>
              </div>
              <div className="lg:col-span-5 space-y-1">
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-olive group-hover:text-clay transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-ink-muted">
                  Modalidad: <span className="font-medium text-olive">{s.modality}</span>
                </p>
              </div>
              <div className="lg:col-span-4 text-xs sm:text-sm text-ink-muted leading-relaxed">
                <p>{s.shortDesc}</p>
              </div>
              <div className="lg:col-span-2 flex flex-row lg:flex-col gap-2 items-center lg:items-end justify-between lg:justify-center pt-2 lg:pt-0">
                <Link
                  href={`/servicios/${s.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-olive font-medium hover:text-clay transition-colors"
                >
                  <span>Saber más</span>
                  <span>&rarr;</span>
                </Link>
                <Link
                  href="/reservar"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-sm bg-olive text-bone text-[11px] uppercase tracking-wider font-medium hover:bg-clay transition-colors"
                >
                  Reservar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 06. REAL GOOGLE REVIEWS & OWNER RESPONSES */}
      <section className="bg-sand/30 py-16 sm:py-24 hairline-t hairline-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10 sm:space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-olive/20 bg-bone text-xs text-olive font-medium">
              <span className="text-clay">★</span>
              <span className="font-semibold">{SITE_CONFIG.googleRating} en Google</span>
              <span className="text-ink-muted">· {SITE_CONFIG.googleReviewsCount} reseñas reales verificadas</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-olive font-normal">
              La experiencia real de mis pacientes
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              Opiniones directas en Google My Business y el diálogo cercano que define mi acompañamiento.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {GOOGLE_REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="bg-bone p-6 sm:p-8 rounded-xl border border-olive/15 flex flex-col justify-between space-y-6 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex text-clay text-sm" aria-label="5 estrellas sobre 5">
                        {'★'.repeat(rev.rating)}
                      </div>
                      <p className="font-medium text-sm text-olive mt-1">{rev.author}</p>
                      <p className="text-[10px] text-ink-muted font-mono">{rev.reviewCount} &middot; {rev.timeAgo}</p>
                    </div>
                    <span className="text-emerald-700 text-xs font-semibold flex items-center gap-1">
                      <span>✓</span> Verificada
                    </span>
                  </div>

                  <p className="font-serif text-sm sm:text-base text-olive italic leading-relaxed whitespace-pre-line">
                    «{rev.quote}»
                  </p>
                </div>

                {/* Real Response from Lidia */}
                {rev.ownerResponse && (
                  <div className="bg-sand/30 p-4 rounded-lg border-l-2 border-clay text-xs space-y-1.5 mt-4">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-clay font-bold flex items-center gap-1">
                      <span>💚</span> Respuesta de Lidia Llanelis
                    </p>
                    <p className="text-ink-muted italic leading-relaxed">
                      {rev.ownerResponse.length > 220 ? `${rev.ownerResponse.slice(0, 220)}...` : rev.ownerResponse}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/resultados"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-olive font-semibold hover:text-clay transition-colors"
            >
              <span>Ver todas las reseñas completas y respuestas en Resultados</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 07. REAL LIFE & SEMINAR MOMENTS (HUMAN POV) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
              Voz propia &middot; Comunidad &middot; Divulgación
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-olive font-normal mt-1">
              Momentos de cercanía y aprendizaje
            </h2>
          </div>
          <a
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono uppercase tracking-wider text-olive hover:text-clay transition-colors underline"
          >
            {SITE_CONFIG.instagramHandle} &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Seminar / Event */}
          <div className="bg-bone rounded-xl overflow-hidden border border-olive/15 shadow-sm flex flex-col">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/lidia-evento-seminario.jpg"
                alt="Lidia Llanelis participando en seminario ejecutivo de comunicación y liderazgo de salud"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top img-editorial"
              />
            </div>
            <div className="p-5 space-y-2 flex-grow flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-clay font-semibold">
                  Seminarios y Formación
                </p>
                <h3 className="font-serif text-base text-olive font-medium mt-1">
                  Liderazgo con voz propia y salud integral
                </h3>
                <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                  Participación activa en eventos ejecutivos para directivas y emprendedoras, acercando la nutrición y el autocuidado a la vida profesional real.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Produce & Cooking */}
          <div className="bg-bone rounded-xl overflow-hidden border border-olive/15 shadow-sm flex flex-col">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/lidia-llanelis-retrato.png"
                alt="Lidia Llanelis con hortalizas frescas de temporada mediterránea"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover img-editorial"
              />
            </div>
            <div className="p-5 space-y-2 flex-grow flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-clay font-semibold">
                  Alimentación Real
                </p>
                <h3 className="font-serif text-base text-olive font-medium mt-1">
                  La cocina mediterránea de temporada
                </h3>
                <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                  Ingredientes vivos, sin procesados engañosos ni sustitutos químicos. Comer bien debe ser delicioso, fácil de preparar y disfrutable cada día.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Terrace & Balance */}
          <div className="bg-bone rounded-xl overflow-hidden border border-olive/15 shadow-sm flex flex-col sm:col-span-2 lg:col-span-1">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/lidia-terraza-retrato.jpg"
                alt="Lidia Llanelis en su terraza con luz natural y calma"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top img-editorial"
              />
            </div>
            <div className="p-5 space-y-2 flex-grow flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-clay font-semibold">
                  Acompañamiento Sin Juicios
                </p>
                <h3 className="font-serif text-base text-olive font-medium mt-1">
                  Paz mental, autocuidado y salud duradera
                </h3>
                <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                  El verdadero cambio comienza cuando dejas de castigarte y empiezas a escucharte. En mi consulta encontrarás empatía, ciencia y cercanía.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08. LEAD MAGNET TEASER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-sand/40 border border-olive/20 rounded-2xl p-6 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
              Recurso gratuito de bienvenida
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-olive font-normal leading-tight">
              {SITE_CONFIG.leadMagnetTitle}
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              {SITE_CONFIG.leadMagnetSubtitle}
            </p>
            <p className="text-xs text-olive/80">
              Incluye guía de platos equilibrados, lista de la compra consciente y ejercicios de pausa digestiva.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center items-stretch lg:items-end">
            <Link
              href="/recursos"
              className="inline-flex items-center justify-center px-8 py-4 rounded-sm bg-olive text-bone text-xs uppercase tracking-widest font-medium hover:bg-clay transition-colors shadow-md text-center"
            >
              Descarga la guía gratuita
            </Link>
            <p className="text-[11px] text-ink-muted mt-2 text-center lg:text-right">
              Sin spam. Solo contenido de valor en tu buzón.
            </p>
          </div>
        </div>
      </section>

      {/* 09. FAQ TEASER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 space-y-6 sm:space-y-8">
        <div className="text-center space-y-2 sm:space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
            Dudas habituales
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-olive font-normal">
            Preguntas frecuentes antes de empezar
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {FAQS.slice(0, 4).map((faq) => (
            <details
              key={faq.id}
              className="group bg-bone rounded-lg border border-olive/15 p-4 sm:p-5 open:bg-sand/20 transition-colors"
            >
              <summary className="flex items-center justify-between cursor-pointer font-serif text-base sm:text-lg text-olive font-medium">
                <span className="pr-2">{faq.question}</span>
                <span className="ml-2 text-clay transition-transform group-open:rotate-45 text-xl font-light shrink-0">
                  +
                </span>
              </summary>
              <div className="pt-3 sm:pt-4 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-olive/10 mt-3">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/preguntas-frecuentes"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-olive font-semibold hover:text-clay transition-colors"
          >
            <span>Ver todas las 8 preguntas frecuentes</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </section>

      {/* 10. FINAL BOOKING CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-olive text-bone rounded-2xl p-8 sm:p-16 lg:p-20 text-center space-y-6 sm:space-y-8 relative overflow-hidden">
          <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto relative z-10">
            <span className="text-xs uppercase font-mono tracking-widest text-sand/80 font-medium">
              Da el primer paso hoy
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-bone leading-tight">
              Empieza a cuidar tu salud con calma y acompañamiento cercano
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-sand/80 leading-relaxed">
              Elige entre consulta presencial u online. Sin compromisos forzados: evaluamos tu caso y definimos el camino más sensato para ti.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 relative z-10">
            <Link
              href="/reservar"
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-clay text-bone text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-clay-hover transition-colors shadow-lg text-center"
            >
              Reserva tu cita previa
            </Link>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 sm:py-4 border border-sand/40 text-sand text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-bone/10 transition-colors text-center"
            >
              Escríbeme por WhatsApp
            </a>
          </div>

          <p className="text-[11px] text-sand/60 relative z-10">
            Teléfono directo: <a href={`tel:${SITE_CONFIG.phoneClean}`} className="underline text-sand">{SITE_CONFIG.phone}</a> &middot; Apertura a las 10:00 h
          </p>
        </div>
      </section>
    </div>
  );
}
