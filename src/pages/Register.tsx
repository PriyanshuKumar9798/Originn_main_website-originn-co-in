import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, UserPlus, Home, Shield, Sparkles, Eye as EyeIcon, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { BenefitCard } from "./BenefitCard";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const benefits = [
    {
      icon: Shield,
      title: "Back with Zero Risk",
      description: "Your pre-order funds are 100% protected in a secure, RBI-regulated digital escrow account. Money is released only after verified project milestones.",
    },
    {
      icon: Sparkles,
      title: "Discover the Undiscovered",
      description: "Get exclusive access to a curated showcase of India's most innovative products from top incubators, accelerators, and design schools.",
    },
    {
      icon: EyeIcon,
      title: "Be Part of the Creation Journey",
      description: "Follow progress from prototype to production with live milestone tracking and authentic behind-the-scenes updates from founders.",
    },
    {
      icon: Video,
      title: "Experience Products Before They Exist",
      description: "Bridge the touch-and-feel gap with mandatory HD videos, interactive 360° views, and ultra-high-resolution images of prototypes.",
    },
  ];

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        "https://firstfound-platform-backend.vercel.app/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Registration failed");
        return;
      }

      alert("Registration successful! Please sign in.");
      window.location.href = "/signin";
    } catch {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#192a51] text-white">
      {/* Left Section - Benefits (Desktop) */}
      <div className="hidden lg:flex lg:w-3/5 relative overflow-hidden bg-[#192a51]">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%),
                               radial-gradient(circle at 80% 80%, rgba(255,255,255,0.03) 0%, transparent 50%),
                               radial-gradient(circle at 40% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)`,
            }}
          />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-white/8 rounded-full blur-2xl animate-pulse-glow" />
        </div>

        <div className="relative z-10 flex flex-col justify-center px-16 py-20 w-full">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-4 tracking-tight">Originn</h2>
            <p className="text-2xl text-white/90 leading-relaxed max-w-2xl font-light">
              Join Originn: Discover and Back India's Future, With Confidence
            </p>
          </div>

          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <h1 className="text-3xl font-semibold mb-4">More than just a product</h1>
            <p className="text-lg text-white/75 leading-relaxed max-w-2xl">
              Get a secure, transparent, and exciting front-row seat to Indian innovation.
            </p>
          </div>

          <div className="space-y-2 max-w-3xl border-l-2 border-white/20 pl-8">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={200 + index * 100}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Register Form */}
      <div className="w-full lg:w-2/5 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative flex-1">
        <div className="absolute inset-0 bg-white" />

        <div className="w-full max-w-md relative z-10">
          <div className="bg-[#192a51] rounded-2xl shadow-lg p-8 space-y-6 text-white">
            <div className="text-center space-y-2">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <UserPlus className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-white">Create Account</h1>
              <p className="text-white/80">Join us today</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Full Name</label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="h-11 bg-[#192a51] text-white placeholder-white/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Email</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-11 bg-[#192a51] text-white placeholder-white/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Password</label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    className="h-11 pr-10 bg-[#192a51] text-white placeholder-white/50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Confirm Password</label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                    className="h-11 pr-10 bg-[#192a51] text-white placeholder-white/50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-white/10 hover:bg-white/20 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <div className="text-center space-y-3 mt-4">
              <p className="text-l text-white/70">
                Already have an account?{" "}
                <button
                  onClick={() => (window.location.href = "/signin")}
                  className="text-white font-semibold hover:underline"
                >
                  Sign in here
                </button>
              </p>
              <button
                onClick={() => (window.location.href = "/")}
                className="text-sm text-white/50 hover:text-white flex items-center justify-center gap-2 mx-auto"
              >
                <Home className="h-4 w-4" />
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
