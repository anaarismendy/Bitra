import FadeIn from '@/components/ui/FadeIn'

const INFO = [
  { k: 'Sede', v: 'Medellín · Bogotá · Operación regional' },
  { k: 'Email', v: 'hola@bitra.co' },
  { k: 'Engagement', v: 'Básico · Plus · Premium · Proyecto especial' },
  { k: 'Confidencialidad', v: 'Toda interacción bajo NDA estándar' },
]

export default function CTA() {
  return (
    <section
      id="contacto"
      className="bg-paper text-ink px-[clamp(24px,5vw,96px)] py-[clamp(112px,16vw,200px)]"
    >
      <div className="max-w-[1400px] grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-16 lg:gap-20 items-start">

        {/* Left */}
        <FadeIn>
          <div className="relative">
          {/* Atmospheric glow behind headline */}
          <div
            className="absolute -top-20 -left-12 w-[480px] h-[320px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 55% at 35% 45%, rgba(31,100,120,0.08) 0%, transparent 70%)', filter: 'blur(48px)' }}
          />
          <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-voltage relative z-[1]">
            <span className="w-1.5 h-1.5 rounded-full bg-voltage" />
            — Próximo paso
          </span>

          <h2
            className="font-medium tracking-[-0.025em] leading-[1.0] mt-6 relative z-[1]"
            style={{ fontSize: 'clamp(40px, 6.5vw, 108px)' }}
          >
            Una conversación.
            <br />
            <em className="font-serif font-normal italic text-voltage">Un diagnóstico.</em>
            <br />
            Una decisión.
          </h2>

          <p className="text-steel/60 leading-[1.65] mt-8 max-w-[420px] relative z-[1]" style={{ fontSize: 'clamp(14px, 1.05vw, 16px)' }}>
            El primer diagnóstico es gratuito y sin compromiso. En 60 minutos mapeamos el estado real de su tecnología y cuantificamos las oportunidades de mejora.
          </p>

          <div className="flex gap-3 flex-wrap mt-10 relative z-[1]">
            <a href="mailto:hola@bitra.co" className="btn btn-ink-on-light">
              Agendar conversación →
            </a>
            <a
              href="#capacidades"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 font-mono text-[11px] tracking-[0.14em] uppercase text-steel transition-all duration-300 hover:text-voltage"
              style={{ border: '1px solid var(--border-light-medium)', transition: 'border-color 300ms, color 300ms' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(28,95,116,0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '' }}
            >
              Ver capacidades
            </a>
          </div>
          </div>
        </FadeIn>

        {/* Right: info table */}
        <FadeIn delay={120}>
          <div className="flex flex-col border-t border-black/[0.07] mt-2">
            {INFO.map(({ k, v }) => (
              <div
                key={k}
                className="grid grid-cols-[120px_1fr] gap-6 py-5"
                style={{ borderBottom: '1px solid rgba(11,11,13,0.05)' }}
              >
                <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-steel/35 pt-0.5">
                  {k}
                </span>
                <span className="text-ink/65 text-[13.5px] leading-[1.65]">{v}</span>
              </div>
            ))}

            <div className="pt-10 mt-4">
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-steel/30 mb-4">
                Metodología · BITRA OS
              </p>
              <div className="flex gap-2 flex-wrap">
                {['Diagnóstico', 'Tesis', 'Ejecución', 'Operación'].map((step, i) => (
                  <span
                    key={step}
                    className="flex items-center gap-1.5 font-mono text-[9px] tracking-[0.14em] uppercase text-steel/40"
                  >
                    <span className="font-serif italic text-[10px] text-steel/30">{String(i + 1).padStart(2, '0')}</span>
                    {step}
                    {i < 3 && <span className="text-steel/20">·</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
