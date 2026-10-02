import React from 'react';
import Link from 'next/link';
import { NAV_LINKS, SITE_CONFIG } from '@/data/siteData';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-6 sm:px-8">
      <div className="max-w-xl text-center space-y-8 bg-bone p-10 sm:p-14 rounded-2xl border border-olive/15 shadow-sm">
        <div className="space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-clay font-bold">
            Error 404 &middot; Enlace no disponible
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-olive font-normal">
            Página no encontrada
          </h1>
          <p className="text-sm text-ink-muted leading-relaxed">
            Parece que la dirección a la que intentas acceder no existe o ha cambiado de lugar. Puedes regresar a la portada o navegar por las secciones principales de la consulta.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="px-6 py-3 bg-olive text-bone text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-clay transition-colors"
          >
            Volver a la página principal
          </Link>
          <Link
            href="/reservar"
            className="px-6 py-3 border border-olive/30 text-olive text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-sand/30 transition-colors"
          >
            Reserva tu cita
          </Link>
        </div>

        <div className="pt-6 hairline-t">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-3">
            Otras secciones recomendadas:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-olive">
            {NAV_LINKS.slice(0, 5).map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-clay underline">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="text-[11px] text-ink-muted/80">
          ¿Necesitas ayuda directa? Escríbeme al WhatsApp:{' '}
          <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="underline text-olive">
            {SITE_CONFIG.phone}
          </a>
        </p>
      </div>
    </div>
  );
}
