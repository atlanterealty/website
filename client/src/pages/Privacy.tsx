import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Effective Date: November 1, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Atlante Realty ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-medium text-foreground mb-3">Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4">
                <li>Submit a contact form or inquiry</li>
                <li>Subscribe to our newsletter</li>
                <li>Schedule a consultation</li>
                <li>Register for our services</li>
                <li>Engage with our website or social media</li>
              </ul>
              
              <h3 className="text-xl font-medium text-foreground mb-3">Automatically Collected Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                When you visit our website, we may automatically collect certain information about your device and usage patterns, including IP address, browser type, operating system, pages viewed, and time spent on our site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-muted-foreground leading-relaxed">
                <li>Provide and maintain our services</li>
                <li>Respond to your inquiries and communications</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and unauthorized access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground leading-relaxed">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and property</li>
                <li>With service providers who assist us in operating our business</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 text-muted-foreground leading-relaxed">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the effective date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="text-muted-foreground leading-relaxed">
                <p><strong>Atlante Realty</strong></p>
                <p>789 SW Federal Highway, STE 201</p>
                <p>Stuart, FL 34994</p>
                <p>Phone: (561) 494-5026</p>
                <p>Email: info@atlanterealtytc.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}