
import { Database, Code, Cloud, Shield, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// Simulação do motion para animação
const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string}) => {
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
    icon: Database,
    title: 'Consultoria em Tecnologia',
    description: 'Análise completa da infraestrutura e processos tecnológicos para implementar soluções que otimizem os recursos da sua empresa.'
  },
  {
    icon: Code,
    title: 'Desenvolvimento de Sistemas',
    description: 'Criação de soluções sob medida que automatizam processos, aumentam a produtividade e geram valor para o seu negócio.'
  },
  {
    icon: Cloud,
    title: 'Infraestrutura e Cloud',
    description: 'Implementação e gerenciamento de ambientes em nuvem, servidores e redes que garantem disponibilidade e escalabilidade.'
  },
  {
    icon: Shield,
    title: 'Segurança da Informação',
    description: 'Proteção robusta contra ameaças digitais, auditorias de segurança e implementação de políticas para proteger seus dados.'
  },
  {
    icon: Smartphone,
    title: 'Suporte Técnico Especializado',
    description: 'Equipe disponível para resolver problemas, realizar manutenções e assegurar o funcionamento contínuo de sua infraestrutura.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-j2fx-dark">
            Nossos <span className="text-j2fx-medium">Serviços</span>
          </h2>
          <div className="mx-auto w-24 h-1 bg-j2fx-accent mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos um conjunto completo de soluções tecnológicas para impulsionar a eficiência e competitividade do seu negócio.
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
              Solicite uma consultoria gratuita
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
