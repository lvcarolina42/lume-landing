const ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-teal-600 fill-current" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    ),
    title: 'Sem papel, sem retrabalho',
    description:
      'A própria cliente preenche dados pessoais, histórico de saúde e assina o termo de responsabilidade — na tela do tablet da clínica ou pelo celular dela.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-teal-600 fill-current" aria-hidden="true">
        <path d="M17.5 3c-1.74 0-3.41.81-4.5 2.09C11.91 3.81 10.24 3 8.5 3 5.42 3 3 5.42 3 8.5c0 3.78 3.4 6.86 8.55 11.54L12 20.35l.45-.31C17.6 15.36 21 12.28 21 8.5 21 5.42 18.58 3 17.5 3zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
      </svg>
    ),
    title: 'Presencial ou por link/QR code',
    description:
      'Sem internet ou tablet sobrando? Gere um link com um toque, mande pelo WhatsApp ou mostre um QR code — a cliente preenche sem instalar nada.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-teal-600 fill-current" aria-hidden="true">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      </svg>
    ),
    title: 'Perguntas do seu jeito',
    description:
      'Comece com 24 perguntas clínicas prontas e edite, remova ou adicione as suas. Escolha se cada cliente tem uma ficha única ou uma nova a cada sessão.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-teal-600 fill-current" aria-hidden="true">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    ),
    title: 'Tudo revisável no prontuário',
    description:
      'Acompanhe o status de cada anamnese — pendente, em andamento, concluída — e veja respostas e assinatura direto na ficha da cliente.',
  },
]

export default function Anamnesis() {
  return (
    <section id="anamnese" className="bg-gray-50 py-24 px-6" aria-labelledby="anamnesis-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase">
            Anamnese digital
          </span>
          <h2
            id="anamnesis-heading"
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight"
          >
            A ficha de anamnese que sua cliente
            <br />
            <span className="text-gray-400 font-medium">preenche sozinha, sem papel.</span>
          </h2>
          <p className="text-gray-400 text-base max-w-lg mx-auto">
            Dados pessoais, histórico de saúde e assinatura digital — coletados antes da sessão, guardados no
            prontuário para sempre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-gray-100 p-6 flex gap-4 animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-teal-50 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-1.5">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
