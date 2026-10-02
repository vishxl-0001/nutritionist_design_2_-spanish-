'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('ll_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ll_cookie_consent', JSON.stringify({ analytics: true, necessary: true }));
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('ll_cookie_consent', JSON.stringify({ analytics: false, necessary: true }));
    setVisible(false);
  };

  const handleSaveConfig = () => {
    localStorage.setItem('ll_cookie_consent', JSON.stringify({ analytics: analyticsEnabled, necessary: true }));
    setVisible(false);
    setShowConfig(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Consentimiento de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-bone/95 backdrop-blur-md hairline-t shadow-2xl transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 text-xs text-ink-muted max-w-3xl">
          <p className="font-serif text-sm font-medium text-olive">
            Respeto a tu privacidad y transparencia digital
          </p>
          <p className="leading-relaxed">
            Utilizamos cookies técnicas necesarias y analíticas anónimas para comprender el uso del sitio web y mejorar la experiencia de navegación en tu consulta digital. Puedes aceptar todas, rechazarlas o configurar tus preferencias. Más información en nuestra{' '}
            <Link href="/politica-de-cookies" className="underline text-olive hover:text-clay">
              política de cookies
            </Link>.
          </p>

          {showConfig && (
            <div className="pt-3 pb-2 border-t border-olive/10 mt-3 space-y-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={true}
                  disabled={true}
                  className="rounded text-olive focus:ring-clay"
                />
                <span className="text-xs text-olive font-medium">
                  Cookies técnicas y necesarias (activas por defecto para el funcionamiento seguro)
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  className="rounded text-clay focus:ring-clay"
                />
                <span className="text-xs text-olive font-medium">
                  Cookies de métricas analíticas (medición anónima de visitas)
                </span>
              </label>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0 justify-end">
          {showConfig ? (
            <button
              onClick={handleSaveConfig}
              className="px-4 py-2 text-xs font-medium uppercase tracking-wider bg-olive text-bone rounded-sm hover:bg-clay transition-colors"
            >
              Guardar preferencias
            </button>
          ) : (
            <>
              <button
                onClick={() => setShowConfig(true)}
                className="px-3 py-2 text-xs font-medium text-ink-muted hover:text-olive underline underline-offset-4 transition-colors"
              >
                Configurar
              </button>
              <button
                onClick={handleReject}
                className="px-4 py-2 text-xs font-medium uppercase tracking-wider border border-olive/20 text-olive rounded-sm hover:bg-sand/30 transition-colors"
              >
                Rechazar
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2 text-xs font-medium uppercase tracking-wider bg-olive text-bone rounded-sm hover:bg-clay transition-colors shadow-sm"
              >
                Aceptar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
