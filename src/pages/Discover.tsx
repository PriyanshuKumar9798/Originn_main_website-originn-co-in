import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, TrendingUp, Heart } from 'lucide-react'
import { Footer } from '../components/Footer'
import { LoginReminderModal } from '../components/LoginReminderModal'

const LOGIN_DISMISS_KEY = 'originn.loginReminder.dismissed'

export const Discover = () => {
  // Comprehensive filter states
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedStages, setSelectedStages] = useState<string[]>([])
  const [selectedInstitutes, setSelectedInstitutes] = useState<string[]>([])
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([])
  const [selectedTargetMarkets, setSelectedTargetMarkets] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('trending')
  const [showModal, setShowModal] = useState(false)

  const startups = [
    {
      id: 1,
      name: "SmartHome Pro",
      category: "IoT",
      stage: "Pre-Launch",
      institute: "IIT Delhi",
      productType: "Hardware",
      targetMarket: "B2C",
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
      institute: "IISc Bangalore",
      productType: "Hardware",
      targetMarket: "B2C",
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
      institute: "AIIMS Delhi",
      productType: "Hardware",
      targetMarket: "B2C",
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
      institute: "IIM Ahmedabad",
      productType: "Software",
      targetMarket: "B2B",
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
      institute: "BITS Pilani",
      productType: "Software",
      targetMarket: "B2C",
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
      institute: "IIT Kharagpur",
      productType: "Hardware",
      targetMarket: "B2B",
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
      institute: "IIT Bombay",
      productType: "Software",
      targetMarket: "B2C",
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
      institute: "IIT Kanpur",
      productType: "Service",
      targetMarket: "B2C",
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
      institute: "IIT Madras",
      productType: "Hardware",
      targetMarket: "B2B",
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
    },
    {
      id: 10,
      name: "MediConnect",
      category: "HealthTech",
      stage: "Live",
      institute: "AIIMS Delhi",
      productType: "Software",
      targetMarket: "B2B",
      description: "Telemedicine platform connecting patients with specialists. AI-powered diagnosis assistance and remote monitoring capabilities.",
      image: null, // No image - will use fallback
      raised: "₹67.3L",
      goal: "₹80L",
      backers: 2891,
      daysLeft: 18,
      location: "Delhi",
      trending: true,
      verified: true,
      tags: ["Telemedicine", "AI", "Healthcare", "Remote"]
    },
    {
      id: 11,
      name: "EduVerse",
      category: "EdTech",
      stage: "Pre-Launch",
      institute: "IIT Bombay",
      productType: "Software",
      targetMarket: "B2C",
      description: "Virtual reality learning platform for immersive education. Interactive 3D environments for science, history, and geography lessons.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=240&fit=crop&crop=center",
      raised: "₹43.2L",
      goal: "₹60L",
      backers: 1876,
      daysLeft: 35,
      location: "Mumbai",
      trending: false,
      verified: false,
      tags: ["VR", "Education", "3D", "Interactive"]
    },
    {
      id: 12,
      name: "AgriSense",
      category: "AgriTech",
      stage: "Live",
      institute: "IIT Kharagpur",
      productType: "Hardware",
      targetMarket: "B2B",
      description: "Smart farming sensors for precision agriculture. IoT-based soil monitoring, weather prediction, and crop optimization.",
      image: null, // No image - will use fallback
      raised: "₹78.9L",
      goal: "₹90L",
      backers: 2341,
      daysLeft: 12,
      location: "Kolkata",
      trending: true,
      verified: true,
      tags: ["IoT", "Agriculture", "Sensors", "Precision"]
    },
    {
      id: 13,
      name: "FinSecure",
      category: "FinTech",
      stage: "Pre-Launch",
      institute: "IIM Bangalore",
      productType: "Software",
      targetMarket: "B2B",
      description: "Blockchain-based financial security platform. Fraud detection, secure transactions, and compliance automation for banks.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&crop=center",
      raised: "₹56.7L",
      goal: "₹70L",
      backers: 1987,
      daysLeft: 28,
      location: "Bangalore",
      trending: false,
      verified: true,
      tags: ["Blockchain", "Security", "Banking", "Compliance"]
    },
    {
      id: 14,
      name: "FitTracker Pro",
      category: "Fitness",
      stage: "Live",
      institute: "IIT Delhi",
      productType: "Hardware",
      targetMarket: "B2C",
      description: "Advanced fitness tracking device with AI coaching. Real-time health monitoring, workout optimization, and personalized training plans.",
      image: null, // No image - will use fallback
      raised: "₹89.4L",
      goal: "₹1Cr",
      backers: 3124,
      daysLeft: 6,
      location: "Delhi",
      trending: true,
      verified: true,
      tags: ["Fitness", "AI", "Wearable", "Health"]
    }
  ]

  const categories = ['All', 'IoT', 'CleanTech', 'HealthTech', 'FinTech', 'EdTech', 'AgriTech', 'Fitness', 'FoodTech']
  const stages = ['All', 'Pre-Launch', 'Live', 'Completed']
  const institutes = ['All', 'IIT Delhi', 'IISc Bangalore', 'AIIMS Delhi', 'IIM Ahmedabad', 'BITS Pilani', 'IIT Kharagpur', 'IIT Bombay', 'IIT Kanpur', 'IIT Madras']
  const productTypes = ['All', 'Hardware', 'Software', 'Service']
  const targetMarkets = ['All', 'B2C', 'B2B', 'B2B2C']

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
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(startup.category)
    const matchesStage = selectedStages.length === 0 || selectedStages.includes(startup.stage)
    const matchesInstitute = selectedInstitutes.length === 0 || selectedInstitutes.includes(startup.institute)
    const matchesProductType = selectedProductTypes.length === 0 || selectedProductTypes.includes(startup.productType)
    const matchesTargetMarket = selectedTargetMarkets.length === 0 || selectedTargetMarkets.includes(startup.targetMarket)
    
    return matchesCategory && matchesStage && matchesInstitute && matchesProductType && matchesTargetMarket
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
              {[
                ...selectedCategories.map(v => ({ type: 'Category', value: v })),
                ...selectedStages.map(v => ({ type: 'Stage', value: v })),
                ...selectedInstitutes.map(v => ({ type: 'Institute', value: v })),
                ...selectedProductTypes.map(v => ({ type: 'Product Type', value: v })),
                ...selectedTargetMarkets.map(v => ({ type: 'Target Market', value: v }))
              ].map((chip, idx) => (
                <button
                  key={`${chip.type}-${chip.value}-${idx}`}
                  onClick={() => {
                    if (chip.type === 'Category') setSelectedCategories(prev => prev.filter(c => c !== chip.value))
                    else if (chip.type === 'Stage') setSelectedStages(prev => prev.filter(s => s !== chip.value))
                    else if (chip.type === 'Institute') setSelectedInstitutes(prev => prev.filter(i => i !== chip.value))
                    else if (chip.type === 'Product Type') setSelectedProductTypes(prev => prev.filter(p => p !== chip.value))
                    else if (chip.type === 'Target Market') setSelectedTargetMarkets(prev => prev.filter(t => t !== chip.value))
                  }}
                  className="group flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-full text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 cursor-pointer"
                  aria-label={`Remove ${chip.type} ${chip.value}`}
                >
                  <span className="font-medium">{chip.value}</span>
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-slate-600 border border-slate-300 group-hover:bg-slate-50">×</span>
                </button>
              ))}
              {(selectedCategories.length > 0 || selectedStages.length > 0 || selectedInstitutes.length > 0 || selectedProductTypes.length > 0 || selectedTargetMarkets.length > 0) && (
                <button
                  onClick={() => { 
                    setSelectedCategories([]); 
                    setSelectedStages([]); 
                    setSelectedInstitutes([]); 
                    setSelectedProductTypes([]); 
                    setSelectedTargetMarkets([]) 
                  }}
                  className="ml-auto text-sm text-blue-600 hover:underline cursor-pointer"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Comprehensive Filter Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Category Filter */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Category</label>
                <div className="relative">
                  <select
                    value={selectedCategories.length > 0 ? selectedCategories[0] : 'All'}
                    onChange={(e) => {
                      const value = e.target.value
                      if (value === 'All') {
                        setSelectedCategories([])
                      } else {
                        setSelectedCategories([value])
                      }
                    }}
                    className="w-full appearance-none bg-white border border-slate-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
                </div>
              </div>

              {/* Stage Filter */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Stage</label>
                <div className="relative">
                  <select
                    value={selectedStages.length > 0 ? selectedStages[0] : 'All'}
                    onChange={(e) => {
                      const value = e.target.value
                      if (value === 'All') {
                        setSelectedStages([])
                      } else {
                        setSelectedStages([value])
                      }
                    }}
                    className="w-full appearance-none bg-white border border-slate-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    {stages.map((stage) => (
                      <option key={stage} value={stage}>{stage}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
                </div>
              </div>

              {/* Institute Filter */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Institute</label>
                <div className="relative">
                  <select
                    value={selectedInstitutes.length > 0 ? selectedInstitutes[0] : 'All'}
                    onChange={(e) => {
                      const value = e.target.value
                      if (value === 'All') {
                        setSelectedInstitutes([])
                      } else {
                        setSelectedInstitutes([value])
                      }
                    }}
                    className="w-full appearance-none bg-white border border-slate-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    {institutes.map((institute) => (
                      <option key={institute} value={institute}>{institute}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
                </div>
              </div>

              {/* Product Type Filter */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Product Type</label>
                <div className="relative">
                  <select
                    value={selectedProductTypes.length > 0 ? selectedProductTypes[0] : 'All'}
                    onChange={(e) => {
                      const value = e.target.value
                      if (value === 'All') {
                        setSelectedProductTypes([])
                      } else {
                        setSelectedProductTypes([value])
                      }
                    }}
                    className="w-full appearance-none bg-white border border-slate-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    {productTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
                </div>
              </div>

              {/* Target Market Filter */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Target Market</label>
                <div className="relative">
                  <select
                    value={selectedTargetMarkets.length > 0 ? selectedTargetMarkets[0] : 'All'}
                    onChange={(e) => {
                      const value = e.target.value
                      if (value === 'All') {
                        setSelectedTargetMarkets([])
                      } else {
                        setSelectedTargetMarkets([value])
                      }
                    }}
                    className="w-full appearance-none bg-white border border-slate-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    {targetMarkets.map((market) => (
                      <option key={market} value={market}>{market}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Sort Options */}
              <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-700">Sort by</span>
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
          </div>
        </div>
      </div>

      {/* Trending Categories */}
      {/* <div className="bg-gradient-to-b from-white to-slate-50">
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
      </div> */}

      {/* Results Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {filteredStartups.length} Startups Found
            </h2>
            <p className="text-slate-600">
              {selectedCategories.length > 0 && `Category: ${selectedCategories.join(', ')}`}
              {selectedStages.length > 0 && ` • Stage: ${selectedStages.join(', ')}`}
              {selectedInstitutes.length > 0 && ` • Institute: ${selectedInstitutes.join(', ')}`}
              {selectedProductTypes.length > 0 && ` • Product: ${selectedProductTypes.join(', ')}`}
              {selectedTargetMarkets.length > 0 && ` • Market: ${selectedTargetMarkets.join(', ')}`}
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
            <Link
              key={startup.id}
              to={`/startup/${startup.id}`}
              className="group block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Top Section - Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                {/* Use actual image if available, otherwise fallback to abstract background */}
                {startup.image ? (
                  <img
                    src={startup.image}
                    alt={startup.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
                    {/* Abstract 3D Elements Background - Off-white with blue theme */}
                    <div className="w-full h-full flex items-end justify-center space-x-4 pb-8">
                      {/* Blue Cylinder with Bird */}
                      <div className="w-8 h-16 bg-blue-400 rounded-full relative">
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full"></div>
                    </div>
                      {/* Blue Block with Character */}
                      <div className="w-10 h-12 bg-blue-500 rounded relative">
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-300 rounded-full"></div>
                    </div>
                      {/* Light Blue Block with Figure */}
                      <div className="w-8 h-14 bg-blue-300 rounded relative">
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-blue-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bookmark Icon */}
                <button className="absolute top-3 left-3 w-8 h-8 bg-white rounded flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>

                {/* Category Tag */}
                <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {startup.category}
                </div>

                {/* Description Overlay (on hover) */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm leading-relaxed">
                    {startup.description}
                  </p>
                </div>
              </div>

              {/* Bottom Section - Text Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {startup.name} • {startup.institute}
                </h3>
                <p className="text-sm text-gray-600">
                  {startup.description.split('|')[0] || startup.description}
                </p>
            </div>
            </Link>
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