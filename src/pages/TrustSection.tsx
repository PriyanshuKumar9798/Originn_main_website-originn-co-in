import { Shield, Lock, Eye, CheckCircle2, Award, Star, Target, Verified } from "lucide-react";
import { Card } from "@/components/ui/card";

const TrustSection = () => {
  const features = [
    {
      icon: Shield,
      accentIcon: Award,
      title: "Originn Protected Payment",
      description: "All funds held in RBI-regulated digital escrow accounts. Your money is safe until milestones are verified.",
      gradient: "from-blue-500 to-cyan-600",
      glowColor: "blue",
    },
    {
      icon: Lock,
      accentIcon: Verified,
      title: "Milestone-Based Release",
      description: "Funds released to startups only after completing verified milestones like production run or quality control.",
      gradient: "from-purple-500 to-indigo-600",
      glowColor: "purple",
    },
    {
      icon: Eye,
      accentIcon: Target,
      title: "Transparent Progress Tracking",
      description: "Real-time visibility into every project's progress. Know exactly where your backed venture stands.",
      gradient: "from-pink-500 to-rose-600",
      glowColor: "pink",
    },
    {
      icon: CheckCircle2,
      accentIcon: Star,
      title: "Curated Ventures",
      description: "Every startup is sourced from top incubators, accelerators, and innovation hubs across India.",
      gradient: "from-orange-500 to-amber-600",
      glowColor: "orange",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-orange-50/30 to-pink-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating trust badges */}
      <div className="absolute top-10 right-10 opacity-10">
        <Shield className="w-32 h-32 text-blue-600 animate-float" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <Lock className="w-32 h-32 text-purple-600 animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-4">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-bold text-blue-900">100% Secure & Transparent</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Trust as a Service
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Originn is engineered to solve the trust deficit between backers, startups, and investors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const AccentIcon = feature.accentIcon;
            return (
              <Card
                key={index}
                className="relative p-8 hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-2 border-gray-100 group hover:scale-105 hover:border-purple-200 overflow-hidden"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100/50 to-transparent rounded-bl-3xl"></div>
                
                {/* Large watermark icon */}
                <div className="absolute bottom-0 right-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <AccentIcon className="w-32 h-32 text-gray-900" />
                </div>

                {/* Icon container with gradient and glow */}
                <div className="relative mb-5">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-${feature.glowColor}-500/50 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                    <Icon className="h-8 w-8 text-white drop-shadow-lg" strokeWidth={2.5} />
                  </div>
                  
                  {/* Animated glow ring */}
                  <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity`}></div>
                  
                  {/* Verification badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                    <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                </div>

                {/* Accent line */}
                <div className={`h-1 w-16 bg-gradient-to-r ${feature.gradient} rounded-full mb-4 group-hover:w-full transition-all duration-500`}></div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Bottom shine effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </Card>
            );
          })}
        </div>

        {/* Trust indicators at bottom */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm">
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-gray-200">
            <Shield className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-gray-800">RBI Regulated Escrow</span>
          </div>
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-gray-200">
            <Verified className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-gray-800">Verified Startups Only</span>
          </div>
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-gray-200">
            <Star className="w-5 h-5 text-orange-600" />
            <span className="font-semibold text-gray-800">100% Transparency</span>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style> */}
    </section>
  );
};

export default TrustSection;