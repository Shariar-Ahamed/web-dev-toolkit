# web-dev-toolkit

A personal collection of reusable web development components, UI elements, visual effects, animations, utilities, and creative code experiments.

---

## 📁 Project Structure

`ash
web-dev-toolkit/
├── README.md                          # Main repository documentation
│
├── components/                        # Reusable UI components
│   ├── badges/                        # Official verified badges, tags & pills
│   │   ├── styles/
│   │   │   └── main.css               # Showcase layout & styling
│   │   ├── app.js                     # Interactive badge customizer
│   │   ├── index.html                 # Live preview & notes portal
│   │   ├── verified-badge.css         # Reusable CSS classes for badges
│   │   └── verified-badge.md          # Documentation & CDN instructions
│   └── keyboard/                      # Apple Magic Keyboard with mechanical audio
│       ├── components/ui/
│       │   └── keyboard.jsx           # Pure SVG standalone React keyboard
│       ├── lib/
│       │   └── utils.js               # Standard cn() helper
│       ├── public/sounds/             # CherryMX audio sprite & timestamp config
│       ├── KeyboardDemo.jsx           # Ready-to-use example wrapper
│       └── README.md                  # Detailed integration guide
│
├── effects/                           # Visual, particle & physics effects
│   └── mouse/                         # Mouse-driven particle physics & effects
│       ├── styles/
│       │   └── main.css               # Design system & theme styles
│       ├── app.js                     # Interactive canvas engine & controls
│       ├── index.html                 # Interactive preview & documentation portal
│       ├── mouse-effects.js           # Reusable ES6 class modules
│       └── mouse-effects.md           # Documentation, specs & particle formulas
│
├── tools/                             # Developer utilities & automation scripts
│   └── pdf-converter/                 # PDF to high-resolution PNG converter
│       ├── convert_pdf.bat            # One-click batch runner
│       ├── pdf_converter.py           # Core conversion script with progress bar
│       ├── requirements.txt           # Python dependencies (PyMuPDF, Pillow)
│       └── README.md                  # CLI documentation & usage guide
│
└── PDF/                               # Reference assets & design standards
    └── Dracula_Theme_Official_Color_Standards.pdf
`

---

## 🚀 Implemented Modules

### 🎯 1. Mouse Effects (ffects/mouse/)
All formulas, notes, and detailed specifications are documented in **[effects/mouse/mouse-effects.md](effects/mouse/mouse-effects.md)**.

* **🌌 Galaxy Vortex (initGalaxy)**: Spawns particles that rotate in a tight spiral vortex (ngle += spinSpeed, 
adius += radiusExpansion).
* **✨ Sparkler Physics (initSparkler)**: Sparks bursting with downward gravity physics (speedY += gravity).
* **🕸️ Constellation Links (initConstellation)**: Proximity-based lines connecting nearby drifting nodes (maxDistance = 45px).

---

### 🛡️ 2. Verified Blue Badges (components/badges/)
All notes, variants, and CDN instructions are documented in **[components/badges/verified-badge.md](components/badges/verified-badge.md)**.

* **Official Twitter/X Blue Badge**: Font Awesome as fa-circle-check with official Twitter color #1D9BF0.
* **Animated Pulse Badge**: Subtle pulsing glow (nimate-pulse) for leaderboard highlights and top creator profiles.
* **Gold Organization & Neon Variants**: Official organization gold #E7A43B, Cyberpunk neon #00FFCC, and frosted glass creator pill.
* **Zero-Dependency SVG & Font Awesome CDN**: Ready-to-copy HTML, JSX, CSS, and pure SVG code snippets.

---

### ⌨️ 3. Apple Magic Keyboard (components/keyboard/)
Full installation and integration details are in **[components/keyboard/README.md](components/keyboard/README.md)**.

* **Mechanical CherryMX Sound**: Interactive keystrokes paired with realistic audio clicks (sound.ogg + config.json sound sprite).
* **Zero External Icon Dependency**: Built exclusively with clean inline SVG key icons (Command, Option, Shift, Return, etc.).
* **Framer Motion Animations**: Realistic key depression, backlight illumination, and live keypress state detection.
* **Plug-and-Play Component**: Effortlessly import <Keyboard enableSound={true} /> into any Next.js, Vite, or React project.

---

### 📄 4. PDF to Image Converter (	ools/pdf-converter/)
All command-line options and requirements are in **[tools/pdf-converter/README.md](tools/pdf-converter/README.md)**.

* **High-Resolution Rendering**: Converts PDF pages into crisp 300+ DPI PNG, JPEG, or WEBP images using PyMuPDF.
* **Real-Time Terminal Progress**: Features animated ASCII progress bar, ticking stopwatch, and completion stats.
* **One-Click Batch Execution**: Drag-and-drop support via convert_pdf.bat.

---

## 💻 How to Use

Open any module's documentation or interactive portal directly in your browser or import into your project:

* **Mouse Effects Portal:** Open [effects/mouse/index.html](effects/mouse/index.html) to interact with live canvas controls and copy code snippets.
* **Verified Badges Portal:** Open [components/badges/index.html](components/badges/index.html) for interactive badge previews and JSX/HTML snippets.
* **Keyboard Component:** Follow [components/keyboard/README.md](components/keyboard/README.md) to integrate into React/Next.js.
* **PDF Converter:** Run 	ools/pdf-converter/convert_pdf.bat or use python tools/pdf-converter/pdf_converter.py <file.pdf>.
