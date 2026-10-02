import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_CONFIG, GOOGLE_REVIEWS } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Resultados y Reseñas Verificadas | Lidia Llanelis',
  description:
    'Opiniones reales de pacientes y marco de casos clínicos del Método Equilibrio 360º. Transparencia, honestidad y calificación 5,0 en Google.',
};

export default function ResultadosPage() {
  return (
    <div className="py-8 sm:py-20 space-y-16 sm:space-y-20 max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 overflow-x-hidden">
      {/* Header */}
      <section className="space-y-4 sm:space-y-6 max-w-3xl">
        <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
          Honestidad &middot; Transparencia &middot; Google Reseñas Reales
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-olive font-normal leading-[1.1] tracking-tight">
          Resultados medidos en vitalidad, no solo en números.
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-ink-muted leading-relaxed">
          En esta consulta no encontrarás testimonios anónimos inventados ni falsas promesas. Aquí puedes leer las valoraciones reales de quienes han recorrido el Método Equilibrio 360º y las respuestas sinceras que comparto con cada paciente.
        </p>
      </section>

      {/* Google Reviews Official Strip */}
      <section className="bg-sand/30 p-6 sm:p-12 rounded-2xl border border-olive/15 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 hairline-b">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-clay text-2xl">★</span>
              <span className="font-serif text-3xl sm:text-4xl text-olive font-semibold">{SITE_CONFIG.googleRating}</span>
              <span className="text-xs font-mono text-ink-muted uppercase">/ 5,0 en Google Reseñas</span>
            </div>
            <p className="text-xs text-ink-muted">
              Reseñas reales y contrastadas en el perfil de Google My Business de Lidia Llanelis.
            </p>
          </div>

          <div>
            <a
              href={SITE_CONFIG.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-olive text-bone text-xs uppercase tracking-wider font-medium hover:bg-clay transition-colors w-full sm:w-auto text-center"
            >
              <span>Ver perfil en Google</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        {/* The 3 Real Google Reviews with Verbatim Responses */}
        <div className="space-y-8">
          {GOOGLE_REVIEWS.map((rev, idx) => (
            <article
              key={idx}
              className="bg-bone p-6 sm:p-10 rounded-2xl border border-olive/15 space-y-6 shadow-sm"
            >
              {/* Review Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 hairline-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-olive/10 text-olive flex items-center justify-center font-serif text-base font-semibold">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-olive font-medium">
                      {rev.author}
                    </h3>
                    <p className="text-[11px] text-ink-muted font-mono">
                      {rev.reviewCount} &middot; {rev.timeAgo} ({rev.date})
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex text-clay text-base" aria-label="5 estrellas sobre 5">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <span className="text-emerald-700 text-xs font-semibold ml-1">
                    ✓ Verificada en Google
                  </span>
                </div>
              </div>

              {/* Review Quote Body */}
              <div className="text-xs sm:text-sm text-olive/90 leading-relaxed font-serif italic whitespace-pre-line space-y-2">
                <p>«{rev.quote}»</p>
              </div>

              {/* Real Owner Response from Lidia */}
              {rev.ownerResponse && (
                <div className="bg-sand/35 p-5 sm:p-6 rounded-xl border-l-4 border-clay space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">💚</span>
                    <p className="font-mono text-xs uppercase tracking-wider text-clay font-bold">
                      Respuesta de Lidia Llanelis (Propietaria)
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed whitespace-pre-line">
                    {rev.ownerResponse}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Case studies structure as CLEAR PLACEHOLDER ONLY */}
      <section className="space-y-6 sm:space-y-8">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
            Casos de acompañamiento &middot; Estructura clínica
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-olive">
            Evolución de casos con consentimiento
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted max-w-2xl leading-relaxed">
            Por estricta deontología sanitaria y cumplimiento de la normativa española de protección de datos de salud (RGPD y LOPDGDD), cualquier caso clínico compartido públicamente requiere autorización expresa previa y por escrito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Placeholder Case 1 */}
          <div className="bg-bone p-6 sm:p-8 rounded-xl border border-dashed border-olive/30 space-y-4 relative">
            <span className="inline-block px-2.5 py-1 rounded bg-sand/50 text-[10px] font-mono uppercase text-olive font-semibold">
              [TO_FILL: Caso Clínico 01 - Requiere consentimiento escrito firmado]
            </span>
            <h3 className="font-serif text-lg sm:text-xl text-olive font-medium">
              Evolución en inflamación digestiva y fatiga crónica
            </h3>
            <div className="space-y-2 text-xs text-ink-muted leading-relaxed">
              <p>
                <strong>Punto de partida [TO_FILL]:</strong> Paciente mujer con hinchazón severa postprandial y sensación de estancamiento metabólico.
              </p>
              <p>
                <strong>Estrategia aplicada:</strong> Protocolo de reordenación de comidas, apoyo digestivo con alimentos fermentados suaves y gestión de crononutrición con el Método Equilibrio 360º.
              </p>
              <p>
                <strong>Resultado observado [TO_FILL]:</strong> Reducción sustancial del malestar abdominal en 4 semanas y recuperación de energía diaria.
              </p>
            </div>
            <p className="text-[11px] text-ink-muted/80 italic pt-2">
              * Datos anonimizados y documentados para fines de divulgación previa autorización del paciente.
            </p>
          </div>

          {/* Placeholder Case 2 */}
          <div className="bg-bone p-6 sm:p-8 rounded-xl border border-dashed border-olive/30 space-y-4 relative">
            <span className="inline-block px-2.5 py-1 rounded bg-sand/50 text-[10px] font-mono uppercase text-olive font-semibold">
              [TO_FILL: Caso Clínico 02 - Requiere consentimiento escrito firmado]
            </span>
            <h3 className="font-serif text-lg sm:text-xl text-olive font-medium">
              Transición de dietas restrictivas a pauta saciante
            </h3>
            <div className="space-y-2 text-xs text-ink-muted leading-relaxed">
              <p>
                <strong>Punto de partida [TO_FILL]:</strong> Paciente con historial de efecto yo-yo durante más de una década.
              </p>
              <p>
                <strong>Estrategia aplicada:</strong> Eliminación de la báscula semanal, aumento del aporte de proteína de calidad y grasas saludables, y educación en autorregulación.
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
      <section className="bg-olive text-bone p-8 sm:p-14 rounded-2xl text-center space-y-6">
        <h2 className="font-serif text-2xl sm:text-4xl font-light max-w-2xl mx-auto leading-tight">
          Comienza a escribir tu propia historia de bienestar
        </h2>
        <p className="text-xs sm:text-sm text-sand/80 max-w-xl mx-auto leading-relaxed">
          Agenda tu primera sesión y analicemos juntas las mejores alternativas para tu salud con el Método Equilibrio 360º.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
          <Link
            href="/reservar"
            className="w-full sm:w-auto px-8 py-3.5 bg-clay text-bone text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-clay-hover transition-colors text-center"
          >
            Reserva tu cita previa
          </Link>
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 border border-sand/40 text-sand text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-bone/10 transition-colors text-center"
          >
            Escríbeme por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
