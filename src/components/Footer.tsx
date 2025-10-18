import { Mail, Phone, MapPin, ArrowRight, Heart, Shield, CreditCard, CheckCircle } from 'lucide-react'

export const Footer = () => {
    return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Column - Originn Branding & Contact */}
          <div className="lg:col-span-1">
            {/* Logo & Tagline */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-full bg-blue-600 text-white grid place-items-center font-black">Og</div>
                <span className="text-2xl font-bold">Originn</span>
              </div>
              <p className="text-slate-300 text-sm">
                Built with <Heart className="inline h-3 w-3 text-red-500" /> in India for the world
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>hello@originn.co.in</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+91-9876543210</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Mumbai, India</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3 mb-6">
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-xs font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-xs font-bold">in</span>
              </div>
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-xs font-bold">@</span>
              </div>
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-xs font-bold">📱</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-2">Stay Updated</h3>
              <p className="text-xs text-slate-400 mb-3">
                Get the latest updates on innovative startups and investment opportunities.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 mb-6">
              <button className="w-full py-2 px-4 bg-blue-600 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer">
                Start Your Campaign
              </button>
              <button className="w-full py-2 px-4 border border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors cursor-pointer">
                Become an Investor
              </button>
            </div>
          </div>

          {/* Middle Columns - Navigation Links */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* For Startups */}
            <div>
              <h3 className="text-sm font-semibold mb-4">For Startups</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Launch Campaign</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Raise Funds</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Find Mentors</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Startup Resources</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Success Stories</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Pricing Plans</a></li>
              </ul>
            </div>

            {/* For Investors */}
            <div>
              <h3 className="text-sm font-semibold mb-4">For Investors</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Discover Startups</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Investment Opportunities</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Portfolio Management</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Due Diligence</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Market Insights</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Investor Dashboard</a></li>
              </ul>
            </div>

            {/* Platform */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">How It Works</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Escrow Protection</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Milestone Tracking</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Verification Process</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Success Metrics</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">API Documentation</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Case Studies</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Webinars</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Startup Guide</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Investment Guide</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Help Center</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="/about" className="hover:text-blue-400 transition-colors cursor-pointer">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Our Team</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Press Kit</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Partners</a></li>
                <li><a href="/contact" className="hover:text-blue-400 transition-colors cursor-pointer">Contact Us</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="/terms" className="hover:text-blue-400 transition-colors cursor-pointer">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-blue-400 transition-colors cursor-pointer">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Refund Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Dispute Resolution</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Compliance</a></li>
              </ul>
            </div>
          </div>

          {/* Right Column - Featured & Awards */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold mb-4">Featured</h3>
            <div className="space-y-3 mb-6">
              <div className="bg-slate-800 p-3 rounded-lg">
                <h4 className="text-xs font-semibold mb-1">Top Startups</h4>
                <p className="text-xs text-slate-400">Discover India's most innovative startups</p>
              </div>
              <div className="bg-slate-800 p-3 rounded-lg">
                <h4 className="text-xs font-semibold mb-1">Success Stories</h4>
                <p className="text-xs text-slate-400">Read about successful campaigns</p>
              </div>
              <div className="bg-slate-800 p-3 rounded-lg">
                <h4 className="text-xs font-semibold mb-1">Awards & Recognition</h4>
                <p className="text-xs text-slate-400">Industry recognition and achievements</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <Shield className="h-3 w-3 text-green-400" />
                <span>RBI Regulated Escrow</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle className="h-3 w-3 text-green-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <CreditCard className="h-3 w-3 text-green-400" />
                <span>Secure Payments</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location-based Startups */}
      <div className="bg-slate-800 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-semibold mb-4">Startups by Location</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs">
            {[
              'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune',
              'Kolkata', 'Ahmedabad', 'Gurgaon', 'Noida', 'Pune', 'Kochi',
              'Chandigarh', 'Jaipur', 'Indore', 'Lucknow', 'Coimbatore', 'Nagpur'
            ].map((city) => (
              <a key={city} href="#" className="text-slate-300 hover:text-blue-400 transition-colors cursor-pointer">
                Startups in {city}
              </a>
            ))}
          </div>
          <div className="mt-4">
            <a href="#" className="text-blue-400 text-sm hover:text-blue-300 transition-colors cursor-pointer flex items-center gap-1">
              View More <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section - Security & Payment */}
      <div className="bg-slate-950 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Security Badge */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 bg-green-600 px-3 py-1 rounded-full">
                <Shield className="h-3 w-3 text-white" />
                <span className="text-xs font-medium text-white">100% Safe & Secure</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-slate-400">SECURE Razorpay</span>
              <div className="flex gap-2">
                {['VISA', 'UPI', 'Mastercard', 'RuPay', 'Maestro'].map((method) => (
                  <div key={method} className="w-8 h-5 bg-slate-700 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-300">{method}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">G</span>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">I</span>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">I</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-4 pt-4 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-400">
              Best viewed in latest versions of Chrome, Firefox, Safari, and Edge. V: 1.0.0
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Copyright © 2024 Originn Technologies Pvt Ltd - All rights reserved.
            </p>
            </div>
          </div>
        </div>
      </footer>
  )
}
