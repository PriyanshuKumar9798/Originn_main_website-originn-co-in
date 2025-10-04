import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import StartupCard from "./StartupCard";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface Startup {
  name: string;
  category: string;
  description: string;
  image: string;
  tagline?: string;
  creator?: string;
}

interface StartupSectionProps {
  title: string;
  subtitle?: string;
  startups: Startup[];
}

const StartupSection = ({ title, subtitle, startups }: StartupSectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 600;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-8 border-t-2 border-foreground">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>

          {/* Scroll Buttons */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="border-2 hover:bg-muted h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="border-2 hover:bg-muted h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Startup Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {startups.map((startup, index) => (
            <div
              key={index}
              className="w-[325px] flex-shrink-0 cursor-pointer"
              onClick={() => navigate("/startup-profile")}
            >
              <StartupCard {...startup} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartupSection;
