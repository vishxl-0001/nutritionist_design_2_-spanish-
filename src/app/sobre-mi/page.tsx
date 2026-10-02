import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Sobre mí | Lidia Llanelis',
  description:
    'Conoce a Lidia Llanelis, coach de salud integrativa y creadora del Método Equilibrio 360º en España. Su historia personal de 30 kg menos, filosofía y credenciales.',
};

export default function SobreMiPage() {
  return (
    <div className="py-8 sm:py-20 space-y-14 sm:space-y-20 max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 overflow-x-hidden">
      {/* Header section */}
      <section className="space-y-3 sm:space-y-5 max-w-3xl">
        <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
          Historia real &middot; Vocación &middot; Rigor
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-olive font-normal leading-[1.1] tracking-tight">
          «30 kilos menos: el clic que lo cambió todo en mi vida.»
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-ink-muted leading-relaxed">
          Soy Lidia Llanelis. Acompaño a personas que desean reconciliarse con la comida, desinflamar su organismo y recuperar una vitalidad que creían perdida, desde la evidencia científica y la máxima empatía humana.
        </p>
      </section>

      {/* Main photo & quote highlight (Human-scale constrained) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-olive/15 bg-sand/30">
            <Image
              src="/images/lidia-terraza-retrato.jpg"
              alt="Lidia Llanelis sonriendo en su terraza con blusa blanca y luz natural"
              fill
              priority
              sizes="(max-width: 640px) 280px, 340px"
              className="object-cover object-top img-editorial"
            />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4 sm:space-y-5">
          <div className="border-l-2 border-clay pl-4 sm:pl-6 py-2">
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-olive italic leading-snug">
              «No decidí formarme solo porque perdí 30 kg. Lo hice porque descubrí el alivio de no vivir con miedo al plato, y quise enseñar ese camino a quienes siguen sufriendo en silencio.»
            </p>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
            <p>
              Sé exactamente lo que se siente al entrar en una tienda y evitar los espejos. Sé lo que es acudir a un evento social pensando únicamente en si la comida te va a arruinar el esfuerzo de toda la semana, y sé lo agotador que resulta levantarse cada mañana con pesadez estomacal y fatiga.
            </p>
            <p>
              Durante mucho tiempo creí que la solución era apretar los dientes y restringir más. Fue un error. Solo cuando cambié la privación por el conocimiento biológico, el respeto por mis ritmos y la nutrición antiinflamatoria, mi cuerpo respondió con agradecimiento. Los 30 kilos se fueron como consecuencia natural de sanar por dentro, no de castigarme.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative editorial chapter with Seminar photo */}
      <section className="space-y-8 bg-sand/25 p-6 sm:p-10 rounded-2xl border border-olive/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3.5">
            <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
              Formación &middot; Método Equilibrio 360º
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-olive">
              Del aprendizaje íntimo a la práctica clínica
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              Perder peso no te convierte automáticamente en profesional de la salud. Por eso, tras mi propia vivencia personal, decidí formarme con rigor académico para comprender a fondo la fisiología humana, el metabolismo, la psiconutrición y el impacto de la microbiota en el estado de ánimo.
            </p>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              Mi consulta hoy en día nace de la convergencia de dos mundos: por un lado, la comprensión sincera de quien ha estado en tus zapatos; por otro, la solidez clínica de quien evalúa analíticas, síntomas digestivos y estilo de vida con criterio científico.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[270px] sm:max-w-[320px] aspect-[4/5] rounded-xl overflow-hidden shadow-md border border-olive/15">
              <Image
                src="/images/lidia-evento-seminario.jpg"
                alt="Lidia Llanelis en seminario de liderazgo y salud ejecutiva"
                fill
                sizes="(max-width: 640px) 270px, 320px"
                className="object-cover object-top img-editorial"
              />
            </div>
          </div>
        </div>

        {/* Credentials and Registration (marked [TO_FILL]) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 hairline-t">
          <div className="bg-bone p-5 rounded-lg border border-olive/15 space-y-2">
            <p className="font-mono text-xs uppercase tracking-wider text-clay font-bold">
              Acreditación y Colegiación
            </p>
            <p className="font-serif text-base sm:text-lg text-olive font-medium">
              Registro Profesional
            </p>
            <p className="text-xs text-ink-muted">
              {SITE_CONFIG.collegiateNumber}
            </p>
            <p className="text-[11px] text-ink-muted/80">
              Inscrita en el registro profesional correspondiente en España para el ejercicio de la actividad.
            </p>
          </div>

          <div className="bg-bone p-5 rounded-lg border border-olive/15 space-y-2">
            <p className="font-mono text-xs uppercase tracking-wider text-clay font-bold">
              Titulación Académica
            </p>
            <p className="font-serif text-base sm:text-lg text-olive font-medium">
              Formación Especializada
            </p>
            <p className="text-xs text-ink-muted">
              {SITE_CONFIG.credentials}
            </p>
            <p className="text-[11px] text-ink-muted/80">
              Formación continuada en salud digestiva, inflamación de bajo grado y educación nutricional.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Produce Photo Break (Human-proportioned) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-sand/30 p-6 sm:p-10 rounded-2xl border border-olive/15">
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[270px] sm:max-w-[320px] aspect-[3/4] rounded-xl overflow-hidden shadow-md border border-olive/15">
            <Image
              src="/images/lidia-llanelis-retrato.png"
              alt="Lidia Llanelis con alimentos frescos de la huerta mediterránea"
              fill
              sizes="(max-width: 640px) 270px, 320px"
              className="object-cover img-editorial"
            />
          </div>
        </div>
        <div className="lg:col-span-7 space-y-3.5">
          <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
            Filosofía de Vida
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-olive">
            La comida no es el enemigo: es tu medicina cotidiana
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            Aprender a comer de verdad con hortalizas de temporada, grasas saludables y alimentos vivos te devuelve la alegría a la mesa. Sin prohibiciones absurdas, disfrutando de las comidas con familia y amigos sin sentir que te estás saliendo del plan.
          </p>
        </div>
      </section>

      {/* Pillars of Consultation */}
      <section className="space-y-8 sm:space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-clay font-medium">
            Bases de mi consulta
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-olive">
            Los 3 compromisos que adquiero contigo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <div className="bg-bone p-6 rounded-lg border border-olive/15 space-y-2.5">
            <span className="font-serif text-2xl text-clay">01</span>
            <h3 className="font-serif text-lg text-olive font-medium">Espacio libre de juicios</h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              En mi consulta jamás escucharás regañinas ni juicios morales sobre lo que comes o dejas de comer. Vienes a encontrar soluciones y compasión, no reproches.
            </p>
          </div>

          <div className="bg-bone p-6 rounded-lg border border-olive/15 space-y-2.5">
            <span className="font-serif text-2xl text-clay">02</span>
            <h3 className="font-serif text-lg text-olive font-medium">Rigor sin extremismos</h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              No vendo suplementos milagrosos ni dietas de moda con nombres extravagantes. Trabajamos con comida real de temporada, fisiología humana y hábitos comprobados.
            </p>
          </div>

          <div className="bg-bone p-6 rounded-lg border border-olive/15 space-y-2.5">
            <span className="font-serif text-2xl text-clay">03</span>
            <h3 className="font-serif text-lg text-olive font-medium">Autonomía para el futuro</h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Mi mayor éxito es que dejes de necesitarme. Te doto de herramientas, criterio y serenidad para que sepas alimentarte bien en cualquier situación de tu vida.
            </p>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-olive text-bone p-7 sm:p-12 rounded-2xl text-center space-y-5">
        <h2 className="font-serif text-2xl sm:text-4xl font-light max-w-2xl mx-auto leading-tight">
          ¿Deseas que valoremos tu caso juntas en una primera consulta?
        </h2>
        <p className="text-xs sm:text-sm text-sand/80 max-w-xl mx-auto leading-relaxed">
          Estaré encantada de escucharte y ayudarte a dar el paso hacia una salud sólida y duradera con el Método Equilibrio 360º.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/reservar"
            className="w-full sm:w-auto px-8 py-3.5 bg-clay text-bone text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-clay-hover transition-colors text-center"
          >
            Reserva tu cita previa
          </Link>
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 border border-sand/40 text-sand text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-bone/10 transition-colors text-center"
          >
            Escríbeme por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
