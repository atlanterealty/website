import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-8">Accessibility Statement</h1>
            <p className="text-muted-foreground mb-8">Last Updated: November 1, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Commitment to Accessibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                Atlante Realty is committed to ensuring digital accessibility for all users, including those with disabilities. We strive to provide an inclusive online experience that allows all visitors to access our real estate services and information with ease and dignity.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Accessibility Standards</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are working to ensure our website conforms to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines help make web content more accessible to people with various disabilities, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground leading-relaxed">
                <li>Visual impairments and blindness</li>
                <li>Hearing impairments and deafness</li>
                <li>Motor disabilities and mobility impairments</li>
                <li>Cognitive and learning disabilities</li>
                <li>Age-related impairments</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Accessibility Features</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website includes the following accessibility features:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground leading-relaxed">
                <li>Semantic HTML markup for screen reader compatibility</li>
                <li>Alternative text for images and graphics</li>
                <li>Keyboard navigation support</li>
                <li>High contrast color schemes</li>
                <li>Readable font sizes and scalable text</li>
                <li>Descriptive link text and headings</li>
                <li>Form labels and error messaging</li>
                <li>Skip navigation links</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Assistive Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website is designed to be compatible with assistive technologies, including screen readers, voice recognition software, and keyboard-only navigation. We test our site regularly with common assistive technologies to ensure optimal functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Content</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to ensure accessibility throughout our website, some content is provided by third-party services (such as property listing platforms and interactive maps). We work with our vendors to ensure these services meet accessibility standards, but we cannot guarantee the accessibility of all third-party content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Ongoing Improvements</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are continuously working to improve the accessibility of our website. Our efforts include regular accessibility audits, user testing with individuals who have disabilities, and ongoing staff training on accessibility best practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Browser Compatibility</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website is designed to work with the following browsers and assistive technologies:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground leading-relaxed">
                <li>Chrome, Firefox, Safari, and Edge (latest versions)</li>
                <li>JAWS and NVDA screen readers</li>
                <li>Dragon NaturallySpeaking voice recognition software</li>
                <li>ZoomText screen magnification software</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Alternative Access Methods</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you encounter barriers while using our website, we provide alternative ways to access our services:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground leading-relaxed">
                <li>Phone consultations: (561) 494-5026</li>
                <li>Email communication: info@atlanterealtytc.com</li>
                <li>In-person meetings at our office</li>
                <li>Large print or electronic document formats upon request</li>
                <li>Sign language interpretation (with advance notice)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Feedback and Support</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We welcome feedback about the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <div className="text-muted-foreground leading-relaxed mb-4">
                <p><strong>Accessibility Coordinator</strong></p>
                <p>Atlante Realty</p>
                <p>789 SW Federal Highway, STE 201</p>
                <p>Stuart, FL 34994</p>
                <p>Phone: (561) 494-5026</p>
                <p>Email: info@atlanterealtytc.com</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We aim to respond to accessibility feedback within 2 business days and will work with you to provide the information or assistance you need in an accessible format.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Formal Complaints</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you are not satisfied with our response to your accessibility concerns, you may file a complaint with the U.S. Department of Housing and Urban Development (HUD) or other applicable regulatory authorities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Legal Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                This accessibility statement reflects our ongoing commitment to compliance with the Americans with Disabilities Act (ADA), Section 508 of the Rehabilitation Act, and other applicable accessibility laws and regulations.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}