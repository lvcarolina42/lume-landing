const ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-teal-600 fill-current" aria-hidden="true">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM7 12h5v5H7z" />
      </svg>
    ),
    title: 'Agenda com visão de semana e mês',
    description:
      'Cada cliente agendada aparece vinculada ao próprio prontuário. Veja horários livres e ocupados de relance, e abra a sessão agendada direto para o registro no momento do atendimento.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-teal-600 fill-current" aria-hidden="true">
        <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2 2 0 0 0-2-2c-1.05 0-1.96.54-2.5 1.35l-.5.65-.5-.65C11.96 3.54 11.05 3 10 3a2 2 0 0 0-2 2c0 .35.07.69.18 1H6c-1.11 0-1.99.89-1.99 2L4 19c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm10 15H4v-9h16v9zm0-11H4V8h16v1z" />
      </svg>
    ),
    title: 'Catálogo de serviços seu, do seu jeito',
    description:
      'Cadastre nome, cor, duração e preço de cada procedimento que você oferece uma única vez. Na hora de agendar, é só escolher o serviço — duração e cor já vêm preenchidas.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-teal-600 fill-current" aria-hidden="true">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    ),
    title: 'Agendamento vinculado ao serviço',
    description:
      'Nada de agendamentos soltos. Cada horário marcado carrega o serviço, a duração e o preço combinados — sem precisar redigitar ou lembrar de cabeça o que foi combinado com a cliente.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-teal-600 fill-current" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 11 12.41V6h2v5.59l4 4z" />
      </svg>
    ),
    title: 'Lembrete automático pra você',
    description:
      'O Lume te avisa localmente antes de cada horário marcado, mesmo sem internet — sem depender de anotar em outro app ou de decorar a agenda do dia.',
  },
]

export default function Scheduling() {
  return (
    <section id="agenda" className="bg-gray-50 py-24 px-6" aria-labelledby="scheduling-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase">
            Agenda e serviços
          </span>
          <h2
            id="scheduling-heading"
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight"
          >
            Chega de planilha separada
            <br />
            <span className="text-gray-400 font-medium">pra marcar horário.</span>
          </h2>
          <p className="text-gray-400 text-base max-w-lg mx-auto">
            Agenda, catálogo de serviços e prontuário no mesmo lugar — cada agendamento já nasce
            vinculado ao cliente, ao serviço e à sessão.
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
