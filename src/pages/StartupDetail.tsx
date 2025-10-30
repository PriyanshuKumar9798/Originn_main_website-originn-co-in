import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  Users, 
  Share2,
  CheckCircle, 
  Linkedin,
  Twitter,
  Facebook,
  Globe,
  Bookmark,
  Building2,
  TrendingUp,
  Package
} from 'lucide-react'
import { Footer } from '../components/Footer'
import { fetchStartupById } from '../lib/api'

interface StartupData {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  category: string
  bannerImage: string | null
  company: string
  institute: string
  currentStage: string
  productType: string
  targetMarket: string
  founders: Array<{
    name: string
    title: string
    image: string
    linkedin?: string
  }>
  socialLinks: {
    website?: string
    linkedin?: string
    twitter?: string
    facebook?: string
  }
  location?: string
}

export const StartupDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [startup, setStartup] = useState<StartupData | null>(null)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [activeTab, setActiveTab] = useState<'about' | 'behind' | 'team' | 'collaborate' | 'jobs'>('about')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    const load = async () => {
      try {
        setError(null)
        const res = await fetchStartupById(id || '')
        const d = res.data
        const mapped: StartupData = {
          id: String(d.id),
          title: d.company_name,
          subtitle: d.short_description || d.product_description || '',
          description: d.about_startup || '',
          longDescription: d.product_description || d.about_startup || '',
          category: d.category || '',
          bannerImage: d.cover_photo || null,
          company: d.company_name,
          institute: d.institute_name || '',
          currentStage: d.stage || '',
          productType: d.product_type || '',
          targetMarket: d.target_market || '',
          founders: (d.founders || []).map(f => ({
            name: f.full_name,
            title: f.designation || '',
            image: '',
            linkedin: '',
          })),
          socialLinks: {
            website: d.company_website,
            twitter: d.social_links?.twitter,
            linkedin: d.social_links?.linkedin,
          },
          location: '',
        }
        if (isMounted) setStartup(mapped)
      } catch (e: any) {
        if (isMounted) setError(e?.message || 'Failed to load startup')
      }
    }
    load()
    return () => { isMounted = false }
  }, [id])

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  const handleShare = () => {}

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      </div>
    )
  }

  if (!startup) {
    return (
      <div className="min-h-screen bg-white">
        {/* Banner shimmer */}
        <div className="relative h-72 sm:h-80">
          <div className="absolute inset-0 bg-slate-200 animate-pulse" />
          <div className="absolute top-4 left-4">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-slate-700 px-4 py-2 rounded-full border border-slate-200">
              <div className="h-4 w-4 bg-slate-200 rounded-full animate-pulse" />
              <div className="h-3 w-16 bg-slate-200 rounded animate-pulse" />
            </div>
          </div>
        </div>

        {/* Overlay card shimmer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12">
          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-5 sm:p-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-slate-200 rounded-full animate-pulse flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-6 w-2/3 bg-slate-200 rounded animate-pulse" />
                <div className="flex items-center gap-2">
                  <div className="h-3 w-24 bg-slate-200 rounded animate-pulse" />
                  <div className="h-3 w-3 bg-slate-200 rounded-full animate-pulse" />
                  <div className="h-3 w-28 bg-slate-200 rounded animate-pulse" />
                  <div className="h-3 w-3 bg-slate-200 rounded-full animate-pulse" />
                  <div className="h-3 w-24 bg-slate-200 rounded animate-pulse" />
                </div>
                <div className="h-4 w-full bg-slate-200 rounded animate-pulse" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-slate-200 rounded-full animate-pulse" />
                <div className="w-9 h-9 bg-slate-200 rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* Body shimmer */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            {/* Left column */}
            <div className="lg:col-span-2">
              <div className="h-9 w-64 bg-slate-200 rounded animate-pulse mb-4" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-slate-200 rounded animate-pulse" />
                <div className="h-4 w-11/12 bg-slate-200 rounded animate-pulse" />
                <div className="h-4 w-10/12 bg-slate-200 rounded animate-pulse" />
                <div className="h-4 w-8/12 bg-slate-200 rounded animate-pulse" />
              </div>

              <div className="h-7 w-48 bg-slate-200 rounded animate-pulse mt-8 mb-3" />
              <div className="grid grid-cols-2 gap-3">
                <div className="h-7 bg-slate-200 rounded-full animate-pulse" />
                <div className="h-7 bg-slate-200 rounded-full animate-pulse" />
                <div className="h-7 bg-slate-200 rounded-full animate-pulse" />
                <div className="h-7 bg-slate-200 rounded-full animate-pulse" />
              </div>

              <div className="h-7 w-56 bg-slate-200 rounded animate-pulse mt-10 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-slate-200 rounded-full animate-pulse" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-32 bg-slate-200 rounded animate-pulse" />
                    <div className="h-3 w-24 bg-slate-200 rounded animate-pulse" />
                    <div className="h-3 w-20 bg-slate-200 rounded animate-pulse" />
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-slate-200 rounded-full animate-pulse" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-40 bg-slate-200 rounded animate-pulse" />
                    <div className="h-3 w-28 bg-slate-200 rounded animate-pulse" />
                    <div className="h-3 w-24 bg-slate-200 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-3">
              <div className="h-44 bg-slate-200 rounded-2xl animate-pulse" />
              <div className="h-28 bg-slate-200 rounded-2xl animate-pulse" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <section className="relative h-80 overflow-visible">
        {startup.bannerImage ? (
          <img
            src={startup.bannerImage}
            alt={startup.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
            <div className="w-full h-full flex items-end justify-center space-x-4 pb-8">
              <div className="w-8 h-16 bg-blue-400 rounded-full relative" />
              <div className="w-10 h-12 bg-blue-500 rounded relative" />
              <div className="w-8 h-14 bg-blue-300 rounded relative" />
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Header Navigation */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-slate-700 hover:text-slate-900 transition-colors cursor-pointer px-4 py-2 rounded-full"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Link>
            </div>
          </div>
        </div>

        {/* Overlaying Profile Card */}
        <div className="absolute inset-x-0 -bottom-30 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-5 sm:p-6 max-w-3xl relative">
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <button onClick={handleBookmark} className="w-9 h-9 bg-white border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer rounded-full flex items-center justify-center shadow-sm">
                  <Bookmark className="h-4 w-4 text-slate-600" />
                </button>
                <button onClick={handleShare} className="w-9 h-9 bg-white border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer rounded-full flex items-center justify-center shadow-sm">
                  <Share2 className="h-4 w-4 text-slate-600" />
                </button>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <Building2 className="h-4 w-4 text-slate-900" />
                  </div>
                </div>

                <div className="flex-1">
                  <h1 className="text-2xl font-extrabold text-slate-900 mb-1 tracking-tight">{startup.title}</h1>
                  <div className="flex items-center gap-2 text-slate-700 text-sm sm:text-[15px] mb-3">
                    {startup.location && <span className="underline underline-offset-4">{startup.location}</span>}
                    {startup.location && <span className="text-slate-400">•</span>}
                    <span className="font-medium">{startup.category}</span>
                    {startup.institute && <span className="text-slate-400">•</span>}
                    <span className="font-medium">{startup.institute}</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">{startup.subtitle}</p>

                  <div className="flex items-center gap-2.5">
                    {startup.socialLinks.linkedin && (
                      <a href={startup.socialLinks.linkedin} className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer shadow-sm">
                        <Linkedin className="h-4 w-4 text-blue-600" />
                      </a>
                    )}
                    {startup.socialLinks.twitter && (
                      <a href={startup.socialLinks.twitter} className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer shadow-sm">
                        <Twitter className="h-4 w-4 text-blue-600" />
                      </a>
                    )}
                    {startup.socialLinks.website && (
                      <a href={startup.socialLinks.website} className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer shadow-sm">
                        <Globe className="h-4 w-4 text-slate-700" />
                      </a>
                    )}
                    {startup.socialLinks.facebook && (
                      <a href={startup.socialLinks.facebook} className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer shadow-sm">
                        <Facebook className="h-4 w-4 text-blue-600" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-36 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Navigation Tabs */}
              <div className="border-b border-slate-200 mb-8">
                <nav className="flex space-x-8">
                  {[
                    { id: 'about', label: 'About' },
                    { id: 'behind', label: 'Behind the Scenes' },
                    { id: 'team', label: 'Team' },
                    { id: 'collaborate', label: 'Collaborate' },
                    { id: 'jobs', label: 'Jobs' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors cursor-pointer ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              {activeTab === 'about' && (
                <div className="space-y-8">
                  {/* Company Overview */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                        <Building2 className="h-4 w-4 text-slate-600" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">Company Overview</h2>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {startup.description}
                    </p>
                  </div>

                  {/* About the Product */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                        <Package className="h-4 w-4 text-slate-600" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">About the Product</h2>
                    </div>

                    {/* Current Development Stage */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">Current Development Stage</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="font-medium text-slate-900">{startup.currentStage || 'N/A'}</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        {startup.longDescription}
                      </p>
                    </div>

                    {/* Key Facts */}
                    <div className="flex flex-wrap gap-2">
                      {startup.productType && <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">Product: {startup.productType}</span>}
                      {startup.targetMarket && <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">Market: {startup.targetMarket}</span>}
                      {startup.category && <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">Category: {startup.category}</span>}
                      {startup.institute && <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">Institute: {startup.institute}</span>}
                    </div>
                  </div>

                  {/* Founders */}
                  {startup.founders?.length > 0 && (
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                          <Users className="h-4 w-4 text-slate-600" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900">Meet the Founders</h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {startup.founders.map((founder, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                              <Users className="h-6 w-6 text-slate-500" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-slate-900 mb-1">{founder.name}</h3>
                              <p className="text-slate-600 text-sm mb-2">{founder.title}</p>
                              {founder.linkedin && (
                                <a href={founder.linkedin} className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium mb-3">
                                  View LinkedIn
                                  <Linkedin className="h-3 w-3" />
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab !== 'about' && (
                <div className="text-center py-12">
                  <p className="text-slate-500">Content for {activeTab} tab coming soon...</p>
                </div>
              )}
            </div>

            {/* Right Column - Current Stage Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-blue-900 text-white rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="font-bold text-white">Current Stage</h3>
                  </div>

                  <div className="bg-blue-700 text-blue-100 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    {startup.currentStage || 'N/A'}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 bg-blue-300 rounded-full" />
                        <span className="text-blue-200 text-sm font-medium">Product Type</span>
                      </div>
                      <div className="bg-blue-800 text-white px-3 py-1 rounded text-sm font-medium">
                        {startup.productType || 'N/A'}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 bg-blue-300 rounded-full" />
                        <span className="text-blue-200 text-sm font-medium">Target Market</span>
                      </div>
                      <div className="bg-blue-800 text-white px-3 py-1 rounded text-sm font-medium">
                        {startup.targetMarket || 'N/A'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}