"use client";
import { useEffect, useState } from "react";
import StartupSection from "@/components/StartupSection";

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

interface Product {
  _id: string;
  companyName: string;
  registrationNo: string;
  website?: string;
  category?: string;
  productType?: string;
  description?: string;
  logo?: string | null;
  coverPhoto?: string | null;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  founders: Founder[];
  team?: TeamMember[];
  status?: string;
}

const API_BASE ="https://firstfound-platform-backend.vercel.app";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_BASE}/featureProducts`, { cache: "no-store" });
        const data = await res.json();
        setProducts(data.data);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  if (loading) return <div className="text-center py-10">Loading startups...</div>;
  if (error) return <div className="text-center py-10 text-red-600">{error}</div>;

  // Filters
  const featuredStartups = products.slice(0, 5);
  const healthcareStartups = products.filter((s) =>
    s.category?.toLowerCase().includes("healthcare")
  );
  const consumerTechStartups = products.filter((s) =>
    s.category?.toLowerCase().includes("consumer tech")
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1">
        <StartupSection
          title="Featured Startups"
          subtitle="Explore innovative startups"
          startups={featuredStartups.map((s) => ({
            id: s._id,
            name: s.companyName,
            category: s.category ?? "Unknown",
            description: s.description ?? "",
            image: s.coverPhoto ?? s.logo ?? "https://placehold.co/400x300",
            tagline: s.productType,
            creator: s.founders.map((f) => f.name).join(", "),
          }))}
        />

        <StartupSection
          title="Startups in HealthCare"
          subtitle="Advanced technology ventures pushing boundaries"
          startups={healthcareStartups.map((s) => ({
            id: s._id,
            name: s.companyName,
            category: s.category ?? "Healthcare",
            description: s.description ?? "",
            image: s.coverPhoto ?? s.logo ?? "https://placehold.co/400x300",
            tagline: s.productType,
            creator: s.founders.map((f) => f.name).join(", "),
          }))}
        />

        <StartupSection
          title="Startups in Consumer Tech"
          subtitle="Consumer-focused innovations for everyday life"
          startups={consumerTechStartups.map((s) => ({
            id: s._id,
            name: s.companyName,
            category: s.category ?? "Consumer Tech",
            description: s.description ?? "",
            image: s.coverPhoto ?? s.logo ?? "https://placehold.co/400x300",
            tagline: s.productType,
            creator: s.founders.map((f) => f.name).join(", "),
          }))}
        />
      </main>
    </div>
  );
};

export default Home;
