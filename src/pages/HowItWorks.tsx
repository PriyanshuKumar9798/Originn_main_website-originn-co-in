import { Search, Shield, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Explore curated startups and products from India's top design schools and innovation hubs.",
  },
  {
    icon: Shield,
    title: "Trust & Validate",
    description: "Every listing is vetted. Funds are held in RBI-regulated escrow accounts with milestone-based releases.",
  },
  {
    icon: Rocket,
    title: "Pre-order & Support",
    description: "Back innovative products before mass production. Be part of the creation journey from the very beginning.",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor real-time milestone updates and watch your supported ventures grow into market-ready products.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#192a51]">How Originn Works</h2>
          <p className="text-xl text-[#192a51] max-w-2xl mx-auto">
            A trusted platform that connects innovators with early adopters and investors
          </p>
        </div>

        <div className="relative">
          {/* Connection Line with Gradient */}
          <div className="hidden lg:block absolute top-[80px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Step Card */}
                  <div className="relative bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 hover:-translate-y-3 border border-border/50 hover:border-primary/30 overflow-hidden">
                    {/* Hover Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon with Animated Background */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                      <div className="relative inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300 relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                      {step.description}
                    </p>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
