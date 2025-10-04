import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Navigation = () => {
  return (
    <nav className="w-full bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold hover:opacity-90 transition-opacity">
            Originn
          </a>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search startups & products..."
              className="w-full pl-10 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-white/20 focus:border-white/40"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="/discover"
              className="text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Discover Startup
            </a>
            <a
              href="/preorder"
              className="text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Preorder
            </a>
            <a
              href="/launch"
              className="text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Launch Your Start
            </a>
          </div>

          {/* Sign In Button */}
          <Button
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            size="sm"
          >
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};