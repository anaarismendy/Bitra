'use client'

interface NavbarProps {
  onAccessClick?: () => void
}

export default function Navbar({ onAccessClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[clamp(24px,5vw,96px)] py-5 backdrop-blur-sm bg-ink/55 border-b border-white/10 font-mono text-[13px]">
      <div className="flex items-center gap-2.5 tracking-[0.16em] uppercase font-medium">
        <span className="w-2 h-2 rounded-full bg-voltage-light inline-block" />
        BITRA
      </div>
      <div className="hidden md:flex gap-8">
        {['Manifiesto', 'Capacidades', 'Método', 'Casos'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-fog tracking-[0.1em] uppercase hover:text-bone transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <button
        onClick={onAccessClick}
        className="flex items-center gap-2.5 px-[18px] py-2.5 border border-white/10 text-bone text-xs tracking-[0.1em] uppercase hover:bg-voltage hover:border-voltage transition-all"
      >
        Agendar conversación <span className="font-serif italic not-italic">→</span>
      </button>
    </nav>
  )
}
