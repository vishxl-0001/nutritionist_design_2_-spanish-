import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG, SERVICES, METHOD_STEPS, GOOGLE_REVIEWS, FAQS } from '@/data/siteData';

export default function HomePage() {
  return (
    <div className="space-y-24 sm:space-y-36 pb-24">
      {/* 01. FULL-BLEED EDITORIAL HERO */}
      <section className="relative min-h-[88vh] flex items-center pt-8 sm:pt-16 pb-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-8 z-10">
            {/* Rating Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-olive/20 bg-sand/35 text-xs text-olive font-medium">
              <span className="text-clay">★</span>
              <span>{SITE_CONFIG.googleRating} en Google</span>
              <span className="text-ink-muted">· {SITE_CONFIG.googleReviewsCount} reseñas reales verificadas</span>
            </div>

            {/* Campaign Headline */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] font-mono text-clay font-medium">
                Consulta de Nutrición &amp; Salud Integrativa
              </p>
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl leading-[1.08] text-olive font-normal tracking-tight">
                30 kilos menos: <br className="hidden sm:inline" />
                <span className="italic font-light text-clay">el clic que lo cambió todo.</span>
              </h1>
            </div>

            {/* Subtitle / Intro */}
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-xl font-normal">
              No decidí formarme solo porque perdí 30 kg. Lo hice porque entendí la frustración de vivir a dieta y la paz inmensa que se siente cuando sanas tu digestión, tu energía y tu relación con la comida sin pasar hambre ni contar calorías.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/reservar"
                className="inline-flex items-center justify-center px-8 py-4 rounded-sm bg-olive text-bone text-xs uppercase tracking-widest font-medium transition-all duration-300 hover:bg-clay hover:shadow-lg focus-visible:ring-2 focus-visible:ring-clay"
              >
                Reserva tu cita
              </Link>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-sm border border-olive/25 text-olive text-xs uppercase tracking-widest font-medium transition-colors hover:bg-sand/40"
              >
                <span>Escríbeme por WhatsApp</span>
                <span className="text-clay">&rarr;</span>
              </a>
            </div>

            {/* Micro proof facts */}
            <div className="pt-6 hairline-t max-w-lg grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-ink-muted">
              <div>
                <p className="font-serif text-lg text-olive font-medium">Presencial &amp; Online</p>
                <p className="text-[11px]">En consulta y en tu pantalla</p>
              </div>
              <div>
                <p className="font-serif text-lg text-olive font-medium">Sin dietas milagro</p>
                <p className="text-[11px]">Hábitos que duran toda la vida</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-serif text-lg text-olive font-medium">10:00 h</p>
                <p className="text-[11px]">Apertura de consulta diaria</p>
              </div>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Asymmetrical background accent */}
              <div className="absolute -inset-3 bg-sand/50 rounded-2xl -rotate-1 -z-10" />

              {/* Main portrait image of Lidia */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-xl border border-olive/15 bg-sand/30">
                <Image
                  src="/images/lidia-llanelis-retrato.png"
                  alt="Lidia Llanelis, coach de salud integrativa y nutricionista, sonriendo con una cesta de verduras frescas mediterráneas"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center img-editorial"
                />
              </div>

              {/* Floating editorial note */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-bone p-4 sm:p-5 rounded-lg shadow-lg border border-olive/15 max-w-xs">
                <p className="text-[11px] uppercase tracking-wider text-clay font-mono">
                  Historia real &middot; España
                </p>
                <p className="font-serif text-sm sm:text-base italic text-olive mt-1 leading-snug">
                  «La comida no es un castigo ni una recompensa: es la base de tu vitalidad diaria.»
                </p>
                <p className="text-[10px] text-ink-muted mt-2">
                  — Lidia Llanelis, Fundadora
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. MARQUEE STRIP: KEYWORD PHILOSOPHY */}
      <section className="py-6 hairline-t hairline-b bg-sand/20 overflow-hidden">
        <div className="animate-marquee flex gap-12 whitespace-nowrap text-xs sm:text-sm uppercase tracking-widest text-olive/80 font-mono">
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
        </div>
      </section>

      {/* 03. STORY TEASER WITH PULL QUOTE */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden shadow-md border border-olive/15">
            <Image
              src="/images/consulta-integrativa.jpg"
              alt="Momento de diálogo sereno en consulta privada de nutrición integrativa"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover img-editorial"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-clay">
              01 &middot; Mi trayectoria
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-olive leading-tight">
              «No decidí formarme solo porque perdí 30 kg. <br />
              <span className="italic font-light text-clay">
                Lo hice porque entendí lo que nadie te cuenta.
              </span>»
            </h2>
            <div className="space-y-4 text-ink-muted text-sm sm:text-base leading-relaxed">
              <p>
                Durante años viví atrapada en el ciclo habitual: contar calorías, pasar hambre, sentir culpa los fines de semana y recuperar el peso con creces al cabo de unos meses. Mi energía estaba por los suelos y mis digestiones eran una pesadilla continua.
              </p>
              <p>
                Cuando logré perder 30 kilos de manera definitiva y saludable, descubrí que la clave nunca estuvo en la fuerza de voluntad ciega, sino en entender la fisiología, cuidar la microbiota y resolver los disparadores emocionales que nos llevan al atracón.
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
      <section className="bg-sand/30 py-24 hairline-t hairline-b">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs uppercase font-mono tracking-widest text-clay">
                02 &middot; El Método
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-olive font-normal">
                Cómo trabajamos juntas
              </h2>
              <p className="text-sm text-ink-muted leading-relaxed">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {METHOD_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-bone p-7 rounded-lg border border-olive/15 flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div className="space-y-4">
                  <span className="font-serif text-3xl text-clay font-light block">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-xl text-olive font-medium leading-snug group-hover:text-clay transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="pt-6 hairline-t mt-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-olive/70">
                    {step.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. SERVICES ROWS (NOT CARDS - EDITORIAL EXPANDING ROWS) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        <div className="space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-clay">
            03 &middot; Consultas y Acompañamiento
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-olive font-normal">
            Especialidades de consulta
          </h2>
          <p className="text-sm text-ink-muted max-w-2xl leading-relaxed">
            Cada proceso es único. Selecciona la modalidad que mejor encaja con tu situación actual, tanto si buscas una valoración puntual como un cambio integral.
          </p>
        </div>

        <div className="divide-y divide-olive/15 hairline-t hairline-b">
          {SERVICES.map((s) => (
            <div
              key={s.slug}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start sm:items-center hover:bg-sand/15 px-4 rounded-md transition-colors group"
            >
              <div className="lg:col-span-1">
                <span className="font-mono text-xs uppercase tracking-wider text-clay">
                  {s.number}
                </span>
              </div>
              <div className="lg:col-span-5 space-y-1">
                <h3 className="font-serif text-2xl sm:text-3xl text-olive group-hover:text-clay transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-ink-muted">
                  Modalidad: <span className="font-medium text-olive">{s.modality}</span>
                </p>
              </div>
              <div className="lg:col-span-4 text-xs sm:text-sm text-ink-muted leading-relaxed">
                <p>{s.shortDesc}</p>
              </div>
              <div className="lg:col-span-2 flex flex-col sm:flex-row lg:flex-col gap-2 items-start lg:items-end justify-center">
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

      {/* 06. EDITORIAL STILL LIFE BREAK & QUOTE */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative rounded-2xl overflow-hidden border border-olive/20 shadow-xl">
          <div className="relative h-[340px] sm:h-[420px] w-full">
            <Image
              src="/images/bodegon-mediterraneo.jpg"
              alt="Bodegón editorial con hortalizas de temporada sobre lino y aceite de oliva virgen extra"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover img-editorial"
            />
            <div className="absolute inset-0 bg-olive-dark/45" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 sm:p-12 text-bone max-w-3xl mx-auto space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-sand/80">
              Alimentación de verdad
            </span>
            <p className="font-serif text-2xl sm:text-4xl italic font-light leading-snug">
              «Comer sano no consiste en contar gramos en una báscula de cocina, sino en nutrir tus células con calma y sabor.»
            </p>
            <p className="text-xs uppercase tracking-wider text-sand/70">
              — Lidia Llanelis
            </p>
          </div>
        </div>
      </section>

      {/* 07. REVIEWS & GOOGLE TRUST STRIP */}
      <section className="bg-sand/30 py-24 hairline-t hairline-b">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-olive/20 bg-bone text-xs text-olive">
              <span className="text-clay">★</span>
              <span className="font-semibold">{SITE_CONFIG.googleRating} en Google</span>
              <span className="text-ink-muted">· {SITE_CONFIG.googleReviewsCount} reseñas reales verificadas</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-olive font-normal">
              La experiencia de mis pacientes
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              Reseñas auténticas y transparentes de personas que han confiado en mi consulta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GOOGLE_REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="bg-bone p-8 rounded-lg border border-olive/15 flex flex-col justify-between space-y-6 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-clay text-sm" aria-label="5 estrellas sobre 5">
                      {'★'.repeat(rev.rating)}
                    </div>
                    <span className="text-[11px] font-mono text-ink-muted">{rev.date}</span>
                  </div>
                  <p className="font-serif text-base text-olive italic leading-relaxed">
                    «{rev.quote}»
                  </p>
                </div>
                <div className="pt-4 hairline-t flex items-center justify-between text-xs">
                  <span className="font-medium text-olive">{rev.author}</span>
                  <span className="text-ink-muted text-[11px] flex items-center gap-1">
                    <span className="text-emerald-700">✓</span> {rev.source}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/resultados"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-olive font-semibold hover:text-clay transition-colors"
            >
              <span>Ver detalles de resultados y transparencia de casos</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 08. INSTAGRAM GRID (PLACEHOLDERS) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-clay">
              Comunidad &middot; Consejos diarios
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-olive font-normal mt-1">
              Sígueme en Instagram
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative aspect-square rounded-lg overflow-hidden border border-olive/15 group">
            <Image
              src="/images/infusion-cuaderno.jpg"
              alt="Momento de reflexión con infusión de hierbas y notas de hábitos"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-olive/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-bone text-xs font-mono">
              Ver publicación
            </div>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden border border-olive/15 group">
            <Image
              src="/images/preparacion-alimentos.jpg"
              alt="Preparación de alimentos frescos y ramillete de hierbas aromáticas"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-olive/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-bone text-xs font-mono">
              Ver publicación
            </div>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden border border-olive/15 group">
            <Image
              src="/images/bodegon-mediterraneo.jpg"
              alt="Ingredientes mediterráneos saludables y de temporada"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-olive/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-bone text-xs font-mono">
              Ver publicación
            </div>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden border border-olive/15 group">
            <Image
              src="/images/lidia-llanelis-retrato.png"
              alt="Lidia Llanelis compartiendo claves nutricionales en consulta"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-olive/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-bone text-xs font-mono">
              Ver publicación
            </div>
          </div>
        </div>
      </section>

      {/* 09. LEAD MAGNET TEASER */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-sand/40 border border-olive/20 rounded-2xl p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
              Recurso gratuito de bienvenida
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-olive font-normal leading-tight">
              {SITE_CONFIG.leadMagnetTitle}
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              {SITE_CONFIG.leadMagnetSubtitle}
            </p>
            <p className="text-xs text-olive/80">
              Incluye guía de platos equilibrados, lista de la compra consciente y ejercicios de pausa digestiva.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end">
            <Link
              href="/recursos"
              className="inline-flex items-center justify-center px-8 py-4 rounded-sm bg-olive text-bone text-xs uppercase tracking-widest font-medium hover:bg-clay transition-colors shadow-md w-full sm:w-auto text-center"
            >
              Descarga la guía gratuita
            </Link>
            <p className="text-[11px] text-ink-muted mt-2">
              Sin spam. Solo contenido de valor en tu buzón.
            </p>
          </div>
        </div>
      </section>

      {/* 10. FAQ TEASER */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-clay">
            Dudas habituales
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-olive font-normal">
            Preguntas frecuentes antes de empezar
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.slice(0, 4).map((faq) => (
            <details
              key={faq.id}
              className="group bg-bone rounded-lg border border-olive/15 p-5 open:bg-sand/20 transition-colors"
            >
              <summary className="flex items-center justify-between cursor-pointer font-serif text-lg text-olive font-medium">
                <span>{faq.question}</span>
                <span className="ml-4 text-clay transition-transform group-open:rotate-45 text-xl font-light">
                  +
                </span>
              </summary>
              <div className="pt-4 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-olive/10 mt-3">
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

      {/* 11. FINAL BOOKING CTA BANNER */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-olive text-bone rounded-2xl p-10 sm:p-16 lg:p-20 text-center space-y-8 relative overflow-hidden">
          <div className="space-y-4 max-w-2xl mx-auto relative z-10">
            <span className="text-xs uppercase font-mono tracking-widest text-sand/80">
              Da el primer paso hoy
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-bone leading-tight">
              Empieza a cuidar tu salud con calma y acompañamiento cercano
            </h2>
            <p className="text-xs sm:text-base text-sand/80 leading-relaxed">
              Elige entre consulta presencial u online. Sin compromisos forzados: evaluamos tu caso y definimos el camino más sensato para ti.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              href="/reservar"
              className="w-full sm:w-auto px-8 py-4 bg-clay text-bone text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-clay-hover transition-colors shadow-lg"
            >
              Reserva tu cita previa
            </Link>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 border border-sand/40 text-sand text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-bone/10 transition-colors"
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
