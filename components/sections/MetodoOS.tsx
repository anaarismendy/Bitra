import Container      from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import FadeIn         from '@/components/ui/FadeIn'

const FASES = [
  {
    step: '01', tag: 'Semanas 1–3',
    title: 'Diagnóstico ejecutivo',
    desc: 'Inventario tecnológico, contratos, dependencias, riesgos. Cuantificamos el costo real de la inacción.',
  },
  {
    step: '02', tag: 'Semana 4–6',
    title: 'Tesis & roadmap',
    desc: 'Hipótesis priorizadas con impacto en P&L, secuencia técnica y plan trimestral por dueño.',
  },
  {
    step: '03', tag: 'Mes 2–6',
    title: 'Ejecución supervisada',
    desc: 'Implementación con proveedores propios o existentes. SLAs reales, control de calidad y entregables definidos.',
  },
  {
    step: '04', tag: 'Ongoing',
    title: 'Operación & reporte',
    desc: 'Comité directivo mensual. KPIs vivos. Roadmap re-priorizado contra resultados, no contra discurso.',
  },
]

export default function MetodoOS() {
  return (
    <section
      id="metodo"
      className="relative overflow-hidden py-[clamp(96px,13vw,180px)]"
      style={{ background: '#000000' }}
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      <Container className="relative z-10">
        {/* Header */}
        <FadeIn>
          <SectionHeading
            layout="split"
            dark
            label="BITRA OS"
            title={<>Cómo trabajamos.<br /><em className="font-serif font-normal italic text-fog/50">Un sistema, cuatro fases.</em></>}
            subtitle="Un sistema operativo de transformación digital diseñado para la velocidad de la mediana empresa. Sin teatro de consultoría — solo decisiones técnicas con retorno medible."
          />
        </FadeIn>

        {/* Timeline connector — desktop only */}
        <div className="hidden md:block relative mb-0">
          <div
            className="absolute top-[28px] left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.1) 25%, rgba(92,213,236,0.20) 50%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.04) 92%, transparent 100%)' }}
          />
        </div>

        {/* Phases grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px">
          {FASES.map((fase, i) => (
            <FadeIn key={fase.step} delay={i * 80}>
              <div className="group relative flex flex-col gap-4 p-6 md:p-8 md:pt-14 border-b border-white/[0.06] first:border-t md:border-b-0 md:first:border-t-0 md:border-r md:last:border-r-0 transition-colors duration-500 hover:bg-white/[0.025]">

                {/* Timeline node */}
                <div
                  className="timeline-node hidden md:flex absolute top-0 left-8 -translate-y-1/2 items-center justify-center w-[14px] h-[14px] rounded-full bg-[#0E0E11]"
                  style={{ border: '1px solid var(--border-medium)' }}
                >
                  <span className="w-[5px] h-[5px] rounded-full bg-mist/50 group-hover:bg-voltage-light transition-colors duration-300" />
                </div>

                {/* Step number */}
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

                {/* Content */}
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
      </Container>
    </section>
  )
}
