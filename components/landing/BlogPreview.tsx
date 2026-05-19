import Link from 'next/link'
import type { Post } from '@/types/cms'

interface BlogPreviewProps {
  posts: Post[]
}

export default function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <section className="bg-ink text-bone px-[clamp(24px,5vw,96px)] py-[140px] border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20 items-end">
        <div>
          <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage-light">
            <span className="w-1.5 h-1.5 rounded-full bg-voltage-light" />
            — Blog & perspectiva
          </span>
          <h2
            className="font-medium tracking-[-0.02em] leading-[1.02] mt-6"
            style={{ fontSize: 'clamp(36px, 4.4vw, 72px)' }}
          >
            Pensamiento
            <br />
            <em className="font-serif font-normal text-voltage-light">publicado.</em>
          </h2>
        </div>
        <div className="flex flex-col gap-6 items-start justify-end">
          <p className="text-fog leading-[1.5]" style={{ fontSize: 'clamp(16px, 1.2vw, 19px)' }}>
            Análisis, perspectivas y casos de tecnología estratégica para la mediana empresa colombiana.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.16em] uppercase text-voltage-light hover:text-bone transition-colors border-b border-voltage-light/40 hover:border-bone/40 pb-1"
          >
            Ver todos los artículos →
          </Link>
        </div>
      </div>

      {posts.length === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {[
            { num: '01', title: 'FinOps en la práctica: cómo reducimos un 34% la factura cloud de una firma de servicios', tag: 'Cloud · FinOps' },
            { num: '02', title: 'El CTO externo: cuándo tiene sentido y qué debe exigirle a quien contrata', tag: 'Estrategia TI' },
            { num: '03', title: 'Automatización sin caos: N8N como puente entre ERP, CRM y operaciones', tag: 'Automatización' },
          ].map((item) => (
            <div
              key={item.num}
              className="p-10 flex flex-col gap-8 justify-between min-h-[280px]"
              style={{ background: '#0B0B0D' }}
            >
              <div className="flex justify-between items-start">
                <span className="font-serif italic text-[48px] leading-none text-bone/20">{item.num}</span>
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-mist border border-white/10 px-2 py-1">{item.tag}</span>
              </div>
              <p className="font-medium leading-[1.25] tracking-[-0.01em] text-fog" style={{ fontSize: 'clamp(18px, 1.4vw, 22px)' }}>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group grid grid-cols-[120px_1fr_40px] gap-8 py-8 border-t border-white/10 items-center hover:pl-4 transition-all duration-300"
            >
              <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-mist">
                {new Date(post.publishedAt).toLocaleDateString('es-CO', {
                  year: 'numeric',
                  month: 'short',
                })}
              </span>
              <div>
                <h3 className="font-medium leading-[1.2] tracking-[-0.01em] group-hover:text-voltage-light transition-colors" style={{ fontSize: 'clamp(18px, 1.4vw, 22px)' }}>
                  {post.title}
                </h3>
                {post.tags?.length > 0 && (
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {post.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[10px] tracking-[0.16em] uppercase px-2 py-1 border border-white/10 text-mist">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <span className="font-serif italic text-[24px] text-mist group-hover:text-voltage-light group-hover:translate-x-1 transition-all duration-300">→</span>
            </Link>
          ))}
          <div className="border-t border-white/10" />
        </div>
      )}
    </section>
  )
}
