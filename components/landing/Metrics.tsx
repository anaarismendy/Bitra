'use client'

import CountUp from '@/components/ui/CountUp'
import FadeIn from '@/components/ui/FadeIn'

const METRICS = [
  { raw: 28, display: '$', suffix: 'M', unit: 'COP', label: 'en ahorros documentados', key: 'Manufactura · 2024', glow: true },
  { raw: 34, display: '−', suffix: '%', unit: null, label: 'reducción factura cloud', key: 'Servicios profesionales', glow: false },
  { raw: 41, display: '+', suffix: '%', unit: null, label: 'productividad operacional', key: 'Servicios financieros', glow: false },
  { raw: 0,  display: '',  suffix: '',  unit: null, label: 'downtime en migración', key: 'SLAs contractuales', zero: true, glow: false },
]

export default function Metrics() {
  return (
    <section className="bg-ink border-t border-white/[0.05] border-b border-white/[0.05] px-[clamp(24px,5vw,96px)] py-24">
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-[1400px]">
        {METRICS.map((m, i) => (
          <FadeIn
            key={m.key}
            delay={i * 90}
            className={`flex flex-col gap-2 px-0 py-10 md:py-0 md:px-10 border-b md:border-b-0 md:border-r border-white/[0.06] last:border-0 ${i % 2 === 0 ? 'pr-6 md:pr-10' : 'pl-6 md:pl-10 border-l md:border-l-0'}`}
          >
            <div
              className="font-display font-semibold leading-none tracking-[-0.04em] text-bone tabular-nums"
              style={{
                fontSize: 'clamp(40px, 4vw, 68px)',
                fontVariantNumeric: 'tabular-nums',
                textShadow: m.glow ? '0 0 48px rgba(79,160,181,0.3)' : undefined,
              }}
            >
              {m.zero ? (
                <span>
                  0<span className="text-voltage-light font-serif italic" style={{ textShadow: '0 0 32px rgba(79,160,181,0.4)' }}>.</span>
                </span>
              ) : (
                <span>
                  {m.display}
                  <CountUp end={m.raw} duration={1600} suffix={m.suffix} />
                  {m.unit && <span className="text-[0.38em] ml-1 text-fog/50 align-super font-normal tracking-wider">{m.unit}</span>}
                </span>
              )}
            </div>
            <p className="text-fog/60 text-[13px] leading-snug mt-1">{m.label}</p>
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-mist/40 mt-0.5">{m.key}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
