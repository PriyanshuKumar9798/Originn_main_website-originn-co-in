import { Shield, Lock, Eye, Database, Users, AlertCircle, CheckCircle } from 'lucide-react'
import { Footer } from '../components/Footer'

export const PrivacyPolicy = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Your privacy is our priority. Learn how we collect, use, and protect your personal information 
              on the Originn platform.
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
          <div className="bg-blue-50 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment to Privacy</h2>
                <p className="text-lg text-slate-700">
                  At Originn, we are committed to protecting your privacy and ensuring the security of your 
                  personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard 
                  your information when you use our platform.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Information We Collect</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-slate-900">Personal Information</h3>
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li>• Name and contact information</li>
                  <li>• Email address and phone number</li>
                  <li>• Date of birth and identity verification</li>
                  <li>• Financial information for investment purposes</li>
                  <li>• Professional background and experience</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-slate-900">Usage Information</h3>
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li>• Platform usage patterns and preferences</li>
                  <li>• Investment history and portfolio data</li>
                  <li>• Communication records and support tickets</li>
                  <li>• Device information and IP addresses</li>
                  <li>• Cookies and tracking technologies</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">How We Use Your Information</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4 p-6 bg-green-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Platform Services</h3>
                  <p className="text-slate-700">
                    To provide, maintain, and improve our investment platform services, including 
                    facilitating transactions, managing your account, and processing investments.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                <Lock className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Security & Compliance</h3>
                  <p className="text-slate-700">
                    To ensure platform security, prevent fraud, comply with regulatory requirements, 
                    and maintain the integrity of our investment ecosystem.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-xl">
                <Eye className="h-6 w-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Communication</h3>
                  <p className="text-slate-700">
                    To send you important updates, notifications, and marketing communications 
                    (with your consent) about new opportunities and platform features.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">Information Sharing</h2>
            
            <div className="bg-amber-50 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-amber-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">We Do Not Sell Your Data</h3>
                  <p className="text-slate-700">
                    We do not sell, trade, or rent your personal information to third parties. 
                    We only share information in the following limited circumstances:
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">With Your Consent</h4>
                  <p className="text-slate-700">When you explicitly authorize us to share your information</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Legal Requirements</h4>
                  <p className="text-slate-700">When required by law, court order, or regulatory authorities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Service Providers</h4>
                  <p className="text-slate-700">With trusted third-party service providers who assist in platform operations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Business Transfers</h4>
                  <p className="text-slate-700">In connection with mergers, acquisitions, or asset sales</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">Data Security</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-slate-900">Encryption</h3>
                </div>
                <p className="text-slate-700">
                  All data is encrypted using industry-standard AES-256 encryption both in transit 
                  and at rest to ensure maximum security.
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-slate-900">Access Controls</h3>
                </div>
                <p className="text-slate-700">
                  Strict access controls and multi-factor authentication ensure that only authorized 
                  personnel can access your information.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">Your Rights</h2>
            
            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Access Your Data</h4>
                  <p className="text-slate-700">Request a copy of all personal information we hold about you</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Correct Inaccuracies</h4>
                  <p className="text-slate-700">Update or correct any inaccurate personal information</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Delete Your Data</h4>
                  <p className="text-slate-700">Request deletion of your personal information (subject to legal requirements)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Data Portability</h4>
                  <p className="text-slate-700">Export your data in a machine-readable format</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Opt-Out</h4>
                  <p className="text-slate-700">Unsubscribe from marketing communications at any time</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">Cookies and Tracking</h2>
            
            <div className="bg-slate-50 rounded-xl p-6 mb-12">
              <p className="text-slate-700 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our platform. 
                These technologies help us:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>• Remember your preferences and settings</li>
                <li>• Analyze platform usage and performance</li>
                <li>• Provide personalized content and recommendations</li>
                <li>• Ensure platform security and prevent fraud</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">Updates to This Policy</h2>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-12">
              <p className="text-slate-700">
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or applicable laws. We will notify you of any material changes by email or through our platform. 
                Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Us</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Questions About Your Privacy?</h3>
              <p className="text-slate-700 mb-6">
                If you have any questions about this Privacy Policy or how we handle your personal information, 
                please don't hesitate to contact us:
              </p>
              <div className="space-y-2 text-slate-700">
                <p><strong>Email:</strong> privacy@originn.co.in</p>
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
