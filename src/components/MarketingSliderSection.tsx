import { Rocket, TrendingUp, Zap, Award, Lightbulb } from 'lucide-react'
import { Player } from '@lottiefiles/react-lottie-player'

export const MarketingSliderSection = () => {


  const marketingCards = [
    {
      id: 1,
      title: "Launch Your Startup",
      subtitle: "From Idea to Market",
      description: "Turn ideas into products with a guided launch path.",
      icon: Rocket,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      cardBg: "bg-gradient-to-br from-blue-50 to-indigo-100",
      borderColor: "border-blue-200",
      lottieUrl: "https://assets5.lottiefiles.com/packages/lf20_0yfsb3.json", // Rocket launch animation
      stats: "500+ Startups Launched"
    },
    {
      id: 2,
      title: "Scale Your Business",
      subtitle: "Grow Faster, Smarter",
      description: "Tools, mentors, and network to grow faster.",
      icon: Zap,
      iconColor: "text-yellow-600",
      iconBg: "bg-yellow-100",
      cardBg: "bg-gradient-to-br from-yellow-50 to-orange-100",
      borderColor: "border-yellow-200",
      lottieUrl: "https://assets5.lottiefiles.com/packages/lf20_2glqweqs.json", // Growth chart animation
      stats: "₹2.5Cr+ Raised"
    },
    {
      id: 5,
      title: "Build Your Network",
      subtitle: "Connect & Collaborate",
      description: "Meet founders, investors, and experts who can help.",
      icon: Award,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
      cardBg: "bg-gradient-to-br from-purple-50 to-violet-100",
      borderColor: "border-purple-200",
      lottieUrl: "https://assets5.lottiefiles.com/packages/lf20_0yfsb3.json", // Award/trophy animation
      stats: "10K+ Members"
    },
    {
      id: 6,
      title: "Secure Your Future",
      subtitle: "Protected & Verified",
      description: "Escrow‑protected. Verified startups. Launch with trust.",
      icon: Lightbulb,
      iconColor: "text-amber-600",
      iconBg: "bg-amber-100",
      cardBg: "bg-gradient-to-br from-amber-50 to-yellow-100",
      borderColor: "border-amber-200",
      lottieUrl: "https://assets5.lottiefiles.com/packages/lf20_2glqweqs.json", // Lightbulb/idea animation
      stats: "100% Secure"
    }
  ]


  return (
    <section className="py-12 sm:py-14 lg:py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
            Why Choose <span className="text-blue-600">Originn</span>?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Join thousands who've launched and grown with us.
          </p>
        </div>

        {/* Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 py-2">
            {marketingCards.map((card) => (
              <div
                key={card.id}
                className={`w-full h-[220px] sm:h-[240px] bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group hover:-translate-y-1 flex flex-col overflow-hidden relative`}
              >
                {/* Header with Icon and Title */}
                <div className="flex items-start gap-2.5 mb-2 pr-10">
                  <div className={`inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg ${card.iconBg} ${card.iconColor} group-hover:scale-105 transition-transform duration-300 flex-shrink-0`}>
                    <card.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight mb-0.5">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-tight">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Description */}
                <div className="flex-1 mb-3">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Section with Stats */}
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-slate-400 mt-auto pt-1">
                  <TrendingUp className="h-3 w-3 flex-shrink-0" />
                  <span>{card.stats}</span>
                </div>

                {/* Lottie Animation - Positioned at top right to avoid text overlap */}
                <div className="hidden sm:block absolute top-2 right-2 w-10 h-10 opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none saturate-0">
                  <Player
                    autoplay
                    loop
                    src={card.lottieUrl}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
