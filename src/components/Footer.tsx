import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG, SERVICES } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="bg-olive-dark text-bone relative overflow-hidden pt-20 pb-12 hairline-t border-olive/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Giant architectural signature */}
        <div className="pb-16 border-b border-bone/10">
          <p className="text-xs uppercase tracking-[0.25em] text-sand/60 mb-2 font-mono">
            Consulta de Salud Integrativa &middot; España
          </p>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-bone font-light">
            Lidia Llanelis
          </h2>
        </div>

        {/* Multi-column editorial links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-bone/10 text-sm">
          {/* Col 1: Bio summary */}
          <div className="space-y-4">
            <p className="font-serif text-lg text-sand font-normal">
              Acompañamiento clínico y humano para recuperar tu bienestar digestivo, energía y paz con la comida.
            </p>
            <p className="text-sand/70 text-xs leading-relaxed">
              Consultas presenciales y online para toda España. Método no pesocentrista basado en evidencia y experiencia vital.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-bone/20 text-xs text-sand">
                <span className="text-clay">★</span> {SITE_CONFIG.googleRating} en Google &middot; Reseñas verificadas
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="font-serif text-base tracking-wide text-sand mb-4 uppercase text-[11px] font-semibold">
              Explorar
            </h3>
            <ul className="space-y-2.5 text-xs text-sand/80">
              <li>
                <Link href="/sobre-mi" className="hover:text-bone transition-colors">
                  Sobre mí y mi historia
                </Link>
              </li>
              <li>
                <Link href="/metodo" className="hover:text-bone transition-colors">
                  El Método en 4 etapas
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-bone transition-colors">
                  Servicios y consultas
                </Link>
              </li>
              <li>
                <Link href="/resultados" className="hover:text-bone transition-colors">
                  Resultados y reseñas verificadas
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="hover:text-bone transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="hover:text-bone transition-colors">
                  Guía gratuita de primeros pasos
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="font-serif text-base tracking-wide text-sand mb-4 uppercase text-[11px] font-semibold">
              Especialidades
            </h3>
            <ul className="space-y-2.5 text-xs text-sand/80">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicios/${s.slug}`} className="hover:text-bone transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/reservar"
                  className="inline-block text-clay hover:text-bone font-medium underline underline-offset-4"
                >
                  Reserva tu cita previa &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact and Hours */}
          <div className="space-y-3">
            <h3 className="font-serif text-base tracking-wide text-sand mb-4 uppercase text-[11px] font-semibold">
              Contacto Directo
            </h3>
            <p className="text-xs text-sand/80">
              <span className="block text-bone font-medium">WhatsApp y Teléfono:</span>
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="hover:text-clay transition-colors block mt-0.5"
              >
                {SITE_CONFIG.phone}
              </a>
            </p>
            <p className="text-xs text-sand/80">
              <span className="block text-bone font-medium">Horario de atención:</span>
              {SITE_CONFIG.hoursSummary}
            </p>
            <p className="text-xs text-sand/80">
              <span className="block text-bone font-medium">Ubicación:</span>
              {SITE_CONFIG.address} &middot; {SITE_CONFIG.city}
            </p>
            <p className="text-xs text-sand/80">
              <span className="block text-bone font-medium">Instagram:</span>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-clay underline"
              >
                {SITE_CONFIG.instagramHandle}
              </a>
            </p>
          </div>
        </div>

        {/* Medical disclaimer note */}
        <div className="py-8 text-[11px] text-sand/60 leading-relaxed border-b border-bone/10">
          <p className="max-w-4xl">{SITE_CONFIG.medicalDisclaimer}</p>
        </div>

        {/* Legal and copyright footer bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-sand/60 gap-4">
          <p>&copy; {new Date().getFullYear()} Lidia Llanelis. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/aviso-legal" className="hover:text-bone transition-colors">
              Aviso legal
            </Link>
            <Link href="/politica-de-privacidad" className="hover:text-bone transition-colors">
              Política de privacidad
            </Link>
            <Link href="/politica-de-cookies" className="hover:text-bone transition-colors">
              Política de cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
