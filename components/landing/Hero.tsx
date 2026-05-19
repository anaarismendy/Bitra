import ParticleCanvas from './ParticleCanvas'

const RESULTS = [
  { value: '$28M', label: 'COP en ahorros documentados', meta: 'Manufactura · 9 meses' },
  { value: '−34%', label: 'reducción factura cloud', meta: 'Servicios profesionales · 6 meses' },
  { value: '+41%', label: 'productividad operacional', meta: 'Servicios financieros' },
]

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-[clamp(24px,5vw,96px)] pt-28 pb-20 overflow-hidden bg-ink"
    >
      <ParticleCanvas />

      {/* Atmospheric gradients */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 78% 35%, rgba(31,100,120,0.13) 0%, transparent 60%), radial-gradient(ellipse 45% 40% at 15% 75%, rgba(79,160,181,0.07) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-[2] grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-12 xl:gap-20 items-center max-w-[1400px] w-full">

        {/* ── Left ── */}
        <div className="relative">
          {/* Atmospheric glow behind headline */}
          <div
            className="absolute -top-16 -left-8 w-[520px] h-[300px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 70% 60% at 30% 40%, rgba(31,100,120,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
          />
          <div className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-mist mb-9 relative z-[1]">
            <span className="w-1.5 h-1.5 rounded-full bg-voltage-light" />
            Firma tecnológica estratégica — Medellín · Bogotá
          </div>

          <h1
            className="font-display font-semibold text-bone leading-[1.01] tracking-[-0.025em] max-w-[700px] relative z-[1]"
            style={{ fontSize: 'clamp(38px, 5.2vw, 80px)' }}
          >
            <span className="block">Estrategia <em className="font-serif font-normal italic">primero,</em></span>
            <span className="block text-fog/60">herramienta después.</span>
            <span className="block">
              <em className="font-serif font-normal italic text-voltage-light">Resultado</em> siempre.
            </span>
          </h1>

          <p
            className="mt-8 text-fog/80 leading-[1.7] max-w-[460px] relative z-[1]"
            style={{ fontSize: 'clamp(15px, 1.05vw, 17px)' }}
          >
            Somos el CTO externo que toda empresa de 20–100 personas merece tener. Convertimos cada decisión TI en una palanca de crecimiento medible — no en una factura mensual sin retorno.
          </p>

          <div className="flex gap-3 flex-wrap mt-10">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-bone text-ink font-mono text-[11px] tracking-[0.14em] uppercase hover:bg-voltage hover:text-bone transition-all duration-300"
            >
              Iniciar diagnóstico
              <span className="font-serif italic text-base leading-none">→</span>
            </a>
            <a
              href="#capacidades"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-white/[0.12] text-fog font-mono text-[11px] tracking-[0.14em] uppercase hover:border-white/25 hover:text-bone transition-all duration-300"
            >
              Ver capacidades
            </a>
          </div>

          <div className="flex items-center gap-4 mt-10 flex-wrap">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-mist/60">Confían en BITRA</span>
            <span className="w-6 h-px bg-white/[0.1]" />
            <span className="font-mono text-[10px] tracking-[0.1em] text-fog/50">
              Formacol · Contiflex · Manufactura · Servicios financieros
            </span>
          </div>
        </div>

        {/* ── Right: Executive metrics card ── */}
        <div className="hidden lg:block">
          <div
            className="border border-white/[0.08] p-7 xl:p-8 transition-all duration-500 hover:-translate-y-0.5"
            style={{
              background: 'rgba(255,255,255,0.025)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
              transition: 'transform 500ms cubic-bezier(0.16,1,0.3,1), box-shadow 500ms cubic-bezier(0.16,1,0.3,1)',
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.55), 0 0 0 0.5px rgba(79,160,181,0.15)')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.35)')}
          >
            <div className="flex items-center justify-between mb-7 pb-5 border-b border-white/[0.06]">
              <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-mist/70">
                Resultados documentados
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[9px] tracking-[0.14em] uppercase text-voltage-light">
                <span className="w-1 h-1 rounded-full bg-voltage-light animate-pulse" />
                Verificados
              </span>
            </div>

            {RESULTS.map((r) => (
              <div
                key={r.value}
                className="group flex items-start justify-between gap-6 py-5 border-b border-white/[0.05] last:border-0"
              >
                <div className="flex-1 min-w-0">
                  <p
                    className="font-display font-semibold text-bone leading-none tracking-[-0.025em]"
                    style={{ fontSize: 'clamp(26px, 2.2vw, 36px)' }}
                  >
                    {r.value}
                  </p>
                  <p className="text-fog/70 text-[13px] leading-snug mt-1.5">{r.label}</p>
                  <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-mist/50 mt-1">{r.meta}</p>
                </div>
                <span className="font-mono text-[9px] tracking-[0.1em] uppercase border border-voltage-light/30 text-voltage-light px-2 py-1 mt-1 flex-shrink-0">
                  ✓
                </span>
              </div>
            ))}

            <a
              href="#casos"
              className="flex items-center justify-between mt-6 pt-5 border-t border-white/[0.06] font-mono text-[10px] tracking-[0.16em] uppercase text-mist/60 hover:text-voltage-light transition-colors duration-300 group"
            >
              Ver casos completos
              <span className="group-hover:translate-x-0.5 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-[clamp(24px,5vw,96px)] z-[3] flex items-center gap-3 text-mist/50 font-mono text-[10px] tracking-[0.2em] uppercase">
        <span className="font-serif italic text-sm">↓</span>
        Scroll · explorar
      </div>
    </header>
  )
}
