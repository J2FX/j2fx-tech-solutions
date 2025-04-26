
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TechBackground from './TechBackground';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-j2fx-dark to-j2fx-medium pt-20">
      <TechBackground />
      
      <div className="container-custom grid md:grid-cols-2 gap-12 relative z-10">
        {/* Hero Text Content */}
        <div className="flex flex-col justify-center text-white animate-fade-in">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/51552c13-b924-48ca-9eea-e652c9b92dd0.png"
              alt="J2FX Logo"
              className="w-64 h-auto mb-6"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Tecnologia que<br />
              <span className="text-j2fx-accent">transforma</span> seu negócio
            </h1>
          </div>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-md">
            Soluções tecnológicas personalizadas para elevar sua empresa a um novo patamar de inovação e eficiência.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-white text-j2fx-dark hover:bg-j2fx-accent hover:text-white px-8 py-6 font-medium rounded-md transition-all duration-300 text-base"
            >
              <a href="#contact">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="bg-transparent text-white hover:bg-white/10 border-white/30 hover:border-white px-8 py-6 font-medium rounded-md transition-all duration-300 text-base"
            >
              <a href="#services">
                Conheça Nossos Serviços
              </a>
            </Button>
          </div>
        </div>
        
        {/* Hero Image with Tech Pattern */}
        <div className="hidden md:flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-j2fx-accent/20 to-transparent opacity-30 rounded-2xl"></div>
          <div className="w-full h-full max-w-lg">
            <img 
              src="/lovable-uploads/1dfd95e2-842b-42b4-ae3b-944cdf5eb57c.png"
              alt="J2FX Tecnologia"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.63,118.92,158.25,56.44,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
