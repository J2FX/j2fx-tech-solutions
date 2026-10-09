import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import WorkProcess from '@/components/WorkProcess';
import UseCases from '@/components/UseCases';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  useEffect(() => {
    // Função para animar elementos quando entrarem na viewport
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    // Configurar o Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    });

    // Aplicar a todos os elementos com a classe animate-on-scroll
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => {
      // Limpar o observer quando o componente for desmontado
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Portfolio />
      <AboutUs />
      <Services />
      <WorkProcess />
      <UseCases />
      <FAQ />
      <CallToAction />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;


