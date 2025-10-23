import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Search, BriefcaseBusiness, LogIn } from 'lucide-react'
import { Button } from './ui/Button'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
    }`

  const handleOpenLogin = () => {
    window.dispatchEvent(new CustomEvent('originn:open-login'))
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        isScrolled
          ? 'bg-white/60 supports-[backdrop-filter]:bg-white/40 backdrop-blur-xl border-b border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
          : 'bg-white/30 supports-[backdrop-filter]:bg-white/20 backdrop-blur-lg border-b border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
      }`}
      role="banner"
      aria-label="Primary navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" aria-label="Originn home">
            <div className="h-8 w-8 rounded-full bg-blue-600 text-white grid place-items-center font-black">Og</div>
            <span className="text-xl font-semibold tracking-tight">Originn</span>
          </Link>

          {/* Search */}
          <div className="hidden md:flex ml-4 flex-1">
            <label htmlFor="global-search" className="sr-only">Search startups</label>
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" aria-hidden="true" />
              <input
                id="global-search"
                type="search"
                placeholder="Search startups"
                className="w-full rounded-full border border-slate-200/70 bg-white/70 pl-10 pr-4 py-2 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 ml-4" aria-label="Primary">
            <NavLink to="/discover" className={navLinkClass}>Discover</NavLink>
            <NavLink to="/preorder/1" className={navLinkClass}>Pre Order</NavLink>
            <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
          </nav>

          {/* Actions */}
          <div className="ml-auto flex items-center gap-2">
            <Button variant="secondary" size="sm" className="hidden md:inline-flex" aria-label="For Startups">
              <BriefcaseBusiness className="h-4 w-4" /> For Startups
            </Button>
            <Button onClick={handleOpenLogin} variant="primary" size="md" showArrow aria-label="Sign in">
              <LogIn className="h-4 w-4" /> Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
