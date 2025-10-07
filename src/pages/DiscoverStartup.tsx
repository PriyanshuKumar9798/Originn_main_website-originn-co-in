"use client";
import { Filter, X } from "lucide-react";

const FilterPanel = ({ filters, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempFilters, setTempFilters] = useState(filters);

  const categories = ["All", "HealthTech", "AI & ML", "CleanTech", "EdTech", "Food & Beverage"];
  const stages = ["All", "Idea", "MVP", "Early Stage", "Growth", "Scale-up"];

  const handleTempFilterChange = (key, value) => setTempFilters((prev) => ({ ...prev, [key]: value }));
  const applyFilters = () => { onFilterChange(tempFilters); setIsOpen(false); };
  const cancelFilters = () => { setTempFilters(filters); setIsOpen(false); };
  const resetFilters = () => { 
    const defaultFilters = { category: "All", stage: "All", featured: false };
    setTempFilters(defaultFilters); 
    onFilterChange(defaultFilters); 
    setIsOpen(false); 
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 px-4 py-2 bg-card border rounded-lg">
        <Filter className="h-4 w-4" />
        <span>Filters</span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={cancelFilters} />
          <div className="absolute right-0 top-12 w-80 bg-card border rounded-lg shadow-xl p-5 z-50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Filters</h3>
              <button onClick={cancelFilters}><X className="h-5 w-5" /></button>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto">
              <div>
                <label>Category</label>
                <select value={tempFilters.category} onChange={(e) => handleTempFilterChange("category", e.target.value)}>
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label>Stage</label>
                <select value={tempFilters.stage} onChange={(e) => handleTempFilterChange("stage", e.target.value)}>
                  {stages.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <input type="checkbox" checked={tempFilters.featured} onChange={(e) => handleTempFilterChange("featured", e.target.checked)} />
                <label>Featured Only</label>
              </div>
              <button onClick={resetFilters}>Reset Filters</button>
            </div>

            <div className="flex gap-3 mt-5 pt-4 border-t">
              <button onClick={cancelFilters}>Cancel</button>
              <button onClick={applyFilters}>Apply</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
// ✅ DiscoverStartup Page
"use client";
import { useState, useEffect } from "react";
import StartupCard from "@/components/StartupCard";
import { Rocket } from "lucide-react";

interface Founder {
  name: string;
  designation: string;
  institution: string;
  photo?: string | null;
}

interface TeamMember {
  name: string;
  designation: string;
  institution: string;
  photo?: string | null;
}

interface Startup {
  _id: string;
  companyName: string;
  category?: string;
  productType?: string;
  description?: string;
  logo?: string | null;
  coverPhoto?: string | null;
  founders: Founder[];
  team?: TeamMember[];
  status?: string;
  featured?: boolean;
}

const API_BASE = "https://firstfound-platform-backend.vercel.app";

const DiscoverStartup = () => {
  const [startups, setStartups] = useState<Startup[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: "All",
    stage: "All",
    featured: false,
  });

  // Fetch startups from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_BASE}/featureProducts`, { cache: "no-store" });
        const data = await res.json();
        setStartups(data.data);
      } catch (err) {
        console.log("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (updatedFilters: typeof filters) => {
    setFilters((prev) => ({ ...prev, ...updatedFilters }));
  };

  const filteredStartups = startups.filter((startup) => {
    const categoryMatch =
      filters.category === "All" || startup.category === filters.category;
    const featuredMatch = !filters.featured || startup.featured;
    return categoryMatch && featuredMatch;
  });

  if (loading) return <div className="text-center py-10">Loading startups...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
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

          <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
        </div>

        {/* Startup Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredStartups.map((s) => (
            <StartupCard
            key={s._id}
            id={s._id} // 👈 pass ID here
            name={s.companyName}
            category={s.category ?? "Unknown"}
            description={s.description ?? ""}
            image={s.coverPhoto ?? s.logo ?? "https://placehold.co/400x300"}
            tagline={s.productType}
            creator={s.founders.map((f) => f.name).join(", ")}
          />
          ))}
        </div>
      </main>
    </div>
  );
};

export default DiscoverStartup;
