"use client";
import { useEffect, useState } from "react";
import StartupSection from "@/components/StartupSection";

interface Startup {
  _id: string;
  companyName: string;
  about: string;
  description: string;
  address: string;
  category?: string;
  founderDetails?: string[];
  image?: string;
  tagline?: string;
}

const API_BASE =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    : "https://backend-new-originn.vercel.app";

const Home = () => {
  const [startups, setStartups] = useState<Startup[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch startups
  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const res = await fetch(`${[API_BASE]}/api/company/`);
        const data = await res.json();
        console.log("companuis at hoem", data);

        setStartups(data);
      } catch (error) {
        console.error("Error fetching startups: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStartups();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading startups...</div>;
  }

  // Filters
  const featuredStartups = startups.slice(0, 5);
  const deepTechStartups = startups.filter((s) =>
    s.category?.toLowerCase().includes("healthcare")
  );
  console.log("deepTechStartups", deepTechStartups);

  const consumerTechStartups = startups.filter((s) =>
    s.category?.toLowerCase().includes("consumer tech")
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1">
        <StartupSection
          title="Featured Startups"
          subtitle="Explore innovative startups from India's top innovation hubs"
          startups={featuredStartups.map((s) => ({
            id: s._id,
            name: s.companyName,
            category: s.category ?? "Unknown",
            description: s.description,
            image:
              s.image ??
              "https://images.pexels.com/photos/34155605/pexels-photo-34155605.jpeg",
            tagline: s.tagline,
            creator: s.about,
          }))}
        />

        <StartupSection
          title="Startups in HealthCare"
          subtitle="Advanced technology ventures pushing boundaries"
          startups={deepTechStartups.map((s) => ({
            id: s._id,
            name: s.companyName,
            category: s.category ?? "Healthcare",
            description: s.description,
            image:
              s.image ??
              "https://images.pexels.com/photos/34155605/pexels-photo-34155605.jpeg",
            tagline: s.tagline,
            creator: s.about,
          }))}
        />

        <StartupSection
          title="Startups in Consumer Tech"
          subtitle="Consumer-focused innovations for everyday life"
          startups={consumerTechStartups.map((s) => ({
            id: s._id,
            name: s.companyName,
            category: s.category ?? "Consumer Tech",
            description: s.description,
            image: s.image ?? "https://placehold.co/400x300",
            tagline: s.tagline,
            creator: s.about,
          }))}
        />
      </main>
    </div>
  );
};

export default Home;
