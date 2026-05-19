import LandingClient from '@/components/landing/LandingClient'
import { getAllPosts } from '@/lib/cms'

export const revalidate = 3600

export default async function Page() {
  const posts = await getAllPosts()
  return <LandingClient recentPosts={posts.slice(0, 3)} />
}
