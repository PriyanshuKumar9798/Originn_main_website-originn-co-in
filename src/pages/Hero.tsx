import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

import TypewriterText from "./TypewriterText";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-primary-foreground py-12 md:py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-10 right-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative element */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md border border-white/30 rounded-full px-5 py-2.5 mb-4 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300">
            <Sparkles className="h-4 w-4 text-cyan-300 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">
              Discover India&apos;s Innovation Ecosystem
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight min-h-[120px] md:min-h-[150px] bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
            <TypewriterText 
              text="The next big thing is happening here" 
              delay={80}
            />
          </h1>
          
          {/* Stats or trust indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm">
            {/*  */}
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        @keyframes pulse-slow {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style> */}
    </section>
  );
};

export default Hero;