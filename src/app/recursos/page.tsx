'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/data/siteData';

export default function RecursosPage() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [hp, setHp] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !email.includes('@')) {
      setErrorMsg('Introduce un correo válido');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, hp }),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setSuccess(true);
      } else {
        setErrorMsg(data.error || 'Ha ocurrido un error al procesar tu solicitud.');
      }
    } catch (err) {
      setErrorMsg('No se ha podido conectar con el servidor. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 sm:py-20 space-y-20 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
      {/* Header */}
      <section className="space-y-6 text-center max-w-3xl mx-auto">
        <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
          Recurso Gratuito &middot; Guía Práctica
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-olive font-normal leading-[1.1] tracking-tight">
          Guía de primeros pasos: <br />
          <span className="italic font-light text-clay">
            reconectar con tu alimentación sin culpa.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
          Un cuaderno digital diseñado por Lidia Llanelis para ayudarte a identificar los saboteadores cotidianos, estructurar platos saciantes y aprender a comer con serenidad mental.
        </p>
      </section>

      {/* Main card with image & opt-in form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-sand/30 p-8 sm:p-12 lg:p-16 rounded-2xl border border-olive/15 shadow-sm">
        <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden border border-olive/15 shadow-md">
          <Image
            src="/images/infusion-cuaderno.jpg"
            alt="Cuaderno de reflexiones nutricionales e infusión de hierbas"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover img-editorial"
          />
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl text-olive">
              Descarga directa en tu correo electrónico
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              Rellena tus datos y recibirás el PDF de forma gratuita e inmediata en tu buzón.
            </p>
          </div>

          {success ? (
            <div className="bg-bone p-8 rounded-xl border border-emerald-700/30 space-y-3 animate-fade-in">
              <span className="text-emerald-700 text-2xl">✓</span>
              <h3 className="font-serif text-xl text-olive font-medium">
                ¡Guía enviada con éxito!
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Revisa tu bandeja de entrada en <strong className="text-olive">{email}</strong>. Si no lo ves en unos minutos, echa un vistazo en la carpeta de correo no deseado o promociones.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot hidden input */}
              <input
                type="text"
                name="hp"
                value={hp}
                onChange={(e) => setHp(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="nombre" className="block text-xs font-medium text-olive uppercase tracking-wider mb-1.5">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-sm bg-bone border border-olive/20 text-sm text-olive placeholder:text-ink-muted/50 focus:border-clay focus:ring-1 focus:ring-clay outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-olive uppercase tracking-wider mb-1.5">
                  Correo electrónico <span className="text-clay">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu.correo@ejemplo.com"
                  className="w-full px-4 py-3 rounded-sm bg-bone border border-olive/20 text-sm text-olive placeholder:text-ink-muted/50 focus:border-clay focus:ring-1 focus:ring-clay outline-none transition-colors"
                />
              </div>

              {errorMsg && (
                <p className="text-xs text-rose-700 bg-rose-50 p-2.5 rounded border border-rose-200">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3.5 bg-olive text-bone text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-clay transition-colors disabled:opacity-50"
              >
                {loading ? 'Enviando guía...' : 'Descargar guía gratuita en PDF'}
              </button>

              <p className="text-[11px] text-ink-muted/80 leading-normal pt-1">
                Respeto absoluto por tu privacidad. Cero spam. Podrás darte de baja en cualquier momento con un solo clic.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Guide contents overview */}
      <section className="space-y-8 pt-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-clay">
            Contenido del Cuaderno
          </span>
          <h2 className="font-serif text-3xl text-olive">
            Lo que aprenderás en esta guía
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-bone p-6 rounded-xl border border-olive/15 space-y-3">
            <span className="font-serif text-2xl text-clay">01</span>
            <h3 className="font-serif text-lg text-olive font-medium">El plato equilibrado y saciante</h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Cómo componer tus comidas principales para evitar los temidos picos de glucosa y los antojos dulces a media tarde.
            </p>
          </div>

          <div className="bg-bone p-6 rounded-xl border border-olive/15 space-y-3">
            <span className="font-serif text-2xl text-clay">02</span>
            <h3 className="font-serif text-lg text-olive font-medium">Reconocer el hambre real</h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Técnicas sencillas para distinguir la necesidad biológica del cuerpo frente al impulso provocado por el estrés o la fatiga mental.
            </p>
          </div>

          <div className="bg-bone p-6 rounded-xl border border-olive/15 space-y-3">
            <span className="font-serif text-2xl text-clay">03</span>
            <h3 className="font-serif text-lg text-olive font-medium">La despensa mediterránea básica</h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Una lista de la compra práctica, sin productos raros ni caros, para tener siempre a mano alimentos limpios y nutritivos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
