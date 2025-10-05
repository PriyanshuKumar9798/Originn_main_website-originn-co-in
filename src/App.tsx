import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
import Layout from "./pages/Layout"
import Index from "./pages/Home";
import NotFound from "./pages/NotFound";
import DiscoverStartup from "./pages/DiscoverStartup";
import StartupProfile from "./pages/StartupProfile";
import Preorder from "./pages/Preorder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/discover-startup" element={<DiscoverStartup />} />
            <Route path="/startup-profile" element={<StartupProfile />} />
            <Route path="/preorder" element={<Preorder />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
