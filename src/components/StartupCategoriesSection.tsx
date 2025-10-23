import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Heart, Building2, Zap, Brain, Shield, Smartphone, GraduationCap } from 'lucide-react'

type Startup = {
  id: number
  title: string
  subtitle: string
  description: string
  category: string
  price: string
  backers: string
  daysLeft: number
  bannerImage: string | null
  company: string
  raised: string
  goal: string
  logo: string
  institute: string
}

type Category = {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  bgColor: string
  startups: Startup[]
}

export const StartupCategoriesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentIndex, setCurrentIndex] = useState(0)

  const categories: Category[] = [
    {
      id: 'all',
      name: 'All Startups',
      icon: Building2,
      color: 'text-slate-600',
      bgColor: 'bg-slate-100',
      startups: [
        {
          id: 1,
          title: "SmartHome Pro",
          subtitle: "AI-Powered Smart Home Ecosystem",
          description: "Pre-order the next-gen smart home controller | Early bird pricing available",
          category: "IoT",
          price: "₹12,999",
          backers: "1,241",
          daysLeft: 21,
          bannerImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=240&fit=crop&crop=center",
          company: "TechNest India",
          raised: "₹45.2L",
          goal: "₹50L",
          logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
          institute: "IIT Delhi"
        },
        {
          id: 2,
          title: "EcoCharge",
          subtitle: "Portable Solar Power Station",
          description: "Sustainable energy solution for outdoor adventures | CleanTech innovation",
          category: "CleanTech",
          price: "₹8,999",
          backers: "2,156",
          daysLeft: 4,
          bannerImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=240&fit=crop&crop=center",
          company: "GreenFuture Labs",
          raised: "₹78.5L",
          goal: "₹75L",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
          institute: "IISc Bangalore"
        },
        {
          id: 3,
          title: "HealthAI Monitor",
          subtitle: "Personal Health Assistant Device",
          description: "AI-powered health monitoring with real-time insights | Healthcare innovation",
          category: "HealthTech",
          price: "₹15,999",
          backers: "3,892",
          daysLeft: 28,
          bannerImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=240&fit=crop&crop=center",
          company: "MediAI Solutions",
          raised: "₹1.2Cr",
          goal: "₹1Cr",
          logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=100&h=100&fit=crop&crop=center",
          institute: "AIIMS Delhi"
        },
        {
          id: 4,
          title: "MediConnect",
          subtitle: "Telemedicine Platform",
          description: "AI-powered telemedicine connecting patients with specialists | Healthcare innovation",
          category: "HealthTech",
          price: "₹2,999",
          backers: "2,891",
          daysLeft: 18,
          bannerImage: null, // No image - will use fallback
          company: "MedTech Innovations",
          raised: "₹67.3L",
          goal: "₹80L",
          logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop&crop=center",
          institute: "AIIMS Delhi"
        },
        {
          id: 5,
          title: "EduVerse",
          subtitle: "VR Learning Platform",
          description: "Immersive virtual reality education for interactive learning | EdTech innovation",
          category: "EdTech",
          price: "₹6,999",
          backers: "1,876",
          daysLeft: 35,
          bannerImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=240&fit=crop&crop=center",
          company: "EduTech Solutions",
          raised: "₹43.2L",
          goal: "₹60L",
          logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop&crop=center",
          institute: "IIT Bombay"
        },
        {
          id: 6,
          title: "FinSecure",
          subtitle: "Blockchain Security Platform",
          description: "Blockchain-based financial security for banks | FinTech innovation",
          category: "FinTech",
          price: "₹9,999",
          backers: "1,987",
          daysLeft: 28,
          bannerImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&crop=center",
          company: "SecureFinance",
          raised: "₹56.7L",
          goal: "₹70L",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
          institute: "IIM Bangalore"
        },
        {
          id: 7,
          title: "FitTracker Pro",
          subtitle: "AI Fitness Device",
          description: "Advanced fitness tracking with AI coaching | Wearable technology",
          category: "Fitness",
          price: "₹7,999",
          backers: "3,124",
          daysLeft: 6,
          bannerImage: null, // No image - will use fallback
          company: "FitTech Labs",
          raised: "₹89.4L",
          goal: "₹1Cr",
          logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop&crop=center",
          institute: "IIT Delhi"
        }
      ]
    },
    {
      id: 'fintech',
      name: 'FinTech',
      icon: Shield,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      startups: [
        {
          id: 4,
          title: "PaySecure",
          subtitle: "Next-Gen Payment Terminal",
          description: "Secure, contactless payment solution for small businesses | FinTech innovation",
          category: "FinTech",
          price: "₹6,499",
          backers: "1,567",
          daysLeft: 10,
          bannerImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&crop=center",
          company: "PayTech Ventures",
          raised: "₹32.8L",
          goal: "₹40L",
          logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop&crop=center",
          institute: "IIM Ahmedabad"
        },
        {
          id: 5,
          title: "CryptoWallet Pro",
          subtitle: "Secure Digital Asset Management",
          description: "Advanced cryptocurrency wallet with multi-chain support | Blockchain innovation",
          category: "FinTech",
          price: "₹4,999",
          backers: "2,834",
          daysLeft: 18,
          bannerImage: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=240&fit=crop&crop=center",
          company: "BlockChain Solutions",
          raised: "₹67.3L",
          goal: "₹60L",
          logo: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=100&h=100&fit=crop&crop=center",
          institute: "IIT Bombay"
        }
      ]
    },
    {
      id: 'healthtech',
      name: 'HealthTech',
      icon: Brain,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100',
      startups: [
        {
          id: 6,
          title: "MediScan AI",
          subtitle: "AI-Powered Medical Diagnosis",
          description: "Revolutionary medical imaging with AI analysis | Healthcare breakthrough",
          category: "HealthTech",
          price: "₹25,999",
          backers: "1,923",
          daysLeft: 12,
          bannerImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=240&fit=crop&crop=center",
          company: "MediTech Innovations",
          raised: "₹1.8Cr",
          goal: "₹2Cr",
          logo: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=100&h=100&fit=crop&crop=center",
          institute: "AIIMS Delhi"
        },
        {
          id: 7,
          title: "VitalTracker",
          subtitle: "Wearable Health Monitor",
          description: "Advanced health tracking with real-time alerts | Personal healthcare",
          category: "HealthTech",
          price: "₹7,999",
          backers: "3,456",
          daysLeft: 25,
          bannerImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=240&fit=crop&crop=center",
          company: "HealthWear Tech",
          raised: "₹95.2L",
          goal: "₹1Cr",
          logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=100&h=100&fit=crop&crop=center",
          institute: "IISc Bangalore"
        }
      ]
    },
    {
      id: 'edtech',
      name: 'EdTech',
      icon: GraduationCap,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      startups: [
        {
          id: 8,
          title: "LearnBot AI",
          subtitle: "Personalized Learning Companion",
          description: "AI tutor for personalized education | EdTech revolution",
          category: "EdTech",
          price: "₹9,999",
          backers: "4,123",
          daysLeft: 15,
          bannerImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=240&fit=crop&crop=center",
          company: "EduTech Innovations",
          raised: "₹89.7L",
          goal: "₹80L",
          logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop&crop=center",
          institute: "BITS Pilani"
        },
        {
          id: 9,
          title: "VirtualClass Pro",
          subtitle: "Immersive Learning Platform",
          description: "VR-powered educational experiences | Next-gen learning",
          category: "EdTech",
          price: "₹19,999",
          backers: "2,789",
          daysLeft: 8,
          bannerImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=240&fit=crop&crop=center",
          company: "VR Education Labs",
          raised: "₹1.1Cr",
          goal: "₹1.2Cr",
          logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=100&h=100&fit=crop&crop=center",
          institute: "IIT Kanpur"
        }
      ]
    },
    {
      id: 'cleantech',
      name: 'CleanTech',
      icon: Zap,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      startups: [
        {
          id: 10,
          title: "SolarGrid Pro",
          subtitle: "Smart Solar Energy Management",
          description: "Intelligent solar panel optimization system | Sustainable energy",
          category: "CleanTech",
          price: "₹18,999",
          backers: "1,456",
          daysLeft: 22,
          bannerImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=240&fit=crop&crop=center",
          company: "SolarTech Solutions",
          raised: "₹76.8L",
          goal: "₹80L",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
          institute: "IIT Madras"
        }
      ]
    },
    {
      id: 'iot',
      name: 'IoT',
      icon: Smartphone,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      startups: [
        {
          id: 11,
          title: "SmartFarm IoT",
          subtitle: "Agricultural IoT Solution",
          description: "Connected farming with smart sensors | Precision agriculture",
          category: "IoT",
          price: "₹14,999",
          backers: "2,234",
          daysLeft: 16,
          bannerImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=240&fit=crop&crop=center",
          company: "AgriTech Solutions",
          raised: "₹58.4L",
          goal: "₹60L",
          logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
          institute: "IIT Kharagpur"
        }
      ]
    }
  ]

  const currentCategory = categories.find(cat => cat.id === selectedCategory) || categories[0]
  const currentStartups = currentCategory.startups

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : currentStartups.length - 1
    setCurrentIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex < currentStartups.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
  }

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setCurrentIndex(0)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto">
            Discover innovative startups across different sectors. Find your next investment opportunity in specialized categories.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 lg:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                selectedCategory === category.id
                  ? `${category.bgColor} ${category.color} shadow-md scale-105`
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-800'
              }`}
              aria-label={`Filter by ${category.name}`}
            >
              <category.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Current Category Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 lg:mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 ${currentCategory.bgColor} rounded-xl flex items-center justify-center`}>
              <currentCategory.icon className={`h-6 w-6 ${currentCategory.color}`} />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">{currentCategory.name}</h3>
              <p className="text-slate-600">{currentStartups.length} startup{currentStartups.length !== 1 ? 's' : ''} available</p>
            </div>
          </div>
          
          {/* Navigation arrows */}
          {currentStartups.length > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-slate-50 hover:scale-110 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md border border-slate-200"
                aria-label="Previous startups"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-slate-50 hover:scale-110 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md border border-slate-200"
                aria-label="Next startups"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600" />
              </button>
            </div>
          )}
        </div>

        {/* Cards Container */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {currentStartups.map((startup) => (
            <Link
              key={startup.id}
              to={`/startup/${startup.id}`}
              className="flex-shrink-0 w-72 sm:w-80 lg:w-96 group block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Top Section - Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                {/* Use actual image if available, otherwise fallback to abstract background */}
                {startup.bannerImage ? (
                  <img
                    src={startup.bannerImage}
                    alt={startup.title}
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
                  {startup.title} • {startup.institute}
                </h3>
                <p className="text-sm text-gray-600">
                  {startup.description.split('|')[0] || startup.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Dots indicator */}
        {currentStartups.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {currentStartups.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 ${
                  index === currentIndex ? 'bg-blue-600 w-6' : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to startup ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default StartupCategoriesSection
