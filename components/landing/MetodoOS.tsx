import FadeIn from '@/components/ui/FadeIn'

const FASES = [
  {
    step: '01',
    tag: 'Semanas 1–3',
    title: 'Diagnóstico ejecutivo',
    desc: 'Inventario tecnológico, contratos, dependencias, riesgos. Cuantificamos el costo real de la inacción.',
  },
  {
    step: '02',
    tag: 'Semana 4–6',
    title: 'Tesis & roadmap',
    desc: 'Hipótesis priorizadas con impacto en P&L, secuencia técnica y plan trimestral por dueño.',
  },
  {
    step: '03',
    tag: 'Mes 2–6',
    title: 'Ejecución supervisada',
    desc: 'Implementación con proveedores propios o existentes. SLAs reales, control de calidad y entregables definidos.',
  },
  {
    step: '04',
    tag: 'Ongoing',
    title: 'Operación & reporte',
    desc: 'Comité directivo mensual. KPIs vivos. Roadmap re-priorizado contra resultados, no contra discurso.',
  },
]

export default function MetodoOS() {
  return (
    <section
      id="metodo"
      className="relative overflow-hidden px-[clamp(24px,5vw,96px)] py-[clamp(80px,12vw,160px)]"
      style={{ background: '#0E0E11' }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-[1400px]">

        {/* Header */}
        <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16 md:mb-20 items-end">
          <div>
            <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-voltage-light">
              <span className="w-1.5 h-1.5 rounded-full bg-voltage-light" />
              — BITRA OS
            </span>
            <h2
              className="font-medium tracking-[-0.025em] leading-[1.02] mt-5"
              style={{ fontSize: 'clamp(32px, 4vw, 64px)' }}
            >
              Cómo trabajamos.
              <br />
              <em className="font-serif font-normal italic text-fog/50">Un sistema, cuatro fases.</em>
            </h2>
          </div>
          <p className="text-fog/60 leading-[1.65]" style={{ fontSize: 'clamp(15px, 1.1vw, 17px)' }}>
            Un sistema operativo de transformación digital diseñado para la velocidad de la mediana empresa. Sin teatro de consultoría — solo decisiones técnicas con retorno medible.
          </p>
        </FadeIn>

        {/* Timeline connector — desktop */}
        <div className="hidden md:block relative mb-0">
          <div
            className="absolute top-[28px] left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.1) 25%, rgba(79,160,181,0.18) 50%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.04) 92%, transparent 100%)' }}
          />
        </div>

        {/* Phases grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px">
          {FASES.map((fase, i) => (
            <FadeIn key={fase.step} delay={i * 80}>
              <div
                className="group relative flex flex-col gap-4 p-8 md:pt-14 border border-white/[0.06] md:border-0 md:border-r md:last:border-r-0 border-b md:border-b-0 transition-colors duration-500 hover:bg-white/[0.025]"
              >
                {/* Timeline node */}
                <div
                  className="hidden md:flex absolute top-0 left-8 -translate-y-1/2 items-center justify-center w-[14px] h-[14px] rounded-full border border-white/[0.12] bg-[#0E0E11] group-hover:border-voltage-light group-hover:bg-voltage-light/10 transition-all duration-400"
                  style={{ transition: 'border-color 400ms, background 400ms, box-shadow 400ms' }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 12px rgba(79,160,181,0.5), 0 0 4px rgba(79,160,181,0.3)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = '')}
                >
                  <span className="w-[5px] h-[5px] rounded-full bg-mist/50 group-hover:bg-voltage-light transition-colors duration-400" />
                </div>

                <div className="flex items-center justify-between md:justify-start md:gap-4">
                  <span
                    className="font-serif italic text-bone/[0.06] leading-none select-none group-hover:text-bone/[0.1] transition-colors duration-500"
                    style={{ fontSize: 'clamp(56px, 5vw, 80px)' }}
                  >
                    {fase.step}
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-mist/40 md:hidden">
                    {fase.tag}
                  </span>
                </div>

                <div>
                  <p className="hidden md:block font-mono text-[9px] tracking-[0.18em] uppercase text-mist/40 mb-3">
                    {fase.tag}
                  </p>
                  <h3
                    className="font-medium leading-[1.1] tracking-[-0.018em]"
                    style={{ fontSize: 'clamp(18px, 1.5vw, 24px)' }}
                  >
                    {fase.title}
                  </h3>
                  <p className="text-fog/55 text-[13px] leading-[1.65] mt-3">{fase.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={320}>
          <div className="mt-14 pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-mist/40">
              Duración estimada primer engagement · 3 a 6 meses
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-voltage-light hover:text-bone transition-colors duration-300 border-b border-voltage-light/30 hover:border-bone/30 pb-0.5"
            >
              Iniciar diagnóstico gratuito →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
