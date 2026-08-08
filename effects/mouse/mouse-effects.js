/**
 * Web Dev Toolkit - Mouse Interactive Physics Effects
 * 1. GalaxyVortex (Galaxy Vortex Effect)
 * 2. SparklerPhysics (Sparkler Physics Gravity Effect)
 * 3. ConstellationLinks (Constellation Link Distance Effect)
 * Tuned with compact radius and subtle trail physics.
 */

// 1. GALAXY VORTEX EFFECT
export class GalaxyVortex {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.maxParticles = options.maxParticles || 100;
    this.colors = [
      'rgba(99, 102, 241, ',
      'rgba(168, 85, 247, ',
      'rgba(34, 211, 238, ',
      'rgba(8, 203, 0, ',
      'rgba(255, 121, 198, '
    ];
  }

  spawn(x, y, count = 2) {
    for (let i = 0; i < count; i++) {
      if (this.particles.length >= this.maxParticles) {
        this.particles.shift();
      }
      const angle = Math.random() * Math.PI * 2;
      const colorPrefix = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.particles.push({
        startX: x,
        startY: y,
        x: x,
        y: y,
        angle: angle,
        radius: Math.random() * 2 + 1,
        spinSpeed: (Math.random() * 0.05 + 0.03) * (Math.random() > 0.5 ? 1 : -1),
        radiusExpansion: Math.random() * 0.35 + 0.15,
        size: Math.random() * 1.5 + 0.6,
        alpha: 1,
        decay: 0.022,
        colorPrefix: colorPrefix
      });
    }
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.angle += p.spinSpeed;
      p.radius += p.radiusExpansion;
      p.x = p.startX + Math.cos(p.angle) * p.radius;
      p.y = p.startY + Math.sin(p.angle) * p.radius;
      p.size = Math.max(0.1, p.size - 0.012);
      p.alpha -= p.decay;

      if (p.alpha <= 0 || p.size <= 0.1) {
        this.particles.splice(i, 1);
      }
    }
  }

  draw() {
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `${p.colorPrefix}${p.alpha})`;
      this.ctx.shadowBlur = 4;
      this.ctx.shadowColor = `${p.colorPrefix}0.8)`;
      this.ctx.fill();
    }
  }
}

// 2. SPARKLER PHYSICS EFFECT
export class SparklerPhysics {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.maxParticles = options.maxParticles || 80;
    this.gravity = options.gravity || 0.035;
    this.colors = [
      'rgba(251, 191, 36, ',
      'rgba(251, 146, 60, ',
      'rgba(244, 63, 94, ',
      'rgba(168, 85, 247, ',
      'rgba(34, 211, 238, '
    ];
  }

  spawn(x, y, count = 2) {
    for (let i = 0; i < count; i++) {
      if (this.particles.length >= this.maxParticles) {
        this.particles.shift();
      }
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.8 + 0.4;
      const colorPrefix = this.colors[Math.floor(Math.random() * this.colors.length)];

      this.particles.push({
        x: x,
        y: y,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed - (Math.random() * 0.6),
        size: Math.random() * 1.8 + 0.6,
        alpha: 1,
        decay: Math.random() * 0.025 + 0.015,
        colorPrefix: colorPrefix
      });
    }
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.speedY += this.gravity;
      p.x += p.speedX;
      p.y += p.speedY;
      p.size = Math.max(0.1, p.size - 0.02);
      p.alpha -= p.decay;

      if (p.alpha <= 0 || p.size <= 0.1) {
        this.particles.splice(i, 1);
      }
    }
  }

  draw() {
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `${p.colorPrefix}${p.alpha})`;
      this.ctx.shadowBlur = 5;
      this.ctx.shadowColor = `${p.colorPrefix}0.9)`;
      this.ctx.fill();
    }
  }
}

// 3. CONSTELLATION LINKS EFFECT
export class ConstellationLinks {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.maxParticles = options.maxParticles || 60;
    this.maxDistance = options.maxDistance || 45;
    this.colors = [
      'rgba(99, 102, 241, ',
      'rgba(168, 85, 247, ',
      'rgba(34, 211, 238, ',
      'rgba(8, 203, 0, ',
      'rgba(255, 121, 198, '
    ];
  }

  spawn(x, y, count = 2) {
    for (let i = 0; i < count; i++) {
      if (this.particles.length >= this.maxParticles) {
        this.particles.shift();
      }
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.6 + 0.2;
      const colorPrefix = this.colors[Math.floor(Math.random() * this.colors.length)];

      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 1.4 + 0.7,
        alpha: 1,
        decay: Math.random() * 0.012 + 0.008,
        colorPrefix: colorPrefix
      });
    }
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
      }
    }
  }

  draw() {
    const len = this.particles.length;

    // Draw connecting lines
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.maxDistance) {
          const avgAlpha = (this.particles[i].alpha + this.particles[j].alpha) / 2;
          const lineAlpha = (1 - dist / this.maxDistance) * avgAlpha * 0.4;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = `rgba(99, 102, 241, ${lineAlpha})`;
          this.ctx.lineWidth = 0.7;
          this.ctx.stroke();
        }
      }
    }

    // Draw dots
    for (let i = 0; i < len; i++) {
      const p = this.particles[i];
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `${p.colorPrefix}${p.alpha})`;
      this.ctx.shadowBlur = 3;
      this.ctx.shadowColor = `${p.colorPrefix}0.8)`;
      this.ctx.fill();
    }
  }
}
