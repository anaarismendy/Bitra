const metrics = [
  { value: '$28M', label: 'COP en ahorros documentados', key: 'Caso · Manufactura · 2024' },
  { value: '−34%', label: 'factura cloud · 6 meses', key: 'Servicios profesionales' },
  { value: '+41%', label: 'productividad contable', key: 'Servicios financieros' },
  { value: '0', label: 'downtime en migración', key: 'SLAs · nuevos', serif: true },
]

export default function Metrics() {
  return (
    <section className="bg-ink px-[clamp(24px,5vw,96px)] py-20 border-t border-white/10 border-b border-white/10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {metrics.map((m) => (
          <div key={m.key} className="flex flex-col gap-2.5">
            <span
              className="font-serif italic leading-none text-voltage-light"
              style={{ fontSize: 'clamp(44px, 4vw, 72px)' }}
            >
              {m.value}
              {m.serif && <span className="font-serif italic">.</span>}
            </span>
            <span className="text-fog text-[14px]">{m.label}</span>
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-mist">{m.key}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
