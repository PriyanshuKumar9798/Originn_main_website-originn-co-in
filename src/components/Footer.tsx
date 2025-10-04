export const Footer = () => {
    return (
      <footer className="w-full bg-primary text-primary-foreground py-8 mt-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm">
                © {new Date().getFullYear()} Originn. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/about" className="hover:opacity-80 transition-opacity">
                About
              </a>
              <a href="/contact" className="hover:opacity-80 transition-opacity">
                Contact
              </a>
              <a href="/privacy" className="hover:opacity-80 transition-opacity">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:opacity-80 transition-opacity">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };