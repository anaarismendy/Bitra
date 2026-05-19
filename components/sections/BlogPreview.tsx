'use client'

import { useState } from 'react'
import Link from 'next/link'
import Container from '@/components/common/Container'
import FadeIn    from '@/components/ui/FadeIn'
import { cn }    from '@/lib/cn'
import type { Post } from '@/types/cms'

interface BlogPreviewProps {
  posts: Post[]
}

interface TabItem {
  num:      string
  label:    string
  title:    string
  excerpt:  string
  readTime: string
  href?:    string
}

const PLACEHOLDERS: TabItem[] = [
  {
    num: '01', label: 'Cloud · FinOps',
    title:   'FinOps en la práctica: cómo reducimos un 34% la factura cloud de una firma de servicios',
    excerpt: 'Un análisis detallado del proceso de auditoría, las herramientas utilizadas y los ahorros obtenidos en un engagement de 6 meses con una firma de servicios profesionales en Bogotá.',
    readTime: '8 min',
  },
  {
    num: '02', label: 'Estrategia TI',
    title:   'El CTO externo: cuándo tiene sentido y qué debe exigirle',
    excerpt: 'Las señales que indican que su empresa necesita dirección tecnológica estratégica sin el costo de una nómina ejecutiva. Criterios para evaluar y contratar bien.',
    readTime: '6 min',
  },
  {
    num: '03', label: 'Automatización',
    title:   'N8N como puente entre ERP, CRM y operaciones',
    excerpt: 'Cómo un workflow de automatización eliminó 3 horas diarias de trabajo manual en una empresa de logística. Arquitectura, errores comunes y lecciones del proceso.',
    readTime: '5 min',
  },
]

export default function BlogPreview({ posts }: BlogPreviewProps) {
  const [active, setActive] = useState(0)

  const items: TabItem[] = posts.length > 0
    ? posts.map((p, i) => ({
        num:      String(i + 1).padStart(2, '0'),
        label:    p.tags?.[0] ?? 'Blog',
        title:    p.title,
        excerpt:  p.excerpt ?? '',
        readTime: '5 min',
        href:     `/blog/${p.slug.current}`,
      }))
    : PLACEHOLDERS

  const current = items[active]

  return (
    <section
      className="bg-paper text-ink py-[clamp(96px,13vw,160px)]"
      style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
    >
      <Container>
        {/* Header */}
        <FadeIn className="flex items-end justify-between gap-10 mb-12 md:mb-16 flex-wrap">
          <div>
            <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-voltage">
              <span className="w-1.5 h-1.5 rounded-full bg-voltage" />
              — Blog & perspectiva
            </span>
            <h2
              className="font-medium tracking-[-0.025em] leading-[1.02] mt-5"
              style={{ fontSize: 'clamp(32px, 4vw, 64px)' }}
            >
              Pensamiento<br />
              <em className="font-serif font-normal italic text-voltage">publicado.</em>
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex-shrink-0 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-steel/55 hover:text-voltage transition-colors duration-300 border-b border-black/[0.10] hover:border-voltage/40 pb-0.5 self-end"
          >
            Ver todos →
          </Link>
        </FadeIn>

        {/* Tab bar */}
        <FadeIn delay={80}>
          <div className="flex overflow-x-auto" style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
            {items.map((item, i) => (
              <button
                key={item.num}
                onClick={() => setActive(i)}
                className={cn(
                  'relative flex-shrink-0 flex items-center gap-2.5 px-5 sm:px-6 py-4 transition-colors duration-250',
                  active === i ? 'text-ink' : 'text-steel/45 hover:text-steel/75'
                )}
              >
                <span className={cn('font-serif italic text-[11px] transition-colors duration-250', active === i ? 'text-voltage' : 'text-steel/25')}>
                  {item.num}
                </span>
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase whitespace-nowrap">
                  {item.label}
                </span>
                {/* Active underline */}
                <span
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-voltage transition-opacity duration-250"
                  style={{ opacity: active === i ? 1 : 0 }}
                />
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Tab content */}
        <div
          key={active}
          className="pt-10 sm:pt-12 pb-2"
          style={{ animation: 'fadeSlideUp 380ms cubic-bezier(0.16,1,0.3,1) both' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_140px] gap-8 lg:gap-16 items-start">

            <div>
              <span
                className="inline-block font-mono text-[9px] tracking-[0.2em] uppercase text-steel/45 px-2.5 py-1 mb-6"
                style={{ border: '1px solid rgba(0,0,0,0.09)' }}
              >
                {current.label}
              </span>

              <h3
                className="font-medium leading-[1.2] tracking-[-0.022em] text-ink"
                style={{ fontSize: 'clamp(20px, 2.5vw, 38px)' }}
              >
                {current.title}
              </h3>

              <p
                className="text-steel/60 leading-[1.72] mt-5 max-w-[580px]"
                style={{ fontSize: 'clamp(14px, 1vw, 15.5px)' }}
              >
                {current.excerpt}
              </p>

              <div className="flex items-center gap-5 mt-7 flex-wrap">
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-steel/35">
                  {current.readTime} de lectura
                </span>
                {current.href ? (
                  <Link
                    href={current.href}
                    className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] uppercase text-voltage hover:text-ink transition-colors duration-300 border-b border-voltage/30 hover:border-ink/30 pb-0.5"
                  >
                    Leer artículo →
                  </Link>
                ) : (
                  <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-steel/30">
                    Próximamente
                  </span>
                )}
              </div>
            </div>

            {/* Ghost number */}
            <span
              className="hidden lg:block font-serif italic leading-none text-ink/[0.04] select-none self-center"
              style={{ fontSize: 'clamp(88px, 11vw, 140px)', letterSpacing: '-0.05em', lineHeight: 0.85 }}
            >
              {current.num}
            </span>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2 mt-10 pt-8" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Artículo ${i + 1}`}
                className={cn(
                  'rounded-full transition-all duration-300',
                  active === i ? 'w-4 h-1.5 bg-voltage' : 'w-1.5 h-1.5'
                )}
                style={{ background: active === i ? undefined : 'rgba(0,0,0,0.10)' }}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
