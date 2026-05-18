export default function CTA() {
  return (
    <section
      id="contacto"
      className="bg-bone text-ink px-[clamp(24px,5vw,96px)] py-[120px] grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-20 items-end"
    >
      <div>
        <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage">
          <span className="w-1.5 h-1.5 rounded-full bg-voltage" />
          — Próximo paso
        </span>
        <h2
          className="font-medium tracking-[-0.025em] leading-[0.98] mt-8"
          style={{ fontSize: 'clamp(48px, 8.4vw, 148px)' }}
        >
          Una conversación.
          <br />
          <em className="font-serif font-normal text-voltage">Un diagnóstico.</em>
          <br />
          Una decisión.
        </h2>
        <div className="flex gap-4 flex-wrap mt-12">
          <a
            href="mailto:hola@bitra.co"
            className="inline-flex items-center gap-3 px-[26px] py-4 bg-ink text-bone font-mono text-xs tracking-[0.16em] uppercase hover:bg-voltage transition-all"
          >
            Agendar conversación <span className="font-serif italic text-lg leading-none">→</span>
          </a>
          <a
            href="#capacidades"
            className="inline-flex items-center gap-3 px-[26px] py-4 border border-black/20 text-ink font-mono text-xs tracking-[0.16em] uppercase hover:border-voltage hover:text-voltage transition-all"
          >
            Conocer capacidades
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {[
          { k: 'Sede', v: 'Medellín · Bogotá · Operación regional' },
          { k: 'Email', v: 'hola@bitra.co' },
          { k: 'Engagement', v: 'Básico · Plus · Premium · Proyecto especial' },
          { k: 'Confidencialidad', v: 'Toda interacción bajo NDA estándar.' },
        ].map(({ k, v }) => (
          <div
            key={k}
            className="grid grid-cols-[140px_1fr] gap-5 py-4.5 border-t border-black/[0.08] last:border-b last:border-black/[0.08]"
          >
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#4A4D55]">{k}</span>
            <span className="text-ink text-[15px]">{v}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
