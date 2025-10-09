import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import TypewriterText from "./TypewriterText";

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-centern align-item-center text-center 
                 bg-gradient-to-br from-indigo-600 via-purple-900 to-pink-400 
                 text-primary-foreground min-h-[30vh] py-6 px-4 overflow-hidden"
    >
      {/* Animated Background Layer (optional visuals like gradients or particles) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* You can add subtle gradient blobs or animated elements here later */}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Content Container */}
      <div className="relative z-4 w-full max-w-4xl mx-auto">
        <h4
          className="text-[clamp(1.75rem,5vw,3.0rem)] font-bold leading-tight 
                     mb-8 bg-gradient-to-r from-white via-cyan-100 to-purple-100 
                     bg-clip-text text-transparent drop-shadow-2xl 
                     whitespace-nowrap overflow-hidden text-ellipsis"
        >
          <TypewriterText 
            text="The next big thing is happening here" 
            delay={80}
          />
        </h4>

        {/* Optional Subtext */}
       

        {/* CTA Button */}
        
      </div>
    </section>
  );
};

export default Hero;
