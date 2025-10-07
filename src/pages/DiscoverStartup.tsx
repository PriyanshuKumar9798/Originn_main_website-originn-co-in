"use client";
import { useState, useEffect } from "react";
import { Filter, X, Rocket } from "lucide-react";
import StartupCard from "@/components/StartupCard";

const institutions = [
  "Custom",
  "IIT Madras", "IIT Delhi", "IIT Bombay", "IIT Kanpur", "IIT Kharagpur", "IIT Roorkee", "IIT Guwahati",
  "IIT Hyderabad", "IIT Indore", "IIT (BHU) Varanasi", "IIT ISM Dhanbad", "IIT Gandhinagar", "IIT Ropar",
  "IIT Patna", "IIT Jodhpur", "NIT Tiruchirappalli", "NIT Surathkal", "NIT Rourkela", "NIT Warangal",
  "NIT Calicut", "NIT Nagpur", "NIT Jaipur", "NIT Silchar", "NIT Durgapur", "NIT Kurukshetra", "NIT Allahabad",
  "NIT Jalandhar", "NIT Surat", "NIT Patna", "NIT Delhi", "IIM Ahmedabad", "IIM Bangalore", "IIM Kozhikode",
  "IIM Calcutta", "IIM Lucknow", "IIM Mumbai", "IIM Indore", "IIM Raipur", "IIM Rohtak", "IIM Udaipur",
  "IIM Trichy", "IIM Ranchi", "IIM Kashipur", "IIM Visakhapatnam", "IIM Nagpur", "BITS Pilani", "VIT Vellore",
  "Manipal Institute of Technology", "Thapar Institute of Engineering", "Amrita Vishwa Vidyapeetham",
  "BIT Mesra", "IIIT Hyderabad", "SRM Chennai", "KIIT Bhubaneswar", "Ramaiah Bangalore", "PSG Coimbatore",
  "DA-IICT Gandhinagar", "SASTRA Thanjavur", "BMS Bangalore", "SPCE Mumbai", "LNMIIT Jaipur", "JSS Noida",
  "Galgotias University", "Amity Noida", "LPU Jalandhar", "XLRI Jamshedpur", "SPJIMR Mumbai", "MDI Gurgaon",
  "SIBM Pune", "NMIMS Mumbai", "ISB Hyderabad", "Great Lakes Chennai", "IMT Ghaziabad", "MICA Ahmedabad",
  "GIM Goa", "TAPMI Manipal", "XIMB Bhubaneswar", "KJ Somaiya Mumbai", "FORE Delhi", "LIBA Chennai",
  "WeSchool Mumbai", "IRMA Anand", "BIMTECH Greater Noida", "IBS Hyderabad",
];

const categories = [
  "All", "Custom", "AI & Deep Tech", "Healthcare & Life Sciences", "FinTech",
  "SaaS & Enterprise Tech", "Consumer Tech", "Sustainability & Climate Tech",
  "EdTech", "Media & Entertainment", "Logistics & Supply Chain",
];

const productTypes = [
  "All", "Physical Product (Hardware)", "SaaS (Software as a Service)",
  "Digital Product", "Service"
];
const targetMarkets = ["All", "B2C", "B2B", "D2C"];
const stages = [
  "All", "Custom", "Idea Stage", "Prototype Stage",
  "Pre-Revenue Stage", "Early Revenue Stage", "Series A/B/C Stage"
];

// ✅ FilterPanel Component
const FilterPanel = ({ filters, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempFilters, setTempFilters] = useState(filters);
  const [searchTerm, setSearchTerm] = useState("");

  const handleTempFilterChange = (key: string, value: any) =>
    setTempFilters((prev) => ({ ...prev, [key]: value }));

  const applyFilters = () => {
    onFilterChange(tempFilters);
    setIsOpen(false);
  };

  const cancelFilters = () => {
    setTempFilters(filters);
    setIsOpen(false);
  };

  const resetFilters = () => {
    const defaultFilters = {
      category: "All",
      productType: "All",
      stage: "All",
      targetMarket: "All",
      featured: false,
      institution: "All",
    };
    setTempFilters(defaultFilters);
    onFilterChange(defaultFilters);
    setIsOpen(false);
  };

  const filteredInstitutions = institutions.filter((inst) =>
    inst.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-card border rounded-lg"
      >
        <Filter className="h-4 w-4" />
        <span>Filters</span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={cancelFilters} />
          <div className="absolute right-0 top-12 w-80 bg-card border rounded-lg shadow-xl p-5 z-50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Filters</h3>
              <button onClick={cancelFilters}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto">
              {/* Category */}
              <div>
                <label>Category</label>
                <select
                  value={tempFilters.category}
                  onChange={(e) =>
                    handleTempFilterChange("category", e.target.value)
                  }
                  className="w-full border rounded-md p-1 mt-1"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Product Type */}
              <div>
                <label>Product Type</label>
                <select
                  value={tempFilters.productType}
                  onChange={(e) =>
                    handleTempFilterChange("productType", e.target.value)
                  }
                  className="w-full border rounded-md p-1 mt-1"
                >
                  {productTypes.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* Stage */}
              <div>
                <label>Stage</label>
                <select
                  value={tempFilters.stage}
                  onChange={(e) =>
                    handleTempFilterChange("stage", e.target.value)
                  }
                  className="w-full border rounded-md p-1 mt-1"
                >
                  {stages.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Target Market */}
              <div>
                <label>Target Market</label>
                <select
                  value={tempFilters.targetMarket}
                  onChange={(e) =>
                    handleTempFilterChange("targetMarket", e.target.value)
                  }
                  className="w-full border rounded-md p-1 mt-1"
                >
                  {targetMarkets.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* ✅ Institute Filter */}
              <div>
                <label>Institute</label>
                <input
                  type="text"
                  placeholder="Search institute..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border rounded-md p-1 mt-1 mb-1"
                />
                <select
                  value={tempFilters.institution}
                  onChange={(e) =>
                    handleTempFilterChange("institution", e.target.value)
                  }
                  className="w-full border rounded-md p-1"
                >
                  <option value="All">All</option>
                  {filteredInstitutions.map((inst) => (
                    <option key={inst} value={inst}>
                      {inst}
                    </option>
                  ))}
                </select>
              </div>

              {/* Featured */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={tempFilters.featured}
                  onChange={(e) =>
                    handleTempFilterChange("featured", e.target.checked)
                  }
                  id="featured"
                  className="w-4 h-4"
                />
                <label htmlFor="featured">Featured Only</label>
              </div>

              <button
                onClick={resetFilters}
                className="w-full py-1 mt-2 bg-gray-200 rounded-md"
              >
                Reset Filters
              </button>
            </div>

            <div className="flex gap-3 mt-5 pt-4 border-t">
              <button
                onClick={cancelFilters}
                className="flex-1 py-1 border rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={applyFilters}
                className="flex-1 py-1 bg-primary text-white rounded-md"
              >
                Apply
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// ✅ DiscoverStartup Page
interface Founder {
  name: string;
  designation?: string;
  institution?: string;
  photo?: string | null;
}

interface Startup {
  _id: string;
  companyName: string;
  category?: string;
  productType?: string;
  targetMarket?: string;
  stage?: string;
  description?: string;
  logo?: string | null;
  coverPhoto?: string | null;
  founders: Founder[];
  featured?: boolean;
}

const API_BASE = "https://firstfound-platform-backend.vercel.app";

const DiscoverStartup = () => {
  const [startups, setStartups] = useState<Startup[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: "All",
    productType: "All",
    stage: "All",
    targetMarket: "All",
    featured: false,
    institution: "All",
  });

  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const res = await fetch(`${API_BASE}/featureProducts`, { cache: "no-store" });
        const data = await res.json();
        setStartups(data.data);
      } catch (err) {
        console.error("Failed to fetch startups");
      } finally {
        setLoading(false);
      }
    };
    fetchStartups();
  }, []);

  const handleFilterChange = (updatedFilters: typeof filters) => {
    setFilters((prev) => ({ ...prev, ...updatedFilters }));
  };

  // ✅ Apply all filters including Institution
  const filteredStartups = startups.filter((startup) => {
    const categoryMatch =
      filters.category === "All" || startup.category === filters.category;
    const productTypeMatch =
      filters.productType === "All" || startup.productType === filters.productType;
    const stageMatch =
      filters.stage === "All" || startup.stage === filters.stage;
    const targetMarketMatch =
      filters.targetMarket === "All" || startup.targetMarket === filters.targetMarket;
    const featuredMatch = !filters.featured || startup.featured;
    const institutionMatch =
      filters.institution === "All" ||
      startup.founders?.some(
        (f) =>
          f.institution &&
          f.institution.toLowerCase().includes(filters.institution.toLowerCase())
      );

    return (
      categoryMatch &&
      productTypeMatch &&
      stageMatch &&
      targetMarketMatch &&
      featuredMatch &&
      institutionMatch
    );
  });

  if (loading) return <div className="text-center py-10">Loading startups...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
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
              id={s._id}
              name={s.companyName}
              category={s.category ?? "Unknown"}
              description={s.description ?? ""}
              image={s.coverPhoto ?? s.logo ?? "https://placehold.co/400x300"}
              tagline={`${s.productType || ""} - ${s.targetMarket || ""}`}
              creator={s.founders.map((f) => f.name).join(", ")}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default DiscoverStartup;
