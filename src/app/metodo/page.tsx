import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { METHOD_STEPS, SITE_CONFIG } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'El Método | Lidia Llanelis',
  description:
    'Conoce el método integrativo en 4 fases de Lidia Llanelis: desde la primera consulta y plan personalizado hasta el acompañamiento continuado y hábitos definitivos.',
};

export default function MetodoPage() {
  return (
    <div className="py-12 sm:py-20 space-y-24 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      {/* Page Header */}
      <section className="space-y-6 max-w-3xl">
        <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
          Estructura &middot; Proceso &middot; Evidencia
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-olive font-normal leading-[1.1] tracking-tight">
          El Método en 4 etapas: <br />
          <span className="italic font-light text-clay">transformación gradual y sostenible.</span>
        </h1>
        <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
          Los atajos y las dietas restrictivas no funcionan a largo plazo porque chocan contra tu biología y tu día a día. Mi método acompaña a tu organismo paso a paso, respetando tus tiempos y consolidando cada logro de forma definitiva.
        </p>
      </section>

      {/* Numbered Vertical Timeline */}
      <section className="space-y-16 relative">
        <div className="space-y-12">
          {METHOD_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-8 sm:p-12 rounded-2xl bg-bone border border-olive/15 shadow-sm relative overflow-hidden"
            >
              {/* Giant numeral watermark */}
              <div className="lg:col-span-2 flex flex-col justify-start">
                <span className="font-serif text-6xl sm:text-7xl font-light text-clay/80 leading-none">
                  {step.number}
                </span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-ink-muted mt-2">
                  Etapa {idx + 1} de 4
                </span>
              </div>

              {/* Core description */}
              <div className="lg:col-span-6 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-clay">
                    {step.subtitle}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-olive font-normal">
                    {step.title}
                  </h2>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {step.description}
                </p>
                <div className="pt-2 text-xs text-olive/90 leading-relaxed font-medium bg-sand/20 p-4 rounded-md border-l-2 border-olive/30">
                  {step.detail}
                </div>
              </div>

              {/* Key benefit pill */}
              <div className="lg:col-span-4 bg-sand/30 p-6 rounded-xl border border-olive/10 space-y-3">
                <p className="font-mono text-[11px] uppercase tracking-wider text-olive font-semibold">
                  ¿Qué consigues en esta fase?
                </p>
                <ul className="text-xs text-ink-muted space-y-2">
                  {idx === 0 && (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-clay">✓</span>
                        <span>Identificación precisa de desequilibrios y causas raíz.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-clay">✓</span>
                        <span>Alivio de la ansiedad al tener un mapa claro de actuación.</span>
                      </li>
                    </>
                  )}
                  {idx === 1 && (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-clay">✓</span>
                        <span>Menús sabrosos adaptados a tu compra y cocina habitual.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-clay">✓</span>
                        <span>Disminución inmediata de la pesadez y la inflamación.</span>
                      </li>
                    </>
                  )}
                  {idx === 2 && (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-clay">✓</span>
                        <span>Soporte cercano para no abandonar ante semanas difíciles.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-clay">✓</span>
                        <span>Ajustes en tiempo real según cómo responde tu digestión.</span>
                      </li>
                    </>
                  )}
                  {idx === 3 && (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-clay">✓</span>
                        <span>Tranquilidad y libertad total ante cualquier menú o evento social.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-clay">✓</span>
                        <span>Mantenimiento del peso y energía constante sin efecto rebote.</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Break with Consultation scene */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-sand/30 p-8 sm:p-12 rounded-2xl border border-olive/15">
        <div className="lg:col-span-6 relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/images/consulta-integrativa.jpg"
            alt="Consulta serena y personalizada en Lidia Llanelis Nutrición"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover img-editorial"
          />
        </div>
        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-clay">
            Calidez y proximidad
          </span>
          <h2 className="font-serif text-3xl text-olive">
            La diferencia de un acompañamiento humano
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            Una pauta en un papel se queda guardada en un cajón si no va respaldada por una persona que comprende tus dificultades cotidianas. En cada sesión revisamos no solo lo que comes, sino cómo te sientes, cómo duermes y cómo interactúa tu rutina con tus metas.
          </p>
          <div className="pt-2">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-olive font-semibold hover:text-clay transition-colors"
            >
              <span>Explora nuestras modalidades de consulta</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-olive text-bone p-10 sm:p-14 rounded-2xl text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl font-light max-w-2xl mx-auto leading-tight">
          ¿Preparada para comenzar la primera etapa?
        </h2>
        <p className="text-xs sm:text-sm text-sand/80 max-w-xl mx-auto leading-relaxed">
          Reserva tu cita previa ahora y demos el primer paso con serenidad y claridad.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/reservar"
            className="px-8 py-3.5 bg-clay text-bone text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-clay-hover transition-colors"
          >
            Reserva tu primera consulta
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
