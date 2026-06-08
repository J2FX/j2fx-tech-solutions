import { Code, Shield, Users } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-j2fx-dark">
            Sobre a <span className="text-j2fx-medium">J2FX</span>
          </h2>
          <div className="mx-auto w-24 h-1 bg-j2fx-accent mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unimos estratégia, design e tecnologia para criar sites que representam bem a empresa e ajudam o cliente certo a dar o próximo passo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-j2fx-dark">
              Mais do que colocar uma página no ar
            </h3>
            <p className="text-gray-600 mb-6">
              Cada projeto começa entendendo o negócio, o público e o objetivo comercial. A partir disso, construímos uma presença digital rápida, clara e preparada para gerar contatos.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-j2fx-dark">
              Por que escolher a J2FX?
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-j2fx-accent/20 flex items-center justify-center text-j2fx-medium">
                  <Shield size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-j2fx-dark">Base técnica confiável</h4>
                  <p className="text-gray-600">Cuidamos de domínio, hospedagem, HTTPS, performance e estrutura para o site ficar pronto para uso profissional.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-j2fx-accent/20 flex items-center justify-center text-j2fx-medium">
                  <Code size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-j2fx-dark">Projeto sob medida</h4>
                  <p className="text-gray-600">Nada de site genérico: a estrutura, os textos e as chamadas são pensados para o momento e a oferta da sua empresa.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-j2fx-accent/20 flex items-center justify-center text-j2fx-medium">
                  <Users size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-j2fx-dark">Atendimento próximo</h4>
                  <p className="text-gray-600">Acompanhamos do briefing à publicação, com comunicação clara e suporte para evoluir o site depois do lançamento.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-j2fx-accent/10 rounded-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-j2fx-medium/10 rounded-lg"></div>
            <div className="relative z-10 bg-white shadow-xl p-1 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
                alt="Equipe analisando presença digital de uma empresa"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
