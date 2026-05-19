import Container      from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import CountUp        from '@/components/ui/CountUp'
import FadeIn         from '@/components/ui/FadeIn'

const FEATURED = {
  tag: 'Caso · 01 · Destacado',
  amount: 28,
  title: 'COP en ahorros documentados.',
  desc: 'Renegociación de contratos TI & consolidación de proveedores en una empresa de manufactura con 9 meses de engagement.',
  clients: 'Formacol · Contiflex',
  stats: [
    { label: 'SLAs nuevos implementados', value: '12'  },
    { label: 'Contratos renegociados',     value: '24'  },
    { label: 'Downtime en migración',      value: '0.'  },
    { label: 'Período de engagement',      value: '9m'  },
  ],
}

const MINOR_CASES = [
  {
    tag: 'Caso · 02', sector: 'Servicios profesionales',
    prefix: '−', value: 34, suffix: '%',
    label: 'reducción factura cloud',
    desc: 'Auditoría Azure + redimensionamiento de recursos · políticas FinOps · reportes mensuales de ahorro.',
    duration: '6 meses',
  },
  {
    tag: 'Caso · 03', sector: 'Servicios financieros',
    prefix: '+', value: 41, suffix: '%',
    label: 'productividad operacional',
    desc: 'Automatización contable y logística con N8N · integraciones ERP/CRM · workflows con validación inteligente.',
    duration: '4 meses',
  },
]

export default function CasosBanner() {
  return (
    <section id="casos" className="bg-paper text-ink py-[clamp(96px,13vw,180px)]">
      <Container>
        {/* Header */}
        <FadeIn>
          <SectionHeading
            layout="split"
            label="Casos de impacto"
            title={<>Trabajo real.<br />Resultados <em className="font-serif font-normal italic text-voltage">medibles</em>.</>}
            subtitle="Una muestra de proyectos representativos. Cada caso reporta lo que cambió en el balance — no en el discurso. Detalles operativos bajo NDA."
            className="mb-12 md:mb-16"
          />
        </FadeIn>

        {/* Featured case */}
        <FadeIn delay={80}>
          <article
            className="bg-ink text-bone grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] mb-4"
            style={{ border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-depth)' }}
          >
            {/* Left: headline */}
            <div className="p-7 sm:p-10 lg:p-14" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
              <div className="flex items-center justify-between mb-7 sm:mb-10 pb-5 sm:pb-6 border-b border-white/[0.06]">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-mist/60">
                  {FEATURED.tag}
                </span>
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-voltage-light border border-voltage-light/30 px-2.5 py-1">
                  Verificado
                </span>
              </div>

              <span
                className="font-serif italic leading-none text-voltage-light tabular-nums block mb-5"
                style={{
                  fontSize: 'clamp(80px, 11vw, 160px)',
                  textShadow: '0 0 80px rgba(92,213,236,0.38), 0 0 32px rgba(92,213,236,0.22)',
                  letterSpacing: '-0.03em',
                }}
              >
                $<CountUp end={FEATURED.amount} duration={1600} />
                <sup className="text-[0.32em] align-[0.8em] font-mono not-italic tracking-widest opacity-70">M</sup>
              </span>

              <h3
                className="font-display font-semibold leading-[1.08] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(20px, 2vw, 32px)' }}
              >
                {FEATURED.title}
              </h3>
              <p className="text-fog/60 text-[14px] leading-[1.6] mt-3 max-w-[400px]">
                {FEATURED.desc}
              </p>
            </div>

            {/* Right: stats */}
            <div className="p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-mist/50 mb-6">
                  Clientes · {FEATURED.clients}
                </p>

                <div className="flex flex-col border-t border-white/[0.06]">
                  {FEATURED.stats.map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between py-4 border-b last:border-0 transition-colors duration-300 hover:bg-white/[0.03] -mx-2 px-2"
                      style={{ borderColor: 'rgba(255,255,255,0.04)' }}
                    >
                      <span className="text-fog/50 text-[12px] tracking-[0.01em]">{label}</span>
                      <span className="font-display font-semibold text-bone text-[22px] tracking-[-0.03em] leading-none tabular-nums">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contacto"
                className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase text-mist/50 hover:text-voltage-light transition-colors duration-300 border-b border-white/[0.1] hover:border-voltage-light/40 pb-0.5"
              >
                Iniciar diagnóstico similar →
              </a>
            </div>
          </article>
        </FadeIn>

        {/* Minor cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MINOR_CASES.map((c, i) => (
            <FadeIn key={c.tag} delay={160 + i * 80}>
              <article className="card-light p-6 sm:p-8 lg:p-10 flex flex-col gap-5 sm:gap-6">
                <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.16em] uppercase text-steel/50">
                  <span>{c.tag}</span>
                  <span>{c.sector}</span>
                </div>

                <div>
                  <p
                    className="font-display font-semibold text-ink leading-none tracking-[-0.04em]"
                    style={{ fontSize: 'clamp(44px, 5vw, 72px)', fontVariantNumeric: 'tabular-nums' }}
                  >
                    {c.prefix}<CountUp end={c.value} duration={1400} suffix={c.suffix} />
                  </p>
                  <p className="text-steel/60 text-[14px] mt-2">{c.label}</p>
                </div>

                <div className="pt-5 border-t border-black/[0.06]">
                  <p className="text-steel/60 text-[13px] leading-[1.6]">{c.desc}</p>
                  <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-steel/40 mt-3">
                    Duración · {c.duration}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
