import { ArrowRight, CheckCircle2, LockKeyhole, Network, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-j2fx-ink pt-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,200,255,0.20),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(42,100,150,0.24),transparent_30%),linear-gradient(135deg,#07111d_0%,#0f1419_52%,#102a42_100%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="container-custom relative z-10 grid min-h-[calc(100vh-6rem)] items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-j2fx-accent" />
            Consultoria, infraestrutura e suporte para empresas
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Infraestrutura de TI que escala com seu negócio
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            Planejamos, implementamos e sustentamos ambientes tecnológicos para empresas que precisam de segurança, disponibilidade e crescimento sem improviso.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 rounded-md bg-j2fx-accent px-6 font-semibold text-j2fx-ink hover:bg-white"
            >
              <a href="#contact">
                Agende seu diagnóstico gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="h-12 rounded-md border-white/25 bg-white/5 px-6 font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#services">Conheça as soluções</a>
            </Button>
          </div>

          <div className="mt-10 grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
            {['Diagnóstico técnico', 'Implantação planejada', 'Operação assistida'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-j2fx-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-slide-in">
          <div className="rounded-lg border border-white/12 bg-white/8 p-4 shadow-2xl backdrop-blur-md">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-slate-400">Ambiente monitorado</p>
                <p className="text-lg font-semibold">J2FX Control Center</p>
              </div>
              <div className="rounded-md bg-emerald-400/15 px-3 py-1 text-sm font-semibold text-emerald-200">
                Online
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-white/10 bg-j2fx-ink/70 p-4">
                <Network className="mb-4 h-8 w-8 text-j2fx-accent" />
                <p className="text-sm text-slate-400">Rede</p>
                <p className="mt-1 text-2xl font-bold">Mapeada</p>
                <p className="mt-2 text-sm text-slate-400">visibilidade para decisões</p>
              </div>
              <div className="rounded-md border border-white/10 bg-j2fx-ink/70 p-4">
                <LockKeyhole className="mb-4 h-8 w-8 text-j2fx-accent" />
                <p className="text-sm text-slate-400">Segurança</p>
                <p className="mt-1 text-2xl font-bold">Em camadas</p>
                <p className="mt-2 text-sm text-slate-400">proteção por prioridade</p>
              </div>
            </div>

            <div className="mt-4 rounded-md border border-cyan-300/20 bg-cyan-300/10 p-4">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-cyan-100">Riscos mapeados</span>
                <span className="font-semibold text-white">Diagnóstico ativo</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-2 w-4/5 rounded-full bg-j2fx-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
