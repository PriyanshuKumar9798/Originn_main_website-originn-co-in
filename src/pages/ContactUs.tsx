import { Mail, Phone, MapPin, Clock, MessageCircle, Send, Users, Headphones, FileText, ArrowRight } from 'lucide-react'
import { Footer } from '../components/Footer'

export const ContactUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Have questions about our platform? Need help with your investment journey? 
              We're here to help you succeed. Reach out to us anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-600 mb-4">Get detailed responses within 24 hours</p>
              <a href="mailto:hello@originn.co.in" className="text-blue-600 font-medium hover:text-blue-700 transition-colors cursor-pointer">
                hello@originn.co.in
              </a>
            </div>

            <div className="text-center p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-600 mb-4">Speak directly with our team</p>
              <a href="tel:+919876543210" className="text-green-600 font-medium hover:text-green-700 transition-colors cursor-pointer">
                +91-9876543210
              </a>
            </div>

            <div className="text-center p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Visit Us</h3>
              <p className="text-slate-600 mb-4">Come meet us in person</p>
              <p className="text-purple-600 font-medium">
                Mumbai, India
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Business Hours</h3>
              <p className="text-slate-600 mb-4">We're available when you need us</p>
              <p className="text-amber-600 font-medium">
                Mon-Fri: 9AM-6PM IST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Send Us a Message</h2>
            <p className="text-lg text-slate-600">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="investment">Investment Support</option>
                  <option value="startup">Startup Support</option>
                  <option value="technical">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="media">Media Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                />
                <label htmlFor="newsletter" className="ml-2 block text-sm text-slate-700">
                  I'd like to receive updates about new investment opportunities and platform features
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How Can We Help?</h2>
            <p className="text-lg text-slate-600">
              Choose the support option that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Live Chat Support</h3>
              <p className="text-slate-600 mb-6">
                Get instant answers to your questions with our 24/7 live chat support. 
                Our team is always ready to help.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer">
                Start Chat
              </button>
            </div>

            <div className="text-center p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Help Center</h3>
              <p className="text-slate-600 mb-6">
                Browse our comprehensive knowledge base with articles, guides, and FAQs 
                to find answers to common questions.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors cursor-pointer">
                Browse Help
              </button>
            </div>

            <div className="text-center p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Community Forum</h3>
              <p className="text-slate-600 mb-6">
                Connect with other investors and entrepreneurs in our community forum. 
                Share experiences and get advice from peers.
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors cursor-pointer">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">
              Quick answers to the most common questions we receive
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                How do I get started as an investor on Originn?
              </h3>
              <p className="text-slate-600">
                Simply create an account, complete your profile verification, and start browsing 
                investment opportunities. Our team will guide you through the entire process.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                What are the minimum investment requirements?
              </h3>
              <p className="text-slate-600">
                Minimum investments vary by opportunity, typically starting from ₹10,000. 
                Each campaign clearly displays the minimum investment amount.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                How secure is my investment on the platform?
              </h3>
              <p className="text-slate-600">
                We use bank-grade security with RBI-regulated escrow services. All transactions 
                are encrypted and protected by multiple layers of security.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Can I withdraw my investment before the campaign ends?
              </h3>
              <p className="text-slate-600">
                Investments are typically locked until the campaign reaches its funding goal or 
                the campaign period ends. This protects both investors and startups.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                What fees does Originn charge?
              </h3>
              <p className="text-slate-600">
                We charge a small platform fee on successful investments. All fees are clearly 
                disclosed before you commit to any investment.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer flex items-center gap-2 mx-auto">
              View All FAQs
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of investors who trust Originn for their startup investments. 
            Get started today and discover your next big opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors cursor-pointer">
              Start Investing
            </button>
            <button className="px-8 py-4 border border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors cursor-pointer">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}


