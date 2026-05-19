import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import type { Post } from '@/types/cms'

interface BlogPreviewProps {
  posts: Post[]
}

const PLACEHOLDERS = [
  {
    num: '01',
    tag: 'Cloud · FinOps',
    title: 'FinOps en la práctica: cómo reducimos un 34% la factura cloud de una firma de servicios',
    excerpt: 'Un análisis detallado del proceso de auditoría, las herramientas usadas y los ahorros obtenidos en un engagement de 6 meses.',
    readTime: '8 min',
    featured: true,
  },
  {
    num: '02',
    tag: 'Estrategia TI',
    title: 'El CTO externo: cuándo tiene sentido y qué debe exigirle',
    excerpt: 'Las señales que indican que su empresa necesita dirección tecnológica estratégica sin el costo de una nómina ejecutiva.',
    readTime: '6 min',
    featured: false,
  },
  {
    num: '03',
    tag: 'Automatización',
    title: 'N8N como puente entre ERP, CRM y operaciones',
    excerpt: 'Cómo un workflow de automatización eliminó 3 horas diarias de trabajo manual en una empresa de logística.',
    readTime: '5 min',
    featured: false,
  },
]

export default function BlogPreview({ posts }: BlogPreviewProps) {
  const hasPosts = posts.length > 0

  return (
    <section className="bg-ink text-bone px-[clamp(24px,5vw,96px)] py-[clamp(80px,12vw,160px)] border-t border-white/[0.06]">
      <div className="max-w-[1400px]">

        {/* Header */}
        <FadeIn className="flex items-end justify-between gap-10 mb-14 flex-wrap">
          <div>
            <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-voltage-light">
              <span className="w-1.5 h-1.5 rounded-full bg-voltage-light" />
              — Blog & perspectiva
            </span>
            <h2
              className="font-medium tracking-[-0.025em] leading-[1.02] mt-5"
              style={{ fontSize: 'clamp(32px, 4vw, 64px)' }}
            >
              Pensamiento
              <br />
              <em className="font-serif font-normal italic text-voltage-light">publicado.</em>
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex-shrink-0 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-mist/60 hover:text-voltage-light transition-colors duration-300 border-b border-white/[0.1] hover:border-voltage-light/40 pb-0.5 self-end"
          >
            Ver todos los artículos →
          </Link>
        </FadeIn>

        {hasPosts ? (
          /* Live posts layout */
          <div className="flex flex-col">
            {posts.map((post, i) => (
              <FadeIn key={post._id} delay={i * 80}>
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="group grid grid-cols-[100px_1fr_32px] sm:grid-cols-[120px_1fr_32px] gap-6 py-8 border-t border-white/[0.07] items-center hover:pl-2 transition-all duration-400"
                >
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-mist/40">
                    {new Date(post.publishedAt).toLocaleDateString('es-CO', { year: 'numeric', month: 'short' })}
                  </span>
                  <div>
                    <h3
                      className="font-medium leading-[1.2] tracking-[-0.015em] group-hover:text-voltage-light transition-colors duration-300"
                      style={{ fontSize: 'clamp(16px, 1.3vw, 20px)' }}
                    >
                      {post.title}
                    </h3>
                    {post.tags?.length > 0 && (
                      <div className="flex gap-2 mt-3 flex-wrap">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="font-mono text-[9px] tracking-[0.16em] uppercase px-2 py-1 border border-white/[0.08] text-mist/50">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="font-serif italic text-xl text-mist/30 group-hover:text-voltage-light group-hover:translate-x-0.5 transition-all duration-300 justify-self-end">
                    →
                  </span>
                </Link>
              </FadeIn>
            ))}
            <div className="border-t border-white/[0.07]" />
          </div>
        ) : (
          /* Placeholder: editorial cards */
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.4fr_1fr_1fr] gap-px bg-white/[0.05] border border-white/[0.05]">
            {PLACEHOLDERS.map((p, i) => (
              <FadeIn
                key={p.num}
                delay={i * 80}
                className={p.featured ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <div
                  className="group flex flex-col justify-between h-full p-8 lg:p-10 min-h-[300px] lg:min-h-[360px] cursor-default"
                  style={{ background: '#0B0B0D' }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-serif italic text-[56px] lg:text-[72px] leading-none text-bone/[0.06] select-none">
                      {p.num}
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.18em] uppercase border border-white/[0.08] text-mist/40 px-2.5 py-1 flex-shrink-0 mt-2">
                      {p.tag}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3
                      className="font-medium leading-[1.25] tracking-[-0.015em] text-fog/80"
                      style={{ fontSize: 'clamp(16px, 1.3vw, 20px)' }}
                    >
                      {p.title}
                    </h3>
                    {p.featured && (
                      <p className="text-fog/40 text-[13px] leading-[1.6] mt-3">{p.excerpt}</p>
                    )}
                    <div className="flex items-center gap-3 mt-5">
                      <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-mist/30">
                        {p.readTime} lectura
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/[0.1]" />
                      <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-mist/20">Próximamente</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
