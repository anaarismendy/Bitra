'use client'

import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
  distance?: number
}

export default function FadeIn({
  children,
  delay = 0,
  className = '',
  style,
  distance = 18,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = `opacity 700ms ${delay}ms cubic-bezier(0.16,1,0.3,1), transform 700ms ${delay}ms cubic-bezier(0.16,1,0.3,1)`
          el.style.opacity = '1'
          el.style.transform = 'translateY(0px)'
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, distance])

  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: `translateY(${distance}px)`, ...style }}
    >
      {children}
    </div>
  )
}
