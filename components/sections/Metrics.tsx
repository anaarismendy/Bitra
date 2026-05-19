import Container from '@/components/common/Container'
import CountUp   from '@/components/ui/CountUp'
import FadeIn    from '@/components/ui/FadeIn'
import { cn }    from '@/lib/cn'

const METRICS = [
  { raw: 28, display: '$', suffix: 'M', unit: 'COP', label: 'en ahorros documentados', key: 'Manufactura · 2024',    zero: false },
  { raw: 34, display: '−', suffix: '%', unit: null,  label: 'reducción factura cloud',  key: 'Servicios profesionales', zero: false },
  { raw: 41, display: '+', suffix: '%', unit: null,  label: 'productividad operacional', key: 'Servicios financieros',   zero: false },
  { raw: 0,  display: '',  suffix: '',  unit: null,  label: 'downtime en migración',     key: 'SLAs contractuales',      zero: true  },
]

export default function Metrics() {
  return (
    <section
      className="bg-bone text-ink py-[clamp(56px,8vw,96px)]"
      style={{ borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}
    >
      <Container className="grid grid-cols-2 md:grid-cols-4">
        {METRICS.map((m, i) => (
          <FadeIn
            key={m.key}
            delay={i * 90}
            className={cn(
              'flex flex-col gap-2 py-8 md:py-0 border-black/[0.07]',
              'border-b md:border-b-0 md:border-r last:border-0',
              i % 2 === 0
                ? 'pr-5 md:px-10'
                : 'pl-5 md:px-10 border-l md:border-l-0'
            )}
          >
            {/* Value */}
            <div
              className="font-display font-semibold leading-none tracking-[-0.04em] text-ink"
              style={{ fontSize: 'clamp(40px, 4vw, 68px)', fontVariantNumeric: 'tabular-nums' }}
            >
              {m.zero ? (
                <span>0<span className="text-voltage font-serif italic">.</span></span>
              ) : (
                <span>
                  {m.display}
                  <CountUp end={m.raw} duration={1600} suffix={m.suffix} />
                  {m.unit && (
                    <span className="text-[0.38em] ml-1 text-steel/50 align-super font-normal tracking-wider">
                      {m.unit}
                    </span>
                  )}
                </span>
              )}
            </div>

            <p className="text-steel/60 text-[13px] leading-snug mt-1">{m.label}</p>
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-steel/40 mt-0.5">{m.key}</p>
          </FadeIn>
        ))}
      </Container>
    </section>
  )
}
