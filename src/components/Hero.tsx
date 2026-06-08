import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-j2fx-dark to-j2fx-medium pt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHptMC01aDR2MWgtNHptMTMtNS43NWg0djFoLTR6TTMxIDIzaDE4djFIMzF6TTMxIDI4aDE4djFIMzF6TTMxIDMzaDE4djFIMzF6TTMxIDM4aDE4djFIMzF6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=')]"></div>

      <div className="container-custom grid md:grid-cols-2 gap-12 relative z-10">
        <div className="flex flex-col justify-center text-white animate-fade-in">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-j2fx-accent">
            Sites profissionais para empresas
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Seu site precisa passar confiança antes do primeiro contato
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl">
            Criamos sites modernos, rápidos e pensados para gerar oportunidades, apresentar sua empresa com autoridade e facilitar o contato de novos clientes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-white text-j2fx-dark hover:bg-j2fx-accent hover:text-white px-8 py-6 font-medium rounded-md transition-all duration-300 text-base"
            >
              <a href="#contact">
                Solicitar orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="bg-transparent text-white hover:bg-white/10 border-white/30 hover:border-white px-8 py-6 font-medium rounded-md transition-all duration-300 text-base"
            >
              <a href="#services">
                Ver soluções
              </a>
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl text-sm text-white/80">
            <div>
              <strong className="block text-2xl text-white">SEO</strong>
              Base técnica pronta para buscadores
            </div>
            <div>
              <strong className="block text-2xl text-white">Mobile</strong>
              Experiência pensada para celular
            </div>
            <div>
              <strong className="block text-2xl text-white">CTA</strong>
              Caminhos claros para conversão
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-full max-w-lg h-[400px] animate-slide-in">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-j2fx-light/20 to-j2fx-accent/20 rounded-2xl blur-3xl"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Notebook com projeto de site em desenvolvimento"
                className="rounded-xl shadow-2xl object-cover max-h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.63,118.92,158.25,56.44,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
