import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedListings from "@/components/sections/FeaturedListings";
import WhyAtlante from "@/components/sections/WhyAtlante";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <FeaturedListings />
        <WhyAtlante />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
