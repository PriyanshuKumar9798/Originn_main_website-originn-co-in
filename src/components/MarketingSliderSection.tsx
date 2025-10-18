import { useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Rocket, TrendingUp, Users, Zap, Target, Award, Lightbulb } from 'lucide-react'
import { Player } from '@lottiefiles/react-lottie-player'

export const MarketingSliderSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const autoScrollRef = useRef<number | null>(null)

  const getButtonBgColor = (cardId: number) => {
    switch (cardId) {
      case 1: return 'bg-blue-600 hover:bg-blue-700'
      case 2: return 'bg-yellow-600 hover:bg-yellow-700'
      case 3: return 'bg-emerald-600 hover:bg-emerald-700'
      case 4: return 'bg-red-600 hover:bg-red-700'
      case 5: return 'bg-purple-600 hover:bg-purple-700'
      case 6: return 'bg-amber-600 hover:bg-amber-700'
      default: return 'bg-blue-600 hover:bg-blue-700'
    }
  }

  const marketingCards = [
    {
      id: 1,
      title: "Launch Your Innovation",
      subtitle: "Think Big! Build Big! Scale Big!",
      description: "Join India's premier startup ecosystem. Get funding, mentorship, and access to top-tier investors.",
      icon: Rocket,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      cardBg: "bg-gradient-to-br from-blue-50 to-indigo-100",
      borderColor: "border-blue-200",
      lottieUrl: "https://assets5.lottiefiles.com/packages/lf20_0yfsb3.json", // Rocket launch animation
      cta: "Start Your Journey",
      stats: "500+ Startups Launched"
    },
    {
      id: 2,
      title: "Power Your Growth",
      subtitle: "Where Bright Minds Fuel Innovation",
      description: "Accelerate your startup with our comprehensive platform. From idea to IPO, we've got you covered.",
      icon: Zap,
      iconColor: "text-yellow-600",
      iconBg: "bg-yellow-100",
      cardBg: "bg-gradient-to-br from-yellow-50 to-orange-100",
      borderColor: "border-yellow-200",
      lottieUrl: "https://assets5.lottiefiles.com/packages/lf20_2glqweqs.json", // Growth chart animation
      cta: "Accelerate Now",
      stats: "₹2.5Cr+ Raised"
    },
    {
      id: 3,
      title: "Connect & Collaborate",
      subtitle: "Build Your Dream Team",
      description: "Find co-founders, hire talent, and connect with industry experts. Your network is your net worth.",
      icon: Users,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-100",
      cardBg: "bg-gradient-to-br from-emerald-50 to-teal-100",
      borderColor: "border-emerald-200",
      lottieUrl: "https://assets5.lottiefiles.com/packages/lf20_0yfsb3.json", // Team collaboration animation
      cta: "Join Community",
      stats: "10K+ Entrepreneurs"
    },
    {
      id: 4,
      title: "Hit Your Targets",
      subtitle: "Data-Driven Success",
      description: "Track milestones, measure growth, and achieve your goals with our analytics dashboard.",
      icon: Target,
      iconColor: "text-red-600",
      iconBg: "bg-red-100",
      cardBg: "bg-gradient-to-br from-red-50 to-pink-100",
      borderColor: "border-red-200",
      lottieUrl: "https://assets5.lottiefiles.com/packages/lf20_2glqweqs.json", // Target/bullseye animation
      cta: "Track Progress",
      stats: "95% Success Rate"
    },
    {
      id: 5,
      title: "Win Recognition",
      subtitle: "Celebrate Your Achievements",
      description: "Get featured, win awards, and build your reputation in India's startup ecosystem.",
      icon: Award,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
      cardBg: "bg-gradient-to-br from-purple-50 to-violet-100",
      borderColor: "border-purple-200",
      lottieUrl: "https://assets5.lottiefiles.com/packages/lf20_0yfsb3.json", // Award/trophy animation
      cta: "Get Featured",
      stats: "50+ Awards Won"
    },
    {
      id: 6,
      title: "Innovate & Disrupt",
      subtitle: "Think Outside the Box",
      description: "Break boundaries, challenge norms, and create the next big thing that changes the world.",
      icon: Lightbulb,
      iconColor: "text-amber-600",
      iconBg: "bg-amber-100",
      cardBg: "bg-gradient-to-br from-amber-50 to-yellow-100",
      borderColor: "border-amber-200",
      lottieUrl: "https://assets5.lottiefiles.com/packages/lf20_2glqweqs.json", // Lightbulb/idea animation
      cta: "Innovate Now",
      stats: "100+ Patents Filed"
    }
  ]

  // Auto scroll effect - scroll by card width
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = window.setInterval(() => {
        if (scrollRef.current) {
          const cardWidth = 400 // Card width + gap for properly sized horizontal cards
          const currentScroll = scrollRef.current.scrollLeft
          const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth
          
          if (currentScroll >= maxScroll) {
            // Reset to beginning
            scrollRef.current.scrollTo({
              left: 0,
              behavior: 'smooth'
            })
          } else {
            // Scroll to next card
            scrollRef.current.scrollTo({
              left: currentScroll + cardWidth,
              behavior: 'smooth'
            })
          }
        }
      }, 4000) // Auto scroll every 4 seconds
    }

    startAutoScroll()

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
      }
    }
  }, [])

  const handlePrev = () => {
    if (scrollRef.current) {
      const cardWidth = 400
      const currentScroll = scrollRef.current.scrollLeft
      const newScroll = Math.max(0, currentScroll - cardWidth)
      
      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      })
    }
  }

  const handleNext = () => {
    if (scrollRef.current) {
      const cardWidth = 400
      const currentScroll = scrollRef.current.scrollLeft
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      const newScroll = Math.min(maxScroll, currentScroll + cardWidth)
      
      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Choose <span className="text-blue-600">Originn</span>?
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Join thousands of successful startups who've built their dreams with Originn. 
            Your innovation deserves the best platform.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full  bg-slate-100 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110"
            aria-label="Previous cards"
          >
             <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600 hover:text-slate-800 transition-colors duration-300" />
         
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-slate-100 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110"
            aria-label="Next cards"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600 hover:text-slate-800 transition-colors duration-300" />
          </button>

          {/* Cards Container - Show multiple cards horizontally */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {marketingCards.map((card) => (
              <div
                key={card.id}
                className={`flex-shrink-0 w-[350px] sm:w-[400px] lg:w-[450px] h-[180px] sm:h-[200px] ${card.cardBg} ${card.borderColor} border-2 rounded-2xl p-4 sm:p-5 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group hover:-translate-y-2 flex overflow-hidden`}
              >
                {/* Left Content */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  {/* Top Section */}
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className={`inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl ${card.iconBg} ${card.iconColor} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <card.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 truncate">
                          {card.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-slate-700 truncate">
                          {card.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 line-clamp-3">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-xs font-medium text-slate-500 min-w-0">
                      <TrendingUp className="h-3 w-3 flex-shrink-0" />
                      <span className="truncate">{card.stats}</span>
                    </div>
                    
                              <button className={`py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg font-semibold text-white text-xs sm:text-sm transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl flex-shrink-0 ${getButtonBgColor(card.id)}`}>
                                {card.cta}
                              </button>
                  </div>
                </div>

                          {/* Right Lottie Animation */}
                          <div className="flex-shrink-0 w-32 sm:w-36 h-full flex items-center justify-center">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                              <Player
                                autoplay
                                loop
                                src={card.lottieUrl}
                                style={{ width: '100%', height: '100%' }}
                              />
                            </div>
                          </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
