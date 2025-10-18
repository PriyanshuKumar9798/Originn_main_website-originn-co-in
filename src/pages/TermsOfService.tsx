import { Scale, AlertTriangle, CheckCircle, Shield, Users, CreditCard, Gavel } from 'lucide-react'
import { Footer } from '../components/Footer'

export const TermsOfService = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Please read these terms carefully before using the Originn platform. By accessing or using 
              our services, you agree to be bound by these terms and conditions.
            </p>
            <div className="text-sm text-slate-500">
              Last updated: December 2024
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Important Legal Notice</h2>
                <p className="text-lg text-slate-700">
                  These Terms of Service constitute a legally binding agreement between you and Originn Technologies Pvt Ltd. 
                  Please read them carefully and ensure you understand your rights and obligations before using our platform.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">1. Acceptance of Terms</h2>
            
            <div className="bg-slate-50 rounded-xl p-6 mb-8">
              <p className="text-slate-700">
                By accessing, browsing, or using the Originn platform, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms of Service and our Privacy Policy. 
                If you do not agree to these terms, you must not use our services.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">2. Platform Description</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                <Users className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Investment Platform</h3>
                  <p className="text-slate-700">
                    Originn is a technology platform that connects startups seeking funding with investors 
                    looking for investment opportunities. We facilitate introductions and provide tools 
                    for due diligence, but we are not a registered investment advisor.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-green-50 rounded-xl">
                <Shield className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Escrow Services</h3>
                  <p className="text-slate-700">
                    We provide secure escrow services to protect both investors and startups during 
                    the funding process, ensuring funds are held safely until agreed milestones are met.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">3. User Eligibility</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Age Requirements</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• You must be at least 18 years old</li>
                  <li>• You must have legal capacity to enter into contracts</li>
                  <li>• You must not be prohibited from using our services by law</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Account Requirements</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Provide accurate and complete information</li>
                  <li>• Maintain the security of your account credentials</li>
                  <li>• Notify us immediately of any unauthorized access</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">4. Investment Risks</h2>
            
            <div className="bg-red-50 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">High-Risk Investments</h3>
                  <p className="text-slate-700">
                    Investing in startups involves significant risks, including the potential loss of your entire investment. 
                    Past performance does not guarantee future results. You should only invest money you can afford to lose.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">No Guarantees</h4>
                  <p className="text-slate-700">We do not guarantee any returns on your investments</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Liquidity Risk</h4>
                  <p className="text-slate-700">Startup investments are typically illiquid and long-term</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Market Risk</h4>
                  <p className="text-slate-700">Economic conditions can significantly impact startup valuations</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">5. User Responsibilities</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Accurate Information</h3>
                  <p className="text-slate-700">
                    You must provide accurate, complete, and up-to-date information about yourself, 
                    your business, and your investment objectives.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-green-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Compliance</h3>
                  <p className="text-slate-700">
                    You must comply with all applicable laws and regulations, including securities laws, 
                    anti-money laundering requirements, and tax obligations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Due Diligence</h3>
                  <p className="text-slate-700">
                    You are responsible for conducting your own due diligence before making any 
                    investment decisions. We do not provide investment advice.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">6. Prohibited Activities</h2>
            
            <div className="bg-slate-50 rounded-xl p-6 mb-8">
              <p className="text-slate-700 mb-4">You agree not to:</p>
              <ul className="space-y-2 text-slate-700">
                <li>• Use the platform for any illegal or unauthorized purpose</li>
                <li>• Provide false, misleading, or fraudulent information</li>
                <li>• Attempt to gain unauthorized access to our systems</li>
                <li>• Interfere with the proper functioning of the platform</li>
                <li>• Engage in market manipulation or insider trading</li>
                <li>• Violate any applicable laws or regulations</li>
                <li>• Harass, abuse, or harm other users</li>
                <li>• Use automated systems to access the platform without permission</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">7. Fees and Payments</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-slate-900">Platform Fees</h3>
                </div>
                <p className="text-slate-700">
                  We charge fees for successful transactions and premium services. 
                  All fees are clearly disclosed before you commit to any transaction.
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Gavel className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-slate-900">Payment Terms</h3>
                </div>
                <p className="text-slate-700">
                  All payments are processed securely through our escrow system. 
                  Refunds are subject to our refund policy and applicable laws.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">8. Intellectual Property</h2>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <p className="text-slate-700">
                The Originn platform, including its design, functionality, and content, is protected by 
                intellectual property laws. You may not copy, modify, distribute, or create derivative 
                works based on our platform without our express written permission.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">9. Disclaimers and Limitations</h2>
            
            <div className="space-y-6 mb-12">
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">No Investment Advice</h3>
                <p className="text-slate-700">
                  Originn is not a registered investment advisor, broker-dealer, or financial advisor. 
                  We do not provide investment advice, recommendations, or endorsements. All investment 
                  decisions are your sole responsibility.
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Platform Availability</h3>
                <p className="text-slate-700">
                  We strive to maintain platform availability but do not guarantee uninterrupted access. 
                  We may suspend or terminate services for maintenance, updates, or other reasons.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">10. Termination</h2>
            
            <div className="bg-slate-50 rounded-xl p-6 mb-8">
              <p className="text-slate-700">
                Either party may terminate this agreement at any time. Upon termination, your access to 
                the platform will be suspended, but certain provisions of these terms will continue to apply. 
                We may suspend or terminate accounts that violate these terms or applicable laws.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">11. Dispute Resolution</h2>
            
            <div className="bg-green-50 rounded-xl p-6 mb-8">
              <p className="text-slate-700">
                Any disputes arising from these terms or your use of our platform will be resolved through 
                binding arbitration in accordance with the Arbitration and Conciliation Act, 2015. 
                The arbitration will be conducted in Mumbai, India.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">12. Governing Law</h2>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-12">
              <p className="text-slate-700">
                These Terms of Service are governed by the laws of India. Any legal proceedings related to 
                these terms will be subject to the exclusive jurisdiction of the courts in Mumbai, India.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Questions About These Terms?</h3>
              <p className="text-slate-700 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-slate-700">
                <p><strong>Email:</strong> legal@originn.co.in</p>
                <p><strong>Phone:</strong> +91-9876543210</p>
                <p><strong>Address:</strong> Originn Technologies Pvt Ltd, Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
