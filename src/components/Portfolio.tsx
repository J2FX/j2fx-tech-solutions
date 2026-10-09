import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';


export default function Portfolio() {
  return <section id="projects" className="section-padding bg-white">
    <div className="container-custom">
      <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
        <div><p className="mb-3 text-sm font-bold uppercase tracking-widest text-j2fx-medium">Portfólio J2FX</p><h2 className="text-3xl font-bold text-j2fx-ink md:text-4xl">Sites que apresentam.<br />Sistemas que organizam.</h2></div>
        <p className="text-lg leading-8 text-slate-600">Conheça projetos de sites, sistemas web e automações desenvolvidos pela J2FX. Cada trabalho começa com um problema concreto e uma experiência pensada para quem vai usar.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ slug, name, category, icon: Icon, color, summary }) => <article key={slug} className="flex flex-col overflow-hidden rounded-2xl border border-slate-200">
          <div className={`flex min-h-40 items-center gap-5 p-7 ${color}`}><Icon size={44} strokeWidth={1.5} aria-hidden="true" /><div><p className="text-xs font-semibold uppercase tracking-wider">{category}</p><h3 className="mt-2 text-2xl font-bold">{name}</h3></div></div>
          <div className="flex flex-1 flex-col p-6"><p className="mb-6 leading-7 text-slate-600">{summary}</p><a href={`/projetos/${slug}`} className="mt-auto inline-flex min-h-12 items-center gap-2 font-semibold text-j2fx-medium">Conhecer projeto <ArrowRight size={18} aria-hidden="true" /></a></div>
        </article>)}
      </div>
    </div>
  </section>;
}

