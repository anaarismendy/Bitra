'use client'

import { useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Manifiesto from './Manifiesto'
import Metrics from './Metrics'
import Capacidades from './Capacidades'
import MetodoOS from './MetodoOS'
import CasosBanner from './CasosBanner'
import CTA from './CTA'
import Footer from './Footer'
import AuthModal from '@/components/ui/AuthModal'

export default function LandingClient() {
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
      <CTA />
      <Footer onBrandbookClick={() => setAuthOpen(true)} />
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  )
}
