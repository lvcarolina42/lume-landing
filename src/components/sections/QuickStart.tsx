const ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 text-teal-400 fill-current mx-auto" aria-hidden="true">
        <path d="M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10c4.42 0 8 2.24 8 5v1H4v-1c0-2.76 3.58-5 8-5z" opacity=".4" />
        <path d="M17.5 12l1.5 1.5-3.5 3.5-1.5-1.5z" />
        <path d="M20 8.5l-1.06-1.06L17.5 8.88 16.06 7.44 15 8.5l2.5 2.5z" />
      </svg>
    ),
    title: 'Comece sem criar conta',
    description:
      'Abra o app e já cadastre a primeira cliente. Entrar com Google, Apple ou e-mail é opcional — você decide isso quando quiser, sem perder nada do que já registrou.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 text-teal-400 fill-current mx-auto" aria-hidden="true">
        <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
      </svg>
    ),
    title: 'Fale o idioma da sua cliente',
    description:
      'O app está disponível em português, inglês e espanhol — pronto para atender clientes internacionais e profissionais fora do Brasil sem barreira de idioma.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 text-teal-400 fill-current mx-auto" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l4.93-1.38C8.42 21.5 10.15 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.11 13.53c-.22.63-1.28 1.21-1.76 1.28-.45.07-1.02.1-1.65-.1-.38-.12-.87-.28-1.5-.55-2.64-1.14-4.36-3.79-4.5-3.96-.13-.18-1.08-1.43-1.08-2.73s.68-1.94.92-2.2c.24-.26.53-.33.7-.33.18 0 .35.002.5.01.16.008.38-.06.6.46.22.53.75 1.83.82 1.97.07.13.11.29.02.47-.09.18-.13.29-.26.45-.13.16-.27.36-.39.48-.13.13-.26.27-.11.53.15.26.68 1.12 1.46 1.81 1 .89 1.85 1.17 2.11 1.3.26.13.41.11.56-.07.16-.18.66-.77.84-1.03.18-.26.35-.22.6-.13.24.09 1.53.72 1.79.85.26.13.44.2.5.31.07.11.07.65-.15 1.28z" />
      </svg>
    ),
    title: 'WhatsApp direto do app',
    description:
      'Compartilhe a ficha de anamnese e a arte de antes/depois sem sair do Lume. Se o número da cliente já está salvo, a conversa abre certinha — sem copiar e colar nada.',
  },
]

export default function QuickStart() {
  return (
    <section className="bg-gray-950 py-20 px-6" aria-labelledby="quickstart-heading">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block bg-teal-900/50 text-teal-400 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5 uppercase">
          Sem fricção
        </span>
        <h2 id="quickstart-heading" className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight">
          Feito pra você abrir e usar.
          <br />
          <span className="text-white/55 font-medium">Não pra você configurar.</span>
        </h2>
        <p className="text-white/55 text-sm mb-14 max-w-md mx-auto">
          Menos barreira na entrada, mais tempo cuidando de quem importa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ITEMS.map((item, i) => (
            <div key={item.title} className="animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
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
