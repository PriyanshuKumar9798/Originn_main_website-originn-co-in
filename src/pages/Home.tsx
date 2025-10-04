import Header from "@/components/Header";
// import Footer from "@/components/Footer";

import StartupSection from "@/components/StartupSection";

import FilterPanel from "@/components/FilterPanel";
import StartupCard from "@/components/StartupCard";
import { Rocket } from "lucide-react";

const Home = () => {
  const featuredStartups = [
    {
      name: "NanoMed Solutions",
      category: "Healthcare Tech",
      description: "Revolutionary nano-technology based drug delivery system for targeted cancer treatment with 95% precision rate.",
      tagline: "Precision medicine at the molecular level",
      creator: "Dr. Priya Sharma",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
    },
    {
      name: "GreenFlow Energy",
      category: "Clean Energy",
      description: "Next-generation solar panels with 40% increased efficiency using quantum dot technology. Perfect for residential and commercial applications.",
      tagline: "Harnessing the power of quantum innovation",
      creator: "GreenFlow Industries",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop",
    },
    {
      name: "AgriSense AI",
      category: "AgriTech",
      description: "AI-powered precision farming solution helping farmers increase yield by 30% while reducing water consumption by 40%.",
      tagline: "Smart farming for sustainable tomorrow",
      creator: "AgriSense Team",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop",
    },
    {
      name: "QuantumSecure",
      category: "CyberSecurity",
      description: "Post-quantum cryptography solutions for enterprise data protection. Future-proof security against quantum computing threats.",
      tagline: "Security that's quantum-ready",
      creator: "QuantumSecure Labs",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop",
    },
    {
      name: "BioPlast Innovations",
      category: "Sustainability",
      description: "Biodegradable packaging materials from agricultural waste. Decomposes in 90 days without leaving microplastics.",
      tagline: "Packaging that returns to nature",
      creator: "BioPlast Co.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop",
    },
  ];

  const featuredProducts = [
    {
      name: "SmartGrow Pod",
      category: "Home & Garden",
      description: "Automated indoor garden system with AI-controlled climate and nutrients. Grow fresh herbs and vegetables year-round.",
      tagline: "Your personal garden, reimagined",
      creator: "GrowTech Solutions",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&auto=format&fit=crop",
    },
    {
      name: "NeuroFit Band",
      category: "Wearable Tech",
      description: "Brain activity monitoring wearable for enhanced focus and productivity. Real-time neurofeedback to optimize your mental performance.",
      tagline: "Train your brain, unlock potential",
      creator: "NeuroFit Labs",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&auto=format&fit=crop",
    },
    {
      name: "PureAir Mini",
      category: "Air Quality",
      description: "Portable air purifier with medical-grade HEPA filtration system. Removes 99.97% of airborne particles including allergens and bacteria.",
      tagline: "Breathe clean, anywhere you go",
      creator: "PureAir Technologies",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    },
    {
      name: "EcoBottle Pro",
      category: "Sustainability",
      description: "Self-cleaning water bottle with UV-C sterilization technology. Eliminates 99.9% of germs in just 60 seconds.",
      tagline: "Pure hydration, zero effort",
      creator: "EcoBottle Inc.",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop",
    },
    {
      name: "StudyPod",
      category: "EdTech",
      description: "Smart desk accessory for enhanced learning with integrated AI assistant. Personalized study plans and real-time progress tracking.",
      tagline: "Your AI study companion",
      creator: "EduTech Innovations",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop",
    },
  ];

  const deepTechStartups = [
    {
      name: "NeuralCore AI",
      category: "Artificial Intelligence",
      description: "Advanced neural network architectures for edge computing applications. 10x faster inference with 50% less power consumption.",
      tagline: "AI that works at the edge",
      creator: "NeuralCore Research",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    },
    {
      name: "QuantumBits",
      category: "Quantum Computing",
      description: "Developing accessible quantum computing solutions for enterprises. Cloud-based quantum processing for complex optimization problems.",
      tagline: "Quantum computing, democratized",
      creator: "QuantumBits Corp.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop",
    },
    {
      name: "BioGen Labs",
      category: "Biotechnology",
      description: "Gene editing technology for rare disease treatment development. CRISPR-based therapies with unprecedented precision.",
      tagline: "Rewriting the future of medicine",
      creator: "BioGen Research",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop",
    },
    {
      name: "FusionTech Energy",
      category: "Nuclear Fusion",
      description: "Compact fusion reactor technology for clean energy generation. Net-positive energy production with zero carbon emissions.",
      tagline: "Bringing the power of stars to Earth",
      creator: "FusionTech Labs",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop",
    },
    {
      name: "SpaceTech Dynamics",
      category: "Aerospace",
      description: "Reusable rocket propulsion systems for small satellite launches. Making space access affordable with 90% cost reduction.",
      tagline: "Your gateway to orbit",
      creator: "SpaceTech Systems",
      image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&auto=format&fit=crop",
    },
  ];

  const consumerTechStartups = [
    {
      name: "StyleSync",
      category: "Fashion Tech",
      description: "AI-powered personal styling app with virtual wardrobe management. Get personalized outfit recommendations based on weather and occasion.",
      tagline: "Your AI fashion stylist",
      creator: "StyleSync Fashion",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop",
    },
    {
      name: "FoodieMatch",
      category: "Food & Beverage",
      description: "Smart meal planning app with personalized nutrition recommendations. AI-generated recipes based on your dietary preferences and goals.",
      tagline: "Nutrition made deliciously simple",
      creator: "FoodieMatch Team",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop",
    },
    {
      name: "HomeLuxe",
      category: "Smart Home",
      description: "Unified smart home platform connecting all your IoT devices seamlessly. Control everything from a single, intuitive interface.",
      tagline: "One app to rule your home",
      creator: "HomeLuxe Systems",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop",
    },
    {
      name: "WellnessHub",
      category: "Health & Fitness",
      description: "Comprehensive wellness platform with AI health coaching and tracking. Personalized fitness plans and real-time health insights.",
      tagline: "Your 24/7 wellness companion",
      creator: "WellnessHub Health",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop",
    },
    {
      name: "TravelEase",
      category: "Travel Tech",
      description: "Smart travel planning with real-time recommendations and bookings. AI itinerary builder that adapts to your travel style and budget.",
      tagline: "Travel smarter, not harder",
      creator: "TravelEase Global",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* <Header /> */}
      
      <main className="flex-1">
        <StartupSection 
          title="Featured Startups" 
          subtitle="Explore innovative startups from India's top innovation hubs"
          startups={featuredStartups} 
        />
        <StartupSection 
          title="Featured Products" 
          subtitle="Discover groundbreaking products ready for pre-order"
          startups={featuredProducts} 
        />
        <StartupSection 
          title="Startups in Deep Tech" 
          subtitle="Advanced technology ventures pushing boundaries"
          startups={deepTechStartups} 
        />
        <StartupSection 
          title="Startups in Consumer Tech" 
          subtitle="Consumer-focused innovations for everyday life"
          startups={consumerTechStartups} 
        />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;