import FadeIn from '@/components/ui/FadeIn'

export default function Manifiesto() {
  return (
    <section
      id="manifiesto"
      className="bg-bone text-ink px-[clamp(24px,5vw,96px)] py-[clamp(100px,14vw,180px)]"
    >
      <div className="max-w-[1400px]">
        <FadeIn>
          <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-voltage">
            <span className="w-1.5 h-1.5 rounded-full bg-voltage" />
            — Manifiesto
          </span>
        </FadeIn>

        <FadeIn delay={80}>
          <blockquote
            className="font-serif mt-10 max-w-[1200px] leading-[1.08] tracking-[-0.012em] text-ink"
            style={{ fontSize: 'clamp(30px, 4.2vw, 76px)' }}
          >
            No vendemos licencias{' '}
            <em className="not-italic text-steel/50">ni horas.</em>
            <br />
            Vendemos{' '}
            <em className="italic text-voltage">juicio técnico</em>{' '}
            al servicio de objetivos de negocio claros.
          </blockquote>
        </FadeIn>

        <FadeIn delay={160}>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-end border-t border-black/[0.07] pt-10 max-w-[960px]">
            <p
              className="leading-[1.6] text-steel max-w-[640px]"
              style={{ fontSize: 'clamp(15px, 1.15vw, 19px)' }}
            >
              La diferencia entre estancamiento y escala en la mediana empresa no está en el presupuesto tecnológico — está en la inteligencia con que se ejecuta.
            </p>
            <a
              href="#capacidades"
              className="flex-shrink-0 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-voltage border-b border-voltage/30 hover:border-voltage pb-0.5 transition-colors duration-300 whitespace-nowrap"
            >
              Nuestras capacidades →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
