import { useState, useEffect } from 'react'
import { Mail, Bell, Sparkles, Rocket, Zap, Star } from 'lucide-react'
import { Footer } from '../components/Footer'

export const Preorder = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)

  // Rotate through different coming soon messages
  const messages = [
    "Something amazing is brewing...",
    "Innovation in progress...",
    "The future is almost here...",
    "Revolutionary ideas taking shape..."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => (prev + 1) % messages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [messages.length])

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

    

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-5rem)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating Icons */}
          <div className="relative mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl animate-bounce">
              <Rocket className="h-12 w-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-ping">
              <Sparkles className="h-4 w-4 text-white m-1" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-ping delay-300">
              <Zap className="h-4 w-4 text-white m-1" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            Coming Soon
          </h1>

          {/* Animated Message */}
          <div className="h-16 flex items-center justify-center mb-8">
            <p 
              key={animationKey}
              className="text-xl sm:text-2xl text-slate-700 font-medium animate-fade-in"
            >
              {messages[animationKey]}
            </p>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            We're crafting something extraordinary that will revolutionize the way you experience innovation. 
            Stay tuned for the launch of our groundbreaking platform.
          </p>

          {/* Email Subscription */}
          <div className="max-w-md mx-auto mb-12">
            <form onSubmit={handleNotifyMe} className="relative">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
                >
                  <Bell className="h-4 w-4" />
                  Notify Me
                </button>
              </div>
            </form>

            {/* Success Message */}
            {isSubscribed && (
              <div className="mt-4 p-3 bg-green-100 border border-green-200 rounded-xl text-green-700 animate-fade-in">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  <span className="font-medium">You'll be the first to know!</span>
                </div>
              </div>
            )}
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 hover:bg-white/80 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Innovation</h3>
              <p className="text-sm text-slate-600">Cutting-edge technology that pushes boundaries</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 hover:bg-white/80 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Speed</h3>
              <p className="text-sm text-slate-600">Lightning-fast performance and efficiency</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 hover:bg-white/80 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Magic</h3>
              <p className="text-sm text-slate-600">Seamless experience that feels like magic</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 text-slate-500">
            <span className="text-sm">Follow our journey:</span>
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/80 transition-all duration-300">
                <span className="text-sm font-bold">T</span>
              </button>
              <button className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/80 transition-all duration-300">
                <span className="text-sm font-bold">L</span>
              </button>
              <button className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/80 transition-all duration-300">
                <span className="text-sm font-bold">I</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
