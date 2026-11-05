# 🌊 Deep Dive Australia — Bespoke Oceanic Expeditions

[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-12.2-FF0055?logo=framer&logoColor=white)](https://motion.dev/)

An ultra-luxury, editorial web experience designed for **Deep Dive Australia** — premier private scuba diving expeditions across the Great Barrier Reef, Ningaloo Marine Park, historic shipwrecks, and deep oceanic trenches.

Built with an authentic **editorial luxury aesthetic**, cutting-edge **cinematic lighting physics**, and a **90%+ segregated modular architecture**.

---

## ✨ Key Features & Innovations

### 1. 🔦 Cinematic Flashlight & Torch Engine (`useFlashlight`)
- **Hydraulic Inertia:** Cursor and touch tracking feature fluid water resistance via smooth linear interpolation (Lerp).
- **Three Dynamic Lighting Modes:**
  - 🔦 **Torch Focus:** Tactical beam with soft falloff halo and variable cone radius (220px / 280px / 360px).
  - 💡 **Ocean Floodlight:** High-power ambient vessel illumination revealing the full reef canvas.
  - 🔮 **UV Fluro Bioluminescence:** Real-world night diving blacklight mode causing coral fluorescents and marine life to glow in neon violet, emerald, and cyan.
- **Drifting Plankton Particles:** 32 organic bioluminescent motes drifting naturally in oceanic currents.
- **Live HUD Telemetry:** Coordinates (`18°18'S 147°42'E`), depth (`38.4m`), visibility (`45m+`), and gas mix (`Nitrox 32%`).

### 2. 🧭 Vertical Ocean Depth Gauge HUD (`DepthGauge`)
- Screen-pinned precision telemetry instrument tracking the diver's descent from **0m (Sunlight Surface)** down to **150m (The Hadal Trench)** in real time.
- Calculates ambient water pressure in atmospheres (`1.0 ATA` to `16.0 ATA`).
- Interactive zone markers that allow instant smooth-scrolling to any oceanic stratum.

### 3. 🎧 Procedural Web Audio Hydrophone Soundscape (`useUnderwaterAudio`)
- Standalone, zero-latency Web Audio API synthesizer — no heavy audio files required.
- Generates continuous low-frequency oceanic sub-harmonic resonance (55Hz / 82Hz) with slow wave swell filters.
- Plays procedural micro-bubble burst sound effects on navigation clicks and interactions.

### 4. 📡 Real-Time Marine Weather Telemetry (`useMarineConditions`)
- Direct integration with the Open-Meteo Marine & Forecast APIs.
- Live swell height, wave periods, wind velocity, water temperature, and visibility condition scoring across 5 major Australian diving sectors:
  - *Outer Great Barrier Reef (Ribbon Reefs)*
  - *Ningaloo Reef & Muiron Trench*
  - *SS Yongala Historic Shipwreck*
  - *Fish Rock Ocean Cavern*
  - *Osprey Reef Continental Dropoff*
- Interactive monthly booking calendar with real-time remaining cadre spots.

### 5. 🛥️ Expedition Fleet & Safety Standards
- Specifications, ranges, and equipment breakdowns for:
  - **MV Calypso Deep** (45m Ice-Class Oceanic Expedition Superyacht)
  - **Triton Apex** (11.5m High-Velocity Offshore RIB Tender)
  - **Abyss-One** (300m Deep Submersible Support Vessel)
- 1:4 maximum guide-to-diver ratio, dedicated medical O2, DAN priority airlift integration, and 100% incident-free safety record.

### 6. 🤿 Precision Life Support Gear Builder (`EquipmentSection`)
- Curated technical gear catalog: Halcyon balanced regulators, Shearwater Teric titanium dive computers, Fourth Element thermal suits, and Nauticam 8K cinema camera rigs.
- Interactive rental kit builder with dynamic daily pricing that automatically transfers into the booking dossier.

### 7. 📖 Editorial Field Journal & Photo Lightbox (`LogbookGallerySection`)
- National Geographic-style diver journal logs with exact dive numbers, depths, bottom times, gas mixes, species sightings, and field notes.
- Keyboard-accessible fullscreen photo lightbox (Escape, Arrow Left, Arrow Right).

### 8. 📋 Private Concierge Booking Dossier (`BookingForm`)
- Bespoke reservation flow pre-filled with selected expeditions, preferred departure dates, and custom gear configurations.

---

## 🎨 Editorial Design System & Typography

Unlike generic AI-generated templates with oversaturated cyberpunk glows, Deep Dive Australia uses a refined, humanistic editorial design language:

| Token | Implementation | Inspiration / Purpose |
|---|---|---|
| **Display Headings** | `Cormorant Garamond` (Light / Italic) | Luxury editorial magazines, maritime journals, Rolex, Aman |
| **Body & UI** | `Plus Jakarta Sans` (300 / 400 / 500) | Humanistic readability, balanced negative space |
| **Telemetry / Data** | `Space Mono` (Tabular Numbers) | Swiss nautical chartplotters, dive computers |
| **Background Palette** | `#070D18` & `#0B192C` | Deep obsidian ocean & abyssal blue |
| **Accents** | `#E5C890` & `#F4EBD9` | Pearl sand, sunlight caustics, and champagne gold |
| **Surfaces** | Glassmorphism with `border-white/10` | Understated frosted glass with hairline borders |

---

## 🏗️ Clean Modular Architecture (90%+ Segregated)

The codebase strictly adheres to single-responsibility principles, keeping every file focused, typed, and under 200 lines:

```
Deep-Drive/
├── public/
│   └── assets/                     # Branding references & favicon
├── src/
│   ├── types/                      # Strictly typed interfaces
│   │   ├── conditions.ts           # Marine telemetry & dive site types
│   │   ├── expedition.ts           # Expedition, itinerary & pricing models
│   │   ├── fleet.ts                # Vessels, fleet stats & safety standards
│   │   ├── gear.ts                 # Life support catalog & rental cart types
│   │   └── logbook.ts              # Dive log entries & categories
│   ├── data/                       # Curated datasets & 4K photography
│   │   ├── conditionsData.ts       # Australian dive sites & calendar trips
│   │   ├── expeditionsData.ts      # 6 signature luxury expeditions
│   │   ├── fleetData.ts            # Explorer vessels & safety metrics
│   │   ├── gearData.ts             # Technical diving equipment
│   │   └── logbookData.ts          # Authentic dive journal records
│   ├── hooks/                      # Custom React hooks
│   │   ├── useDepthScroll.ts       # 0m–150m scroll tracker & ATA pressure
│   │   ├── useFlashlight.ts        # Mouse/touch Lerp physics & torch modes
│   │   ├── useMarineConditions.ts  # Live Open-Meteo telemetry fetcher
│   │   └── useUnderwaterAudio.ts   # Web Audio hydrophone & bubble synthesizer
│   ├── components/
│   │   ├── common/                 # BrandLogo, CustomCursor, DepthGauge, Preloader, SectionHeader
│   │   ├── hero/                   # HeroSection, TorchControls, HeroTelemetry, PlanktonParticles
│   │   ├── expeditions/            # ExpeditionsSection, ExpeditionCard, ExpeditionModal
│   │   ├── conditions/             # ConditionsCalendarSection, ConditionsTelemetryCard, TripCalendar
│   │   ├── safety/                 # SafetyFleetSection, VesselCard, SafetyStandardsGrid
│   │   ├── equipment/              # EquipmentSection, GearCard, RentalCalculatorDrawer
│   │   ├── logbook/                # LogbookGallerySection, LogbookCard, PhotoLightbox
│   │   ├── contact/                # ContactFooterSection, BookingForm
│   │   └── layout/                 # Navbar
│   ├── styles/
│   │   └── cinematic.css           # Glassmorphism, water caustics, and glow filters
│   ├── App.tsx                     # Clean orchestrator (< 90 lines)
│   ├── index.css                   # Tailwind v4 theme & typography tokens
│   └── main.tsx                    # React DOM entry point
├── index.html                      # HTML5 template & Google Fonts imports
├── vite.config.ts                  # Vite 8 configuration with path aliases
└── package.json                    # Project dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0 or later recommended)
- `npm` or `pnpm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/naseem-shah92/Deep-Drive.git "Deep Drive"
   cd "Deep Drive"
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to experience the site.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Typecheck & Lint:**
   ```bash
   npm run lint
   ```

---

## 🛠️ Tech Stack & Libraries

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Motion:** [Motion (formerly Framer Motion)](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Sound Engine:** Native Web Audio API
- **Telemetry:** Open-Meteo Marine & Forecast API

---

## 📜 License

Created with precision for **Deep Dive Australia**. All rights reserved &copy; 2026.
