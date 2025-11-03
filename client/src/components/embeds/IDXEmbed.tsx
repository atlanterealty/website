import { useEffect, useRef } from "react";
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
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const defaultContainerId = containerId || `idx-${embedType}-container`;

  useEffect(() => {
    if (!scriptSrc || !iframeRef.current) return;

    const iframe = iframeRef.current;
    
    // Create HTML content for iframe that includes the IDX widget
    const iframeContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            background: transparent;
          }
          #${defaultContainerId} {
            width: 100%;
            min-height: 400px;
          }
        </style>
      </head>
      <body>
        <div id="${defaultContainerId}"></div>
        <script charset="UTF-8" type="text/javascript" id="${defaultContainerId}" src="${scriptSrc}"></script>
      </body>
      </html>
    `;

    // Write content to iframe
    iframe.onload = () => {
      console.log(`IDX ${embedType} widget iframe loaded`);
    };

    iframe.srcdoc = iframeContent;

  }, [scriptSrc, embedType, defaultContainerId]);

  return (
    <div className={className} data-testid={`idx-embed-${embedType}`}>
      {!scriptSrc ? (
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
      ) : (
        <div className="w-full">
          <iframe
            ref={iframeRef}
            className={`w-full border-0 ${embedType === 'search' ? 'h-[600px] md:h-[800px] lg:h-[1000px]' : 'h-[400px] md:h-[500px] lg:h-[600px]'}`}
            style={{
              overflow: 'hidden'
            }}
            title={`IDX ${embedType} Widget`}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            scrolling="no"
          />
        </div>
      )}
      
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
