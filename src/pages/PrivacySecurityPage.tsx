import React, { useState } from "react";
import { Shield, Lock, FileText, UserCheck, AlertCircle, Globe, Eye, Download, CheckCircle, Star, Sparkles } from "lucide-react";

export default function PrivacySecurityPage() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 1,
      icon: UserCheck,
      title: "Our Commitment to Your Privacy",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      content: (
        <>
          <p className="text-gray-700 leading-relaxed">
            Welcome to <span className="font-bold text-blue-600">Originn</span> ("Originn," "we," "us," or "our"). Our mission is to
            build a trusted ecosystem for backers, startups, and investors. Protecting your personal
            data is fundamental to that trust.
          </p>
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 rounded-r-lg">
            <p className="text-gray-800 font-medium">
              This Privacy Policy explains how we collect, use, process, and safeguard your information
              when you use our platform and services. We comply with India's{" "}
              <span className="font-bold text-blue-600">Digital Personal Data Protection (DPDP) Act, 2023</span>. 
              Originn acts as a <span className="font-bold text-blue-600">Data Fiduciary</span> responsible for your data.
            </p>
          </div>
          <p className="mt-4 text-gray-600 italic">
            By using our website, you agree to the practices described in this policy.
          </p>
        </>
      )
    },
    {
      id: 2,
      icon: FileText,
      title: "The Information We Collect",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      content: (
        <>
          <p className="text-gray-700 font-semibold mb-4">
            We collect only what's necessary to provide our services, ensure security, and comply with laws. 
            <span className="text-purple-600 ml-2">Consent is always obtained before collection.</span>
          </p>
          <div className="space-y-4">
            {[
              { title: "For All Users", desc: "name, email, password, technical data (IP, device info, cookies), and communication records.", color: "purple" },
              { title: "For Backers", desc: "transaction and shipping details, contact number, and content you post.", color: "pink" },
              { title: "For Startups & Founders", desc: "business, KYC, legal, and financial information for due diligence and payouts.", color: "indigo" },
              { title: "For Investors", desc: "accreditation, professional, and verification details for regulatory compliance.", color: "violet" }
            ].map((item, idx) => (
              <div key={idx} className={`p-4 bg-${item.color}-50 border-l-4 border-${item.color}-400 rounded-r-lg hover:shadow-md transition-shadow`}>
                <h4 className={`font-bold text-${item.color}-700 mb-1`}>{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      id: 3,
      icon: Globe,
      title: "How We Use Your Information",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      content: (
        <>
          <p className="text-gray-700 font-semibold mb-4">
            We use your data only for purposes you've consented to:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Operate and manage platform functions",
              "Ensure safety via verification",
              "Process secure payments",
              "Provide customer support",
              "Comply with RBI, SEBI regulations"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-emerald-200 hover:border-emerald-400 transition-colors">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      id: 4,
      icon: Lock,
      title: "Data Sharing and Disclosure",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      content: (
        <>
          <div className="mb-4 p-4 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-400 rounded-lg">
            <p className="text-red-700 font-bold text-lg flex items-center gap-2">
              <Shield className="w-5 h-5" />
              We never sell your data.
            </p>
          </div>
          <p className="text-gray-700 mb-4">
            We share it only with trusted, DPA-bound partners:
          </p>
          <div className="space-y-3">
            {[
              { label: "Startups", desc: "for order fulfillment and backer shipping details" },
              { label: "Investors", desc: "for verified startup insights via Originn Intelligence Platform" },
              { label: "Service Partners", desc: "like Razorpay (payments), Castler (escrow), verification agencies" },
              { label: "Legal Authorities", desc: "when required by law or official requests" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3 p-3 bg-white rounded-lg border border-orange-200">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-bold text-gray-800">{item.label}:</span>
                  <span className="text-gray-600 ml-2">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      id: 5,
      icon: UserCheck,
      title: "Your Data Protection Rights",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-300",
      content: (
        <>
          <p className="text-gray-700 mb-4">
            You have full control of your data under the <span className="font-bold text-yellow-600">DPDP Act</span>:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Eye, title: "Access", desc: "Download a copy of your data anytime" },
              { icon: FileText, title: "Correction", desc: "Edit inaccurate information in your profile" },
              { icon: AlertCircle, title: "Erasure", desc: "Delete your account and data permanently" },
              { icon: Download, title: "Withdraw Consent", desc: "Manage data permissions via dashboard" }
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-white rounded-xl border-2 border-yellow-200 hover:border-yellow-400 hover:shadow-lg transition-all group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-yellow-100 rounded-lg group-hover:bg-yellow-200 transition-colors">
                    <item.icon className="w-5 h-5 text-yellow-600" />
                  </div>
                  <h4 className="font-bold text-gray-800">{item.title}</h4>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      id: 6,
      icon: Lock,
      title: "Our Commitment to Data Security",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      content: (
        <>
          <p className="text-gray-700 font-semibold mb-4">
            We adopt a "Privacy-by-Design" model with:
          </p>
          <div className="space-y-4">
            {[
              { icon: Shield, text: "End-to-end encryption (SSL/TLS and at rest)", color: "indigo" },
              { icon: Lock, text: "Protection against XSS, CSRF, and SQL injection", color: "blue" },
              { icon: UserCheck, text: "Role-Based Access Control (RBAC) for employees", color: "cyan" },
              { icon: Star, text: "Independent third-party audits and penetration tests", color: "purple" }
            ].map((item, idx) => (
              <div key={idx} className={`flex items-center gap-4 p-4 bg-gradient-to-r from-${item.color}-50 to-white rounded-lg border border-${item.color}-200 hover:shadow-md transition-shadow`}>
                <div className={`p-3 bg-${item.color}-100 rounded-full`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                </div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      id: 7,
      icon: AlertCircle,
      title: "Changes to This Policy",
      color: "from-gray-500 to-slate-500",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-300",
      content: (
        <div className="p-6 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl border border-gray-200">
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy occasionally. Any significant changes will be posted on
            our website and communicated via email where applicable. We're committed to keeping you
            informed about how we protect your data.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 py-16 px-4 md:px-10 lg:px-20">
        {/* Hero Header */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl">
                <Shield className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Privacy & Security Policy
          </h1>
          
          <p className="text-2xl text-gray-600 font-semibold mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            Your Trust, Our Commitment
          </p>
          
          {/* <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg border-2 border-blue-100"> */}
            {/* <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> */}


        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              
              return (
                <div
                  key={section.id}
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${
                    isActive ? 'border-blue-400 ring-4 ring-blue-100' : 'border-gray-100'
                  }`}
                  onMouseEnter={() => setActiveSection(section.id)}
                  onMouseLeave={() => setActiveSection(null)}
                >
                  {/* Section Header */}
                  <div className={`p-6 bg-gradient-to-r ${section.color} cursor-pointer`}>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/90 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-gray-800" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-white/80 rounded-full text-sm font-bold text-gray-800">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <h2 className="text-2xl font-bold text-white drop-shadow-lg">
                            {section.title}
                          </h2>
                        </div>
                      </div>
                      <div className={`transform transition-transform ${isActive ? 'rotate-180' : ''}`}>
                        <AlertCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Section Content */}
                  <div className="p-8">
                    {section.content}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          {/* <div className="mt-16 p-8 bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 rounded-2xl shadow-2xl text-center">
            <div className="flex justify-center mb-4">
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-white text-lg font-semibold mb-2">
              © {new Date().getFullYear()} Originn. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              Your data security is paramount to our mission.
            </p>
          </div> */}
        </div>
      </div>

       
    </div>
  );
}