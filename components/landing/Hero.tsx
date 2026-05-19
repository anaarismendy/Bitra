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

      {/* Atmospheric gradients — slow drift layers */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 78% 35%, rgba(28,95,116,0.11) 0%, transparent 62%)',
          animation: 'atmosphericDrift 28s ease-in-out infinite reverse',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 40% 35% at 12% 78%, rgba(75,157,176,0.06) 0%, transparent 65%)',
          animation: 'atmosphericDrift 34s ease-in-out infinite',
          willChange: 'transform',
          animationDelay: '-11s',
        }}
      />

      <div className="relative z-[2] grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-12 xl:gap-20 items-center max-w-[1400px] w-full">

        {/* ── Left ── */}
        <div className="relative">
          {/* Localized glow behind headline — reduced blur for performance */}
          <div
            className="absolute -top-16 -left-8 w-[560px] h-[320px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 70% 60% at 40% 45%, rgba(28,95,116,0.11) 0%, transparent 70%)',
              filter: 'blur(28px)',
              animation: 'atmosphericDrift 22s ease-in-out infinite',
              willChange: 'transform',
            }}
          />

          <div className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-mist/60 mb-9 relative z-[1]">
            <span className="w-1.5 h-1.5 rounded-full bg-voltage-light" />
            Firma tecnológica estratégica — Medellín · Bogotá
          </div>

          <h1
            className="font-display font-semibold text-bone leading-[1.0] tracking-[-0.028em] max-w-[680px] relative z-[1]"
            style={{ fontSize: 'clamp(36px, 5vw, 78px)' }}
          >
            <span className="block">Estrategia <em className="font-serif font-normal italic">primero,</em></span>
            <span className="block text-fog/55">herramienta después.</span>
            <span className="block">
              <em className="font-serif font-normal italic text-voltage-light">Resultado</em> siempre.
            </span>
          </h1>

          <p
            className="mt-8 text-fog/75 leading-[1.72] max-w-[440px] relative z-[1]"
            style={{ fontSize: 'clamp(15px, 1.05vw, 17px)' }}
          >
            Somos el CTO externo que toda empresa de 20–100 personas merece tener. Convertimos cada decisión TI en una palanca de crecimiento medible — no en una factura mensual sin retorno.
          </p>

          <div className="flex gap-3 flex-wrap mt-10 relative z-[1]">
            <a
              href="#contacto"
              className="btn btn-primary"
            >
              Iniciar diagnóstico
              <span className="font-serif italic text-base leading-none">→</span>
            </a>
            <a
              href="#capacidades"
              className="btn btn-secondary"
            >
              Ver capacidades
            </a>
          </div>

          <div className="flex items-center gap-4 mt-10 flex-wrap relative z-[1]">
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-mist/50">Confían en BITRA</span>
            <span className="w-6 h-px" style={{ background: 'var(--border-soft)' }} />
            <span className="font-mono text-[9px] tracking-[0.1em] text-fog/45">
              Formacol · Contiflex · Manufactura · Servicios financieros
            </span>
          </div>
        </div>

        {/* ── Right: Executive metrics card — CSS class handles hover ── */}
        <div className="hidden lg:block">
          <div className="card-dark p-7 xl:p-8" style={{ backdropFilter: 'blur(12px)' }}>
            <div className="flex items-center justify-between mb-7 pb-5" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
              <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-mist/60">
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
                className="flex items-start justify-between gap-6 py-5 last:pb-0"
                style={{ borderBottom: '1px solid var(--border-ghost)', ['&:last-child' as string]: { borderBottom: 'none' } }}
              >
                <div className="flex-1 min-w-0">
                  <p
                    className="font-display font-semibold text-bone leading-none tracking-[-0.03em] tabular-nums"
                    style={{ fontSize: 'clamp(26px, 2.2vw, 36px)' }}
                  >
                    {r.value}
                  </p>
                  <p className="text-fog/65 text-[13px] leading-snug mt-1.5">{r.label}</p>
                  <p className="font-mono text-[9px] tracking-[0.16em] uppercase text-mist/45 mt-1">{r.meta}</p>
                </div>
                <span className="font-mono text-[9px] tracking-[0.1em] uppercase border text-voltage-light px-2 py-1 mt-1 flex-shrink-0" style={{ borderColor: 'rgba(75,157,176,0.28)' }}>
                  ✓
                </span>
              </div>
            ))}

            <a
              href="#casos"
              className="flex items-center justify-between mt-6 pt-5 font-mono text-[10px] tracking-[0.16em] uppercase text-mist/55 hover:text-voltage-light transition-colors duration-300 group"
              style={{ borderTop: '1px solid var(--border-subtle)' }}
            >
              Ver casos completos
              <span className="group-hover:translate-x-0.5 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-[clamp(24px,5vw,96px)] z-[3] flex items-center gap-3 text-mist/40 font-mono text-[9px] tracking-[0.22em] uppercase">
        <span className="font-serif italic text-sm">↓</span>
        Scroll · explorar
      </div>
    </header>
  )
}
