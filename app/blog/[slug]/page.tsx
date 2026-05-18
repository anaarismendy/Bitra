import { getPostBySlug, getAllPosts } from '@/lib/cms'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'

export const revalidate = 3600

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug.current }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — BITRA Blog`,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen bg-ink text-bone px-[clamp(24px,5vw,96px)] py-40">
      <div className="max-w-[780px] mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-mist hover:text-voltage-light transition-colors mb-12">
          ← Volver al blog
        </Link>

        <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-mist">
          {new Date(post.publishedAt).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
        </span>

        <h1
          className="font-medium leading-[1.04] tracking-[-0.025em] mt-4 mb-8"
          style={{ fontSize: 'clamp(32px, 4vw, 60px)' }}
        >
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="text-fog text-[20px] leading-[1.5] mb-12 border-l-2 border-voltage pl-6">
            {post.excerpt}
          </p>
        )}

        {post.tags && post.tags.length > 0 && (
          <div className="flex gap-2 mb-12 flex-wrap">
            {post.tags.map((tag) => (
              <span key={tag} className="font-mono text-[10px] tracking-[0.16em] uppercase px-2 py-1 border border-white/10 text-mist">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="prose prose-invert prose-lg max-w-none">
          {post.body && <PortableText value={post.body} />}
        </div>
      </div>
    </main>
  )
}
