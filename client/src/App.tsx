import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import IndustriesIndex from "@/pages/industries/index";
import IndustryDetail from "@/pages/industries/[slug]";
import TechnologyIndex from "@/pages/technology/index";
import ServiceDetail from "@/pages/technology/services/[slug]";
import TechnologyDetail from "@/pages/technology/[slug]";
import About from "@/pages/about";
import BlogIndex from "@/pages/blog/index";
import BlogPost from "@/pages/blog/[slug]";
import Contact from "@/pages/contact";
import ScrollToTop from "@/components/ScrollToTop";

function Router() {
  const [location] = useLocation();

  return (
    <div key={location}>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/industries" component={IndustriesIndex} />
        <Route path="/industries/:slug" component={IndustryDetail} />
        <Route path="/technology" component={TechnologyIndex} />
        <Route path="/technology/services/:slug" component={ServiceDetail} />
        <Route path="/technology/:slug" component={TechnologyDetail} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={BlogIndex} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
