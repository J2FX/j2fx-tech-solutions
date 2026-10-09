import { ArrowRight, Globe, Layers, Network } from 'lucide-react';
import { selectProjectInterest } from '@/data/projects';

export default function Hero() {
  return <section id="home" className="relative overflow-hidden bg-j2fx-ink pb-16 pt-36 text-white md:pb-24 md:pt-44">
    <div className="container-custom grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
      <div><p className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-j2fx-accent">J2FX Tecnologia · Da presença digital à operação</p><h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">Tecnologia para sua empresa operar melhor e crescer.</h1><p className="mb-8 mt-6 max-w-2xl text-lg leading-8 text-slate-300">Desenvolvemos sites profissionais, sistemas e automações. Também cuidamos da infraestrutura de TI para conectar sua presença digital à rotina do negócio.</p><div className="flex flex-wrap gap-3"><a href="#projects" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-j2fx-accent px-6 py-3 font-semibold text-j2fx-ink">Ver projetos <ArrowRight size={18} aria-hidden="true" /></a><a href="#contact" onClick={() => selectProjectInterest('Site ou landing page')} className="inline-flex min-h-12 items-center rounded-lg border border-white/30 px-6 py-3 font-semibold">Conversar sobre meu projeto</a></div></div>
      <div className="space-y-4 border-l border-white/15 pl-6 md:pl-8">
        {[{icon:Globe,title:'Sua empresa na internet',text:'Sites e landing pages para apresentar, divulgar e receber contatos.'},{icon:Layers,title:'Seu processo em um sistema',text:'Produtos web e automações para organizar o trabalho.'},{icon:Network,title:'Sua operação bem sustentada',text:'Infraestrutura, cloud, segurança e suporte de TI.'}].map(({icon:Icon,title,text}) => <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6"><Icon className="mb-4 text-j2fx-accent" size={26} aria-hidden="true" /><h2 className="text-xl font-semibold">{title}</h2><p className="mt-2 leading-7 text-slate-300">{text}</p></div>)}
      </div>
    </div>
  </section>;
}
