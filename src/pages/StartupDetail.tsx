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
  GraduationCap,
  Package
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
  location: string
  founded: string
  teamSize: string
  awards: string[]
  currentStage: string
  productType: string
  targetMarket: string
  founders: Array<{
    name: string
    title: string
    image: string
    bio: string
    linkedin: string
  }>
  socialLinks: {
    website?: string
    linkedin?: string
    twitter?: string
    facebook?: string
  }
}

export const StartupDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [startup, setStartup] = useState<StartupData | null>(null)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [activeTab, setActiveTab] = useState<'about' | 'behind' | 'team' | 'collaborate' | 'jobs'>('about')

  // Mock data matching the image
  useEffect(() => {
    const mockStartup: StartupData = {
      id: id || '1',
      title: "Recruit",
      subtitle: "UI/UX designers - how would you like to work within a successful SaaS based firm in downtown Toronto, building customized tools",
      description: "UI/UX designers - how would you like to work within a successful SaaS based firm in downtown Toronto, building customized tools",
      longDescription: "We identify ourselves as disruptors in the smart home technology space and our vision is to power the digital ecosystem for modern Indian households. Like attracts like, and Techinnovate actively looks to partner with established companies and startups that have either broken the glass ceiling in their industry or are set to. The Techinnovate Product Suite today comprises verticals, along with our flagship Smart Hub, including Voice Assistant, Smart Lighting, Security Systems, Energy Management, and Connected Appliances. Each product is designed for the Indian consumer in mind, addressing unique challenges while maintaining global quality standards.",
      category: "FinTech",
      price: "₹12,999",
      backers: "1,241",
      daysLeft: 21,
      bannerImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=400&fit=crop&crop=center",
      company: "Recruit",
      raised: "₹45.2L",
      goal: "₹50L",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
      institute: "IIT Delhi",
      learnMoreUrl: "https://recruit.com",
      isBookmarked: false,
      location: "California, United States",
      founded: "2023",
      teamSize: "12",
      awards: ["Best IoT Innovation 2024", "TechCrunch Startup of the Year"],
      currentStage: "Prototype Stage",
      productType: "Digital Service (FinTech)",
      targetMarket: "B2B & B2C",
      founders: [
        {
          name: "Rajesh Kumar",
          title: "Co-Founder & CEO",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
          bio: "10+ years in IoT and smart home technology. Previously led product development at a Fortune 500 tech company. IIT Bombay alumnus with a passion for making technology accessible to every Indian household.",
          linkedin: "https://linkedin.com/in/rajesh-kumar"
        },
        {
          name: "Priya Sharma",
          title: "Co-Founder & CTO",
          image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
          bio: "AI and machine learning expert with PhD from Stanford. Previously worked on voice recognition systems at a leading tech company. Dedicated to building AI that understands and serves Indian users.",
          linkedin: "https://linkedin.com/in/priya-sharma"
        }
      ],
      socialLinks: {
        website: "https://recruit.com",
        linkedin: "https://linkedin.com/company/recruit",
        twitter: "https://twitter.com/recruit",
        facebook: "https://facebook.com/recruit"
      }
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
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <section className="relative h-80 overflow-visible">
        <img
          src={startup.bannerImage}
          alt={startup.title}
          className="w-full h-full object-cover"
        />
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

        {/* Overlaying Profile Card - aligned with main container */}
        <div className="absolute inset-x-0 -bottom-30 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-5 sm:p-6 max-w-3xl relative">
            {/* Actions row (icon-only) in top-right */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
           
              <button onClick={handleBookmark} className="w-9 h-9 bg-white border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer rounded-full flex items-center justify-center shadow-sm">
                <Bookmark className="h-4 w-4 text-slate-600" />
              </button>
              <button onClick={handleShare} className="w-9 h-9 bg-white border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer rounded-full flex items-center justify-center shadow-sm">
                <Share2 className="h-4 w-4 text-slate-600" />
              </button>
              </div>
              <div className="flex items-start gap-4">
              {/* Profile Picture */}
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <Building2 className="h-4 w-4 text-slate-900" />
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <h1 className="text-2xl font-extrabold text-slate-900 mb-1 tracking-tight">{startup.title}</h1>
                <div className="flex items-center gap-2 text-slate-700 text-sm sm:text-[15px] mb-3">
                  <span className="underline underline-offset-4">{startup.location}</span>
                  <span className="text-slate-400">•</span>
                  <span className="font-medium">{startup.category}</span>
                  <span className="text-slate-400">•</span>
                  <span className="font-medium">{startup.institute}</span>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">{startup.subtitle}</p>

              {/* Social Links */}
                <div className="flex items-center gap-2.5">
                  <a href={startup.socialLinks.linkedin} className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer shadow-sm">
                    <Linkedin className="h-4 w-4 text-blue-600" />
                  </a>
                  <a href={startup.socialLinks.twitter} className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer shadow-sm">
                    <Twitter className="h-4 w-4 text-blue-600" />
                  </a>
                  <a href={startup.socialLinks.website} className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer shadow-sm">
                    <Globe className="h-4 w-4 text-slate-700" />
                  </a>
                  <a href={startup.socialLinks.facebook} className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer shadow-sm">
                    <Facebook className="h-4 w-4 text-blue-600" />
                  </a>
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
                      {startup.longDescription}
                    </p>
                  </div>

                  {/* Incubation & Background */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                        <GraduationCap className="h-4 w-4 text-slate-600" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">Incubation & Background</h2>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      Techinnovate was incubated at the Indian Institute of Technology (IIT) Bangalore's prestigious innovation center, where it received mentorship from industry veterans and access to cutting-edge research facilities. This foundation has been instrumental in our rapid development and validation process. The startup has also been recognized by the Government of India's Startup India initiative and has received seed funding from leading angel investors in the technology sector. Our team's expertise spans hardware engineering, software development, IoT protocols, and user experience design.
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
                        <span className="font-medium text-slate-900">Functional Prototype Ready for Validation</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        We have successfully developed a working prototype that demonstrates all core functionalities. The product integrates seamlessly with existing home infrastructure and supports voice commands in multiple Indian languages including Hindi, Tamil, and Bengali.
                    </p>
                  </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-slate-700">Multi-language voice control with 95% accuracy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-slate-700">Seamless integration with 50+ smart home devices</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-slate-700">AI-powered energy optimization saving up to 30% on electricity bills</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-slate-700">Built-in security features with facial recognition</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-slate-700">Offline functionality for critical operations</span>
                        </li>
                      </ul>
                    </div>

                    {/* Problem We Solve */}
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">Problem We Solve</h3>
                      <p className="text-slate-700 leading-relaxed">
                        Most smart home solutions in India are either too expensive, require complex installation, or lack support for regional languages. Our product bridges this gap by offering an affordable, easy-to-install solution that truly understands the Indian context and user needs.
                      </p>
                    </div>
                  </div>
                  
                  {/* Meet the Founders */}
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
                          <img
                            src={founder.image}
                            alt={founder.name}
                            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-slate-900 mb-1">{founder.name}</h3>
                            <p className="text-slate-600 text-sm mb-2">{founder.title}</p>
                            <a
                              href={founder.linkedin}
                              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium mb-3"
                            >
                              View LinkedIn
                              <Linkedin className="h-3 w-3" />
                            </a>
                            <p className="text-slate-700 text-sm leading-relaxed">{founder.bio}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                    </div>
                  )}

              {/* Other tabs content can be added here */}
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
                    {startup.currentStage}
                  </div>
                  
                  <p className="text-blue-100 text-sm leading-relaxed mb-6">
                    At Razorpay, we believe that technology should enhance human experience, not complicate it. We are a consumer technology startup dedicated to designing and building a new generation of smart payment solutions that are intuitive, beautiful, and focused on your well-being. Our flagship product line includes an intelligent payment gateway that personalizes your transactions, a seamless UPI integration to improve your digital experience, and a minimalist dashboard that helps you manage your finances without digital clutter. We are committed to sustainability, using eco-friendly practices and ensuring our services are energy-efficient. Razorpay is more than just digital payments; it's about creating a financial environment that helps you live a healthier, more mindful, and more connected life.
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 bg-blue-300 rounded-full" />
                        <span className="text-blue-200 text-sm font-medium">Product Type</span>
                    </div>
                      <div className="bg-blue-800 text-white px-3 py-1 rounded text-sm font-medium">
                        {startup.productType}
                  </div>
                </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 bg-blue-300 rounded-full" />
                        <span className="text-blue-200 text-sm font-medium">Target Market</span>
                  </div>
                      <div className="bg-blue-800 text-white px-3 py-1 rounded text-sm font-medium">
                        {startup.targetMarket}
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