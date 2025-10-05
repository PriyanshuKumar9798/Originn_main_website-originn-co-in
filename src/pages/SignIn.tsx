import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, LogIn, Home } from "lucide-react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Find user
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      // Save current user session
      localStorage.setItem("currentUser", JSON.stringify(user));
      // Navigate to dashboard - use window.location for navigation
      window.location.href = "/";
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <LogIn className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="h-11 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              Sign In
            </Button>
          </form>

          <div className="text-center space-y-3">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={() => window.location.href = "/register"}
                className="text-blue-600 font-semibold hover:underline"
              >
                Register here
              </button>
            </p>
            <button
              onClick={() => window.location.href = "/"}
              className="text-sm text-gray-500 hover:text-gray-700 flex items-center justify-center gap-2 mx-auto"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
