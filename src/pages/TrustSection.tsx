import { Lock, Eye, CheckCircle, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const trustPillars = [
  {
    icon: Lock,
    title: "Originn Protected Payment",
    description: "All funds held in RBI-regulated digital escrow accounts. Your money is safe until milestones are verified.",
    // stat: "100%",
    // statLabel: "Secure Transactions",
  },
  {
    icon: Target,
    title: "Milestone-Based Release",
    description: "Funds released to startups only after completing verified milestones like production run or quality control.",
    // stat: "Verified",
    // statLabel: "Milestone Releases",
  },
  {
    icon: Eye,
    title: "Transparent Progress Tracking",
    description: "Real-time visibility into every project's progress. Know exactly where your backed venture stands.",
    // stat: "Real-time",
    // statLabel: "Progress Updates",
  },
  {
    icon: CheckCircle,
    title: "Curated Ventures",
    description: "Every startup is sourced from top incubators, accelerators, and innovation hubs across India.",
    // stat: "Top-tier",
    // statLabel: "Quality Partners",
  },
];

const TrustAsService = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient with Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#192a51]">Trust as a Service</h2>
          <p className="text-xl text-[#192a51] max-w-3xl mx-auto">
            Originn is engineered to solve the trust deficit between backers, startups, and investors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {trustPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={pillar.title}
                className="relative overflow-hidden group hover:shadow-[var(--shadow-hover)] transition-all duration-500 hover:-translate-y-3 border-border/50 hover:border-primary/30"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Animated Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] group-hover:animate-[shimmer_2s_ease-in-out_infinite]" />
                
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Corner Decoration */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-radial from-primary/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="pt-8 pb-6 px-6 relative z-10">
                  {/* Icon with Enhanced Glow Effect */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-500" />
                    <div className="relative inline-flex p-5 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 group-hover:from-primary/20 group-hover:via-primary/10 group-hover:to-secondary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                      <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  


                </CardContent>

                {/* Bottom Shine Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </Card>
            );
          })}
        </div>

        {/* Enhanced Trust Indicators */}
        
      </div>
    </section>
  );
};

export default TrustAsService;