import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import IDXEmbed from "@/components/embeds/IDXEmbed";
import LeadForm from "@/components/forms/LeadForm";

export default function Brokerage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-card py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
                Find Your Perfect Property
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Search our comprehensive database of residential and commercial
                properties across the Treasure Coast
              </p>
            </div>
          </div>
        </section>

        {/* IDX Integration Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                MLS Search
              </h2>
              <p className="text-muted-foreground">
                Access the complete Multiple Listing Service database with
                real-time updates
              </p>
            </div>

            {/* IDX Map Search */}
            <div className="mb-8">
              <iframe
                src="https://search.atlanterealtytc.com/idx/map/mapsearch"
                className="w-full border-0 rounded-lg"
                style={{
                  minHeight: '1400px',
                  height: '1400px'
                }}
                title="Property Map Search"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Lead Generation Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                  Ready to Find Your Dream Home?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our experienced agents are here to help you navigate the real
                  estate market and find the perfect property for your needs.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    Exclusive access to off-market properties
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    Professional market analysis and pricing guidance
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                    Personalized property tours and viewings
                  </li>
                </ul>
              </div>

              <div className="flex justify-center">
                <LeadForm title="Request a Property Tour" source="brokerage" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
