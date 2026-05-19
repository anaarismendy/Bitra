'use client'

import { useState, useEffect } from 'react'

interface NavbarProps {
  onAccessClick?: () => void
}

const NAV_LINKS = [
  { label: 'Manifiesto', href: '#manifiesto' },
  { label: 'Capacidades', href: '#capacidades' },
  { label: 'Método', href: '#metodo' },
  { label: 'Casos', href: '#casos' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar({ onAccessClick }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[clamp(24px,5vw,96px)] py-5 backdrop-blur-sm bg-ink/55 border-b border-white/10 font-mono text-[13px]">
        <a
          href="/"
          className="flex items-center gap-2.5 tracking-[0.16em] uppercase font-medium text-bone"
        >
          <span className="w-2 h-2 rounded-full bg-voltage-light inline-block" />
          BITRA
        </a>

        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-fog tracking-[0.1em] uppercase hover:text-bone transition-colors text-[12px]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onAccessClick}
            className="hidden md:flex items-center gap-2.5 px-[18px] py-2.5 border border-white/10 text-bone text-xs tracking-[0.1em] uppercase hover:bg-voltage hover:border-voltage transition-all"
          >
            Agendar conversación <span className="font-serif not-italic">→</span>
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 relative"
          >
            <span
              className={`block h-px w-full bg-bone transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block h-px bg-bone transition-all duration-300 ${
                menuOpen ? 'w-0 opacity-0' : 'w-full opacity-100'
              }`}
            />
            <span
              className={`block h-px w-full bg-bone transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ink flex flex-col justify-end px-[clamp(24px,5vw,96px)] pb-16 pt-32 transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-1">
          {NAV_LINKS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between py-5 border-t border-white/10 last:border-b last:border-white/10"
              style={{
                transform: menuOpen ? 'translateY(0)' : 'translateY(24px)',
                opacity: menuOpen ? 1 : 0,
                transition: `transform 400ms ${i * 60}ms, opacity 400ms ${i * 60}ms`,
              }}
            >
              <span
                className="font-display font-medium tracking-[-0.02em] text-bone group-hover:text-voltage-light transition-colors"
                style={{ fontSize: 'clamp(32px, 6vw, 56px)' }}
              >
                {item.label}
              </span>
              <span className="font-serif italic text-[28px] text-mist group-hover:text-voltage-light transition-colors">→</span>
            </a>
          ))}
        </nav>

        <button
          onClick={() => { setMenuOpen(false); onAccessClick?.() }}
          className="mt-10 inline-flex items-center gap-3 px-[26px] py-4 bg-voltage text-bone font-mono text-xs tracking-[0.16em] uppercase self-start"
        >
          Agendar conversación →
        </button>
      </div>
    </>
  )
}
