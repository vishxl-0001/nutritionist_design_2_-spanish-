import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_CONFIG, GOOGLE_REVIEWS } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Resultados y Reseñas Verificadas | Lidia Llanelis',
  description:
    'Opiniones reales de pacientes y marco de casos clínicos con consentimiento previo. Transparencia, honestidad y calificación 5,0 en Google.',
};

export default function ResultadosPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      {/* Header */}
      <section className="space-y-6 max-w-3xl">
        <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
          Honestidad &middot; Transparencia &middot; Opiniones Reales
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-olive font-normal leading-[1.1] tracking-tight">
          Resultados medidos en vitalidad, no solo en números.
        </h1>
        <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
          En esta consulta no encontrarás fotos retocadas, promesas irreales ni testimonios inventados. Comparto de forma honesta las valoraciones reales de quienes han confiado en mi trabajo y cómo abordamos los casos clínicos.
        </p>
      </section>

      {/* Google Reviews Official Strip */}
      <section className="bg-sand/30 p-8 sm:p-12 rounded-2xl border border-olive/15 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 hairline-b">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-clay text-lg">★</span>
              <span className="font-serif text-3xl text-olive font-semibold">{SITE_CONFIG.googleRating}</span>
              <span className="text-xs font-mono text-ink-muted uppercase">/ 5,0 de puntuación media</span>
            </div>
            <p className="text-xs text-ink-muted">
              Basado en {SITE_CONFIG.googleReviewsCount} reseñas reales verificadas en el perfil de Google My Business.
            </p>
          </div>

          <div>
            <a
              href={SITE_CONFIG.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-olive text-bone text-xs uppercase tracking-wider font-medium hover:bg-clay transition-colors"
            >
              <span>Ver reseñas en Google</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        {/* The 3 Real Google Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GOOGLE_REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-bone p-7 rounded-xl border border-olive/15 flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-clay text-sm" aria-label="5 estrellas">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <span className="text-[11px] font-mono text-ink-muted">{rev.date}</span>
                </div>
                <p className="font-serif text-sm sm:text-base italic text-olive leading-relaxed">
                  «{rev.quote}»
                </p>
              </div>
              <div className="pt-3 hairline-t flex items-center justify-between text-xs">
                <span className="font-medium text-olive">{rev.author}</span>
                <span className="text-emerald-700 text-[11px]">✓ Reseña verificada</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case studies structure as CLEAR PLACEHOLDER ONLY */}
      <section className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-clay">
            Casos de acompañamiento &middot; Estructura clínica
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-olive">
            Casos reales y evolución
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted max-w-2xl leading-relaxed">
            Por estricta deontología profesional y cumplimiento de la normativa española de protección de datos de salud (RGPD y LOPDGDD), la publicación de casos de evolución detallada requiere consentimiento expreso por escrito de cada paciente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder Case 1 */}
          <div className="bg-bone p-8 rounded-xl border border-dashed border-olive/30 space-y-4 relative">
            <span className="inline-block px-2.5 py-1 rounded bg-sand/50 text-[10px] font-mono uppercase text-olive font-semibold">
              [TO_FILL: Caso Clínico 01 - Requiere consentimiento escrito firmado]
            </span>
            <h3 className="font-serif text-xl text-olive font-medium">
              Evolución en inflamación digestiva y fatiga crónica
            </h3>
            <div className="space-y-2 text-xs text-ink-muted leading-relaxed">
              <p>
                <strong>Punto de partida [TO_FILL]:</strong> Paciente mujer de 38 años con hinchazón severa postprandial y sensación de estancamiento metabólico.
              </p>
              <p>
                <strong>Estrategia aplicada:</strong> Protocolo de reordenación de comidas, apoyo digestivo con alimentos fermentados suaves y gestión de crononutrición.
              </p>
              <p>
                <strong>Resultado observado [TO_FILL]:</strong> Reducción sustancial del dolor abdominal en 4 semanas y estabilización de energía sin cambios drásticos.
              </p>
            </div>
            <p className="text-[11px] text-ink-muted/80 italic pt-2">
              * Datos anonimizados y documentados para fines de divulgación previa autorización del paciente.
            </p>
          </div>

          {/* Placeholder Case 2 */}
          <div className="bg-bone p-8 rounded-xl border border-dashed border-olive/30 space-y-4 relative">
            <span className="inline-block px-2.5 py-1 rounded bg-sand/50 text-[10px] font-mono uppercase text-olive font-semibold">
              [TO_FILL: Caso Clínico 02 - Requiere consentimiento escrito firmado]
            </span>
            <h3 className="font-serif text-xl text-olive font-medium">
              Transición de dietas restrictivas a pauta saciante
            </h3>
            <div className="space-y-2 text-xs text-ink-muted leading-relaxed">
              <p>
                <strong>Punto de partida [TO_FILL]:</strong> Varón de 46 años con historial de pérdidas y ganancias de peso repetidas (efecto yo-yo) durante más de 10 años.
              </p>
              <p>
                <strong>Estrategia aplicada:</strong> Eliminación de la báscula semanal, aumento del aporte de proteína vegetal y grasas saludables, trabajo en horarios de comida.
              </p>
              <p>
                <strong>Resultado observado [TO_FILL]:</strong> Desaparición de los picos de ansiedad vespertina y pérdida ponderal sostenida en el tiempo.
              </p>
            </div>
            <p className="text-[11px] text-ink-muted/80 italic pt-2">
              * Datos anonimizados y documentados para fines de divulgación previa autorización del paciente.
            </p>
          </div>
        </div>
      </section>

      {/* Legal & Medical Transparency Disclaimer */}
      <section className="bg-sand/20 p-6 sm:p-8 rounded-xl border border-olive/15 text-xs text-ink-muted space-y-3">
        <h4 className="font-serif text-base text-olive font-medium">
          Aviso legal sobre resultados y testimonios
        </h4>
        <p className="leading-relaxed">
          {SITE_CONFIG.testimonialsNotice}
        </p>
        <p className="leading-relaxed">
          {SITE_CONFIG.medicalDisclaimer}
        </p>
      </section>

      {/* CTA */}
      <section className="bg-olive text-bone p-10 sm:p-14 rounded-2xl text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl font-light max-w-2xl mx-auto leading-tight">
          Comienza a escribir tu propia historia de bienestar
        </h2>
        <p className="text-xs sm:text-sm text-sand/80 max-w-xl mx-auto leading-relaxed">
          Agenda tu primera sesión y analicemos juntas las mejores alternativas para tu salud.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/reservar"
            className="px-8 py-3.5 bg-clay text-bone text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-clay-hover transition-colors"
          >
            Reserva tu cita previa
          </Link>
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 border border-sand/40 text-sand text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-bone/10 transition-colors"
          >
            Escríbeme por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
