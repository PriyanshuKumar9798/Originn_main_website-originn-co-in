import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BenefitCard } from "./BenefitCard";
import { Shield, Eye, Sparkles, Video, LogIn, Home } from "lucide-react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      icon: Eye,
      title: "Be Part of the Creation Journey",
      description: "Follow progress from prototype to production with live milestone tracking and authentic behind-the-scenes updates from founders.",
    },
    {
      icon: Video,
      title: "Experience Products Before They Exist",
      description: "Bridge the touch-and-feel gap with mandatory HD videos, interactive 360° views, and ultra-high-resolution images of prototypes.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in:", { email, password });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#192a51] text-white">
      {/* Mobile Header */}
      <div className="lg:hidden px-6 py-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" 
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)`
          }}
        />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-2">Originn</h2>
          <p className="text-sm text-white/80 leading-relaxed">
            Discover and Back India's Future, With Confidence
          </p>
        </div>
      </div>

      {/* Left Section - Benefits (Desktop) */}
      <div className="hidden lg:flex lg:w-3/5 relative overflow-hidden bg-[#192a51]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30" 
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%),
                               radial-gradient(circle at 80% 80%, rgba(255,255,255,0.03) 0%, transparent 50%),
                               radial-gradient(circle at 40% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)`
            }}
          />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-white/8 rounded-full blur-2xl animate-pulse-glow" />
        </div>

        <div className="relative z-10 flex flex-col justify-center px-16 py-20 w-full">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-4 tracking-tight">Originn</h2>
            <p className="text-2xl text-white/90 leading-relaxed max-w-2xl font-light">
              Join Originn: Discover and Back India's Future, With Confidence
            </p>
          </div>

          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
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
                // textColor="white"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Sign In Card */}
      <div className="w-full lg:w-2/5 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative flex-1">
        <div className="absolute inset-0 bg-white" />
        
        <div className="w-full max-w-md relative z-10">
          <Card className="shadow-elegant border-white/30 bg-[#192a51] text-white">
            <CardHeader className="space-y-2 sm:space-y-3 pb-4 sm:pb-6 px-4 sm:px-6">
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/10 flex items-center justify-center mb-1 sm:mb-2">
                <LogIn className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">Welcome Back</CardTitle>
              <CardDescription className="text-center text-sm sm:text-base text-white/70">
                Sign in to your account
              </CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4 sm:space-y-5 px-4 sm:px-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/80 text-sm sm:text-base">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-10 sm:h-11 text-sm sm:text-base transition-all duration-200 focus:shadow-soft bg-[#192a51] text-white placeholder-white/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white/80 text-sm sm:text-base">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="h-10 sm:h-11 text-sm sm:text-base pr-10 transition-all duration-200 focus:shadow-soft bg-[#192a51] text-white placeholder-white/50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                    >
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-10 sm:h-11 text-sm sm:text-base font-semibold shadow-soft hover:shadow-elegant transition-all duration-300 bg-white/10 text-white"
                >
                  Sign In
                </Button>
              </CardContent>
            </form>

            <CardFooter className="flex flex-col space-y-3 sm:space-y-4 pt-2 px-4 sm:px-6">
              <div className="text-l sm:text-l text-center text-white/70">
                Don't have an account?{" "}
                <Link to="/register" className="text-white hover:text-white/90 font-semibold transition-colors">
                  Register here
                </Link>
              </div>
              
              <Link
                to="/"
                className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
              >
                <Home className="w-3 h-3 sm:w-4 sm:h-4" />
                Back to Home
              </Link>
            </CardFooter>
          </Card>

          {/* Mobile Benefits Summary */}
          <div className="lg:hidden mt-6 space-y-4">
            <h3 className="text-sm font-semibold text-white/70 text-center mb-4">
              Why Join Originn?
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {benefits.slice(0, 4).map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center p-3 rounded-lg bg-white/10">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-2">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-xs font-medium text-white">{benefit.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
