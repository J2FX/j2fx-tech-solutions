import React, { useState, useEffect, useRef } from 'react';
import fotoEdison from "./fotoedison.jpeg";

export default function EdisonSoaresImoveis() {
  // --- Estados do Componente ---
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Estados para os Contadores de Estatísticas ---
  const [yearsCount, setYearsCount] = useState(0);
  const [soldCount, setSoldCount] = useState(0);
  const [familiesCount, setFamiliesCount] = useState(0);

  // --- Refs para Animações e Scroll ---
  const heroLeadRef = useRef<HTMLSpanElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroDescRef = useRef<HTMLParagraphElement>(null);
  const heroCtaRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const statsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Staggered Entrance Elements on Hero Load
    setTimeout(() => heroLeadRef.current?.classList.remove('opacity-0', 'translate-y-4'), 200);
    setTimeout(() => heroTitleRef.current?.classList.remove('opacity-0', 'translate-y-6'), 400);
    setTimeout(() => heroDescRef.current?.classList.remove('opacity-0', 'translate-y-4'), 600);
    setTimeout(() => heroCtaRef.current?.classList.remove('opacity-0', 'translate-y-4'), 800);

    // 2. Hero Parallax / Scale Animation Effect on Scroll
    const handleScroll = () => {
      const scrollPos = window.pageYOffset;
      if (scrollPos < window.innerHeight && heroBgRef.current) {
        heroBgRef.current.style.transform = `scale(${1.05 - scrollPos * 0.00015}) translateY(${scrollPos * 0.15}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);

    // 3. Scroll-Triggered Layout Reveal Mechanisms usando IntersectionObserver
    const revealCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    };
    const revealObserver = new IntersectionObserver(revealCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });
    const hiddenElements = document.querySelectorAll('.reveal-hidden');
    hiddenElements.forEach((el) => revealObserver.observe(el));

    // 4. Observer para Disparar os Contadores de Estatísticas
    const statsCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(18, setYearsCount);
          animateCounter(900, setSoldCount);
          animateCounter(350, setFamiliesCount);
          observer.unobserve(entry.target);
        }
      });
    };
    const statsObserver = new IntersectionObserver(statsCallback, { threshold: 0.5 });
    if (statsSectionRef.current) statsObserver.observe(statsSectionRef.current);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  // --- Função Auxiliar de Animação de Números ---
  const animateCounter = (target: number, setCounter: React.Dispatch<React.SetStateAction<number>>) => {
    let count = 0;
    const speed = target / 40;
    const updateCount = () => {
      count += speed;
      if (count < target) {
        setCounter(Math.floor(count));
        setTimeout(updateCount, 20);
      } else {
        setCounter(target);
      }
    };
    updateCount();
  };

  // --- Mecanismo Premium 3D Hover Tilt para os Cards ---
  const handleMouseMoveCard = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(max-width: 768px)').matches) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xc = rect.width / 2;
    const yc = rect.height / 2;

    const angleX = ((yc - y) / yc) * 6;
    const angleY = ((x - xc) / xc) * 6;

    card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.015)`;
    card.style.transition = 'transform 0.1s ease-out';
  };

  const handleMouseLeaveCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    card.style.transition = 'transform 0.5s ease-out';
  };

  // --- Manipulação do Envio de Formulário ---
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1800);
  };

  return (
    <div className="font-sans antialiased text-ink bg-paper selection:bg-brass selection:text-ink">
      {/* Injeção Manual de Estilos Específicos e Variáveis do Tailwind */}
      <style>{`
        .noise-overlay {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          content: "";
          opacity: 0.035;
          z-index: 9999;
          pointer-events: none;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        .tilt-card-container { perspective: 1000px; }
        .reveal-hidden {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1.2s cubic-bezier(0.215, 0.610, 0.355, 1);
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .luxury-link { position: relative; }
        .luxury-link::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: #B8956A;
          transform-origin: bottom center;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .luxury-link:hover::after { transform: scaleX(1); }
        
        /* Extensões das classes utilitárias baseadas no config original */
        .text-ink { color: #1A1A1A; }
        .bg-ink { background-color: #1A1A1A; }
        .text-brass { color: #B8956A; }
        .bg-brass { background-color: #B8956A; }
        .border-brass { border-color: #B8956A; }
        .text-stone { color: #8A8A8A; }
        .border-stone { border-color: #8A8A8A; }
        .bg-charcoal { background-color: #2E2E2E; }
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .tracking-editorial { letter-spacing: 0.18em; }
      `}</style>

      {/* Camada de Textura Sutil de Ruído */}
      <div className="noise-overlay" />

      {/* 1. HERO DE LUXO */}
      <header id="home" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-ink text-white">
        <div
          ref={heroBgRef}
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out scale-105"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(15,15,15,0.9) 0%, rgba(26,26,26,0.65) 50%, rgba(26,26,26,0.7) 100%), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />

        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brass/10 rounded-full filter blur-[120px] mix-blend-screen pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

        {/* Navigation Bar */}
        <div className="w-full max-w-7xl mx-auto px-6 pt-8 z-50 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl tracking-wide font-light text-white">Edison Soares</span>
            <span className="text-[10px] tracking-editorial uppercase text-gray-300 mt-0.5 font-medium">Imóveis de Alto Padrão • Franca, SP</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 bg-white/10 border border-white/20 backdrop-blur-md px-8 py-3 rounded-full">
<a href="#portfolio" className="text-xs uppercase tracking-editorial text-white hover:text-brass transition-colors font-medium">Portfólio</a>
            <a href="#corretor" className="text-xs uppercase tracking-editorial text-white hover:text-brass transition-colors font-medium">O Corretor</a>
            <a href="#faq" className="text-xs uppercase tracking-editorial text-white hover:text-brass transition-colors font-medium">FAQ</a>
            <a href="#contato" className="text-xs uppercase tracking-editorial text-white hover:text-brass transition-colors font-medium">Contato</a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-end w-8 h-8 space-y-1.5 focus:outline-none"
            aria-label="Menu principal"
          >
            <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-0 w-6' : 'w-4'}`} />
          </button>
        </div>

        {/* Dropdown Menu Mobile */}
        <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} fixed inset-0 z-40 bg-ink/95 flex flex-col justify-center items-center space-y-8 text-center backdrop-blur-lg`}>
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl tracking-wide text-white hover:text-brass transition-colors">Portfólio</a>
          <a href="#corretor" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl tracking-wide text-white hover:text-brass transition-colors">O Corretor</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl tracking-wide text-white hover:text-brass transition-colors">FAQ</a>
          <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl tracking-wide text-white hover:text-brass transition-colors">Contato</a>
        </div>

        {/* Center Editorial Headline */}
        <div className="w-full max-w-4xl mx-auto px-6 z-10 text-center flex-grow flex flex-col justify-center items-center mt-12">
          <span ref={heroLeadRef} className="text-xs md:text-sm uppercase tracking-editorial text-brass mb-4 font-semibold opacity-0 transition-all duration-1000 translate-y-4">
            Assessoria imobiliária exclusiva
          </span>
          <h1 ref={heroTitleRef} className="font-serif text-4xl sm:text-5xl md:text-[5vw] leading-[1.1] tracking-tight font-light max-w-3xl text-white opacity-0 transition-all duration-1000 delay-300 translate-y-6">
            Encontre o endereço que define a sua história.
          </h1>
          <p ref={heroDescRef} className="text-sm md:text-base font-normal text-gray-200 max-w-2xl mt-6 leading-relaxed opacity-0 transition-all duration-1000 delay-500 translate-y-4">
            Imóveis selecionados criteriosamente em Franca e região. Um atendimento personalizado desenhado do primeiro contato à entrega das chaves.
          </p>

          <div ref={heroCtaRef} className="mt-10 opacity-0 transition-all duration-1000 delay-700 translate-y-4">
            <a href="#contato" className="group relative inline-flex items-center justify-center bg-brass text-ink text-xs font-bold uppercase tracking-editorial px-8 py-4 transition-all duration-300 hover:shadow-2xl hover:bg-brass/90">
              <span>Agendar uma consulta privada</span>
              <svg className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Informational Strip Container */}
        <div className="w-full max-w-7xl mx-auto px-6 pb-8 z-10">
<div className="flex flex-col sm:flex-row justify-between items-center bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl sm:rounded-full border border-white/20 shadow-xl">
            <div className="flex items-center space-x-2 text-xs font-medium text-gray-300 tracking-wide">
              <span>CRECI</span>
              <span className="text-white font-bold">309592-F</span>
            </div>
            <div className="text-[15px] font-serif font-light tracking-wide text-white mt-2 sm:mt-0 text-center">
              "Imóveis extraordinários. Relacionamentos que duram gerações."
            </div>
            <a href="https://wa.me/5516991212240" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 mt-2 sm:mt-0 text-xs font-bold tracking-editorial text-brass hover:text-white transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>(16) 99121-2240</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. PORTFÓLIO CURADO (BENTO GRID) */}
      <section id="portfolio" className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16 reveal-hidden">
          <span className="text-xs uppercase tracking-editorial text-stone">Portfólio Curado</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-ink mt-2 mb-4">Propriedades com propósito.</h2>
          <p className="text-stone font-light text-sm md:text-base leading-relaxed">Cada imóvel é pessoalmente visitado, rigorosamente avaliado e apresentado com a precisão estética e documental que um investimento de alta magnitude exige.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 tilt-card-container">
          {/* Card 1 */}
          <div
            onMouseMove={handleMouseMoveCard}
            onMouseLeave={handleMouseLeaveCard}
            className="md:col-span-4 md:row-span-2 relative group overflow-hidden bg-charcoal h-[450px] md:h-[620px] shadow-lg flex flex-col justify-end p-6 md:p-8 reveal-hidden"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-105" style={{ backgroundImage: `linear-gradient(to top, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.3) 50%, transparent 100%), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')` }} />
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 border border-white/10 text-white text-[10px] uppercase tracking-wider font-light">Exclusivo</div>
            <div className="relative z-10">
              <span className="text-xs text-brass tracking-widest uppercase font-medium">Casa Contemporânea</span>
              <h3 className="font-serif text-2xl md:text-3xl font-light text-white mt-1 mb-2">Residência Santa Lúcia</h3>
<p className="text-stone text-xs md:text-sm font-light max-w-md mb-4">Linhas modernistas, integração total de ambientes com pé-direito duplo e acabamento em mármore travertino.</p>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="font-serif text-xl text-white font-light">R$ 1.850.000</span>
                <span className="text-xs text-brass luxury-link cursor-pointer uppercase tracking-wider">Ver detalhes</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            onMouseMove={handleMouseMoveCard}
            onMouseLeave={handleMouseLeaveCard}
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-charcoal h-[450px] md:h-[620px] shadow-lg flex flex-col justify-end p-6 reveal-hidden"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-105" style={{ backgroundImage: `linear-gradient(to top, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.4) 60%, transparent 100%), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80')` }} />
            <div className="relative z-10">
              <span className="text-xs text-brass tracking-widest uppercase font-medium">Cobertura Vista Livre</span>
              <h3 className="font-serif text-2xl font-light text-white mt-1 mb-2">Mirante Paulistano</h3>
              <p className="text-stone text-xs font-light mb-4">Panorâmica definitiva da cidade com piscina privativa suspensa e automação residencial completa de última geração.</p>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="font-serif text-xl text-white font-light">R$ 2.300.000</span>
                <span className="text-xs text-brass luxury-link cursor-pointer uppercase tracking-wider">Ver detalhes</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            onMouseMove={handleMouseMoveCard}
            onMouseLeave={handleMouseLeaveCard}
            className="md:col-span-3 relative group overflow-hidden bg-charcoal h-[380px] shadow-lg flex flex-col justify-end p-6 reveal-hidden"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-105" style={{ backgroundImage: `linear-gradient(to top, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.3) 50%, transparent 100%), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80')` }} />
            <div className="relative z-10">
              <span className="text-xs text-brass tracking-widest uppercase font-medium">Apartamento Garden</span>
              <h3 className="font-serif text-xl font-light text-white mt-1 mb-1">Concept Centro</h3>
              <p className="text-stone text-xs font-light mb-3">O equilíbrio perfeito entre a segurança de um edifício de alto padrão e o aconchego do quintal verde privativo.</p>
              <div className="flex items-center justify-between border-t border-white/10 pt-3">
                <span className="font-serif text-lg text-white font-light">R$ 890.000</span>
                <span className="text-xs text-brass luxury-link cursor-pointer uppercase tracking-wider">Ver detalhes</span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div
            onMouseMove={handleMouseMoveCard}
            onMouseLeave={handleMouseLeaveCard}
            className="md:col-span-3 relative group overflow-hidden bg-charcoal h-[380px] shadow-lg flex flex-col justify-end p-6 reveal-hidden"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-105" style={{ backgroundImage: `linear-gradient(to top, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.3) 50%, transparent 100%), url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80')` }} />
            <div className="relative z-10">
              <span className="text-xs text-brass tracking-widest uppercase font-medium">Sobrado de Charme</span>
              <h3 className="font-serif text-xl font-light text-white mt-1 mb-1">Vila Hípica Elegance</h3>
              <p className="text-stone text-xs font-light mb-3">Arquitetura neoclássica impecável com área gourmet de alto padrão integrada a uma piscina aquecida.</p>
              <div className="flex items-center justify-between border-t border-white/10 pt-3">
                <span className="font-serif text-lg text-white font-light">R$ 1.200.000</span>
                <span className="text-xs text-brass luxury-link cursor-pointer uppercase tracking-wider">Ver detalhes</span>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div
            onMouseMove={handleMouseMoveCard}
            onMouseLeave={handleMouseLeaveCard}
            className="md:col-span-3 relative group overflow-hidden bg-charcoal h-[320px] shadow-lg flex flex-col justify-end p-6 reveal-hidden"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-105" style={{ backgroundImage: `linear-gradient(to top, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.3) 50%, transparent 100%), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80')` }} />
            <div className="relative z-10">
              <span className="text-xs text-brass tracking-widest uppercase font-medium">Terreno Premium</span>
              <h3 className="font-serif text-xl font-light text-white mt-1 mb-1">Residencial São Luiz</h3>
              <p className="text-stone text-xs font-light mb-3">Lote plano em ilha de altíssima privacidade, pronto para receber projetos de arquitetura monumental.</p>
              <div className="flex items-center justify-between border-t border-white/10 pt-3">
                <span className="font-serif text-lg text-white font-light">R$ 420.000</span>
                <span className="text-xs text-brass luxury-link cursor-pointer uppercase tracking-wider">Ver detalhes</span>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div
            onMouseMove={handleMouseMoveCard}
            onMouseLeave={handleMouseLeaveCard}
            className="md:col-span-3 relative group overflow-hidden bg-charcoal h-[320px] shadow-lg flex flex-col justify-end p-6 reveal-hidden"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-105" style={{ backgroundImage: `linear-gradient(to top, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.3) 50%, transparent 100%), url('https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80')` }} />
            <div className="relative z-10">
              <span className="text-xs text-brass tracking-widest uppercase font-medium">Chácara de Lazer</span>
              <h3 className="font-serif text-xl font-light text-white mt-1 mb-1">Oásis Rural Privado</h3>
              <p className="text-stone text-xs font-light mb-3">Conexão perfeita com a natureza a poucos minutos do centro urbano, com pomar formado e represa interna.</p>
              <div className="flex items-center justify-between border-t border-white/10 pt-3">
                <span className="font-serif text-lg text-white font-light">R$ 1.600.000</span>
                <span className="text-xs text-brass luxury-link cursor-pointer uppercase tracking-wider">Ver detalhes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center reveal-hidden">
          <a href="#contato" className="luxury-link inline-block text-xs uppercase tracking-editorial font-medium text-ink hover:text-brass transition-colors py-1">
            Ver portfólio completo →
          </a>
        </div>
      </section>

      {/* 3. PERFIL EDITORIAL DO CORRETOR */}
      <section id="corretor" className="bg-paper border-t border-b border-stone/10 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-stone/20" />

          {/* Left Image Column */}
          <div className="relative flex justify-center md:justify-start reveal-hidden">
            <div className="relative w-full max-w-md aspect-[4/5] bg-stone/10 overflow-hidden shadow-2xl">
              <img
                src={fotoEdison}
                alt="Edison Soares - Consultor Imobiliário de Alto Padrão"
                className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 transition-all duration-1000 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-brass/20 m-4 pointer-events-none" />
            </div>
          </div>

          {/* Right Content Column */}
          <div ref={statsSectionRef} className="flex flex-col justify-center reveal-hidden">
            <span className="text-xs uppercase tracking-editorial text-stone">O Corretor</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-ink mt-2 mb-4">Edison Soares</h2>
<h4 className="text-xs uppercase tracking-editorial text-brass font-medium mb-6">Negociador. Consultor. Guardião de decisões importantes.</h4>

            <div className="space-y-4 text-stone font-light text-sm md:text-base leading-relaxed max-w-lg">
              <p>Atuar no mercado de altíssimo padrão exige mais do que intermediar transações financeiras; requer a sensibilidade de compreender o valor do tempo, o apreço pela discrição e o respeito ao patrimônio construído por uma vida.</p>
              <p>Com profundo conhecimento do vetor de crescimento imobiliário de Franca e região, meu compromisso principal reside na curadoria assertiva, mitigando riscos legais e maximizando a solidez de investimentos patrimoniais de longo prazo.</p>
            </div>

            {/* Stats Counters Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-10 border-t border-stone/20 pt-8 max-w-md">
              <div>
                <span className="block font-serif text-3xl text-ink font-light">{yearsCount}</span>
                <span className="text-[11px] uppercase tracking-wider text-stone mt-1 block">Anos de mercado</span>
              </div>
              <div>
                <span className="block font-serif text-3xl text-ink font-light flex items-center">{soldCount}+</span>
                <span className="text-[11px] uppercase tracking-wider text-stone mt-1 block">Imóveis vendidos</span>
              </div>
              <div>
                <span className="block font-serif text-3xl text-ink font-light flex items-center">{familiesCount}+</span>
                <span className="text-[11px] uppercase tracking-wider text-stone mt-1 block">Famílias atendidas</span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-brass font-light tracking-tight mt-1">309592-F</span>
                <span className="text-[11px] uppercase tracking-wider text-stone mt-1 block">Inscrição CRECI</span>
              </div>
            </div>

            <div className="mt-10">
              <a href="https://wa.me/5516991212240" target="_blank" rel="noopener noreferrer" className="border border-brass text-brass hover:bg-brass hover:text-ink text-xs font-semibold uppercase tracking-editorial px-8 py-4 transition-all duration-300 inline-flex items-center">
                <span>Fale comigo no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ ACORDEÃO MINIMALISTA */}
      <section id="faq" className="py-24 max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 reveal-hidden">
          <span className="text-xs uppercase tracking-editorial text-stone">Perguntas Frequentes</span>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-ink mt-2 mb-3">Clareza em cada etapa.</h2>
          <p className="text-stone font-light text-sm max-w-md mx-auto">Antecipamos suas principais dúvidas burocráticas e mercadológicas para que sua jornada seja absolutamente segura.</p>
        </div>

        <div className="space-y-2 reveal-hidden">
          {[
            {
              q: 'Como funciona o atendimento exclusivo?',
              a: 'O atendimento é pautado no formato "Single Point of Contact", onde todas as frentes de busca, triagem jurídica, análise de vizinhança e prospecção ativa de compradores são centralizadas individualmente pelo próprio corretor, garantindo sigilo absoluto.',
            },
            {
              q: 'Vocês trabalham com financiamento imobiliário?',
              a: 'Sim. Possuímos canal direto com correspondentes de alta renda dos principais bancos nacionais (Itaú Personnalité, Santander Select e Bradesco Prime) para otimizar as taxas e agilizar os laudos técnicos de avaliação predial.',
            },
            {
              q: 'Quais documentos preciso para vender um imóvel de alto padrão?',
              a: 'Inicialmente, precisamos da matrícula atualizada do imóvel (com menos de 30 dias), certidão de ônus reais e as certidões negativas pessoais dos proprietários. Nossa assessoria realiza o levantamento completo desse checklist sem fricção para você.',
            },
            {
              q: 'Atendem apenas na cidade de Franca?',
              a: 'Nossa sede e maior volume de portfólio físico concentram-se nos bairros e condomínios nobres de Franca/SP, porém operamos de forma expandida em fazendas produtoras e áreas industriais estratégicas em toda a macrorregião da Alta Mogiana e sul de Minas Gerais.',
            },
            {
              q: 'Como agendar uma visita presencial às propriedades?',
              a: 'As visitas devem ser agendadas com antecedência mínima de 24 a 48 horas. Esse prazo é indispensável para alinhar os protocolos de segurança e checagem de acessos junto às administrações dos condomínios fechados ou residências habitadas.',
            },
          ].map((item, index) => (
            <div key={index} className="border-b border-stone/20">
              <button
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="w-full py-5 text-left flex justify-between items-center text-ink group focus:outline-none"
                aria-expanded={activeFaq === index}
              >
                <span className="font-serif text-lg font-light tracking-wide pr-4 group-hover:text-brass transition-colors">{item.q}</span>
                <span className={`text-brass text-xl transform transition-transform duration-300 pointer-events-none ${activeFaq === index ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: activeFaq === index ? '200px' : '0px',
                  opacity: activeFaq === index ? 1 : 0,
                }}
              >
                <p className="pb-5 text-sm font-light text-stone leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FORMULÁRIO DE CONCIERGE PRIVADO */}
      <section id="contato" className="bg-ink text-white py-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brass/5 rounded-full filter blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
          {/* Panel esquerdo */}
          <div className="lg:col-span-5 reveal-hidden">
            <span className="text-xs uppercase tracking-editorial text-stone">Contato</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white mt-2 mb-4">Inicie uma conversa privada.</h2>
            <p className="text-stone font-light text-sm md:text-base leading-relaxed mb-8">Preencha os dados ao lado para podermos calibrar as melhores opções mercadológicas. Todas as informações submetidas são tratadas sob estrito sigilo corporativo e confidencialidade total.</p>

            <div className="space-y-6 pt-6 border-t border-white/10">
              <div>
                <span className="text-[10px] tracking-editorial uppercase text-stone block">Endereço de Atendimento</span>
                <span className="font-serif text-lg font-light text-white mt-1 block">Franca, SP — Brasil</span>
              </div>
              <div>
<span className="text-[10px] tracking-editorial uppercase text-stone block">Linha Direta de Urgência</span>
                <a href="https://wa.me/5516991212240" target="_blank" rel="noopener noreferrer" className="font-serif text-xl font-light text-brass hover:text-white transition-colors mt-1 block">(16) 99121-2240</a>
              </div>
            </div>
          </div>

          {/* Card do Formulário */}
          <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 backdrop-blur-xl p-8 md:p-10 shadow-2xl rounded-none relative reveal-hidden">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="nome" className="text-[10px] uppercase tracking-editorial text-stone">Nome completo *</label>
                  <input type="text" id="nome" required className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-brass transition-colors rounded-none placeholder-white/20" placeholder="Ex: Dr. Alberto Mendonça" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-editorial text-stone">E-mail corporativo ou pessoal *</label>
                  <input type="email" id="email" required className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-brass transition-colors rounded-none placeholder-white/20" placeholder="exemplo@dominio.com.br" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="whatsapp" className="text-[10px] uppercase tracking-editorial text-stone">WhatsApp direto *</label>
                  <input type="tel" id="whatsapp" required className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-brass transition-colors rounded-none placeholder-white/20" placeholder="(16) 99999-0000" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="intencao" className="text-[10px] uppercase tracking-editorial text-stone">Qual o seu objetivo primário?</label>
                  <select id="intencao" className="bg-charcoal border border-white/10 px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-brass transition-colors rounded-none appearance-none cursor-pointer">
                    <option value="comprar">Comprar um imóvel exclusivo</option>
                    <option value="vender">Vender minha propriedade silenciosamente</option>
                    <option value="avaliar">Avaliação técnica patrimonial</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="mensagem" className="text-[10px] uppercase tracking-editorial text-stone">Particularidades ou requisitos específicos</label>
                <textarea id="mensagem" rows={4} className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-brass transition-colors rounded-none placeholder-white/20 resize-none" placeholder="Descreva os parâmetros ideais do imóvel (metragem mínima, localização preferencial, etc.)" />
              </div>

              <div className="pt-2">
                <button type="submit" disabled={isSubmitting} className="w-full bg-brass text-ink text-xs font-semibold uppercase tracking-editorial py-4 transition-all duration-300 hover:bg-brass/90 flex justify-center items-center relative overflow-hidden disabled:opacity-80">
                  <span>{isSubmitting ? 'Verificando chaves de segurança...' : 'Solicitar contato privado'}</span>
                </button>
              </div>
            </form>

            <div className={`${formSubmitted ? 'flex' : 'hidden'} absolute inset-0 bg-ink/95 flex flex-col justify-center items-center text-center p-8 transition-opacity duration-500`}>
              <svg className="w-12 h-12 text-brass mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="font-serif text-2xl font-light text-white mb-2">Solicitação Recebida.</h4>
              <p className="text-stone text-sm font-light max-w-sm">Edison Soares retornará o contato pessoalmente de maneira altamente discreta nas próximas 2 horas úteis.</p>
            </div>
          </div>
        </div>

        {/* Corporate Editorial Footer Area */}
        <footer className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-stone text-[11px] uppercase tracking-wider space-y-4 sm:space-y-0">
          <div>CRECI 309592-F • Todos os direitos reservados.</div>
          <div className="font-serif lowercase text-sm tracking-normal">edisonsoaresimoveis.com.br</div>
          <div className="flex space-x-4">
            <a href="https://wa.me/5516991212240" target="_blank" rel="noopener noreferrer" className="hover:text-brass transition-colors">WhatsApp Concierge</a>
            <span>•</span>
            <a href="#home" className="hover:text-brass transition-colors">Voltar ao topo</a>
          </div>
        </footer>
      </section>
    </div>
  );
}