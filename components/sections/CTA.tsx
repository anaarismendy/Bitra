'use client'

import { useState } from 'react'
import Container      from '@/components/common/Container'
import FadeIn         from '@/components/ui/FadeIn'
import ParticleCanvas from '@/components/ui/ParticleCanvas'
import { cn }         from '@/lib/cn'

const TRUST_PILLS = ['Sin compromiso', 'NDA estándar', 'Respuesta en 24h'] as const
const STEPS       = ['Diagnóstico', 'Tesis', 'Ejecución', 'Operación']    as const

interface FieldProps {
  label:       string
  name:        string
  type?:       string
  placeholder?: string
  error?:      boolean
  required?:   boolean
  onChange?:   () => void
}

function Field({ label, name, type = 'text', placeholder, error, required = true, onChange }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="font-mono text-[9px] tracking-[0.2em] uppercase text-mist/60">
        {label}{required && <span className="text-voltage-light ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        onChange={onChange}
        className={cn(
          'w-full bg-white/[0.035] border font-body text-[13px] text-bone placeholder:text-mist/25 px-4 py-3 outline-none transition-all duration-200 focus:bg-white/[0.06] focus:border-voltage-light/40',
          error ? 'border-signal/50' : 'border-white/[0.09]'
        )}
      />
      {error && <p className="text-signal/80 text-[10px] font-mono tracking-wide">Campo requerido</p>}
    </div>
  )
}

export default function CTA() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors]       = useState<Record<string, boolean>>({})

  const clearError = (field: string) =>
    setErrors(prev => ({ ...prev, [field]: false }))

  const validate = (data: FormData) => {
    const errs: Record<string, boolean> = {}
    if (!String(data.get('nombre')  ?? '').trim()) errs.nombre  = true
    if (!String(data.get('empresa') ?? '').trim()) errs.empresa = true
    const email = String(data.get('email') ?? '')
    if (!email || !email.includes('@') || !email.includes('.')) errs.email = true
    if (!String(data.get('reto')    ?? '').trim()) errs.reto    = true
    return errs
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const errs = validate(data)
    if (Object.keys(errs).length) { setErrors(errs); return }

    const body = [
      `Nombre: ${data.get('nombre')}`,
      `Empresa: ${data.get('empresa')}`,
      `Email: ${data.get('email')}`,
      `Cargo: ${data.get('cargo') || '—'}`,
      '',
      'Reto principal:',
      `${data.get('reto')}`,
    ].join('\n')

    const link = document.createElement('a')
    link.href = `mailto:hola@bitra.co?subject=Diagnóstico BITRA — ${encodeURIComponent(String(data.get('empresa')))}&body=${encodeURIComponent(body)}`
    link.click()
    setSubmitted(true)
  }

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-ink text-bone py-[clamp(96px,13vw,180px)]"
    >
      <ParticleCanvas />

      <Container className="relative z-[2] grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-16 items-start">

        {/* ── Left: headline ── */}
        <FadeIn>
          <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-voltage-light">
            <span className="w-1.5 h-1.5 rounded-full bg-voltage-light" />
            — Próximo paso
          </span>

          <h2
            className="font-medium tracking-[-0.025em] leading-[1.05] mt-6"
            style={{ fontSize: 'clamp(28px, 3.2vw, 54px)' }}
          >
            Una conversación.<br />
            <em className="font-serif font-normal italic text-voltage-light">Un diagnóstico.</em><br />
            Una decisión.
          </h2>

          <p
            className="text-fog/60 leading-[1.72] mt-6 max-w-[340px]"
            style={{ fontSize: 'clamp(14px, 1vw, 15.5px)' }}
          >
            El primer diagnóstico es gratuito y sin compromiso. En 60 minutos mapeamos el estado real
            de su tecnología y cuantificamos las oportunidades de mejora.
          </p>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-4 mt-8">
            {TRUST_PILLS.map((item) => (
              <span key={item} className="flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-mist/45">
                <span className="w-1 h-1 rounded-full bg-voltage-light/50" />
                {item}
              </span>
            ))}
          </div>

          {/* Methodology steps */}
          <div className="mt-10 pt-8 border-t border-white/[0.06]">
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-mist/35 mb-4">
              Metodología · BITRA OS
            </p>
            <div className="flex gap-2 flex-wrap">
              {STEPS.map((step, i) => (
                <span key={step} className="flex items-center gap-1.5 font-mono text-[9px] tracking-[0.14em] uppercase text-mist/45">
                  <span className="font-serif italic text-[10px] text-mist/25">{String(i + 1).padStart(2, '0')}</span>
                  {step}
                  {i < STEPS.length - 1 && <span className="text-mist/20">·</span>}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ── Right: contact form ── */}
        <FadeIn delay={130}>
          {submitted ? (
            <SuccessCard />
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="card-dark p-7 sm:p-8 lg:p-10 flex flex-col gap-5"
              style={{ border: '1px solid rgba(92,213,236,0.22)', boxShadow: '0 0 60px rgba(92,213,236,0.08)' }}
            >
              <div className="pb-5 border-b border-white/[0.06]">
                <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-voltage-light/70 mb-2">
                  Diagnóstico gratuito · 60 min
                </p>
                <h3
                  className="font-display font-semibold text-bone leading-snug tracking-[-0.02em]"
                  style={{ fontSize: 'clamp(18px, 1.6vw, 24px)' }}
                >
                  Cuéntenos su situación
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Nombre completo" name="nombre"  placeholder="Ana Martínez"     error={errors.nombre}  onChange={() => clearError('nombre')} />
                <Field label="Empresa"         name="empresa" placeholder="Empresa S.A.S."   error={errors.empresa} onChange={() => clearError('empresa')} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Email corporativo" name="email" type="email" placeholder="ana@empresa.co" error={errors.email} onChange={() => clearError('email')} />
                <Field label="Cargo" name="cargo" placeholder="CEO / COO / Gerente TI" required={false} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="reto" className="font-mono text-[9px] tracking-[0.2em] uppercase text-mist/60">
                  Principal reto tecnológico<span className="text-voltage-light ml-1">*</span>
                </label>
                <textarea
                  id="reto"
                  name="reto"
                  rows={4}
                  placeholder="Ej: Necesitamos reducir el costo cloud, mejorar la seguridad, o digitalizar un proceso manual..."
                  onChange={() => clearError('reto')}
                  className={cn(
                    'w-full bg-white/[0.035] border font-body text-[13px] text-bone placeholder:text-mist/25 px-4 py-3 outline-none resize-none transition-all duration-200 focus:bg-white/[0.06] focus:border-voltage-light/40',
                    errors.reto ? 'border-signal/50' : 'border-white/[0.09]'
                  )}
                  style={{ lineHeight: 1.65 }}
                />
                {errors.reto && <p className="text-signal/80 text-[10px] font-mono tracking-wide">Campo requerido</p>}
              </div>

              <button type="submit" className="btn btn-primary w-full justify-center mt-1">
                Enviar solicitud de diagnóstico →
              </button>

              <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-mist/30 text-center">
                Toda interacción bajo NDA estándar · Sin compromiso
              </p>
            </form>
          )}
        </FadeIn>
      </Container>
    </section>
  )
}

function SuccessCard() {
  return (
    <div
      className="card-dark p-8 lg:p-12 flex flex-col gap-6"
      style={{ border: '1px solid rgba(92,213,236,0.22)', boxShadow: '0 0 60px rgba(92,213,236,0.08)' }}
    >
      <span
        className="w-11 h-11 rounded-full flex items-center justify-center border border-voltage-light/35"
        style={{ boxShadow: '0 0 24px rgba(92,213,236,0.18)' }}
      >
        <span className="font-serif italic text-voltage-light text-xl leading-none">✓</span>
      </span>

      <div>
        <h3
          className="font-display font-semibold text-bone leading-snug tracking-[-0.02em]"
          style={{ fontSize: 'clamp(20px, 2vw, 26px)' }}
        >
          Mensaje enviado.
        </h3>
        <p className="text-fog/60 text-[14px] leading-[1.65] mt-3 max-w-[320px]">
          Hemos recibido su solicitud. Un consultor BITRA se pondrá en contacto en menos de 24 horas hábiles.
        </p>
      </div>

      <div className="pt-5 border-t border-white/[0.06]">
        <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-mist/35">
          hola@bitra.co · NDA estándar aplicado · Medellín · Bogotá
        </p>
      </div>
    </div>
  )
}
