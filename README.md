# Vettikkavala Kannamcodu Sree Subrahmanya Swami Temple Website

A modern, responsive, high-performance devotional Single Page Application (SPA) built with **React 18**, **Vite**, **React Router v6**, and modern CSS styling.

🌐 **Production Website:** [https://kannamcodu-temple.vercel.app/](https://kannamcodu-temple.vercel.app/)

---

## 🌟 Highlights & Features

- **⚡ Blazing Fast Performance & Core Web Vitals**:
  - **100 Accessibility** | **100 Best Practices** | **100 SEO**
  - **0.000 Cumulative Layout Shift (CLS)** across mobile and desktop.
  - Self-hosted localized `.woff2` typography (`Cinzel`, `Lora`, `Noto Sans Malayalam`) with `font-display: optional` preventing font-swap jumps.
  - Sub-second First Contentful Paint (FCP) and optimized WebP visual assets.
- **✨ Devotional Kerala Temple Theme**: Deep kasavu gold gradients, temple red & warm ivory tones, traditional brass lamp aesthetic, and sacred Vel motifs.
- **📱 Responsive & Clean UX**:
  - Hidden native scrollbars across WebKit, Firefox, and Chromium with a sleek floating **Scroll-to-Top** button that appears dynamically upon scrolling.
  - Fluid responsiveness from small mobile devices (360px) up to ultra-wide desktop displays.
- **🪔 Interactive Devotional Features**:
  - **Archana & Vazhipadu Calculator**: Interactive Malayalam search, filter tabs across 51 authentic offerings, quantity counter, and WhatsApp booking generator.
  - **Live Festival Countdown**: Real-time countdown to Maha Thaipooyam Mahotsavam.
  - **3D Sacred Sanctum & Devotion**: Interactive 3D Vel rotation, virtual Pancha Deepam lighting, and temple bell ringing.
  - **Darshan Timings Bar**: Dynamic open/closed status for Morning & Evening poojas.
- **📸 High-Performance Gallery & Video Showcase**:
  - Filterable media gallery with smooth lightbox viewing.
  - Optimized video cover & responsive player showcasing Thaipooyam Kavadi celebration highlights.
- **🚀 AI Search & Agentic Browsing Ready**:
  - Fully compliant with Agentic Resource Discovery (ARD), RFC 8141 URN schemas (`/.well-known/ard.json`), `llms.txt`, and XML sitemap (`/sitemap.xml`).

---

## 📁 Clean Architecture & Project Structure

```text
temple/
├── index.html                   ← HTML5 entry with critical preloads & meta tags
├── package.json                 ← Dependencies & build scripts
├── vite.config.js               ← Vite build configuration
├── vercel.json                  ← Production SPA rewrites, CSP, COOP & immutable caching
├── eslint.config.js             ← ESLint flat configuration (ESLint 9)
├── .prettierrc                  ← Prettier code formatting rules
├── .jscpd.json                  ← Code duplication detection threshold configuration
├── knip.json                    ← Dead code & unused dependency scanner
│
├── public/                      ← Static public assets
│   ├── .well-known/             ← ARD discovery (ard.json, ai-catalog.json)
│   ├── audio/                   ← Devotional sounds (temple bell)
│   ├── fonts/                   ← Self-hosted WOFF2 fonts
│   ├── images/                  ← Compressed WebP imagery & gallery
│   ├── video/                   ← Devotional Kavadi celebration video
│   ├── webfonts/                ← Self-hosted FontAwesome icons
│   ├── robots.txt               ← Web crawler permissions & sitemap directive
│   ├── sitemap.xml              ← Production XML sitemap
│   └── llms.txt                 ← AI search agent index
│
├── src/                         ← Application source code
│   ├── components/
│   │   ├── common/              ← Reusable UI elements
│   │   │   ├── Navbar.jsx       ← Responsive navigation with mobile drawer
│   │   │   ├── Footer.jsx       ← Devotional footer & social links
│   │   │   ├── PageHero.jsx     ← Standard header for inner pages
│   │   │   ├── SectionHeader.jsx← Ornamental temple heading
│   │   │   ├── Lightbox.jsx     ← Fullscreen image viewer
│   │   │   ├── ScrollToTopButton.jsx ← Floating back-to-top button
│   │   │   └── reactbits/       ← Visual FX (ShinyText, SpotlightCard, etc.)
│   │   │
│   │   ├── features/            ← Domain-specific interactive features
│   │   │   ├── DarshanBar.jsx   ← Darshan timings indicator
│   │   │   ├── FestivalCountdown.jsx ← Thaipooyam countdown
│   │   │   ├── GoldenParticles.jsx ← Canvas particle effect
│   │   │   ├── InteractiveDevotion.jsx ← 3D Sanctum & offerings
│   │   │   ├── SplashScreen.jsx ← Festive polaroid bunting splash screen
│   │   │   └── VazhipaduCalculator.jsx ← Offering calculator
│   │   │
│   │   ├── cards/               ← Grid & card components
│   │   │   ├── EventDetailCard.jsx
│   │   │   ├── EventFeatureCard.jsx
│   │   │   ├── GalleryGrid.jsx
│   │   │   └── MemberCard.jsx
│   │   │
│   │   └── index.js             ← Central barrel exports
│   │
│   ├── pages/                   ← Route views (Code-split with React.lazy)
│   │   ├── Home.jsx
│   │   ├── Pooja.jsx
│   │   ├── Events.jsx
│   │   ├── Committee.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   └── PrivacyPolicy.jsx
│   │
│   ├── styles/
│   │   └── style.css            ← Central CSS stylesheet & design tokens
│   ├── data/
│   │   └── templeData.js        ← Centralized vazhipadu, pooja, & committee data
│   ├── utils/
│   │   ├── constants.js         ← Temple contact numbers, address & social links
│   │   └── helpers.js           ← Safe storage, URL generators & phone formatting
│   ├── App.jsx                  ← Main layout shell, router & overlays
│   └── main.jsx                 ← React DOM mount entry
│
└── tests/                       ← Playwright E2E test suites
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18.0 or newer recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/gpgovindapromod/KannamcoduTemple.git

# Navigate into project folder
cd KannamcoduTemple

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality Gates & Verification
```bash
# Check code formatting
npm run format:check

# Run ESLint
npm run lint

# Check for dead code & unused exports
npx knip

# Check for duplicate code
npx jscpd src/
```

### Production Build
```bash
npm run build
npm run preview
```
The optimized production bundle will be generated inside the `dist/` directory.

---

## 🕉️ Temple Location & Contact
- **Temple:** Vettikkavala Kannamcodu Sree Subrahmanya Swami Temple
- **Location:** Vettikkavala, Kottarakkara, Kollam District, Kerala 691538
- **Contact:** +91 90744 39789 | +91 95676 91538
- **Instagram:** [instagram.com/kannamcodetemple](https://www.instagram.com/kannamcodetemple?dlrf=MWFuam14NzhpdTdwdg==)
- **YouTube:** [@kannamkodutemple9083](https://youtube.com/@kannamkodutemple9083)
- **Facebook:** [Kannamcodu Temple](https://www.facebook.com/share/151yud18di/)
