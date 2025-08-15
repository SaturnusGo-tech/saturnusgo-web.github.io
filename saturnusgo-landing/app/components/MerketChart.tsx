'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * Профессиональный интерактивный SVG:
 * - Три бары (TAM / SAM / SOM) с анимацией высоты
 * - Линия Year 0 → Year 3 (рост) с плавным draw
 * - Легенда и оси
 * - Автоанимация при появлении в вьюпорте
 */
export default function MarketChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current!;
    const io = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // значения в условных единицах (нормализовано)
  const dataBars = [
    { key: 'TAM', val: 100, label: '$2.1T+' },
    { key: 'SAM', val: 9, label: '$185B' },
    { key: 'SOM', val: 5, label: '$110M (Yr3)' }
  ];

  // линия роста (условные значения за 4 года/точки)
  const growth = [10, 18, 32, 44]; // ARPU/композитная метрика — пример
  const maxY = 100;

  const W = 800, H = 340, P = 48;
  const chartW = W - P * 2;
  const chartH = H - P * 2;

  const barW = chartW / (dataBars.length * 2); // промежутки
  const barGap = barW;

  const y = (v: number) => P + chartH - (v / maxY) * chartH;
  const xBar = (i: number) => P + i * (barW + barGap) + barGap * 0.5;

  const xLine = (i: number) => P + (chartW / (growth.length - 1)) * i;

  const pathD = growth
    .map((v, i) => `${i === 0 ? 'M' : 'L'} ${xLine(i)} ${y(v)}`)
    .join(' ');

  return (
    <div ref={ref} className="market-chart">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Market size and 3-year outlook">
        {/* grid lines */}
        {[0, 25, 50, 75, 100].map((tick) => (
          <g key={tick}>
            <line x1={P} y1={y(tick)} x2={W - P} y2={y(tick)} className="mc-grid" />
            <text x={P - 8} y={y(tick)} className="mc-ytick">{tick}</text>
          </g>
        ))}

        {/* bars */}
        {dataBars.map((b, i) => {
          const h = (b.val / maxY) * chartH;
          return (
            <g key={b.key} transform={`translate(${xBar(i)},${P + chartH - h})`}>
              <rect
                width={barW}
                height={inView ? h : 0}
                className="mc-bar"
                style={{ transition: 'height 700ms cubic-bezier(.2,.8,.2,1)' }}
              />
              <text x={barW / 2} y={-8} className="mc-barlabel">{b.label}</text>
              <text x={barW / 2} y={h + 18} className="mc-xlabel">{b.key}</text>
            </g>
          );
        })}

        {/* growth line */}
        <path
          d={pathD}
          className="mc-line"
          style={{
            strokeDasharray: 1200,
            strokeDashoffset: inView ? 0 : 1200,
            transition: 'stroke-dashoffset 900ms ease 250ms'
          }}
        />
        {/* points */}
        {growth.map((v, i) => (
          <circle key={i} cx={xLine(i)} cy={y(v)} r={inView ? 4 : 0} className="mc-point"
            style={{ transition: 'r 500ms ease 300ms' }} />
        ))}

        {/* x labels for growth horizon */}
        {growth.map((_, i) => (
          <text key={i} x={xLine(i)} y={H - P + 22} className="mc-xhoriz">
            {i === 0 ? 'Y0' : `Y${i}`}
          </text>
        ))}
      </svg>
    </div>
  );
}