import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { FAQS, SITE_CONFIG } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | Lidia Llanelis',
  description:
    'Resuelve todas tus dudas sobre las consultas de nutrición integrativa con Lidia Llanelis: precios, modalidad online, preparación previa y cancelación.',
};

export default function PreguntasFrecuentesPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
      {/* Header */}
      <section className="space-y-6 text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
          Dudas &middot; Respuestas Claras
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-olive font-normal leading-[1.1] tracking-tight">
          Preguntas frecuentes
        </h1>
        <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
          Todo lo que necesitas saber antes de dar el paso para agendar tu primera consulta con total tranquilidad.
        </p>
      </section>

      {/* Accordion list */}
      <section className="space-y-4">
        {FAQS.map((faq, index) => (
          <details
            key={faq.id}
            open={index === 0}
            className="group bg-bone rounded-xl border border-olive/15 p-6 open:bg-sand/20 transition-all duration-200"
          >
            <summary className="flex items-center justify-between cursor-pointer font-serif text-lg sm:text-xl text-olive font-medium select-none">
              <span className="pr-4">{faq.question}</span>
              <span className="text-clay text-2xl font-light transform transition-transform group-open:rotate-45 shrink-0">
                +
              </span>
            </summary>
            <div className="pt-4 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-olive/10 mt-4">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </section>

      {/* WhatsApp Help Box */}
      <section className="bg-sand/35 p-8 sm:p-10 rounded-2xl border border-olive/15 text-center space-y-4">
        <h2 className="font-serif text-2xl text-olive">
          ¿Tienes alguna otra pregunta específica?
        </h2>
        <p className="text-xs sm:text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
          Si tu situación particular no aparece reflejada aquí, puedes escribirme directamente por WhatsApp o llamarme y te responderé en persona.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-olive text-bone text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-clay transition-colors"
          >
            Preguntar por WhatsApp
          </a>
          <Link
            href="/contacto"
            className="px-6 py-3 border border-olive/30 text-olive text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-sand/40 transition-colors"
          >
            Ir a formulario de contacto
          </Link>
        </div>
      </section>
    </div>
  );
}
