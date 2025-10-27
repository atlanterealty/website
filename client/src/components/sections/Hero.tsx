import PropertySearchForm from "@/components/forms/PropertySearchForm";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero-background.png')"
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32 min-h-screen flex items-center">
        <div className="max-w-3xl">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Your Complete{" "}
                <span className="text-gradient-gold">Real Estate</span>{" "}
                Solution
              </h1>
              <p className="text-lg text-white/90 max-w-xl">
                From property brokerage to development consulting, Atlante provides
                unified real estate services across the Treasure Coast with expertise you can trust.
              </p>
            </div>
            
            {/* Search CTA */}
            <PropertySearchForm />
          </div>
        </div>
      </div>
    </section>
  );
}
