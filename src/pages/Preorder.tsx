import { ShoppingCart, Clock, Bell } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Preorder = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* <Header /> */}
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-primary/10 rounded-full backdrop-blur-sm">
              <ShoppingCart className="h-20 w-20 text-primary" />
            </div>
          </div>

          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-6">
            <Clock className="h-4 w-4 text-yellow-600" />
            <span className="text-sm font-semibold text-yellow-600">Coming Soon</span>
          </div>

          {/* Title */}
          <h1 className="text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Preorder Feature
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            We're working hard to bring you an amazing preorder experience. 
            Get early access to innovative products from our startup community before they launch!
          </p>

          {/* Notify Me Section */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Get Notified</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Be the first to know when preorders go live. Enter your email below.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="bg-primary hover:bg-primary/90">
                Notify Me
              </Button>
            </div>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold mb-2">Early Access</h3>
              <p className="text-sm text-muted-foreground">
                Be the first to get innovative products
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-lg font-semibold mb-2">Special Pricing</h3>
              <p className="text-sm text-muted-foreground">
                Exclusive discounts for early supporters
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="text-lg font-semibold mb-2">Exclusive Perks</h3>
              <p className="text-sm text-muted-foreground">
                Limited edition rewards and bonuses
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Preorder;
