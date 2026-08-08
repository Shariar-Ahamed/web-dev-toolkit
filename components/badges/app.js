/**
 * VERIFIED BADGES SHOWCASE - CONTROLLER ENGINE
 */

document.addEventListener('DOMContentLoaded', () => {
  const badgeTarget = document.getElementById('preview-badge-target');
  const badgeCardButtons = document.querySelectorAll('.badge-card-btn');
  const toast = document.getElementById('toast');

  // Badge Variant Definitions
  const badgeVariants = {
    official: {
      html: `<span class="badge-verified-blue" title="Verified Account"><i class="fas fa-circle-check"></i></span>`,
      name: 'Official Twitter/X Blue'
    },
    pulse: {
      html: `<span class="badge-verified-blue animate-pulse-subtle" title="Top Verified Creator"><i class="fas fa-circle-check"></i></span>`,
      name: 'Animated Pulse Leaderboard Badge'
    },
    gold: {
      html: `<span class="badge-verified-gold" title="Verified Organization"><i class="fas fa-circle-check"></i></span>`,
      name: 'Gold Organization Badge'
    },
    neon: {
      html: `<span class="badge-verified-neon" title="Cyberpunk Verified"><i class="fas fa-circle-check"></i></span>`,
      name: 'Cyberpunk Neon Badge'
    },
    pill: {
      html: `<span class="creator-verified-pill"><i class="fas fa-circle-check"></i> Verified</span>`,
      name: 'Creator Verified Pill'
    }
  };

  badgeCardButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      badgeCardButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const variantKey = btn.getAttribute('data-variant');
      if (badgeTarget && badgeVariants[variantKey]) {
        badgeTarget.innerHTML = badgeVariants[variantKey].html;
      }
    });
  });

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
