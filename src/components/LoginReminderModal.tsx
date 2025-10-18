import { useEffect, useRef } from 'react'
import { X, Mail, Linkedin } from 'lucide-react'
import { Player } from '@lottiefiles/react-lottie-player'

export type LoginReminderModalProps = {
  open: boolean
  onClose: () => void
}

export const LoginReminderModal = ({ open, onClose }: LoginReminderModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

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
          <p className="mt-2 text-slate-600">Sign in to save campaigns, track orders, and unlock community perks.</p>

          <div className="mt-6 grid gap-3">
            <button className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200 active:scale-[0.99] transition cursor-pointer">
              <img alt="Google" src="https://www.google.com/favicon.ico" className="h-5 w-5" />
              <span className="font-medium">Continue with Google</span>
            </button>
            <button className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200 active:scale-[0.99] transition cursor-pointer">
              <Linkedin className="h-5 w-5 text-blue-700" />
              <span className="font-medium">Continue with LinkedIn</span>
            </button>
            <button className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200 active:scale-[0.99] transition cursor-pointer">
              <Mail className="h-5 w-5 text-blue-600" />
              <span className="font-medium">Continue with Email</span>
            </button>
          </div>

          <div className="mt-5 flex items-center justify-between text-sm">
            <p className="text-slate-600">Don't have an account? <button className="text-blue-600 hover:underline font-medium cursor-pointer">Sign up</button></p>
          </div>

          <p className="mt-8 text-xs text-slate-500">
            By signing in, you accept the <a className="underline" href="#">Terms of Service</a> and acknowledge our <a className="underline" href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
