import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Início', href: '#home' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Soluções', href: '#services' },
  { name: 'Processo', href: '#process' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contato', href: '#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'border-b border-white/10 bg-j2fx-ink/95 py-3 shadow-xl backdrop-blur' : 'bg-j2fx-ink/70 py-5 backdrop-blur'
    }`}>
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3" aria-label="J2FX Tecnologia">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-j2fx-accent font-black text-j2fx-ink">
            J2
          </span>
          <span className="text-xl font-bold text-white">
            J2FX<span className="text-j2fx-accent">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-200 transition-colors duration-300 hover:text-j2fx-accent"
            >
              {link.name}
            </a>
          ))}
<Button asChild className="rounded-md bg-j2fx-accent font-semibold text-j2fx-ink hover:bg-white">
            <a href="#contact">Solicitar orçamento</a>
          </Button>
        </div>

        <button
          className="rounded-md p-2 text-white lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="absolute left-0 top-full w-full border-t border-white/10 bg-j2fx-ink/98 px-6 py-5 shadow-xl backdrop-blur lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-semibold text-white transition-colors hover:text-j2fx-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
<Button asChild className="self-start rounded-md bg-j2fx-accent font-semibold text-j2fx-ink hover:bg-white">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Solicitar orçamento</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


