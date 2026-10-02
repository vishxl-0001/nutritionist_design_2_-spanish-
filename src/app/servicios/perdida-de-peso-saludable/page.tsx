import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SERVICES, SITE_CONFIG } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Pérdida de Peso Saludable y Consciente | Lidia Llanelis',
  description:
    'El método propio de Lidia Llanelis nacido de su experiencia real de 30 kg menos y la ciencia de la nutrición integrativa sin efecto rebote.',
};

export default function PerdidaDePesoSaludablePage() {
  const service = SERVICES.find((s) => s.slug === 'perdida-de-peso-saludable')!;

  return (
    <div className="py-12 sm:py-20 space-y-16 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
      {/* Breadcrumb */}
      <nav className="text-xs font-mono uppercase tracking-wider text-ink-muted flex items-center gap-2">
        <Link href="/servicios" className="hover:text-olive">
          Servicios
        </Link>
        <span>/</span>
        <span className="text-clay">{service.title}</span>
      </nav>

      {/* Hero */}
      <section className="space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest text-clay font-medium">
          Servicio {service.number}
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-olive font-normal leading-tight">
          {service.title}
        </h1>
        <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-3xl">
          {service.fullDesc}
        </p>

        <div className="flex flex-wrap items-center gap-6 pt-4 text-xs">
          <div className="bg-sand/30 px-4 py-2 rounded-md">
            <span className="text-ink-muted block text-[11px]">Modalidad</span>
            <span className="font-medium text-olive">{service.modality}</span>
          </div>
          <div className="bg-sand/30 px-4 py-2 rounded-md">
            <span className="text-ink-muted block text-[11px]">Duración estimada</span>
            <span className="font-medium text-olive">{service.duration}</span>
          </div>
          <div className="bg-sand/30 px-4 py-2 rounded-md">
            <span className="text-ink-muted block text-[11px]">Inversión</span>
            <span className="font-medium text-olive">{service.price}</span>
          </div>
        </div>
      </section>

      {/* Narrative quote */}
      <section className="p-8 bg-sand/30 border-l-4 border-clay rounded-r-xl">
        <p className="font-serif text-xl sm:text-2xl italic text-olive">
          «30 kilos menos me enseñaron que el cuerpo no se transforma desde el odio ni la culpa, sino dándole exactamente los nutrientes y el descanso que necesita para autorregularse.»
        </p>
        <p className="text-xs font-mono uppercase tracking-wider text-clay mt-3">
          — Lidia Llanelis
        </p>
      </section>

      {/* Grid: What is included & For whom */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        <div className="bg-bone p-8 rounded-xl border border-olive/15 space-y-4">
          <h2 className="font-serif text-xl text-olive font-medium">
            ¿Qué incluye este acompañamiento?
          </h2>
          <ul className="text-xs sm:text-sm text-ink-muted space-y-3">
            {service.includes.map((inc, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-clay font-bold">✓</span>
                <span>{inc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-bone p-8 rounded-xl border border-olive/15 space-y-4">
          <h2 className="font-serif text-xl text-olive font-medium">
            ¿Para quién está pensado?
          </h2>
          <ul className="text-xs sm:text-sm text-ink-muted space-y-3">
            {service.forWhom.map((whom, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-clay font-bold">·</span>
                <span>{whom}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-sand/35 p-8 sm:p-12 rounded-2xl border border-olive/15 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="font-serif text-2xl text-olive">
            Deja atrás las dietas restrictivas para siempre
          </h3>
          <p className="text-xs text-ink-muted">
            Da el primer paso hacia una pérdida de peso sana, definitiva y respetuosa con tu bienestar.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <Link
            href="/reservar"
            className="px-6 py-3 bg-olive text-bone text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-clay transition-colors"
          >
            Reserva tu cita
          </Link>
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 border border-olive/30 text-olive text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-sand/40 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
