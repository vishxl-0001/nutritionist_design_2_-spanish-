'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/data/siteData';

export default function ContactoPage() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [servicio, setServicio] = useState('Consulta general');
  const [mensaje, setMensaje] = useState('');
  const [hp, setHp] = useState('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!nombre.trim()) {
      newErrors.nombre = 'Este campo es obligatorio';
    }
    if (!email.trim() || !email.includes('@')) {
      newErrors.email = 'Introduce un correo válido';
    }
    if (!mensaje.trim()) {
      newErrors.mensaje = 'Este campo es obligatorio';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, telefono, servicio, mensaje, hp }),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setSuccess(true);
      } else {
        setErrors({ general: data.error || 'Ha ocurrido un error al enviar tu mensaje.' });
      }
    } catch (err) {
      setErrors({ general: 'No se pudo conectar con el servidor. Por favor, escríbeme por WhatsApp.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 sm:py-20 space-y-20 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      {/* Header */}
      <section className="space-y-6 max-w-3xl">
        <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
          Comunicación Directa &middot; Consulta
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-olive font-normal leading-[1.1] tracking-tight">
          Ponte en contacto conmigo
        </h1>
        <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
          Tanto si tienes una duda sobre qué servicio elegir como si prefieres concertar una cita de forma personalizada, escríbeme y te responderé con la mayor brevedad.
        </p>
      </section>

      {/* Grid: Form and Contact Info */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Contact Info & Schedule */}
        <div className="lg:col-span-5 space-y-8 bg-sand/30 p-8 sm:p-10 rounded-2xl border border-olive/15">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-olive">
              Atención al paciente
            </h2>
            <p className="text-xs text-ink-muted leading-relaxed">
              Trato personal, cercano y confidencial. Atiendo llamadas y mensajes de lunes a viernes.
            </p>
          </div>

          <div className="space-y-6 text-xs text-ink-muted">
            <div className="space-y-1">
              <span className="font-mono uppercase tracking-wider text-[11px] text-clay font-bold block">
                Teléfono y WhatsApp
              </span>
              <p className="text-sm font-medium text-olive">
                <a href={`tel:${SITE_CONFIG.phoneClean}`} className="hover:text-clay transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </p>
              <p className="text-[11px] text-ink-muted/80">
                Llamada directa o consulta por WhatsApp.
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono uppercase tracking-wider text-[11px] text-clay font-bold block">
                Horario de consulta
              </span>
              <p className="text-sm font-medium text-olive">
                Apertura a las 10:00 h
              </p>
              <p className="text-[11px] text-ink-muted/80">
                {SITE_CONFIG.hoursSummary}
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono uppercase tracking-wider text-[11px] text-clay font-bold block">
                Correo electrónico
              </span>
              <p className="text-sm font-medium text-olive">
                {SITE_CONFIG.email}
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono uppercase tracking-wider text-[11px] text-clay font-bold block">
                Consulta presencial
              </span>
              <p className="text-sm font-medium text-olive">
                {SITE_CONFIG.address}
              </p>
              <p className="text-[11px] text-ink-muted/80">
                {SITE_CONFIG.city}
              </p>
            </div>
          </div>

          {/* Google Maps Embed Placeholder */}
          <div className="space-y-2 pt-4 hairline-t">
            <span className="font-mono uppercase tracking-wider text-[10px] text-ink-muted block">
              Ubicación en el mapa
            </span>
            <div className="w-full h-44 rounded-lg bg-sand/50 border border-olive/20 flex flex-col items-center justify-center p-4 text-center text-xs text-ink-muted">
              <span className="text-clay text-lg mb-1">📍</span>
              <p className="font-medium text-olive">
                [TO_FILL: Mapa interactivo de Google Maps]
              </p>
              <p className="text-[11px] mt-1 text-ink-muted/70">
                Se insertará el iframe con la dirección física exacta de la consulta de Lidia Llanelis.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Interactive Form */}
        <div className="lg:col-span-7 bg-bone p-8 sm:p-12 rounded-2xl border border-olive/15 shadow-sm">
          {success ? (
            <div className="p-8 bg-sand/30 rounded-xl border border-emerald-700/30 text-center space-y-4 animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>
              <h3 className="font-serif text-2xl text-olive">
                Gracias, te responderé lo antes posible.
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
                He recibido tu mensaje correctamente. Revisaré tus datos y me pondré en contacto contigo para darte una respuesta detallada.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSuccess(false);
                  setNombre('');
                  setEmail('');
                  setTelefono('');
                  setMensaje('');
                }}
                className="mt-4 px-6 py-2.5 text-xs uppercase tracking-wider bg-olive text-bone rounded-sm hover:bg-clay transition-colors"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
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

              <div className="space-y-1">
                <h2 className="font-serif text-2xl text-olive">
                  Formulario de consulta
                </h2>
                <p className="text-xs text-ink-muted">
                  Completa el formulario y te responderé en tu correo o teléfono.
                </p>
              </div>

              {errors.general && (
                <p className="text-xs text-rose-700 bg-rose-50 p-3 rounded border border-rose-200">
                  {errors.general}
                </p>
              )}

              <div>
                <label htmlFor="nombre" className="block text-xs font-medium text-olive uppercase tracking-wider mb-1.5">
                  Nombre <span className="text-clay">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre completo"
                  className={`w-full px-4 py-3 rounded-sm bg-sand/10 border text-sm text-olive focus:border-clay focus:ring-1 focus:ring-clay outline-none transition-colors ${
                    errors.nombre ? 'border-rose-500' : 'border-olive/20'
                  }`}
                />
                {errors.nombre && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.nombre}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-olive uppercase tracking-wider mb-1.5">
                    Correo electrónico <span className="text-clay">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu.correo@ejemplo.com"
                    className={`w-full px-4 py-3 rounded-sm bg-sand/10 border text-sm text-olive focus:border-clay focus:ring-1 focus:ring-clay outline-none transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-olive/20'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-xs font-medium text-olive uppercase tracking-wider mb-1.5">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Ej. +34 600 00 00 00"
                    className="w-full px-4 py-3 rounded-sm bg-sand/10 border border-olive/20 text-sm text-olive focus:border-clay focus:ring-1 focus:ring-clay outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="servicio" className="block text-xs font-medium text-olive uppercase tracking-wider mb-1.5">
                  Motivo o servicio de interés
                </label>
                <select
                  id="servicio"
                  value={servicio}
                  onChange={(e) => setServicio(e.target.value)}
                  className="w-full px-4 py-3 rounded-sm bg-sand/10 border border-olive/20 text-sm text-olive focus:border-clay focus:ring-1 focus:ring-clay outline-none transition-colors"
                >
                  <option value="Consulta general">Consulta general / Orientación previa</option>
                  <option value="Consulta Nutricional Integrativa">Consulta Nutricional Integrativa</option>
                  <option value="Coaching de Salud Integrativa">Coaching de Salud Integrativa</option>
                  <option value="Nutrición Online">Nutrición Online Personalizada</option>
                  <option value="Pérdida de Peso Consciente">Pérdida de Peso Consciente</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-xs font-medium text-olive uppercase tracking-wider mb-1.5">
                  Mensaje <span className="text-clay">*</span>
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Escribe aquí tu consulta o situación personal..."
                  className={`w-full px-4 py-3 rounded-sm bg-sand/10 border text-sm text-olive focus:border-clay focus:ring-1 focus:ring-clay outline-none transition-colors ${
                    errors.mensaje ? 'border-rose-500' : 'border-olive/20'
                  }`}
                />
                {errors.mensaje && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.mensaje}</p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-10 py-4 bg-olive text-bone text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-clay transition-all duration-300 shadow-md disabled:opacity-50"
                >
                  {loading ? 'Enviando mensaje...' : 'Enviar mensaje'}
                </button>
              </div>

              <p className="text-[11px] text-ink-muted/80 leading-normal">
                Al enviar este formulario aceptas que tus datos sean tratados con la máxima confidencialidad para responder a tu petición conforme a la normativa española de protección de datos (RGPD).
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
