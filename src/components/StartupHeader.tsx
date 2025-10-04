import { Bookmark, Linkedin, Twitter, Instagram, Facebook, Youtube, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import coverPhoto from "@/assets/cover-photo.jpg";
import startupLogo from "@/assets/startup-logo.jpg";

export const StartupHeader = () => {
  return (
    <header className="w-full">
      {/* Cover Photo with Gradient Overlay */}
      <div className="relative w-full h-56 md:h-72 overflow-hidden">
        <img
          src={coverPhoto}
          alt="Originn cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      </div>

      {/* Header Content */}
      <div className="relative bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-6 py-6">
            {/* Logo */}
            <div className="flex-shrink-0 -mt-20 md:-mt-24">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl border-4 border-card bg-card shadow-hover overflow-hidden ring-2 ring-primary/10">
                <img
                  src={startupLogo}
                  alt="Startup logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Startup Info and Actions */}
            <div className="flex-1 flex flex-col md:flex-row justify-between gap-4">
              {/* Left: Name and Details */}
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Originn
                </h1>
                <p className="text-muted-foreground text-lg mb-3 font-medium">
                  Technology & Innovation • IIT Delhi
                </p>
                <a
                  href="https://originn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:text-primary-light transition-colors font-medium"
                >
                  www.originn.com
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Right: Bookmark and Social Media */}
              <div className="flex flex-col gap-4 items-start md:items-end">
                <Button
                  size="sm"
                  className="gap-2 bg-primary hover:bg-primary-light shadow-md"
                >
                  <Bookmark className="w-4 h-4" />
                  Bookmark
                </Button>

                <div className="flex gap-2">
                  {[
                    { icon: Linkedin, label: "LinkedIn" },
                    { icon: Twitter, label: "Twitter" },
                    { icon: Instagram, label: "Instagram" },
                    { icon: Facebook, label: "Facebook" },
                    { icon: Youtube, label: "YouTube" },
                  ].map(({ icon: Icon, label }) => (
                    <button
                      key={label}
                      aria-label={label}
                      className="w-11 h-11 rounded-full bg-primary hover:bg-primary-light text-primary-foreground flex items-center justify-center transition-all hover:shadow-lg hover:scale-110"
                    >
                      <Icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};