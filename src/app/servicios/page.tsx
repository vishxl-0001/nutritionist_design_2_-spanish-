import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SERVICES, SITE_CONFIG } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Servicios de Nutrición y Salud Integrativa | Lidia Llanelis',
  description:
    'Consultas y programas de nutrición integrativa en España: consulta nutricional, coaching de salud, nutrición online y pérdida de peso consciente. Presencial y online.',
};

export default function ServiciosPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      {/* Header */}
      <section className="space-y-6 max-w-3xl">
        <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
          Acompañamiento &middot; Consultas Privadas
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-olive font-normal leading-[1.1] tracking-tight">
          Servicios diseñados para tu realidad personal.
        </h1>
        <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
          Sin plantillas estandarizadas. Cada servicio está estructurado para ofrecerte el nivel de profundidad, flexibilidad y seguimiento que tu cuerpo y tu estilo de vida precisan.
        </p>
      </section>

      {/* Services List Rows (not cards) */}
      <section className="divide-y divide-olive/15 hairline-t hairline-b">
        {SERVICES.map((s) => (
          <article
            key={s.slug}
            className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-sand/15 transition-colors p-4 rounded-xl group"
          >
            <div className="lg:col-span-1">
              <span className="font-serif text-3xl text-clay font-light">
                {s.number}
              </span>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <h2 className="font-serif text-2xl sm:text-3xl text-olive group-hover:text-clay transition-colors leading-snug">
                {s.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="px-2.5 py-1 rounded-full bg-sand/40 text-olive font-medium">
                  {s.modality}
                </span>
                <span className="text-ink-muted">
                  Duración: <strong className="text-olive">{s.duration}</strong>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed pt-2">
                {s.shortDesc}
              </p>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-wider text-olive font-semibold">
                Indicado especialmente para:
              </p>
              <ul className="text-xs text-ink-muted space-y-1.5">
                {s.forWhom.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-clay">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 text-xs">
                <span className="text-ink-muted">Inversión: </span>
                <strong className="text-olive">{s.price}</strong>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-2.5 items-start lg:items-end justify-center pt-2 lg:pt-0">
              <Link
                href={`/servicios/${s.slug}`}
                className="w-full lg:w-auto text-center px-4 py-2 border border-olive/30 text-olive text-xs uppercase tracking-wider font-medium hover:bg-sand/30 transition-colors rounded-sm"
              >
                Ver detalle
              </Link>
              <Link
                href="/reservar"
                className="w-full lg:w-auto text-center px-5 py-2.5 bg-olive text-bone text-xs uppercase tracking-wider font-medium hover:bg-clay transition-colors rounded-sm shadow-sm"
              >
                Reservar
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Online & In-person note */}
      <section className="bg-sand/25 p-8 sm:p-12 rounded-2xl border border-olive/15 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-clay">
            Flexibilidad geográfica
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-olive">
            ¿Presencial u Online?
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            Puedes acudir a mi consulta física en {SITE_CONFIG.city} o realizar todas tus sesiones por videollamada desde cualquier punto de España o el extranjero en un entorno privado, seguro y cómodo.
          </p>
        </div>
        <div className="space-y-3 text-xs text-ink-muted border-l-0 md:border-l border-olive/15 md:pl-8">
          <p className="font-medium text-olive text-sm">
            ¿No sabes cuál es el servicio adecuado para ti?
          </p>
          <p>
            Escríbeme por WhatsApp contándome brevemente tu objetivo y te orientaré de forma personalizada sobre qué modalidad se adapta mejor a lo que buscas.
          </p>
          <div className="pt-2">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-clay font-medium uppercase tracking-wider text-xs hover:underline"
            >
              Consultar por WhatsApp &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
