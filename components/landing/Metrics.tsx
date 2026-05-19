'use client'

import CountUp from '@/components/ui/CountUp'
import FadeIn from '@/components/ui/FadeIn'

const METRICS = [
  { raw: 28, display: '$', suffix: 'M', unit: 'COP', label: 'en ahorros documentados', key: 'Manufactura · 2024' },
  { raw: 34, display: '−', suffix: '%', unit: null, label: 'reducción factura cloud', key: 'Servicios profesionales' },
  { raw: 41, display: '+', suffix: '%', unit: null, label: 'productividad operacional', key: 'Servicios financieros' },
  { raw: 0,  display: '',  suffix: '',  unit: null, label: 'downtime en migración', key: 'SLAs contractuales', zero: true },
]

export default function Metrics() {
  return (
    <section className="bg-ink border-t border-white/[0.06] border-b border-white/[0.06] px-[clamp(24px,5vw,96px)] py-20">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {METRICS.map((m, i) => (
          <FadeIn
            key={m.key}
            delay={i * 80}
            className={`flex flex-col gap-2 px-0 py-10 md:py-0 md:px-10 border-b md:border-b-0 md:border-r border-white/[0.07] last:border-0 ${i % 2 === 0 ? 'pr-6 md:pr-10' : 'pl-6 md:pl-10 border-l md:border-l-0'}`}
          >
            <div className="font-display font-semibold leading-none tracking-[-0.03em] text-bone" style={{ fontSize: 'clamp(40px, 4vw, 68px)' }}>
              {m.zero ? (
                <span>
                  0<span className="text-voltage-light font-serif italic">.</span>
                </span>
              ) : (
                <span>
                  {m.display}
                  <CountUp end={m.raw} duration={1600} suffix={m.suffix} />
                  {m.unit && <span className="text-[0.45em] ml-1 text-fog/60 align-super font-normal">{m.unit}</span>}
                </span>
              )}
            </div>
            <p className="text-fog/70 text-[13px] leading-snug">{m.label}</p>
            <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-mist/50 mt-1">{m.key}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
