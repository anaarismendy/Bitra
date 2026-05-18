import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock the sanity client
vi.mock('@/sanity/lib/client', () => ({
  client: {
    fetch: vi.fn(),
  },
}))

import { client } from '@/sanity/lib/client'
import { getAllPosts, getPostBySlug, getAllCasos, getCasoBySlug } from '@/lib/cms'

const mockPost = {
  _id: 'post-1',
  title: 'Test Post',
  slug: { current: 'test-post' },
  publishedAt: '2026-01-01T00:00:00Z',
  excerpt: 'Test excerpt',
  coverImage: null,
  tags: ['strategy', 'tech'],
}

const mockCaso = {
  _id: 'caso-1',
  title: 'Test Caso',
  slug: { current: 'test-caso' },
  client: 'Acme Corp',
  sector: 'Manufactura',
  year: 2024,
  summary: 'Test summary',
  coverImage: null,
  metrics: [{ label: 'Ahorro', value: '$28M' }],
}

describe('CMS fetchers', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('getAllPosts', () => {
    it('returns array of posts', async () => {
      vi.mocked(client.fetch).mockResolvedValue([mockPost])
      const result = await getAllPosts()
      expect(result).toHaveLength(1)
      expect(result[0].title).toBe('Test Post')
    })

    it('returns empty array when no posts', async () => {
      vi.mocked(client.fetch).mockResolvedValue([])
      const result = await getAllPosts()
      expect(result).toHaveLength(0)
    })
  })

  describe('getPostBySlug', () => {
    it('returns post when found', async () => {
      vi.mocked(client.fetch).mockResolvedValue(mockPost)
      const result = await getPostBySlug('test-post')
      expect(result).not.toBeNull()
      expect(result?.slug.current).toBe('test-post')
    })

    it('returns null when post not found', async () => {
      vi.mocked(client.fetch).mockResolvedValue(null)
      const result = await getPostBySlug('nonexistent')
      expect(result).toBeNull()
    })
  })

  describe('getAllCasos', () => {
    it('returns array of casos', async () => {
      vi.mocked(client.fetch).mockResolvedValue([mockCaso])
      const result = await getAllCasos()
      expect(result).toHaveLength(1)
      expect(result[0].client).toBe('Acme Corp')
    })
  })

  describe('getCasoBySlug', () => {
    it('returns caso when found', async () => {
      vi.mocked(client.fetch).mockResolvedValue(mockCaso)
      const result = await getCasoBySlug('test-caso')
      expect(result?.metrics).toHaveLength(1)
      expect(result?.metrics[0].value).toBe('$28M')
    })
  })
})
