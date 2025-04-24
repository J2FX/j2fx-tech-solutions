
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    position: 'Diretora de TI',
    company: 'Empresa ABC',
    content: 'A J2FX revolucionou nossa infraestrutura de TI. A migração para cloud foi impecável, sem interrupções nos serviços.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    id: 2,
    name: 'Carlos Mendes',
    position: 'CEO',
    company: 'Startup XYZ',
    content: 'O sistema desenvolvido pela J2FX automatizou nossos processos principais, reduzindo custos operacionais em mais de 30%.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 3,
    name: 'Ana Oliveira',
    position: 'Gerente de Operações',
    company: 'Indústria 123',
    content: 'O suporte técnico é extremamente ágil e eficiente. Problemas são resolvidos rapidamente, minimizando downtime.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  }
];

const clientLogos = [
  { name: 'Empresa 1', logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTgwIDYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxODAiIGhlaWdodD0iNjAiIGZpbGw9IiNmMWYxZjEiLz48dGV4dCB4PSI5MCIgeT0iMzAiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM4ODg4ODgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkVtcHJlc2EgMTwvdGV4dD48L3N2Zz4=' },
  { name: 'Empresa 2', logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTgwIDYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxODAiIGhlaWdodD0iNjAiIGZpbGw9IiNmMWYxZjEiLz48dGV4dCB4PSI5MCIgeT0iMzAiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM4ODg4ODgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkVtcHJlc2EgMjwvdGV4dD48L3N2Zz4=' },
  { name: 'Empresa 3', logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTgwIDYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxODAiIGhlaWdodD0iNjAiIGZpbGw9IiNmMWYxZjEiLz48dGV4dCB4PSI5MCIgeT0iMzAiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM4ODg4ODgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkVtcHJlc2EgMzwvdGV4dD48L3N2Zz4=' },
  { name: 'Empresa 4', logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTgwIDYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxODAiIGhlaWdodD0iNjAiIGZpbGw9IiNmMWYxZjEiLz48dGV4dCB4PSI5MCIgeT0iMzAiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM4ODg4ODgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkVtcHJlc2EgNDwvdGV4dD48L3N2Zz4=' },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
      <div className="mb-6">
        <svg className="text-j2fx-accent h-8 w-8 mb-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z"></path>
        </svg>
        <p className="text-gray-600 italic">{testimonial.content}</p>
      </div>
      <div className="flex items-center mt-auto">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold text-j2fx-dark">{testimonial.name}</h3>
          <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState('testimonials');

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-j2fx-dark">
            Clientes <span className="text-j2fx-medium">Satisfeitos</span>
          </h2>
          <div className="mx-auto w-24 h-1 bg-j2fx-accent mb-6"></div>

          {/* Tabs */}
          <div className="inline-flex rounded-md shadow-sm mb-8">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === 'testimonials' 
                  ? 'bg-j2fx-medium text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('testimonials')}
            >
              Depoimentos
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === 'clients' 
                  ? 'bg-j2fx-medium text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('clients')}
            >
              Clientes
            </button>
          </div>
        </div>

        {activeTab === 'testimonials' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        )}

        {activeTab === 'clients' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-12 max-w-full grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
