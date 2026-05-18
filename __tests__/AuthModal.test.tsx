import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import AuthModal from '@/components/ui/AuthModal'

vi.mock('@/lib/supabase/client', () => ({
  createClient: () => ({
    auth: {
      signInWithPassword: vi.fn().mockResolvedValue({ error: null }),
      resetPasswordForEmail: vi.fn().mockResolvedValue({ error: null }),
    },
  }),
}))

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
}))

describe('AuthModal', () => {
  it('renders nothing when closed', () => {
    const { container } = render(<AuthModal isOpen={false} onClose={vi.fn()} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders dialog when open', () => {
    render(<AuthModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByRole('dialog')).toBeDefined()
    expect(screen.getByText(/Brandbook BITRA/i)).toBeDefined()
  })

  it('calls onClose when close button clicked', () => {
    const onClose = vi.fn()
    render(<AuthModal isOpen={true} onClose={onClose} />)
    fireEvent.click(screen.getByLabelText('Cerrar'))
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('shows email and password fields in login mode', () => {
    render(<AuthModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByText(/Correo corporativo/i)).toBeDefined()
    expect(screen.getByText(/Contraseña/i)).toBeDefined()
  })

  it('switches to recovery mode', () => {
    render(<AuthModal isOpen={true} onClose={vi.fn()} />)
    fireEvent.click(screen.getByText(/Olvidé mi contraseña/i))
    expect(screen.getByText(/Recuperar|Enviar enlace/i)).toBeDefined()
  })
})
