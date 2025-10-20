import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, ChevronDown, TrendingUp, Star, Heart, Users, Clock, MapPin, ExternalLink, Cpu, Leaf, Activity, CreditCard, BookOpen, Sprout, Dumbbell, Utensils } from 'lucide-react'
import { Footer } from '../components/Footer'
import { LoginReminderModal } from '../components/LoginReminderModal'

const LOGIN_DISMISS_KEY = 'originn.loginReminder.dismissed'

export const Discover = () => {
  const [searchTerm, setSearchTerm] = useState('')
  // detachable chip filters
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedStages, setSelectedStages] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('trending')
  const [showModal, setShowModal] = useState(false)

  const startups = [
    {
      id: 1,
      name: "SmartHome Pro",
      category: "IoT",
      stage: "Pre-Launch",
      description: "Revolutionary AI-powered smart home ecosystem that learns your habits and automates your entire home. Features voice control, energy optimization, and seamless integration with 1000+ devices.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=240&fit=crop&crop=center",
      raised: "₹45.2L",
      goal: "₹50L",
      backers: 1241,
      daysLeft: 21,
      location: "Bangalore",
      trending: true,
      verified: true,
      tags: ["AI", "Smart Home", "IoT", "Automation"]
    },
    {
      id: 2,
      name: "EcoCharge",
      category: "CleanTech",
      stage: "Live",
      description: "Portable solar power station for outdoor adventures. Clean, sustainable energy solution with 500W capacity, multiple charging ports, and weather-resistant design.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=240&fit=crop&crop=center",
      raised: "₹78.5L",
      goal: "₹75L",
      backers: 2156,
      daysLeft: 4,
      location: "Mumbai",
      trending: false,
      verified: true,
      tags: ["Solar", "Portable", "Clean Energy", "Outdoor"]
    },
    {
      id: 3,
      name: "HealthAI Monitor",
      category: "HealthTech",
      stage: "Pre-Launch",
      description: "Personal health assistant device with real-time monitoring. Tracks vitals, provides AI insights, and connects with healthcare providers for proactive wellness management.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=240&fit=crop&crop=center",
      raised: "₹1.2Cr",
      goal: "₹1Cr",
      backers: 3892,
      daysLeft: 28,
      location: "Delhi",
      trending: true,
      verified: true,
      tags: ["Health", "AI", "Monitoring", "Wellness"]
    },
    {
      id: 4,
      name: "PaySecure",
      category: "FinTech",
      stage: "Live",
      description: "Next-generation payment terminal for small businesses. Secure, contactless payments with fraud protection, instant settlements, and comprehensive analytics dashboard.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&crop=center",
      raised: "₹32.8L",
      goal: "₹40L",
      backers: 1567,
      daysLeft: 10,
      location: "Chennai",
      trending: false,
      verified: false,
      tags: ["Payments", "Security", "SME", "FinTech"]
    },
    {
      id: 5,
      name: "LearnBot AI",
      category: "EdTech",
      stage: "Pre-Launch",
      description: "Personalized learning companion powered by advanced AI. Adapts to individual learning styles, provides real-time feedback, and creates custom study plans for optimal academic success.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=240&fit=crop&crop=center",
      raised: "₹89.7L",
      goal: "₹80L",
      backers: 4123,
      daysLeft: 15,
      location: "Hyderabad",
      trending: true,
      verified: true,
      tags: ["Education", "AI", "Personalized", "Learning"]
    },
    {
      id: 6,
      name: "AgriTech Solutions",
      category: "AgriTech",
      stage: "Live",
      description: "Smart farming solutions for modern agriculture. IoT sensors, drone monitoring, and AI-powered crop management to maximize yield and minimize resource usage.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=240&fit=crop&crop=center",
      raised: "₹65.3L",
      goal: "₹70L",
      backers: 2891,
      daysLeft: 12,
      location: "Pune",
      trending: false,
      verified: true,
      tags: ["Agriculture", "IoT", "Drones", "Sustainability"]
    },
    {
      id: 7,
      name: "VR Fitness Studio",
      category: "Fitness",
      stage: "Pre-Launch",
      description: "Immersive virtual reality fitness experiences. Transform your home into a personal gym with VR workouts, real-time coaching, and social fitness challenges.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=240&fit=crop&crop=center",
      raised: "₹42.1L",
      goal: "₹60L",
      backers: 1876,
      daysLeft: 35,
      location: "Gurgaon",
      trending: false,
      verified: false,
      tags: ["VR", "Fitness", "Gaming", "Health"]
    },
    {
      id: 8,
      name: "FoodTech Delivery",
      category: "FoodTech",
      stage: "Live",
      description: "Revolutionary food delivery platform with drone technology. Ultra-fast delivery, temperature-controlled transport, and zero-contact service for the new normal.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=240&fit=crop&crop=center",
      raised: "₹1.5Cr",
      goal: "₹1.2Cr",
      backers: 5234,
      daysLeft: 8,
      location: "Kolkata",
      trending: true,
      verified: true,
      tags: ["Delivery", "Drones", "Food", "Technology"]
    },
    {
      id: 9,
      name: "Green Energy Storage",
      category: "CleanTech",
      stage: "Pre-Launch",
      description: "Advanced battery storage solutions for renewable energy. High-capacity, long-lasting batteries for solar and wind power systems with smart grid integration.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=240&fit=crop&crop=center",
      raised: "₹95.6L",
      goal: "₹1Cr",
      backers: 3456,
      daysLeft: 42,
      location: "Ahmedabad",
      trending: false,
      verified: true,
      tags: ["Battery", "Renewable", "Storage", "Green Energy"]
    }
  ]

  const categories = ['All', 'IoT', 'CleanTech', 'HealthTech', 'FinTech', 'EdTech', 'AgriTech', 'Fitness', 'FoodTech']
  const stages = ['All', 'Pre-Launch', 'Live', 'Completed']

  // Login modal logic
  useEffect(() => {
    const dismissed = localStorage.getItem(LOGIN_DISMISS_KEY) === '1'
    const isLoggedIn = localStorage.getItem('originn.auth') === '1'
    if (!dismissed && !isLoggedIn) {
      const t = setTimeout(() => setShowModal(true), 600)
      return () => clearTimeout(t)
    }
  }, [])

  useEffect(() => {
    const open = () => setShowModal(true)
    window.addEventListener('originn:open-login', open as EventListener)
    return () => window.removeEventListener('originn:open-login', open as EventListener)
  }, [])

  const handleClose = () => {
    localStorage.setItem(LOGIN_DISMISS_KEY, '1')
    setShowModal(false)
  }

  const filteredStartups = startups.filter(startup => {
    const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         startup.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(startup.category)
    const matchesStage = selectedStages.length === 0 || selectedStages.includes(startup.stage)
    
    return matchesSearch && matchesCategory && matchesStage
  })

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Discover <span className="text-blue-600">Innovative</span> Startups
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore groundbreaking products from India's most promising startups.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col gap-5">
            {/* Detachable chips bar */}
            <div className="flex items-center gap-2 flex-wrap min-h-[40px] rounded-xl bg-white border border-slate-300 px-3 py-2">
              <span className="text-sm text-slate-500 mr-1">Filters:</span>
              {[...selectedCategories.map(v => ({ type: 'Category', value: v })), ...selectedStages.map(v => ({ type: 'Stage', value: v }))].map((chip, idx) => (
                <button
                  key={`${chip.type}-${chip.value}-${idx}`}
                  onClick={() => {
                    if (chip.type === 'Category') setSelectedCategories(prev => prev.filter(c => c !== chip.value))
                    else setSelectedStages(prev => prev.filter(s => s !== chip.value))
                  }}
                  className="group flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-full text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 cursor-pointer"
                  aria-label={`Remove ${chip.type} ${chip.value}`}
                >
                  <span className="font-medium">{chip.value}</span>
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-slate-600 border border-slate-300 group-hover:bg-slate-50">×</span>
                </button>
              ))}
              {(selectedCategories.length > 0 || selectedStages.length > 0) && (
                <button
                  onClick={() => { setSelectedCategories([]); setSelectedStages([]) }}
                  className="ml-auto text-sm text-blue-600 hover:underline cursor-pointer"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Chip Filters */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-700">Category</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    aria-label="Sort startups"
                    className="appearance-none bg-white border border-slate-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    <option value="trending">Trending</option>
                    <option value="newest">Newest</option>
                    <option value="ending">Ending Soon</option>
                    <option value="funded">Most Funded</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
                </div>
              </div>

              {/* Category chips */}
              <div className="flex gap-2 overflow-x-auto scrollbar-hide py-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategories(prev => prev.includes(category) ? prev.filter(c => c !== category) : category === 'All' ? [] : [...prev.filter(c => c !== 'All'), category])}
                    aria-pressed={selectedCategories.includes(category)}
                    className={`whitespace-nowrap px-3 py-2 rounded-full text-sm border transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ${selectedCategories.includes(category) ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Stage chips */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-sm font-semibold text-slate-700">Stage:</span>
                <div className="flex gap-2 overflow-x-auto scrollbar-hide py-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {stages.map((stage) => (
                    <button
                      key={stage}
                      onClick={() => setSelectedStages(prev => prev.includes(stage) ? prev.filter(s => s !== stage) : stage === 'All' ? [] : [...prev.filter(s => s !== 'All'), stage])}
                      aria-pressed={selectedStages.includes(stage)}
                      className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm border transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ${selectedStages.includes(stage) ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'}`}
                    >
                      {stage}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Categories */}
      <div className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Trending Categories</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              { name: 'IoT', icon: Cpu, bg: 'bg-blue-50', text: 'text-blue-700', ring: 'ring-blue-200' },
              { name: 'CleanTech', icon: Leaf, bg: 'bg-emerald-50', text: 'text-emerald-700', ring: 'ring-emerald-200' },
              { name: 'HealthTech', icon: Activity, bg: 'bg-rose-50', text: 'text-rose-700', ring: 'ring-rose-200' },
              { name: 'FinTech', icon: CreditCard, bg: 'bg-violet-50', text: 'text-violet-700', ring: 'ring-violet-200' },
              { name: 'EdTech', icon: BookOpen, bg: 'bg-amber-50', text: 'text-amber-700', ring: 'ring-amber-200' },
              { name: 'AgriTech', icon: Sprout, bg: 'bg-lime-50', text: 'text-lime-700', ring: 'ring-lime-200' },
              { name: 'Fitness', icon: Dumbbell, bg: 'bg-fuchsia-50', text: 'text-fuchsia-700', ring: 'ring-fuchsia-200' },
              { name: 'FoodTech', icon: Utensils, bg: 'bg-orange-50', text: 'text-orange-700', ring: 'ring-orange-200' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => setSelectedCategory(item.name as typeof selectedCategory)}
                aria-label={`Filter by ${item.name}`}
                className={`group flex items-center gap-2 rounded-xl px-3 py-3 sm:px-3.5 sm:py-3 border bg-white ${item.bg} ${item.ring} ring-1 hover:shadow-md transition-all cursor-pointer`}
              >
                <item.icon className={`${item.text} h-4 w-4`} />
                <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-700">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {filteredStartups.length} Startups Found
            </h2>
            <p className="text-slate-600">
              {selectedCategories.length > 0 && `in ${selectedCategories.join(', ')}`}
              {selectedStages.length > 0 && ` • ${selectedStages.join(', ')} stage${selectedStages.length > 1 ? 's' : ''}`}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <TrendingUp className="h-4 w-4" />
            <span>Live campaigns</span>
          </div>
        </div>

        {/* Startups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStartups.map((startup) => (
            <div key={startup.id} className="p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20 hover:from-blue-500/30 hover:via-purple-500/30 hover:to-blue-500/30 transition-colors">
              <div className="relative rounded-2xl bg-white/70 backdrop-blur-xl shadow-lg border border-white/60 overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:ring-1 hover:ring-blue-200 transition-all duration-300 cursor-pointer group">
                {/* Black translucent overlay on hover - covers entire card */}
                <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-20"></div>
                {/* Image Header */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={startup.image}
                    alt={startup.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                  
                  {/* Trending Badge */}
                  {startup.trending && (
                    <div className="absolute top-3 left-3 backdrop-blur-md bg-red-500/80 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-sm">
                      <TrendingUp className="h-3 w-3" />
                      Trending
                    </div>
                  )}

                  {/* Verified Badge */}
                  {startup.verified && (
                    <div className="absolute top-3 right-3 backdrop-blur-md bg-green-500/80 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-sm">
                      <Star className="h-3 w-3" />
                      Verified
                    </div>
                  )}

                  {/* Heart Button */}
                  <button className="absolute bottom-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer shadow-sm">
                    <Heart className="h-4 w-4 text-slate-600 hover:text-red-500" />
                  </button>
                </div>

                {/* Content (compact) */}
                <div className="p-4">
                  {/* Category & Stage */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-600/10 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold border border-blue-600/20">
                      {startup.category}
                    </span>
                    <span className="bg-slate-900/5 text-slate-700 px-2 py-1 rounded-full text-xs font-semibold border border-slate-900/10">
                      {startup.stage}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">
                    {startup.name}
                  </h3>
                  
                  {/* Minimal row (raised/goal) */}
                  <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
                    <span className="font-semibold text-green-600">{startup.raised}</span>
                    <span className="text-slate-500">Goal: {startup.goal}</span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-[11px] text-slate-600">
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>{startup.backers.toLocaleString()} backers</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{startup.daysLeft} days left</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{startup.location}</span>
                    </div>
                  </div>

                  {/* Glassmorphism details - stays within same card size */}
                  <div className="relative mt-3">
                    <div className="absolute bottom-0 left-0 right-0 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-30">
                      <div className="backdrop-blur-xl bg-gradient-to-br from-white/90 via-white/85 to-white/80 border border-white/70 shadow-lg rounded-xl p-4">
                        <h4 className="text-slate-900 font-bold text-sm mb-2">Key Features</h4>
                        <p className="text-slate-700 text-xs mb-3 line-clamp-2">{startup.description}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {startup.tags.map((tag, index) => (
                            <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-[10px] font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-xs text-slate-600 mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{startup.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span>{startup.backers.toLocaleString()}</span>
                          </div>
                        </div>
                        <Link 
                          to={`/preorder/${startup.id}`}
                          className="w-full py-2 px-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow"
                        >
                          <span>View Campaign</span>
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white border border-slate-300 rounded-lg font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer">
            Load More Startups
          </button>
        </div>
      </div>
      <Footer />
      <LoginReminderModal open={showModal} onClose={handleClose} />
    </div>
  )
}