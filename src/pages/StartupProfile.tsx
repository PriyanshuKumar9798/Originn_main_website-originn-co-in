import { Navigation } from "@/components/Navigation";
import { StartupHeader } from "@/components/StartupHeader";
import { InfoCard } from "@/components/InfoCard";
import { ProductCard } from "@/components/ProductCard";
import { TeamMember } from "@/components/TeamMember";
import { Footer } from "@/components/Footer";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";

const StartupProfile = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      designation: "Founder & CEO",
      institute: "IIT Delhi",
      photo: teamMember1,
      bio: "10+ years in fintech and startup ecosystem. Previously led product at a unicorn startup.",
      email: "rajesh@originn.com",
    },
    {
      name: "Priya Sharma",
      designation: "CTO",
      institute: "IIT Bombay",
      photo: teamMember2,
      bio: "Expert in blockchain and secure payment systems. Former tech lead at major fintech company.",
      email: "priya@originn.com",
    },
    {
      name: "Amit Patel",
      designation: "Head of Product",
      institute: "IIT Delhi",
      photo: teamMember3,
      bio: "Product strategist with focus on user experience. Built products used by millions.",
      email: "amit@originn.com",
    },
    {
      name: "Neha Gupta",
      designation: "Lead Designer",
      institute: "NID Ahmedabad",
      photo: teamMember4,
      bio: "Award-winning designer specializing in fintech and SaaS platforms.",
      email: "neha@originn.com",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <StartupHeader />

      <main className="container mx-auto px-4 md:px-8 py-12 space-y-12">
        {/* Startup Description */}
        <InfoCard title="Startup Description">
          <p className="text-base leading-relaxed text-card-foreground/90">
            Originn is a comprehensive, multi-sided platform engineered to solve the "tripartite trust deficit" 
            that exists in the Indian market between product backers, startups, and investors. It is not merely 
            a pre-order or crowdfunding website, but a curated innovation ecosystem designed to discover, validate, 
            and fund the next generation of Indian products and ventures. The platform's foundational principle is 
            to move beyond being a passive facilitator and become an active manager of risk and a custodian of trust 
            for all its users.
          </p>
        </InfoCard>

        {/* Institute Information */}
        <InfoCard title="Institute Name of the Startup">
          <p className="text-base leading-relaxed mb-4">
            <strong className="text-primary text-lg">Indian Institute of Technology (IIT) Delhi</strong>
          </p>
          <p className="text-base leading-relaxed text-card-foreground/90">
            IIT Delhi is one of India's premier institutions for technology and innovation, known for fostering 
            entrepreneurship and cutting-edge research. The institute's strong focus on practical problem-solving 
            and industry partnerships makes it an ideal incubation ground for startups like Originn that aim to 
            transform traditional industries through technology. The startup has access to world-class mentorship, 
            research facilities, and a vibrant ecosystem of fellow entrepreneurs and investors.
          </p>
        </InfoCard>

        {/* Stage of Startup */}
        <InfoCard title="Stage of the Startup">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg border border-primary/20 mb-4">
            Current Stage: Seed Stage
          </div>
          <p className="text-base leading-relaxed text-card-foreground/90 mb-4">
            Originn is currently in the <strong>seed stage</strong> with a functional MVP (Minimum Viable Product) 
            and initial traction in the market. The platform has successfully onboarded early adopters including 
            several startups and backers, validating the core value proposition. The team is now focused on:
          </p>
          <ul className="list-disc list-inside space-y-3 text-base text-card-foreground/90">
            <li>Expanding the user base across multiple Indian cities</li>
            <li>Building strategic partnerships with incubators and accelerators</li>
            <li>Enhancing platform features based on user feedback</li>
            <li>Preparing for Series A funding to scale operations</li>
          </ul>
        </InfoCard>

        {/* Product Section */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            About Product
            <span className="h-1 flex-1 bg-gradient-to-r from-primary/30 to-transparent rounded-full" />
          </h2>
          <ProductCard />
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            Team Details
            <span className="h-1 flex-1 bg-gradient-to-r from-primary/30 to-transparent rounded-full" />
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamMember key={member.email} {...member} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StartupProfile;