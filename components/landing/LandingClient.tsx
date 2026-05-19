'use client'

import { useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Manifiesto from './Manifiesto'
import Metrics from './Metrics'
import Capacidades from './Capacidades'
import MetodoOS from './MetodoOS'
import CasosBanner from './CasosBanner'
import BlogPreview from './BlogPreview'
import CTA from './CTA'
import Footer from './Footer'
import AuthModal from '@/components/ui/AuthModal'
import type { Post } from '@/types/cms'

interface LandingClientProps {
  recentPosts: Post[]
}

export default function LandingClient({ recentPosts }: LandingClientProps) {
  const [authOpen, setAuthOpen] = useState(false)

  return (
    <>
      <Navbar onAccessClick={() => setAuthOpen(true)} />
      <Hero />
      <Manifiesto />
      <Metrics />
      <Capacidades />
      <MetodoOS />
      <CasosBanner />
      <BlogPreview posts={recentPosts} />
      <CTA />
      <Footer onBrandbookClick={() => setAuthOpen(true)} />
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  )
}
