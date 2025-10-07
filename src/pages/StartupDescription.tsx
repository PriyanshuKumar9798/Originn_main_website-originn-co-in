"use client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StartupHeader } from "@/components/StartupHeader";
import { ProductCard } from "@/components/ProductCard";
import { TeamMember } from "@/components/TeamMember";
import { Footer } from "@/components/Footer";
import { Building2, GraduationCap } from "lucide-react";

const API_BASE = "https://firstfound-platform-backend.vercel.app";

const StartupDescription = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<"about" | "posts" | "team" | "jobs">("about");
  const [startup, setStartup] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStartup = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/featureProducts/${id}`);
        if (!res.ok) throw new Error("Failed to fetch startup data");
        const data = await res.json();
        setStartup(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchStartup();
  }, [id]);

  if (loading) return <div className="text-center py-32 text-lg font-medium">Loading startup details...</div>;
  if (error) return <div className="text-center text-red-500 py-32">{error}</div>;
  if (!startup) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Startup Header */}
      <StartupHeader
        name={startup.companyName}
        logo={startup.logo}
        coverPhoto={startup.coverPhoto}
        category={startup.category}
        website={startup.website}
        linkedin={startup.linkedin}
        instagram={startup.instagram}
        twitter={startup.twitter}
        facebook={startup.facebook}
        youtube={startup.youtube}
        institute={startup.institute?.name}
      />
  
      {/* Tabs */}
      <div className="sticky top-0 z-20 bg-white shadow-sm border-b">
  <div className="container mx-auto px-4 md:px-8 max-w-6xl">
    <nav className="flex gap-6">
      {["about", "posts", "team", "jobs"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab as any)}
          className={`py-3 px-3 text-sm font-semibold border-b-2 transition-colors ${
            activeTab === tab
              ? "border-primary text-primary"
              : "border-transparent text-gray-500 hover:text-gray-800"
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </nav>
  </div>
</div>


<main className="py-16">
  {activeTab === "about" && (
    <section className="relative container mx-auto px-4 md:px-8 max-w-6xl grid lg:grid-cols-[1fr_350px] gap-12">
      {/* Main Content */}
      <div className="space-y-12">
        {/* Company Overview */}
        <div className="group">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-shadow">
              <Building2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-1">{startup.companyName}</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
            </div>
          </div>
          <div className="pl-16">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {startup.description}
            </p>
          </div>
        </div>
      {/* </div> */}


              {/* Institute Info */}
              {startup.institute && (
  <div className="group">
    <div className="flex items-start gap-4 mb-6">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-shadow">
        <GraduationCap className="w-6 h-6 text-primary-foreground" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">{startup.institute.name}</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
      </div>
    </div>
    <div className="pl-16 space-y-3">
      {startup.institute.highlight && (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
          <span className="font-bold text-primary text-lg">{startup.institute.highlight}</span>
        </div>
      )}
      <p className="text-muted-foreground text-lg leading-relaxed">
        {startup.institute.description}
      </p>
    </div>
  </div>
)}


              {/* Featured Product */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">About Product</h3>
                <ProductCard
  title={startup.productName || startup.targetMarket} // Use targetMarket if productName missing
  description={startup.description}
  tags={[startup.category, startup.productType]} // productType from backend
  thumbnail={startup.productThumbnail}
  link={startup.productLink}
/>

              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 h-fit bg-gradient-to-br from-primary/80 to-primary/60 rounded-2xl p-6 text-white shadow-xl">
              <h2 className="text-2xl font-bold mb-4">Company Info</h2>
              <div className="space-y-2">
                <p><span className="font-semibold">Registration:</span> {startup.registrationNo}</p>
                <p><span className="font-semibold">Category:</span> {startup.category}</p>
                <p>
                  <span className="font-semibold">Website:</span>{" "}
                  <a href={startup.website} target="_blank" className="underline hover:text-gray-200">
                    {startup.website}
                  </a>
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Team Section */}
        {activeTab === "team" && (
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {startup.founders.concat(startup.team || []).map((member: any, i: number) => (
                  <TeamMember key={i} {...member} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Posts */}
        {activeTab === "posts" && (
          <div className="text-center text-gray-500 py-32">
            No posts yet for this startup.
          </div>
        )}

        {/* Jobs */}
        {activeTab === "jobs" && (
          <div className="text-center text-gray-500 py-32">
            No job openings listed yet.
          </div>
        )}
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default StartupDescription;
