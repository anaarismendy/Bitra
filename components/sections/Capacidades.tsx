import Container      from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import FadeIn         from '@/components/ui/FadeIn'
import { cn }         from '@/lib/cn'

const CAPS = [
  {
    num: 'C · 01', short: '01',
    name: 'Dirección estratégica & Gobierno TI',
    desc: 'Actuamos como su CTO externo con presencia ejecutiva real. Definimos el roadmap tecnológico anual, evaluamos inversiones, presidimos el comité TI y tomamos decisiones que los proveedores internos no pueden tomar.',
    deliverables: ['Roadmap tecnológico 12 meses', 'Evaluación de inversiones', 'Comité directivo mensual', 'Reporte ejecutivo'],
    metric: 'ROI medible en 90 días',
  },
  {
    num: 'C · 02', short: '02',
    name: 'Auditoría & Arquitectura TI',
    desc: 'Mapeamos el estado real de su tecnología: contratos, dependencias, brechas y oportunidades. Entregamos una arquitectura objetivo clara, por fases, con estimados de inversión y retorno.',
    deliverables: ['Diagnóstico 360° ecosistema TI', 'Mapa de riesgos', 'Arquitectura por fases', 'Inventario tecnológico'],
    metric: 'Diagnóstico en 3 semanas',
  },
  {
    num: 'C · 03', short: '03',
    name: 'Gobierno de Proveedores TI',
    desc: 'Renegociamos contratos, implementamos SLAs con penalizaciones reales y reducimos la factura tecnológica sin degradar el servicio. Convertimos el gasto en proveedor en una ventaja competitiva.',
    deliverables: ['Auditoría de contratos', 'SLAs con penalizaciones', 'Renegociación clave', 'Ahorros auditables'],
    metric: 'Ahorros promedio 30–50%',
  },
  {
    num: 'C · 04', short: '04',
    name: 'Automatización & Integraciones',
    desc: 'Eliminamos el trabajo manual repetitivo conectando ERP, CRM y operaciones con workflows inteligentes. N8N, RPA y APIs que reducen errores, tiempo y costo operativo de forma medible.',
    deliverables: ['Mapeo de procesos', 'Implementación N8N · RPA', 'Integraciones ERP/CRM', 'KPIs operativos'],
    metric: '−30% tiempos operativos',
  },
  {
    num: 'C · 05', short: '05',
    name: 'Datos, BI & Análisis Predictivo',
    desc: 'Convertimos datos operacionales en decisiones ejecutivas. Power BI, dashboards en tiempo real, KPIs que el directivo entiende y modelos predictivos que anticipan problemas antes de que ocurran.',
    deliverables: ['Dashboard Power BI', 'KPIs ejecutivos', 'Modelos predictivos', 'Reportes automáticos'],
    metric: 'Visibilidad en 30 días',
  },
  {
    num: 'C · 06', short: '06',
    name: 'Cloud · FinOps · Optimización',
    desc: 'Gobernamos su infraestructura cloud para que cada peso invertido tenga retorno medible. Azure y GCP con políticas de gasto, alertas preventivas y optimización continua de recursos.',
    deliverables: ['Auditoría de costos cloud', 'Políticas FinOps', 'Optimización de licencias', 'Reporte de ahorro'],
    metric: '−20 a −40% costos cloud',
  },
  {
    num: 'C · 07', short: '07',
    name: 'Seguridad & Continuidad',
    desc: 'Protegemos la operación con arquitecturas de seguridad reales: FortiGate, Active Directory, gestión de identidades y planes BCP/DRP que no son solo documentos — son procedimientos ejecutables.',
    deliverables: ['Evaluación de vulnerabilidades', 'FortiGate · Active Directory', 'Plan BCP/DRP ejecutable', 'Gestión de identidades'],
    metric: '0 incidentes post-implementación',
  },
]

type Cap = typeof CAPS[number]

function CapabilityCard({ cap, isLast }: { cap: Cap; isLast: boolean }) {
  return (
    <article
      className={cn(
        'group card-light flex flex-col h-full p-6 sm:p-8 lg:p-9 transition-all duration-400',
        isLast && 'lg:flex-row lg:gap-16 lg:items-start'
      )}
    >
      {/* Ghost number */}
      <div className={cn('flex-shrink-0', isLast && 'lg:w-[160px]')}>
        <span
          className="font-serif italic leading-none text-ink/[0.06] select-none group-hover:text-ink/[0.11] transition-colors duration-500 block"
          style={{
            fontSize: isLast ? 'clamp(52px, 6vw, 88px)' : 'clamp(48px, 5.5vw, 80px)',
            letterSpacing: '-0.04em',
            lineHeight: 0.85,
          }}
        >
          {cap.short}
        </span>
      </div>

      {/* Content */}
      <div className={cn('flex flex-col flex-1 mt-4', isLast && 'lg:mt-0')}>
        <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-voltage/60 mb-2.5">
          {cap.num}
        </p>

        <h3
          className="font-medium leading-[1.1] tracking-[-0.02em] text-ink"
          style={{ fontSize: 'clamp(15px, 1.4vw, 20px)' }}
        >
          {cap.name}
        </h3>

        <p className="text-steel/60 leading-[1.72] mt-3" style={{ fontSize: 'clamp(13px, 0.88vw, 14px)' }}>
          {cap.desc}
        </p>

        {/* Deliverables — hidden on mobile */}
        <div
          className={cn(
            'mt-5 gap-y-2 gap-x-8 hidden sm:grid',
            isLast ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'
          )}
        >
          {cap.deliverables.map((d) => (
            <div key={d} className="flex items-start gap-2">
              <span className="w-[3px] h-[3px] rounded-full bg-voltage/60 flex-shrink-0 mt-[5px]" />
              <span className="text-steel/45 text-[12px] leading-snug">{d}</span>
            </div>
          ))}
        </div>

        {/* Metric */}
        <div className="mt-6 sm:mt-auto pt-5" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-steel/35 mb-1">
            Resultado típico
          </p>
          <p
            className="font-display font-semibold text-voltage tracking-[-0.025em] leading-none"
            style={{ fontSize: 'clamp(14px, 1.25vw, 19px)' }}
          >
            {cap.metric}
          </p>
        </div>
      </div>
    </article>
  )
}

export default function Capacidades() {
  return (
    <section
      id="capacidades"
      className="bg-paper text-ink py-[clamp(80px,13vw,160px)]"
      style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
    >
      <Container>
        {/* Header */}
        <FadeIn>
          <SectionHeading
            layout="split"
            label="Capacidades"
            title={<>Siete capacidades.<br />Una sola firma.</>}
            subtitle="BITRA no vende servicios — instala capacidades. Cada una opera autónomamente o se compone con el resto, según el momento y la madurez tecnológica del cliente."
          />
        </FadeIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {CAPS.map((cap, i) => {
            const isLast = i === CAPS.length - 1
            return (
              <FadeIn
                key={cap.num}
                delay={i * 55}
                className={cn(isLast && 'sm:col-span-2 lg:col-span-3')}
              >
                <CapabilityCard cap={cap} isLast={isLast} />
              </FadeIn>
            )
          })}
        </div>

        {/* Footer CTA */}
        <FadeIn delay={440}>
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 px-6 sm:px-10 py-7 sm:py-8 mt-5 bg-ink"
            style={{ border: '1px solid var(--border-subtle)' }}
          >
            <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-mist/40">
              Primer diagnóstico gratuito · Sin compromiso · 60 minutos
            </p>
            <a href="#contacto" className="btn btn-secondary flex-shrink-0">
              Iniciar diagnóstico →
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
