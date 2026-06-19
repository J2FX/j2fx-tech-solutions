import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BotImobiliarioFranca from "./pages/BotImobiliarioFranca";
import AtendimentoWhatsApp from "./pages/AtendimentoWhatsApp";
import EdisonSoaresImoveis from "./pages/projetos/site-imobiliaria-edison-soares";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bot-imobiliario-franca" element={<BotImobiliarioFranca />} />
          <Route path="/atendimento-whatsapp" element={<AtendimentoWhatsApp />} />

          <Route
            path="/projetos/edison-soares-imoveis"
            element={<EdisonSoaresImoveis />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
