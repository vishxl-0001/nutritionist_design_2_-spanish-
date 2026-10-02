'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG, SERVICES } from '@/data/siteData';

const TIME_SLOTS = [
  '10:00 h',
  '11:30 h',
  '13:00 h',
  '16:00 h',
  '17:30 h',
  '19:00 h',
];

const WEEKDAYS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

export default function ReservarPage() {
  const [selectedService, setSelectedService] = useState('consulta-nutricional');
  const [modality, setModality] = useState<'presencial' | 'online'>('online');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 h');

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [notas, setNotas] = useState('');
  const [hp, setHp] = useState('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Generate the next 14 business days starting today
  const availableDates: { label: string; value: string; dayName: string }[] = [];
  const today = new Date();
  let count = 0;
  let dayOffset = 1; // start from tomorrow

  while (count < 10) {
    const d = new Date(today);
    d.setDate(today.getDate() + dayOffset);
    const dayOfWeek = d.getDay(); // 0 is Sun, 6 is Sat
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      // Monday to Friday
      const formatted = d.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
      const dayName = d.toLocaleDateString('es-ES', { weekday: 'short' });
      availableDates.push({
        label: formatted,
        value: formatted,
        dayName: dayName.toUpperCase(),
      });
      count++;
    }
    dayOffset++;
  }

  const handleSelectDate = (dateVal: string) => {
    setSelectedDate(dateVal);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!selectedDate) {
      setErrorMsg('Por favor, selecciona una fecha en el calendario.');
      return;
    }
    if (!selectedTime) {
      setErrorMsg('Por favor, selecciona una hora para tu consulta.');
      return;
    }
    if (!nombre.trim()) {
      setErrorMsg('Este campo es obligatorio: Nombre');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Introduce un correo válido');
      return;
    }
    if (!telefono.trim()) {
      setErrorMsg('Este campo es obligatorio: Teléfono');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/reserva', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre,
          email,
          telefono,
          servicio: selectedService,
          modalidad: modality === 'presencial' ? 'Presencial' : 'Online por videollamada',
          fecha: selectedDate,
          hora: selectedTime,
          notas,
          hp,
        }),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setSuccess(true);
      } else {
        setErrorMsg(data.error || 'Ha ocurrido un error al procesar tu reserva.');
      }
    } catch (err) {
      setErrorMsg('Error de conexión. Puedes reservar directamente por WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 sm:py-20 space-y-16 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
      {/* Header */}
      <section className="space-y-6 text-center max-w-3xl mx-auto">
        <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
          Cita Previa &middot; Atención Personalizada
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-olive font-normal leading-[1.1] tracking-tight">
          Reserva tu consulta con Lidia Llanelis
        </h1>
        <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
          Elige fecha, hora y modalidad. Te confirmaré la reserva en menos de 24 horas laborables para que empecemos a trabajar en tu bienestar.
        </p>
      </section>

      {/* Direct alternative banner */}
      <div className="bg-sand/30 p-4 sm:p-6 rounded-xl border border-olive/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <span className="text-clay text-lg">☎</span>
          <span className="text-ink-muted">
            ¿Prefieres gestionar tu cita de forma directa o tienes dudas?
          </span>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <a
            href={`tel:${SITE_CONFIG.phoneClean}`}
            className="text-olive hover:text-clay font-medium underline"
          >
            Llamar ({SITE_CONFIG.phone})
          </a>
          <span>·</span>
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-clay hover:text-olive font-medium underline"
          >
            WhatsApp directo &rarr;
          </a>
        </div>
      </div>

      {/* Main Booking Interface */}
      {success ? (
        <div className="bg-bone p-10 sm:p-14 rounded-2xl border border-emerald-700/30 text-center space-y-6 shadow-md animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto text-2xl font-bold">
            ✓
          </div>
          <h2 className="font-serif text-3xl text-olive">
            ¡Solicitud de cita recibida con éxito!
          </h2>
          <div className="max-w-md mx-auto space-y-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
            <p>
              Gracias <strong className="text-olive">{nombre}</strong>. He recibido tu solicitud para el día{' '}
              <strong className="text-olive">{selectedDate}</strong> a las{' '}
              <strong className="text-olive">{selectedTime}</strong> ({modality === 'presencial' ? 'Presencial' : 'Online'}).
            </p>
            <p>
              Me pondré en contacto contigo en breve a través de <strong className="text-olive">{telefono}</strong> o{' '}
              <strong className="text-olive">{email}</strong> para darte la bienvenida y confirmar los detalles.
            </p>
          </div>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 bg-olive text-bone text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-clay transition-colors"
            >
              Volver al inicio
            </Link>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-olive/30 text-olive text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-sand/40 transition-colors"
            >
              Escríbeme por WhatsApp
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-12 bg-bone p-8 sm:p-12 rounded-2xl border border-olive/15 shadow-sm">
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

          {/* STEP 1: Select Service */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-clay font-bold">Paso 01</span>
              <h2 className="font-serif text-xl sm:text-2xl text-olive font-medium">
                Selecciona la modalidad y servicio
              </h2>
            </div>

            {/* Modality Toggle */}
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <button
                type="button"
                onClick={() => setModality('online')}
                className={`py-3 px-4 rounded-md text-xs uppercase tracking-wider font-medium border transition-all ${
                  modality === 'online'
                    ? 'bg-olive text-bone border-olive shadow-sm'
                    : 'bg-sand/20 border-olive/20 text-olive hover:bg-sand/40'
                }`}
              >
                Online (Videollamada)
              </button>
              <button
                type="button"
                onClick={() => setModality('presencial')}
                className={`py-3 px-4 rounded-md text-xs uppercase tracking-wider font-medium border transition-all ${
                  modality === 'presencial'
                    ? 'bg-olive text-bone border-olive shadow-sm'
                    : 'bg-sand/20 border-olive/20 text-olive hover:bg-sand/40'
                }`}
              >
                Presencial en Consulta
              </button>
            </div>

            {/* Services Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {SERVICES.map((s) => (
                <label
                  key={s.slug}
                  className={`p-4 rounded-lg border cursor-pointer transition-all flex flex-col justify-between ${
                    selectedService === s.slug
                      ? 'border-clay bg-sand/35 shadow-sm'
                      : 'border-olive/15 hover:border-olive/30 bg-bone'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <input
                        type="radio"
                        name="servicio"
                        value={s.slug}
                        checked={selectedService === s.slug}
                        onChange={() => setSelectedService(s.slug)}
                        className="sr-only"
                      />
                      <span className="font-serif text-base text-olive font-medium block">
                        {s.title}
                      </span>
                      <span className="text-[11px] text-ink-muted mt-1 block">
                        {s.duration}
                      </span>
                    </div>
                    {selectedService === s.slug && (
                      <span className="text-clay text-xs font-bold">✓ Seleccionado</span>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* STEP 2: Date & Time in Spanish */}
          <div className="space-y-6 pt-6 hairline-t">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-clay font-bold">Paso 02</span>
              <h2 className="font-serif text-xl sm:text-2xl text-olive font-medium">
                Selecciona fecha y franja horaria
              </h2>
            </div>

            {/* Calendar Date Chips */}
            <div className="space-y-2">
              <label className="block text-xs font-medium text-olive uppercase tracking-wider">
                Próximas fechas disponibles (Lunes a Viernes)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {availableDates.map((d) => (
                  <button
                    key={d.value}
                    type="button"
                    onClick={() => handleSelectDate(d.value)}
                    className={`p-3 rounded-md border text-center transition-all ${
                      selectedDate === d.value
                        ? 'border-clay bg-clay text-bone shadow-sm'
                        : 'border-olive/20 hover:border-olive bg-sand/15 text-olive'
                    }`}
                  >
                    <span className="block text-[10px] font-mono tracking-wider opacity-80 uppercase">
                      {d.dayName}
                    </span>
                    <span className="font-serif text-sm font-semibold block mt-0.5">
                      {d.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Time slot buttons */}
            <div className="space-y-2">
              <label className="block text-xs font-medium text-olive uppercase tracking-wider">
                Hora preferida (Apertura desde las 10:00 h)
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    className={`py-2 px-3 rounded text-xs font-mono transition-all border ${
                      selectedTime === slot
                        ? 'bg-olive text-bone border-olive shadow-sm'
                        : 'border-olive/20 text-olive hover:bg-sand/30'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* STEP 3: Contact Details */}
          <div className="space-y-6 pt-6 hairline-t">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-clay font-bold">Paso 03</span>
              <h2 className="font-serif text-xl sm:text-2xl text-olive font-medium">
                Tus datos de contacto
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nombre_reserva" className="block text-xs font-medium text-olive uppercase tracking-wider mb-1.5">
                  Nombre y apellidos <span className="text-clay">*</span>
                </label>
                <input
                  type="text"
                  id="nombre_reserva"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ej. Ana Fernández"
                  className="w-full px-4 py-3 rounded-sm bg-sand/10 border border-olive/20 text-sm text-olive focus:border-clay focus:ring-1 focus:ring-clay outline-none"
                />
              </div>

              <div>
                <label htmlFor="telefono_reserva" className="block text-xs font-medium text-olive uppercase tracking-wider mb-1.5">
                  Teléfono / WhatsApp <span className="text-clay">*</span>
                </label>
                <input
                  type="tel"
                  id="telefono_reserva"
                  required
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="Ej. 612 34 56 78"
                  className="w-full px-4 py-3 rounded-sm bg-sand/10 border border-olive/20 text-sm text-olive focus:border-clay focus:ring-1 focus:ring-clay outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email_reserva" className="block text-xs font-medium text-olive uppercase tracking-wider mb-1.5">
                  Correo electrónico <span className="text-clay">*</span>
                </label>
                <input
                  type="email"
                  id="email_reserva"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu.correo@ejemplo.com"
                  className="w-full px-4 py-3 rounded-sm bg-sand/10 border border-olive/20 text-sm text-olive focus:border-clay focus:ring-1 focus:ring-clay outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="notas_reserva" className="block text-xs font-medium text-olive uppercase tracking-wider mb-1.5">
                  ¿Cuál es el motivo principal de tu consulta? (Opcional)
                </label>
                <textarea
                  id="notas_reserva"
                  rows={3}
                  value={notas}
                  onChange={(e) => setNotas(e.target.value)}
                  placeholder="Cuéntame brevemente qué te gustaría mejorar o qué síntomas notas..."
                  className="w-full px-4 py-3 rounded-sm bg-sand/10 border border-olive/20 text-sm text-olive focus:border-clay focus:ring-1 focus:ring-clay outline-none"
                />
              </div>
            </div>

            {errorMsg && (
              <p className="text-xs text-rose-700 bg-rose-50 p-3 rounded border border-rose-200">
                {errorMsg}
              </p>
            )}

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-10 py-4 bg-olive text-bone text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-clay transition-all duration-300 shadow-md disabled:opacity-50"
              >
                {loading ? 'Tramitando reserva...' : 'Confirmar solicitud de cita'}
              </button>
              <p className="text-[11px] text-ink-muted">
                Cancelación gratuita avisando con 24 horas de antelación.
              </p>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
