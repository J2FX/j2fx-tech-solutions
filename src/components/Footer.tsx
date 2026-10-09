import { Instagram, Linkedin, Mail, MapPin, MessageSquare } from 'lucide-react';

const whatsappUrl = 'https://wa.me/5516981699137?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20J2FX.';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070d14] text-white">
      <div className="container-custom py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-j2fx-accent font-black text-j2fx-ink">
                J2
              </span>
              <h2 className="text-2xl font-bold">
                J2FX<span className="text-j2fx-accent">.</span>
              </h2>
            </div>
            <p className="max-w-md leading-7 text-slate-300">
              Sites profissionais, sistemas, automações e infraestrutura de TI para empresas que querem operar melhor e crescer.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://www.instagram.com/j2fxtecnologia" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-j2fx-medium" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/j2fx-tecnologia" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-j2fx-medium" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-j2fx-medium" aria-label="WhatsApp">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Links rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-300 transition-colors hover:text-white">Início</a></li>
              <li><a href="#projects" className="text-slate-300 transition-colors hover:text-white">Projetos</a></li>
              <li><a href="#services" className="text-slate-300 transition-colors hover:text-white">Soluções</a></li>
              <li><a href="#process" className="text-slate-300 transition-colors hover:text-white">Processo</a></li>
              <li><a href="#faq" className="text-slate-300 transition-colors hover:text-white">FAQ</a></li>
              <li><a href="#contact" className="text-slate-300 transition-colors hover:text-white">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin className="flex-shrink-0 text-j2fx-accent" size={18} />
                <span className="text-slate-300">Franca-SP, Brasil</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="flex-shrink-0 text-j2fx-accent" size={18} />
                <span className="text-slate-300">contato@j2fx.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="flex-shrink-0 text-j2fx-accent" size={18} />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">
                  WhatsApp Business
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          <p>&copy; {currentYear} J2FX Tecnologia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


