import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  Share2, 
  Users, 
  Shield, 
  CheckCircle, 
  ExternalLink,
  Calendar,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Rocket,
  Bookmark,
  FileText,
  GraduationCap,
  Package,
  BarChart3,
  Building2,
  MessageCircle,
  Briefcase
} from 'lucide-react'
import { Footer } from '../components/Footer'

interface StartupData {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  category: string
  price: string
  backers: string
  daysLeft: number
  bannerImage: string
  company: string
  raised: string
  goal: string
  logo: string
  institute: string
  learnMoreUrl: string
  isBookmarked: boolean
  founder: {
    name: string
    title: string
    image: string
    bio: string
  }
  coFounder?: {
    name: string
    title: string
    image: string
    bio: string
  }
  milestones: Array<{
    title: string
    description: string
    status: 'completed' | 'current' | 'upcoming'
    date: string
  }>
  features: Array<{
    title: string
    description: string
    icon: string
  }>
  gallery: string[]
  videoUrl?: string
  socialLinks: {
    website?: string
    linkedin?: string
    twitter?: string
    instagram?: string
  }
  location: string
  founded: string
  teamSize: string
  awards: string[]
  currentStage: string
  productType: string
  targetMarket: string
  posts: Array<{
    id: string
    title: string
    content: string
    date: string
    author: string
    image?: string
  }>
  jobs: Array<{
    id: string
    title: string
    department: string
    location: string
    type: string
    description: string
    requirements: string[]
  }>
}

export const StartupDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [startup, setStartup] = useState<StartupData | null>(null)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [activeTab, setActiveTab] = useState<'about' | 'posts' | 'team' | 'jobs'>('about')

  // Mock data - in real app, this would come from API
  useEffect(() => {
    const mockStartup: StartupData = {
      id: id || '1',
      title: "Razorpay",
      subtitle: "FinTech Payment Solutions",
      description: "We identify ourselves as disruptors in the digital payments space and our vision is to power the financial ecosystem for other disruptors.",
      longDescription: "We identify ourselves as disruptors in the digital payments space and our vision is to power the financial ecosystem for other disruptors. Like attracts like and Razorpay actively looks to partner with established companies and startups that have either broken the glass ceiling in their industry or are set to. The Razorpay Product Suite today comprises verticals, along with Payment Gateway, like Payment Links, Payment Pages, Subscriptions, Smart Collect, Route, Razorpay Capital, RazorpayX, Payroll and Thirdwatch.",
      category: "FinTech",
      price: "₹12,999",
      backers: "1,241",
      daysLeft: 21,
      bannerImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center",
      company: "Razorpay",
      raised: "₹45.2L",
      goal: "₹50L",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center",
      institute: "IIT Roorkee",
      learnMoreUrl: "bit.ly/razorpay_learnmore",
      isBookmarked: false,
      founder: {
        name: "Sumit",
        title: "Founder",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        bio: "Former Google engineer with 8+ years in AI/ML. Led smart home initiatives at major tech companies."
      },
      coFounder: {
        name: "Rahul",
        title: "Co-founder",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        bio: "Former Google engineer with 8+ years in AI/ML. Led smart home initiatives at major tech companies."
      },
      milestones: [
        {
          title: "Prototype Development",
          description: "Core AI algorithms and hardware integration",
          status: 'completed',
          date: "2024-01-15"
        },
        {
          title: "Beta Testing",
          description: "Limited user testing with 100 early adopters",
          status: 'completed',
          date: "2024-03-20"
        },
        {
          title: "Manufacturing Setup",
          description: "Production line establishment and quality control",
          status: 'current',
          date: "2024-06-01"
        },
        {
          title: "Product Launch",
          description: "Official launch and shipping to backers",
          status: 'upcoming',
          date: "2024-08-15"
        }
      ],
      features: [
        {
          title: "AI Learning",
          description: "Adapts to your lifestyle and preferences automatically",
          icon: "brain"
        },
        {
          title: "Energy Efficient",
          description: "Reduces energy consumption by up to 40%",
          icon: "leaf"
        },
        {
          title: "Voice Control",
          description: "Natural language processing for seamless interaction",
          icon: "mic"
        },
        {
          title: "Security First",
          description: "End-to-end encryption and privacy protection",
          icon: "shield"
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop"
      ],
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      socialLinks: {
        website: "https://razorpay.com",
        linkedin: "https://linkedin.com/company/razorpay",
        twitter: "https://twitter.com/razorpay",
        instagram: "https://instagram.com/razorpay"
      },
      location: "Bangalore, India",
      founded: "2023",
      teamSize: "12",
      awards: ["Best IoT Innovation 2024", "TechCrunch Startup of the Year"],
      currentStage: "Series A/B/C Stage",
      productType: "Service",
      targetMarket: "D2C",
      posts: [
        {
          id: "1",
          title: "Latest Product Update",
          content: "We're excited to announce our new payment gateway features that will revolutionize digital payments.",
          date: "2024-01-15",
          author: "Sumit",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
        }
      ],
      jobs: [
        {
          id: "1",
          title: "Senior Software Engineer",
          department: "Engineering",
          location: "Bangalore",
          type: "Full-time",
          description: "We're looking for a talented software engineer to join our growing team.",
          requirements: ["5+ years experience", "React/Node.js", "Payment systems knowledge"]
        }
      ]
    }
    setStartup(mockStartup)
  }, [id])


  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  const handleShare = () => {
    // Share functionality can be implemented here
  }

  if (!startup) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading startup details...</p>
          <p className="text-sm text-slate-500 mt-2">ID: {id}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Cover Photo Section */}
      <section className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <img
          src={startup.bannerImage}
          alt={startup.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Header Navigation */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors cursor-pointer"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Home
              </Link>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={handleBookmark}
                  className={`p-2 rounded-lg transition-colors cursor-pointer ${
                    isBookmarked 
                      ? 'bg-blue-100/20 text-blue-200 hover:bg-blue-100/30' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={handleShare}
                  className="p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors cursor-pointer"
                >
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cover Photo Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="flex items-end gap-6">
              {/* Logo */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <img
                  src={startup.logo}
                  alt={startup.title}
                  className="w-20 h-20 sm:w-28 sm:h-28 rounded-xl object-cover"
                />
              </div>

              {/* Company Info */}
              <div className="flex-1 text-white">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{startup.title}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-500/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {startup.category}
                  </span>
                  <span className="bg-emerald-500/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {startup.institute}
                  </span>
                </div>
                <a
                  href={startup.learnMoreUrl}
                  className="inline-flex items-center gap-1 text-blue-200 hover:text-blue-100 font-medium cursor-pointer"
                >
                  Learn more <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Social Links */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleBookmark}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
                    isBookmarked 
                      ? 'bg-blue-500/80 text-white hover:bg-blue-500' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                </button>
                <div className="flex gap-2">
                  <a
                    href={startup.socialLinks.linkedin}
                    className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors cursor-pointer"
                  >
                    <Linkedin className="h-4 w-4 text-white" />
                  </a>
                  <a
                    href={startup.socialLinks.twitter}
                    className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors cursor-pointer"
                  >
                    <Twitter className="h-4 w-4 text-white" />
                  </a>
                  <a
                    href={startup.socialLinks.instagram}
                    className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors cursor-pointer"
                  >
                    <Instagram className="h-4 w-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'about', label: 'About' },
              { id: 'posts', label: 'Posts' },
              { id: 'team', label: 'Team' },
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
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* About Tab */}
              {activeTab === 'about' && (
                <div className="space-y-8">
                  {/* Company Overview */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">Company Overview</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {startup.longDescription}
                    </p>
                  </div>

                  {/* Institute */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-emerald-600" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">Institute</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {startup.longDescription}
                    </p>
                  </div>

                  {/* About Product */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Package className="h-5 w-5 text-purple-600" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">About Product</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Product description not available.
                    </p>
                  </div>
                </div>
              )}

              {/* Posts Tab */}
              {activeTab === 'posts' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Latest Updates</h2>
                  </div>
                  
                  {startup.posts.length > 0 ? (
                    <div className="space-y-4">
                      {startup.posts.map((post) => (
                        <div key={post.id} className="bg-white rounded-2xl p-6 border border-slate-200">
                          <div className="flex items-start gap-4">
                            {post.image && (
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                              />
                            )}
                            <div className="flex-1">
                              <h3 className="font-semibold text-slate-900 mb-2">{post.title}</h3>
                              <p className="text-slate-600 mb-3">{post.content}</p>
                              <div className="flex items-center gap-4 text-sm text-slate-500">
                                <span>By {post.author}</span>
                                <span>{post.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white rounded-2xl p-12 border border-slate-200 text-center">
                      <MessageCircle className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-500">No posts yet for this startup.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Team Tab */}
              {activeTab === 'team' && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Meet Our Team</h2>
                    <p className="text-slate-600">The minds behind {startup.title}'s innovation</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Founder */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
                      <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <img
                          src={startup.founder.image}
                          alt={startup.founder.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-1">{startup.founder.name}</h3>
                      <p className="text-slate-600 text-sm">{startup.founder.title}</p>
                    </div>

                    {/* Co-founder */}
                    {startup.coFounder && (
                      <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
                        <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <img
                            src={startup.coFounder.image}
                            alt={startup.coFounder.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-1">{startup.coFounder.name}</h3>
                        <p className="text-slate-600 text-sm">{startup.coFounder.title}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Jobs Tab */}
              {activeTab === 'jobs' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Join Our Team</h2>
                  </div>
                  
                  {startup.jobs.length > 0 ? (
                    <div className="space-y-4">
                      {startup.jobs.map((job) => (
                        <div key={job.id} className="bg-white rounded-2xl p-6 border border-slate-200">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-semibold text-slate-900 mb-1">{job.title}</h3>
                              <div className="flex items-center gap-4 text-sm text-slate-600">
                                <span>{job.department}</span>
                                <span>•</span>
                                <span>{job.location}</span>
                                <span>•</span>
                                <span>{job.type}</span>
                              </div>
                            </div>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                              Apply
                            </button>
                          </div>
                          <p className="text-slate-600 mb-4">{job.description}</p>
                          <div>
                            <h4 className="font-medium text-slate-900 mb-2">Requirements:</h4>
                            <ul className="space-y-1">
                              {job.requirements.map((req, index) => (
                                <li key={index} className="text-sm text-slate-600 flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white rounded-2xl p-12 border border-slate-200 text-center">
                      <Briefcase className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-500">No job openings listed yet.</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Current Stage */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900">Current Stage</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Rocket className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-slate-900">{startup.currentStage}</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{startup.longDescription}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-slate-600">Product Type: <span className="font-medium">{startup.productType}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                      <span className="text-slate-600">Target Market: <span className="font-medium">{startup.targetMarket}</span></span>
                    </div>
                  </div>
                </div>

                {/* Company Info */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-4">Company Information</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-slate-500" />
                      <span className="text-slate-600">{startup.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-slate-500" />
                      <span className="text-slate-600">Founded {startup.founded}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-slate-500" />
                      <span className="text-slate-600">{startup.teamSize} team members</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-slate-500" />
                      <span className="text-slate-600">{startup.institute}</span>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold text-slate-900">Trust & Safety</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-slate-600">Verified startup credentials</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-slate-600">Secure payment processing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-slate-600">30-day money back guarantee</span>
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
