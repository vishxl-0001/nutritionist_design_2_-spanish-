'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG, NAV_LINKS } from '@/data/siteData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > 150 && currentScrollY > lastScrollY && !mobileMenuOpen) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        } ${
          scrolled
            ? 'bg-bone/90 backdrop-blur-md shadow-[0_4px_24px_rgba(47,58,46,0.06)] hairline-b py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo & Brand title */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
          >
            <div className="w-10 h-10 rounded-full border border-olive/30 flex items-center justify-center bg-sand/40 text-olive transition-transform duration-300 group-hover:scale-105">
              <span className="font-serif text-lg tracking-wider font-semibold">LL</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-olive leading-tight">
                Lidia Llanelis
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-wider uppercase text-ink-muted">
                Salud Integrativa & Nutrición
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-wide font-medium text-ink-muted">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-200 hover:text-olive ${
                    isActive ? 'text-olive font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-clay rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Rating Strip + CTA */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Google Rating Micro-Badge */}
            <Link
              href="/resultados"
              className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-olive/15 bg-sand/30 text-[11px] text-olive hover:bg-sand/60 transition-colors"
              title="Reseñas reales verificadas en Google"
            >
              <span className="text-clay text-xs">★</span>
              <span className="font-semibold">{SITE_CONFIG.googleRating}</span>
              <span className="text-ink-muted">en Google</span>
            </Link>

            {/* Primary CTA */}
            <Link
              href="/reservar"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-sm bg-olive text-bone text-xs font-medium tracking-wider uppercase transition-all duration-300 hover:bg-clay hover:shadow-md"
            >
              Reserva tu cita
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-olive focus:outline-none focus-visible:ring-2 focus-visible:ring-clay"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-olive transition-transform duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-olive transition-opacity duration-200 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-full h-0.5 bg-olive transition-transform duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-olive/30 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-bone p-8 flex flex-col justify-between shadow-2xl transition-transform duration-500 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="pt-16">
            <div className="flex items-center gap-3 pb-6 hairline-b mb-6">
              <div className="w-9 h-9 rounded-full border border-olive/30 flex items-center justify-center bg-sand/40 text-olive">
                <span className="font-serif text-base font-semibold">LL</span>
              </div>
              <div>
                <p className="font-serif text-base font-medium text-olive">Lidia Llanelis</p>
                <p className="text-[10px] tracking-wider uppercase text-ink-muted">Consulta Privada</p>
              </div>
            </div>

            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-serif text-xl text-olive hover:text-clay transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-6 hairline-t space-y-3">
            <Link
              href="/reservar"
              className="block w-full py-3 text-center bg-olive text-bone text-xs tracking-wider uppercase font-medium hover:bg-clay transition-colors"
            >
              Reserva tu cita
            </Link>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2.5 text-center border border-olive/30 text-olive text-xs tracking-wider uppercase font-medium hover:bg-sand/40 transition-colors"
            >
              Escríbeme por WhatsApp
            </a>
            <div className="text-center pt-2">
              <p className="text-[11px] text-ink-muted">
                Tel: <a href={`tel:${SITE_CONFIG.phoneClean}`} className="underline">{SITE_CONFIG.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
