
import { MapPin, Mail, Phone, MessageSquare, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-j2fx-dark text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <h2 className="text-3xl font-bold">
                J2FX<span className="text-j2fx-accent">.</span>
              </h2>
            </div>
            <p className="text-white/80 mb-6">
              Soluções tecnológicas personalizadas para impulsionar a inovação e a eficiência do seu negócio.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/j2fxtecnologia" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-j2fx-medium transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/company/j2fx-tecnologia" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-j2fx-medium transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://wa.me/5516981699137" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-j2fx-medium transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin className="text-j2fx-accent flex-shrink-0" size={18} />
                <span className="text-white/80">
                  Franca-SP, Brasil
                </span>
              </li> 
              <li className="flex items-center gap-3">
                <Mail className="text-j2fx-accent flex-shrink-0" size={18} />
                <span className="text-white/80">
                  tecnologia@j2fx.com.br
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-white/60">
          <p>&copy; {currentYear} J2FX Tecnologia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
