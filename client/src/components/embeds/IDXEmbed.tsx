import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface IDXEmbedProps {
  embedType: "search" | "showcase" | "map" | "wrapper";
  scriptSrc?: string;
  containerId?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function IDXEmbed({
  embedType,
  scriptSrc,
  containerId,
  children,
  className
}: IDXEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    if (!scriptSrc || typeof window === "undefined") {
      setIsLoading(false);
      return;
    }

    const loadWidget = async () => {
      try {
        setIsLoading(true);
        setHasError(false);

        // Clean up any existing script
        if (scriptRef.current) {
          document.head.removeChild(scriptRef.current);
          scriptRef.current = null;
        }

        // Ensure container is ready
        await new Promise(resolve => setTimeout(resolve, 100));

        // Create and configure script
        const script = document.createElement("script");
        script.src = scriptSrc;
        script.charset = "UTF-8";
        script.type = "text/javascript";
        script.async = true;
        
        if (containerId) {
          script.id = containerId;
        }

        // Set up promise-based loading
        const loadPromise = new Promise<void>((resolve, reject) => {
          script.onload = () => {
            console.log(`IDX ${embedType} widget loaded successfully`);
            setIsLoading(false);
            resolve();
          };
          
          script.onerror = (error) => {
            console.error(`Failed to load IDX ${embedType} widget:`, error);
            setHasError(true);
            setIsLoading(false);
            reject(error);
          };
        });

        // Append script to head
        document.head.appendChild(script);
        scriptRef.current = script;

        // Wait for script to load or timeout
        await Promise.race([
          loadPromise,
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Widget load timeout')), 10000)
          )
        ]);

      } catch (error) {
        console.error(`Error loading IDX ${embedType} widget:`, error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    loadWidget();

    return () => {
      // Comprehensive cleanup
      if (scriptRef.current && document.head.contains(scriptRef.current)) {
        document.head.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
      
      // Clear any widget-generated content in container
      if (containerRef.current) {
        const widgetContent = containerRef.current.querySelector('.idx-widget-content');
        if (widgetContent) {
          widgetContent.remove();
        }
      }
    };
  }, [scriptSrc, embedType, containerId]);

  const defaultContainerId = containerId || `idx-${embedType}-container`;

  return (
    <div className={className} data-testid={`idx-embed-${embedType}`}>
      <div
        id={defaultContainerId}
        ref={containerRef}
        className="w-full min-h-[400px]"
        style={{ position: 'relative' }}
      >
        {children || (
          !scriptSrc ? (
            <Card className="border-dashed border-2 border-muted-foreground/20">
              <CardContent className="p-8 text-center">
                <div className="space-y-4">
                  <div className="text-lg font-semibold text-muted-foreground">
                    IDXBroker {embedType.charAt(0).toUpperCase() + embedType.slice(1)} Widget
                  </div>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    This is a placeholder for the IDXBroker {embedType} widget.
                    Configure the integration by providing the script source URL.
                  </p>
                  <div className="bg-muted p-4 rounded-lg text-xs font-mono text-left max-w-md mx-auto">
                    <div className="font-semibold mb-2">Integration Instructions:</div>
                    <div className="space-y-1">
                      <div>1. Get your IDX widget code from IDXBroker</div>
                      <div>2. Extract the script src URL</div>
                      <div>3. Pass it to the scriptSrc prop</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : hasError ? (
            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-8 text-center">
                <div className="space-y-4">
                  <div className="text-lg font-semibold text-destructive">
                    Widget Load Error
                  </div>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Failed to load the IDX {embedType} widget. This may be due to:
                  </p>
                  <div className="bg-muted p-4 rounded-lg text-xs text-left max-w-md mx-auto">
                    <div className="space-y-1">
                      <div>• Incorrect widget URL or domain configuration</div>
                      <div>• Network connectivity issues</div>
                      <div>• Widget ID mismatch</div>
                      <div>• CORS restrictions</div>
                    </div>
                  </div>
                  <button
                    onClick={() => window.location.reload()}
                    className="text-sm text-primary hover:underline"
                  >
                    Try reloading the page
                  </button>
                </div>
              </CardContent>
            </Card>
          ) : isLoading ? (
            <div className="w-full h-[400px] bg-muted/10 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <div className="text-muted-foreground text-sm">
                  Loading IDX {embedType} widget...
                </div>
                <div className="text-xs text-muted-foreground">
                  This may take a few moments
                </div>
              </div>
            </div>
          ) : (
            // Widget loaded successfully - show minimal container for widget content
            <div
              className="idx-widget-content w-full min-h-[400px]"
              style={{
                backgroundColor: 'transparent',
                border: 'none'
              }}
            />
          )
        )}
      </div>
      
      {/* Widget configuration example - only show when no script src */}
      {!scriptSrc && (
        <div className="mt-4 text-xs text-muted-foreground">
          <details className="cursor-pointer">
            <summary className="font-semibold">Example Implementation</summary>
            <pre className="mt-2 bg-muted p-2 rounded text-xs overflow-x-auto">
{`<IDXEmbed
  embedType="${embedType}"
  scriptSrc="//search.atlanterealtytc.com/idx/quicksearchjs.php?widgetid=34193"
  containerId="idxwidgetsrc-34193"
/>`}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
}
