import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  description: string;
  tags?: string[];
  thumbnail?: string;
  link?: string;
}

export const ProductCard = ({
  title,
  description,
  tags = [],
  thumbnail,
  link = "/product",
}: ProductCardProps) => {
  return (
    <div className="bg-card rounded-xl shadow-card p-8 transition-all hover:shadow-hover border border-border/50 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Thumbnail */}
        <div className="flex-shrink-0">
          <div className="w-full md:w-56 h-56 rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 ring-2 ring-primary/20">
            {thumbnail ? (
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                No Image
              </div>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
            <p className="text-card-foreground mb-6 leading-relaxed text-base">
              {description}
            </p>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <Button
            className="w-full md:w-auto gap-2 bg-primary hover:bg-primary-light shadow-md"
            onClick={() => (window.location.href = link)}
          >
            View Product Details
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
