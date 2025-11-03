import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useRef } from "react";

export default function FeaturedListings() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    const iframe = iframeRef.current;
    
    // Create HTML content specifically optimized for featured properties widget
    const iframeContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Security-Policy" content="img-src * data: blob:; default-src *; script-src * 'unsafe-inline' 'unsafe-eval'; style-src * 'unsafe-inline';">
        <style>
          * {
            box-sizing: border-box;
          }
          html, body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            background: transparent;
            width: 100%;
            height: 100%;
            overflow: hidden !important;
          }
          @media (max-width: 768px) {
            html, body {
              font-size: 14px !important;
            }
            #idxwidgetsrc-120607 {
              min-height: 500px !important;
              height: 500px !important;
            }
          }
          #idxwidgetsrc-120607 {
            width: 100% !important;
            max-width: 100% !important;
            height: 100% !important;
            overflow: hidden !important;
          }
          /* Ensure images load and display properly */
          img {
            max-width: 100% !important;
            height: auto !important;
            display: block !important;
            object-fit: cover !important;
            border-radius: 8px;
          }
          /* IDX widget specific image fixes */
          .idx-listing-image img,
          .idx-property-image img,
          .idx-featured-image img,
          .listing-image img {
            width: 100% !important;
            height: 200px !important;
            object-fit: cover !important;
            background: #f3f4f6;
          }
          /* Fix any broken image placeholders */
          img[src=""], img:not([src]) {
            display: none !important;
          }
          /* Responsive layout */
          .idx-listing-item,
          .idx-property-card {
            margin-bottom: 1rem !important;
            border-radius: 8px !important;
            overflow: hidden !important;
          }
          @media (max-width: 768px) {
            #idxwidgetsrc-120607 {
              font-size: 14px !important;
            }
          }
        </style>
      </head>
      <body>
        <div id="idxwidgetsrc-120607"></div>
        <script charset="UTF-8" type="text/javascript" id="idxwidgetsrc-120607" src="//search.atlanterealtytc.com/idx/widgets/120607"></script>
      </body>
      </html>
    `;

    iframe.onload = () => {
      console.log('Featured properties widget iframe loaded');
    };

    iframe.srcdoc = iframeContent;
  }, []);

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
        
        {/* Featured Properties Widget - Optimized for Images */}
        <div className="mb-8">
          <iframe
            ref={iframeRef}
            className="w-full border-0 rounded-lg h-[500px] md:h-[600px] lg:h-[800px]"
            title="Featured Properties Widget"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads"
            loading="eager"
          />
        </div>
        
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
