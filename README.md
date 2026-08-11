# web-dev-toolkit

A personal collection of reusable web development components, UI elements, visual effects, animations, utilities, and creative code experiments.

---

## 📂 Project Structure

```bash
web-dev-toolkit/
│
├── README.md                          # Main repository documentation
│
├── effects/
│   └── mouse/                         # Mouse-driven particle physics & effects
│       ├── styles/
│       │   └── main.css               # Design system & theme styles
│       ├── app.js                     # Interactive canvas engine & controls
│       ├── index.html                 # Interactive preview & documentation portal
│       ├── mouse-effects.js           # Reusable ES6 class modules
│       └── mouse-effects.md           # Documentation, specs & particle formulas
│
├── components/
│   ├── badges/                        # Official verified badges, tags & pills
│   │   ├── styles/
│   │   │   └── main.css               # Showcase layout & styling
│   │   ├── app.js                     # Interactive badge customizer
│   │   ├── index.html                 # Live preview & notes portal
│   │   ├── verified-badge.css         # Reusable CSS classes for badges
│   │   └── verified-badge.md          # Documentation & CDN instructions
│   ├── buttons/
│   ├── cards/
│   ├── forms/
│   ├── navigation/
│   ├── modals/
│   └── loaders/
│
├── animations/
│   ├── css/
│   ├── javascript/
│   └── tailwind/
│
├── snippets/
│   ├── html/
│   ├── css/
│   ├── javascript/
│   ├── react/
│   └── tailwind/
│
├── canvas/
│   ├── particles/
│   ├── backgrounds/
│   └── interactions/
│
├── svg/
│   ├── icons/
│   ├── illustrations/
│   └── effects/
│
└── utilities/
    ├── dom/
    ├── validation/
    ├── formatting/
    └── helpers/
```

---

## ✨ Implemented Modules

### 🖱️ 1. Mouse Effects (`effects/mouse/`)
All formulas, notes, and detailed specifications are documented in **[effects/mouse/mouse-effects.md](effects/mouse/mouse-effects.md)**.

* **🌌 Galaxy Vortex (`initGalaxy`)**: Spawns particles that rotate in a tight spiral vortex (`angle += spinSpeed`, `radius += radiusExpansion`).
* **🎆 Sparkler Physics (`initSparkler`)**: Sparks bursting with downward gravity physics (`speedY += gravity`).
* **🕸️ Constellation Links (`initConstellation`)**: Proximity-based lines connecting nearby drifting nodes (`maxDistance = 45px`).

---

### 🔵 2. Verified Blue Badges (`components/badges/`)
All notes, variants, and CDN instructions are documented in **[components/badges/verified-badge.md](components/badges/verified-badge.md)**.

* **Official Twitter/X Blue Badge**: Font Awesome `fas fa-circle-check` with official Twitter color `#1D9BF0`.
* **Animated Pulse Badge**: Subtle pulsing glow (`animate-pulse`) for leaderboard highlights and top creator profiles.
* **Gold Organization & Neon Variants**: Official organization gold `#E7A43B`, Cyberpunk neon `#00FFCC`, and frosted glass creator pill.
* **Zero-Dependency SVG & Font Awesome CDN**: Ready-to-copy HTML, JSX, CSS, and pure SVG code snippets.

---

## 🚀 How to Use

Open any module's documentation or interactive portal directly in your browser:

* **Mouse Effects Portal:** Open [effects/mouse/index.html](effects/mouse/index.html) to interact with live canvas controls and copy code snippets.
* **Verified Badges Portal:** Open [components/badges/index.html](components/badges/index.html) for interactive badge previews and JSX/HTML snippets.
* **Standalone ES6 Modules:**
  ```javascript
  import { GalaxyVortex, SparklerPhysics, ConstellationLinks } from './effects/mouse/mouse-effects.js';
  ```
  
---
