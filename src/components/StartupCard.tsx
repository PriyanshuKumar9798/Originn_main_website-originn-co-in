import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StartupCardProps {
  name: string;
  category: string;
  description: string;
  image: string;
  tagline?: string;
  creator?: string;
}

const StartupCard = ({ 
  name, 
  category, 
  description, 
  image, 
  tagline = "Innovative solution for tomorrow",
  creator = "Originn Ventures"
}: StartupCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02] cursor-pointer bg-white h-full">
      {/* Image Container with Aspect Ratio */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        
        {/* Category Badge - Top Right */}
        <div className="absolute top-2 right-2 z-10">
          <Badge 
            variant="secondary" 
            className="bg-primary text-primary-foreground font-semibold text-xs px-2.5 py-0.5 shadow-sm"
          >
            {category}
          </Badge>
        </div>

        {/* Hover Description Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
            <p className="text-white text-xs leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-3 space-y-1">
        {/* Product Name */}
        <h3 className="text-base font-bold text-foreground leading-tight line-clamp-1 group-hover:text-primary transition-colors duration-200">
          {name}
        </h3>
        
        {/* Tagline */}
        <p className="text-xs text-muted-foreground line-clamp-1">
          {tagline}
        </p>
        
        {/* Creator/Brand */}
        <p className="text-xs text-muted-foreground font-medium">
          {creator}
        </p>
      </div>
    </Card>
  );
};

export default StartupCard;
