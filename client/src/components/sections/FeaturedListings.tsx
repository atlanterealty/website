import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import IDXEmbed from "@/components/embeds/IDXEmbed";

export default function FeaturedListings() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover exceptional properties in prime locations
            </p>
          </div>
          <Link href="/brokerage">
            <Button
              variant="outline"
              className="hidden lg:flex items-center border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              data-testid="button-view-all-properties"
            >
              View All Properties
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
        
        {/* IDX Widget Integration */}
        <IDXEmbed
          embedType="showcase"
          className="mb-8"
          scriptSrc="//search.atlanterealtytc.com/idx/widgets/120607"
          containerId="idxwidgetsrc-120607"
        />
        
        {/* Mobile View All Button */}
        <div className="text-center lg:hidden">
          <Link href="/brokerage">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              data-testid="button-view-all-properties-mobile"
            >
              View All Properties
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
