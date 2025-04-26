import { Shield, Code, Users } from 'lucide-react';
import TechBackground from './TechBackground';

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <TechBackground />
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-j2fx-dark">
            Sobre a <span className="text-j2fx-medium">J2FX</span>
          </h2>
          <div className="mx-auto w-24 h-1 bg-j2fx-accent mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Somos uma empresa especializada em fornecer soluções tecnológicas completas e personalizadas para negócios de todos os tamanhos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-j2fx-dark">
              Nossa Missão
            </h3>
            <p className="text-gray-600 mb-6">
              Transformar a maneira como as empresas utilizam a tecnologia, 
              oferecendo soluções inovadoras e sob medida que impulsionam 
              a eficiência operacional, segurança e crescimento sustentável.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-j2fx-dark">
              Por que escolher a J2FX?
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-j2fx-accent/20 flex items-center justify-center text-j2fx-medium">
                  <Shield size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-j2fx-dark">Expertise Comprovada</h4>
                  <p className="text-gray-600">Nossa equipe é formada por especialistas com ampla experiência em tecnologia empresarial.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-j2fx-accent/20 flex items-center justify-center text-j2fx-medium">
                  <Code size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-j2fx-dark">Soluções Sob Medida</h4>
                  <p className="text-gray-600">Cada projeto é único e desenvolvido de acordo com as necessidades específicas do seu negócio.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-j2fx-accent/20 flex items-center justify-center text-j2fx-medium">
                  <Users size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-j2fx-dark">Atendimento Personalizado</h4>
                  <p className="text-gray-600">Oferecemos um relacionamento próximo e contínuo, compreendendo profundamente os objetivos do seu negócio.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-j2fx-accent/10 rounded-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-j2fx-medium/10 rounded-lg"></div>
            <div className="relative z-10 bg-white shadow-xl p-1 rounded-lg">
              <img 
                src="/lovable-uploads/a89b8f4a-9393-4329-8709-9390bf7d52cb.png"
                alt="J2FX Tecnologia" 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
