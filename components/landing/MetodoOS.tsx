const fases = [
  {
    step: 'Fase · 01',
    num: '01',
    title: 'Diagnóstico ejecutivo',
    desc: 'Inventario tecnológico, contratos, dependencias, riesgos. Cuantificamos el costo de la inacción.',
  },
  {
    step: 'Fase · 02',
    num: '02',
    title: 'Tesis & roadmap',
    desc: 'Definimos hipótesis priorizadas con impacto en P&L, secuencia técnica y plan trimestral por dueño.',
  },
  {
    step: 'Fase · 03',
    num: '03',
    title: 'Ejecución supervisada',
    desc: 'Implementación con proveedores propios o existentes. SLAs reales, control de calidad y entregables.',
  },
  {
    step: 'Fase · 04',
    num: '04',
    title: 'Operación & reporte',
    desc: 'Comité directivo mensual. KPIs vivos. Roadmap re-priorizado contra resultados, no contra discurso.',
  },
]

export default function MetodoOS() {
  return (
    <section
      id="metodo"
      className="relative overflow-hidden px-[clamp(24px,5vw,96px)] py-[160px]"
      style={{ background: '#141418' }}
    >
      {/* grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
        }}
      />

      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-10 items-end">
          <div>
            <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage-light">
              <span className="w-1.5 h-1.5 rounded-full bg-voltage-light" />
              — BITRA OS
            </span>
            <h2
              className="font-medium tracking-[-0.02em] leading-[1.02] mt-6"
              style={{ fontSize: 'clamp(36px, 4.4vw, 72px)' }}
            >
              Cómo trabajamos.
              <br />
              <em className="font-serif font-normal">Un sistema, cuatro fases.</em>
            </h2>
          </div>
          <p className="text-fog leading-[1.5]" style={{ fontSize: 'clamp(17px, 1.25vw, 22px)' }}>
            Un sistema operativo de transformación digital diseñado para la velocidad de la mediana empresa. Sin teatro de consultoría — solo decisiones técnicas con retorno medible.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 mt-10">
          {fases.map((fase) => (
            <div
              key={fase.step}
              className="flex flex-col gap-3.5 p-10 pb-12 min-h-[300px] relative transition-colors duration-300 hover:bg-[#1A1C21]"
              style={{ background: '#141418' }}
            >
              <div className="flex justify-between items-center">
                <span className="font-mono text-[11px] tracking-[0.18em] text-voltage-light">{fase.step}</span>
                <span className="font-serif italic text-[64px] leading-none text-bone opacity-55">{fase.num}</span>
              </div>
              <h4
                className="font-medium leading-[1.15] tracking-[-0.01em] mt-auto"
                style={{ fontSize: 'clamp(22px, 1.6vw, 28px)' }}
              >
                {fase.title}
              </h4>
              <p className="text-fog text-[14px] leading-[1.55]">{fase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
