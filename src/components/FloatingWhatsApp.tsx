import { MessageSquare } from 'lucide-react';

const whatsappUrl = 'https://wa.me/5516981699137?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20J2FX.';

const FloatingWhatsApp = () => {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      aria-label="Enviar mensagem para a J2FX pelo WhatsApp"
    >
      <MessageSquare className="h-7 w-7" />
    </a>
  );
};

export default FloatingWhatsApp;
