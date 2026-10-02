# Lidia Llanelis — Integrative Health & Nutrition Studio Website

Production-ready boutique wellness web platform designed for **Lidia Llanelis**, Integrative Health Coach and Nutritionist based in Spain.

Crafted with an editorial "quiet-luxury" aesthetic inspired by private European dermatological clinics and bespoke culinary editorial spreads. Strictly 100% in Spanish (Spain) across all user-facing interfaces, forms, cookies, and URLs.

---

## 1. Tech Stack & Architecture

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom design tokens & CSS variables
- **Typography:**
  - Headlines: *Cormorant Garamond* & *Fraunces* (High-contrast editorial serif)
  - Body: *DM Sans* (Clean, warm, human sans-serif)
- **Motion & Smooth Scrolling:** Lenis smooth scrolling (respects `prefers-reduced-motion`)
- **Micro-details:**
  - Custom desktop magnetic cursor
  - Smart hiding/revealing sticky navigation
  - Brand-styled floating WhatsApp concierge pill (+34 615 89 86 13)
  - Preloader with "LL" monogram
  - Subtle paper grain overlay

---

## 2. Directory Structure

```text
├── public/
│   └── images/
│       ├── lidia-llanelis-retrato.png    # Real portrait of Lidia with produce
│       ├── bodegon-mediterraneo.jpg      # Mediterranean produce editorial still life
│       ├── consulta-integrativa.jpg      # Minimalist consultation scene
│       ├── infusion-cuaderno.jpg         # Ceramic cup & wellness journal detail
│       └── preparacion-alimentos.jpg     # Hands preparing fresh organic herbs
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contacto/route.ts         # Contact form API with honeypot spam protection
│   │   │   ├── newsletter/route.ts       # Free lead magnet guide delivery
│   │   │   └── reserva/route.ts          # Consultation appointment intake
│   │   ├── aviso-legal/page.tsx          # Spanish LSSI-CE legal notice
│   │   ├── contacto/page.tsx             # Contact form, schedule & map placeholder
│   │   ├── metodo/page.tsx               # 4-stage vertical timeline breakdown
│   │   ├── politica-de-cookies/page.tsx  # Cookie policy
│   │   ├── politica-de-privacidad/page.tsx # RGPD & LOPDGDD compliance
│   │   ├── preguntas-frecuentes/page.tsx # 8-question FAQ accordion
│   │   ├── recursos/page.tsx             # Lead magnet "Guía de Primeros Pasos"
│   │   ├── reservar/page.tsx             # Interactive booking interface (dd/mm/yyyy, 24h)
│   │   ├── resultados/page.tsx           # Honest 5,0 Google rating & case study structure
│   │   ├── servicios/                    # Services directory & individual subpages
│   │   │   ├── coaching-salud-integrativa/page.tsx
│   │   │   ├── consulta-nutricional/page.tsx
│   │   │   ├── nutricion-online/page.tsx
│   │   │   ├── perdida-de-peso-saludable/page.tsx
│   │   │   └── page.tsx
│   │   ├── sobre-mi/page.tsx             # 30 kg weight loss story & credentials
│   │   ├── globals.css                   # Tailwind layers, tokens & grain
│   │   ├── layout.tsx                    # Root layout with metadata and fonts
│   │   ├── not-found.tsx                 # Spanish custom 404 page
│   │   └── page.tsx                      # Editorial Homepage
│   ├── components/
│   │   ├── CookieBanner.tsx              # RGPD compliant cookie banner
│   │   ├── CustomCursor.tsx              # Subtle desktop cursor follower
│   │   ├── Footer.tsx                    # Architectural footer & medical disclaimer
│   │   ├── Header.tsx                    # Sticky header with monogram & nav
│   │   ├── Preloader.tsx                 # LL monogram intro screen
│   │   ├── SmoothScroll.tsx              # Lenis smooth scroll provider
│   │   └── WhatsAppPill.tsx              # Sticky brand WhatsApp concierge
│   └── data/
│       └── siteData.ts                   # Central source of truth for text, services, and [TO_FILL] items
```

---

## 3. How to Edit Content, Prices & Images

### A. Updating Client Info & Placeholders
All global data (phone, email, address, registration numbers, services, FAQs, reviews) is centralized in:
`src/data/siteData.ts`

To update a price, duration, or address:
1. Open `src/data/siteData.ts`.
2. Locate `SITE_CONFIG` or `SERVICES`.
3. Replace the `[TO_FILL]` strings with the verified client values.
4. Save the file; changes will automatically reflect across the entire site.

### B. Swapping Photos
All photography is stored in `public/images/`:
- `lidia-llanelis-retrato.png` is the **real photo of Lidia Llanelis** provided.
- Other still life and consultation shots are editorial placeholders generated for this build.
- To swap any photo before launch, drop the client's high-resolution WebP/JPG into `public/images/` using the exact same filename.

---

## 4. Environment Variables

Create a `.env.local` file in the project root:

```env
# Email Service Integration (Resend, Cloudflare Workers Email, or SendGrid)
EMAIL_API_KEY=your_production_api_key_here
EMAIL_FROM=consultas@lidiallanelis.es
EMAIL_TO=contacto@lidiallanelis.es

# Optional External Booking Integrations (if replacing custom booking UI)
CALENDLY_EMBED_URL=https://calendly.com/lidiallanelis
```

---

## 5. Development & Production Commands

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:3000)
npm run dev

# Compile production build
npm run build

# Start production server
npm run start
```

---

## 6. Pre-Launch Checklist

- [x] 100% Spanish (Spain) copy verified (no English in user-facing UI).
- [x] All 17 routes tested and operational.
- [x] Honeypot spam protection verified on all API endpoints (`/api/contacto`, `/api/newsletter`, `/api/reserva`).
- [x] Cookie banner with Aceptar / Rechazar / Configurar saving consent locally.
- [x] Mobile drawer navigation tested for 360px, 768px, 1024px, 1440px breakpoints.
- [x] Medical disclaimer present on all relevant pages and footer.
- [x] Real photo of Lidia placed in Hero and About sections.
- [ ] Replace `[TO_FILL]` items provided in the client intake list.
- [ ] Connect production email API key in `.env.local`.
- [ ] Map custom domain (e.g., `lidiallanelis.es`).
