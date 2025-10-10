import {
  Bookmark,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface StartupHeaderProps {
  name: string;
  logo: string;
  coverPhoto: string;
  category?: string;
  website?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  facebook?: string;
  youtube?: string;
  institute?: string;
}

export const StartupHeader = ({
  name,
  logo,
  coverPhoto,
  category,
  website,
  linkedin,
  instagram,
  twitter,
  facebook,
  youtube,
  institute,
}: StartupHeaderProps) => {
  const socials = [
    { icon: Linkedin, label: "LinkedIn", url: linkedin },
    { icon: Twitter, label: "Twitter", url: twitter },
    { icon: Instagram, label: "Instagram", url: instagram },
    { icon: Facebook, label: "Facebook", url: facebook },
    { icon: Youtube, label: "YouTube", url: youtube },
  ].filter((s) => s.url); // only show if link exists

  return (
    <header className="w-full bg-card">
      {/* Cover Photo */}
      <div className="relative w-full h-48 md:h-64 overflow-hidden bg-gradient-to-br from-primary to-primary/80">
        <img
          src={coverPhoto}
          alt={`${name} cover`}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      </div>

      {/* Header Content */}
      <div className="relative bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-6 py-6">
            {/* Logo */}
            <div className="flex-shrink-0 -mt-16 md:-mt-20">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg border-4 border-card bg-card shadow-lg overflow-hidden">
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Startup Info */}
            <div className="flex-1 flex flex-col md:flex-row justify-between gap-6 pt-2">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2 ">
                  {name}
                </h1>
                <p className="text-muted-foreground text-base mb-2">
  {category} <span className="mx-2">•</span> {institute}
</p>

                {website && (
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:text-primary-light transition-colors font-medium"
                  >
                    {website.replace(/^https?:\/\//, "")}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Right: Bookmark + Socials */}
              <div className="flex flex-col gap-4 items-start md:items-end">
                <Button
                  size="sm"
                  className="gap-2 bg-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Bookmark className="w-4 h-4" />
                  Bookmark
                </Button>

                <div className="flex gap-2.5">
                  {socials.map(({ icon: Icon, label, url }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 rounded bg-[#0A66C2] flex items-center justify-center hover:opacity-90 transition-opacity"
                    >
                      <Icon className="w-4.5 h-4.5 text-white" />
                    </a>
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
