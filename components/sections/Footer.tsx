'use client'

import Container from '@/components/common/Container'

interface FooterProps {
  onBrandbookClick?: () => void
}

export default function Footer({ onBrandbookClick }: FooterProps) {
  return (
    <footer className="pt-16 pb-12 bg-ink text-mist border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <Container>
      <div className="flex justify-between items-start gap-8 flex-wrap">
        <div className="flex items-center gap-2.5 font-mono text-[13px] tracking-[0.16em] uppercase text-bone">
          <span className="w-2 h-2 rounded-full bg-voltage-light" />
          BITRA · Brandbook 2026 · Vol. I
        </div>
        <div className="flex gap-16 flex-wrap">
          <div className="flex flex-col gap-2.5 text-[13px]">
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-fog mb-2">Marca</span>
            <a href="#manifiesto" className="text-mist hover:text-voltage-light transition-colors">Manifiesto</a>
            <a href="#casos" className="text-mist hover:text-voltage-light transition-colors">Casos de impacto</a>
            <a href="/blog" className="text-mist hover:text-voltage-light transition-colors">Blog & perspectiva</a>
            <button
              onClick={onBrandbookClick}
              className="text-mist hover:text-voltage-light transition-colors text-left"
            >
              Brandbook completo →
            </button>
          </div>
          <div className="flex flex-col gap-2.5 text-[13px]">
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-fog mb-2">Capacidades</span>
            <a href="#capacidades" className="text-mist hover:text-voltage-light transition-colors">Dirección estratégica</a>
            <a href="#capacidades" className="text-mist hover:text-voltage-light transition-colors">Auditoría &amp; arquitectura</a>
            <a href="#capacidades" className="text-mist hover:text-voltage-light transition-colors">Cloud &amp; FinOps</a>
          </div>
          <div className="flex flex-col gap-2.5 text-[13px]">
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-fog mb-2">Contacto</span>
            <a href="mailto:hola@bitra.co" className="text-mist hover:text-voltage-light transition-colors">hola@bitra.co</a>
            <a href="#contacto" className="text-mist hover:text-voltage-light transition-colors">Agendar conversación</a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-6 border-t flex justify-between gap-6 flex-wrap font-mono text-[11px] tracking-[0.14em] uppercase text-mist/50" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <span>© 2026 BITRA · Todos los derechos reservados</span>
        <span>NIT · Medellín, Colombia</span>
      </div>
      </Container>
    </footer>
  )
}
