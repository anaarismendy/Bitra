'use client'

import { useState, useEffect, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [info, setInfo] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [mode, setMode] = useState<'login' | 'recovery'>('login')
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    if (!isOpen) {
      setError(null)
      setInfo(null)
      setEmail('')
      setPassword('')
      setMode('login')
    }
  }, [isOpen])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  async function handleLogin(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (error) {
      setError('Credenciales incorrectas. Verifica tu email y contraseña.')
    } else {
      router.push('/brandbook')
    }
  }

  async function handleRecovery(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/brandbook`,
    })
    setLoading(false)
    if (error) {
      setError('No pudimos enviar el correo. Intenta de nuevo.')
    } else {
      setInfo('Revisa tu email para restablecer tu contraseña.')
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-6"
      style={{ background: 'rgba(8,9,11,0.78)', backdropFilter: 'blur(14px)' }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
        className="bg-bone text-ink w-full max-w-[520px] p-12 relative border border-black/[0.08]"
        style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.45)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 w-9 h-9 border border-black/[0.12] flex items-center justify-center text-ink hover:bg-ink hover:text-bone hover:border-ink transition-all text-[22px] font-serif"
        >
          ×
        </button>

        <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.18em] uppercase text-voltage">
          <span className="w-1.5 h-1.5 rounded-full bg-voltage" />
          — Acceso restringido
        </span>

        <h3 id="auth-title" className="font-medium leading-[1.1] tracking-[-0.01em] mt-4" style={{ fontSize: 'clamp(28px, 3vw, 36px)' }}>
          Brandbook BITRA <em className="font-serif font-normal">· Vol. I</em>
        </h3>
        <p className="text-[#4A4D55] text-[14px] leading-[1.55] mt-3">
          Documento confidencial. Inicia sesión con el correo y la contraseña que te asignamos.
        </p>

        {mode === 'login' ? (
          <form onSubmit={handleLogin} className="flex flex-col gap-4 mt-8" autoComplete="on">
            {error && (
              <p className="text-[13px] leading-[1.45] px-3 py-3 border"
                style={{ color: '#8B2E2E', borderColor: 'rgba(139,46,46,0.25)', background: 'rgba(139,46,46,0.06)' }}>
                {error}
              </p>
            )}
            <label className="flex flex-col gap-2">
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#4A4D55]">Correo corporativo</span>
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full py-3.5 border-0 border-b border-black/[0.12] bg-transparent text-ink text-[16px] outline-none focus:border-voltage transition-colors"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#4A4D55]">Contraseña</span>
              <input
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full py-3.5 border-0 border-b border-black/[0.12] bg-transparent text-ink text-[16px] outline-none focus:border-voltage transition-colors"
              />
            </label>
            <div className="flex items-center justify-between gap-4 mt-3">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-3 px-[26px] py-4 bg-ink text-bone font-mono text-xs tracking-[0.16em] uppercase hover:bg-voltage transition-all disabled:opacity-50"
              >
                {loading ? 'Ingresando...' : 'Ingresar'}
              </button>
              <button
                type="button"
                onClick={() => setMode('recovery')}
                className="font-mono text-[11px] tracking-[0.16em] uppercase text-voltage"
              >
                Olvidé mi contraseña
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleRecovery} className="flex flex-col gap-4 mt-8">
            {error && (
              <p className="text-[13px] leading-[1.45] px-3 py-3 border"
                style={{ color: '#8B2E2E', borderColor: 'rgba(139,46,46,0.25)', background: 'rgba(139,46,46,0.06)' }}>
                {error}
              </p>
            )}
            {info && (
              <p className="text-[13px] leading-[1.45] px-3 py-3 border"
                style={{ color: '#14495A', borderColor: 'rgba(31,100,120,0.35)', background: 'rgba(31,100,120,0.08)' }}>
                {info}
              </p>
            )}
            <label className="flex flex-col gap-2">
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#4A4D55]">Correo corporativo</span>
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full py-3.5 border-0 border-b border-black/[0.12] bg-transparent text-ink text-[16px] outline-none focus:border-voltage transition-colors"
              />
            </label>
            <div className="flex items-center justify-between gap-4 mt-3">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-3 px-[26px] py-4 bg-ink text-bone font-mono text-xs tracking-[0.16em] uppercase hover:bg-voltage transition-all disabled:opacity-50"
              >
                {loading ? 'Enviando...' : 'Enviar enlace'}
              </button>
              <button
                type="button"
                onClick={() => setMode('login')}
                className="font-mono text-[11px] tracking-[0.16em] uppercase text-voltage"
              >
                Volver al login
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
