import { ClipboardCheck, FileText, Rocket, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type ProcessStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: ProcessStep[] = [
  {
    icon: ClipboardCheck,
    title: 'Diagnóstico',
    description: 'Entendemos o cenário, os riscos, as prioridades e o impacto real da tecnologia na operação.',
  },
  {
    icon: FileText,
    title: 'Plano técnico',
    description: 'Organizamos um caminho claro, com etapas, escopo e recomendações que fazem sentido para o momento da empresa.',
  },
  {
    icon: Rocket,
    title: 'Implementação',
    description: 'Executamos melhorias, automações ou projetos com cuidado para reduzir interrupções e manter a rotina funcionando.',
  },
  {
    icon: ShieldCheck,
    title: 'Acompanhamento',
    description: 'Mantemos suporte, evolução e ajustes para que a solução continue útil depois da primeira entrega.',
  },
];

const WorkProcess = () => {
  return (
    <section id="process" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-j2fx-medium">
            Como trabalhamos
          </p>
          <h2 className="mb-5 text-3xl font-bold text-j2fx-ink md:text-4xl">
            Um processo simples para tirar tecnologia do improviso
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Seja em infraestrutura, suporte ou automações, a J2FX começa entendendo o problema antes de propor ferramenta. Isso evita soluções bonitas no papel e frágeis na operação.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, description }, index) => (
<article key={title} className="relative rounded-lg border border-slate-200 bg-white p-6 shadow-sm ">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-j2fx-ink text-j2fx-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-bold text-slate-300">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-j2fx-ink">{title}</h3>
              <p className="leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
