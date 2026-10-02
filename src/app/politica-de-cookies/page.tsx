import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies | Lidia Llanelis',
  description: 'Información detallada sobre el uso de cookies propias y de terceros en la web de Lidia Llanelis.',
};

export default function PoliticaCookiesPage() {
  return (
    <div className="py-12 sm:py-20 space-y-12 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-sm text-ink-muted leading-relaxed">
      <div className="space-y-4">
        <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
          Cookies &middot; Transparencia Técnica
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-olive font-normal">
          Política de Cookies
        </h1>
        <p className="text-xs font-mono text-ink-muted">
          Última actualización: Octubre 2026
        </p>
      </div>

      <div className="space-y-8 bg-bone p-8 sm:p-10 rounded-2xl border border-olive/15">
        <section className="space-y-3">
          <h2 className="font-serif text-xl text-olive font-medium">
            1. ¿Qué son las cookies?
          </h2>
          <p>
            Una cookie es un pequeño archivo que se almacena en tu dispositivo (ordenador, tablet o teléfono móvil) al visitar un sitio web. Permite a la página recordar información sobre tu visita, como tus preferencias de navegación o si ya has aceptado el aviso de cookies, facilitando tu próxima visita y haciendo que el sitio te resulte más útil.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-olive font-medium">
            2. Tipos de cookies utilizadas en este sitio web
          </h2>
          <div className="space-y-4 text-xs">
            <div className="p-4 bg-sand/30 rounded-lg">
              <strong className="text-olive block text-sm mb-1">Cookies técnicas y estrictamente necesarias:</strong>
              <p>
                Son indispensables para que la web funcione correctamente, permitiendo la navegación fluida, la seguridad de las peticiones en los formularios y el almacenamiento de tus preferencias de privacidad. No recaban datos con fines publicitarios.
              </p>
            </div>

            <div className="p-4 bg-sand/30 rounded-lg">
              <strong className="text-olive block text-sm mb-1">Cookies de preferencias o personalización:</strong>
              <p>
                Permiten recordar información para que accedas al servicio con determinadas características que pueden diferenciar tu experiencia de la de otros usuarios (por ejemplo, el estado del preloader o selector de horario).
              </p>
            </div>

            <div className="p-4 bg-sand/30 rounded-lg">
              <strong className="text-olive block text-sm mb-1">Cookies analíticas (opcionales):</strong>
              <p>
                Tratadas de forma agregada y anónima para cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios de la web, con el fin de mejorar la oferta de contenidos y servicios de consulta.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-olive font-medium">
            3. Cómo gestionar o revocar las cookies en tu navegador
          </h2>
          <p>
            Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu ordenador o móvil:
          </p>
          <ul className="space-y-1.5 list-disc pl-5 text-xs">
            <li>Google Chrome: Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
            <li>Mozilla Firefox: Ajustes &gt; Privacidad &amp; Seguridad &gt; Cookies y datos del sitio.</li>
            <li>Apple Safari: Preferencias &gt; Privacidad &gt; Bloquear todas las cookies.</li>
            <li>Microsoft Edge: Configuración &gt; Permisos del sitio &gt; Cookies y datos del sitio.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
