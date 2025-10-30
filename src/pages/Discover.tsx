import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, TrendingUp, Heart } from 'lucide-react'
import { Footer } from '../components/Footer'
import { LoginReminderModal } from '../components/LoginReminderModal'
import { fetchFilters, fetchStartups, type FiltersResponse, type StartupItem } from '../lib/api'

const LOGIN_DISMISS_KEY = 'originn.loginReminder.dismissed'

export const Discover = () => {
  // Filters state
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedStages, setSelectedStages] = useState<string[]>([])
  const [selectedInstitutes, setSelectedInstitutes] = useState<string[]>([])
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([])
  const [selectedTargetMarkets, setSelectedTargetMarkets] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'trending' | 'newest' | 'ending' | 'funded' | 'rating'>('trending')

  // UI state
  const [showModal, setShowModal] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Server data
  const [filters, setFilters] = useState<FiltersResponse | null>(null)
  const [items, setItems] = useState<StartupItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [cursor, setCursor] = useState<string | null>(null)
  const [hasNext, setHasNext] = useState(false)

  // Load filters once
  useEffect(() => {
    const load = async () => {
      try {
        const f = await fetchFilters()
        setFilters(f)
      } catch (e) {
        // ignore
      }
    }
    load()
  }, [])

  // Build select options from server
  const categoryOptions = useMemo(() => filters?.categories?.values ?? [], [filters])
  const stageOptions = useMemo(() => filters?.stages?.values ?? [], [filters])
  const instituteOptions = useMemo(() => filters?.institutes?.values ?? [], [filters])
  const productTypeOptions = useMemo(() => filters?.product_types?.values ?? [], [filters])
  const targetMarketOptions = useMemo(() => filters?.target_markets?.values ?? [], [filters])

  // Map sort to backend fields (typed unions)
  const backendSort: { sort_by: 'created_at' | 'company_name' | 'stage' | 'updated_at'; order: 'asc' | 'desc' } = useMemo(() => {
    if (sortBy === 'newest') return { sort_by: 'created_at' as const, order: 'desc' as const }
    if (sortBy === 'ending') return { sort_by: 'created_at' as const, order: 'asc' as const }
    return { sort_by: 'created_at' as const, order: 'desc' as const }
  }, [sortBy])

  // Fetch startups when filters/search change
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        setError(null)
        const res = await fetchStartups({
          limit: 18,
          cursor: null,
          include_total: false,
          search: searchTerm || null,
          category: selectedCategories[0] ?? null,
          stage: selectedStages[0] ?? null,
          institute: selectedInstitutes[0] ?? null,
          product_type: selectedProductTypes[0] ?? null,
          target_market: selectedTargetMarkets[0] ?? null,
          ...backendSort,
        })
        setItems(res.data)
        setCursor(res.pagination?.next_cursor ?? null)
        setHasNext(Boolean(res.pagination?.has_next))
      } catch (e: any) {
        setError(e?.message || 'Failed to load startups')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [searchTerm, selectedCategories, selectedStages, selectedInstitutes, selectedProductTypes, selectedTargetMarkets, backendSort])

  const handleLoadMore = async () => {
    if (!hasNext || !cursor) return
    try {
      setLoading(true)
      const res = await fetchStartups({
        limit: 18,
        cursor,
        include_total: false,
        search: searchTerm || null,
        category: selectedCategories[0] ?? null,
        stage: selectedStages[0] ?? null,
        institute: selectedInstitutes[0] ?? null,
        product_type: selectedProductTypes[0] ?? null,
        target_market: selectedTargetMarkets[0] ?? null,
        ...backendSort,
      })
      setItems((prev) => [...prev, ...res.data])
      setCursor(res.pagination?.next_cursor ?? null)
      setHasNext(Boolean(res.pagination?.has_next))
    } catch (e: any) {
      setError(e?.message || 'Failed to load more')
    } finally {
      setLoading(false)
    }
  }

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
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
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

  const filteredStartups = items.map((it) => ({
    id: it.id,
    name: it.company_name,
    category: it.category || '',
    stage: '',
    institute: '',
    productType: '',
    targetMarket: '',
    description: it.about_startup || '',
    image: null as string | null,
  }))

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
                ...(searchTerm ? [{ type: 'Search', value: searchTerm }] : []),
                ...(selectedCategories[0] ? [{ type: 'Category', value: selectedCategories[0] }] : []),
                ...(selectedStages[0] ? [{ type: 'Stage', value: selectedStages[0] }] : []),
                ...(selectedInstitutes[0] ? [{ type: 'Institute', value: selectedInstitutes[0] }] : []),
                ...(selectedProductTypes[0] ? [{ type: 'Product Type', value: selectedProductTypes[0] }] : []),
                ...(selectedTargetMarkets[0] ? [{ type: 'Target Market', value: selectedTargetMarkets[0] }] : []),
              ].map((chip, idx) => (
                <button
                  key={`${chip.type}-${chip.value}-${idx}`}
                  onClick={() => {
                    if (chip.type === 'Search') setSearchTerm('')
                    else if (chip.type === 'Category') setSelectedCategories([])
                    else if (chip.type === 'Stage') setSelectedStages([])
                    else if (chip.type === 'Institute') setSelectedInstitutes([])
                    else if (chip.type === 'Product Type') setSelectedProductTypes([])
                    else if (chip.type === 'Target Market') setSelectedTargetMarkets([])
                  }}
                  className="group flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-full text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 cursor-pointer"
                  aria-label={`Remove ${chip.type} ${chip.value}`}
                >
                  <span className="font-medium">{chip.value}</span>
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-slate-600 border border-slate-300 group-hover:bg-slate-50">×</span>
                </button>
              ))}
              {(searchTerm || selectedCategories[0] || selectedStages[0] || selectedInstitutes[0] || selectedProductTypes[0] || selectedTargetMarkets[0]) && (
                <button
                  onClick={() => { 
                    setSearchTerm('')
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

            {/* Search */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-semibold text-slate-700">Search</label>
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, about, product description"
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Category</label>
                <div className="relative">
                  <select
                    value={selectedCategories[0] ?? ''}
                    onChange={(e) => setSelectedCategories(e.target.value ? [e.target.value] : [])}
                    className="w-full appearance-none bg-white border border-slate-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    <option value="">All</option>
                    {categoryOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
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
                    value={selectedStages[0] ?? ''}
                    onChange={(e) => setSelectedStages(e.target.value ? [e.target.value] : [])}
                    className="w-full appearance-none bg-white border border-slate-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    <option value="">All</option>
                    {stageOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
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
                    value={selectedInstitutes[0] ?? ''}
                    onChange={(e) => setSelectedInstitutes(e.target.value ? [e.target.value] : [])}
                    className="w-full appearance-none bg-white border border-slate-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    <option value="">All</option>
                    {instituteOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
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
                    value={selectedProductTypes[0] ?? ''}
                    onChange={(e) => setSelectedProductTypes(e.target.value ? [e.target.value] : [])}
                    className="w-full appearance-none bg-white border border-slate-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    <option value="">All</option>
                    {productTypeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
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
                    value={selectedTargetMarkets[0] ?? ''}
                    onChange={(e) => setSelectedTargetMarkets(e.target.value ? [e.target.value] : [])}
                    className="w-full appearance-none bg-white border border-slate-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    <option value="">All</option>
                    {targetMarketOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
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
                  onChange={(e) => setSortBy(e.target.value as any)}
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

      {/* Results Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {items.length} Startups Found
            </h2>
            <p className="text-slate-600">
              {selectedCategories[0] && `Category: ${selectedCategories[0]}`}
              {selectedStages[0] && ` • Stage: ${selectedStages[0]}`}
              {selectedInstitutes[0] && ` • Institute: ${selectedInstitutes[0]}`}
              {selectedProductTypes[0] && ` • Product: ${selectedProductTypes[0]}`}
              {selectedTargetMarkets[0] && ` • Market: ${selectedTargetMarkets[0]}`}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <TrendingUp className="h-4 w-4" />
            <span>Live campaigns</span>
          </div>
        </div>

        {/* Startups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStartups.map((startup, index) => (
            <Link
              key={startup.id}
              to={`/startup/${startup.id}`}
              className={`group block bg-white rounded-2xl shadow-lg transition-all duration-300 cursor-pointer overflow-hidden will-change-transform will-change-opacity
                ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                hover:-translate-y-1 hover:shadow-2xl hover:ring-1 hover:ring-blue-200/70`}
              style={{ transitionDelay: mounted ? `${(index % 12) * 35}ms` : '0ms' }}
            >
              {/* Top Section - Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                {/* Use actual image if available, otherwise fallback to abstract background */}
                {startup.image ? (
                  <img
                    src={startup.image}
                    alt={startup.name}
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
                  {startup.name}
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
          {error && <div className="text-sm text-red-600 mb-3">{error}</div>}
          {loading && <div className="text-sm text-slate-600 mb-3">Loading…</div>}
          {hasNext && (
            <button onClick={handleLoadMore} className="px-8 py-3 bg-white border border-slate-300 rounded-lg font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer" disabled={loading}>
            Load More Startups
          </button>
          )}
        </div>
      </div>
      <Footer />
      <LoginReminderModal open={showModal} onClose={handleClose} />
    </div>
  )
}