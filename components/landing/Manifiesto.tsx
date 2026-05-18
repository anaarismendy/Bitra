export default function Manifiesto() {
  return (
    <section
      id="manifiesto"
      className="bg-bone text-ink px-[clamp(24px,5vw,96px)] py-[160px]"
    >
      <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage">
        <span className="w-1.5 h-1.5 rounded-full bg-voltage" />
        — Manifiesto
      </span>

      <p
        className="font-serif mt-12 max-w-[1500px] leading-[1.06] tracking-[-0.015em]"
        style={{ fontSize: 'clamp(36px, 5.2vw, 92px)' }}
      >
        No vendemos licencias <em>ni horas.</em>
        <br />
        Vendemos{' '}
        <em className="text-voltage">juicio técnico</em>{' '}
        al servicio de objetivos de negocio claros.
      </p>

      <p
        className="mt-12 max-w-[720px] leading-[1.5] text-[#4A4D55]"
        style={{ fontSize: 'clamp(17px, 1.25vw, 22px)' }}
      >
        La diferencia entre estancamiento y escala en la mediana empresa no está en el presupuesto tecnológico — está en la inteligencia con que se ejecuta.
      </p>
    </section>
  )
}
