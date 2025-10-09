import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout"
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import DiscoverStartup from "./pages/DiscoverStartup";
import StartupProfile from "./pages/StartupProfile";
import Preorder from "./pages/Preorder";
import SignIn from "./pages/SignIn";

import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import OurTeamPage from "./pages/OurTeamPage";
import FaqPage from "./pages/FaqPage";
import StartupDescription from "./pages/StartupDescription";
import PrivacySecurityPage from "./pages/PrivacySecurityPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover-startup" element={<DiscoverStartup />} />
            <Route path="/startup-profile" element={<StartupProfile />} />
            <Route path="/preorder" element={<Preorder />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/OurTeam" element={<OurTeamPage />} />
            <Route path="/FaqPage" element={<FaqPage/>}/>
            <Route path="/Startups/:id" element={<StartupDescription />} />
            <Route path="/privacy-security" element={<PrivacySecurityPage/>}/>

            {/* privacy-security */}

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
