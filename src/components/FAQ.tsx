import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: 'A J2FX atende empresas que já têm equipe interna de TI?',
      answer: 'Sim. Podemos atuar como apoio especializado para diagnóstico, projetos, segurança, cloud e sustentação de pontos críticos que o time interno não consegue priorizar sozinho.',
    },
    {
      question: 'O diagnóstico gratuito inclui o quê?',
      answer: 'Uma conversa inicial para entender ambiente, riscos, urgências e objetivos. A partir disso indicamos próximos passos e, quando necessário, uma proposta técnica mais detalhada.',
    },
    {
      question: 'Vocês fazem migração para cloud?',
      answer: 'Sim, desde que a migração faça sentido para o cenário. Avaliamos custo, dependências, segurança, backup e continuidade antes de recomendar cloud, híbrido ou ajustes no ambiente atual.',
    },
    {
      question: 'Também cuidam de backup e recuperação?',
      answer: 'Sim. Estruturamos rotinas de backup, validação e recuperação para reduzir o risco de perda de dados e acelerar a retomada em caso de falha.',
    },
    {
      question: 'Como funciona o suporte gerenciado?',
      answer: 'Definimos escopo, canais, prioridades e rotina de acompanhamento. A ideia é dar previsibilidade ao atendimento e reduzir interrupções recorrentes.',
    },
    {
      question: 'Preciso trocar tudo que uso hoje?',
      answer: 'Não necessariamente. A primeira etapa é entender o que já funciona, o que oferece risco e o que precisa evoluir. A recomendação parte do impacto real no negócio.',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-j2fx-medium">FAQ</p>
          <h2 className="mb-5 text-3xl font-bold text-j2fx-ink md:text-4xl">
            Perguntas antes de começar
          </h2>
          <p className="leading-8 text-slate-600">
            Algumas respostas rápidas para entender como a J2FX pode apoiar sua operação antes da primeira conversa técnica.
          </p>
        </div>

        <Accordion type="single" collapsible className="rounded-lg border border-slate-200 bg-slate-50 px-5">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`} className="border-slate-200">
              <AccordionTrigger className="text-left text-base font-bold text-j2fx-ink hover:text-j2fx-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="leading-7 text-slate-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
