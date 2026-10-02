import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Lidia Llanelis',
  description: 'Tratamiento y protección de datos de carácter personal conforme al RGPD (UE) 2016/679 y la LOPDGDD.',
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="py-12 sm:py-20 space-y-12 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-sm text-ink-muted leading-relaxed">
      <div className="space-y-4">
        <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
          Privacidad &middot; RGPD &amp; LOPDGDD
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-olive font-normal">
          Política de Privacidad
        </h1>
        <p className="text-xs font-mono text-ink-muted">
          Última actualización: Octubre 2026
        </p>
      </div>

      <div className="space-y-8 bg-bone p-8 sm:p-10 rounded-2xl border border-olive/15">
        <section className="space-y-3">
          <h2 className="font-serif text-xl text-olive font-medium">
            1. Responsable del tratamiento
          </h2>
          <p>
            El responsable del tratamiento de los datos personales recabados a través de este sitio web es:
          </p>
          <ul className="space-y-1.5 list-disc pl-5 text-xs">
            <li><strong>Identidad:</strong> Lidia Llanelis</li>
            <li><strong>NIF/CIF:</strong> [TO_FILL: NIF o CIF]</li>
            <li><strong>Dirección:</strong> {SITE_CONFIG.address}, {SITE_CONFIG.city}</li>
            <li><strong>Correo de contacto RGPD:</strong> {SITE_CONFIG.email}</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-olive font-medium">
            2. Finalidad del tratamiento de datos
          </h2>
          <p>
            Tratamos la información que nos facilitas con las siguientes finalidades:
          </p>
          <ul className="space-y-2 list-disc pl-5 text-xs">
            <li>
              <strong>Gestión de solicitudes de cita y contacto:</strong> Atender consultas remitidas a través de los formularios de reserva y contacto o mensajes directos de WhatsApp y correo.
            </li>
            <li>
              <strong>Envío de recursos y contenidos divulgativos:</strong> Enviar por correo electrónico la Guía de Primeros Pasos y boletines informativos sobre nutrición y hábitos saludables a aquellos usuarios que lo soliciten expresamente.
            </li>
            <li>
              <strong>Prestación del servicio de consulta:</strong> En caso de formalizar el acompañamiento, gestionar tu expediente dietético y citas clínicas de manera estrictamente confidencial.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-olive font-medium">
            3. Legitimación para el tratamiento
          </h2>
          <p>
            La base legal para el tratamiento de tus datos es el <strong>consentimiento expreso</strong> del interesado al rellenar y enviar los formularios correspondientes y aceptar esta política de privacidad, así como la ejecución de un contrato o medidas precontractuales en caso de contratación de servicios.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-olive font-medium">
            4. Conservación de los datos
          </h2>
          <p>
            Los datos personales proporcionados se conservarán mientras se mantenga la relación profesional o el interés mutuo, y durante el tiempo estrictamente necesario para cumplir con las obligaciones legales aplicables a profesionales sanitarios y de nutrición en España.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-olive font-medium">
            5. Derechos del usuario
          </h2>
          <p>
            Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando sus datos personales. Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición dirigiéndote por correo electrónico a <span className="font-medium text-olive">{SITE_CONFIG.email}</span>, adjuntando copia de tu documento de identidad. Asimismo, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD, aepd.es) si consideras vulnerados tus derechos.
          </p>
        </section>
      </div>
    </div>
  );
}
