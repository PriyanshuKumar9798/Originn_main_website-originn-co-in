import { Search, ShieldCheck, Rocket, TrendingUp, Sparkles, Award, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      accentIcon: Sparkles,
      title: "Discover",
      description: "Explore curated startups and products from India's top innovation hubs, incubators, and design schools.",
      gradient: "from-cyan-500 to-blue-600",
      glowColor: "cyan",
    },
    {
      icon: ShieldCheck,
      accentIcon: Award,
      title: "Trust & Validate",
      description: "Every listing is vetted. Funds are held in RBI-regulated escrow accounts with milestone-based releases.",
      gradient: "from-purple-500 to-indigo-600",
      glowColor: "purple",
    },
    {
      icon: Rocket,
      accentIcon: Zap,
      title: "Pre-order & Support",
      description: "Back innovative products before mass production. Be part of the creation journey from the very beginning.",
      gradient: "from-pink-500 to-rose-600",
      glowColor: "pink",
    },
    {
      icon: TrendingUp,
      accentIcon: Users,
      title: "Track Progress",
      description: "Monitor real-time milestone updates and watch your supported ventures grow into market-ready products.",
      gradient: "from-green-500 to-emerald-600",
      glowColor: "green",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating particles */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-purple-100 rounded-full px-6 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-bold text-purple-900">Simple & Transparent Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent mb-4">
            How Originn Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A trusted platform that connects innovators with early adopters and investors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const AccentIcon = step.accentIcon;
            return (
              <Card 
                key={index} 
                className="relative p-8 text-center hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-2 border-gray-100 group hover:scale-105 hover:border-purple-200 overflow-hidden"
              >
                {/* Number badge */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-600">{index + 1}</span>
                </div>

                {/* Accent icon (background) */}
                <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <AccentIcon className="w-32 h-32 text-gray-900" />
                </div>

                {/* Main icon container with gradient */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:shadow-${step.glowColor}-500/50 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                    <Icon className="h-10 w-10 text-white drop-shadow-lg" strokeWidth={2.5} />
                  </div>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity mx-auto`}></div>
                </div>

                {/* Step number indicator */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className={`h-1 w-12 bg-gradient-to-r ${step.gradient} rounded-full`}></div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </Card>
            );
          })}
        </div>

        {/* Connection lines between cards (desktop only) */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl pointer-events-none">
          <svg className="w-full h-24" viewBox="0 0 1200 100" fill="none">
            <path 
              d="M 100 50 Q 400 20, 700 50 T 1100 50" 
              stroke="url(#gradient)" 
              strokeWidth="2" 
              strokeDasharray="5,5"
              className="animate-dash"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                <stop offset="33%" stopColor="#a855f7" stopOpacity="0.3" />
                <stop offset="66%" stopColor="#ec4899" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes dash {
          to { stroke-dashoffset: -10; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-dash {
          animation: dash 20s linear infinite;
        }
      `}</style> */}
    </section>
  );
};

export default HowItWorks;