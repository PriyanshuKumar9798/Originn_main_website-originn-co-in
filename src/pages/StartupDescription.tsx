"use client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StartupHeader } from "@/components/StartupHeader";
import { ProductCard } from "@/components/ProductCard";
import { TeamMember } from "@/components/TeamMember";
import { Footer } from "@/components/Footer";
import { Building2, GraduationCap, TrendingUp,Package } from "lucide-react";

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
        // console.log(data.institute)
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchStartup();
  }, [id]);

  // console.log(startup.json())

  if (loading)
    return <div className="text-center py-32 text-lg font-medium">Loading startup details...</div>;
  if (error) return <div className="text-center text-red-500 py-32">{error}</div>;
  if (!startup) return null;

  return (
    <div className="min-h-screen bg-background">

      
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
      <div className="sticky top-0 z-10 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <nav className="flex gap-8">
            {["about", "posts", "team", "jobs"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`py-4 px-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Section */}
      <main className="bg-background">
        {activeTab === "about" && (
          <section className="relative min-h-[calc(100vh-20rem)]">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>
            
            <div className="relative container mx-auto px-4 md:px-8 max-w-6xl py-16">
              <div className="grid lg:grid-cols-[1fr_350px] gap-12">
                {/* Main Content */}
                <div className="space-y-12">
                  {/* Company Overview */}
                  <div className="group">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-shadow">
                        <Building2 className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-1">Company Overview</h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
                      </div>
                    </div>
                    <div className="pl-16">
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {startup.description}
                      </p>
                    </div>
                  </div>

                  {/* Institute Info */}
                  {startup.institute && (
                    <div className="group">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-shadow">
                          <GraduationCap className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-foreground mb-1">Institute</h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
                        </div>
                      </div>
                      <div className="pl-16">
                        {startup.institute.highlight && (
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg mb-3">
                            <span className="font-bold text-primary text-lg">
                              {startup.institute.highlight}
                            </span>
                          </div>
                        )}
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {startup.institute.description}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Product Section */}
                  <div className="pt-8">
                  <div className="flex items-center gap-4 mb-6">
      {/* Icon */}
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <Package className="w-6 h-6 text-primary" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-foreground">About Product</h3>
    </div>
                    {/* Product Info - vertically aligned */}
                    <div className="pl-14 space-y-3">
                      <div>
                        <span className="block text-xs text-black">Product Type</span>
                        <span className="block text-lg font-bold text-foreground">
                          {startup.productType || "N/A"}
                        </span>
                      </div>

                      <div>
                        <span className="block text-xs text-black">Target Market</span>
                        <span className="block text-lg font-bold text-foreground">
                          {startup.targetMarket || "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar - Current Stage */}
                <div className="lg:sticky lg:top-24 h-fit">
                  <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 text-primary-foreground shadow-2xl shadow-primary/20">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold">Current Stage</h2>
                    </div>
                    
                    <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                      <span className="text-sm font-semibold">
                        🚀 {startup.stage || startup.customStage || "Stage Info"}
                      </span>
                    </div>
                    
                    <p className="text-primary-foreground/90 leading-relaxed mb-6">
                      {startup.description || "Stage information not available."}
                    </p>
                    
                    {/* Product Details */}
                    <div className="space-y-4">
                      {startup.productType && (
                        <div className="flex items-start gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-white mt-2" />
                          <div className="flex-1">
                            <span className="text-xs text-primary-foreground/70 block">Product Type</span>
                            <span className="text-sm">{startup.productType}</span>
                          </div>
                        </div>
                      )}
                      {startup.targetMarket && (
                        <div className="flex items-start gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-white mt-2" />
                          <div className="flex-1">
                            <span className="text-xs text-primary-foreground/70 block">Target Market</span>
                            <span className="text-sm">{startup.targetMarket}</span>
                          </div>
                        </div>
                      )}
                      {startup.customCategory && (
                        <div className="flex items-start gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-white mt-2" />
                          <div className="flex-1">
                            <span className="text-xs text-primary-foreground/70 block">Custom Category</span>
                            <span className="text-sm">{startup.customCategory}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Quick Info */}
                    {startup.website && (
                      <div className="mt-8 pt-8 border-t border-white/20">
                        <div className="text-sm text-primary-foreground/80 mb-2">Quick Links</div>
                        <a 
                          href={startup.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm underline hover:text-white transition-colors"
                        >
                          Visit Website →
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Team Section */}
        {activeTab === "team" && (
          <section className="relative min-h-screen py-16">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/3 to-transparent pointer-events-none" />
            <div className="relative container mx-auto px-4 md:px-8 max-w-6xl">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-foreground mb-2">Meet Our Team</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mb-4" />
                <p className="text-muted-foreground text-lg">The minds behind {startup.companyName}'s innovation</p>
              </div>
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
          <section className="relative min-h-screen py-16">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/3 to-transparent pointer-events-none" />
            <div className="relative container mx-auto px-4 md:px-8 max-w-5xl">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-foreground mb-2">Latest Updates</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
              </div>
              <div className="text-center text-muted-foreground py-32">No posts yet for this startup.</div>
            </div>
          </section>
        )}

        {/* Jobs */}
        {activeTab === "jobs" && (
          <section className="relative min-h-screen py-16">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/3 to-transparent pointer-events-none" />
            <div className="relative container mx-auto px-4 md:px-8 max-w-6xl">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-foreground mb-2">Join Our Team</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
              </div>
              <div className="text-center text-muted-foreground py-32">No job openings listed yet.</div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default StartupDescription;
