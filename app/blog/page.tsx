import { getAllPosts } from '@/lib/cms'
import Link from 'next/link'

export const revalidate = 3600

export const metadata = {
  title: 'Blog — BITRA',
  description: 'Artículos sobre tecnología, estrategia y transformación digital para la mediana empresa.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen bg-ink text-bone px-[clamp(24px,5vw,96px)] py-40">
      <div className="max-w-[1200px] mx-auto">
        <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage-light">
          <span className="w-1.5 h-1.5 rounded-full bg-voltage-light" />
          — Blog
        </span>
        <h1
          className="font-medium leading-[1.02] tracking-[-0.025em] mt-6 mb-20"
          style={{ fontSize: 'clamp(36px, 4.4vw, 72px)' }}
        >
          Pensamiento &amp; perspectiva.
        </h1>

        {posts.length === 0 ? (
          <p className="text-fog text-[18px]">Próximamente — los primeros artículos están en camino.</p>
        ) : (
          <div className="flex flex-col">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group grid grid-cols-[140px_1fr_40px] gap-8 py-8 border-t border-white/10 items-start hover:pl-4 transition-all duration-300"
              >
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-mist pt-1">
                  {new Date(post.publishedAt).toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
                <div>
                  <h2 className="text-[22px] font-medium leading-[1.2] tracking-[-0.01em] group-hover:text-voltage-light transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-fog text-[15px] leading-[1.55] mt-3 max-w-[620px]">{post.excerpt}</p>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-2 mt-4 flex-wrap">
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
      </div>
    </main>
  )
}
