import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Aviso Legal | Lidia Llanelis',
  description: 'Información legal reguladora del sitio web de Lidia Llanelis conforme a la legislación española (LSSI-CE).',
};

export default function AvisoLegalPage() {
  return (
    <div className="py-12 sm:py-20 space-y-12 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-sm text-ink-muted leading-relaxed">
      <div className="space-y-4">
        <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
          Legalidad &middot; LSSI-CE
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-olive font-normal">
          Aviso Legal
        </h1>
        <p className="text-xs font-mono text-ink-muted">
          Última actualización: Octubre 2026
        </p>
      </div>

      <div className="space-y-8 bg-bone p-8 sm:p-10 rounded-2xl border border-olive/15">
        <section className="space-y-3">
          <h2 className="font-serif text-xl text-olive font-medium">
            1. Datos identificativos del titular
          </h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de los datos identificativos del titular de este sitio web:
          </p>
          <ul className="space-y-1.5 list-disc pl-5 text-xs">
            <li><strong>Titular:</strong> Lidia Llanelis</li>
            <li><strong>Actividad:</strong> Coaching de Salud Integrativa y Nutrición</li>
            <li><strong>NIF/CIF:</strong> [TO_FILL: NIF o NIE del titular]</li>
            <li><strong>Domicilio profesional:</strong> {SITE_CONFIG.address}, {SITE_CONFIG.city}</li>
            <li><strong>Correo electrónico:</strong> {SITE_CONFIG.email}</li>
            <li><strong>Teléfono:</strong> {SITE_CONFIG.phone}</li>
            <li><strong>Registro profesional / Colegiación:</strong> {SITE_CONFIG.collegiateNumber}</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-olive font-medium">
            2. Objeto y ámbito de aplicación
          </h2>
          <p>
            El presente aviso legal regula el acceso y la utilización del sitio web puesto a disposición de los usuarios de internet con el objeto de divulgar información sobre servicios de salud integrativa, educación nutricional y consulta personalizada.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-olive font-medium">
            3. Descargo de responsabilidad sanitaria
          </h2>
          <p>
            {SITE_CONFIG.medicalDisclaimer}
          </p>
          <p>
            El usuario reconoce y acepta que las recomendaciones dietéticas y pautas de estilo de vida facilitadas en el sitio web o en las consultas tienen carácter de asesoramiento nutricional y de hábitos, no constituyendo en modo alguno un diagnóstico médico ni un tratamiento farmacológico sustitutivo.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-olive font-medium">
            4. Propiedad intelectual e industrial
          </h2>
          <p>
            Todos los contenidos de este sitio web, incluyendo textos, fotografías, infografías, logotipos, marcas y código fuente, son propiedad exclusiva de Lidia Llanelis o de terceros que han autorizado su uso, quedando expresamente prohibida su reproducción, distribución o comunicación pública sin autorización previa y por escrito.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-olive font-medium">
            5. Legislación aplicable y jurisdicción
          </h2>
          <p>
            Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, siendo competentes los juzgados y tribunales del domicilio del usuario consumidor o, en su defecto, los de la ciudad de [TO_FILL: Ciudad de jurisdicción, ej. Madrid o Valencia].
          </p>
        </section>
      </div>
    </div>
  );
}
