'use client'

import { useState, useEffect, useRef } from 'react'

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
  const [activeSection, setActiveSection] = useState('')
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const sectionIds = NAV_LINKS.filter(l => l.href.startsWith('#')).map(l => l.href.slice(1))

    const update = () => {
      const isScrolled = window.scrollY > 48
      setScrolled(isScrolled)
      navRef.current?.classList.toggle('scrolled', isScrolled)

      const scrollY = window.scrollY + 120
      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) current = id
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        ref={navRef}
        className={`nav-glass fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[clamp(24px,5vw,96px)] transition-all duration-500 ${
          scrolled ? 'py-3 bg-ink/88' : 'py-5 bg-ink/45'
        }`}
      >
        <a
          href="/"
          className="flex items-center gap-3 font-mono text-[13px] tracking-[0.16em] uppercase font-medium text-bone hover:text-voltage-light transition-colors duration-300 group"
        >
          {/* Logo mark — ring + core dot */}
          <span className="relative flex-shrink-0 w-5 h-5 flex items-center justify-center">
            {/* Outer ring — pulse animation */}
            <span
              className="absolute w-full h-full rounded-full border border-voltage-light/25 animate-ping"
              style={{ animationDuration: '2.6s', animationTimingFunction: 'ease-out' }}
            />
            {/* Static ring */}
            <span
              className={`absolute rounded-full border border-voltage-light/40 transition-all duration-500 ${scrolled ? 'w-3 h-3' : 'w-4 h-4'}`}
            />
            {/* Core dot */}
            <span
              className={`relative rounded-full bg-voltage-light transition-all duration-500 ${scrolled ? 'w-1.5 h-1.5' : 'w-2 h-2'}`}
            />
          </span>
          BITRA
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => {
            const sectionId = item.href.startsWith('#') ? item.href.slice(1) : null
            const isActive = sectionId !== null && activeSection === sectionId
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-300 group py-1 ${
                  isActive ? 'text-bone' : 'text-mist/70 hover:text-bone'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-voltage-light ${isActive ? '' : 'w-0 group-hover:w-full'}`}
                  style={{
                    width: isActive ? '100%' : undefined,
                    opacity: 0.9,
                    transition: `width 400ms cubic-bezier(0.16,1,0.3,1)`,
                  }}
                />
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-4">
          {/* CTA — CSS class handles all hover state */}
          <button
            onClick={onAccessClick}
            className="btn btn-secondary hidden md:inline-flex"
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
              className="group flex items-center justify-between py-5 border-b first:border-t"
              style={{
                borderColor: 'var(--border-soft)',
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
            className="btn btn-primary"
          >
            Agendar conversación →
          </button>
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-mist/50 mt-6">
            hola@bitra.co · Medellín · Bogotá
          </p>
        </div>
      </div>
    </>
  )
}
