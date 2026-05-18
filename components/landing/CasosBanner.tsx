export default function CasosBanner() {
  return (
    <section id="casos" className="bg-bone text-ink px-[clamp(24px,5vw,96px)] py-[160px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-24 items-end">
        <div>
          <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage">
            <span className="w-1.5 h-1.5 rounded-full bg-voltage" />
            — Casos de impacto
          </span>
          <h2
            className="font-medium tracking-[-0.02em] leading-[1.02] mt-6"
            style={{ fontSize: 'clamp(36px, 4.4vw, 72px)' }}
          >
            Trabajo real.
            <br />
            Resultados <em className="font-serif font-normal text-voltage">medibles</em>.
          </h2>
        </div>
        <p className="leading-[1.5] text-[#4A4D55]" style={{ fontSize: 'clamp(17px, 1.25vw, 22px)' }}>
          Una muestra de proyectos representativos. Cada caso reporta lo que cambió en el balance — no en el discurso. Detalles operativos bajo NDA.
        </p>
      </div>

      {/* Featured case */}
      <article className="bg-ink text-bone p-16 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-16 items-end mb-6">
        <div>
          <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-voltage-light">
            CASO · 01 · DESTACADO
          </span>
          <div className="flex gap-8 items-end mt-8">
            <span
              className="font-serif italic leading-[0.9] text-voltage-light"
              style={{ fontSize: 'clamp(96px, 13vw, 220px)' }}
            >
              28<sup className="text-[0.4em] align-[0.7em] italic">M</sup>
            </span>
            <div>
              <h3 className="text-[32px] font-medium tracking-[-0.01em] leading-[1.1] text-bone mb-3.5">
                COP en ahorros
                <br />
                documentados.
              </h3>
              <p className="text-fog text-[15px] leading-[1.55]">
                Renegociación de contratos &amp; consolidación de proveedores · 9 meses.
              </p>
            </div>
          </div>
        </div>
        <div>
          <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-mist">
            Clientes · Formacol &middot; Contiflex
          </span>
          <div className="flex gap-8 mt-8 border-t border-white/10 pt-6">
            <div>
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-mist block mb-2">SLAs nuevos</span>
              <span className="font-serif italic text-[48px] text-bone leading-none">12</span>
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-mist block mb-2">Contratos revisados</span>
              <span className="font-serif italic text-[48px] text-bone leading-none">24</span>
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-mist block mb-2">Downtime migración</span>
              <span className="font-serif italic text-[48px] text-bone leading-none">
                0<span className="text-voltage-light">.</span>
              </span>
            </div>
          </div>
        </div>
      </article>

      {/* Minor cases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="bg-paper border border-black/[0.08] p-10 flex flex-col gap-4">
          <div className="flex justify-between font-mono text-[11px] tracking-[0.16em] uppercase text-[#4A4D55]">
            <span>Caso · 02</span>
            <span>Servicios profesionales</span>
          </div>
          <div
            className="font-medium tracking-[-0.02em] leading-none text-ink"
            style={{ fontSize: 'clamp(44px, 4vw, 72px)' }}
          >
            −34%
          </div>
          <div className="text-[#4A4D55] text-[14px]">factura cloud · 6 meses</div>
          <div className="text-[#4A4D55] text-[14px] leading-[1.55]">
            Auditoría Azure + redimensionamiento de recursos · políticas FinOps · reportes mensuales.
          </div>
        </article>
        <article className="bg-paper border border-black/[0.08] p-10 flex flex-col gap-4">
          <div className="flex justify-between font-mono text-[11px] tracking-[0.16em] uppercase text-[#4A4D55]">
            <span>Caso · 03</span>
            <span>Servicios financieros</span>
          </div>
          <div
            className="font-medium tracking-[-0.02em] leading-none text-ink"
            style={{ fontSize: 'clamp(44px, 4vw, 72px)' }}
          >
            +41%
          </div>
          <div className="text-[#4A4D55] text-[14px]">productividad contable</div>
          <div className="text-[#4A4D55] text-[14px] leading-[1.55]">
            Automatización contable y logística con N8N · integraciones ERP/CRM · workflows con validación inteligente.
          </div>
        </article>
      </div>
    </section>
  )
}
