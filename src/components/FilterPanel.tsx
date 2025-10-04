import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const FilterPanel = () => {
  const [open, setOpen] = useState(false);

  const stages = ["All Stages", "Ideation", "Pre-Seed", "Seed", "Product", "Revenue", "Growth"];
  const categories = [
    "All Categories",
    "AI & Machine Learning",
    "HealthTech",
    "EdTech",
    "FinTech",
    "E-Commerce",
    "SaaS",
    "CleanTech",
    "AgriTech",
    "Food & Beverage",
    "Entertainment",
  ];
  const institutes = [
    "All Institutes",
    "IIT Madras",
    "IIT Delhi",
    "IIT Bombay",
    "IIT Kharagpur",
    "IIT Kanpur",
    "IIT Roorkee",
    "BITS Pilani",
    "NIT Trichy",
  ];
  const fundingStatus = ["All", "Funded", "Non-Funded", "Bootstrapped"];

  return (
    <>
      {/* Filter Trigger Button */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="gap-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </SheetTrigger>

        {/* Filter Panel Content */}
        <SheetContent side="right" className="w-80 sm:w-96 overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-between">
              <span>Filter Startups</span>
            </SheetTitle>
          </SheetHeader>

          <div className="mt-6 space-y-6">
            {/* Startup Stage */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">
                Startup Stage
              </label>
              <Select defaultValue="All Stages">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select stage" />
                </SelectTrigger>
                <SelectContent>
                  {stages.map((stage) => (
                    <SelectItem key={stage} value={stage}>
                      {stage}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Category */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">
                Category
              </label>
              <Select defaultValue="All Categories">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Institute */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">
                Institute
              </label>
              <Select defaultValue="All Institutes">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select institute" />
                </SelectTrigger>
                <SelectContent>
                  {institutes.map((institute) => (
                    <SelectItem key={institute} value={institute}>
                      {institute}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Funding Status */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">
                Funding Status
              </label>
              <Select defaultValue="All">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select funding status" />
                </SelectTrigger>
                <SelectContent>
                  {fundingStatus.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setOpen(false)}
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default FilterPanel;