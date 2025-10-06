import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import StartupCard from "./StartupCard";
import { useNavigate } from "react-router-dom";

interface Startup {
  id: string;
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

const StartupSection: React.FC<StartupSectionProps> = ({ title, subtitle, startups }) => {
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
    <section className="py-8 border-t-2 border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{title}</h2>
            {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={() => scroll("left")} className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll("right")} className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {startups.map((startup) => (
            <div
              key={startup.id}
              className="w-[325px] flex-shrink-0 cursor-pointer"
              onClick={() => navigate(`/startup-profile/${startup.id}`)}
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
