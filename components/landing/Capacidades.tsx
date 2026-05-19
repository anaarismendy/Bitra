'use client'

import { useState } from 'react'
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
  const cap = CAPS[active]

  return (
    <section id="capacidades" className="px-[clamp(24px,5vw,96px)] py-[clamp(80px,12vw,160px)]">

      {/* Header */}
      <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16 md:mb-20 items-end max-w-[1400px]">
        <div>
          <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-voltage-light">
            <span className="w-1.5 h-1.5 rounded-full bg-voltage-light" />
            — Capacidades
          </span>
          <h2
            className="font-medium tracking-[-0.025em] leading-[1.02] mt-5"
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
      <div className="hidden md:grid grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] border border-white/[0.07] max-w-[1400px]">

        {/* Left: sticky list */}
        <div className="border-r border-white/[0.07] self-start sticky top-20">
          {CAPS.map((c, i) => (
            <button
              key={c.num}
              onClick={() => setActive(i)}
              className={`w-full text-left flex items-center gap-4 px-6 py-5 border-b border-white/[0.06] last:border-0 transition-all duration-300 group relative overflow-hidden ${
                i === active
                  ? 'bg-white/[0.04]'
                  : 'hover:bg-white/[0.02]'
              }`}
            >
              {i === active && (
                <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-voltage-light" />
              )}
              <span className={`font-mono text-[10px] tracking-[0.16em] uppercase flex-shrink-0 transition-colors duration-300 ${i === active ? 'text-voltage-light' : 'text-mist/50'}`}>
                {c.num}
              </span>
              <span className={`text-[13px] leading-snug font-medium transition-colors duration-300 ${i === active ? 'text-bone' : 'text-fog/60 group-hover:text-fog'}`}>
                {c.nameShort}
              </span>
              {i === active && (
                <span className="ml-auto font-serif italic text-voltage-light text-base flex-shrink-0">→</span>
              )}
            </button>
          ))}
        </div>

        {/* Right: dynamic panel */}
        <div key={active} className="p-10 lg:p-14 animate-fade-slide">
          <div className="flex items-start justify-between gap-4 mb-2">
            <span
              className="font-serif italic leading-none text-bone/[0.07] select-none"
              style={{ fontSize: 'clamp(80px, 9vw, 140px)' }}
            >
              {cap.short}
            </span>
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-voltage-light border border-voltage-light/25 px-2.5 py-1.5 mt-2">
              {cap.num}
            </span>
          </div>

          <h3
            className="font-medium leading-[1.1] tracking-[-0.02em] -mt-3 whitespace-pre-line"
            style={{ fontSize: 'clamp(24px, 2.4vw, 38px)' }}
          >
            {cap.name}
          </h3>

          <p className="text-fog/70 leading-[1.7] mt-5 max-w-[520px]" style={{ fontSize: 'clamp(14px, 1vw, 16px)' }}>
            {cap.desc}
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {cap.deliverables.map((d) => (
              <div key={d} className="flex items-center gap-2.5">
                <span className="w-1 h-1 rounded-full bg-voltage-light flex-shrink-0" />
                <span className="text-fog/60 text-[13px]">{d}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/[0.07] flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-mist/50 mb-1.5">
                Resultado típico
              </p>
              <p
                className="font-display font-semibold text-voltage-light tracking-[-0.02em]"
                style={{ fontSize: 'clamp(18px, 1.6vw, 26px)' }}
              >
                {cap.metric}
              </p>
            </div>
            <a
              href="#contacto"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 border border-white/[0.1] font-mono text-[10px] tracking-[0.14em] uppercase text-fog hover:border-voltage-light hover:text-voltage-light transition-all duration-300"
            >
              Iniciar diagnóstico
            </a>
          </div>
        </div>
      </div>

      {/* Mobile: accordion */}
      <div className="md:hidden flex flex-col border-t border-white/[0.07] max-w-[1400px]">
        {CAPS.map((c, i) => (
          <div key={c.num} className="border-b border-white/[0.07]">
            <button
              onClick={() => setActive(i === active ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-mist/50">{c.num}</span>
                <span className={`font-medium text-[15px] ${i === active ? 'text-bone' : 'text-fog/70'}`}>{c.nameShort}</span>
              </div>
              <span className={`font-serif italic text-xl text-mist transition-transform duration-300 ${i === active ? 'rotate-90 text-voltage-light' : ''}`}>→</span>
            </button>
            {i === active && (
              <div className="pb-7 animate-fade-slide">
                <p className="text-fog/70 text-[14px] leading-[1.65] mb-5">{c.desc}</p>
                <div className="flex flex-col gap-2.5 mb-6">
                  {c.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-voltage-light flex-shrink-0" />
                      <span className="text-fog/60 text-[13px]">{d}</span>
                    </div>
                  ))}
                </div>
                <p className="font-display font-semibold text-voltage-light text-[18px]">{c.metric}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
