import ParticleCanvas from './ParticleCanvas'

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative min-h-screen flex flex-col justify-end px-[clamp(24px,5vw,96px)] pb-24 pt-40 overflow-hidden bg-ink"
    >
      <ParticleCanvas />

      {/* gradient overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 50% at 80% 20%, rgba(31,100,120,0.18) 0%, transparent 60%), radial-gradient(50% 40% at 20% 80%, rgba(79,160,181,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-[2]">
        <span className="inline-flex items-center gap-3.5 px-2 pr-3.5 py-2 bg-voltage/14 border border-voltage-light/32 text-voltage-light font-mono text-[11px] tracking-[0.16em] uppercase mb-7">
          <span className="w-[18px] h-[18px] rounded-full bg-[radial-gradient(circle,#4FA0B5_0%,transparent_70%)] animate-pulse" />
          BITRA Brandbook 2026 · Vol. I
        </span>

        <h1
          className="font-display font-medium text-bone leading-[0.96] tracking-[-0.025em] max-w-[1400px]"
          style={{ fontSize: 'clamp(48px, 8.4vw, 148px)' }}
        >
          <span className="block">Estrategia <em className="font-serif italic">primero,</em></span>
          <span className="block">herramienta después.</span>
          <span className="block"><em className="font-serif italic">Resultado</em> siempre.</span>
        </h1>

        <p className="mt-9 max-w-[560px] text-fog leading-[1.55]" style={{ fontSize: 'clamp(16px, 1.2vw, 19px)' }}>
          Somos el CTO externo que toda compañía de 20–100 empleados merece tener.
          Convertimos cada decisión TI en una palanca medible de crecimiento — no en una factura mensual sin retorno.
        </p>

        <div className="flex gap-4 flex-wrap mt-[42px]">
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 px-[26px] py-4 bg-voltage text-bone font-mono text-xs tracking-[0.16em] uppercase hover:bg-voltage-dark hover:-translate-y-px transition-all"
          >
            Iniciar diagnóstico <span className="font-serif italic text-lg leading-none">→</span>
          </a>
          <a
            href="#capacidades"
            className="inline-flex items-center gap-3 px-[26px] py-4 border border-white/10 text-bone font-mono text-xs tracking-[0.16em] uppercase hover:border-voltage-light hover:text-voltage-light transition-all"
          >
            Ver capacidades
          </a>
        </div>
      </div>

      <div className="absolute bottom-9 left-[clamp(24px,5vw,96px)] z-[3] flex items-center gap-3.5 text-mist font-mono text-[11px] tracking-[0.16em] uppercase">
        <span className="font-serif italic text-lg">↓</span>
        Scroll · explorar
        <span className="w-[60px] h-px bg-mist" />
      </div>
    </header>
  )
}
