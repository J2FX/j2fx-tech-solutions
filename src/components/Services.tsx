import { Code, LineChart, Search, Shield, Smartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
      <div className="w-12 h-12 rounded-lg bg-j2fx-medium/10 flex items-center justify-center mb-6">
        <Icon className="text-j2fx-medium" size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-j2fx-dark">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#contact" className="text-j2fx-medium hover:text-j2fx-dark font-medium inline-flex items-center gap-2">
        Saiba mais
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 010-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </a>
    </div>
  );
};

const services = [
  {
    icon: Code,
    title: 'Criação de Sites Profissionais',
    description: 'Sites institucionais modernos, responsivos e alinhados ao posicionamento da sua empresa para gerar mais confiança desde o primeiro acesso.'
  },
  {
    icon: LineChart,
    title: 'Landing Pages de Conversão',
    description: 'Páginas focadas em campanhas, lançamentos e captação de leads, com chamadas claras e estrutura pensada para transformar visita em contato.'
  },
  {
    icon: Search,
    title: 'SEO e Performance',
    description: 'Ajustes técnicos, velocidade, metadados e boas práticas para melhorar a presença nos buscadores e a experiência de navegação.'
  },
  {
    icon: Shield,
    title: 'Hospedagem e Segurança',
    description: 'Publicação, HTTPS, domínio, backups e estrutura confiável para seu site ficar online com estabilidade e manutenção simples.'
  },
  {
    icon: Smartphone,
    title: 'Manutenção e Evolução',
    description: 'Atualizações de conteúdo, melhorias contínuas e suporte para manter sua presença digital atualizada conforme o negócio cresce.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-j2fx-dark">
            Soluções para <span className="text-j2fx-medium">vender melhor online</span>
          </h2>
          <div className="mx-auto w-24 h-1 bg-j2fx-accent mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Da primeira versão do site à otimização contínua, cuidamos da parte técnica e estratégica para sua empresa aparecer com mais profissionalismo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="btn-primary">
            <a href="#contact">
              Quero avaliar meu site
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
