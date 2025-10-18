import { Users, Target, Award, TrendingUp, Globe, Heart, Shield, Zap } from 'lucide-react'
import { Footer } from '../components/Footer'

export const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Building the Future of
              <span className="text-blue-600"> Startup Investment</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Originn is India's premier startup investment platform, connecting innovative entrepreneurs 
              with visionary investors to create the next generation of successful businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
                Join Our Mission
              </button>
              <button className="px-8 py-4 border border-slate-300 text-slate-700 rounded-full font-semibold hover:bg-slate-50 transition-colors cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6">
                To democratize startup investment by creating a transparent, secure, and accessible platform 
                that connects innovative entrepreneurs with forward-thinking investors across India and beyond.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Empowering Entrepreneurs</h3>
                    <p className="text-slate-600">Providing startups with the tools and resources they need to succeed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Enabling Smart Investments</h3>
                    <p className="text-slate-600">Helping investors discover and support the next big thing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Building Global Impact</h3>
                    <p className="text-slate-600">Creating opportunities that transcend borders and boundaries</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-lg text-slate-700">
                  To become the world's most trusted platform for startup investment, 
                  fostering innovation and economic growth across emerging markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-lg text-slate-600">Transforming the startup ecosystem, one investment at a time</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">₹500Cr+</div>
              <div className="text-slate-600">Total Funding Raised</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2,500+</div>
              <div className="text-slate-600">Startups Funded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15,000+</div>
              <div className="text-slate-600">Active Investors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-slate-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Trust & Transparency</h3>
              <p className="text-slate-600">
                We believe in complete transparency in all our dealings, ensuring every stakeholder 
                has access to accurate, real-time information.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Innovation First</h3>
              <p className="text-slate-600">
                We constantly push the boundaries of what's possible, leveraging cutting-edge 
                technology to create better experiences for our users.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Community Driven</h3>
              <p className="text-slate-600">
                Our platform thrives on the strength of our community, where every member 
                contributes to the collective success of the ecosystem.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Excellence</h3>
              <p className="text-slate-600">
                We strive for excellence in everything we do, from our platform features 
                to our customer support and user experience.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Global Impact</h3>
              <p className="text-slate-600">
                We're committed to creating positive change not just in India, but across 
                the global startup ecosystem.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Passion</h3>
              <p className="text-slate-600">
                We're passionate about supporting entrepreneurs and investors who are 
                building the future of technology and business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-slate-600">The passionate individuals behind Originn's success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">AS</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Arjun Sharma</h3>
              <p className="text-blue-600 font-medium mb-2">Founder & CEO</p>
              <p className="text-slate-600 text-sm">
                Former investment banker with 10+ years experience in startup ecosystem. 
                Passionate about democratizing access to capital.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">PK</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Priya Kumar</h3>
              <p className="text-blue-600 font-medium mb-2">Co-Founder & CTO</p>
              <p className="text-slate-600 text-sm">
                Tech veteran with expertise in fintech and blockchain. Led engineering teams 
                at top-tier startups and unicorns.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">RS</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Rajesh Singh</h3>
              <p className="text-blue-600 font-medium mb-2">Head of Operations</p>
              <p className="text-slate-600 text-sm">
                Operations expert with deep understanding of regulatory compliance 
                and risk management in financial services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join the Future of Startup Investment?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're an entrepreneur looking to raise funds or an investor seeking 
            the next big opportunity, Originn is your gateway to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors cursor-pointer">
              Start Your Journey
            </button>
            <button className="px-8 py-4 border border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}


