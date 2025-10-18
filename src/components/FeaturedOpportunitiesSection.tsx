import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Users, Clock, Heart, ExternalLink, Rocket, TrendingUp, Star } from 'lucide-react'

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
      goal: "₹50L"
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
      goal: "₹75L"
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
      goal: "₹1Cr"
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
      goal: "₹40L"
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
      goal: "₹80L"
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
              className="flex-shrink-0 w-72 sm:w-80 lg:w-96 bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group relative"
            >
              {/* Black translucent overlay on hover - covers entire card */}
              <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-20"></div>
              {/* Banner Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={startup.bannerImage}
                  alt={startup.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/60 transition-colors duration-300" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                  <h3 className="text-base sm:text-lg font-bold mb-1 group-hover:text-blue-200 transition-colors duration-300">{startup.title}</h3>
                  <p className="text-xs sm:text-sm opacity-90 mb-2 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">{startup.subtitle}</p>
                  <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold group-hover:bg-blue-600 transition-colors duration-300">
                      Pre-order now
                    </span>
                    <span className="bg-slate-800/80 text-white px-2 py-1 rounded text-xs group-hover:bg-slate-700/90 transition-colors duration-300">
                      {startup.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-4 sm:p-6 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded group-hover:bg-slate-200 transition-colors duration-300">
                    {startup.price}
                  </span>
                  <button className="text-slate-400 hover:text-red-500 transition-colors cursor-pointer group-hover:scale-110 transform duration-300">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {startup.description}
                </h4>

                <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="truncate">{startup.backers} backers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{startup.daysLeft} days left</span>
                  </div>
                </div>

                {/* Hover details panel */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-30">
                  <div className="backdrop-blur-xl bg-gradient-to-br from-white/90 via-white/85 to-white/80 border border-white/70 shadow-lg rounded-xl p-4 m-4">
                    <h4 className="text-slate-900 font-bold text-sm mb-2">Why Choose This?</h4>
                    <p className="text-slate-700 text-xs mb-3 line-clamp-2">{startup.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-[10px] font-medium">
                        {startup.category}
                      </span>
                      <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-[10px] font-medium">
                        Early Bird
                      </span>
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-[10px] font-medium">
                        Limited Time
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{startup.backers} backers</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{startup.daysLeft} days left</span>
                      </div>
                    </div>
                    <Link 
                      to={`/startup/${startup.id}`}
                      className="w-full py-2 px-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow"
                    >
                      <span>View Details</span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs sm:text-sm">
                    <span className="text-slate-500">by </span>
                    <span className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors duration-300 truncate">{startup.company}</span>
                  </div>
                </div>
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
