import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { Player } from '@lottiefiles/react-lottie-player'
import { Button } from './ui/Button'
import { authApi } from '../services/auth'
import { saveSession } from '../services/httpClient'

export type LoginReminderModalProps = {
  open: boolean
  onClose: () => void
}

export const LoginReminderModal = ({ open, onClose }: LoginReminderModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null)
  const [mode, setMode] = useState<'login' | 'register' | 'reset'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const handleToggleMode = (next: 'login' | 'register' | 'reset') => {
    setMode(next)
    setError(null)
    setSuccess(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (mode === 'register') {
      if (!fullName.trim()) return setError('Full name is required')
      if (password !== confirmPassword) return setError('Passwords do not match')
    }
    if (mode === 'reset') {
      if (!email) return setError('Email is required')
      if (!password) return setError('New password is required')
    }
    setIsSubmitting(true)
    try {
      if (mode === 'login') {
        const res = await authApi.login({ email, password })
        saveSession({ token: res.access_token, user: res.user })
        window.dispatchEvent(new CustomEvent('originn:signin', { detail: { email } }))
        onClose()
      } else if (mode === 'register') {
        await authApi.register({ email, password, confirm_password: confirmPassword, full_name: fullName })
        const res = await authApi.login({ email, password })
        saveSession({ token: res.access_token, user: res.user })
        window.dispatchEvent(new CustomEvent('originn:signin', { detail: { email } }))
        onClose()
      } else if (mode === 'reset') {
        await authApi.resetPassword({ email, new_password: password })
        setSuccess('Password reset successful. You can now log in.')
        setPassword('')
        setConfirmPassword('')
        setMode('login')
      }
    } catch (err: any) {
      setError(err?.message || 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div role="dialog" aria-modal="true" aria-label="Welcome to Originn" className="fixed inset-0 z-[60] grid place-items-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/50 supports-[backdrop-filter]:bg-slate-900/30 backdrop-blur-sm" onClick={onClose} />

      {/* Dialog */}
      <div
        ref={dialogRef}
        className="relative grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-3xl border border-white/40 bg-white/30 shadow-[0_20px_60px_rgba(2,6,23,0.25)] supports-[backdrop-filter]:bg-white/20 backdrop-blur-2xl md:grid-cols-2">
        {/* Left: Solid brand panel with illustration */}
        <div className="hidden md:block bg-blue-600 p-6">
          <div className="h-full w-full rounded-2xl bg-blue-600 p-6 text-white">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-white/20 grid place-items-center">
                <div className="h-8 w-8 rounded-full white text-bg-blue-600 grid place-items-center font-black">Og</div>
              </div>
              <p className="font-semibold">Originn</p>
            </div>
            <div className="mt-6 flex items-center justify-center">
              <div className="w-96 h-96">
                <Player 
                  autoplay 
                  loop 
                  src="https://assets4.lottiefiles.com/packages/lf20_zrqthn6o.json" // Welcome/login animation
                  style={{ width: '100%', height: '100%' }} 
                />
              </div>
            </div>
            <div className="mt-6 max-w-sm">
              <h3 className="text-3xl font-bold leading-tight">Back India's next big startups</h3>
              <p className="mt-2 text-blue-50">Protected payments. Transparent milestones. Zero risk pre‑orders.</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative bg-white/80 supports-[backdrop-filter]:bg-white/70 p-8">
          <button
            className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/90 hover:bg-white cursor-pointer"
            aria-label="Close"
            onClick={onClose}
          >
            <X className="h-5 w-5 text-slate-700" />
          </button>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Welcome to Originn</h2>
          <p className="mt-2 text-slate-600">{mode === 'login' ? 'Sign in to save campaigns, track orders, and unlock community perks.' : mode === 'register' ? 'Create your account to start backing startups.' : 'Enter your email and new password.'}</p>

          <div className="mt-6 inline-flex rounded-full bg-slate-100 p-1 text-sm">
            <button
              onClick={() => handleToggleMode('login')}
              className={`px-4 py-1.5 rounded-full ${mode === 'login' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}
              aria-pressed={mode === 'login'}
            >Login</button>
            <button
              onClick={() => handleToggleMode('register')}
              className={`px-4 py-1.5 rounded-full ${mode === 'register' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}
              aria-pressed={mode === 'register'}
            >Sign up</button>
            <button
              onClick={() => handleToggleMode('reset')}
              className={`px-4 py-1.5 rounded-full ${mode === 'reset' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}
              aria-pressed={mode === 'reset'}
            >Reset</button>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4" aria-label={mode === 'login' ? 'Login form' : mode === 'register' ? 'Sign up form' : 'Reset password form'}>
            {error && <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>}
            {success && <div className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">{success}</div>}
            {mode === 'register' && (
              <div>
                <label htmlFor="full_name" className="block text-sm font-medium text-slate-700">Full name</label>
                <input
                  id="full_name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Jane Doe"
                  required
                />
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">{mode === 'reset' ? 'New password' : 'Password'}</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="••••••••"
                required
              />
            </div>
            {mode === 'register' && (
              <div>
                <label htmlFor="confirm_password" className="block text-sm font-medium text-slate-700">Confirm password</label>
                <input
                  id="confirm_password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="••••••••"
                  required
                />
              </div>
            )}

            <Button type="submit" disabled={isSubmitting} variant="primary" size="md" className="w-full justify-center">
              {isSubmitting 
                ? (mode === 'login' ? 'Signing in...' : mode === 'register' ? 'Creating account...' : 'Resetting password...') 
                : (mode === 'login' ? 'Sign in' : mode === 'register' ? 'Create account' : 'Reset password')}
            </Button>
          </form>

          <div className="mt-5 flex items-center justify-between text-sm">
            {mode === 'login' && (
              <>
                <p className="text-slate-600">Don't have an account? <button onClick={() => handleToggleMode('register')} className="text-blue-600 hover:underline font-medium cursor-pointer">Sign up</button></p>
                <button onClick={() => handleToggleMode('reset')} className="text-slate-500 hover:text-slate-700">Forgot password?</button>
              </>
            )}
            {mode === 'register' && (
              <p className="text-slate-600">Already have an account? <button onClick={() => handleToggleMode('login')} className="text-blue-600 hover:underline font-medium cursor-pointer">Login</button></p>
            )}
            {mode === 'reset' && (
              <p className="text-slate-600">Remember it now? <button onClick={() => handleToggleMode('login')} className="text-blue-600 hover:underline font-medium cursor-pointer">Back to login</button></p>
            )}
          </div>

          <p className="mt-8 text-xs text-slate-500">
            By signing in, you accept the <a className="underline" href="#">Terms of Service</a> and acknowledge our <a className="underline" href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
