import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

export const BenefitCard = ({ icon: Icon, title, description, delay }: BenefitCardProps) => {
  return (
    <div
      className="group flex gap-6 items-start py-8 animate-fade-in-up relative"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Animated Line */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary-foreground/20 to-transparent" />
      
      {/* Icon with animated background */}
      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 bg-primary-foreground/10 rounded-2xl blur-xl group-hover:bg-primary-foreground/20 transition-all duration-500 scale-150" />
        <div className="relative w-14 h-14 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-foreground/15 transition-all duration-300">
          <Icon className="w-7 h-7 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 pt-1">
        <h3 className="text-xl font-bold mb-3 text-primary-foreground group-hover:translate-x-2 transition-transform duration-300">
          {title}
        </h3>
        
        <p className="text-base text-primary-foreground/75 leading-relaxed group-hover:text-primary-foreground/90 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};