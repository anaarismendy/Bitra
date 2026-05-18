'use client'

interface DeckControlsProps {
  current: number
  total: number
  onGo: (delta: number) => void
}

export default function DeckControls({ current, total, onGo }: DeckControlsProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
      <button
        onClick={() => onGo(-1)}
        disabled={current === 0}
        className="text-bone/50 hover:text-bone disabled:opacity-20 font-mono text-xs transition-colors"
        aria-label="Diapositiva anterior"
      >
        ←
      </button>
      <span className="text-bone/40 font-mono text-xs tabular-nums">
        {current + 1} / {total}
      </span>
      <button
        onClick={() => onGo(1)}
        disabled={current === total - 1}
        className="text-bone/50 hover:text-bone disabled:opacity-20 font-mono text-xs transition-colors"
        aria-label="Siguiente diapositiva"
      >
        →
      </button>
    </div>
  )
}
