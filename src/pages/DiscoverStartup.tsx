import { useState } from "react";
import Header from "@/components/Header";
import StartupCard from "@/components/StartupCard";
import { Rocket, Filter, X } from "lucide-react";
import StartupSection from "@/components/StartupSection";

// ✅ FilterPanel Component
const FilterPanel = ({ filters, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempFilters, setTempFilters] = useState(filters);

  const categories = ["All", "HealthTech", "AI & ML", "CleanTech", "EdTech", "Food & Beverage"];
  const colleges = ["All", "IIT Madras", "IIT Delhi", "IIT Bombay", "IIT Kharagpur"];
  const stages = ["All", "Idea", "MVP", "Early Stage", "Growth", "Scale-up"];
  const fundingStatuses = ["All", "Bootstrapped", "Seed Funded", "Series A", "Series B+", "Pre-Seed"];

  const handleTempFilterChange = (key, value) => {
    setTempFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    onFilterChange(tempFilters);
    setIsOpen(false);
  };

  const cancelFilters = () => {
    setTempFilters(filters);
    setIsOpen(false);
  };

  // ✅ Reset filters and apply immediately
  const resetFilters = () => {
    const defaultFilters = {
      category: "All",
      college: "All",
      stage: "All",
      fundingStatus: "All",
      featured: false,
    };
    setTempFilters(defaultFilters);
    onFilterChange(defaultFilters); // apply reset filters
    setIsOpen(false); // optionally close panel
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
      >
        <Filter className="h-4 w-4" />
        <span className="font-medium">Filters</span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={cancelFilters} />
          <div className="absolute right-0 top-12 w-80 bg-card border border-border rounded-lg shadow-xl p-5 z-50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Filters</h3>
              <button
                onClick={cancelFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto">
              {/* Startup Stage Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Startup Stage</label>
                <select
                  value={tempFilters.stage || "All"}
                  onChange={(e) => handleTempFilterChange("stage", e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {stages.map((stage) => (
                    <option key={stage} value={stage}>
                      {stage}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  value={tempFilters.category}
                  onChange={(e) => handleTempFilterChange("category", e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Institute/College Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Institute</label>
                <select
                  value={tempFilters.college}
                  onChange={(e) => handleTempFilterChange("college", e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {colleges.map((col) => (
                    <option key={col} value={col}>
                      {col}
                    </option>
                  ))}
                </select>
              </div>

              {/* Funding Status Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Funding Status</label>
                <select
                  value={tempFilters.fundingStatus || "All"}
                  onChange={(e) => handleTempFilterChange("fundingStatus", e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {fundingStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              {/* Featured Filter */}
              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={tempFilters.featured}
                  onChange={(e) => handleTempFilterChange("featured", e.target.checked)}
                  className="w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary"
                />
                <label htmlFor="featured" className="text-sm font-medium cursor-pointer">
                  Show Featured Only
                </label>
              </div>

              {/* ✅ Reset Filters Button */}
              <button
                onClick={resetFilters}
                className="w-full px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors text-sm"
              >
                Reset Filters
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-5 pt-4 border-t border-border">
              <button
                onClick={cancelFilters}
                className="flex-1 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={applyFilters}
                className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// ✅ DiscoverStartup Page
const DiscoverStartup = () => {
  const startups = [
    {
      name: "NidyaTech",
      tagline: "Revolutionary AI for Healthcare",
      description:
        "AI-powered platform improving healthcare diagnostics with machine learning algorithms that detect diseases early and provide accurate predictions for better patient outcomes.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      category: "HealthTech",
      college: "IIT Madras",
      stage: "Growth",
      fundingStatus: "Series A",
      featured: true,
    },
    {
      name: "SmartKart",
      tagline: "The Future of Retail Shopping",
      description:
        "Revolutionizing retail with cashier-less AI shopping experience. Smart carts with face recognition checkout make shopping seamless and efficient for modern consumers.",
      image:
        "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800&h=600&fit=crop",
      category: "AI & ML",
      college: "IIT Delhi",
      stage: "MVP",
      fundingStatus: "Seed Funded",
      featured: false,
    },
    {
      name: "GreenNest",
      tagline: "Building Sustainable Homes",
      description:
        "Sustainable housing solutions with eco-materials that reduce carbon footprint. We create affordable, environmentally friendly homes using recycled materials and solar energy.",
      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop",
      category: "CleanTech",
      college: "IIT Bombay",
      stage: "Early Stage",
      fundingStatus: "Bootstrapped",
      featured: false,
    },
    {
      name: "MediBot",
      tagline: "Precision Robotic Surgery",
      description:
        "Robotics in surgery for precision healthcare. Our surgical robots with AI guidance enable remote monitoring and enhance surgical accuracy for better patient outcomes.",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
      category: "HealthTech",
      college: "IIT Madras",
      stage: "Scale-up",
      fundingStatus: "Series B+",
      featured: false,
    },
    {
      name: "EduFlow",
      tagline: "Personalized Learning for Everyone",
      description:
        "Personalized AI-based learning assistant that adapts to your pace. With progress tracking and gamified education, learning becomes engaging and effective for students of all ages.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      category: "EdTech",
      college: "IIT Delhi",
      stage: "Growth",
      fundingStatus: "Series A",
      featured: true,
    },
    {
      name: "FoodFusion",
      tagline: "Nutrition Meets Taste",
      description:
        "Smart F&B startup blending nutrition with taste using AI recipes. We offer healthy fast food options and meal subscriptions that don't compromise on flavor.",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
      category: "Food & Beverage",
      college: "IIT Kharagpur",
      stage: "Idea",
      fundingStatus: "Pre-Seed",
      featured: false,
    },
  ];

  const [filters, setFilters] = useState({
    category: "All",
    college: "All",
    stage: "All",
    fundingStatus: "All",
    featured: false,
  });

  const handleFilterChange = (updatedFilters) => {
    setFilters((prev) => ({ ...prev, ...updatedFilters }));
  };

  const filteredStartups = startups.filter((startup) => {
    const categoryMatch = filters.category === "All" || startup.category === filters.category;
    const collegeMatch = filters.college === "All" || startup.college === filters.college;
    const stageMatch = filters.stage === "All" || startup.stage === filters.stage;
    const fundingMatch =
      filters.fundingStatus === "All" || startup.fundingStatus === filters.fundingStatus;
    const featuredMatch = !filters.featured || startup.featured;

    return categoryMatch && collegeMatch && stageMatch && fundingMatch && featuredMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* <Header /> */}

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

          {/* ✅ Pass filter handler */}
          <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
        </div>

        {/* Startup Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredStartups.map((startup, index) => (
            <StartupCard key={index} {...startup} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default DiscoverStartup;
