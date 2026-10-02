'use client';

import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check session storage to only show brief preloader once per session
    const hasLoaded = sessionStorage.getItem('ll_preloader_seen');
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('ll_preloader_seen', 'true');
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-bone transition-opacity duration-700 ease-out pointer-events-none"
    >
      <div className="flex flex-col items-center gap-3 animate-fade-in">
        <div className="w-16 h-16 rounded-full border border-olive/30 flex items-center justify-center bg-sand/30 text-olive">
          <span className="font-serif text-2xl tracking-widest font-light">LL</span>
        </div>
        <p className="font-serif text-xs tracking-[0.2em] uppercase text-olive/80">
          Lidia Llanelis
        </p>
      </div>
    </div>
  );
}
