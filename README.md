# web-dev-toolkit

A personal collection of reusable web development components, UI elements, visual effects, animations, utilities, and creative code experiments.

---

## 📁 Project Structure

```text
web-dev-toolkit/
├── 📁 PDF/
│   └── 📕 Dracula_Theme_Official_Color_Standards.pdf
├── 📁 components/
│   ├── 📁 badges/
│   │   ├── 📁 styles/
│   │   │   └── 🎨 main.css
│   │   ├── 📄 app.js
│   │   ├── 🌐 index.html
│   │   ├── 🎨 verified-badge.css
│   │   └── 📝 verified-badge.md
│   └── 📁 keyboard/
│       ├── 📁 components/
│       │   └── 📁 ui/
│       │       └── 📄 keyboard.jsx
│       ├── 📁 lib/
│       │   └── 📄 utils.js
│       ├── 📁 public/
│       │   └── 📁 sounds/
│       │       ├── ⚙️ config.json
│       │       └── 🎵 sound.ogg
│       ├── 📄 KeyboardDemo.jsx
│       └── 📝 README.md
├── 📁 effects/
│   └── 📁 mouse/
│       ├── 📁 styles/
│       │   └── 🎨 main.css
│       ├── 📄 app.js
│       ├── 🌐 index.html
│       ├── 📄 mouse-effects.js
│       └── 📝 mouse-effects.md
├── 📁 tools/
│   └── 📁 pdf-converter/
│       ├── 📝 README.md
│       ├── 📄 convert_pdf.bat
│       ├── 🐍 pdf_converter.py
│       └── 📄 requirements.txt
└── 📝 README.md
```

---

## 🚀 Implemented Modules

### 🎯 1. Mouse Effects (`effects/mouse/`)
All formulas, notes, and detailed specifications are documented in **[effects/mouse/mouse-effects.md](effects/mouse/mouse-effects.md)**.

* **🌌 Galaxy Vortex (`initGalaxy`)**: Spawns particles that rotate in a tight spiral vortex (`angle += spinSpeed`, `radius += radiusExpansion`).
* **✨ Sparkler Physics (`initSparkler`)**: Sparks bursting with downward gravity physics (`speedY += gravity`).
* **🕸️ Constellation Links (`initConstellation`)**: Proximity-based lines connecting nearby drifting nodes (`maxDistance = 45px`).

---

### 🛡️ 2. Verified Blue Badges (`components/badges/`)
All notes, variants, and CDN instructions are documented in **[components/badges/verified-badge.md](components/badges/verified-badge.md)**.

* **Official Twitter/X Blue Badge**: Font Awesome `fas fa-circle-check` with official Twitter color `#1D9BF0`.
* **Animated Pulse Badge**: Subtle pulsing glow (`animate-pulse`) for leaderboard highlights and top creator profiles.
* **Gold Organization & Neon Variants**: Official organization gold `#E7A43B`, Cyberpunk neon `#00FFCC`, and frosted glass creator pill.
* **Zero-Dependency SVG & Font Awesome CDN**: Ready-to-copy HTML, JSX, CSS, and pure SVG code snippets.

---

### ⌨️ 3. Apple Magic Keyboard (`components/keyboard/`)
Full installation and integration details are in **[components/keyboard/README.md](components/keyboard/README.md)**.

* **Mechanical CherryMX Sound**: Interactive keystrokes paired with realistic audio clicks (`sound.ogg` + `config.json` sound sprite).
* **Zero External Icon Dependency**: Built exclusively with clean inline SVG key icons (Command, Option, Shift, Return, etc.).
* **Framer Motion Animations**: Realistic key depression, backlight illumination, and live keypress state detection.
* **Plug-and-Play Component**: Effortlessly import `<Keyboard enableSound={true} />` into any Next.js, Vite, or React project.

---

### 📄 4. PDF to Image Converter (`tools/pdf-converter/`)
All command-line options and requirements are in **[tools/pdf-converter/README.md](tools/pdf-converter/README.md)**.  
Repository link: **[tools/pdf-converter/](https://github.com/Shariar-Ahamed/web-dev-toolkit/tree/main/tools/pdf-converter)**

* **High-Resolution Rendering**: Converts PDF pages into crisp 300+ DPI PNG, JPEG, or WEBP images using PyMuPDF.
* **Real-Time Terminal Progress**: Features animated ASCII progress bar, ticking stopwatch, and completion stats.
* **One-Click Batch Execution**: Drag-and-drop support via `convert_pdf.bat`.

---

## 💻 How to Use

Open any module's documentation or interactive portal directly in your browser or import into your project:

* **Mouse Effects Portal:** Open [effects/mouse/index.html](effects/mouse/index.html) to interact with live canvas controls and copy code snippets.
* **Verified Badges Portal:** Open [components/badges/index.html](components/badges/index.html) for interactive badge previews and JSX/HTML snippets.
* **Keyboard Component:** Follow [components/keyboard/README.md](components/keyboard/README.md) to integrate into React/Next.js.
* **PDF Converter:** Run `tools/pdf-converter/convert_pdf.bat` or use `python tools/pdf-converter/pdf_converter.py <file.pdf>`.
