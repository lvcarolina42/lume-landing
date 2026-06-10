const ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 text-teal-400 fill-current mx-auto" aria-hidden="true">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l6 2.67V11c0 3.83-2.57 7.43-6 8.93-3.43-1.5-6-5.1-6-8.93V7.67L12 5z" />
      </svg>
    ),
    title: 'Os dados das suas clientes são só seus',
    description:
      'Nenhum outro usuário vê sua lista. Cada profissional acessa apenas o que cadastrou. Histórico clínico é coisa séria — e tratamos assim.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 text-teal-400 fill-current mx-auto" aria-hidden="true">
        <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    ),
    title: 'Todo o histórico na nuvem, sempre com você',
    description:
      'Trocou de celular, formatou o aparelho, perdeu o telefone. Não importa. Seus registros e fotos estão na nuvem e acessíveis de qualquer dispositivo a qualquer hora.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 text-teal-400 fill-current mx-auto" aria-hidden="true">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
      </svg>
    ),
    title: 'Você decide o que acontece com seus dados',
    description:
      'Quer encerrar a conta? Todos os seus dados — fotos, fichas, histórico — são removidos permanentemente. Sem vestígios, sem exceções, sem enrolação.',
  },
]

export default function Security() {
  return (
    <section className="bg-gray-950 py-20 px-6" aria-labelledby="security-heading">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block bg-teal-900/50 text-teal-400 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5 uppercase">
          Privacidade
        </span>
        <h2 id="security-heading" className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight">
          Seus clientes confiam em você.
          <br />
          <span className="text-white/55 font-medium">Você pode confiar no Lume.</span>
        </h2>
        <p className="text-white/55 text-sm mb-14 max-w-md mx-auto">
          Desenvolvido em conformidade com a LGPD. Seus dados nunca são compartilhados com terceiros.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
