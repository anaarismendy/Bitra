import FadeIn from '@/components/ui/FadeIn'

export default function Manifiesto() {
  return (
    <section
      id="manifiesto"
      className="bg-bone text-ink px-[clamp(24px,5vw,96px)] py-[clamp(112px,15vw,200px)]"
    >
      <div className="max-w-[1400px]">
        <FadeIn>
          <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-voltage">
            <span className="w-1.5 h-1.5 rounded-full bg-voltage" />
            — Manifiesto
          </span>
        </FadeIn>

        <FadeIn delay={100}>
          <blockquote
            className="font-serif mt-12 max-w-[1100px] leading-[1.1] tracking-[-0.015em] text-ink"
            style={{ fontSize: 'clamp(28px, 4vw, 72px)' }}
          >
            No vendemos licencias{' '}
            <em className="not-italic text-steel/45">ni horas.</em>
            <br />
            Vendemos{' '}
            <em className="italic text-voltage">juicio técnico</em>
            <br />
            <span className="text-steel/70">al servicio de objetivos</span>
            {' '}de negocio claros.
          </blockquote>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-end border-t pt-10 max-w-[880px]" style={{ borderColor: 'rgba(11,11,13,0.07)' }}>
            <p
              className="leading-[1.65] text-steel/80 max-w-[560px]"
              style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}
            >
              La diferencia entre estancamiento y escala en la mediana empresa no está en el presupuesto tecnológico — está en la inteligencia con que se ejecuta.
            </p>
            <a
              href="#capacidades"
              className="flex-shrink-0 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-voltage border-b pb-0.5 transition-all duration-300 whitespace-nowrap hover:gap-3"
              style={{ borderColor: 'rgba(31,100,120,0.3)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(31,100,120,0.8)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(31,100,120,0.3)' }}
            >
              Nuestras capacidades →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
