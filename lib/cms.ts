import { client } from '@/sanity/lib/client'
import type { Post, Caso } from '@/types/cms'

export async function getAllPosts(): Promise<Post[]> {
  return client.fetch<Post[]>(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, publishedAt, excerpt, coverImage, tags
    }`,
    undefined
  )
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch<Post | null>(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, publishedAt, excerpt, body, coverImage, tags
    }`,
    { slug }
  )
}

export async function getAllCasos(): Promise<Caso[]> {
  return client.fetch<Caso[]>(
    `*[_type == "caso"] | order(year desc) {
      _id, title, slug, client, sector, year, summary, coverImage, metrics
    }`,
    undefined
  )
}

export async function getCasoBySlug(slug: string): Promise<Caso | null> {
  return client.fetch<Caso | null>(
    `*[_type == "caso" && slug.current == $slug][0] {
      _id, title, slug, client, sector, year, summary, body, coverImage, metrics
    }`,
    { slug }
  )
}
