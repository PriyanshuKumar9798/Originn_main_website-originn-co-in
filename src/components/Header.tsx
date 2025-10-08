import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import {logo} from "@/assets/Logo (2).png"

const Header = () => {
  const navigate = useNavigate(); 
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser") || "null");
    setCurrentUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setUserMenuOpen(false);
    navigate("/");
  };

  return (
    <header className="bg-[#192a51] text-white ">

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-4 h-16">
          
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
            <h1 className="text-2xl font-bold tracking-tight">Originn</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search startups & products..."
                className="w-full pl-10 pr-4 py-2 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-white/20 focus:border-white/40 rounded-lg"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-sm"
              onClick={() => navigate("/discover-startup")}
            >
              Discover Startup
            </Button>
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-sm"
              onClick={() => navigate("/preorder")}
            >
              Preorder
            </Button>
            <a
              href="https://originn-startup-main-website.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-sm"
              >
                Launch Your Startup
              </Button>
            </a>
          </nav>

          {/* Auth / User Menu / Hamburger */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {currentUser ? (
              <>
                {/* Desktop User Menu */}
                <div className="hidden lg:block relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-full px-3 py-2 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-sm">{currentUser.name}</span>
                  </button>

                  {userMenuOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setUserMenuOpen(false)}
                      />
                      <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-20 overflow-hidden">
                        <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                              <User className="w-6 h-6 text-blue-500" />
                            </div>
                            <div className="text-white">
                              <p className="font-semibold">{currentUser.name}</p>
                              <p className="text-sm opacity-90">{currentUser.email}</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-2">
                          <button
                            onClick={() => {
                              navigate("/dashboard");
                              setUserMenuOpen(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-md text-gray-700 transition-colors"
                          >
                            <LayoutDashboard className="w-5 h-5" />
                            <span className="font-medium">Dashboard</span>
                          </button>
                          <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 rounded-md text-red-600 transition-colors"
                          >
                            <LogOut className="w-5 h-5" />
                            <span className="font-medium">Logout</span>
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </>
            ) : (
              /* Desktop Sign In */
              <Button
                variant="default"
                className="bg-orange-500 text-white hover:bg-orange-600 font-semibold px-4 py-2 text-sm hidden lg:inline-flex"
                onClick={() => navigate("/signin")}
              >
                Sign In
              </Button>
            )}

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-white/10"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-2 space-y-2 pb-4">
            {currentUser && (
              <div className="bg-white/10 rounded-lg p-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{currentUser.name}</p>
                    <p className="text-xs opacity-80">{currentUser.email}</p>
                  </div>
                </div>
              </div>
            )}
            
            <Button
              variant="ghost"
              className="w-full text-left text-primary-foreground hover:bg-primary-foreground/10 font-semibold"
              onClick={() => {
                navigate("/discover-startup");
                setMenuOpen(false);
              }}
            >
              Discover Startup
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left text-primary-foreground hover:bg-primary-foreground/10 font-semibold"
              onClick={() => {
                navigate("/preorder");
                setMenuOpen(false);
              }}
            >
              Preorder
            </Button>
            <a
              href="https://originn-venture-launchpad.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                className="w-full text-left text-primary-foreground hover:bg-primary-foreground/10 font-semibold"
              >
                Launch Your Startup
              </Button>
            </a>
            
            {currentUser ? (
              <>
                <Button
                  variant="ghost"
                  className="w-full text-left text-primary-foreground hover:bg-primary-foreground/10 font-semibold flex items-center gap-2"
                  onClick={() => {
                    navigate("/dashboard");
                    setMenuOpen(false);
                  }}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Button>
                <Button
                  variant="default"
                  className="w-full bg-red-500 text-white hover:bg-red-600 font-semibold flex items-center gap-2"
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </>
            ) : (
              <Button
                variant="default"
                className="w-full bg-orange-500 text-white hover:bg-orange-600 font-semibold"
                onClick={() => {
                  navigate("/signin");
                  setMenuOpen(false);
                }}
              >
                Sign In
              </Button>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
