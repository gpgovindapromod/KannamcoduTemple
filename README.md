# Vettikkavala Kannamcodu Sree Subrahmanya Swami Temple Website

A modern, responsive, high-performance devotional Single Page Application (SPA) built with **React 18**, **Vite**, **React Router v6**, and **React Bits** animations.

---

## 🌟 Highlights & Features

- **⚡ Fast Pure React SPA**: Built on Vite with client-side routing, zero backend dependencies, and optimized web font loading.
- **✨ Devotional Kerala Temple Theme**: Deep kasavu gold gradients, temple red & warm ivory tones, traditional brass lamp aesthetic, and Vel motifs.
- **📱 True Full-Spectrum Responsive**: Perfect fluid layout from small mobile viewports (360px) up to ultra-wide 4K desktop screens.
- **🪔 Interactive Devotional Features**:
  - **Archana Offering Calculator**: Interactive search, category filtering across 51 authentic offerings, quantity counter, and WhatsApp booking summary.
  - **Live Festival Countdown**: Real-time days/hours/minutes countdown to Maha Thaipooyam Mahotsavam.
  - **Darshan Timings Bar**: Dynamic open/closed status for Morning & Evening poojas.
  - **Virtual Deepam Lighting**: Interactive lamp lighting with golden ambient glow.
- **📸 High-Performance Gallery & Video Showcase**:
  - Responsive media grid with filter tabs (All, Festivals, Poojas, Deity).
  - Devotional video player showcasing Thaipooyam Kavadi celebration highlights.
- **👥 Administrative Directory**:
  - Organized layout of Key Executives (President, Vice President, Secretary, Union Representative) and Council Members.
- **🚀 SEO & Agentic Ready**:
  - Semantic HTML5, Open Graph meta tags, structured `robots.txt`, `llms.txt`, and AI catalog metadata.

---

## 📁 Project Architecture

```
temple/
├── index.html                   ← HTML5 entry with preconnected Google Fonts & meta tags
├── package.json                 ← Vite + React 18 dependencies & scripts
├── vite.config.js               ← Vite build configuration
├── public/
│   ├── images/                  ← Temple imagery, deities, festivals, committee portraits
│   ├── video/                   ← Devotional celebration videos
│   ├── robots.txt               ← Web crawler permissions
│   ├── llms.txt                 ← AI search agent index
│   └── ai-catalog.json          ← Structured agentic catalog
├── src/
│   ├── App.jsx                  ← Main router, scroll restoration & layout shell
│   ├── main.jsx                 ← React 18 DOM mount
│   ├── components/
│   │   ├── Navbar.jsx           ← Responsive sticky navigation with mobile drawer
│   │   ├── Footer.jsx           ← Devotional footer with quick links & map
│   │   ├── PageHero.jsx         ← Reusable page header with breadcrumbs
│   │   ├── SectionHeader.jsx    ← Ornamental temple heading component
│   │   ├── DarshanBar.jsx       ← Darshan timings indicator
│   │   ├── FestivalCountdown.jsx← Real-time Thaipooyam countdown
│   │   ├── GoldenParticles.jsx  ← Ambient golden floating particles
│   │   ├── InteractiveDevotion.jsx ← Virtual lamp & prayer counter
│   │   ├── VazhipaduCalculator.jsx ← Offering fee calculator & WhatsApp integration
│   │   ├── GalleryGrid.jsx      ← Categorized photo grid
│   │   ├── Lightbox.jsx         ← Fullscreen image viewer
│   │   └── reactbits/           ← React Bits animation components
│   │       ├── ShinyText.jsx
│   │       ├── BlurText.jsx
│   │       ├── SpotlightCard.jsx
│   │       ├── TiltedCard.jsx
│   │       └── AnimatedContent.jsx
│   ├── data/
│   │   └── templeData.js        ← Centralized vazhipadu, pooja, event & committee data
│   └── pages/
│       ├── Home.jsx             ← Rich devotional landing page
│       ├── Pooja.jsx            ← Pooja schedules & interactive calculator
│       ├── Events.jsx           ← Festivals & annual celebrations
│       ├── Committee.jsx        ← Executive committee directory
│       ├── Gallery.jsx          ← Photo and video archives
│       └── Contact.jsx          ← Location, phone numbers & enquiry form
└── css/
    └── style.css                ← Master stylesheet (custom responsive typography & components)
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
- **Contact:** +91 90744 39789