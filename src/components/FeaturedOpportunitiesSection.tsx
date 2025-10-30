import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Heart, Rocket, TrendingUp, Star } from 'lucide-react'
import { fetchStartups, fetchFilters, type StartupItem, type FiltersResponse } from '../lib/api'

export const FeaturedOpportunitiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const autoScrollRef = useRef<number | null>(null)
  const [apiItems, setApiItems] = useState<StartupItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState<FiltersResponse | null>(null)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<string | ''>('')

  //

  // Load available filters (category list)
  useEffect(() => {
    const loadFilters = async () => {
      try {
        const f = await fetchFilters()
        setFilters(f)
      } catch (e) {
        // swallow; UI will still work without dropdown options
      }
    }
    loadFilters()
  }, [])

  // Load featured startups from API
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        const res = await fetchStartups({ limit: 12, sort_by: 'created_at', order: 'desc', search: search || null, category: category || null })
        setApiItems(res.data)
      } catch (e: any) {
        setError(e?.message || 'Failed to load featured startups')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [search, category])

  // Auto scroll effect
  useEffect(() => {
        const startAutoScroll = () => {
      autoScrollRef.current = window.setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const total = (apiItems.length || 1)
          const nextIndex = (prevIndex + 1) % total
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
  }, [apiItems.length])

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
          const nextIndex = (prevIndex + 1) % (apiItems.length || 1)
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
    const total = apiItems.length || 1
    const newIndex = currentIndex > 0 ? currentIndex - 1 : total - 1
    scrollToIndex(newIndex)
  }

  const handleNext = () => {
    const total = apiItems.length || 1
    const newIndex = currentIndex < total - 1 ? currentIndex + 1 : 0
    scrollToIndex(newIndex)
  }

  const renderSkeleton = (count = 3) => (
    <div className="flex gap-4 sm:gap-6 overflow-x-hidden pb-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex-shrink-0 w-72 sm:w-80 lg:w-96 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-48 bg-slate-200 animate-pulse" />
          <div className="p-4 space-y-2">
            <div className="h-4 bg-slate-200 rounded w-3/4 animate-pulse" />
            <div className="h-3 bg-slate-200 rounded w-full animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  )

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
          {/* Search + Category */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search startups…"
              className="w-full sm:w-64 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search startups"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full sm:w-56 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Filter by Category"
            >
              <option value="">All categories</option>
              {filters?.categories?.values?.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
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

        {/* Error/Loading */}
        {error && <div className="text-sm text-red-600 mb-2">{error}</div>}
        {loading && renderSkeleton(4)}

        {/* Cards Container */}
        {!loading && (
        <div 
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {apiItems.map((it) => {
            const startup = {
              id: it.id,
              title: it.company_name,
              description: it.about_startup || '',
              category: it.category || '',
              bannerImage: null as string | null,
              institute: '',
            }
            return (
            <Link
              key={startup.id}
              to={`/startup/${startup.id}`}
              className="flex-shrink-0 w-72 sm:w-80 lg:w-96 group block bg-white rounded-2xl shadow-lg transition-all duration-300 cursor-pointer overflow-hidden will-change-transform will-change-opacity hover:-translate-y-1 hover:shadow-2xl hover:ring-1 hover:ring-blue-200/70"
            >
              {/* Top Section - Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                {/* Use actual image if available, otherwise fallback to abstract background */}
                {startup.bannerImage ? (
                  <img
                    src={startup.bannerImage}
                    alt={startup.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
                    {/* Abstract 3D Elements Background - Off-white with blue theme */}
                    <div className="w-full h-full flex items-end justify-center space-x-4 pb-8">
                      {/* Blue Cylinder with Bird */}
                      <div className="w-8 h-16 bg-blue-400 rounded-full relative transform transition-transform duration-500 group-hover:translate-y-[-2px]">
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full"></div>
                      </div>
                      {/* Blue Block with Character */}
                      <div className="w-10 h-12 bg-blue-500 rounded relative transform transition-transform duration-500 group-hover:-translate-y-1">
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-300 rounded-full"></div>
                      </div>
                      {/* Light Blue Block with Figure */}
                      <div className="w-8 h-14 bg-blue-300 rounded relative transform transition-transform duration-500 group-hover:-translate-y-0.5">
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
                  {startup.title} {startup.institute ? `• ${startup.institute}` : ''}
                </h3>
                <p className="text-sm text-gray-600">
                  {startup.description ? (startup.description.split('|')[0]) : 'Discover innovative products from top startups.'}
                </p>
              </div>
            </Link>)
          })}
        </div>)}

        {/* Dots indicator */}
        {!loading && (
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {apiItems.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 ${
                index === currentIndex ? 'bg-blue-600 w-6' : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to startup ${index + 1}`}
            />
          ))}
        </div>)}
      </div>
    </section>
  )
}
