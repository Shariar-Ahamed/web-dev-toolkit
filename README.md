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
│   ├── buttons/
│   ├── cards/
│   ├── forms/
│   ├── navigation/
│   ├── modals/
│   ├── badges/
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

### 🖱️ Mouse Effects (`effects/mouse/`)
All formulas, notes, and detailed specifications are documented in **[effects/mouse/mouse-effects.md](effects/mouse/mouse-effects.md)**.

1. **🌌 Galaxy Vortex Effect (`initGalaxy`)**:
   - Spawns particles at cursor position that rotate outward in a tight spiral vortex.
   - **Formula:** `angle += spinSpeed`, `radius += radiusExpansion`, `x = startX + cos(angle) * radius`, `y = startY + sin(angle) * radius`.
   - **Color Palette:** Indigo, Purple, Cyan, Green, Pink.
   - **Specs:** Start size `0.6px - 2.1px`, compact expansion `0.15 - 0.50`, max 100 particles.

2. **🎆 Sparkler Physics Effect (`initSparkler`)**:
   - Emits fiery sparks with gentle velocity pulled downward by gravity physics.
   - **Formula:** `speedY += gravity (0.035)`, `x += speedX`, `y += speedY`.
   - **Color Palette:** Amber, Orange, Rose, Purple, Cyan.
   - **Specs:** Start size `0.6px - 2.4px`, soft initial speed `0.4 - 2.2`, max 80 particles.

3. **🕸️ Constellation Links Effect (`initConstellation`)**:
   - Spawns subtle drifting nodes that connect with dynamic lines when within proximity.
   - **Formula:** Line drawn when `distance < 45px` with opacity `(1 - dist / maxDistance) * avgAlpha * 0.4`.
   - **Color Palette:** Indigo, Purple, Cyan, Green, Pink.
   - **Specs:** Start size `0.7px - 2.1px`, proximity threshold `45px`, max 60 particles.

---

## 🚀 How to Use

Open any module's documentation or interactive portal directly in your browser:

* **Interactive Preview Portal:** Open [effects/mouse/index.html](effects/mouse/index.html) to interact with live canvas controls and copy code snippets.
* **Detailed Documentation & Notes:** Read [effects/mouse/mouse-effects.md](effects/mouse/mouse-effects.md) for full formulas, color palettes, and particle behaviors.
* **Standalone ES6 Module:** Import [effects/mouse/mouse-effects.js](effects/mouse/mouse-effects.js) directly into your projects:
  ```javascript
  import { GalaxyVortex, SparklerPhysics, ConstellationLinks } from './effects/mouse/mouse-effects.js';
  ```
