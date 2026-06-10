const PAINS = [
  {
    emoji: '📱',
    title: 'A foto de como ela estava antes sumiu',
    body: 'A cliente quer ver o quanto mudou desde a primeira sessão. Você sabe que o resultado ficou incrível — mas a foto de seis meses atrás está enterrada entre centenas de imagens no WhatsApp. Se achar, o ângulo vai estar diferente e a comparação não vai fazer jus ao seu trabalho.',
    fix: 'Histórico visual completo, organizado por cliente e por data.',
  },
  {
    emoji: '📷',
    title: 'Sem ângulo consistente, o resultado parece menor',
    body: 'Uma foto depois não prova nada sem uma foto antes no mesmo ângulo e na mesma luz. Quando as imagens são inconsistentes, o trabalho excelente acaba parecendo "mais ou menos" — e a cliente não percebe o quanto evoluiu.',
    fix: 'Câmera ghost posiciona a última foto em sobreposição. Basta alinhar.',
  },
  {
    emoji: '⚖️',
    title: 'O que você aplicou na última sessão?',
    body: 'Marca, lote, diluição, regiões. Se essas informações estão na sua memória ou numa folha de papel, você sabe o risco que corre — tanto com a cliente quanto com qualquer auditoria.',
    fix: 'Ficha clínica completa, salva na nuvem, acessível na hora que precisar.',
  },
  {
    emoji: '📸',
    title: 'Cada antes/depois que você não posta é uma cliente que não chega',
    body: 'Você poderia ter conteúdo novo toda semana. Em vez disso, passa 40 minutos tentando juntar duas fotos num mesmo formato. Ou simplesmente não posta. O trabalho existe. O conteúdo, não.',
    fix: 'Antes/depois com sua logo, em quadrado, retrato ou stories. Em 30 segundos.',
  },
]

export default function Problem() {
  return (
    <section className="bg-gray-950 py-24 px-6" aria-labelledby="problem-heading">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <span className="inline-block bg-white/8 text-white/60 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5 uppercase">
            Soa familiar?
          </span>
          <h2
            id="problem-heading"
            className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight"
          >
            Você sabe o resultado que cria.
            <br />
            <span className="text-white/60">O problema é provar.</span>
          </h2>
          <p className="text-white/60 text-base max-w-lg mx-auto">
            Não tem profissional de estética que nunca viveu pelo menos uma dessas situações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PAINS.map((p) => (
            <div
              key={p.title}
              className="group bg-white/4 border border-white/8 rounded-2xl p-7 hover:border-teal-600/40 hover:bg-white/6 transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{p.emoji}</span>
              <h3 className="font-bold text-white text-base mb-3 leading-snug">{p.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">{p.body}</p>
              <p className="text-teal-400 text-sm font-medium flex items-start gap-2">
                <span className="mt-0.5 w-4 h-4 rounded-full bg-teal-400/15 flex items-center justify-center text-[9px] shrink-0">✓</span>
                {p.fix}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
