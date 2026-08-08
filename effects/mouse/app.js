/**
 * WEB DEV TOOLKIT - MOUSE EFFECTS ENGINE
 * Implements Galaxy Vortex, Sparkler Physics, and Constellation Links
 * Self-contained inside effects/mouse/
 */

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('mouse-canvas');
  const ctx = canvas.getContext('2d');
  const activeEffectBadge = document.getElementById('active-effect-name');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const docCards = document.querySelectorAll('.effect-doc-detail');
  const toast = document.getElementById('toast');

  let width = canvas.width = canvas.offsetWidth;
  let height = canvas.height = canvas.offsetHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  });

  // Current active mode: 'galaxy' | 'sparkler' | 'constellation'
  let currentMode = 'galaxy';

  // Particle storage
  let galaxyParticles = [];
  let sparklerParticles = [];
  let constellationParticles = [];

  // Color Palettes
  const galaxyColors = [
    'rgba(99, 102, 241, ',   // Indigo
    'rgba(168, 85, 247, ',   // Purple
    'rgba(34, 211, 238, ',   // Cyan
    'rgba(8, 203, 0, ',      // Green
    'rgba(255, 121, 198, '   // Pink
  ];

  const sparklerColors = [
    'rgba(251, 191, 36, ',   // Amber
    'rgba(251, 146, 60, ',   // Orange
    'rgba(244, 63, 94, ',    // Rose
    'rgba(168, 85, 247, ',   // Purple
    'rgba(34, 211, 238, '    // Cyan
  ];

  const constellationColors = [
    'rgba(99, 102, 241, ',   // Indigo
    'rgba(168, 85, 247, ',   // Purple
    'rgba(34, 211, 238, ',   // Cyan
    'rgba(8, 203, 0, ',      // Green
    'rgba(255, 121, 198, '   // Pink
  ];

  // ==========================================================================
  // 1. GALAXY VORTEX SPAWNER (Tight & Compact Vortex Radius)
  // ==========================================================================
  function spawnGalaxy(x, y, count = 2) {
    for (let i = 0; i < count; i++) {
      if (galaxyParticles.length >= 100) {
        galaxyParticles.shift();
      }
      const angle = Math.random() * Math.PI * 2;
      const colorPrefix = galaxyColors[Math.floor(Math.random() * galaxyColors.length)];

      galaxyParticles.push({
        startX: x,
        startY: y,
        x: x,
        y: y,
        angle: angle,
        radius: Math.random() * 2 + 1,
        spinSpeed: (Math.random() * 0.05 + 0.03) * (Math.random() > 0.5 ? 1 : -1),
        radiusExpansion: Math.random() * 0.35 + 0.15,
        size: Math.random() * 1.5 + 0.6,
        alpha: 1.0,
        decay: 0.022,
        colorPrefix: colorPrefix
      });
    }
  }

  // ==========================================================================
  // 2. SPARKLER PHYSICS SPAWNER (Gentle & Tight Gravity Trail)
  // ==========================================================================
  function spawnSparkler(x, y, count = 2) {
    for (let i = 0; i < count; i++) {
      if (sparklerParticles.length >= 80) {
        sparklerParticles.shift();
      }
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.8 + 0.4;
      const colorPrefix = sparklerColors[Math.floor(Math.random() * sparklerColors.length)];

      sparklerParticles.push({
        x: x,
        y: y,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed - (Math.random() * 0.6),
        gravity: 0.035,
        size: Math.random() * 1.8 + 0.6,
        alpha: 1.0,
        decay: Math.random() * 0.025 + 0.015,
        colorPrefix: colorPrefix
      });
    }
  }

  // ==========================================================================
  // 3. CONSTELLATION LINKS SPAWNER (Short Range Connections)
  // ==========================================================================
  function spawnConstellation(x, y, count = 2) {
    for (let i = 0; i < count; i++) {
      if (constellationParticles.length >= 60) {
        constellationParticles.shift();
      }
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.6 + 0.2;
      const colorPrefix = constellationColors[Math.floor(Math.random() * constellationColors.length)];

      constellationParticles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 1.4 + 0.7,
        alpha: 1.0,
        decay: Math.random() * 0.012 + 0.008,
        colorPrefix: colorPrefix
      });
    }
  }

  // Handle Mouse Movement on Canvas
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (currentMode === 'galaxy') {
      spawnGalaxy(x, y, 2);
    } else if (currentMode === 'sparkler') {
      spawnSparkler(x, y, 2);
    } else if (currentMode === 'constellation') {
      spawnConstellation(x, y, 2);
    }
  });

  // Touch Support
  canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    if (currentMode === 'galaxy') spawnGalaxy(x, y, 2);
    else if (currentMode === 'sparkler') spawnSparkler(x, y, 2);
    else if (currentMode === 'constellation') spawnConstellation(x, y, 2);
  }, { passive: false });

  // ==========================================================================
  // MAIN ANIMATION LOOP
  // ==========================================================================
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // 1. RENDER GALAXY VORTEX
    if (currentMode === 'galaxy') {
      for (let i = galaxyParticles.length - 1; i >= 0; i--) {
        const p = galaxyParticles[i];
        p.angle += p.spinSpeed;
        p.radius += p.radiusExpansion;
        p.x = p.startX + Math.cos(p.angle) * p.radius;
        p.y = p.startY + Math.sin(p.angle) * p.radius;
        p.size = Math.max(0.1, p.size - 0.012);
        p.alpha -= p.decay;

        if (p.alpha <= 0 || p.size <= 0.1) {
          galaxyParticles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorPrefix}${p.alpha})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = `${p.colorPrefix}0.8)`;
        ctx.fill();
      }
    }

    // 2. RENDER SPARKLER PHYSICS
    else if (currentMode === 'sparkler') {
      for (let i = sparklerParticles.length - 1; i >= 0; i--) {
        const p = sparklerParticles[i];
        p.speedY += p.gravity;
        p.x += p.speedX;
        p.y += p.speedY;
        p.size = Math.max(0.1, p.size - 0.02);
        p.alpha -= p.decay;

        if (p.alpha <= 0 || p.size <= 0.1) {
          sparklerParticles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorPrefix}${p.alpha})`;
        ctx.shadowBlur = 5;
        ctx.shadowColor = `${p.colorPrefix}0.9)`;
        ctx.fill();
      }
    }

    // 3. RENDER CONSTELLATION LINKS (Tight Proximity Range: 45px)
    else if (currentMode === 'constellation') {
      for (let i = constellationParticles.length - 1; i >= 0; i--) {
        const p = constellationParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          constellationParticles.splice(i, 1);
        }
      }

      const len = constellationParticles.length;
      const maxDistance = 45;

      // Draw Proximity Connections
      for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
          const p1 = constellationParticles[i];
          const p2 = constellationParticles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const avgAlpha = (p1.alpha + p2.alpha) / 2;
            const lineAlpha = (1 - dist / maxDistance) * avgAlpha * 0.4;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${lineAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Draw Dots
      for (let i = 0; i < len; i++) {
        const p = constellationParticles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorPrefix}${p.alpha})`;
        ctx.shadowBlur = 3;
        ctx.shadowColor = `${p.colorPrefix}0.8)`;
        ctx.fill();
      }
    }

    requestAnimationFrame(animate);
  }

  // Start Animation Loop
  animate();

  // Mode Switcher Tabs
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentMode = btn.getAttribute('data-mode');

      // Update Header Badge
      const modeTitles = {
        galaxy: '🌌 ১. গ্যালাক্সি ভর্টেক্স ইফেক্ট (Galaxy Vortex)',
        sparkler: '🎆 ২. ফুলঝুরি বা স্পার্কলার ইফেক্ট (Sparkler Physics)',
        constellation: '🕸️ ৩. কন্সটেলেশন লিংক ইফেক্ট (Constellation Links)'
      };
      if (activeEffectBadge) {
        activeEffectBadge.textContent = modeTitles[currentMode];
      }

      // Highlight active doc section
      docCards.forEach(card => {
        if (card.getAttribute('data-effect') === currentMode) {
          card.style.borderColor = 'var(--accent-primary)';
          card.style.boxShadow = 'var(--shadow-glow)';
        } else {
          card.style.borderColor = 'var(--border-subtle)';
          card.style.boxShadow = 'none';
        }
      });
    });
  });

  // Copy Code Functionality
  window.copySnippet = (id, title) => {
    const codeEl = document.getElementById(id);
    if (!codeEl) return;
    const text = codeEl.innerText;

    navigator.clipboard.writeText(text).then(() => {
      if (toast) {
        toast.textContent = `📋 ${title} কোড সফলভাবে কপি হয়েছে!`;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
      }
    });
  };
});
