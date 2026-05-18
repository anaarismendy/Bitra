export interface SanitySlug {
  current: string
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: { x: number; y: number }
}

export interface PortableTextBlock {
  _type: 'block'
  _key: string
  style: string
  markDefs: unknown[]
  children: Array<{
    _key: string
    _type: 'span'
    text: string
    marks: string[]
  }>
}

export interface Post {
  _id: string
  title: string
  slug: SanitySlug
  publishedAt: string
  excerpt: string
  body: PortableTextBlock[]
  coverImage: SanityImage
  tags: string[]
}

export interface Metric {
  label: string
  value: string
}

export interface Caso {
  _id: string
  title: string
  slug: SanitySlug
  client: string
  sector: string
  year: number
  summary: string
  body: PortableTextBlock[]
  coverImage: SanityImage
  metrics: Metric[]
}
