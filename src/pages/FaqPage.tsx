import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Lightbulb, TrendingUp, DollarSign, Cpu } from 'lucide-react';

const faqData = [
  {
    category: "General",
    questions: [
      {
        q: "What is Originn's primary mission?",
        a: "Our mission is to empower early-stage startups by providing a platform for launching, connecting with investors, and achieving sustainable growth through expert strategy and resources.",
        icon: Lightbulb
      },
      {
        q: "How does Originn differ from a typical incubator?",
        a: "While incubators focus heavily on mentorship and space, Originn primarily focuses on accelerating market validation and investor-readiness through our specialized product and growth tools, and a direct network of early-stage funders.",
        icon: HelpCircle
      },
      {
        q: "Which industries do you primarily focus on?",
        a: "We are industry-agnostic but tend to see high traction in Fintech, SaaS (Software as a Service), and sustainable technology startups.",
        icon: TrendingUp
      },
    ]
  },
  {
    category: "Funding & Investment",
    questions: [
      {
        q: "How can I connect with investors on the platform?",
        a: "Once your startup profile is verified and complete, you gain access to our 'Discover Startup' section, where verified investors can view your pitch, traction metrics, and pre-order campaigns. We also host exclusive virtual pitch events.",
        icon: DollarSign
      },
      {
        q: "What are the typical funding stages supported?",
        a: "We primarily support pre-seed and seed-stage startups looking for their first major capital infusion, typically ranging from $50k to $500k USD.",
        icon: DollarSign
      },
      {
        q: "Is there a fee to list my startup?",
        a: "Listing your startup profile is free. We only take a small success fee upon successful funding rounds facilitated directly through our investor network.",
        icon: DollarSign
      },
    ]
  },
  {
    category: "Platform Features",
    questions: [
      {
        q: "What is the Preorder feature?",
        a: "The Preorder feature allows early-stage companies to test market demand and generate initial revenue by selling their product/service before the official launch, providing crucial validation data to investors.",
        icon: Lightbulb
      },
      {
        q: "How is user data kept secure?",
        a: "We use industry-standard encryption (AES-256) for data at rest and TLS 1.3 for data in transit. Our security team performs regular audits and penetration testing to ensure maximum protection.",
        icon: Cpu
      },
    ]
  }
];

// Reusable Collapsible FAQ Item Component
const FaqItem = ({ question, answer, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none transition-colors duration-200 hover:text-amber-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          {/* Optional Icon for visual flair */}
          {Icon && <Icon size={20} className="text-amber-500 mr-4 flex-shrink-0" />}
          <span className="font-semibold text-gray-800 text-lg">{question}</span>
        </div>
        <ChevronDown 
          size={20} 
          className={`text-gray-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 py-3' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 pl-8 pb-4 text-base leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FaqPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter p-4 sm:p-8">
      
      {/* Header Section */}
      <header className="max-w-4xl mx-auto py-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-2">
          Your Questions, Answered
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about Originn, our platform, and how we help founders thrive.
        </p>
      </header>

      {/* FAQ Categories Section */}
      <section className="max-w-4xl mx-auto pb-16 space-y-10">
        {faqData.map((category, catIndex) => (
          <div key={catIndex} className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-amber-100">
            <h2 className="text-2xl font-bold text-amber-600 mb-6 border-b-2 border-amber-500/50 pb-2">
              {category.category}
            </h2>
            <div className="divide-y divide-gray-100">
              {category.questions.map((item, itemIndex) => (
                <FaqItem 
                  key={itemIndex}
                  question={item.q}
                  answer={item.a}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
      
      {/* Contact Section */}
      <section className="max-w-4xl mx-auto py-8 text-center">
        <p className="text-xl font-semibold text-gray-700">
          Still have unanswered questions?
        </p>
        <a 
          href="mailto:support@originn.com"
          className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-amber-600 hover:bg-amber-700 transition duration-300 transform hover:scale-[1.05] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
        >
          <HelpCircle size={20} className="mr-2"/>
          Contact Support Team
        </a>
      </section>

    </div>
  );
};

export default FaqPage;
