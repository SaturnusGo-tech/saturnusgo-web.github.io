'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    let raf = 0, ty = 0, target = 0;
    const onScroll = () => { target = (window.scrollY || 0) * 0.08; if (!raf) tick(); };
    const tick = () => { ty += (target - ty) * 0.12; el.style.setProperty('--hero-y', `${ty}px`);
      raf = Math.abs(target - ty) < 0.2 ? 0 : requestAnimationFrame(tick); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <section ref={ref} className="hero reveal" style={{ transform: 'translateY(var(--hero-y))' }}>
      <div className="hero__copy">
        <h1>SaturnusGo</h1>
        <p className="lead">
          The next evolution in urban mobility — rides, bookings, and travel intelligence in one clean, powerful app.
        </p>
      </div>

      {/* без картинок — чистый текстовый hero */}
      <div className="hero__visual" aria-hidden>
        <div className="hero__frame" />
      </div>
    </section>
  );
}