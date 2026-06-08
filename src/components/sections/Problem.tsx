// H2s são o segundo sinal mais forte para SEO dentro de uma página.
// Cada card aqui descreve um problema real que o usuário digitaria no Google.

const PROBLEMS = [
  {
    title: 'Prontuário bagunçado',
    problem: 'Anota em papel, no WhatsApp ou numa planilha? Qualquer troca de celular e o histórico do cliente desaparece.',
    solution: 'Histórico em nuvem com busca por nome',
  },
  {
    title: 'Fotos em ângulos diferentes',
    problem: 'Sem referência do ângulo anterior, cada sessão parece um cliente diferente. E o antes/depois não convence ninguém.',
    solution: 'Câmera ghost garante ângulo idêntico',
  },
  {
    title: 'Horas editando antes/depois',
    problem: 'Pegar app de fotos, cortar, colocar lado a lado, adicionar logo... tempo que poderia estar em mais consultas.',
    solution: 'Antes/depois com logo montado em segundos',
  },
  {
    title: 'Registro de produtos precário',
    problem: 'Qual lote de botox você usou no último atendimento? Se não lembra de cabeça, é um risco clínico e jurídico.',
    solution: 'Ficha com lote, diluição e regiões aplicadas',
  },
]

export default function Problem() {
  return (
    <section className="bg-white py-20 px-6" aria-labelledby="problem-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 id="problem-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Você ainda trabalha assim?
          </h2>
          <p className="text-gray-500 text-lg">
            Se você reconhece mais de uma situação, o Lume vai te surpreender.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROBLEMS.map((p) => (
            <article
              key={p.title}
              className="group bg-red-50 border border-red-100 rounded-2xl p-7 hover:bg-white hover:border-teal-600 hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <h3 className="font-bold text-gray-900 text-base mb-2">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 group-hover:hidden">
                {p.problem}
              </p>
              <p className="text-teal-700 text-sm font-semibold hidden group-hover:flex items-center gap-2">
                <span className="text-teal-600">✓</span>
                {p.solution}
              </p>
            </article>
          ))}
        </div>

        {/* Parágrafo rico em keywords — o Google indexa esse texto corrido */}
        <div className="mt-10 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-7 text-center">
          <p className="text-white font-semibold text-base leading-relaxed">
            O Lume guarda o histórico de clientes em nuvem, garante o ângulo com câmera ghost,
            registra marca, lote e diluição de botox e filler. O antes/depois fica pronto em segundos.
          </p>
        </div>
      </div>
    </section>
  )
}
