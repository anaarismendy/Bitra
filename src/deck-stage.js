/**
 * Presentación fija 1920×1080 con escala al viewport y navegación por teclado.
 */
class DeckStage extends HTMLElement {
  connectedCallback() {
    if (this.dataset.mounted === '1') return;
    this.dataset.mounted = '1';

    const sections = [...this.querySelectorAll(':scope > section')];
    if (!sections.length) return;

    let index = 0;

    const outer = document.createElement('div');
    outer.style.cssText =
      'position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:var(--deck-bg,#000);overflow:hidden;';

    const scaler = document.createElement('div');
    scaler.style.cssText =
      'width:1920px;height:1080px;position:relative;transform-origin:center center;will-change:transform;';

    for (const s of sections) {
      s.style.position = 'absolute';
      s.style.inset = '0';
      s.style.width = '1920px';
      s.style.height = '1080px';
      s.style.display = 'none';
      scaler.appendChild(s);
    }
    outer.appendChild(scaler);
    this.replaceChildren(outer);

    const show = () => {
      sections.forEach((s, i) => {
        s.style.display = i === index ? 'block' : 'none';
      });
    };

    const resize = () => {
      const sw = outer.clientWidth / 1920;
      const sh = outer.clientHeight / 1080;
      const sc = Math.min(sw, sh);
      scaler.style.transform = `scale(${sc})`;
    };

    const next = () => {
      index = Math.min(index + 1, sections.length - 1);
      show();
    };
    const prev = () => {
      index = Math.max(index - 1, 0);
      show();
    };

    window.addEventListener('resize', resize);
    window.addEventListener(
      'keydown',
      (e) => {
        if (e.key === 'ArrowRight' || e.key === 'PageDown') {
          e.preventDefault();
          next();
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
          e.preventDefault();
          prev();
        } else if (e.key === ' ' && !e.shiftKey) {
          e.preventDefault();
          next();
        } else if (e.key === ' ' && e.shiftKey) {
          e.preventDefault();
          prev();
        }
      },
      { passive: false },
    );

    show();
    resize();
  }
}

customElements.define('deck-stage', DeckStage);
