import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate(); 
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground border-b-4 border-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-4 h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
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
                className="text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-sm"
              >
                Launch Your Startup
              </Button>
            </a>
          </nav>

          {/* Auth / Hamburger */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Desktop Sign In */}
            <Button
              variant="default"
              className="bg-orange-500 text-white hover:bg-orange-600 font-semibold px-4 py-2 text-sm hidden lg:inline-flex"
            >
              Sign In
            </Button>

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
            <Button
              variant="default"
              className="w-full bg-orange-500 text-white hover:bg-orange-600 font-semibold"
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
            >
              Sign In
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
