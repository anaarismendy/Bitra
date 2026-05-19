import Container      from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import FadeIn         from '@/components/ui/FadeIn'

const RAZONES = [
  {
    num: '01',
    tag: 'Dirección estratégica',
    title: 'CTO externo de clase ejecutiva',
    desc: 'Presencia real en el comité directivo. Definimos el roadmap tecnológico, evaluamos inversiones y tomamos decisiones con independencia — algo que ningún proveedor interno puede hacer.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="16" cy="16" r="10" />
        <circle cx="16" cy="16" r="3" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="16" y1="26" x2="16" y2="30" />
        <line x1="2" y1="16" x2="6" y2="16" />
        <line x1="26" y1="16" x2="30" y2="16" />
      </svg>
    ),
  },
  {
    num: '02',
    tag: 'Implementación supervisada',
    title: 'Ejecución, no sólo consultoría',
    desc: 'Implementamos con proveedores propios o existentes del cliente. SLAs con penalizaciones reales, control de calidad y entregables documentados — no presentaciones de PowerPoint.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="4" y="6" width="24" height="20" rx="1" />
        <line x1="10" y1="14" x2="22" y2="14" />
        <line x1="10" y1="19" x2="18" y2="19" />
        <polyline points="10 9 13 12 17 7" />
      </svg>
    ),
  },
  {
    num: '03',
    tag: 'Impacto en P&L',
    title: 'Retorno medible desde el día 1',
    desc: 'Cada engagement cuantifica el costo real de la inacción antes de comenzar. Las métricas de impacto en P&L se establecen contractualmente y se reportan al directivo cada mes.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <polyline points="4 22 10 14 16 18 22 8 28 10" />
        <line x1="4" y1="28" x2="28" y2="28" />
        <line x1="4" y1="4" x2="4" y2="28" />
      </svg>
    ),
  },
]

export default function PorQueBitra() {
  return (
    <section
      className="bg-paper text-ink py-[clamp(72px,9vw,120px)]"
      style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
    >
      <Container>
        {/* Header */}
        <FadeIn>
          <SectionHeading
            label="Por qué BITRA"
            title="Tres diferencias que no son discurso."
            subtitle="La mayoría de firmas consultoras entrega documentos. BITRA entrega resultados contractuales con retorno auditable."
            className="mb-12 md:mb-16"
          />
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {RAZONES.map((r, i) => (
            <FadeIn key={r.num} delay={i * 80}>
              <article className="card-light flex flex-col h-full p-7 sm:p-8 lg:p-10">

                {/* Icon + ghost number */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-voltage" style={{ opacity: 0.85 }}>
                    {r.icon}
                  </div>
                  <span
                    className="font-serif italic text-ink leading-none select-none"
                    style={{ fontSize: '52px', opacity: 0.06, letterSpacing: '-0.04em', lineHeight: 0.85 }}
                  >
                    {r.num}
                  </span>
                </div>

                <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-voltage/60 mb-3">
                  {r.tag}
                </span>

                <h3
                  className="font-medium leading-[1.15] tracking-[-0.02em] text-ink mb-3"
                  style={{ fontSize: 'clamp(16px, 1.35vw, 20px)' }}
                >
                  {r.title}
                </h3>

                <p
                  className="text-steel/60 leading-[1.7] mt-auto pt-4"
                  style={{ fontSize: 'clamp(13px, 0.88vw, 14px)', borderTop: '1px solid rgba(0,0,0,0.06)' }}
                >
                  {r.desc}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
