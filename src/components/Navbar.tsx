import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, Server, Database } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home', icon: <Code size={16} /> },
    { name: 'Sobre', href: '#about', icon: <Server size={16} /> },
    { name: 'Soluções', href: '#services', icon: <Database size={16} /> },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-j2fx-dark/95 backdrop-blur-sm shadow-lg py-3' : 'bg-j2fx-dark/80 backdrop-blur-sm py-5'
    }`}>
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">
            J2FX<span className="text-j2fx-accent">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-j2fx-accent transition-colors duration-300 font-medium flex items-center gap-2"
            >
              {link.icon && link.icon}
              {link.name}
            </a>
          ))}
          <Button asChild className="bg-j2fx-accent hover:bg-j2fx-accent/80 text-j2fx-dark font-medium">
            <a href="#contact">Pedir proposta</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-j2fx-dark/95 backdrop-blur-sm shadow-lg py-4 px-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-j2fx-accent transition-colors font-medium flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon && link.icon}
                  {link.name}
                </a>
              ))}
              <Button asChild className="bg-j2fx-accent hover:bg-j2fx-accent/80 text-j2fx-dark font-medium self-start">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Pedir proposta</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
