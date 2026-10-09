import { ClipboardCheck, Cpu, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: ClipboardCheck,
    title: 'Diagnóstico profundo',
    description: 'Entendemos operação, riscos, usuários e dependências antes de recomendar qualquer solução.',
  },
  {
    icon: Cpu,
    title: 'Implementação ágil',
    description: 'Planejamos mudanças com etapas claras para reduzir interrupções e manter a rotina da empresa andando.',
  },
  {
    icon: ShieldCheck,
    title: 'Suporte próximo',
    description: 'Acompanhamento técnico com linguagem objetiva, priorização correta e foco no que afeta o negócio.',
  },
];

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-j2fx-medium">Sobre a J2FX</p>
            <h2 className="mb-5 text-3xl font-bold text-j2fx-ink md:text-4xl">
              TI com visão de operação, segurança e crescimento
            </h2>
            <p className="leading-8 text-slate-600">
              A J2FX Tecnologia ajuda empresas a saírem do suporte reativo para uma gestão técnica mais planejada. Nosso trabalho combina consultoria, implantação e sustentação para que infraestrutura, cloud e segurança deixem de ser pontos de incerteza.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, description }) => (
<article key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-5 ">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-j2fx-ink text-j2fx-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-bold text-j2fx-ink">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
