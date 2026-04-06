import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import FloatingParticles from "@/components/FloatingParticles";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>

      {/* 🔥 BACKGROUND SYSTEM */}
      <div className="noise" />
      <div className="bg-animated fixed inset-0 z-0" />
      <FloatingParticles />

      {/* 🔥 MAIN CONTENT */}
      <div className="relative z-10">
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;