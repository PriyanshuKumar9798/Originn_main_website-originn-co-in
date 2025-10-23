import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Heart, Rocket, TrendingUp, Star } from 'lucide-react'

export const FeaturedOpportunitiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const autoScrollRef = useRef<number | null>(null)

  const startups = [
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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

  // Auto scroll effect
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = window.setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % startups.length
          if (scrollRef.current) {
            const cardWidth = 320 // Card width + gap
            scrollRef.current.scrollTo({
              left: nextIndex * cardWidth,
              behavior: 'smooth'
            })
          }
          return nextIndex
        })
      }, 4000) // Auto scroll every 4 seconds
    }

    startAutoScroll()

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
      }
    }
  }, [startups.length])

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = 320 // Card width + gap
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      })
    }
    setCurrentIndex(index)
    
    // Reset auto scroll timer when manually navigating
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current)
    }
    
    // Restart auto scroll after manual navigation
    setTimeout(() => {
      autoScrollRef.current = window.setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % startups.length
          if (scrollRef.current) {
            const cardWidth = 320
            scrollRef.current.scrollTo({
              left: nextIndex * cardWidth,
              behavior: 'smooth'
            })
          }
          return nextIndex
        })
      }, 4000)
    }, 2000) // Wait 2 seconds before restarting auto scroll
  }

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : startups.length - 1
    scrollToIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex < startups.length - 1 ? currentIndex + 1 : 0
    scrollToIndex(newIndex)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with professional icons */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 lg:mb-12 gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-2">Featured Startups</h2>
              <p className="text-slate-600 text-base sm:text-lg max-w-2xl">
                Discover innovative products from India's most promising startups. Pre-order with confidence.
              </p>
            </div>
            {/* Professional Icons */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600" />
              </div>
            </div>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex items-center gap-2 self-end lg:self-auto">
            <button
              onClick={handlePrev}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 hover:bg-slate-200 hover:scale-110 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
              aria-label="Previous startups"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600 hover:text-slate-800 transition-colors duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 hover:bg-slate-200 hover:scale-110 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
              aria-label="Next startups"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600 hover:text-slate-800 transition-colors duration-300" />
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div 
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {startups.map((startup) => (
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
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {startups.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 ${
                index === currentIndex ? 'bg-blue-600 w-6' : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to startup ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
