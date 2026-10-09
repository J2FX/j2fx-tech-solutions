import {
  ArrowRight,
  CloudCog,
  DatabaseBackup,
  Gauge,
  Globe,
  Headphones,
  Network,
  ShieldCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { selectProjectInterest } from '@/data/projects';

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: ServiceCardProps[] = [
  { icon: Globe, title: 'Desenvolvimento de sites', description: 'Sites institucionais e landing pages adaptados ao celular para apresentar sua empresa, divulgar produtos e facilitar pedidos de orçamento.' },
  {
    icon: Network,
    title: 'Consultoria de infraestrutura',
    description: 'Mapeamento de gargalos, riscos e prioridades para criar uma base técnica mais estável e preparada para crescimento.',
  },
  {
    icon: CloudCog,
    title: 'Cloud e ambientes híbridos',
    description: 'Planejamento de migração, organização de serviços e implantação com foco em segurança, custo e continuidade.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança de dados',
    description: 'Boas práticas de acesso, proteção, segmentação e revisão de pontos críticos para reduzir exposição operacional.',
  },
  {
    icon: Headphones,
    title: 'Suporte gerenciado',
    description: 'Acompanhamento técnico para manter usuários, estações, rede e sistemas funcionando com atendimento claro.',
  },
  {
    icon: DatabaseBackup,
    title: 'Backup e recuperação',
    description: 'Rotinas de cópia, restauração e contingência para reduzir impacto em falhas, perdas ou incidentes.',
  },
  {
    icon: Gauge,
    title: 'Performance e custos',
    description: 'Análise de recursos, contratos e consumo para melhorar velocidade, previsibilidade e eficiência do ambiente.',
  },
];

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
<article className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-j2fx-accent/50 hover:shadow-xl ">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-j2fx-ink text-j2fx-accent transition-colors duration-300 group-hover:bg-j2fx-accent group-hover:text-j2fx-ink">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-j2fx-ink">{title}</h3>
      <p className="mb-5 leading-7 text-slate-600">{description}</p>
      <a href="#contact" onClick={() => selectProjectInterest(title === 'Desenvolvimento de sites' ? 'Site ou landing page' : 'Infraestrutura, cloud e suporte')} className="inline-flex items-center gap-2 font-semibold text-j2fx-medium hover:text-j2fx-ink">
        Explorar solução
        <ArrowRight className="h-4 w-4" />
      </a>
    </article>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-j2fx-medium">Soluções</p>
          <h2 className="mb-5 text-3xl font-bold text-j2fx-ink md:text-4xl">
            Da presença digital à estrutura da sua empresa
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Criamos experiências digitais e sustentamos a tecnologia da operação. Escolha o ponto de partida: um site, uma automação ou uma estrutura de TI mais organizada.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

