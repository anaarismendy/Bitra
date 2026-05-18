import { getCasoBySlug, getAllCasos } from '@/lib/cms'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'

export const revalidate = 3600

export async function generateStaticParams() {
  const casos = await getAllCasos()
  return casos.map((c) => ({ slug: c.slug.current }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caso = await getCasoBySlug(slug)
  if (!caso) return {}
  return {
    title: `${caso.title} — BITRA Casos`,
    description: caso.summary,
  }
}

export default async function CasoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caso = await getCasoBySlug(slug)
  if (!caso) notFound()

  return (
    <main className="min-h-screen bg-ink text-bone px-[clamp(24px,5vw,96px)] py-40">
      <div className="max-w-[1000px] mx-auto">
        <Link href="/casos" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-mist hover:text-voltage-light transition-colors mb-12">
          ← Casos de impacto
        </Link>

        <div className="flex gap-4 flex-wrap mb-6">
          {caso.sector && (
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase px-2 py-1 border border-white/10 text-mist">{caso.sector}</span>
          )}
          {caso.year && (
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase px-2 py-1 border border-white/10 text-mist">{caso.year}</span>
          )}
          {caso.client && (
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase px-2 py-1 border border-voltage/30 text-voltage-light">{caso.client}</span>
          )}
        </div>

        <h1
          className="font-medium leading-[1.04] tracking-[-0.025em] mt-4 mb-8"
          style={{ fontSize: 'clamp(32px, 4vw, 60px)' }}
        >
          {caso.title}
        </h1>

        {caso.summary && (
          <p className="text-fog text-[20px] leading-[1.5] mb-12 border-l-2 border-voltage pl-6">
            {caso.summary}
          </p>
        )}

        {caso.metrics && caso.metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 py-10 border-t border-b border-white/10">
            {caso.metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-2">
                <span className="font-serif italic text-[44px] leading-none text-voltage-light">{m.value}</span>
                <span className="text-fog text-[14px]">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="prose prose-invert prose-lg max-w-none">
          {caso.body && <PortableText value={caso.body} />}
        </div>
      </div>
    </main>
  )
}
