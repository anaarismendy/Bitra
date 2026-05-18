const caps = [
  {
    num: 'C · 01',
    name: 'Dirección estratégica\n& Gobierno TI',
    desc: 'CTO externo · roadmap anual · evaluación de inversiones · reporte ejecutivo.',
  },
  {
    num: 'C · 02',
    name: 'Auditoría & Arquitectura TI',
    desc: 'Diagnóstico 360° · redes, seguridad y datos · arquitectura objetivo por fases.',
  },
  {
    num: 'C · 03',
    name: 'Gobierno de Proveedores TI',
    desc: 'Renegociación de contratos · SLAs con penalizaciones · ahorros hasta 50%.',
  },
  {
    num: 'C · 04',
    name: 'Automatización & Integraciones',
    desc: 'N8N · RPA · APIs · workflows ERP/CRM · −30% tiempos operativos.',
  },
  {
    num: 'C · 05',
    name: 'Datos, BI & Análisis Predictivo',
    desc: 'Power BI · dashboards ejecutivos · KPIs · modelos predictivos sobre datos reales.',
  },
  {
    num: 'C · 06',
    name: 'Cloud · FinOps · Optimización',
    desc: 'Azure · GCP · gobernanza · 20–40% menos en costos cloud.',
  },
  {
    num: 'C · 07',
    name: 'Seguridad & Continuidad',
    desc: 'FortiGate · AD · backups · BCP/DRP · gestión de identidades · hardening.',
  },
]

export default function Capacidades() {
  return (
    <section id="capacidades" className="px-[clamp(24px,5vw,96px)] py-[140px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-24 items-end">
        <div>
          <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage-light">
            <span className="w-1.5 h-1.5 rounded-full bg-voltage-light" />
            — Capacidades
          </span>
          <h2
            className="font-medium tracking-[-0.02em] leading-[1.02] mt-6"
            style={{ fontSize: 'clamp(36px, 4.4vw, 72px)' }}
          >
            Siete capacidades.
            <br />
            Una sola firma.
          </h2>
        </div>
        <p className="text-fog leading-[1.5]" style={{ fontSize: 'clamp(17px, 1.25vw, 22px)' }}>
          BITRA no vende servicios — instala capacidades. Cada una opera autónomamente o se compone con el resto, según el momento y la madurez tecnológica del cliente.
        </p>
      </div>

      <div className="flex flex-col">
        {caps.map((cap) => (
          <div
            key={cap.num}
            className="group grid grid-cols-[80px_1.4fr_1fr_140px] gap-8 py-7 border-t border-white/10 last:border-b last:border-white/10 items-center relative cursor-pointer hover:pl-4 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-voltage/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="font-mono text-[13px] text-mist relative z-10">{cap.num}</span>
            <span
              className="font-medium leading-[1.15] tracking-[-0.01em] relative z-10 whitespace-pre-line"
              style={{ fontSize: 'clamp(22px, 1.8vw, 32px)' }}
            >
              {cap.name}
            </span>
            <span className="text-fog text-[15px] leading-[1.5] relative z-10">{cap.desc}</span>
            <span className="font-serif italic text-[32px] text-mist text-right group-hover:translate-x-2 group-hover:text-voltage-light transition-all duration-300 relative z-10">
              →
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
