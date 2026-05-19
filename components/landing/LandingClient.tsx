'use client'

import { useState } from 'react'

// Sections
import Navbar      from '@/components/sections/Navbar'
import Hero        from '@/components/sections/Hero'
import Manifiesto  from '@/components/sections/Manifiesto'
import PorQueBitra from '@/components/sections/PorQueBitra'
import Metrics     from '@/components/sections/Metrics'
import Capacidades from '@/components/sections/Capacidades'
import MetodoOS    from '@/components/sections/MetodoOS'
import CasosBanner from '@/components/sections/CasosBanner'
import BlogPreview from '@/components/sections/BlogPreview'
import CTA         from '@/components/sections/CTA'
import Footer      from '@/components/sections/Footer'

// UI
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

      {/* ── Hero — dark ── */}
      <Hero />

      {/* ── Light sections ── */}
      <Manifiesto />
      <PorQueBitra />
      <Metrics />
      <Capacidades />

      {/* ── BITRA OS — dark accent break ── */}
      <MetodoOS />

      {/* ── Light sections ── */}
      <CasosBanner />
      <BlogPreview posts={recentPosts} />

      {/* ── CTA + Footer — dark ── */}
      <CTA />
      <Footer onBrandbookClick={() => setAuthOpen(true)} />

      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  )
}
