'use client'

import { useState, useEffect, useCallback, type ReactNode } from 'react'
import DeckControls from './DeckControls'

interface DeckStageProps {
  slides: ReactNode[]
}

export default function DeckStage({ slides }: DeckStageProps) {
  const [current, setCurrent] = useState(0)
  const [scale, setScale] = useState(1)
  const total = slides.length

  const updateScale = useCallback(() => {
    setScale(Math.min(window.innerWidth / 1920, window.innerHeight / 1080))
  }, [])

  useEffect(() => {
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [updateScale])

  const go = useCallback(
    (delta: number) => {
      setCurrent((c) => Math.max(0, Math.min(total - 1, c + delta)))
    },
    [total]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (['ArrowRight', 'ArrowDown', ' ', 'PageDown'].includes(e.key)) {
        e.preventDefault()
        go(1)
      }
      if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault()
        go(-1)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [go])

  return (
    <div className="fixed inset-0 bg-ink flex items-center justify-center overflow-hidden">
      <div
        style={{
          width: '1920px',
          height: '1080px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          position: 'relative',
          flexShrink: 0,
        }}
      >
        {slides[current]}
      </div>
      <DeckControls current={current} total={total} onGo={go} />
    </div>
  )
}
