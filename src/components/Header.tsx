import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ onSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Load user from sessionStorage
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("currentUser") || "null");
    setCurrentUser(user);
  }, []);

  // Clear search when navigating away from home
  useEffect(() => {
    if (location.pathname !== "/") {
      setSearchQuery("");
    }
  }, [location.pathname]);

  // Scroll hide/show behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLogout = () => {
    sessionStorage.removeItem("currentUser");
    setCurrentUser(null);
    setUserMenuOpen(false);
    navigate("/");
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) onSearch(query);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      if (location.pathname !== "/") navigate("/");
      if (onSearch) onSearch(searchQuery);
    }
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearchSubmit();
    }
  };

  const handleSearchIconClick = () => {
    handleSearchSubmit();
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-4 h-16">
          
          {/* Logo */}
          <div
            className="flex items-center flex-shrink-0 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <h1 className="text-2xl font-bold tracking-tight text-[#192a51] hover:text-[#2a3f6f] transition-all duration-300">
              Originn
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl hidden md:flex">
            <div className="relative w-full">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
                onClick={handleSearchIconClick}
              />
              <Input
                type="search"
                placeholder="Search startups & products..."
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleSearchKeyDown}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-[#192a51] focus:ring-2 focus:ring-[#192a51]/20 rounded-lg transition-all duration-300 hover:bg-white"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Button
              variant="ghost"
              className="relative text-[#192a51] hover:text-[#2a3f6f] font-medium transition-all duration-300 text-sm
               after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#192a51] 
               after:transition-all after:duration-300 hover:after:w-full pb-1"
              onClick={() => navigate("/discover-startup")}
            >
              Discover Startup
            </Button>
            <Button
              variant="ghost"
              className="relative text-[#192a51] hover:text-[#2a3f6f] font-medium transition-all duration-300 text-sm
               after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#192a51] 
               after:transition-all after:duration-300 hover:after:w-full pb-1"
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
                className="relative text-[#192a51] hover:text-[#2a3f6f] font-medium transition-all duration-300 text-sm
               after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#192a51] 
               after:transition-all after:duration-300 hover:after:w-full pb-1"
              >
                Launch Your Startup
              </Button>
            </a>
          </nav>

          {/* Auth / User Menu / Hamburger */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {currentUser ? (
              <>
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
              <Button
                variant="default"
                className="bg-[#192a51] hover:bg-[#2a3f6f] text-white font-semibold px-4 py-2 text-sm hidden lg:inline-flex"
                onClick={() => navigate("/signin")}
              >
                Sign In
              </Button>
            )}

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
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
              <div className="bg-gray-100 rounded-lg p-3 mb-3">
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
              className="w-full text-left text-[#192a51] hover:bg-[#2a3f6f]/10 font-semibold"
              onClick={() => {
                navigate("/discover-startup");
                setMenuOpen(false);
              }}
            >
              Discover Startup
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left text-[#192a51] hover:bg-[#2a3f6f]/10 font-semibold"
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
                className="w-full text-left text-[#192a51] hover:bg-[#2a3f6f]/10 font-semibold"
              >
                Launch Your Startup
              </Button>
            </a>
            
            {currentUser ? (
              <>
                <Button
                  variant="ghost"
                  className="w-full text-left text-[#192a51] hover:bg-[#2a3f6f]/10 font-semibold flex items-center gap-2"
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
                className="w-full bg-[#192a51] text-white hover:bg-[#2a3f6f] font-semibold"
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
