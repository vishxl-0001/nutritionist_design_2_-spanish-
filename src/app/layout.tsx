import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppPill from '@/components/WhatsAppPill';
import CookieBanner from '@/components/CookieBanner';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import SmoothScroll from '@/components/SmoothScroll';
import { SITE_CONFIG } from '@/data/siteData';

export const metadata: Metadata = {
  metadataBase: new URL('https://lidiallanelis.es'),
  title: {
    default: 'Lidia Llanelis | Coach de Salud Integrativa y Nutrición',
    template: '%s | Lidia Llanelis',
  },
  description:
    'Acompañamiento personalizado en salud integrativa y nutrición en España. Consultas presenciales y online. Un método sereno, empático y sin restricciones.',
  authors: [{ name: SITE_CONFIG.name }],
  keywords: [
    'nutricionista integrativa España',
    'coach de salud integrativa',
    'nutrición personalizada',
    'pérdida de peso saludable',
    'salud digestiva',
    'Lidia Llanelis',
  ],
  openGraph: {
    title: 'Lidia Llanelis | Coach de Salud Integrativa y Nutrición',
    description:
      'Un enfoque sereno y riguroso para transformar tu salud digestiva y tu relación con la comida.',
    locale: 'es_ES',
    type: 'website',
    siteName: 'Lidia Llanelis Nutrición',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;1,9..144,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bone text-ink antialiased paper-grain min-h-screen flex flex-col selection:bg-olive selection:text-bone font-sans">
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
          <WhatsAppPill />
          <CookieBanner />
        </SmoothScroll>
      </body>
    </html>
  );
}
