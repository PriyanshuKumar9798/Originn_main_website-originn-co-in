import { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Heart, Building2 } from 'lucide-react'
import { fetchStartups, fetchFilters, type StartupItem, type FiltersResponse } from '../lib/api'


type Category = {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  bgColor: string
}

export const StartupCategoriesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [items, setItems] = useState<StartupItem[]>([])
  const [filters, setFilters] = useState<FiltersResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState<string | null>(null)
  const [filterStage, setFilterStage] = useState<string | null>(null)
  const [filterInstitute, setFilterInstitute] = useState<string | null>(null)
  const [filterProductType, setFilterProductType] = useState<string | null>(null)
  const [filterTargetMarket, setFilterTargetMarket] = useState<string | null>(null)

  // Dynamic categories for chips (no 'All Startups' chip)
  const chipCategories: Category[] = useMemo(() => {
    const apiValues = filters?.categories?.values || []
    return apiValues.map((c) => ({ id: c.value, name: c.label, icon: Building2, color: 'text-blue-600', bgColor: 'bg-blue-100' }))
  }, [filters])

  const currentCategory = chipCategories.find(cat => cat.id === selectedCategory) || { id: '', name: 'All Startups', icon: Building2, color: 'text-slate-600', bgColor: 'bg-slate-100' }

  // Load available filters once
  useEffect(() => {
    const load = async () => {
      try {
        const f = await fetchFilters()
        setFilters(f)
      } catch (e) {
        // ignore; UI still works
      }
    }
    load()
  }, [])

  // Fetch startups when filters change
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        setError(null)
        const res = await fetchStartups({
          limit: 12,
          sort_by: 'created_at',
          order: 'desc',
          category: filterCategory ?? null,
          stage: filterStage ?? null,
          institute: filterInstitute ?? null,
          product_type: filterProductType ?? null,
          target_market: filterTargetMarket ?? null,
          search: searchTerm || null,
        })
        setItems(res.data)
        setCurrentIndex(0)
      } catch (e: any) {
        setError(e?.message || 'Failed to load startups')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [filterCategory, filterStage, filterInstitute, filterProductType, filterTargetMarket, searchTerm])

  const currentStartups = items.map((it) => ({
    id: it.id,
    title: it.company_name,
    description: it.about_startup || '',
    category: it.category || '',
    bannerImage: null as string | null,
    institute: '',
  }))

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
    const available = (filters?.categories?.values || []).map((c) => c.value)
    if (available.includes(categoryId)) {
      setFilterCategory(categoryId)
    }
  }

  const clearChip = (type: 'search'|'category'|'stage'|'institute'|'product'|'market') => {
    if (type === 'search') setSearchTerm('')
    if (type === 'category') { setFilterCategory(null); setSelectedCategory('') }
    if (type === 'stage') setFilterStage(null)
    if (type === 'institute') setFilterInstitute(null)
    if (type === 'product') setFilterProductType(null)
    if (type === 'market') setFilterTargetMarket(null)
  }

  const renderSkeleton = (count = 4) => (
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

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mb-4">
          <input
            type="text"
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search startups…"
            aria-label="Search startups"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Filter by Category"
            value={filterCategory ?? ''}
            onChange={(e) => setFilterCategory(e.target.value || null)}
          >
            <option value="">Category</option>
            {filters?.categories?.values?.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>

          <select
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Filter by Stage"
            value={filterStage ?? ''}
            onChange={(e) => setFilterStage(e.target.value || null)}
          >
            <option value="">Stage</option>
            {filters?.stages?.values?.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>

          <select
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Filter by Institute"
            value={filterInstitute ?? ''}
            onChange={(e) => setFilterInstitute(e.target.value || null)}
          >
            <option value="">Institute</option>
            {filters?.institutes?.values?.map((i) => (
              <option key={i.value} value={i.value}>{i.label}</option>
            ))}
          </select>

          <select
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Filter by Product Type"
            value={filterProductType ?? ''}
            onChange={(e) => setFilterProductType(e.target.value || null)}
          >
            <option value="">Product Type</option>
            {filters?.product_types?.values?.map((p) => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </select>

          <select
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Filter by Target Market"
            value={filterTargetMarket ?? ''}
            onChange={(e) => setFilterTargetMarket(e.target.value || null)}
          >
            <option value="">Target Market</option>
            {filters?.target_markets?.values?.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>

        {/* Active filter chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {searchTerm && (
            <button onClick={() => clearChip('search')} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
              Search: {searchTerm} ×
            </button>
          )}
          {filterCategory && (
            <button onClick={() => clearChip('category')} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
              Category: {filterCategory} ×
            </button>
          )}
          {filterStage && (
            <button onClick={() => clearChip('stage')} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
              Stage: {filterStage} ×
            </button>
          )}
          {filterInstitute && (
            <button onClick={() => clearChip('institute')} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
              Institute: {filterInstitute} ×
            </button>
          )}
          {filterProductType && (
            <button onClick={() => clearChip('product')} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
              Product: {filterProductType} ×
            </button>
          )}
          {filterTargetMarket && (
            <button onClick={() => clearChip('market')} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
              Market: {filterTargetMarket} ×
            </button>
          )}
        </div>

        {/* Category Filter (chips) */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 lg:mb-12">
          {chipCategories.map((category) => (
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

        {/* Error/Loading/Empty */}
        {error && <div className="text-sm text-red-600 mb-2">{error}</div>}
        {loading && renderSkeleton(4)}
        {!loading && currentStartups.length === 0 && <div className="text-sm text-slate-600 mb-2">No startups found. Try different filters.</div>}

        {/* Cards Container */}
        {!loading && (
        <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {currentStartups.map((startup) => (
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
                  {startup.title} • {startup.institute}
                </h3>
                <p className="text-sm text-gray-600">
                  {startup.description.split('|')[0] || startup.description}
                </p>
              </div>
            </Link>
          ))}
        </div>)}

        {/* Dots indicator */}
        {!loading && currentStartups.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {currentStartups.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 ${index === currentIndex ? 'bg-blue-600 w-6' : 'bg-slate-300 hover:bg-slate-400'}`}
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
