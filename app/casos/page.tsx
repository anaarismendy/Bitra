import { getAllCasos } from '@/lib/cms'
import Link from 'next/link'

export const revalidate = 3600

export const metadata = {
  title: 'Casos de impacto — BITRA',
  description: 'Proyectos reales. Resultados medibles. Cada caso reporta lo que cambió en el balance.',
}

export default async function CasosPage() {
  const casos = await getAllCasos()

  return (
    <main className="min-h-screen bg-ink text-bone px-[clamp(24px,5vw,96px)] py-40">
      <div className="max-w-[1200px] mx-auto">
        <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage-light">
          <span className="w-1.5 h-1.5 rounded-full bg-voltage-light" />
          — Casos de impacto
        </span>
        <h1
          className="font-medium leading-[1.02] tracking-[-0.025em] mt-6 mb-20"
          style={{ fontSize: 'clamp(36px, 4.4vw, 72px)' }}
        >
          Trabajo real.<br />
          Resultados <em className="font-serif font-normal text-voltage-light">medibles</em>.
        </h1>

        {casos.length === 0 ? (
          <p className="text-fog text-[18px]">Los casos se publicarán próximamente.</p>
        ) : (
          <div className="flex flex-col">
            {casos.map((caso) => (
              <Link
                key={caso._id}
                href={`/casos/${caso.slug.current}`}
                className="group grid grid-cols-[80px_1fr_160px_40px] gap-8 py-8 border-t border-white/10 items-center hover:pl-4 transition-all duration-300"
              >
                <span className="font-serif italic text-[36px] text-voltage-light leading-none">{caso.year}</span>
                <div>
                  <h2 className="text-[22px] font-medium leading-[1.2] tracking-[-0.01em] group-hover:text-voltage-light transition-colors">
                    {caso.title}
                  </h2>
                  {caso.summary && (
                    <p className="text-fog text-[15px] leading-[1.55] mt-2 max-w-[520px]">{caso.summary}</p>
                  )}
                </div>
                <div className="text-right">
                  {caso.sector && (
                    <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-mist block">{caso.sector}</span>
                  )}
                  {caso.client && (
                    <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-fog block mt-1">{caso.client}</span>
                  )}
                </div>
                <span className="font-serif italic text-[24px] text-mist group-hover:text-voltage-light group-hover:translate-x-1 transition-all duration-300">→</span>
              </Link>
            ))}
            <div className="border-t border-white/10" />
          </div>
        )}
      </div>
    </main>
  )
}
