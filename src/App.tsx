import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { LoginReminderModal } from './components/LoginReminderModal'
import { HomePage } from './pages/HomePage'
import { Discover } from './pages/Discover'

import { AboutUs } from './pages/AboutUs'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfService } from './pages/TermsOfService'
import { ContactUs } from './pages/ContactUs'
import { StartupDetail } from './pages/StartupDetail'
import { Preorder } from './pages/Preorder'



const App = () => {
  const [showLoginModal, setShowLoginModal] = useState(false)

  useEffect(() => {
    const openLogin = () => setShowLoginModal(true)
    window.addEventListener('originn:open-login', openLogin as EventListener)
    return () => window.removeEventListener('originn:open-login', openLogin as EventListener)
  }, [])

  const handleCloseLogin = () => {
    setShowLoginModal(false)
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/preorder/:id" element={<Preorder />} />
            <Route path="/startup/:id" element={<StartupDetail />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <LoginReminderModal open={showLoginModal} onClose={handleCloseLogin} />
      </div>
    </BrowserRouter>
  )
}

export default App