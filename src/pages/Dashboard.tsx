import { Button } from "@/components/ui/button";
import { Home, LayoutDashboard, TrendingUp, Rocket, Users, MessageSquare, Bell, Settings, Calendar, Award, Target } from "lucide-react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (!user) {
      window.location.href = "/signin";
    } else {
      setCurrentUser(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/signin";
  };

  if (!currentUser) {
    return null;
  }

  const recentActivity = [
    { id: 1, action: "Viewed", item: "TechStart AI", time: "2 hours ago", icon: "👁️" },
    { id: 2, action: "Preordered", item: "SmartHome Pro", time: "5 hours ago", icon: "🛒" },
    { id: 3, action: "Followed", item: "EcoGreen Solutions", time: "1 day ago", icon: "⭐" },
    { id: 4, action: "Commented on", item: "FitTrack Wearable", time: "2 days ago", icon: "💬" },
  ];

  const trendingStartups = [
    { name: "AI Vision Labs", category: "AI & ML", growth: "+156%", color: "blue" },
    { name: "GreenTech Innovate", category: "Sustainability", growth: "+142%", color: "green" },
    { name: "HealthPlus Connect", category: "Healthcare", growth: "+128%", color: "purple" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                <LayoutDashboard className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back, {currentUser.name}! 👋</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={() => window.location.href = "/"}
                variant="outline"
                className="flex items-center gap-2 hover:bg-gray-50"
              >
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Home</span>
              </Button>
              <Button 
                variant="outline" 
                className="relative hover:bg-gray-50"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
              </Button>
              {/* <Button onClick={handleLogout} className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
                Logout
              </Button> */}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 mb-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">Your Innovation Hub</h2>
            <p className="text-blue-100 mb-6">Track your journey in the startup ecosystem</p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => window.location.href = "/discover-startup"}
                className="bg-white text-purple-600 hover:bg-blue-50 font-semibold"
              >
                <Rocket className="h-4 w-4 mr-2" />
                Explore Startups
              </Button>
              {/* <Button 
                onClick={() => window.location.href = "/preorder"}
                variant="outline" 
                className="border-white text-white hover:bg-white/20"
              >
                Browse Products
              </Button> */}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1 font-medium">Startups Followed</p>
                <p className="text-3xl font-bold text-gray-900">24</p>
                <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +12% this month
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-xl">
                <Rocket className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1 font-medium">Active Preorders</p>
                <p className="text-3xl font-bold text-gray-900">12</p>
                <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +8% this week
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-xl">
                <Target className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1 font-medium">Collaborations</p>
                <p className="text-3xl font-bold text-gray-900">8</p>
                <p className="text-xs text-purple-600 mt-1 flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  3 pending
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-xl">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1 font-medium">Messages</p>
                <p className="text-3xl font-bold text-gray-900">15</p>
                <p className="text-xs text-orange-600 mt-1 flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" />
                  5 unread
                </p>
              </div>
              <div className="p-3 bg-orange-100 rounded-xl">
                <MessageSquare className="h-8 w-8 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                Recent Activity
              </h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-3xl">{activity.icon}</div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">
                      {activity.action} <span className="text-blue-600">{activity.item}</span>
                    </p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Startups */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Trending Now
            </h2>
            <div className="space-y-4">
              {trendingStartups.map((startup, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{startup.name}</h3>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full bg-${startup.color}-100 text-${startup.color}-600`}>
                      {startup.growth}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{startup.category}</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Explore More
            </Button>
          </div>
        </div>

        {/* User Info Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="h-5 w-5 text-purple-600" />
            Account Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <p className="text-sm text-blue-600 mb-2 font-medium">Full Name</p>
              <p className="text-lg font-bold text-gray-900">{currentUser.name}</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <p className="text-sm text-purple-600 mb-2 font-medium">Email Address</p>
              <p className="text-lg font-bold text-gray-900 truncate">{currentUser.email}</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
              <p className="text-sm text-green-600 mb-2 font-medium">Member Since</p>
              <p className="text-lg font-bold text-gray-900">
                {new Date(currentUser.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
              <p className="text-sm text-orange-600 mb-2 font-medium">Account Status</p>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-green-500 text-white">
                ✓ Active
              </span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Settings className="h-5 w-5 text-gray-600" />
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => window.location.href = "/discover-startup"}
              className="group relative overflow-hidden h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white hover:from-blue-600 hover:to-blue-700 transition-all hover:shadow-xl hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
              <div className="relative h-full flex flex-col items-center justify-center gap-2">
                <span className="text-4xl">🔍</span>
                <span className="font-bold">Discover Startups</span>
              </div>
            </button>
            
            <button
              onClick={() => window.location.href = "/preorder"}
              className="group relative overflow-hidden h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-xl text-white hover:from-green-600 hover:to-green-700 transition-all hover:shadow-xl hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
              <div className="relative h-full flex flex-col items-center justify-center gap-2">
                <span className="text-4xl">🛒</span>
                <span className="font-bold">Preorder Products</span>
              </div>
            </button>
            
            <button className="group relative overflow-hidden h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl text-white hover:from-purple-600 hover:to-purple-700 transition-all hover:shadow-xl hover:scale-105">
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
              <div className="relative h-full flex flex-col items-center justify-center gap-2">
                <span className="text-4xl">💬</span>
                <span className="font-bold">Messages</span>
              </div>
            </button>
            
            <button className="group relative overflow-hidden h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl text-white hover:from-orange-600 hover:to-orange-700 transition-all hover:shadow-xl hover:scale-105">
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
              <div className="relative h-full flex flex-col items-center justify-center gap-2">
                <span className="text-4xl">⚙️</span>
                <span className="font-bold">Settings</span>
              </div>
            </button>
          </div>
        </div>
      </main>


      
    </div>
  );
};

export default Dashboard;
