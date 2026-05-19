'use client'

import { useState, useRef, useCallback } from 'react'
import FadeIn from '@/components/ui/FadeIn'

const CAPS = [
  {
    num: 'C · 01', short: '01', nameShort: 'Dirección estratégica',
    name: 'Dirección estratégica\n& Gobierno TI',
    desc: 'Actuamos como su CTO externo con presencia ejecutiva real. Definimos el roadmap tecnológico anual, evaluamos inversiones, presidimos el comité TI y tomamos decisiones que los proveedores internos no pueden tomar.',
    deliverables: ['Roadmap tecnológico 12 meses', 'Evaluación y selección de inversiones', 'Comité directivo TI mensual', 'Reporte ejecutivo de resultados'],
    metric: 'ROI medible en 90 días',
  },
  {
    num: 'C · 02', short: '02', nameShort: 'Auditoría & Arquitectura',
    name: 'Auditoría & Arquitectura TI',
    desc: 'Mapeamos el estado real de su tecnología: contratos, dependencias, brechas y oportunidades. Entregamos una arquitectura objetivo clara, por fases, con estimados de inversión y retorno.',
    deliverables: ['Diagnóstico 360° del ecosistema TI', 'Mapa de riesgos y dependencias', 'Arquitectura objetivo por fases', 'Inventario tecnológico completo'],
    metric: 'Diagnóstico entregado en 3 semanas',
  },
  {
    num: 'C · 03', short: '03', nameShort: 'Gobierno de Proveedores',
    name: 'Gobierno de Proveedores TI',
    desc: 'Renegociamos contratos, implementamos SLAs con penalizaciones reales y reducimos la factura tecnológica sin degradar el servicio. Convertimos el gasto en proveedor en una ventaja competitiva.',
    deliverables: ['Auditoría de contratos actuales', 'SLAs con penalizaciones efectivas', 'Renegociación con proveedores clave', 'Ahorros documentados y auditables'],
    metric: 'Ahorros promedio 30–50%',
  },
  {
    num: 'C · 04', short: '04', nameShort: 'Automatización & Integraciones',
    name: 'Automatización & Integraciones',
    desc: 'Eliminamos el trabajo manual repetitivo conectando ERP, CRM y operaciones con workflows inteligentes. N8N, RPA y APIs que reducen errores, tiempo y costo operativo de forma medible.',
    deliverables: ['Mapeo de procesos candidatos', 'Implementación N8N · RPA', 'Integraciones ERP/CRM', 'KPIs de reducción operativa'],
    metric: '−30% tiempos operativos',
  },
  {
    num: 'C · 05', short: '05', nameShort: 'Datos, BI & Predictivo',
    name: 'Datos, BI & Análisis Predictivo',
    desc: 'Convertimos datos operacionales en decisiones ejecutivas. Power BI, dashboards en tiempo real, KPIs que el directivo entiende y modelos predictivos que anticipan problemas antes de que ocurran.',
    deliverables: ['Dashboard ejecutivo Power BI', 'KPIs alineados con el directivo', 'Modelos predictivos operacionales', 'Reportes automatizados semanales'],
    metric: 'Visibilidad completa en 30 días',
  },
  {
    num: 'C · 06', short: '06', nameShort: 'Cloud · FinOps',
    name: 'Cloud · FinOps · Optimización',
    desc: 'Gobernamos su infraestructura cloud para que cada peso invertido tenga retorno medible. Azure y GCP con políticas de gasto, alertas preventivas y optimización continua de recursos.',
    deliverables: ['Auditoría de costos cloud actuales', 'Políticas FinOps implementadas', 'Optimización de recursos y licencias', 'Reporte mensual de ahorro'],
    metric: '−20 a −40% en costos cloud',
  },
  {
    num: 'C · 07', short: '07', nameShort: 'Seguridad & Continuidad',
    name: 'Seguridad & Continuidad',
    desc: 'Protegemos la operación con arquitecturas de seguridad reales: FortiGate, Active Directory, gestión de identidades y planes BCP/DRP que no son solo documentos — son procedimientos ejecutables.',
    deliverables: ['Evaluación de vulnerabilidades', 'Implementación FortiGate · AD', 'Plan BCP/DRP ejecutable', 'Gestión de identidades y accesos'],
    metric: '0 incidentes post-implementación',
  },
]

export default function Capacidades() {
  const [active, setActive] = useState(0)
  const [shown, setShown] = useState(0)
  const [exiting, setExiting] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const cap = CAPS[shown]

  const select = useCallback((i: number) => {
    if (i === active) return
    setActive(i)
    setExiting(true)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setShown(i)
      setExiting(false)
    }, 210)
  }, [active])

  return (
    <section id="capacidades" className="px-[clamp(24px,5vw,96px)] py-[clamp(96px,13vw,180px)]">

      {/* Header */}
      <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16 md:mb-24 items-end max-w-[1400px]">
        <div>
          <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-voltage-light">
            <span className="w-1.5 h-1.5 rounded-full bg-voltage-light" />
            — Capacidades
          </span>
          <h2
            className="font-medium tracking-[-0.03em] leading-[1.0] mt-5"
            style={{ fontSize: 'clamp(32px, 4vw, 64px)' }}
          >
            Siete capacidades.
            <br />
            Una sola firma.
          </h2>
        </div>
        <p className="text-fog/70 leading-[1.65]" style={{ fontSize: 'clamp(15px, 1.1vw, 17px)' }}>
          BITRA no vende servicios — instala capacidades. Cada una opera autónomamente o se compone con el resto, según el momento y la madurez tecnológica del cliente.
        </p>
      </FadeIn>

      {/* Explorer — desktop */}
      <FadeIn delay={80}>
        <div className="hidden md:grid grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] border border-white/[0.06] max-w-[1400px]" style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.3)' }}>

          {/* Left: list */}
          <div className="border-r border-white/[0.06] self-start sticky top-20">
            {CAPS.map((c, i) => (
              <button
                key={c.num}
                onClick={() => select(i)}
                className={`w-full text-left flex items-center gap-4 px-6 py-[18px] border-b border-white/[0.05] last:border-0 transition-colors duration-300 group relative overflow-hidden ${
                  i === active ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'
                }`}
              >
                {i === active && (
                  <>
                    <span
                      className="absolute left-0 top-0 bottom-0 w-[2px] bg-voltage-light"
                      style={{ boxShadow: '2px 0 14px rgba(79,160,181,0.55), 2px 0 4px rgba(79,160,181,0.3)' }}
                    />
                    <span
                      className="absolute left-0 top-0 bottom-0 w-12 pointer-events-none"
                      style={{ background: 'linear-gradient(90deg, rgba(79,160,181,0.07) 0%, transparent 100%)' }}
                    />
                  </>
                )}
                <span className={`font-mono text-[10px] tracking-[0.16em] uppercase flex-shrink-0 transition-colors duration-300 ${i === active ? 'text-voltage-light' : 'text-mist/40'}`}>
                  {c.num}
                </span>
                <span className={`text-[13px] leading-snug font-medium transition-colors duration-300 flex-1 ${i === active ? 'text-bone' : 'text-fog/55 group-hover:text-fog/80'}`}>
                  {c.nameShort}
                </span>
                <span className={`font-serif italic text-mist/20 transition-all duration-300 flex-shrink-0 ${i === active ? 'text-voltage-light opacity-100' : 'opacity-0 group-hover:opacity-50'}`}>
                  →
                </span>
              </button>
            ))}
          </div>

          {/* Right: orchestrated panel */}
          <div
            key={shown}
            className="cap-panel p-10 lg:p-14 overflow-hidden"
            style={exiting ? {
              opacity: 0,
              transform: 'translateY(-4px)',
              transition: 'opacity 200ms ease-in, transform 200ms ease-in',
              pointerEvents: 'none',
            } : undefined}
          >
            {/* 1 — ghost number + label */}
            <div className="flex items-start justify-between gap-4 mb-2">
              <span
                className="font-serif italic leading-none text-bone/[0.06] select-none"
                style={{ fontSize: 'clamp(80px, 9vw, 140px)', letterSpacing: '-0.04em', lineHeight: 0.9 }}
              >
                {cap.short}
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-voltage-light border border-voltage-light/20 px-2.5 py-1.5 mt-2 flex-shrink-0">
                {cap.num}
              </span>
            </div>

            {/* 2 — title */}
            <h3
              className="font-medium leading-[1.1] tracking-[-0.025em] -mt-4 whitespace-pre-line"
              style={{ fontSize: 'clamp(24px, 2.4vw, 38px)' }}
            >
              {cap.name}
            </h3>

            {/* 3 — description */}
            <p className="text-fog/65 leading-[1.75] mt-6 max-w-[520px]" style={{ fontSize: 'clamp(14px, 1vw, 16px)' }}>
              {cap.desc}
            </p>

            {/* 4 — deliverables */}
            <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3.5">
              {cap.deliverables.map((d) => (
                <div key={d} className="flex items-center gap-3">
                  <span className="w-[3px] h-[3px] rounded-full bg-voltage-light flex-shrink-0" />
                  <span className="text-fog/55 text-[13px] leading-snug">{d}</span>
                </div>
              ))}
            </div>

            {/* 5 — KPI + CTA */}
            <div className="mt-12 pt-8 border-t border-white/[0.06] flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-mist/40 mb-2">
                  Resultado típico
                </p>
                <p
                  className="font-display font-semibold text-voltage-light tracking-[-0.025em] leading-none"
                  style={{ fontSize: 'clamp(18px, 1.6vw, 26px)' }}
                >
                  {cap.metric}
                </p>
              </div>
              <a
                href="#contacto"
                className="flex-shrink-0 inline-flex items-center gap-2.5 px-5 py-3 border border-white/[0.08] font-mono text-[10px] tracking-[0.16em] uppercase text-fog/70 transition-all duration-300"
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(79,160,181,0.4)'
                  e.currentTarget.style.color = '#4FA0B5'
                  e.currentTarget.style.boxShadow = '0 0 16px rgba(79,160,181,0.12)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = ''
                  e.currentTarget.style.color = ''
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                Iniciar diagnóstico →
              </a>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Mobile: accordion */}
      <div className="md:hidden flex flex-col border-t border-white/[0.06] max-w-[1400px]">
        {CAPS.map((c, i) => (
          <div key={c.num} className="border-b border-white/[0.06]">
            <button
              onClick={() => select(i === active ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-mist/40">{c.num}</span>
                <span className={`font-medium text-[15px] ${i === active ? 'text-bone' : 'text-fog/65'}`}>{c.nameShort}</span>
              </div>
              <span className={`font-serif italic text-xl text-mist/40 transition-transform duration-400 ${i === active ? '-rotate-90 text-voltage-light' : ''}`}>↓</span>
            </button>
            {i === active && (
              <div className="pb-8 animate-fade-slide">
                <p className="text-fog/65 text-[14px] leading-[1.7] mb-6">{c.desc}</p>
                <div className="flex flex-col gap-3 mb-7">
                  {c.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-3">
                      <span className="w-[3px] h-[3px] rounded-full bg-voltage-light flex-shrink-0" />
                      <span className="text-fog/55 text-[13px]">{d}</span>
                    </div>
                  ))}
                </div>
                <p className="font-display font-semibold text-voltage-light text-[18px] tracking-[-0.02em]">{c.metric}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
