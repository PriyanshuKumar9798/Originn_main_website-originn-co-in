import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import Footer from "./Footer"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;