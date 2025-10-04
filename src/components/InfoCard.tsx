import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const InfoCard = ({ title, children, className = "" }: InfoCardProps) => {
  return (
    <div className={`bg-card rounded-xl shadow-card p-8 transition-all hover:shadow-hover border border-border/50 backdrop-blur-sm ${className}`}>
      <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b-2 border-primary/20">{title}</h2>
      <div className="text-card-foreground">{children}</div>
    </div>
  );
};