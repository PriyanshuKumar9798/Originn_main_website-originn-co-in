import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Search, BriefcaseBusiness, LogIn, Menu, X } from 'lucide-react'
import { Button } from './ui/Button'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
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
            <Button onClick={handleOpenLogin} variant="primary" size="md" showArrow className="hidden md:inline-flex" aria-label="Sign in">
              <LogIn className="h-4 w-4" /> Sign In
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>

    {/* Mobile Menu Drawer - Fullscreen Left Slide */}
    <div className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeMobileMenu}
        aria-hidden="true"
      />
      
      {/* Fullscreen Left Drawer */}
      <div className={`fixed inset-y-0 left-0 w-full max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-600 text-white grid place-items-center font-black">Og</div>
              <span className="text-xl font-semibold tracking-tight">Originn</span>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            {/* Mobile Search */}
            <div className="mb-8">
              <label htmlFor="mobile-search" className="sr-only">Search startups</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" aria-hidden="true" />
                <input
                  id="mobile-search"
                  type="search"
                  placeholder="Search startups"
                  className="w-full rounded-full border border-slate-200 bg-slate-50 pl-10 pr-4 py-3 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="space-y-2 mb-8" aria-label="Mobile navigation">
              <Link
                to="/discover"
                onClick={closeMobileMenu}
                className="flex items-center px-4 py-4 text-lg font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
              >
                Discover
              </Link>
              <Link
                to="/preorder/1"
                onClick={closeMobileMenu}
                className="flex items-center px-4 py-4 text-lg font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
              >
                Pre Order
              </Link>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="flex items-center px-4 py-4 text-lg font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
              >
                About Us
              </Link>
            </nav>

            {/* Mobile Actions */}
            <div className="space-y-4">
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full justify-center"
                aria-label="For Startups"
              >
                <BriefcaseBusiness className="h-5 w-5 mr-2" /> For Startups
              </Button>
              <Button 
                onClick={() => {
                  handleOpenLogin()
                  closeMobileMenu()
                }} 
                variant="primary" 
                size="lg" 
                showArrow 
                className="w-full justify-center"
                aria-label="Sign in"
              >
                <LogIn className="h-5 w-5 mr-2" /> Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
