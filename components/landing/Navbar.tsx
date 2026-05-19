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
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[clamp(24px,5vw,96px)] transition-all duration-500 ${
          scrolled
            ? 'py-3.5 bg-ink/90 border-b border-white/[0.06] backdrop-blur-xl'
            : 'py-5 bg-ink/50 border-b border-white/[0.04] backdrop-blur-sm'
        }`}
        style={scrolled ? {
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          boxShadow: '0 1px 24px rgba(0,0,0,0.45), 0 0 0 0.5px rgba(255,255,255,0.04)',
        } : {
          backdropFilter: 'saturate(120%) blur(8px)',
          WebkitBackdropFilter: 'saturate(120%) blur(8px)',
        }}
      >
        <a
          href="/"
          className="flex items-center gap-2.5 font-mono text-[13px] tracking-[0.16em] uppercase font-medium text-bone hover:text-voltage-light transition-colors duration-300"
        >
          <span className={`rounded-full bg-voltage-light transition-all duration-500 ${scrolled ? 'w-1.5 h-1.5' : 'w-2 h-2'}`} />
          BITRA
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative font-mono text-[11px] tracking-[0.12em] uppercase text-mist/70 hover:text-bone transition-colors duration-300 group py-1"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-voltage-light group-hover:w-full transition-all duration-400 opacity-80" style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }} />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onAccessClick}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 border border-white/[0.12] text-bone font-mono text-[11px] tracking-[0.12em] uppercase hover:bg-voltage hover:border-voltage transition-all duration-300"
            style={{ transition: 'background 300ms, border-color 300ms, box-shadow 300ms' }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 20px rgba(31,100,120,0.35)')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = '')}
          >
            Agendar conversación
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          >
            <span className={`block h-px bg-bone transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px] w-full' : 'w-full'}`} />
            <span className={`block h-px bg-bone transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-5/6 opacity-100'}`} />
            <span className={`block h-px bg-bone transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px] w-full' : 'w-4/6'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-40 bg-ink flex flex-col justify-between px-[clamp(24px,5vw,48px)] pt-28 pb-12 md:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col">
          {NAV_LINKS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between py-5 border-b border-white/[0.08] first:border-t first:border-white/[0.08]"
              style={{
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: menuOpen ? 1 : 0,
                transition: `transform 500ms ${80 + i * 60}ms cubic-bezier(0.16,1,0.3,1), opacity 500ms ${80 + i * 60}ms cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              <span
                className="font-display font-medium text-bone group-hover:text-voltage-light transition-colors duration-300"
                style={{ fontSize: 'clamp(28px, 6vw, 48px)' }}
              >
                {item.label}
              </span>
              <span className="font-serif italic text-2xl text-mist/40 group-hover:text-voltage-light group-hover:translate-x-1 transition-all duration-300">→</span>
            </a>
          ))}
        </nav>

        <div
          style={{
            transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
            opacity: menuOpen ? 1 : 0,
            transition: `transform 500ms 420ms cubic-bezier(0.16,1,0.3,1), opacity 500ms 420ms cubic-bezier(0.16,1,0.3,1)`,
          }}
        >
          <button
            onClick={() => { setMenuOpen(false); onAccessClick?.() }}
            className="inline-flex items-center gap-3 px-6 py-4 bg-voltage text-bone font-mono text-[11px] tracking-[0.16em] uppercase hover:bg-voltage-light transition-colors duration-300"
          >
            Agendar conversación →
          </button>
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-mist mt-6">
            hola@bitra.co · Medellín · Bogotá
          </p>
        </div>
      </div>
    </>
  )
}
