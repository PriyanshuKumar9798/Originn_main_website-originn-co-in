import { useRef, useEffect } from 'react'
import { Star, Zap, ExternalLink } from 'lucide-react'

export const TopFoundersSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const autoScrollRef = useRef<number | null>(null)

  const founders = [
    {
      id: 1,
      name: "Vedansh Dubey",
      title: "HR @Wipro",
      description: "MBA @XIMB | 5+ Years | HR Expert",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      available: true,
      bgColor: "from-blue-50 to-blue-100",
      pattern: "bg-blue-200/20"
    },
    {
      id: 2,
      name: "Rutwik Borkar",
      title: "Flipkart | Bain",
      description: "IIT Madras | XLRI | Strategy Expert",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      available: true,
      bgColor: "from-purple-50 to-purple-100",
      pattern: "bg-purple-200/20"
    },
    {
      id: 3,
      name: "Yash Patel",
      title: "Strategy @Parag",
      description: "300k+ Views | Growth Expert",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      available: true,
      bgColor: "from-emerald-50 to-emerald-100",
      pattern: "bg-emerald-200/20"
    },
    {
      id: 4,
      name: "Shiri Agarwal",
      title: "Product @Telstra",
      description: "MDI Gurgaon | Product Expert",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      available: true,
      bgColor: "from-rose-50 to-rose-100",
      pattern: "bg-rose-200/20"
    },
    {
      id: 5,
      name: "Arjun Sharma",
      title: "CEO @TechNest",
      description: "IIT Delhi | 3 Exits | Serial Founder",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      available: true,
      bgColor: "from-amber-50 to-amber-100",
      pattern: "bg-amber-200/20"
    },
    {
      id: 6,
      name: "Priya Patel",
      title: "Co-founder @EcoCharge",
      description: "Forbes 30U30 | CleanTech | 25+ Patents",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      available: true,
      bgColor: "from-teal-50 to-teal-100",
      pattern: "bg-teal-200/20"
    },
    {
      id: 7,
      name: "Rahul Kumar",
      title: "Founder @HealthAI",
      description: "IIT Bombay | 2 Unicorns | HealthTech",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      available: true,
      bgColor: "from-indigo-50 to-indigo-100",
      pattern: "bg-indigo-200/20"
    },
    {
      id: 8,
      name: "Sneha Agarwal",
      title: "CEO @PaySecure",
      description: "IIM Ahmedabad | ₹500Cr+ | FinTech",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      available: true,
      bgColor: "from-pink-50 to-pink-100",
      pattern: "bg-pink-200/20"
    }
  ]

  // Auto scroll effect
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = window.setInterval(() => {
        if (scrollRef.current) {
          const cardWidth = 320 // Card width + gap
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
      }, 5000) // Auto scroll every 5 seconds
    }

    startAutoScroll()

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
      }
    }
  }, [])

   
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 lg:mb-12 gap-4">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
              Top Founders
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl">
              In search of excellence? Explore the highest-rated founders as recognized by the startup community.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">
            <span className="text-sm font-medium">View all</span>
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>

        {/* Founders Cards Container */}
        <div className="relative">
       
          
          {/* Cards Container */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {founders.map((founder) => (
              <div
                key={founder.id}
                className="flex-shrink-0 w-36 sm:w-40 lg:w-44 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              >
                {/* Colored Header Section with Pattern */}
                <div className={`relative bg-gradient-to-br ${founder.bgColor} h-24 p-3`}>
                  {/* Subtle Pattern Overlay */}
                  <div className={`absolute inset-0 ${founder.pattern} opacity-30`} 
                       style={{
                         backgroundImage: `radial-gradient(circle at 20% 20%, currentColor 1px, transparent 1px),
                                         radial-gradient(circle at 80% 80%, currentColor 1px, transparent 1px),
                                         radial-gradient(circle at 40% 60%, currentColor 1px, transparent 1px)`,
                         backgroundSize: '20px 20px, 15px 15px, 25px 25px'
                       }}>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-2 right-2 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                    <Star className="h-3 w-3 text-amber-600" />
                  </div>
                  
                  {/* Available Tag */}
                  {founder.available && (
                    <div className="inline-flex items-center gap-1 bg-purple-600 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                      <Zap className="h-2 w-2" />
                      Available
                    </div>
                  )}

                  {/* Centered Profile Picture - Larger */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                </div>

                {/* White Body Section */}
                <div className="pt-10 pb-4 px-3">
                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-xs font-bold text-slate-900">{founder.rating}</span>
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-sm font-bold text-slate-900 text-center mb-1 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                    {founder.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs text-slate-600 text-center leading-relaxed mb-3 line-clamp-2">
                    {founder.description}
                  </p>
                  
                  {/* View Profile Button */}
                  <button className="w-full py-1.5 px-3 rounded-lg border border-slate-300 bg-white text-slate-700 font-medium text-xs hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 cursor-pointer group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-700">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
