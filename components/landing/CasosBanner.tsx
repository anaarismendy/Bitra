'use client'

import CountUp from '@/components/ui/CountUp'
import FadeIn from '@/components/ui/FadeIn'

const MINOR_CASES = [
  {
    tag: 'Caso · 02',
    sector: 'Servicios profesionales',
    value: '34',
    prefix: '−',
    suffix: '%',
    label: 'reducción factura cloud',
    desc: 'Auditoría Azure + redimensionamiento de recursos · políticas FinOps · reportes mensuales de ahorro.',
    duration: '6 meses',
  },
  {
    tag: 'Caso · 03',
    sector: 'Servicios financieros',
    value: '41',
    prefix: '+',
    suffix: '%',
    label: 'productividad operacional',
    desc: 'Automatización contable y logística con N8N · integraciones ERP/CRM · workflows con validación inteligente.',
    duration: '4 meses',
  },
]

export default function CasosBanner() {
  return (
    <section id="casos" className="bg-paper text-ink px-[clamp(24px,5vw,96px)] py-[clamp(80px,12vw,160px)]">
      <div className="max-w-[1400px]">

        {/* Header */}
        <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16 items-end">
          <div>
            <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-voltage">
              <span className="w-1.5 h-1.5 rounded-full bg-voltage" />
              — Casos de impacto
            </span>
            <h2
              className="font-medium tracking-[-0.025em] leading-[1.02] mt-5"
              style={{ fontSize: 'clamp(32px, 4vw, 64px)' }}
            >
              Trabajo real.
              <br />
              Resultados <em className="font-serif font-normal italic text-voltage">medibles</em>.
            </h2>
          </div>
          <p className="text-steel/70 leading-[1.65]" style={{ fontSize: 'clamp(15px, 1.1vw, 17px)' }}>
            Una muestra de proyectos representativos. Cada caso reporta lo que cambió en el balance — no en el discurso. Detalles operativos bajo NDA.
          </p>
        </FadeIn>

        {/* Featured case — executive report style */}
        <FadeIn delay={80}>
          <article className="bg-ink text-bone border border-white/[0.06] grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] mb-4">
            <div className="p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
              <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/[0.06]">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-mist/60">
                  Caso · 01 · Destacado
                </span>
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-voltage-light border border-voltage-light/30 px-2.5 py-1">
                  Verificado
                </span>
              </div>

              <div className="flex items-end gap-6 mb-5">
                <span
                  className="font-serif italic leading-none text-voltage-light"
                  style={{ fontSize: 'clamp(80px, 11vw, 160px)' }}
                >
                  $<CountUp end={28} duration={1600} />
                  <sup className="text-[0.35em] align-[0.75em] font-mono not-italic tracking-wider">M</sup>
                </span>
              </div>

              <h3
                className="font-display font-semibold leading-[1.08] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(20px, 2vw, 32px)' }}
              >
                COP en ahorros documentados.
              </h3>
              <p className="text-fog/60 text-[14px] leading-[1.6] mt-3 max-w-[400px]">
                Renegociación de contratos TI & consolidación de proveedores en una empresa de manufactura con 9 meses de engagement.
              </p>
            </div>

            <div className="p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-mist/50 mb-6">
                  Clientes · Formacol · Contiflex
                </p>

                <div className="flex flex-col gap-0 border-t border-white/[0.06]">
                  {[
                    { label: 'SLAs nuevos implementados', value: '12' },
                    { label: 'Contratos renegociados', value: '24' },
                    { label: 'Downtime en migración', value: '0.' },
                    { label: 'Período de engagement', value: '9m' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between py-4 border-b border-white/[0.05] last:border-0">
                      <span className="text-fog/50 text-[12px]">{label}</span>
                      <span className="font-display font-semibold text-bone text-[22px] tracking-[-0.02em] leading-none">{value}</span>
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
              <article className="bg-white border border-black/[0.06] p-10 flex flex-col gap-6 hover:border-black/[0.12] transition-colors duration-300">
                <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.16em] uppercase text-steel/50">
                  <span>{c.tag}</span>
                  <span>{c.sector}</span>
                </div>

                <div>
                  <p
                    className="font-display font-semibold text-ink leading-none tracking-[-0.03em]"
                    style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}
                  >
                    {c.prefix}
                    <CountUp end={parseInt(c.value)} duration={1400} suffix={c.suffix} />
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

      </div>
    </section>
  )
}
