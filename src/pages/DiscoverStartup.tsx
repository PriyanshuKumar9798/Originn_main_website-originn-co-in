import Header from "@/components/Header";
import FilterPanel from "@/components/FilterPanel";
import StartupCard from "@/components/StartupCard";
import { Rocket } from "lucide-react";
// import StartupSection from "@/components/StartupSection";
import StartupSection from "@/components/StartupSection";

const DiscoverStartup= () => {
    // Mock startup data
    const startups = [
        {
          name: "NidyaTech",
          tagline: "Revolutionary AI for Healthcare",
          description: "AI-powered platform improving healthcare diagnostics with machine learning algorithms that detect diseases early and provide accurate predictions for better patient outcomes.",
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
          category: "HealthTech",
          college: "IIT Madras",
          featured: true
        },
        {
          name: "SmartKart",
          tagline: "The Future of Retail Shopping",
          description: "Revolutionizing retail with cashier-less AI shopping experience. Smart carts with face recognition checkout make shopping seamless and efficient for modern consumers.",
          image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800&h=600&fit=crop",
          category: "AI & ML",
          college: "IIT Delhi",
          featured: false
        },
        {
            name: "GreenNest",
            tagline: "Building Sustainable Homes",
            description: "Sustainable housing solutions with eco-materials that reduce carbon footprint. We create affordable, environmentally friendly homes using recycled materials and solar energy.",
            image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop",
            category: "CleanTech",
            college: "IIT Bombay",
            featured: false
          },
          {
            name: "MediBot",
            tagline: "Precision Robotic Surgery",
            description: "Robotics in surgery for precision healthcare. Our surgical robots with AI guidance enable remote monitoring and enhance surgical accuracy for better patient outcomes.",
            image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
            category: "HealthTech",
            college: "IIT Madras",
            featured: false
          },
          {
            name: "EduFlow",
            tagline: "Personalized Learning for Everyone",
            description: "Personalized AI-based learning assistant that adapts to your pace. With progress tracking and gamified education, learning becomes engaging and effective for students of all ages.",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
            category: "EdTech",
            college: "IIT Delhi",
            featured: true
          },
          {
            name: "FoodFusion",
            tagline: "Nutrition Meets Taste",
            description: "Smart F&B startup blending nutrition with taste using AI recipes. We offer healthy fast food options and meal subscriptions that don't compromise on flavor.",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
            category: "Food & Beverage",
            college: "IIT Kharagpur",
            featured: false
          }
    ]
        return (
            <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
              <Header />
              
              <main className="container mx-auto px-4 py-12">
                {/* Page Title and Filter */}
                <div className="mb-12 flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-3 bg-primary/10 rounded-2xl backdrop-blur-sm">
                        <Rocket className="h-8 w-8 text-primary" />
                      </div>
                      <h1 className="text-5xl font-bold text-foreground bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                        Discover Startups
                      </h1>
                    </div>
                    <p className="text-lg text-muted-foreground ml-[4.5rem]">
                      Explore innovative startups from India's top innovation hubs
                    </p>
                  </div>
                  <FilterPanel />
                </div>
        
                {/* Startup Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {startups.map((startup, index) => (
    <StartupCard key={index} {...startup} />
  ))}
</div>

              </main>
            </div>
          );
        };
        
        export default DiscoverStartup;