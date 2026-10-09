import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { projects, selectProjectInterest } from '@/data/projects';
import NotFound from './NotFound';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find(item => item.slug === slug);
  useEffect(() => {
    if (!project) return;
    const previousTitle = document.title;
    document.title = `${project.name} | Projetos J2FX Tecnologia`;
    window.scrollTo(0, 0);
    return () => { document.title = previousTitle; };
  }, [project]);
  if (!project) return <NotFound />;
  const Icon = project.icon;
  const contactUrl = `https://wa.me/5516981699137?text=${encodeURIComponent(`Olá! Conheci o projeto ${project.name} no site da J2FX e quero conversar sobre uma solução para minha empresa.`)}`;
  return <div className="min-h-screen bg-white text-j2fx-ink">
    <header className="border-b border-slate-200"><nav aria-label="Navegação do projeto" className="container-custom flex flex-wrap items-center justify-between gap-3 py-5"><a href="/" className="text-2xl font-bold">J2FX<span className="text-j2fx-medium">.</span></a><a href="/#projects" className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold"><ArrowLeft size={18} aria-hidden="true" />Todos os projetos</a></nav></header>
    <main>
      <section className={`${project.color} py-16 md:py-24`}><div className="container-custom grid items-center gap-10 md:grid-cols-[1.3fr_0.7fr]"><div><p className="mb-4 text-sm font-semibold uppercase tracking-widest">Projeto J2FX · {project.category}</p><h1 className="text-4xl font-bold md:text-6xl">{project.name}</h1><p className="mt-6 max-w-2xl text-xl leading-8">{project.summary}</p><a href="#sobre-projeto" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-lg bg-j2fx-ink px-6 py-3 font-semibold text-white">Conhecer a solução <ArrowRight size={18} aria-hidden="true" /></a></div><div className="flex items-center justify-center rounded-3xl border border-current/10 bg-white/50 p-12"><Icon size={120} strokeWidth={1} aria-hidden="true" /></div></div></section>
      <section id="sobre-projeto" className="container-custom grid gap-10 py-16 md:grid-cols-2"><div><p className="mb-3 text-sm font-bold uppercase tracking-widest text-j2fx-medium">O desafio</p><h2 className="text-2xl font-bold">Uma rotina que pede organização</h2><p className="mt-5 text-lg leading-8 text-slate-600">{project.problem}</p></div><div><p className="mb-3 text-sm font-bold uppercase tracking-widest text-j2fx-medium">A solução</p><h2 className="text-2xl font-bold">Tecnologia aplicada ao dia a dia</h2><p className="mt-5 text-lg leading-8 text-slate-600">{project.solution}</p></div></section>
      <section className="bg-slate-50 py-16"><div className="container-custom grid gap-10 md:grid-cols-2"><div><h2 className="text-3xl font-bold">O que o projeto reúne</h2><ul className="mt-7 space-y-4">{project.features.map(feature => <li key={feature} className="flex gap-3 leading-7"><Check className="mt-1 shrink-0 text-j2fx-medium" size={20} aria-hidden="true" />{feature}</li>)}</ul></div><div className="rounded-2xl border border-slate-200 bg-white p-8"><h3 className="text-xl font-bold">Para quem foi pensado</h3><p className="mt-4 leading-7 text-slate-600">{project.audience}</p><p className="mt-6 border-t border-slate-200 pt-6 text-sm leading-6 text-slate-500">{project.note}</p>{project.landing && <a href={project.landing} className="mt-6 inline-flex min-h-12 items-center gap-2 font-semibold text-j2fx-medium">Ver apresentação do produto <ArrowRight size={18} aria-hidden="true" /></a>}</div></div></section>
      <section className="container-custom py-16"><h2 className="text-3xl font-bold">Uma ideia para o seu negócio?</h2><p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">Conte o que você precisa apresentar, organizar ou automatizar. A J2FX ajuda a definir o caminho para seu site ou sistema.</p><div className="mt-7 flex flex-wrap gap-4"><a href={contactUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center rounded-lg bg-j2fx-medium px-6 py-3 font-semibold text-white">Conversar pelo WhatsApp</a><a href="/#contact" onClick={() => selectProjectInterest(project.name)} className="inline-flex min-h-12 items-center rounded-lg border border-slate-300 px-6 py-3 font-semibold">Solicitar orçamento</a></div></section>
    </main><footer className="border-t border-slate-200 py-6"><p className="container-custom text-sm text-slate-500">© {new Date().getFullYear()} J2FX Tecnologia · Sites, sistemas e infraestrutura de TI.</p></footer>
  </div>;
}
