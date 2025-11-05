import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Brokerage from "@/pages/Brokerage";
import Agents from "@/pages/Agents";
import AgentDetail from "@/pages/AgentDetail";
import School from "@/pages/School";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Accessibility from "@/pages/Accessibility";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/brokerage" component={Brokerage} />
      <Route path="/agents" component={Agents} />
      <Route path="/agents/:id" component={AgentDetail} />
      <Route path="/school" component={School} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/accessibility" component={Accessibility} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
