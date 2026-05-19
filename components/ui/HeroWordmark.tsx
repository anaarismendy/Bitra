'use client'

import { useEffect, useRef } from 'react'

export default function HeroWordmark() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const wrap = wrapRef.current
    const text = textRef.current
    if (!wrap || !text) return

    const onScroll = () => {
      const y = window.scrollY
      // Parallax: wordmark scrolls up 28% as fast as page (appears fixed in depth)
      wrap.style.transform = `translateY(${Math.min(y * 0.28, 200)}px)`
      // Fade out as hero exits viewport
      text.style.opacity = String(Math.max(0, 1 - y / 560) * 0.044)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={wrapRef}
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1] select-none"
      style={{ willChange: 'transform' }}
    >
      <span
        ref={textRef}
        className="font-display font-black text-bone block"
        style={{
          fontSize: 'clamp(88px, 21vw, 380px)',
          opacity: 0.044,
          letterSpacing: '-0.07em',
          lineHeight: 0.88,
          userSelect: 'none',
        }}
      >
        BITRA
      </span>
    </div>
  )
}
